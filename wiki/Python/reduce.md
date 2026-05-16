---
title: "Python reduce"
date: '2026-05-16'
draft: false
---

`reduce`는 반복 가능한 객체(iterable)의 값을 왼쪽에서 오른쪽으로 하나씩 꺼내면서, 지금까지 만든 결과와 이번 값을 합쳐 새 결과를 만드는 함수다. 이 과정을 끝까지 반복하면 여러 원소가 마지막 결과 하나로 줄어든다. 이 함수는 내장 함수가 아니라 `functools` 모듈에서 가져와야 한다.

여기서 누적값(accumulator)은 매 단계에서 들고 가는 중간 결과다. 예를 들어 `[2, 3, 4]`를 곱한다면 처음에는 `1`에서 시작하고, `2`를 곱해 `2`, 다시 `3`을 곱해 `6`, 다시 `4`를 곱해 `24`를 만든다. 이때 `1`, `2`, `6`, `24`처럼 계속 갱신되는 값이 누적값이다.

`reduce`를 쓸 때의 핵심은 "여러 값을 같은 규칙으로 합쳐 하나의 값으로 만든다"는 구조가 코드에서 실제로 중요한지 판단하는 것이다. 단순 합계, 곱, 최댓값, 문자열 결합처럼 이미 이름이 분명한 표준 도구가 있으면 그쪽이 더 읽기 쉽다.

## 기본 형태

기본 호출 형태는 아래와 같다.

```python
from functools import reduce

result = reduce(function, iterable, initial)
```

`function`은 인자 두 개를 받는다. 첫 번째 인자는 지금까지 만든 누적값이고, 두 번째 인자는 이번에 꺼낸 원소다. `reduce`는 이 함수를 반복해서 호출하고 마지막 누적값을 반환한다.

## lambda보다 operator가 읽기 쉬울 때

처음에는 `lambda`보다 `operator` 모듈의 함수를 쓰는 예시가 더 읽기 쉽다. `operator.mul`은 두 값을 곱하는 함수라서, "앞에서 만든 값과 다음 값을 계속 곱한다"는 흐름이 그대로 보인다.

```python
from functools import reduce
from operator import mul

numbers = [2, 3, 4]

product = reduce(mul, numbers, 1)

print(product)  # 24
```

위 코드는 내부적으로 아래 흐름처럼 읽을 수 있다.

```text
acc = 1
acc = mul(acc, 2)  # 2
acc = mul(acc, 3)  # 6
acc = mul(acc, 4)  # 24
```

즉 `reduce` 자체가 특별한 계산을 하는 것이 아니라, 누적값을 다음 원소와 계속 합치는 반복 구조를 함수 호출 형태로 표현한다.

다만 이 예시 자체는 실제 코드에서 `math.prod(numbers)`가 더 직접적이다. `reduce`는 표준 라이브러리에 이미 더 정확한 이름의 함수가 없고, 누적 규칙 자체를 드러내는 편이 코드 이해에 도움이 될 때 선택하는 것이 좋다.

## initial을 넣는 이유

`initial`은 누적값의 시작값이다. 가능하면 명시하는 편이 좋다. 시작값을 적어 두면 빈 입력을 어떻게 처리할지 분명해지고, 누적값의 타입도 코드에서 바로 드러난다. `initial`은 단순한 기본값이 아니라, 실제 계산의 맨 앞에 들어가는 값이다.

```python
from functools import reduce
from operator import add

numbers = [1, 2, 3]

total = reduce(add, numbers, 10)

print(total)  # 16
```

이 코드는 아래와 같이 계산된다.

```text
acc = 10
acc = add(acc, 1)  # 11
acc = add(acc, 2)  # 13
acc = add(acc, 3)  # 16
```

빈 입력을 다룰 때도 차이가 난다. `initial`이 있으면 입력이 비어 있어도 그 시작값을 그대로 반환한다.

```python
from functools import reduce
from operator import add

empty_numbers = []

total = reduce(add, empty_numbers, 0)

print(total)  # 0
```

## initial을 넣지 않으면

`initial`을 넣지 않으면 첫 번째 원소가 시작 누적값이 된다. 그 다음 두 번째 원소부터 함수가 호출된다.

```python
from functools import reduce
from operator import add

numbers = [1, 2, 3]

total = reduce(add, numbers)

print(total)  # 6
```

흐름으로 풀면 아래와 같다.

```text
acc = 1
acc = add(acc, 2)  # 3
acc = add(acc, 3)  # 6
```

입력에 원소가 하나뿐이면 더 합칠 값이 없기 때문에 그 원소가 그대로 반환된다.

```python
from functools import reduce
from operator import add

print(reduce(add, [10]))  # 10
```

반대로 입력이 비어 있고 `initial`도 없으면 시작 누적값을 만들 수 없어서 `TypeError`가 난다.

```python
from functools import reduce
from operator import add

print(reduce(add, []))  # TypeError
```

Python 3.14부터는 공식 문서 기준으로 `initial`을 키워드 인자로 넘길 수 있다.

```python
from functools import reduce
from operator import add

numbers = [1, 2, 3]

total = reduce(add, numbers, initial=0)
```

