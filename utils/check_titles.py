import os
import yaml
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent
TARGET_DIR = BASE_DIR / "i18n" / "en" / "docusaurus-plugin-content-blog"

def check_titles():
    print(f"📂 Scanning titles in: {TARGET_DIR}")
    print("-" * 60)
    
    for root, dirs, files in os.walk(TARGET_DIR):
        for file in files:
            if not file.endswith(".md"):
                continue
                
            file_path = Path(root) / file
            
            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                    
                # Parse frontmatter manually to be robust
                if content.startswith("---"):
                    parts = content.split("---", 2)
                    if len(parts) >= 3:
                        frontmatter_raw = parts[1]
                        try:
                            fm = yaml.safe_load(frontmatter_raw)
                            title = fm.get("title", "NO TITLE FOUND")
                            print(f"[{file}]")
                            print(f"  ➜ {title}")
                        except Exception as e:
                            print(f"[{file}] Error parsing YAML: {e}")
            except Exception as e:
                print(f"[{file}] Error reading file: {e}")

if __name__ == "__main__":
    check_titles()
