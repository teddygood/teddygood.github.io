---
title: 'Java 스터디 3주차'
date: '2022-08-27'
tags: ["Java"]
draft: false

description: Spring까지!

sidebar_position: 1
---

## 객체지향 언어

객체 지향의 기본 개념은 실제 세계는 사물(객체)로 이루어져 있으며, 발생하는 모든 사건들은 사물간의 상호작용이다. 상속, 캡슐화, 추상화 개념을 중심으로 점차 구체적으로 발전됐으며, 1960년대 중반에 객체지향이론을 적용한 프로그래밍 언어 Simula가 탄생했다. 그 당시에는 FORTRAN이나 COBOL 같은 절차 지향 언어가 주류였으나, 1980년 대 중반에 C++를 포함하여 여러 객체지향 언어가 발표되면서 관심을 끌기 시작했다.

프로그램의 규모가 점점 커지고 사용자들의 요구가 빠르게 변화해가는 상황에서 절차지향 언어로는 극복하기 어렵다는 한계를 느껴 OOP를 이용한 개발방법론이 떠오르게 됐다.

- OOP 특징
	1. 코드의 재사용성이 높다.
	2. 코드의 관리가 용이하다. -> 유지보수
	3. 신뢰성이 높은 프로그래밍을 가능하게 한다. -> 코드의 중복 제거

OOP는 프로그램의 개발과 유지보수에 드는 시간과 비용을 획기적으로 개선했다.

객체지향 개념이 심오하고 처음 공부하면 어렵기에 코딩을 할 때 너무 객체지향 개념에 고민하기 보다 프로그램을 완성 후 리팩토링하는 것이 좋다.

## 클래스와 객체

클래스란 객체를 정의해놓은 것이며 객체를 생성하는 데 사용된다. 즉, 먼저 클래스를 작성 후 클래스 안에 객체를 생성하여 사용한다. 클래스를 한 번만 잘 만들어 놓기만 하면 매번 객체를 생성할 때마다 어떻게 객체를 만들어야 할지 고민하지 않아도 된다.

JDK에서는 프로그래밍을 위해 많은 수의 유용한 클래스를 기본적으로 제공

클래스는 객체가 아니다. 클래스와 객체는 별개의 개념이다. 객체는 사물 또는 개념처럼 실재로 존재하는 것이다. 객체가 가지고 있는 기능과 속성에 따라 용도가 달라진다.

객체도 배열로 다루는 것이 가능하다. 배열은 참조형 변수이기에 배열 안에 객체가 저장되는 것이 아니라, 객체의 주소가 저장된다. 또한, 같은 타입의 객체만 저장할 수 있다.

`Tv[] tvArr = new Tv[3];`

클래스의 또 다른 정의는 데이터(변수)와 함수의 결합이다. 클래스는 사용자정의 타입(user-defined type)으로 사용할 수 있다. 사용자정의 타입이란 프로그래머가 서로 관련된 변수들을 묶어서 하나의 타입으로 새로 추가하는 것이다. 클래스가 곧 사용자 정의 타입이며 자료형이 된다는 것이다.

### 객체의 상세한 정의

객체에 대한 정의는 책마다 다양하지만, `객체지향의 사실과 오해`에서는 객체를 상태(state)와 행동(behavior)을 함께 지닌 실체라고 정의한다. 자바에서 state에 해당하는 것이 attribute, member variable, field이며, behavior에 해당하는 것이 method, function이다.

`자바의 정석` 책에서는 property를 state와 같게 생각하는데 나는 이 의견에 동의하지 않는다.

property는 `getter / setter` 메소드 호출로 반환하며 일부 객체 지향 프로그래밍 언어에서 필드(멤버)와 메소드 간 기능의 중간인 클래스 멤버의 특수한 유형이다. attribute와 다르지만 영어 해석으로도 외형적으로도 비슷하여 거의 같은 말로 쓴다. 
			
