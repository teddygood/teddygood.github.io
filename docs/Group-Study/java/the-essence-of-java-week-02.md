---
title: 'Java 스터디 2주차'
date: '2022-08-21'
# tags: ["Java"]
draft: false

description: Spring까지!

sidebar_position: 1
---

## 조건문

제어문(control statement)이란 프로그램의 흐름을 바꾸는 역할을 하는 문장들이며 조건문, 반복문이 있다. 실행할 문장을 중괄호로 블럭처리를 한다. 중괄호의 위치는 취향에 따라 결정하면 되지만, 나중에 협업을 하게 되면 자연스럽게 회사의 코딩 컨벤션을 따르게 된다.

### if문

조건식이 참이면 괄호 안의 문장을 수행이다. 조건식에는 비교 연산자 뿐만 아니라 논리 연산자도 사용 가능하며 조건식의 결과가 true 또는 false 값이 나오기만 하면 된다. 다른 조건을 더 추가하고 싶으면 `else if`문을 사용하고 모든 조건이 맞지 않는 경우에는 `else`문을 사용한다. 조건들 중 참인 조건식을 만나면 해당 블럭을 수행하고 if~else문 전체를 빠져 나온다. 중첩하여 사용할 수도 있다.

```java
if ('A' <= ch && ch <= 'Z') {  
    System.out.println("대문자");  
} else if ('a' <= ch && ch <= 'z') {  
    System.out.println("소문자");  
} else {  
    System.out.println("알파벳이 아닙니다.");  
}
```

### switch문

처리할 경우의 수가 많은 경우에는 if문 보다 switch문으로 작성한다. 즉, 단 하나의 조건식으로 많은 경우의 수를 처리할 수 있다.

1. 조건식을 계산
2. 조건식의 결과와 일치하는 case문으로 이동 후 수행
3. break문 또는 switch문의 끝을 만나면 switch문 전체를 빠져나간다.
	
조건식의 결과와 일치하는 case문이 하나도 없는 경우에는 default문으로 이동하게 된다. default문의 위치는 보통 마지막에 놓기 때문에 break문을 사용하지 않아도 된다. break문을 사용하지 않으면 switch문을 전부 수행하게 되므로 각 case문의 마지막마다 break문을 사용하는 것이 좋다. 물론 그렇게 실행되는 것을 정확하게 이해하고 있는 사람은 고의적으로 break문을 생략하여 코딩하는 사람도 있다.

switch문의 조건식 결과는 정수 또는 문자열이어야 하며, case문의 값은 정수 상수만 가능하며 중복되지 않아야 한다.

중첩이 가능하지만 잘 사용하지 않는다. 애초에 switch문을 잘 사용하지 않는다.

```java
switch(month) {
    case 3:
    case 4:
    case 5:
        System.out.println("Spring~");
        break;
    case 6: case 7: case 8:
        System.out.println("Summer!");
}
```

## 반복문

### for문

`for (초기화; 조건식; 증감식)` 

증감식에는 반복문을 제어하는 변수의 값을 증가 또는 감소시키는 식이 온다. `i++`, `i--`, `i+=2` 등의 증감식을 사용할 수 있지만 일반적으로 `++`와 `--` 연산자가 자주 사용된다.

```java
for (int i = 0; i < 5; i++) {  
    System.out.println(i);  
}  
  
for (int i = 0; i < 5; i++) {  
    System.out.print(i); // 가로로 출력 -> 012345
}
```

중첩도 가능하며 보통 이중 반복문까지는 자주 사용한다.

```java

for (int i = 0; i < 5; i++) {  
    for (int j = 0; j < 5; j++) {  
        System.out.print(j);  
    }  
    System.out.print('\n');  
}
```

`for (타입 변수명 : 배열 또는 collection)`

파이썬에서 자주 사용되는 for문이다. 책에는 향상된 for문이라 기술되어 있다.

```java
for (int i = 0; i < arr.length; i++) {  
    System.out.println(arr[i]);  
}  

for (int temp : arr) {  
    System.out.println(temp);  
}
```

### while문

`while (조건식)`

조건식은 생략할 수 없다.

for문은 `for(; ; )`처럼 생략해서 무한으로 반복문을 돌리지만, while문은 `while(true)`처럼 조건식에 `true`를 넣어줘야 무한으로 반복문을 돌릴 수 있다.

```java
int i = 0;  
while (i > 10) {  
    System.out.println(i);  
    i++;  
}
```

### do-while문

참일 때 수행될 문장을 먼저 한 번 실행시키고 반복시키는 문장이다. 참일 때 수행될 문장 -> 조건식 -> 참이면 다시 문장 수행 or 거짓이면 종료하는 순서이다. 즉, 무조건 한 번은 수행되는 문장이다.

