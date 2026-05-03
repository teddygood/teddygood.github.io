---
title: "Ruff"
date: '2026-04-23'
draft: false
sidebar_position: 6
---

Ruff는 Rust로 작성된 매우 빠른 Python 린터(linter)이자 포매터(formatter)다. 단순히 빠른 도구라기보다, 여러 Python 코드 품질 도구를 하나의 CLI 아래로 통합하려는 프로젝트로 보는 편이 정확하다.

## Ruff가 바꾸는 것

Ruff의 핵심은 속도만이 아니다. `ruff check`로 lint와 자동 수정을, `ruff format`으로 포맷팅을 처리하면서, 기존에 여러 도구로 쪼개져 있던 품질 점검 흐름을 한 곳으로 모으려는 데 의미가 있다.

Ruff를 이해할 때 중요한 점은 "Ruff가 새 규칙 체계를 만든다"기보다 "기존 Python 품질 도구들이 제공하던 규칙과 기능 일부를 하나의 CLI 안에 모은다"는 데 있다.

## 실제로 해 주는 일

- Flake8 계열 규칙 검사
- 일부 import 정리와 규칙 기반 자동 수정
- docstring 관련 규칙 일부 통합
- formatter를 통한 코드 포맷팅
- cache와 계층형 설정 기반의 빠른 반복 실행

공식 문서도 Ruff를 Flake8, 여러 유명 플러그인, `isort`, `pydocstyle`, `pyupgrade`, `autoflake`, Black의 역할 일부를 한 CLI 안으로 모으는 도구로 설명한다.

## 그렇다고 다 끝나는 것은 아니다

Ruff가 모든 Python 품질 도구를 완전히 같은 깊이로 대체하는 것은 아니다. 특히 Pylint의 깊은 설계 지적과 동일하다고 보면 과장이다. 또한 import 정렬은 현재 `ruff format`이 아니라 lint와 fix 흐름으로 처리한다.

즉 Ruff는 "매우 넓은 범위를 빠르게 덮는 통합 도구"에는 강하지만, 모든 세부 철학을 완전히 하나로 대체한다고 보기는 어렵다.

## `check`와 `format`

Ruff 문서에서 가장 먼저 구분해야 하는 것은 `ruff check`와 `ruff format`이다.

- `ruff check`: 규칙 검사와 일부 자동 수정
- `ruff format`: 코드 포맷팅

이 둘은 같은 도구에 들어 있지만 역할은 다르다. import 정렬처럼 formatter가 아니라 lint/fix 쪽에 걸린 기능도 있기 때문에, Ruff를 단순히 "formatter"나 "linter" 하나로만 보면 구조가 잘 안 보인다.

## 다른 도구와 나란히 보면

- `flake8`: Ruff는 Flake8의 핵심 규칙과 여러 유명 플러그인 규칙을 자체 구현한다.
- `pydocstyle`: docstring 검사도 Ruff 안으로 가져올 수 있다.
- `black`: `ruff format`은 Black의 drop-in replacement를 목표로 한다.
- `pylint`: Ruff는 속도와 통합 폭, Pylint는 더 깊은 Python 추론이 강점이다.

## 간단한 사용 예

```bash
pip install ruff
ruff check .
ruff check --fix .
ruff check --select I --fix .
ruff format .
ruff format --check .
```

## References

- [Ruff Overview](https://docs.astral.sh/ruff/)
- [The Ruff Linter](https://docs.astral.sh/ruff/linter/)
- [The Ruff Formatter](https://docs.astral.sh/ruff/formatter/)
- [Ruff FAQ](https://docs.astral.sh/ruff/faq/)
- [Configuring Ruff](https://docs.astral.sh/ruff/configuration/)

## Link

- [Flake8](./flake8.md)
- [Black](./black.md)
- [Pylint](./pylint.md)