setter는 클래스 외부에서 메서드를 통해 데이터에 접근하도록 하는 것이며, getter는 클래스 외부에서 객체의 데이터를 읽을 때 메소드를 사용해서 읽게 하는 것이다. Java나 C++ 같은 언어는 property가 구현되어 있지 않아 직접 set~, get~ 메서드를 만들어 정의 한다. 파이썬 또는 자바스크립트 같은 언어에는 property가 정의되어 있다.

이 기능은 데이터는 은닉하고 그 데이터를 접근하는 기능(메소드)를 밖으로 노출하는 `캡슐화` 기능에서 사용된다. 데이터의 무결성을 보장하기 위해 private로 만들어 데이터를 은닉하여 클래스 외부에서 못 건드리게 하는 것이다.
		
그러나 setter는 사용하지 않는 것이 좋다. 한 객체의 상태에 기반한 모든 행동은 객체 외부에서 결과값을 사용해 객체에 대한 결정을 내리면 안 된다. 객체가 스스로 하도록 결정해야 하며 즉, 한 객체의 상태에 대한 결정은 어떤 것이든 그 객체 안에서만 이루어져야 한다는 것이다. 그렇기에 setter는 사용하지 않는 것이 좋으며, 객체의 상태를 결정하는 것이 아닌 단순히 가져오기 위해 필요하다면 getter 정도는 사용이 가능하다.

### 인스턴스

어떤 클래스로부터 만들어진 객체를 그 클래스의 인스턴스(instance)라고 한다. 객체와 같은 의미지만, 객체는 모든 인스턴스를 대표하는 포괄적인 의미를 가진다.

인스턴스는 참조변수를 통해서만 다룰 수 있으며, 참조변수의 타입은 인스턴스의 타입과 일치해야 한다. 자신을 참조하는 인스턴스가 하나도 없으면 더 이상 사용되지 않으므로 Garbage Collector에 의해서 자동적으로 메모리에서 제거된다.

```java
public class Tv {  
    // 멤버변수  
    String color;  
    boolean power;  
    int channel;  
  
    // 메서드  
    void power() { 
        power = !power;  
    } //  TV ON/OFF  
  
    void channelUp() {  
        ++channel;  
    } // TV 채널 위로 이동  
  
    void channelDown() {  
        --channel;  
    } // TV 채널 아래로 이동  
}  
  
class TvTest {  
    public static void main(String args[]) {  
        Tv t1 = new Tv(); // TV 클래스 타입의 참조변수 선언  
        Tv t2 = new Tv();  
  
        t2 = t1; // t1이 저장하고 있는 주소값을 t2에 저장, t2가 원래 참조하고 있는 인스턴스는 사용하지 않음
        t1.channel = 7;  
        System.out.println("t1 channel = " + t1.channel);  
        System.out.println("t2.channel = " + t2.channel);  
    }  
}
```

## 변수와 메서드

### 변수 종류
	
- 인스턴스 변수(instance variable)
	- 클래스 영역에 선언
	- 클래스의 인스턴스를 생성할 때 만든다.
	- 독립적인 저장공간을 가지므로 서로 다른 값을 가질 수 있다.
	- 고유한 상태(state)를 유지해야하는 경우 인스턴스 변수로 선언
- 클래스 변수(class variable)
	- 인스턴스 변수 앞에 static을 붙인다.
	- 모든 인스턴스가 공통된 저장공간을 공유한다.
		- 인스턴스 변수는 인스턴스가 생성될 때마다 생성되므로 인스턴스마다 각기 다른 값을 유지할 수 있지만, 클래스 변수는 모든 인스턴스가 하나의 저장공간을 공유하므로 항상 공통된 값을 갖는다. 
	- 한 클래스의 모든 인스턴스들이 공통적인 값을 유지해야 하는 attribute인 경우 클래스 변수로 선언
- 지역 변수(local variable)
	- 메서드 내에 선언되어 메서드 내에서만 사용 가능
	- 메서드가 종료되면 소멸된다.
	- for, while 블럭 내에 선언된 변수도 지역 변수