그보다 낮은 Python 버전까지 고려해야 하는 코드라면 세 번째 위치 인자로 쓰는 형태가 안전하다.

## lambda로 직접 규칙을 쓰는 경우

`operator`에 이미 있는 단순 연산이 아니라 직접 누적 규칙을 써야 할 때는 `lambda`를 사용할 수 있다.

```python
from functools import reduce

numbers = [1, 2, 3, 4]

total = reduce(lambda acc, number: acc + number, numbers, 0)

print(total)  # 10
```

여기서 `lambda acc, number: acc + number`는 "지금까지의 누적값과 다음 값을 더해서 새 누적값으로 만든다"는 뜻이다. 익숙하지 않다면 먼저 `operator.add`, `operator.mul` 같은 이름 있는 함수로 흐름을 이해한 뒤에 보는 편이 낫다.

## 함수 파이프라인 만들기

`reduce`가 잘 맞는 예는 여러 함수를 하나의 처리 흐름으로 합치는 경우다. 함수가 값처럼 전달되는 구조가 코드의 핵심이기 때문이다.

```python
from functools import reduce


def compose(*functions):
    return reduce(
        lambda current, next_function: lambda value: next_function(current(value)),
        functions,
        lambda value: value,
    )


normalize_slug = compose(
    str.strip,
    str.lower,
    lambda text: text.replace(" ", "-"),
)

print(normalize_slug("  Hello Python Reduce  "))  # hello-python-reduce
```

여기서 시작값 `lambda value: value`는 아무 일도 하지 않는 항등 함수(identity function)다. 함수 목록이 비어 있어도 입력값을 그대로 돌려줄 수 있게 만든다.

## 어쩔 때 쓰면 좋은가

`reduce`가 읽기 쉬워지는 경우는 "여러 값을 하나의 결과로 접는다"는 구조가 문제의 중심일 때다. 단순히 반복문을 짧게 쓰기 위한 도구라기보다, 누적 규칙 자체를 코드에 드러내고 싶을 때 선택하는 편이 좋다.

잘 맞는 경우는 대체로 아래와 같다.

- 결과가 마지막 값 하나이고, 중간 값 전체는 필요하지 않다.
- 시작값인 `initial`이 결과 타입이나 빈 입력 처리 방식을 분명하게 보여 준다.
- 누적 함수가 짧고, 이름 있는 함수나 작은 helper 함수로 표현된다.
- 각 원소가 현재 누적값을 어떻게 바꾸는지가 문제의 핵심이다.
- 여러 함수를 하나의 처리 흐름으로 합치는 것처럼 "접기" 자체가 구조를 설명한다.

예를 들어 여러 검증 함수를 차례로 적용해 상태를 갱신하는 코드는 `reduce`로 자연스럽게 읽힐 수 있다.

```python
from functools import reduce


def require_name(state):
    return state if state.get("name") else {**state, "valid": False}


def require_email(state):
    return state if "@" in state.get("email", "") else {**state, "valid": False}


def apply_validator(state, validate):
    return validate(state)


validators = [require_name, require_email]
user = {"name": "Marty", "email": "marty.example.com", "valid": True}

result = reduce(apply_validator, validators, user)

print(result)  # {'name': 'Marty', 'email': 'marty.example.com', 'valid': False}
```

여기서는 리스트의 값들을 더하거나 곱하는 것이 아니라, "현재 상태를 다음 규칙으로 갱신한다"는 흐름이 중요하다. 이런 경우에는 `reduce`가 반복문보다 의도를 더 압축해서 보여 줄 수 있다.

반대로 합계는 `sum`, 곱은 `math.prod`, 최댓값과 최솟값은 `max`와 `min`, 참/거짓 누적은 `any`와 `all`, 문자열 결합은 `str.join`이 더 직접적이다. `reduce`를 쓰기 전에 이미 더 정확한 이름의 도구가 있는지 먼저 보는 것이 좋다.

`reduce`는 여러 값을 하나의 값으로 접는 고차 함수(higher-order function)다. Python에서는 자주 쓰는 기본 연산에 이미 더 읽기 좋은 도구가 많기 때문에, "누적 규칙 자체가 중요한 코드"에서 선택하는 편이 가장 낫다.

사용할 때는 세 가지를 먼저 확인한다.

- 시작 누적값을 `initial`로 명시할 수 있는가.
- 누적 함수가 인자 두 개를 받아 새 누적값을 분명하게 반환하는가.
- `sum`, `any`, `all`, `max`, `min`, `math.prod`, `str.join`보다 `reduce`가 더 의도를 잘 드러내는가.

이 세 가지가 맞으면 `reduce`는 반복문을 숨기는 장식이 아니라, 값들이 하나의 결과로 접히는 구조를 직접 표현하는 도구가 된다.

## References

- [functools.reduce](https://docs.python.org/3/library/functools.html#functools.reduce)
- [Functional Programming HOWTO](https://docs.python.org/3/howto/functional.html)

## Link

- [일급 함수와 고차 함수](../Multi-paradigm%20Programming/first-class-and-higher-order-functions.md)
- [리스트 프로세싱 패턴](../Multi-paradigm%20Programming/list-processing-patterns.md)
- [실전 함수형 프로그래밍](../Multi-paradigm%20Programming/practical-functional-programming.md)
