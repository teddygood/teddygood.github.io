---
title: "pydocstyle"
date: '2026-04-23'
draft: false
sidebar_position: 3
---

`pydocstyle`는 Python 코드 전체가 아니라 docstring만 집중적으로 검사하는 도구다. 핵심은 PEP 257 같은 docstring 컨벤션을 검사한다는 점이다.

## docstring만 따로 보는 이유

코드 스타일 검사 도구가 소스 전체를 넓게 본다면, `pydocstyle`는 함수, 클래스, 모듈에 붙는 docstring의 구조와 작성 컨벤션을 좁고 깊게 본다. 범위를 줄인 대신, docstring 컨벤션에서 벗어난 부분은 더 또렷하게 보여 준다.

## 어떤 부분을 잡아내나

- docstring 누락 탐지
- 삼중 큰따옴표 규칙 확인
- multi-line docstring 구조 검사
- PEP 257 기반 `D` 계열 규칙 보고

즉 `pydocstyle`은 docstring이 "있느냐"뿐 아니라 PEP 257의 기본 컨벤션에 맞게 쓰였는지도 점검하는 도구다.

## 범위는 분명하다

`pydocstyle`는 전체 코드 스타일 검사기나 formatter가 아니다. unused import, 네이밍, 타입 문제, 코드 재배치 같은 것은 다루지 않는다. 전체 코드 품질까지 보려면 linter, formatter, type checker와 역할을 나눠 써야 한다.

## PEP 257과의 관계

`pydocstyle` 문서를 읽다 보면 결국 PEP 257로 이어지게 된다. 이 도구는 docstring을 아무 방식으로나 검사하는 것이 아니라, PEP 257에서 설명하는 docstring 컨벤션을 기준으로 문제를 보여 주기 때문이다.

## 다른 도구와의 관계

- `flake8`: 기본 구성은 스타일/lint 전반을 보지만 docstring 규칙은 플러그인으로 붙이는 쪽에 가깝다.
- `black`: 코드 형태를 고치지만 docstring 규칙 준수 자체를 판정하는 도구는 아니다.
- `ruff`: pydocstyle의 여러 `D` 계열 규칙을 자체 rule로 지원한다.

## 간단한 사용 예

```bash
pip install pydocstyle
pydocstyle .
pydocstyle src/
```

## References

- [pydocstyle documentation](https://www.pydocstyle.org/en/stable/)
- [PEP 257 - Docstring Conventions](https://peps.python.org/pep-0257/)

## Link

- [Flake8](./flake8.md)
- [Black](./black.md)
- [Ruff](./ruff.md)