### 메서드

특정 작업을 수행하는 일련의 문장들을 하나로 묶은 것을 메서드라 한다. 내부적으로 어떤 과정을 거쳐 결과를 만들어내는지 전혀 몰라도 괜찮으나, 구현 능력을 기르기 위해 직접 구현해보는 것도 나쁘지 않다.

- 메서드를 사용하는 이유
	1. 높은 재사용성(reusability)
	2. 중복된 코드 제거
	3. 프로그램의 구조화
		- main메서드는 전체 흐름이 한눈에 들어올 정도로 단순하게 구조화하는 것이 좋다.

메서드가 호출되면 지금까지 실행 중이던 메서드는 실행을 잠시 멈추고 호출된 메서드의 문장들이 실행된다. 

### 메서드 선언과 구현

`반환타입 메서드이름(매개변수)`

매개변수에는 자료형과 매개변수 이름을 표기해야 한다. 매개변수도 메서드 내에 선언된 것으로 간주되므로 지역변수이다.

반환타입(return type)에는 자료형이 오며, void로 선언하면 반환타입이 없다는 의미이다. 반환타입이 있다면 return문을 사용하여 반환해줘야 한다. 반환타입이 참조형인 경우에는 객체의 주소를 반환하니 정확히 알고 사용해야 한다. 또한, return문은 단 하나의 값만 반환할 수 있다. void로 선언할 경우에도 return문을 사용할 수는 있지만 굳이 적을 필요는 없다. 컴파일러가 메서드의 마지막에 `return;`문을 붙인다. `return;`문장은 메소드 실행을 강제 종료시키는 역할을 한다.

### argument(인자)와 parameter(매개변수)

많은 사람들이 같은 용어로 부르지만 사실 argument와 parameter는 다른 용어이다. argument는 메서드를 호출할 때 쓰는 것이고, parameter는 메서드를 생성할 때 쓰는 것이다. argument의 개수와 순서는 호출된 메서드에 선언된 매개변수와 일치해야 한다.

### 예제

```java
public class MathTest {  
    public static void main(String[] args) {  
        MyMath mm = new MyMath();  
  dfdf
        long result1 = mm.add(5L, 3L);  
        long result2 = mm.add(5L, 3L);  
        long result3 = mm.add(5L, 3L);  
        long result4 = mm.add(5L, 3L); // double형으로 자동 형변환이 된다.
  
        System.out.println(result1);  
        System.out.println(result2);  
        System.out.println(result3);  
        System.out.println(result4);  
    }  
}  
  
class MyMath {  
    long add(long a, long b) {  
        long result = a + b;  
        return result;  
        // return a + b;  
    }  
  
    long sub(long a, long b) {  
        return a - b;  
    }  
  
    long mul(long a, long b) {  
        return a * b;  
    }  
  
    double div(double a, double b) {  
        return a / b;  
    }  
}
```

### JVM의 메모리 구조
	
- 메서드 영역(method area)
	- JVM이 시작할 때 생성
	- 모든 스레드가 공유하는 영역
	- 프로그램 실행 중 어떤 클래스가 사용되면 JVM이 해당 클래스 파일을 클래스 로더로 읽어 클래스별로 정적 필드(static field)와 상수, 메서드, 생성자 등을 분류해서 저장
	- 클래스 변수도 이 영역에 생성
- 힙(heap)
	- 객체와 배열이 생성되는 영역
		- 자바에서는 배열을 객체 취급한다.
	- 스택 영역의 변수나 다른 객체의 필드에서 참조
		- 참조하는 변수나 필드가 없다면 의미없는 객체가 되기 때문에 JVM이 쓰레기로 취급하여 garbage collector를 실행시켜 자동으로 제거한다.
