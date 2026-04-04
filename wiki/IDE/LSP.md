---
title: "LSP"
date: '2026-04-01 09:40'
---

[LSP](https://langserver.org/)는 Language Server Protocol의 약자다. VS Code, Vim, Neovim, Emacs 같은 에디터와 언어 분석 도구 사이의 통신 방식을 표준화해서 자동 완성, 정의로 이동, 진단 메시지, 리팩터링 같은 기능을 공통으로 제공하게 만든 규약이다.

예전에는 에디터마다 언어 지원 기능을 제각각 붙여야 해서 같은 언어 기능을 여러 IDE 플러그인에서 반복 구현하는 경우가 많았다. LSP는 이 중복을 줄이기 위해 "에디터는 client, 언어 분석기는 server"라는 구조를 정하고 둘 사이 메시지 형식을 표준화했다.

## 왜 필요한가

- 언어마다 문법 분석기, 타입 체커, 심볼 인덱서 같은 로직을 에디터별로 다시 만들 필요가 줄어든다.
- 하나의 language server를 여러 에디터가 함께 사용할 수 있다.
- 에디터를 바꿔도 자동 완성, hover, rename 같은 경험을 비슷하게 유지할 수 있다.

## 어떻게 동작하나

LSP에서는 에디터가 client, 언어 분석 도구가 server 역할을 맡는다. 보통 에디터는 파일을 열거나 저장하거나 커서를 움직일 때 관련 이벤트를 서버로 보내고, 서버는 해당 언어를 분석한 뒤 결과를 돌려준다.

대부분의 구현은 JSON-RPC 기반 메시지를 사용하고, stdio나 socket으로 통신한다. 예를 들어 에디터가 "이 위치에서 자동 완성 후보를 달라"는 요청을 보내면 서버는 현재 소스 코드와 프로젝트 정보를 바탕으로 후보 목록을 계산해서 응답한다.

## 대표 기능

- 자동 완성(completion)
- 정의로 이동(go to definition)
- hover 문서 표시
- 진단 메시지(diagnostics)
- 심볼 검색
- 이름 변경(rename)
- 코드 액션(code action)
- 포맷팅(formatting)

LSP가 있다고 해서 모든 서버가 위 기능을 전부 지원하는 것은 아니다. 실제 제공 범위는 각 language server 구현체에 따라 달라진다.

## 예시

- Rust: [rust-analyzer](https://github.com/rust-lang/rust-analyzer)
- Python: [Pyright](https://github.com/microsoft/pyright)
- Go: [gopls](https://github.com/golang/tools/tree/master/gopls)
- TypeScript/JavaScript: TypeScript Language Server, tsserver 기반 도구들

이런 도구들을 에디터 플러그인이나 확장 기능이 실행하고, 에디터는 LSP 규약에 따라 결과를 받아 화면에 보여준다.

## 알아둘 점

LSP는 어디까지나 "통신 규약"이다. 즉 자동 완성이나 리팩터링을 실제로 똑똑하게 해주는 건 각 언어 서버 구현체다. 그래서 같은 LSP를 써도 언어별로 성능과 지원 기능 차이가 꽤 크다.

또한 컴파일러나 빌드 시스템과 강하게 연결된 언어는 프로젝트 설정이 정확해야 서버가 제대로 동작한다. 예를 들어 Rust나 TypeScript처럼 프로젝트 단위 분석이 중요한 언어는 설정 파일이나 의존성 정보가 맞지 않으면 진단 결과가 부정확할 수 있다.

## References

- [Language Server Protocol](https://langserver.org/)
- [Language Server Protocol Specification](https://microsoft.github.io/language-server-protocol/)

## Link

- [Rust 개요](../Rust/Rust%20%EA%B0%9C%EC%9A%94.md)
