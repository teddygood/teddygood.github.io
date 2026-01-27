import os
import re
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent
TARGET_DIR = BASE_DIR / "i18n" / "en" / "docusaurus-plugin-content-blog"

def normalize_truncate_marker():
    count_added = 0
    count_updated = 0
    count_skipped = 0
    
    print(f"📂 Scanning: {TARGET_DIR}")
    
    # Regex for various truncate variations
    truncate_pattern = re.compile(r'(<!--\s*truncate\s*-->|\{/\*\s*truncate\s*\*/\})', re.IGNORECASE)
    
    for root, dirs, files in os.walk(TARGET_DIR):
        for file in files:
            if not file.endswith(".md"):
                continue
                
            file_path = Path(root) / file
            
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            # Check if any truncate marker exists
            match = truncate_pattern.search(content)
            
            if match:
                # If found, replace with standard format if it looks different
                if match.group(0) != "<!-- truncate -->":
                    new_content = truncate_pattern.sub("<!-- truncate -->", content)
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    print(f"  🔄 Updated marker: {file}")
                    count_updated += 1
                else:
                    print(f"  ⏭️ Skipped (already standard): {file}")
                    count_skipped += 1
            else:
                # Add marker if missing (same logic as before)
                lines = content.splitlines()
                frontmatter_count = 0
                insert_index = -1
                
                for i, line in enumerate(lines):
                    if line.strip() == "---":
                        frontmatter_count += 1
                        if frontmatter_count == 2:
                            insert_index = i + 1
                            break
                
                if insert_index != -1:
                    lines.insert(insert_index, "")
                    lines.insert(insert_index + 1, "<!-- truncate -->")
                    lines.insert(insert_index + 2, "")
                    
                    new_content = "\n".join(lines)
                    
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    
                    print(f"  ✅ Added marker: {file}")
                    count_added += 1
                else:
                    print(f"  ⚠️ Skipped (no frontmatter found): {file}")
                    count_skipped += 1

    print("\n" + "="*40)
    print(f"Result: Added {count_added}, Updated {count_updated}, Skipped {count_skipped} files.")

if __name__ == "__main__":
    normalize_truncate_marker()