- 호출스택(call stack or execution stack)
	- 메서드의 작업에 필요한 메모리 공간
	- 메서드가 호출되면 호출스택에 호출된 메서드를 위한 메모리가 할당
		- 메모리에는 메서드가 작업을 수행하는 동안 지역변수들과 연산의 중간값 등을 저장하는데 사용
		- 메서드가 작업을 마치면 할당되었던 메모리공간은 반환되어 스택에서 제거된다.
		- 각 메서드를 위한 메모리상의 작업공간은 서로 구별된다.
		- 기존 타입 변수는 스택 영역에 직접 값을 갖지만 참조 타입 변수는 스택영역에 힙 영역의 객체 주소를 가진다. 
		- 객체를 생성하지 않고도 메서드를 호출할 수 있으려면 메서드 앞에 static을 붙여야 한다. 

### 기본형 매개변수와 참조형 매개변수
	
자바에서는 메서드를 호출할 때 매개변수로 지정한 값을 메서드의 매개변수에 복사해서 넘겨준다. 기본형일 때는 기본형 값이 복사되지만, 참조형이면 인스턴스의 주소가 복사되는 방식이다. 즉, 기본형 매개변수는 변수의 값을 읽기만 할 수 있고, 참조형 매개변수는 말 그래도 참조하는 방식이기에 변수의 값을 읽고 변경할 수 있다. 당연히 배열도 참조형 매개변수로 사용할 수 있다.

```java
class Data {  
    int x;  
}  
  
public class changeParameter {  
    public static void main(String[] args) {  
        Data d = new Data();  
        d.x = 10;  
        System.out.println("OG: " + d.x);  
        change1(d.x);  
        System.out.println("after: " + d.x); // 10 
        change2(d);  
        System.out.println("after: " + d.x); // 1000 
    }  
  
    static void change1(int x) {  
        x = 1000;  
        System.out.println("change(): " + x); // 1000 
    }  
  
    static void change2(Data d) {  
        d.x = 1000;  
        System.out.println("change(): " + d.x); // 10000 
    }  
}
```

### 재귀함수(recursive function)

자기 자신을 다시 호출하는 함수이다. call by value를 통해 원래의 값이 아닌 복사된 값으로 작업한다. 반복문보다 수행시간이 더 오래 걸린다는 단점이 있으나 알아보기 쉽다는 장점 때문에 사용한다. 재귀식 같이 쓰게 되어 가독성이 좋다.
	
```java
public class Factorial {  
    public static void main(String[] args) {  
        int result = factorial(4);  
  
        System.out.println(result);  
    }  
  
    static int factorial(int n) {  
        if (n <= 1)  
            return 1;  
        else 
            return n * factorial(n - 1);  
    }  
}
```

일반적인 함수든 재귀함수든 언제나 프로그램은 종료 조건이 중요하다. 재귀함수에 조건을 적용하지 않으면 무한적으로 돌아가는 것처럼 main 메서드도 자기 자신을 계속해서 호출하면 무한적으로 호출하게 되어 StackOverflow에러가 발생하여 프로그램이 비정상적으로 종료된다.

### 클래스 메서드(static메서드)와 인스턴스 메서드

인스턴스 메서드는 반드시 객체를 생성해야만 호출할 수 있는 반면, 클래스 메서드는 객체를 생성하지 않고 `클래스이름.메서드이름`과 같이 호출할 수 있다. 또한, 인스턴스 메서드는 메서드의 작업을 수행하는 데 인스턴스 변수를 필요로 할 때 사용하고, 클래스 메서드는 인스턴스를 필요로 하지 않을 때 사용한다. 헷갈릴 수 있는데 즉, 클래스의 멤버변수 중 모든 인스턴스에 공통된 값을 유지해야하는 경우가 있는지 생각해보고 있으면 static을 붙인다. 또한, 메서드 중에서 인스턴스 변수 또는 인스턴스 메서드를 사용하지 않는 메서드에는 static을 붙일 것을 고려한다.

