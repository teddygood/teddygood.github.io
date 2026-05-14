---
title: "PyPy"
date: '2026-05-13'
draft: false
---

PyPy는 Python 언어의 대체 구현체이자 실행 환경이다. 같은 Python 코드를 CPython 대신 PyPy로 실행할 수 있게 하는 인터프리터라고 보면 된다. Python을 다른 언어로 바꿔 쓰는 도구가 아니라, Python 프로그램을 실행하는 런타임 자체가 다른 것이다.

PyPy를 볼 때 핵심은 두 가지다. 하나는 CPython과 높은 호환성을 유지하려는 Python 구현체라는 점이고, 다른 하나는 **tracing JIT**를 통해 순수 Python 코드의 반복 실행을 빠르게 만들려는 런타임이라는 점이다.

## 어디에 쓰이나

PyPy는 실행 시간이 짧은 스크립트보다 오래 실행되는 Python 프로그램에서 의미가 커진다. JIT 컴파일러가 어느 코드 경로가 자주 실행되는지 관찰하고, 그 경로를 기계어로 바꾸려면 워밍업 시간이 필요하기 때문이다.

잘 맞는 경우는 대체로 아래와 같다.

- 순수 Python 코드가 실행 시간의 큰 비중을 차지한다.
- 같은 루프나 함수 경로가 여러 번 반복된다.
- 객체 접근, 동적 디스패치, 작은 함수 호출 같은 인터프리터 오버헤드가 크다.
- 서버, 워커, 시뮬레이션, 파서처럼 프로세스가 오래 살아 있다.

반대로 프로그램의 대부분 시간이 C, C++, Fortran으로 작성된 라이브러리 안에서 쓰인다면 PyPy의 JIT가 도와줄 부분이 줄어든다. NumPy, PyTorch, OpenCV처럼 native extension에 많은 시간을 맡기는 프로그램은 PyPy로 바꾸기 전에 호환성과 실제 성능을 따로 재야 한다.

## CPython과 다른 점

CPython은 Python의 기준 구현체이고 C로 작성되어 있다. PyPy는 Python 언어를 구현하지만, 내부 구조는 CPython과 다르다. PyPy의 Python 인터프리터는 RPython으로 작성되고, RPython translation toolchain을 거쳐 실행 파일로 만들어진다.

차이는 성능 구현 방식에서 크게 드러난다.

- CPython은 전통적으로 bytecode interpreter가 Python 코드를 실행한다.
- PyPy는 interpreter 실행을 관찰하는 tracing JIT를 함께 사용한다.
- CPython은 참조 카운팅(reference counting)을 중심으로 객체 수명을 관리한다.
- PyPy는 참조 카운팅이 아닌 garbage collector를 사용하므로 객체 해제 시점과 파일 닫힘 같은 세부 동작이 다를 수 있다.
- PyPy는 CPython C API 호환 계층을 제공하지만, 그 경로는 느릴 수 있고 CPython과 완전히 같은 내부 가정을 보장하지 않는다.

그래서 PyPy는 "더 빠른 Python"으로만 기억하면 부족하다. 더 정확히는 CPython과 호환되도록 노력하는 별도 Python 런타임이고, 그 위에서 JIT와 GC 전략이 다르게 동작한다.

## RPython

RPython은 Rust와 관계된 Python 구현체가 아니라 PyPy 계열에서 인터프리터와 가상 머신을 만들기 위해 쓰는 제한된 Python 하위 언어와 도구체인이다. RPython은 RustPython이 아니다. 이름 때문에 헷갈리기 쉽지만, RPython은 RustPython이 아니다. 이름 때문에 헷갈리기 쉽다.

RPython 코드는 일반 Python 문법처럼 보이지만, 아무 Python 프로그램이나 그대로 받아 C로 컴파일하는 도구가 아니다. RPython은 정적 분석과 번역이 가능하도록 타입 사용과 동적 기능에 제한을 둔다. PyPy의 핵심 아이디어는 Python 인터프리터를 RPython으로 작성하고, 이 인터프리터를 번역 과정에서 실행 파일과 JIT 지원 런타임으로 만드는 데 있다.

## JIT가 보는 대상

