import { promises as fs } from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const contentRoots = ["wiki", "blog"];
const markdownExtensions = new Set([".md", ".mdx"]);
const violations = [];

async function scanFile(filePath) {
  const content = await fs.readFile(filePath, "utf8");
  const lines = content.split(/\r?\n/);

  lines.forEach((line, index) => {
    if (!line.includes("![[")) return;

    const matches = line.match(/!\[\[[^\]]+\]\]/g);
    if (!matches) return;

    violations.push({
      file: path.relative(repoRoot, filePath),
      line: index + 1,
      matches,
    });
  });
}

async function walk(dirPath) {
  let entries = [];
  try {
    entries = await fs.readdir(dirPath, { withFileTypes: true });
  } catch {
    return;
  }

  await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
        return;
      }

      if (!entry.isFile()) return;
      const ext = path.extname(entry.name).toLowerCase();
      if (!markdownExtensions.has(ext)) return;
      await scanFile(fullPath);
    }),
  );
}

async function main() {
  await Promise.all(contentRoots.map((root) => walk(path.join(repoRoot, root))));

  if (violations.length === 0) {
    console.log("No Obsidian image wiki links found.");
    return;
  }

  console.error("Obsidian image wiki links are not allowed in 40. Blog:");
  for (const item of violations) {
    console.error(`${item.file}:${item.line} -> ${item.matches.join(", ")}`);
  }
  process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