```java
class MyMathMethodTest {  
    long a, b; // 인스턴스 변수  
  
    // 인스턴스 변수 a, b만을 이용해서 작업 -> 매개변수가 필요없음  
    long add() {  
        return a + b;  
    }  
  
    long sub() {  
        return a - b;  
    }  
  
    long mul() {  
        return a * b;  
    }  
  
    double div() {  
        return a / b;  
    }  
  
    // 인스턴스 변수와 관계없이 매개변수만으로 작업  
    static long add(long a, long b) {  
        return a + b;   // 지역변수  
    }  
    static long sub(long a, long b) {  
        return a - b;  
    }  
    static long mul(long a, long b) {  
        return a * b;  
    }  
    static double div(double a, double b) {  
        return a / b;  
    }  
}  
  
public class MyMathMethod {  
    public static void main(String[] args) {  
        // 클래스 메서드 호출, 인스턴스 생성없이 호출  
        System.out.println(MyMathMethodTest.add(200L, 100L));  
        System.out.println(MyMathMethodTest.sub(200L, 100L));  
        System.out.println(MyMathMethodTest.mul(200L, 100L));  
        System.out.println(MyMathMethodTest.div(200L, 100L));  
  
        MyMathMethodTest mm = new MyMathMethodTest(); // 인스턴스 생성  
        mm.a = 200L;  
        mm.b = 100L;  
  
        // 인스턴스 메서드는 객체생성 후에 호출  
        System.out.println(mm.add());  
        System.out.println(mm.sub());  
        System.out.println(mm.mul());  
        System.out.println(mm.div());  
    }  
}
```

같은 클래스에 속한 멤버들 간에는 별도의 인스턴스를 생성하지 않고도 서로 참조 또는 호출이 가능하다. 그러나 클래스 멤버가 인스턴스 멤버를 참조 또는 호출하고자 하는 경우에는 인스턴스를 생성해야 한다. 인스턴스 멤버가 존재하는 시점에 클래스 멤버는 항상 존재하지만, 클래스 멤버가 존재하는 시점에는 인스턴스 멤버가 존재하지 않을 수도 있기 때문이다.

멤버가 아니라 메서드는 같은 클래스 내의 서로 객체의 생성이나 참조변수 없이 직접적으로 호출이 가능하지만, static 메서드는 인스턴스 메서드를 호출할 수 없다.

클래스 멤버는 언제나 참조 또는 호출이 가능하며, 인스턴스 멤버는 반드시 객체를 생성한 후에만 참조 또는 호출이 가능하다. 하나의 인스턴스멤버가 존재한다는 것은 인스턴스가 이미 생성되었다는 것을 의미하기에 다른 인스턴스 멤버들도 모두 존재하게 된다.

```java
public class MemberCall {  
    int iv = 10;  
    static int cv = 20;  
  
    int iv2 = cv;  
    // static int cv2 = iv; // error, 클래스 변수는 인스턴스 변수를 사용할 수 없음  
    static int cv2 = new MemberCall().iv; // 객체 생성 필수  
  
    static void staticMethod1() {  
        System.out.println(cv);  
        // System.out.println(iv); // error, 클래스 메서드에서 인스턴스 변수 사용 불가  
        MemberCall c = new MemberCall();  
        System.out.println(c.iv); // 객체를 생성한 후에야 인스턴스 변수 참조 가능  
    }  
  
    void instanceMethod1() {  
        System.out.println(cv);  
        System.out.println(iv); // 인스턴스 메서드에서는 인스턴스 변수 바로 사용 가능  
    }  
  
    static void staticMethod2() {  
        staticMethod1();  
        // instanceMethod1(); // error 클래스 메서드에서는 인스턴스 메서드 호출 불가  
        MemberCall c = new MemberCall();  
        c.instanceMethod1(); // 인스턴스를 생성한 후에야 호출할 수 있음  
    }  
  
    void instanceMethod2() {  
        staticMethod1(); // 인스턴스 메서드에서는 인스턴스 메서드와 클래스 메서드 모두 인스턴스 생성 없이 바로 호출 가능  
        instanceMethod1();  
    }  
}
```

## 오버로딩(overloading)

