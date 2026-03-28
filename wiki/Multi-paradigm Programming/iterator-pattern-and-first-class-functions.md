---
title: "반복자 패턴과 일급 함수"
date: '2026-03-28'
draft: false
sidebar_position: 3
---

반복자 패턴(iterator pattern)과 일급 함수(first-class function)는 같이 볼 때 의미가 더 커지는 조합이다. 이 둘이 만나면서 현대 언어는 지연 평가(lazy evaluation)와 리스트 프로세싱(list processing)을 더 자연스럽게 지원하게 되었다.

## 반복자 패턴

반복자 패턴은 컬렉션의 내부 구조를 직접 노출하지 않고 `next()` 같은 공통 메서드로 요소를 순서대로 꺼내게 하는 규약이다. 중요한 점은 실제 저장 구조가 아니라 순회 방식이 분리된다는 데 있다.

이 규약 덕분에 서로 다른 컬렉션도 같은 방식으로 다룰 수 있다.

- `ArrayLike`
- 배열
- `NodeList`
- 다양한 사용자 정의 컬렉션

짧은 예시로 보면 이런 형태다.

```ts
class ArrayLikeIterator<T> implements Iterator<T> {
  private index = 0;

  constructor(private arrayLike: ArrayLike<T>) {}

  next(): IteratorResult<T> {
    return this.index < this.arrayLike.length
      ? { value: this.arrayLike[this.index++], done: false }
      : { value: undefined, done: true };
  }
}
```

## 왜 시작점이 되는가

반복자 패턴은 값을 한 번에 모두 꺼내는 대신 필요할 때 하나씩 꺼내게 만든다. 이 성질이 바로 지연 평가의 출발점이 된다. 여기에 함수를 값처럼 전달할 수 있는 일급 함수가 더해지면 `map`, `filter`, `reduce`, `take` 같은 함수가 단순한 편의 함수가 아니라, 순회 규약 위에서 작동하는 조합 도구가 된다.

## reverse 예시가 보여주는 것

배열을 미리 뒤집는 `reverse()`와 달리, 이터레이터를 반환하는 `reverse` 함수는 실제로 값을 요청받을 때만 역순으로 꺼낸다. 이 차이는 세 가지를 보여준다.

- 원본을 바꾸지 않아도 된다.
- 필요한 만큼만 계산할 수 있다.
- 순회 전략 자체를 값처럼 다룰 수 있다.

즉, "어떻게 순회할 것인가"를 별도의 객체나 함수로 분리해 낼 수 있다는 점이 중요하다.

```ts
function reverse<T>(arrayLike: ArrayLike<T>): Iterator<T> {
  let idx = arrayLike.length;

  return {
    next() {
      return idx === 0
        ? { value: undefined, done: true }
        : { value: arrayLike[--idx], done: false };
    },
  };
}
```

## 멀티패러다임의 교차점

이 조합이 흥미로운 이유는 패러다임이 분리되어 있지 않기 때문이다.

- 반복자 패턴은 객체지향(object-oriented programming)의 유산이다.
- 일급 함수와 고차 함수(higher-order function)는 함수형(functional programming)의 핵심 요소다.
- 이후 제너레이터(generator)는 이 규약을 명령형(imperative programming) 문법으로 구현하게 해 준다.

이 조합을 보면 멀티패러다임 언어가 왜 단순한 혼합이 아니라 협력 구조인지 더 분명해진다.

## 정리

반복자 패턴과 일급 함수는 각각 따로 중요한 개념이지만, 함께 놓고 볼 때 멀티패러다임 언어가 어떻게 발전했는지가 더 잘 보인다. 순회 규약이 기반을 만들고, 함수 조합이 그 위에 표현력을 더한다.

## References

- [유인동, 멀티패러다임 프로그래밍, 한빛미디어, 2025](https://product.kyobobook.co.kr/detail/S000216318962)

## Link

- [개요](./overview.md)
- [멀티패러다임 프로그래밍](./multi-paradigm-programming.md)
- [일급 함수와 고차 함수](./first-class-and-higher-order-functions.md)
- [이터레이터와 이터러블](./iterators-iterables-generators.md)
