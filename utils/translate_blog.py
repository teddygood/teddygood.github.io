#!/usr/bin/env python3
"""
Blog Translation Script using Upstage Solar Pro 3 API

Translates Korean blog posts to English for Docusaurus i18n.
Output: i18n/en/docusaurus-plugin-content-blog/

Usage:
    python utils/translate_blog.py                    # Translate all posts
    python utils/translate_blog.py --test             # Test with 1 post
    python utils/translate_blog.py --post "2025-01-18-2024-Recap"  # Specific post
"""

import os
import sys
import time
import argparse
from pathlib import Path
from typing import Optional

# Load .env file if exists
from dotenv import load_dotenv
load_dotenv()

try:
    from openai import OpenAI
    import frontmatter
    from tqdm import tqdm
except ImportError:
    print("Missing dependencies. Install with:")
    print("  pip install openai python-frontmatter tqdm python-dotenv")
    sys.exit(1)

# Configuration
BASE_DIR = Path(__file__).parent.parent
BLOG_DIR = BASE_DIR / "blog"
OUTPUT_DIR = BASE_DIR / "i18n" / "en" / "docusaurus-plugin-content-blog"

# Rate limiting: 100 RPM = ~0.6s per request, but we use 1s for safety
REQUEST_DELAY = 1.0

# Available models
MODEL_OPTIONS = {
    "pro3": "solar-pro3",   # Free tier, latest model
    "pro2": "solar-pro2",   # Tier-based, stable
}
DEFAULT_MODEL = "pro3"

# System prompt for natural English translation
SYSTEM_PROMPT = """You are a professional Korean-to-English translator specializing in technical blog posts.

TRANSLATION GUIDELINES:
1. Translate Korean text into natural, fluent, and idiomatic English.
2. Maintain the author's personal voice and conversational tone.
3. Use appropriate English expressions rather than literal translations.
4. Preserve all markdown formatting (headers ##, lists -, code blocks ```, links [], images ![]).
5. Specific translations:
   - 교보문고 → Kyobobook
   - 생활코딩 → Opentutorials (생활코딩)
6. For BOOK REVIEWS:
   - If the book is a TRANSLATED book (originally written in English or another language), use the ORIGINAL English title.
   - Example: "클린 코드" → "Clean Code", "실용주의 프로그래머" → "The Pragmatic Programmer"
   - If you don't know the original title, keep the Korean title with romanization.
7. Do NOT translate:
   - Code snippets and technical commands
   - URLs and file paths
   - Korean author names for Korean-original books
8. Keep emojis as they are.
9. Preserve the original paragraph structure.

OUTPUT: Return ONLY the translated text without any explanation or preamble."""


def get_client() -> OpenAI:
    """Initialize OpenAI client with Upstage configuration."""
    api_key = os.environ.get("UPSTAGE_API_KEY")
    if not api_key:
        print("Error: UPSTAGE_API_KEY environment variable not set.")
        print("Set it with: $env:UPSTAGE_API_KEY='your-api-key'  (PowerShell)")
        print("Or: set UPSTAGE_API_KEY=your-api-key  (CMD)")
        sys.exit(1)
    
    return OpenAI(
        api_key=api_key,
        base_url="https://api.upstage.ai/v1"
    )


def translate_text(client: OpenAI, text: str, model_name: str, max_retries: int = 5) -> str:
    """Translate Korean text to English using specified Solar model.
    
    Implements exponential backoff for rate limit (429) errors.
    Tier 1 limits: 400 RPM, 150,000 TPM
    """
    if not text or not text.strip():
        return text
    
    text_preview = text[:50].replace('\n', ' ')
    print(f"    📝 Translating: '{text_preview}...' ({len(text)} chars)")
    
    base_delay = 2  # Base delay for exponential backoff
    
    for attempt in range(max_retries):
        try:
            response = client.chat.completions.create(
                model=model_name,
                messages=[
                    {"role": "system", "content": SYSTEM_PROMPT},
                    {"role": "user", "content": text}
                ],
                temperature=0.3,
                timeout=180,  # 3 minute timeout for long texts
            )
            result = response.choices[0].message.content.strip()
            print(f"    ✅ Done ({len(result)} chars)")
            return result
        except Exception as e:
            error_str = str(e).lower()
            
            # Check for rate limit error (429)
            if "429" in str(e) or "rate" in error_str or "too many" in error_str:
                wait_time = base_delay * (2 ** attempt)  # Exponential backoff: 2, 4, 8, 16, 32 seconds
                print(f"    ⏳ Rate limit hit. Waiting {wait_time}s before retry {attempt + 1}/{max_retries}...")
                time.sleep(wait_time)
            elif attempt < max_retries - 1:
                print(f"    ⚠️ Retry {attempt + 1}/{max_retries} after error: {e}")
                time.sleep(base_delay)
            else:
                print(f"    ❌ Failed after {max_retries} attempts: {e}")
                raise


def translate_frontmatter_field(client: OpenAI, value: str, model_name: str) -> str:
    """Translate a single frontmatter field (title/description)."""
    # Short prompt for frontmatter fields
    response = client.chat.completions.create(
        model=model_name,
        messages=[
            {"role": "system", "content": "Translate the following Korean text to natural English. Return ONLY the translation."},
            {"role": "user", "content": value}
        ],
        temperature=0.3,
    )
    return response.choices[0].message.content.strip()