한 클래스 내에 같은 이름의 메서드를 여러 개 정의하는 것이다. 한 클래스 내에 이미 사용하려는 이름과 같은 이름을 가진 메서드가 있어도 매개변수의 개수 또는 타입이 다르면 같은 이름을 사용하여 메서드를 정의하는 것이 가능하다. 오버로딩의 대표적인 예로는 `println()`이 있다. 주의해야 할 점은 매개변수의 순서가 다른 경우에 호출될 메서드가 구분될 수 있기에 오버로딩으로 간주된다는 것이다. 오버로딩의 장점은 네이밍이 편리하다는 것이다. 이름이 같으니 같은 기능을 하겠다는 예측을 할 수 있다. C++에는 연산자 오버로딩이 존재하지만, Java는 지원하지 않는다. 

- 오버로딩 조건
	1. 메서드 이름이 같아야 한다.
	2. 매개변수 개수 또는 타입이 같아야 한다.
		- 리턴 타입은 오버로딩에 아무런 영향을 주지 않음
	
```java
class Myadd {  
    int add(int a, int b) {  
        return a + b;  
    }  
  
    int add(int[] arr) {  
        System.out.println("arr");  
        int result = 0;  
        for (int i = 0; i < arr.length; i++) {  
            result += arr[i];  
        }  
        return result;  
    }  
}  
  
public class OverloadingTest {  
    public static void main(String[] args) {  
        Myadd ma = new Myadd();  
        System.out.println(ma.add(3, 3));  
  
        int[] arr = {100, 200, 300};  
        System.out.println(ma.add(arr));  
    }  
}
```

### 가변인자와 오버로딩

가변인자(variable arguments)란 매개변수를 고정으로 지정하지 않고 동적으로 지정할 수 있는 기능이다. 매개변수의 제일 마지막에 선언되며 내부적으로 배열을 이용한다. 가변인자가 선언된 메서드를 호출할 때마다 배열이 새로 생성되기에 효율적이지는 않다. 그렇기에 잘 활용해야 한다.

```java
public class VarArgsEx {  
    public static void main(String[] args) {  
        String[] strArr = {"100", "200", "300"};  
  
        System.out.println(concatenate(",", "1", "2", "3", "4", "5"));  
        System.out.println(concatenate("-", strArr));  
    }  
  
    static String concatenate(String delim, String... args) {  
        String result = "";  
  
        for (String str : args) {  
            result += str + delim;  
        }  
        return result;  
    }  
  
    // 두 오버로딩된 메서드가 구분되지 않음  
    // 가변인자를 선언한 메서드를 오버로딩하면 호출했을 때 구별되지 않는 경우가 발생하기 쉬움
//    static String concatenate(String... args){  
//        return concatenate("", args);  
//    }  
}
```

## 생성자(constructor)

인스턴스가 생성될 때 호출되는 인스턴스 초기화 메서드이다. 인스턴스 변수의 초기화 작업에 주로 사용되며 인스턴스 생성 시에 실행되어야 할 작업을 위해서도 사용된다. 

클래스 내에 선언하며 리턴값이 없다. 리턴값이 없다고 해서 void를 적어야 하나 생각할 수 있지만, 반환형 자체를 적을 필요가 없다. 

생성자의 이름은 클래스의 이름과 같아야 한다.

연산자 new가 인스턴스를 생성하는 것이지, 생성자가 인스턴스를 생성하는 것이 아니다.

### 기본 생성자(default constructor)

`클래스이름() { }`

모든 클래스에는 반드시 하나 이상의 생성자가 정의되어야 한다. 지금까지 클래스에 생성자를 정의하지 않고 인스턴스를 생성할 수 있던 건 컴파일러가 기본 생성자를 자동으로 추가했기 때문이다. 컴파일러가 자동적으로 기본 생성자를 추가해주는 경우는 클래스 내에 생성자가 하나도 없을 때이다.

### 생성자 오버로딩

매개변수를 다르게 하는 생성자를 여러 개 선언하는 것이다. 

