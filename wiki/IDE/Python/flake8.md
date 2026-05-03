---
title: "Flake8"
date: '2026-04-23'
draft: false
sidebar_position: 2
---

Flake8은 Python 코드에서 스타일 위반, 기본 lint, 복잡도 경고를 한 번에 확인하는 린터(linter)다. 핵심은 규칙 엔진 하나라기보다 `pyflakes`, `pycodestyle`, `mccabe`를 공통 CLI 아래에서 묶는 허브라는 점이다.

## Flake8이 맡는 일

Flake8은 Python 코드에서 가장 기본적인 경고를 넓게 모아 보여 주는 쪽에 가깝다. 정의되지 않은 이름, 사용하지 않는 import, PEP 8 스타일 위반, 복잡도 경고처럼 "코드를 훑었을 때 먼저 걸러내고 싶은 것"을 한곳에 모은다.

## 무엇을 보여 주는가

- 사용하지 않는 import, 정의되지 않은 이름 같은 기본 lint
- PEP 8 기반 스타일 위반 탐지
- 복잡도 경고
- 오류 코드 기반 선택/무시

이 구조 덕분에 "무엇을 얼마나 엄격하게 볼지"를 오류 코드 단위로 조절하기 쉽다.

## 여기서 기대하면 안 되는 것

Flake8은 포매터(formatter)가 아니다. import를 직접 정렬하거나 코드를 다시 써 주지 않는다. 또한 Pylint처럼 더 깊은 의미 분석을 통해 설계 차원의 피드백을 주는 도구도 아니다.

즉 Flake8은 "기본적인 품질 경고를 빠르게 모아 본다"는 역할에 가장 잘 맞는다.

## 구조상 중요한 점

Flake8을 이해할 때 핵심은 "단일 검사기"가 아니라 "여러 검사기를 묶는 공통 입구"라는 점이다. 그래서 Flake8은 플러그인 생태계와 함께 이야기되는 경우가 많다.

## 다른 도구와의 관계

- `Pylint`: 더 깊은 정적 분석 쪽에 가깝다.
- `Black`: 문제를 찾는 도구가 아니라 코드 모양을 다시 쓰는 도구다.
- `Ruff`: Flake8의 핵심 규칙과 여러 유명 플러그인 규칙을 자체 구현한다.

## 간단한 사용 예

```bash
pip install flake8
flake8 .
flake8 --select F401,F821 src/
flake8 --max-complexity 10 src/
```

## References

- [Using Flake8](https://flake8.pycqa.org/en/stable/user/)
- [Glossary of Terms Used in Flake8 Documentation](https://flake8.pycqa.org/en/stable/glossary.html)

## Link

- [Pylint](./pylint.md)
- [Black](./black.md)
- [Ruff](./ruff.md)