많이 사용하지 않는다. for, while로도 충분하며 do~while문은 가독성이 좋지 않기 때문에 잘 사용하지 않는다.
	
```java
do {
// 참일 때 수행될 문장
} while (조건식)

```

### 제어문과 자주 사용하는 키워드

break문은 주로 if문과 함께 사용하며, 특정 조건을 만족하면 반복문을 빠져나간다. 주의할 점은 break와 근접한 단 하나의 반복문만 빠져나간다는 것이다. 중복으로 반복문을 사용했을 때 두 개의 반복문을 나가려면 break문을 두 개 사용해야 한다.

continue문은 반복문 내에서만 사용될 수 있으며, 반복이 진행되는 도중에 continue문을 만나면 다음 반복으로 넘어간다.

```java
for (int i = 0; i <= 10; i++) {  
    if (i % 3 == 0) {  
        continue;  
    }  
    System.out.println(i); // 3의 배수만 제외되고 출력
}
```

break는 단 하나의 반복문만 벗어날 수 있기 때문에 여러 개의 반복문이 중첩된 경우에는 불편함이 있다. label을 사용하면 하나 이상의 반복문을 벗어날 수 있다.

```java
Loop:  
for (int i = 0; i < 5; i++) {  
    for (int j = 0; j < 5; j++) {  
        System.out.println("중첩 루프 i:" + i + "j:" + j);  
  
        if (i == 2) {  
            break Loop; // i는 2, j는 0일 때 루프 종료
        }  
    }  
}
```

## 배열

- 같은 타입의 여러 변수를 하나의 묶음으로 다루는 것
- 배열 선언
	- `타입[] 변수이름;`
- 배열 생성
	- `변수이름 = new 타입[길이]`
- 배열 선언과 생성
	- `타입[] 변수이름 = new 타입[길이];` 
	- `int[] score = new int[5];`
- 배열의 요소(element): 배열의 각 저장공간
	- 접근 방법: `배열이름[인덱스]`
	- 인덱스(index): 배열의 요소마다 붙여진 일련번호
		- 범위는 `0 ~ 배열길이-1`
			- 0부터 접근
		- 인덱스를 벗어나는 범위를 사용하면 컴파일러가 에러를 출력한다.

### 배열의 길이
	
- 배열의 길이는 0일 수도 있다.
- `타입[] 배열이름 = new 타입[길이]`
- `arr.length`로 쉽게 출력할 수 있다.
	- 이미 생성된 배열의 길이는 변하지 않기에 상수다.
	- 코드 관리가 쉽고 에러 발생 확률이 낮아지기에 for문의 조건식에 자주 사용된다.
		
```java
int[] arr = new int[5];  

for (int i = 0; i < arr.length; i++) {  
    arr[i] = i;
    System.out.println(arr[i]); // 0, 1, 2, 3, 4 
}
```

### 배열 길이 변경 방법
	
1. 더 큰 배열을 새로 생성
2. 기존 배열의 값을 새로운 배열에 복사

꽤 비용이 많이 들기 때문에 처음부터 배열의 길이를 적당하게 할당하는 것이 좋다.

### 배열 초기화

- `new int[]`는 생략할 수 있다.
	- `int[] arr = new int[] {1, 2, 3, 4, 5};`
	- `int[] arr = {1, 2, 3, 4};`
- 대괄호 안에 아무것도 넣지 않으면 길이가 0인 배열이 생성된다.
	- 길이가 0인 배열 생성 방법
		- `int[] arr = new int[0];`
		- `int[] arr = new int[] {};`
		- `int[] arr = {};`
- 매개변수로 배열을 받는 경우에는 `new 타입[]`을 생략할 수 없다.

### 배열의 출력 

- `import java.util.*;`를 사용할 경우 `toString` 메소드를 사용하여 문자열로 보기 좋게 출력할 수 있다.
- 배열의 이름만 출력할 경우 `타입@주소` 형태로 출력된다.
	- 배열은 참조주소이다.
	- `@` 뒤에 나오는 16진수는 배열의 주소이다.
	- 실제 메모리 주소가 아닌 내부 주소
	- 예외적으로 char 배열은 주소가 출력되지 않고 배열의 값이 출력된다.
		- char 배열은 for문을 사용하지 않고도 `print()` 또는 `println()`으로 배열에 저장된 모든 문자를 출력할 수 있다. 

```java
import java.util.*;

int[] arr = {1, 2, 3, 4, 5};  
for (int i = 0; i < arr.length; i++) {  
    System.out.println(arr[i]);  
}
System.out.println(Arrays.toString(arr)); // [1, 2, 3, 4, 5]
System.out.println(arr); // 타입@주소 -> [I@5fd0d5ae

char[] arr = {'a', 'b', 'c'}; 
System.out.println(arr); // abc
```

