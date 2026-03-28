---
title: "일급 함수와 고차 함수"
date: '2026-03-28'
draft: false
sidebar_position: 4
---

일급 함수(first-class function)와 고차 함수(higher-order function)는 함수형(functional programming) 쪽 개념이지만, 이터레이터와 함께 읽을 때 의미가 더 분명해진다. 함수가 값처럼 다뤄질 수 있어야 순회 규약 위에서 변환 로직을 조합할 수 있기 때문이다.

## 일급 함수

일급 함수는 함수를 값처럼 다룰 수 있다는 뜻이다. 즉 함수는 변수에 담을 수 있고, 다른 함수의 인자로 전달할 수 있으며, 반환값으로 돌려줄 수도 있다.

이 성질이 있어야 로직을 고정된 문장으로만 쓰지 않고, 필요한 시점에 주입되는 값처럼 다룰 수 있다.

## 고차 함수

고차 함수는 하나 이상의 함수를 인자로 받거나 함수를 반환하는 함수다. 함수가 값처럼 다뤄질 수 있으니, 함수 자체를 받아서 다른 로직과 조합하는 구조를 만들 수 있다.

`map`, `filter`, `reduce`, `take`는 전형적인 예시다.

## map이 대표적인 이유

`map`은 변환 함수 하나와 순회 대상 하나를 받아 새로운 순회 흐름을 만든다. 여기서 중요한 점은 함수와 데이터가 분리된다는 것이다.

- 무엇을 순회할지는 이터레이터가 담당한다.
- 각 값을 어떻게 바꿀지는 변환 함수가 담당한다.
- 실제 실행 시점은 `next()` 호출이 결정한다.

그래서 `map`은 단순한 변환 함수이면서 동시에, 고차 함수와 지연 평가를 함께 보여 주는 예시가 된다.

```ts
function map<A, B>(
  transform: (value: A) => B,
  iterator: Iterator<A>
): Iterator<B> {
  return {
    next(): IteratorResult<B> {
      const { value, done } = iterator.next();
      return done
        ? { value, done }
        : { value: transform(value), done };
    },
  };
}

function* values() {
  yield "A";
  yield "B";
  yield "C";
}

const iter = map(str => str.toLowerCase(), values());
console.log(iter.next().value); // "a"
console.log(iter.next().value); // "b"
```

## 조합과 모듈화

일급 함수와 고차 함수는 로직을 더 작은 단위로 나누고 다시 조합하게 해 준다. 순회를 담당하는 부분, 변환 규칙, 종료 시점을 분리할 수 있기 때문에 같은 규약 위에서 여러 로직을 재사용하기 쉬워진다.

이 점 때문에 함수형 스타일의 장점은 "함수를 많이 쓴다"보다 "로직을 값처럼 주고받으며 조립할 수 있다"에 더 가깝다.

## 정리

일급 함수는 함수가 값이 되게 하고, 고차 함수는 그 값을 조합의 재료로 쓴다. 이 두 개념이 반복자 패턴과 만나면서 현대 언어의 리스트 프로세싱과 지연 평가가 더 넓게 퍼질 수 있었다.

## References

- [유인동, 멀티패러다임 프로그래밍, 한빛미디어, 2025](https://product.kyobobook.co.kr/detail/S000216318962)

## Link

- [개요](./overview.md)
- [반복자 패턴과 일급 함수](./iterator-pattern-and-first-class-functions.md)
- [지연 평가와 안전한 합성](./lazy-evaluation-and-safe-composition.md)
- [리스트 프로세싱 패턴](./list-processing-patterns.md)