def get_blog_posts() -> list[Path]:
    """Get all blog post directories."""
    posts = []
    for item in sorted(BLOG_DIR.iterdir()):
        if item.is_dir() and not item.name.startswith((".", "assets")):
            posts.append(item)
    return posts


def find_markdown_file(post_dir: Path) -> Optional[Path]:
    """Find the markdown file in a blog post directory."""
    for file in post_dir.iterdir():
        if file.suffix == ".md":
            return file
    return None


def translate_post(client: OpenAI, post_dir: Path, model_name: str, force: bool = False) -> bool:
    """Translate a single blog post."""
    post_name = post_dir.name
    print(f"\n{'='*40}")
    print(f"🔄 Starting: {post_name}")
    
    # Find source markdown file
    src_file = find_markdown_file(post_dir)
    if not src_file:
        print(f"  ⚠️ No markdown file found in {post_name}")
        return False
    
    # Define output path
    dest_dir = OUTPUT_DIR / post_name
    dest_file = dest_dir / src_file.name
    
    # Skip if already translated (unless force)
    if dest_file.exists() and not force:
        print(f"  ⏭️ Already translated: {post_name}")
        return True
    
    try:
        # Load and parse markdown with frontmatter
        post = frontmatter.load(src_file)
        
        # Translate title (remove emoji prefix if present, translate, then maybe add back)
        title = post.get("title", "")
        if title:
            # Handle emoji prefix like "✨2024 회고"
            emoji_prefix = ""
            if title and not title[0].isalnum():
                # Check if first char is emoji
                for i, char in enumerate(title):
                    if char.isalnum() or char.isspace():
                        emoji_prefix = title[:i]
                        title = title[i:]
                        break
            
            translated_title = translate_frontmatter_field(client, title, model_name)
            post["title"] = emoji_prefix + translated_title
            time.sleep(REQUEST_DELAY)
        
        # Translate description
        description = post.get("description", "")
        if description:
            post["description"] = translate_frontmatter_field(client, description, model_name)
            time.sleep(REQUEST_DELAY)
        
        # Translate keywords (if any Korean keywords exist)
        keywords = post.get("keywords", [])
        if keywords:
            translated_keywords = []
            for kw in keywords:
                # Check if keyword contains Korean characters
                if any('\uac00' <= char <= '\ud7a3' for char in str(kw)):
                    translated_kw = translate_frontmatter_field(client, str(kw), model_name)
                    translated_keywords.append(translated_kw)
                    time.sleep(REQUEST_DELAY)
                else:
                    translated_keywords.append(kw)
            post["keywords"] = translated_keywords
        
        # Translate main content
        if post.content:
            post.content = translate_text(client, post.content, model_name)
            time.sleep(REQUEST_DELAY)
        
        # Create output directory and write translated post
        dest_dir.mkdir(parents=True, exist_ok=True)
        with open(dest_file, "w", encoding="utf-8") as f:
            f.write(frontmatter.dumps(post))
        
        print(f"  ✅ Translated: {post_name}")
        return True
        
    except Exception as e:
        print(f"  ❌ Error translating {post_name}: {e}")
        return False


def main():
    parser = argparse.ArgumentParser(description="Translate Korean blog posts to English")
    parser.add_argument("--test", action="store_true", help="Test mode: translate only 1 post")
    parser.add_argument("--post", type=str, help="Translate a specific post by directory name")
    parser.add_argument("--force", action="store_true", help="Force re-translation of existing files")
    parser.add_argument("--model", type=str, choices=["pro3", "pro2"], default=DEFAULT_MODEL,
                        help="Model to use: pro3 (default, free) or pro2 (tier-based)")
    args = parser.parse_args()
    
    # Get the actual model name
    model_name = MODEL_OPTIONS[args.model]
    
    print("=" * 60)
    print(f"Blog Translation Script - Upstage {model_name.upper()}")
    print("=" * 60)
    
    # Initialize client
    client = get_client()
    print(f"✅ API client initialized")
    print(f"📁 Source: {BLOG_DIR}")
    print(f"📁 Output: {OUTPUT_DIR}")
    print()
    
    # Get posts to translate
    if args.post:
        post_dir = BLOG_DIR / args.post
        if not post_dir.exists():
            print(f"❌ Post not found: {args.post}")
            sys.exit(1)
        posts = [post_dir]
    else:
        posts = get_blog_posts()
    
    if args.test:
        posts = posts[:1]
        print(f"🧪 Test mode: translating 1 post only")
    
    print(f"📝 Posts to translate: {len(posts)}")
    print()
    
    # Translate posts
    success_count = 0
    total = len(posts)
    for i, post_dir in enumerate(posts, 1):
        print(f"\n[{i}/{total}] Processing...")
        if translate_post(client, post_dir, model_name, force=args.force):
            success_count += 1
    
    print()
    print("=" * 60)
    print(f"✅ Successfully translated: {success_count}/{len(posts)} posts")
    print(f"📁 Output directory: {OUTPUT_DIR}")
    print()
    print("Next steps:")
    print("  1. Review translated posts in the output directory")
    print("  2. Build English site: yarn build --locale en")
    print("  3. Test locally: yarn serve")
    print("=" * 60)


if __name__ == "__main__":
    main()