### 배열의 복사

for문은 배열의 요소 하나하나에 접근해서 복사하기에 비용이 많이 들지만, `arraycopy()`는 지정된 범위의 값들을 한 번에 복사한다. 즉, `System.arraycopy()`를 사용하는 것이 효율적이다.

`arraycopy(src, srcPos, dest, destPos, length);`

```java
// for문 복사  
for (int i = 0; i < arr.length; i++)  
    temp[i] = arr[i];  
  
// arraycopy() 복사  
System.arraycopy(arr, 0, temp, 0, arr.length);  // arr[0]에서 temp[0]으로 arr.length개의 데이터를 복사
```

## String배열

- `String[] name = new String[3];`
	- String타입은 참조변수를 저장하기 위한 공간이기에 `null`로 초기화 된다.
- 초기화
	- `String[] name = new String[] {"Kim", "Lee", "Park"};`
	- `new String[]`은 생략이 가능하다.
	- String 클래스만 예외적으로 큰따옴표로 간략하게 표현하는 것이 허용
		- 원래는 `new String("Kim")`처럼 new 연산자를 사용하여 객체를 생성해야 한다.
- char 배열과 String 클래스
	- char 배열이 아닌 String 클래스를 이용해서 문자열을 처리하는 이유
		- String 클래스가 char 배열에 여러 가지 기능(메서드)을 추가하여 확장한 것이기 때문이다.
		- char 배열을 사용하는 것보다 String 클래스를 사용하는 것이 문자열을 다루기 더 편리하다.
	- 차이
		- String 객체는 읽을 수만 있고 내용을 변경할 수는 없다.
		- char 배열은 작은 따옴표, String 배열을 큰따옴표를 사용
		
```java
String str = "Java";
str = str + "8"; // "Java8"이라는 새로운 문자열이 str에 저장
System.out.println(str); // 내용이 변경되는 것이 아니라 새로운 내용의 문자열이 생성
```

String과 관련된 메서드는 외워두는 것이 아니라 항상 구글링 해서 사용할 수 있도록 하자.

### 문자 코드 연산
	
char 타입은 문자가 저장되는 자료형이지만 이전에도 설명했듯이 문자는 아스키 코드, 유니코드처럼 고유의 문자 번호를 갖고 있다.도움이 될 수 있는 코드로는 `A: 65`, `a: 97`, `0: 48`가 있으며 알고리즘 문제를 풀 때 가끔 사용하는 경우가 있다.
		
```java
char[] str1 = {'7', '8', '9'};  

for (int i = 0; i < 3; i++) {  
    System.out.println(str1[i] - '0'); // 48을 빼주면서 문자를 숫자로 변환  
}

char[] str2 = {'A', 'B', 'C'};  

for (int i = 0; i < 3; i++) {  
    System.out.println((char)(str2[i] + 32)); // 32를 더하면서 대문자를 소문자로 변환  
}
```

### char 배열 String 클래스 변환

```java
char[] str1 = {'A', 'B', 'C'};
String str2 = new String(str1); // char -> String
char[] temp = str.toCharArray(); // String -> char
```

### 커맨드 라인을 통해 입력
	
`public static void main(String[] args)`

main 함수(메서드)의 매개변수인 args에 전달하여 사용하며 `java "main 메서드가 담긴 클래스 이름" args[0] args[1]`를 `java MainTest abc 123`처럼 사용하면 된다.
	
커맨드라인에 매개변수를 입력하지 않으면 자동으로 크기가 0인 배열이 생성되어 `args.length`의 값은 0이 된다. 배열을 생성하지 않으면 참조변수 args의 값은 null이 된다.

## 다차원 배열

- 보통 2차원 배열까지만 주로 사용한다.
- 배열을 선언하는 방법
	- 괄호만 하나 더 들어간다.
	- `int[][] score = new int[4][3];`
		- 4행 3열의 데이터
	- `배열이름[row index][column index]`
- 초기화
	- 가독성을 위해 한 줄 이상으로 초기화하기도 한다.
	- `int[][] arr = {{1, 2, 3}, {4, 5, 6}};`
	
```java
int[][] arr = {{1, 2, 3}, {4, 5, 6}};  
  
for (int i=0;i<arr.length;i++){  
    for(int j=0;j< arr[i].length;j++){  
        arr[i][j] = 10;  
    }  
}
```

- 가변 배열
	- 2차원 이상의 다차원 배열을 생성할 때 전체 배열 중 마지막 차원의 길이를 지정하지 않을 수 있다.
	- `int[][] score = new int[5][]`
	
## References

>- 남궁성, Java의 정석, 도우출판, 2016
>- 신용권, 혼자 공부하는 자바, 한빛미디어, 2019