PyPy의 JIT는 사용자 Python 소스 코드를 직접 "함수 단위로 컴파일"한다고 이해하면 정확하지 않다. PyPy 문서에서 강조하는 점은 JIT가 RPython으로 작성된 인터프리터의 실행을 tracing한다는 것이다.

흐름을 단순화하면 아래와 같다.

```text
Python 프로그램
  -> PyPy 인터프리터
  -> RPython 수준의 인터프리터 실행
  -> tracing JIT가 자주 실행되는 경로를 기록
  -> optimizer
  -> machine code backend
```

이 방식은 meta-tracing JIT라고 불린다. 일반 JIT가 특정 언어 하나를 직접 컴파일하는 구조라면, meta-JIT는 인터프리터를 작성하는 방식에서 JIT를 생성하고 재사용하려는 구조다. RPython 문서도 RPython으로 작성된 인터프리터에 몇 가지 힌트를 넣으면 JIT compiler generator를 적용할 수 있다고 설명한다.

PyPy에서는 이 구조 덕분에 Python 런타임 내부의 여러 계층을 trace가 통과하면서, 실제 자주 실행되는 경로 위주로 오버헤드를 제거할 수 있다. 다만 tracing JIT는 모든 코드에서 고르게 빨라지는 구조가 아니다. 분기가 지나치게 예측 불가능하거나, 루프가 충분히 반복되지 않거나, 실행 시간이 native library에 몰려 있으면 이점이 줄어든다.

## CPython과의 호환성

PyPy는 Python 언어를 구현하지만 CPython의 내부 구현 세부까지 모두 복제하는 것은 아니다. 공식 차이 문서는 "문서에 없는 차이는 PyPy의 버그로 봐야 한다"고 말할 정도로 호환성을 중요하게 보지만, GC, C API, bytecode, 일부 내장 타입 동작에는 차이가 남아 있다.

주의해서 봐야 할 지점은 아래와 같다.

- 파일이나 소켓은 명시적으로 닫는 습관이 더 중요하다.
- `sys.getrefcount()`처럼 CPython의 참조 카운팅 구현에 기대는 코드는 PyPy에서 맞지 않는다.
- CPython C API를 깊게 쓰는 확장 모듈은 성능이나 동작 차이가 날 수 있다.
- 짧게 실행되고 끝나는 CLI 프로그램은 JIT 워밍업 때문에 이득이 작을 수 있다.
- Python 버전 지원 범위는 PyPy 릴리스 상태를 확인해야 한다. 2026-05 기준 PyPy Features 문서는 Python 2.7과 Python 3.11 구현을 명시한다.

## 언제 선택할까

PyPy는 "Python 코드를 크게 고치지 않고 런타임을 바꿔 성능을 확인해 볼 수 있는 선택지"에 가깝다. 순수 Python 비중이 큰 장기 실행 프로그램이라면 후보가 된다. 반대로 이미 병목이 native extension 내부에 있거나, CPython 내부 구현에 강하게 의존하는 라이브러리를 쓰고 있다면 PyPy가 정답이 아닐 가능성이 높다.

따라서 판단 순서는 단순하다. 먼저 프로그램의 병목이 Python 인터프리터 안에 있는지 확인한다. 그 다음 PyPy에서 테스트와 벤치마크를 돌려 본다. 성능이 올라가더라도 배포 환경, C extension 호환성, 메모리 사용량, 워밍업 시간을 같이 봐야 한다.

## References

- [PyPy - Features](https://pypy.org/features.html)
- [What is PyPy?](https://doc.pypy.org/en/latest/introduction.html)
- [Goals and Architecture Overview](https://doc.pypy.org/en/latest/architecture.html)
- [Differences between PyPy and CPython](https://doc.pypy.org/en/latest/cpython_differences.html)
- [RPython FAQ](https://rpython.readthedocs.io/en/latest/faq.html)
- [RPython JIT documentation](https://rpython.readthedocs.io/en/latest/jit/)
- [Musings on Tracing in PyPy](https://pypy.org/posts/2025/01/musings-tracing.html)

## Link

- [JIT](../Compiler/JIT.md)
- [Tracing JIT](../Compiler/Tracing%20JIT.md)
- [Python GIL과 동시성](../Rust/Python%20GIL%EA%B3%BC%20%EB%8F%99%EC%8B%9C%EC%84%B1.md)
- [Pyodide](../Software/Pyodide/Pyodide.md)
