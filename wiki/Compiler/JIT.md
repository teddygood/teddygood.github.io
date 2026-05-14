---
title: "JIT"
date: '2026-05-13'
draft: false
---

JIT(Just-In-Time compiler)는 프로그램 실행 중에 컴파일을 수행하는 컴파일러다. 미리 전체 프로그램을 기계어로 바꿔 두는 AOT(Ahead-Of-Time compilation)와 달리, JIT는 프로그램이 실제로 돌고 있는 동안 필요한 코드나 자주 실행되는 코드를 골라 기계어로 바꾼다.

그래서 JIT는 인터프리터와 정적 컴파일러 사이에 있는 실행 전략으로 볼 수 있다. 처음에는 해석 실행으로 빠르게 시작하고, 실행 중에 얻은 정보로 일부 코드를 더 빠른 형태로 바꾸는 식이다.

## 왜 필요한가

인터프리터는 구현이 유연하고 시작이 빠르지만, 매번 bytecode를 읽고 dispatch하며 동적 타입을 확인해야 한다. 정적 컴파일러는 실행 전에 최적화할 시간이 있지만, 실행 중에 어떤 타입과 경로가 자주 쓰이는지는 모른다.

JIT는 이 둘의 장점을 섞으려는 접근이다. 프로그램을 실제로 실행해 보면서 자주 도는 코드, 자주 나타나는 타입, 거의 항상 같은 방향으로 가는 분기를 관찰한다. 그 정보를 바탕으로 일반적인 해석 루프보다 좁고 빠른 기계어 경로를 만든다.

## 기본 흐름

JIT가 항상 같은 구조로 구현되는 것은 아니지만, 큰 흐름은 보통 아래처럼 이해할 수 있다.

```text
소스 코드 또는 바이트코드
  -> 인터프리터 실행 또는 낮은 단계 실행
  -> 실행 정보 수집
  -> 자주 실행되는 코드 감지
  -> 최적화된 기계어 생성
  -> guard 실패 또는 deoptimization
  -> 인터프리터나 낮은 단계 코드로 되돌아감
```

여기서 중요한 단어는 hot code다. 프로그램 안의 모든 코드를 똑같이 컴파일하면 컴파일 비용이 너무 커질 수 있다. JIT는 실행 시간이 많이 쓰이는 부분을 찾아 그 부분에 비용을 집중한다.

## 무엇을 컴파일하나

JIT가 컴파일하는 단위는 구현마다 다르다.

- method-based JIT는 함수나 메서드 단위로 컴파일한다.
- tracing JIT는 실행 중 지나간 경로를 기록해서 trace 단위로 컴파일한다.
- LLVM ORC 같은 JIT API는 언어 런타임이나 REPL이 런타임에 코드 조각을 컴파일하고 링크할 수 있는 구성 요소를 제공한다.

이 차이는 성능 특성에도 영향을 준다. 함수 단위 JIT는 제어 흐름 전체를 비교적 안정적으로 다루기 쉽다. tracing JIT는 실제로 자주 지나간 경로를 강하게 최적화할 수 있지만, 그 경로가 자주 바뀌면 성능이 흔들릴 수 있다.

## 빨라지는 이유

JIT가 빨라질 수 있는 이유는 "컴파일을 한다" 하나로 끝나지 않는다. 핵심은 실행 중 정보(runtime feedback)를 쓴다는 데 있다.

대표적인 최적화 방향은 아래와 같다.

- 자주 쓰이는 타입에 맞춰 동적 타입 검사를 줄인다.
- 자주 호출되는 작은 함수를 inline한다.
- bytecode dispatch나 interpreter frame 관리 비용을 줄인다.
- 객체가 루프 밖으로 escape하지 않으면 allocation을 제거한다.
- CPU가 바로 실행할 수 있는 기계어로 hot path를 바꾼다.

다만 JIT는 공짜가 아니다. profiling 비용, 컴파일 비용, code cache 메모리, deoptimization 처리, 디버깅 복잡도가 붙는다. 짧게 실행되고 끝나는 프로그램에서는 컴파일 비용을 회수하기 전에 프로세스가 끝날 수 있다.

## AOT, 인터프리터와 비교

인터프리터는 시작이 빠르고 구현이 유연하다. 소스 코드나 bytecode를 곧바로 해석하며 실행할 수 있기 때문에 개발 도구, REPL, 동적 언어 런타임에 잘 맞는다. 대신 같은 경로를 반복해서 실행할 때도 dispatch와 타입 확인 비용이 계속 붙는다.

AOT 컴파일은 실행 전에 코드를 기계어로 바꾸고 최적화한다. 컴파일 시간이 따로 있고, 실행 파일을 미리 만들 수 있으며, 시작 후에는 별도 컴파일 비용이 없다. 다만 실행 중 실제로 어떤 타입과 경로가 자주 쓰이는지는 알기 어렵다.

JIT는 실행을 시작한 뒤에 정보를 모아 hot code를 기계어로 바꾼다. 그래서 장기 실행 프로그램, 반복이 많은 코드, 동적 언어 런타임처럼 runtime feedback이 의미 있는 환경에서 힘이 커진다. 대신 워밍업, code cache, deoptimization 비용이 붙기 때문에 "항상 가장 빠른 방식"으로 읽으면 안 된다.

## PyPy와 JIT

PyPy는 JIT를 설명할 때 좋은 예다. PyPy의 핵심은 단순히 Python 코드를 기계어로 바꾸는 손으로 작성한 컴파일러가 아니다. PyPy는 RPython으로 작성된 Python 인터프리터를 바탕으로 JIT를 생성하고, 그 JIT가 실행 중 hot path를 찾아 최적화한다.

즉 PyPy에서 JIT는 Python 문법을 바꾸는 기능이 아니라 Python 런타임의 실행 전략이다. 사용자는 Python 코드를 그대로 실행하지만, 내부에서는 인터프리터 실행, trace 수집, 최적화, 기계어 실행, guard 실패 시 fallback이 반복된다.

## References

- [Musings on Tracing in PyPy](https://pypy.org/posts/2025/01/musings-tracing.html)
- [RPython JIT documentation](https://rpython.readthedocs.io/en/latest/jit/)
- [Motivating JIT Compiler Generation](https://rpython.readthedocs.io/en/default/jit/overview.html)
- [ORC Design and Implementation](https://llvm.org/docs/ORCv2.html)

## Link

- [Tracing JIT](./Tracing%20JIT.md)
- [PyPy](../Python/PyPy.md)