```java
class Car {  
    String color;  
    String gearType;  
    int door;  
    Car() {}  
    Car(String c, String g, int d) {  
        color = c;  
        gearType = g;  
        door = d;  
    }  
}  
  
public class Example {  
    public static void main(String[] args) {  
        Car c1 = new Car();  
        c1.color = "white";  
        c1.gearType = "auto";  
        c1.door = 4;  
        Car c2 = new Car("white", "auto", 4);  
        System.out.println(c1.color + c1.gearType + c1.door);  
        System.out.println(c2.color + c2.gearType + c2.door);  
    }  
}
```

### this와 this()

`this()`는 클래스 내부에 있는 생성자 또는 다른 클래스의 생성자를 호출할 때 사용한다. 반드시 첫 줄에서만 호출이 가능하며, 당연히 `this()`를 포함하고 있는 생성자 즉, 자기 자신은 호출이 불가능하다. 또 당연히 인자는 호출되는 생성자의 매개변수에 맞게 제공해야 한다. 

`this`는 참조변수로 인스턴스 자신을 가리키는 것이다. this로 인스턴스 변수에 접근할 수 있으며, 인스턴스 멤버만 this를 사용할 수 있다. static 메서드에서는 사용이 불가능하다. static 메서드는 인스턴스를 생성하지 않고 호출될 수 있으므로 static 메서드가 호출된 시점에는 인스턴스가 존재하지 않을 수도 있다.

생성자를 포함한 모든 인스턴스 메서드에 사실 this가 지역변수로 숨겨진 채로 존재한다. 인스턴스 메서드는 특정 인스턴스와 관련된 작업을 하기에 자신과 관련된 인스턴스의 정보가 필요하기 때문이다.

같은 클래스 내의 생성자들은 일반적으로 서로 관계가 깊은 경우가 많아 서로 호출하도록 하여 연결해주면 더 좋은 코드를 얻을 수 있다. 수정이 필요한 경우에도 몇몇 코드만 변경하면 되기에 유지보수가 쉬워진다.

생성자의 매개변수로 인스턴스 변수들의 초기값을 넣는 경우가 많기 때문에 매개변수와 인스턴스 변수와 이름이 일치하는 경우가 자주 있다. 이럴 때 `this`를 사용한다.

```java
class Car {  
    String color;  
    String gearType;  
    int door;  
    Car() {  
        this("white", "auto", 4);  
    }  
    Car(String color){  
        this(color, "auto", 4);  
    }  
    Car(String color, String gearType, int door) {  
        this.color = color; // 인스턴스 변수와 매개변수 구별이 가능함 
        this.gearType = gearType;  
        this.door = door;  
    }  
}  
  
public class Example {  
    public static void main(String[] args) {  
        Car c1 = new Car();  
  
        Car c2 = new Car("blue");  
  
        System.out.println(c1.color + c1.gearType + c1.door);  
        System.out.println(c2.color + c2.gearType + c2.door);  
    }  
}
```

### 생성자를 이용한 복사

사용하고 있는 인스턴스와 같은 상태를 갖는 인스턴스를 하나 더 만들고 싶을 때 생성자를 이용한다. 두 인스턴스가 같은 상태를 갖는다는 것은 두 인스턴스의 모든 인스턴스 변수가 동일한 값을 가진다는 의미이다.

```java
class Car {  
    String color;  
    String gearType;  
    int door;  
  
    Car() {  
        this("white", "auto", 4);  
    }  
  
    // 인스턴스의 복사를 위한 생성자  
    Car(Car c) {  
        color = c.color;  
        gearType = c.gearType;  
        door = c.door;  
    }  
  
    Car(String color, String gearType, int door) {  
        this.color = color;  
        this.gearType = gearType;  
        this.door = door;  
    }  
}  
  
public class Example {  
    public static void main(String[] args) {  
        Car c1 = new Car();  
        Car c2 = new Car(c1); // c1의 복사본  
        System.out.println(c1.color + c1.gearType + c1.door);  
        System.out.println(c2.color + c2.gearType + c2.door);  

        // c1의 값들이 변경되어도 c2는 영향을 받지않음
        c1.door = 100;  
        System.out.println(c1.color + c1.gearType + c1.door);  
        System.out.println(c2.color + c2.gearType + c2.door);  
    }  
}
```

