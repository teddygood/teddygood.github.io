import os
import yaml
import re
from pathlib import Path
from dotenv import load_dotenv
from openai import OpenAI

# Load environment variables
load_dotenv()
API_KEY = os.getenv("UPSTAGE_API_KEY")
BASE_URL = "https://api.upstage.ai/v1/solar"

client = OpenAI(
    api_key=API_KEY,
    base_url=BASE_URL
)

BASE_DIR = Path(__file__).parent.parent
TARGET_DIR = BASE_DIR / "i18n" / "en" / "docusaurus-plugin-content-blog"

SYSTEM_PROMPT = """You are a title cleaner.
Your task is to extract ONLY the blog post title from the provided text.
The text might contain the translated title followed by an explanation, notes, or alternative translations.
REMOVE all such explanations, notes (starting with 'Note:', 'Since...', etc.), and extra formatting like '**'.
Return ONLY the clean title string.

Example Input: "✨November Reflection (Note: The phrase...)"
Example Output: "✨November Reflection"

Example Input: "**My Diary**"
Example Output: "My Diary"
"""

def refine_title(text):
    # Heuristic check: if title is short and clean, skip API call to save time/cost
    # But if it contains "Note:", "(", or is very long, check it.
    if len(text) < 50 and "Note" not in text and "(" not in text and ":" not in text:
        return text

    try:
        response = client.chat.completions.create(
            model="solar-pro",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": text}
            ],
            temperature=0
        )
        return response.choices[0].message.content.strip().strip('"').strip("'")
    except Exception as e:
        print(f"  ❌ API Error: {e}")
        return text

def process_titles():
    print(f"📂 Scanning titles in: {TARGET_DIR}")
    
    for root, dirs, files in os.walk(TARGET_DIR):
        for file in files:
            if not file.endswith(".md"):
                continue
                
            file_path = Path(root) / file
            
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            # Parse frontmatter
            if content.startswith("---"):
                parts = content.split("---", 2)
                if len(parts) >= 3:
                    frontmatter_raw = parts[1]
                    body = parts[2]
                    
                    try:
                        fm = yaml.safe_load(frontmatter_raw)
                        original_title = fm.get("title", "")
                        
                        if not original_title:
                            continue

                        # Check if title looks suspicious
                        # Suspicious: contains "Note:", newlines, or is unusually long (> 80 chars)
                        is_suspicious = (
                            "Note:" in original_title or 
                            "Translation:" in original_title or
                            "\n" in original_title or
                            len(original_title) > 80 or
                            "**" in original_title
                        )

                        if is_suspicious:
                            print(f"🔍 Checking: {file}")
                            print(f"   Original: {original_title}")
                            
                            new_title = refine_title(original_title)
                            
                            if new_title != original_title:
                                print(f"   ✅ Fixed: {new_title}")
                                fm["title"] = new_title
                                
                                # Reconstruct file
                                new_frontmatter = yaml.dump(fm, allow_unicode=True, sort_keys=False).strip()
                                new_content = f"---\n{new_frontmatter}\n---{body}"
                                
                                with open(file_path, "w", encoding="utf-8") as f:
                                    f.write(new_content)
                            else:
                                print("   Example: No change needed.")
                    
                    except Exception as e:
                        print(f"[{file}] Error parsing/processing: {e}")

if __name__ == "__main__":
    process_titles()
