---
title: "Pylint"
date: '2026-04-23'
draft: false
sidebar_position: 4
---

Pylint는 Python 코드를 실행하지 않고 분석해서 오류 가능성, 코드 스멜(code smell), 코딩 표준 위반, 리팩터링 힌트를 함께 보여주는 정적 분석기(static code analyser)다. editor, local lint, CI, code review 단계에서 코드의 구조적 문제를 미리 확인할 때 쓴다.

## Pylint가 다른 이유

Pylint는 단순 스타일 검사보다 한 단계 더 깊게 들어간다. AST(Abstract Syntax Tree)를 바탕으로 잠재적 오류, naming, design, refactoring 계열 경고를 함께 보고하기 때문이다.

## 실제로는 이런 신호를 준다

- 잠재적 오류 탐지
- 불필요한 변수와 import 경고
- naming, design, refactoring 계열 경고
- 플러그인을 통한 프레임워크별 추가 규칙

Pylint는 규칙이 많고 분석이 깊은 만큼, 한 번 돌렸을 때 표시되는 경고 종류도 비교적 다양한 편이다. 그래서 단순 스타일 위반보다 코드 구조와 유지보수성에 가까운 문제까지 함께 보게 된다.

## Flake8과 다른 점

Flake8이 PyFlakes, pycodestyle, McCabe 기반의 기본 lint와 스타일 위반을 넓게 모은다면, Pylint는 naming, design, refactoring 계열 경고를 더 많이 포함한다. 그래서 둘은 겹치면서도 무게중심이 다르다.

## 범위의 한계

Pylint는 코드 포매터가 아니다. 코드 모양을 통일하려면 `black`이나 `ruff format` 같은 도구가 별도로 필요하다. 즉 Pylint는 코드의 형태보다 규칙 위반과 구조적 신호를 보는 도구다.

## Ruff나 Flake8과 비교하면

- `flake8`: 더 가볍고 플러그인 중심인 기본 린터다.
- `ruff`: 빠른 규칙 검사와 자동 수정 통합이 강점이다.
- `black`: 형태를 맞추는 도구이고, 의미 분석은 하지 않는다.

## 간단한 사용 예

```bash
pip install pylint
pylint src/
pylint --disable=missing-module-docstring src/
```

## References

- [Pylint documentation](https://pylint.readthedocs.io/en/stable/)
- [Pylint index page](https://pylint.readthedocs.io/)

## Link

- [Flake8](./flake8.md)
- [Ruff](./ruff.md)