### 인스턴스를 생성할 때 결정해야 할 것
 
- 클래스: 어떤 클래스의 인스턴스를 생성할 것인가?
- 생성자: 선택한 클래스의 어떤 생성자로 인스턴스를 생성할 것인가?

### 6변수의 초기화

가능하면 변수의 선언과 동시에 적절한 값으로 초기화 하는 것이 좋다. 지역변수는 사용하기 전 반드시 초기화를 직접 해줘야 하며, 멤버 변수는 자동으로 자료형에 맞게 기본값으로 초기화된다.

- 멤버변수 초기화 방법
	1. 명시적 초기화(explicit initialization)
		- 변수 선언과 동시에 초기화 하는 것
	2. 생성자(constructor)
	3. 초기화 블럭(initialization block)
		- 클래스 초기화 블럭
			- 클래스 변수의 복잡한 초기화에 사용
			- 클래스 내부에 중괄호로 블럭을 만들고 static 키워드를 추가하여 정의
			- 메모리에 처음 로딩될 때 한 번만 수행
		- 인스턴스 초기화 블럭
			- 인스턴스변수의 복잡한 초기화에 사용
			- 클래스 내부에 중괄호로 블럭을 만들어 정의
				- 조건문, 반복문 등을 자유롭게 사용 가능
					- 초기화 작업이 복잡하여 명시적 초기화만으로 부족한 경우 초기화 블럭 사용
			- 인스터스가 생성될 때마다 실행
			- 생성자보다 인스턴스 초기화 블럭이 먼저 수행
			- 생성자와 차이가 거의 없어 잘 사용되지 않음
				- 주로 공통으로 수행되어야 하는 코드를 쓸 때 사용 -> 코드 중복 제거
				
```java
public class BlockTest {  
    // 클래스 초기화 블럭  
    // 처음 로딩될 때 한 번만 출력    
    static {  
        System.out.println("static { }");  
    }  
    // 인스턴스 초기화 블럭  
    {  
        System.out.println("{ }");  
    }  
  
    public BlockTest(){  
        System.out.println("constructor");  
    }  
  
    public static void main(String[] args) {  
        BlockTest bt = new BlockTest();  
        BlockTest bt2 = new BlockTest();  
    }  
}
```

### 변수 초기화

클래스 변수는 항상 인스턴스 변수보다 항상 먼저 생성되고 초기화 된다.

- 클래스 변수 초기화 시점
	- 클래스가 처음 로딩될 때 한 번 초기화
- 인스턴스 변수 초기화 시점
	- 인스턴스가 생성될 때마다 각 인스턴스 초기화
- 클래스 변수 초기화
	- 기본값 -> 명시적 초기화 -> 클래스 초기화 블럭
- 인스턴스 변수 초기화
	- 기본값 -> 명시적 초기화 -> 인스턴스 초기화 블럭 -> 생성자
- 프로그램 실행 중 클래스는 메모리에 로딩
	- 해당 클래스가 이미 로딩되어 있다면 다시 로딩하지 않음
	- 로딩 시기는 JVM의 종류에 따라 다를 수 있다.
		- 클래스가 필요할 때 바로 메모리에 로딩되도록 설계가 되어있는 경우도 있고, 실행 효율을 높이기 위해서 사용될 클래스들을 프로그램이 시작할 때 미리 로딩하도록 되어 있는 것도 있다.

## References

>- 남궁성, Java의 정석, 도우출판, 2016
>- 신용권, 혼자 공부하는 자바, 한빛미디어, 2019
>- 조영호, 객체지향의 사실과 오해, 위키북스, 2015