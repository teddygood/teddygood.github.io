---
title: "Tracing JIT"
date: '2026-05-13'
draft: false
---

Tracing JIT는 프로그램 실행을 관찰하면서 실제로 지나간 경로를 기록하고, 그 경로를 최적화된 기계어로 바꾸는 JIT 방식이다. 함수 전체를 한 번에 컴파일하는 method-based JIT와 달리, tracing JIT는 "자주 반복되는 실행 경로"를 중심에 둔다.

가장 중요한 단위는 루프다. 반복문은 같은 코드가 여러 번 실행되는 곳이고, 같은 경로와 타입이 반복될 가능성이 높다. tracing JIT는 이런 hot loop를 발견하면 한 번의 실행 경로를 trace로 기록하고, 그 trace가 다음 반복에서도 맞는지 확인하면서 빠른 코드를 실행한다.

## 기본 가정

Tracing JIT의 핵심 가정은 반복되는 코드는 비슷한 경로를 다시 지나갈 가능성이 높다는 것이다. 예를 들어 루프 안에서 어떤 분기가 대부분 같은 방향으로 가고, 변수 타입도 계속 비슷하다면 그 경로만 강하게 최적화해도 전체 실행 시간이 줄어든다.

이 가정이 잘 맞으면 tracing JIT는 강력하다. 동적 언어에서 매번 타입을 확인하고 메서드를 찾는 비용을 trace 위에서 줄일 수 있기 때문이다. 반대로 루프마다 경로가 자주 바뀌거나 분기가 예측하기 어렵다면 trace가 자주 깨지고, 성능이 불안정해질 수 있다.

## 실행 흐름

Tracing JIT의 흐름을 단순화하면 아래와 같다.

```text
인터프리터가 코드를 실행
  -> 루프가 자주 실행되는 경로로 판정
  -> JIT가 실행 경로 하나를 trace로 기록
  -> 가정을 확인하는 guard 삽입
  -> trace 최적화
  -> backend가 기계어 생성
  -> guard 실패 시 fallback하거나 bridge 생성
```

trace에는 루프가 실제로 한 번 실행되면서 지나간 연산들이 순서대로 담긴다. 원래 프로그램에는 여러 분기와 호출이 있더라도, trace는 그중 실제로 지나간 경로를 따라 만들어진 기록에 가깝다. 이 기록은 보통 "이 값은 정수일 것이다", "이 분기는 참일 것이다", "이 객체 구조는 그대로일 것이다" 같은 가정을 포함한다. guard는 그 가정이 아직 맞는지 확인하는 검사다.

guard가 실패하면 JIT 코드는 계속 달릴 수 없다. 이때 런타임은 인터프리터나 낮은 단계 코드로 돌아가거나, 실패한 guard에서 새 경로를 bridge로 붙인다. 그래서 tracing JIT의 기계어는 하나의 완전한 제어 흐름 그래프라기보다, hot path와 guard, bridge가 자라나는 구조에 가깝다.

## trace, guard, bridge

Tracing JIT를 읽을 때는 세 단어를 먼저 잡으면 된다.

- trace: 실제로 한 번 지나간 hot path의 연산 기록
- guard: trace가 가정한 조건이 계속 맞는지 확인하는 검사
- bridge: guard 실패가 자주 일어날 때 그 실패 경로에 붙는 새 trace

RPython 문서는 PyPy JIT의 backend 입력을 trace라고 설명하고, 분기는 guard로 처리된다고 설명한다. guard가 실패하면 나중에 새 trace가 bridge로 붙을 수 있다. 이 모델을 알면 tracing JIT가 왜 빠를 수 있는지와 왜 성능 절벽이 생길 수 있는지를 같이 이해할 수 있다.

## 장점

Tracing JIT의 장점은 실제 실행 경로에 집중한다는 데 있다. 프로그램 전체를 일반적으로 최적화하기보다, 지금 자주 쓰이는 경로를 좁게 보고 깊게 최적화한다.

