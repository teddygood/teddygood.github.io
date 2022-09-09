---
title: 'Data Engineering 스터디 24주차'
date: '2022-02-02'
tags: ["Data Engineering"]
draft: false

description: PseudoLab Data Science Fellowship 1기

sidebar_position: 1
---

# Introduction to Scala

## A Scalable Language

### Scala

- 이탈리아어로 계단이라는 의미
- EPFL의 CS building의 나선형 계단에서 영감을 받음
- 새롭고 개선된 Java
- general-purpose programming language
- JVM(Java Virtual Machine)에서 실행됨
  - Java 코드를 사용할 수 있음(일부 예외가 있음)
- Scalable language
  - 작은 규모의 스크립트 작성부터 data processing, distributed computing을 위한 대규모 시스템 구축 등 사용자가 필요에 따라 다양하게 확장하여 사용할 수 있도록 설계됨
- OOP, functional programming
  - Scala에서는 거의 모든 것이 object
    - 확장성
  - 함수는 정수나 문자열처럼 first-class value
    - 함수도 다른 값처럼 변수에 담기고, 인자로 넘어가기도 하며, 값으로 반환될 수 있음
  - 프로그램의 operation은 데이터를 제자리에서 변경하는 것보다 입력 값을 출력 값에 mapping해야 함 -> 함수에 side effect가 없어야 함
- Scala는 Java의 단점들을 극복하기 위해 제작됨
  - Java의 코드보다 더 짧게 사용할 수 있음
- high-level language
  - 더 짧고 이해하기 쉬워짐

```scala
// Calculate the difference between 8 and 5
val difference = 8 - 5

// Print the difference
println(difference)
```

### Scala value types

- `val`: immutable
- `var`: mutable

- Double
  - Scala의 default floating point value type
  - Float보다 정확
  - 소수점 이하 15자리
- Float
  - 소수점 이하 7자리
  - 끝에 `f`를 추가하여 저장
- Int
- Short
- Byte
- Char
- Boolean
- Unit
- String

- java.lang.String을 그냥 String으로 사용하는 것처럼 scala.Int도 Int로 사용
  - scala String은 java.lang.String을 사용

```scala
val twoClubs: Int = 2
val playerA: String = "Alex"
```
```
twoClubs: Int = 2
playerA: String = "Alex"
```

- 스칼라에서는 가능하면 `var` 보다 `val`을 더 선호
  - 프로그램의 로직 오류로 인해 데이터가 실수로 변경되지 않음
  - 데이터가 변경될 수 있는 곳에서 변경되지 않으니 코드를 생각하기 더 쉬움
  - 불변이기 때문에 프로그램이 예상대로 작동하는지 확인하는 유닛 테스트를 더 적게 할 수 있음
  - 단점
    - 객체의 복사에 의해 메모리가 추가 생성

### static type and type inference

- Scala는 정적 타입 언어
  - 컴파일 시에 변수의 타입이 결정
  - C/C++, Java 등 
- 동적 타입 언어는 런타임 때 결정
  - 즉, 코드 실행 중에 자료형이 결정
  - 파이썬, 자바스크립트, 루비 등

- 자동으로 타입 유추
  ```scala
  var num1: Int = 12 // 타입 명시
  // num: Int = 12
  var num2 = 12 // 타입 추론 사용
  // num2: Int = 12
  var str = "Hello, world!" // 타입 추론함
  // str: java.lang.String = "Hello, world!"
  ```

## Workflows, Functions, Collections

### sbt

- 스칼라로 작성되었으며, 스칼라에 사용하기 편한 기능을 많이 제공
- 인텔리제이에서 사용 플러그인으로 사용 가능

### almond

- Jupyter Notebook에서 Scala 실행
  - 데이터 시각화
  - Spark를 사용하여 데이터 분석

### Function

- 함수를 선언할 때 `return` 생략 가능
  - 컴파일러가 반환값을 이용하여 자동 추론
  - `return`이 생략되고 return type이 `Unit`이 아니면 함수의 마지막 값을 반환
- parameter type은 생략 불가
- return 값이 없는 함수를 선언할 때는 `Unit` 사용
- 함수의 parameter는 immutable이기 때문에 재할당 불가
- first-class value
  - 모든 함수는 결과를 생성하고 값이 있으며, 모든 값에는 type이 있음

```scala
// 함수 선언 
def add(x: Int, y: Int): Int = {
  return x + y
}

// x는 val 이기 때문에 변경 불가 
def add(x: Int): Int = {
  x = 10 
}

// 리턴 타입 생략 가능 
def add(x: Int, y: Double) = {
  x + y
}

// 리턴 타입이 Unit 타입도 생략 가능 
def add(x: Int, y: Int) = {
  println(x + y)
}

// 리턴 데이터가 없는 경우 Unit을 선언  
def add(x: Int, y: Int): Unit = {
  println(x + y)
}
```

### Array

- Collection
  - mutable: 원래 값 없데이트
  - immutable: 원래 값은 변하지 않음
    - 추가, 제거 또는 업데이트 등의 작업
