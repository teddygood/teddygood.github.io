---
title: "Black"
date: '2026-04-23'
draft: false
sidebar_position: 5
---

Black은 Python 코드를 자동으로 같은 모양으로 재작성하는 포매터(formatter)다. CLI, editor integration, pre-commit, CI에서 코드 스타일을 맞출 때 많이 쓴다. 공식 문서는 Black을 "uncompromising code formatter"로 소개하고, 손으로 맞추던 포맷의 세부 제어를 도구에 맡기는 방식이라고 설명한다.

## Black이 해결하는 문제

Black은 Python이 허용하는 여러 배치 방식 가운데 하나를 사람이 고르는 대신, 도구가 일정한 방식으로 다시 쓰게 만든다. 그래서 Black을 이해할 때 핵심은 "예쁘게 정리해 준다"보다 "같은 입력을 일관된 스타일로 재작성한다"는 쪽에 있다.

## 맡는 범위는 명확하다

- 공백과 줄바꿈 정리
- line length 기준에 맞춘 재배치
- quote 정규화
- trailing comma 활용
- 파일 단위 in-place formatting

Black의 강점은 "무엇을 고칠지 세세하게 선택하게 해 주는 것"이 아니라, 설정을 적게 두고도 일관된 결과를 내는 데 있다.

## 설정 선택지를 줄이는 방식

Black은 formatter이지만 스타일 옵션을 많이 열어 두지 않는다. 공식 문서도 Black이 여러 옵션을 갖고 있기는 하지만, 스타일 옵션은 의도적으로 제한되어 있고 드물게 추가된다고 설명한다.

## 포매터의 한계

Black은 lint 도구가 아니다. unused import, 정의되지 않은 이름, docstring 누락 같은 문제를 잡아 주지 않는다. 즉 코드의 "모양"을 정리하는 역할에 집중하고, 코드의 "문제"를 찾는 일은 다른 도구에 맡긴다.

## Ruff와 비교하면

- `flake8`: 코드가 문제 있는지 검사하지만, 코드를 직접 다시 쓰지는 않는다.
- `pylint`: 더 깊은 분석을 하지만 포매팅은 하지 않는다.
- `ruff format`: Black의 drop-in replacement를 목표로 하는 Ruff의 formatter다.

## 간단한 사용 예

```bash
pip install black
black .
black --check .
black --line-length 100 src/
```

## References

- [The basics - Black](https://black.readthedocs.io/en/stable/usage_and_configuration/the_basics.html)
- [The Black Code Style](https://black.readthedocs.io/en/latest/the_black_code_style/index.html)

## Link

- [Flake8](./flake8.md)
- [pydocstyle](./pydocstyle.md)
- [Ruff](./ruff.md)