대표적인 장점은 아래와 같다.

- hot path를 따라 aggressive inlining을 하기 쉽다.
- 실제 타입과 객체 접근 패턴을 보고 동적 언어 오버헤드를 줄일 수 있다.
- trace가 분기보다 순차 실행에 가깝게 펼쳐져 있어 지역 최적화를 적용하기 쉽다.
- 반복 중 만들어졌다가 밖으로 나가지 않는 임시 객체 allocation을 제거할 수 있다.
- meta-tracing 구조에서는 언어별 JIT를 손으로 전부 작성하지 않고 인터프리터에서 JIT를 생성하는 방향으로 갈 수 있다.

PyPy에서 tracing이 잘 맞는 이유도 여기에 있다. Python 구현 내부는 단순한 bytecode 실행만이 아니라 객체 모델, 내장 타입, 프레임, 예외, 디버깅 기능이 얽혀 있다. trace가 실제 hot path만 따라가면 이 많은 계층 중 자주 쓰이지 않는 부분을 건너뛰고 최적화할 수 있다.

## 약점

Tracing JIT의 약점도 같은 지점에서 나온다. 실제 경로 하나에 강하게 맞추기 때문에, 그 경로가 자주 바뀌면 최적화된 코드가 자주 무효화된다.

주의할 점은 아래와 같다.

- 워밍업 전에는 JIT 이득이 작다.
- 분기가 매우 많고 예측하기 어려운 코드는 trace가 안정되지 않는다.
- guard 실패가 잦으면 interpreter fallback이나 bridge 생성 비용이 커진다.
- trace가 너무 길어지거나 중첩 루프와 재귀가 복잡하면 관리가 어려워진다.
- 좋은 경우는 매우 빠르지만, 나쁜 경우에는 성능 절벽이 생길 수 있다.

그래서 tracing JIT는 "JIT의 정답"이 아니라 특정한 설계 선택이다. method-based JIT는 더 균일한 성능을 만들기 쉬운 반면, tracing JIT는 반복되는 hot path를 강하게 최적화하는 데 힘이 있다.

## PyPy와 meta-tracing

PyPy의 JIT는 일반적인 tracing JIT 설명에서 한 단계 더 들어간다. PyPy는 사용자 Python 프로그램을 직접 trace한다기보다, RPython으로 작성된 Python 인터프리터의 실행을 trace한다. 그래서 PyPy 문서에서는 이를 meta-tracing JIT 맥락으로 설명한다.

이 구조의 장점은 JIT 인프라를 특정 Python 버전에만 묶지 않고, RPython으로 작성된 인터프리터 전반에 적용할 수 있다는 점이다. 대신 인터프리터 코드에 JIT가 이해할 수 있는 힌트를 넣어야 하고, trace가 실제 언어 의미와 어긋나지 않도록 런타임 구조를 신중하게 설계해야 한다.

PyPy를 공부할 때 tracing JIT를 먼저 잡아 두면 "왜 PyPy는 순수 Python 코드에서 강하고, C extension이 많은 프로그램에서는 기대만큼 빠르지 않을 수 있는가"도 같이 보인다. JIT가 빠르게 만드는 대상은 실제로 trace되고 최적화되는 실행 경로이기 때문이다.

## References

- [Musings on Tracing in PyPy](https://pypy.org/posts/2025/01/musings-tracing.html)
- [PyPy's assembler backends](https://rpython.readthedocs.io/en/latest/jit/backend.html)
- [PyJitPl5](https://rpython.readthedocs.io/en/default/jit/pyjitpl5.html)
- [Trace Optimizer](https://rpython.readthedocs.io/en/default/jit/optimizer.html)
- [Goals and Architecture Overview](https://doc.pypy.org/en/latest/architecture.html)

## Link

- [JIT](./JIT.md)
- [PyPy](../Python/PyPy.md)