- Array
  - mutable
  - parameterize
    ```scala
    val players = new Array[String](3)
    val players: Array[String] = new Array[String](3) // 명시적으로 타입 선언
    val players = Array("Alex", "Chen", "Marta")
    players(0) = "Hello"
    players(1) = ", "
    players(2) = "world!\n"
    ```
    - 3이라는 값으로 parameterize하여 배열 길이 초기화
    - players 배열의 type은 `Array[String](3)`이 아니라 `Array[String]`
  ```scala
  val players = Array("Alex", "Chen", "Marta")
  players(0) = "Sindhu"
  ```
    - `val`로 선언한 변수는 재할당 불가
    - `val`을 사용하는 객체가 mutable이면 해당 객체는 변경 가능 
    - 동일한 type의 값으로만 배열을 변경할 수 있음
  - `val`이 아닌 `var`로 배열 선언했을 때 배열을 재할당할 수 있어서 배열이 초기화 될 수 있음
    ```scala
    var players = Array("Alex", "Chen", "Marta")
    players(0) = "Sindhu"
    players = new Array[String](5) 
    players // players: Array[String] = Array(null, null, null, null, null)
    ```
  - 배열 타입을 `Any`로 parameterize하면 각각 다른 type이 들어갈 수 있음

### List

- List
  - immutable 
  ```scala
  val players = List("Alex", "Chen", "Marta")
  ```
  - 메소드 사용 가능
    - 메소드를 호출하면 새로운 값이 있는 새로운 list가 반환됨
    - 자세한 것은 공식 문서 참고
  - `cons(::)`을 사용하여 시작 부분에 새 요소 추가
    - Scala에 append 연산이 있지만 효율적이지 않기 때문에 거의 사용하지 않음
    ```scala
    val newPlayers = "Sindhu" :: players // newPlayers: List[String] = List(Sindhu, Alex, Chen, Marta)
    ```
    - `var`을 사용하는 경우
    ```scala
    var players = List("Alex", "Chen", "Marta")\
    players = "Sindhu" :: players // players: List[String] = List(Sindhu, Alex, Chen, Marta)
    ```
  - `Nil`
    - 빈 리스트
    ```scala
    Nil // res0: scala.collection.immutable.Nil.type = List()
    ```
    - `Nil`을 사용하여 초기화
      - `Nil`이 없으면 에러 발생
      ```scala
      val players = "Alex" :: "Chen" :: "Marta" :: Nil
      ```
  - concatenating list
    - `:::`를 사용하여 리스트 연결
    ```scala
    val playersA = List("Sindhu", "Alex")
    val playersB = List("Chen", "Marta")
    val allPlayers = playersA ::: playersB
    println(playersA + " and " + playersB + " were not mutated,")
    println("which means " + allPlayers + " is a new List.")
    /* List(Sindhu, Alex) and List(Chen, Marta) were not mutated,
    which means List(Sindhu, Alex, Chen, Marta) is a new List. */
    ```

## Type Systems, Control Structures, Style

### Static type

- 장점
  - 런타임 때 type을 추론할 필요가 없기 때문에 실행이 더 빠름
  - 타입 에러를 컴파일 시 발견할 수 있어 안정성이 높음
  - refactoring을 할 때 안전하게 할 수 있음
  - 문서화

- 단점 
  - 컴파일러가 타입을 확인하는 데 시간이 걸림
  - 코딩하기 어려움
  - 프로그래머가 원하는 대로 표현하기 어려움

### Scala 자료형 생략

```scala
val fourHearts: Int = 4
val fourHearts = 4
```
```
fourHearts: Int = 4
```
```scala
val players: Array[String] = Array("Alex", "Chen", "Marta")
val players = Array("Alex", "Chen", "Marta")
```
```
players: Array[String] = Array(Alex, Chen, Marta)
```

### If

- 내용이 단 한 줄이어도 중괄호 사용
- else가 있으면 중괄호 삭제
- else if도 사용 가능 
- if는 표현식이기 때문에 인터프리터에 돌리면 무조건 값이 출력됨
  ```scala
  // This hand's point value
  val hand = 24

  // If this hand busts, print to output
  if (hand > 21) {
    println("This hand busts!")
  }
  ```
  ```scala
  // Point values for two competing hands
  val handA = 17
  val handB = 19

  // Print the value of the hand with the most points
  if (handA > handB)
    println(handA)
  else
    println(handB)
  ```

### while

- 조건을 표현할 때 `()` 사용

```scala
// Define counter variable
var i = 0

// Define the number of times for the cheer to repeat
val numRepetitions = 3

// Loop to repeat the cheer
while (i < numRepetitions) {
  println("Hip hip hooray!")
  i += 1 // ++i and i++ don't work!
}
```

```scala
// Define counter variable
var i = 0

// Create an array with each player's hand
var hands = Array(17, 24, 21)

// Loop through hands and see if each busts
while (i < hands.length) {
  println(bust(hands(i))) // bust는 특별한 함수가 아니라 강의에서 정의한 임의의 함수
  i = i + 1
}
```

### foreach

- foreach
  - `()` 내의 문장을 수행
  - 사이드이펙트를 일으키는 작업이나, 리스트 외부의 변수에 접근하는 작업이 수행되기도 함
  - 사용하면 더욱 functional 해짐
  ```scala
  // Define a function to determine if hand busts
  def bust(hand: Int) = {
    println(hand > 21)
  }

  // Initialize array with each player's hand
  var hands = Array(17, 24, 21)

  // See if each hand busts
  hands.foreach(bust)
  ```


## References

>- [스칼라의 Type에 대해서](https://blog.outsider.ne.kr/478)
>- [빅데이터 - 스칼라(scala), 스파크(spark)로 시작하기](https://wikidocs.net/book/2350)