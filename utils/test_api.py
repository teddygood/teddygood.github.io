#!/usr/bin/env python3
"""
Response time benchmark for different content lengths
"""
import os
import time
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key=os.environ.get("UPSTAGE_API_KEY"),
    base_url="https://api.upstage.ai/v1"
)

test_cases = [
    ("10 chars", "안녕하세요"),
    ("50 chars", "안녕하세요, 만나서 반갑습니다. 오늘 날씨가 좋네요."),
    ("200 chars", "안녕하세요. 저는 개발자입니다. 블로그에 기술 글을 작성하고 있습니다. 오늘은 Python과 AI에 대해 이야기해보려고 합니다. 최근에 LLM 기술이 많이 발전했네요. 특히 번역 분야에서 큰 발전이 있었습니다."),
    ("500 chars", "안녕하세요. 저는 개발자입니다. 블로그에 기술 글을 작성하고 있습니다. 오늘은 Python과 AI에 대해 이야기해보려고 합니다. 최근에 LLM 기술이 많이 발전했네요. 특히 번역 분야에서 큰 발전이 있었습니다. 기존의 번역 모델들은 문맥을 잘 이해하지 못하는 경우가 많았지만, 최신 LLM들은 문맥을 파악하고 자연스러운 번역을 제공합니다. 이번 글에서는 Solar Pro 3 모델을 사용하여 블로그 글을 번역하는 방법에 대해 알아보겠습니다. Solar Pro 3는 102B 파라미터를 가진 MoE 아키텍처 모델로, 한국어와 영어 번역에 최적화되어 있습니다."),
]

print("=" * 60)
print("Response Time Benchmark - Solar Pro 3")
print("=" * 60)

for name, text in test_cases:
    print(f"\n🧪 {name} (actual: {len(text)} chars)")
    start = time.time()
    try:
        response = client.chat.completions.create(
            model="solar-pro3",
            messages=[
                {"role": "system", "content": "Translate Korean to English."},
                {"role": "user", "content": text}
            ],
            temperature=0.3,
            timeout=120,
        )
        elapsed = time.time() - start
        result = response.choices[0].message.content
        print(f"   ⏱️ Time: {elapsed:.2f}s")
        print(f"   📝 Output: {len(result)} chars")
        print(f"   📊 Speed: {len(result)/elapsed:.1f} chars/s")
    except Exception as e:
        elapsed = time.time() - start
        print(f"   ❌ Error after {elapsed:.2f}s: {e}")

print("\n" + "=" * 60)
print("Benchmark complete!")
