---
title: 'Java 스터디 4주차'
date: '2022-09-03'
# tags: ["Java"]
draft: false

description: Spring까지!

sidebar_position: 1
---

## 상속(inheritance)

### 정의

상속이란 기존의 클래스를 재사용하여 새로운 클래스를 작성하는 것이다. 상속을 이용하면 클래스를 보다 적은 양의 코드로 생성할 수 있고 많은 코드를 같이 관리할 수 있기 때문에 추가 및 변경에 매우 도움이 된다. 즉, 코드의 재사용성을 높이고 중복된 코드 제거, 프로그램 생산성 증가, 유지보수 편리 등의 장점을 가진다.

상속 받고자 하는 클래스 이름을 `extends`키워드와 함께 쓰면 된다.

```java
// Child 클래스가 Parent 클래스를 상속 받음
class Child extend Parent {

}
```

상속해주는 클래스를 부모 클래스, 상속 받는 클래스를 자식 클래스라고 한다.

부모 클래스(parent class)는 슈퍼 클래스(super class), 파생 클래스(derived class)라고 부르기도 하며, 자식 클래스(child class)는 서브 클래스(sub class), 기반 클래스(base class)라고 부르기도 한다.

상속 관계를 그림으로 표현한 것을 상속 계층도(class hierachy)라고 한다. 이 용어 자체가 잘 쓰이는지는 모르겠다.

자식 클래스는 부모 클래스의 모든 멤버를 상속 받는다. 즉, 자식 클래스는 부모 클래스의 멤버들을 포함한다. 이렇게 되면 자식 클래스가 다수가 될 때 부모 클래스만 수정하면 되므로 작업이 상당히 간단해진다. 부모 클래스가 변경되면 자식 클래스가 변경되지만, 자식 클래스가 변경된다고 해서 부모 클래스가 변경되지 않는다. 더 쉽게 설명하면 자식 클래스의 부분집합이 부모 클래스가 된다는 것이다.

여기서 그럼 원래 있던 자식 클래스에서 자식 클래스를 하나 더 추가하면 어떤 관계가 될까? 

부모 클래스와 손자의 관계를 가진 클래스를 말하는 것이다. 결과는 그 클래스도 부모, 자식 관계가 된다. 즉, 부모 클래스를 수정하면 손자 관계인 클래스까지 수정이 된다는 것이다.

![상속](../../assets/inheritance.png)

생성자와 초기화 블럭은 상속되지 않으며 멤버만 상속된다.

접근 제어자(access modifier)가 private 또는 default인 멤버들은 상속되지 않는 것이 아니라 상속은 받지만 자식 클래스로부터의 접근이 제한되는 것이다.

### 포함 관계(Composite)

한 클래스의 멤버변수로 다른 클래스 타입의 참조변수를 선언하는 것을 의미한다.

```java
// Circle과 Shape는 상속 관계
// Circle은 Shape이다.
class Circle extends Shape {
    // Circle과 Point는 포함관계
    // Circle은 Point를 갖고 있다.
    Point c = new Point(); 
    int r;  
}
```

하나의 큰 클래스를 작성하는 것보다 여러 개의 클래스를 포함 관계로 갖고 있는 것이 더 간결하다. 또한, 나라면 기존 클래스에 새로운 기능이 추가된 클래스를 만드는 경우가 아니라면 포함 관계를 사용할 것 같다. 

상속 관계는 ~은 ~이다(is -a), 포함 관계는 ~은 ~을 갖고 있다(has -a)를 넣어서 문장을 만들어보면 어떻게 만들어야 할지 쉽게 보인다.

```java
public class DrawShape {  
    public static void main(String[] args) {  
  
        // 인스턴스 생성  
        Point[] p = {  
                new Point(100, 300),  
                new Point(140, 50),  
                new Point(200, 100)  
        };  
  
        Point p1 = new Point(); // (0, 0)  
        Circle c1 = new Circle(); // ((0, 0), 100)  
  
        Triangle t = new Triangle(p);  
        Circle c = new Circle(new Point(150, 150), 50);  
  
  
        t.printInfo();  
        c.printInfo();  
  
        System.out.println(p1.getXY());  
        c1.printInfo();  
    }  
}  
  
class Shape {  
    String color = "black";  
  
    void printInfo() {  
        System.out.printf("color = %s %n", color);  
    }  
}  
  
class Point {  
    int x;  
    int y;  
  
    // x, y  초기화  
    Point(int x, int y) {  
        this.x = x;  
        this.y = y;  
    }  
  
    // 클래스 내부 생성자 호출  
    // 매개변수가 아무 것도 없을 때 사용    Point() {  
        this(0, 0);  
    }  
  
    // getter: 클래스 외부에서 메서드를 사용하여 데이터를 읽도록 한다.  
    String getXY() {  
        return "(" + x + "," + y + ")";  
    }  
}  
  
// Circle은 Shape이다. -> Circle은 Shape를 상속 받았다.  
class Circle extends Shape {  
    // Circle은 Point를 갖고 있다. -> Circle과 Point는 포함관계이다.  
    Point center; // 원점  
    int r; // 반지름  
  
    // 클래스 내부 생성자 호출    Circle() {  
        this(new Point(0, 0), 100); // Circle(Point center, int r) 호출  
    }  
  
    // 생성자를 사용하여 center, r 초기화  
    Circle(Point center, int r) {  
        this.center = center;  
        this.r = r;  
    }  
  
    void printInfo() {  
        System.out.printf("center = (%d, %d), r = %d, color = %s%n", center.x, center.y, r, color);  
    }  
}  
  
// Triangle은 Shape이다. -> Triangle은 Shape를 상속 받았다.  
class Triangle extends Shape {  
    Point[] p = new Point[3];  
  
    // p 초기화  
    Triangle(Point[] p){  
        this.p = p;  
    }  
  
    void printInfo() {  
        System.out.printf("p1=%s, p2=%s, p3=%s, color=%s %n", p[0].getXY(), p[1].getXY(), p[2].getXY(), color);  
    }  
}
```

책에는 프로그램의 모든 클래스를 분석하여 가능한 많은 관계를 맺도록 노력해서 코드의 재사용성을 높여야 한다고 적혀 있는데 과연 이게 맞을까? 너무 많고 복잡한 관계는 오히려 프로그램을 스파게티 코드로 만들지 않을까? 

### 단일 상속(single inheritance)

C++에서는 여러 부모 클래스로부터 상속받는 것이 가능한 다중상속(multiple inheritance)을 허용하지만 자바에서는 단일 상속만을 허용한다. 둘 이상의 클래스로부터 상속을 받을 수는 없다. 다중상속을 허용하게 되면 복합적인 기능을 가진 클래스를 쉽게 작성할 수 있지만, 클래스간의 관계가 매우 복잡해지며 서로 다른 클래스로부터 상속받은 멤버간의 이름이 같은 경우 구별할 수 있는 방법이 없게 된다.

다중 상속이 됐다고 가정했을 때, static 메서드를 사용하면 메서드 이름 앞에 클래스의 이름을 붙여서 구별할 수 있겠지만, 인스턴스 메서드의 경우 선언부가 같은 두 메서드를 구별할 수 있는 방법이 없다. 이 문제를 해결하려면 부모 클래스의 메서드 이름이나 매개변수를 바꾸는 방법 밖에 없다. 그렇기에 자바에서는 다중 상속을 포기하고 단일상속만을 허용한다. 단일 상속은 클래스 간의 관계가 명확해지고 코드를 더욱 신뢰할 수 있게 만들어준다.

### Object 클래스

Object클래스는 최상위에 있는 부모클래스이다. 모든 클래스는 Object 클래스로부터 상속을 받는다. 아무 클래스로부터 상속받도록 되어 있지 않은 코드에는 컴파일러가 자동으로 `extends Object`를 추가한다. toString 또는 equals(Object obj) 같은 메서드가 Object 클래스에 정의된 대표적인 메서드다. Object 클래스에는 모든 인스턴스가 가져야 할 기본적인 11개의 메서드가 정의되어 있다. 

`toString()`은 참조변수의 출력이나 덧셈연산자를 이용한 참조변수와 문자열의 결합에는 toString()이 자동으로 호출된다. 자바에서 제공하는 API 대부분은 해당 객체의 값을 리턴하도록 toString() 메서드가 오버라이딩 되어 있다. 

## 오버라이딩

### 정의

오버라이딩은 부모 클래스로부터 상속받은 메서드의 내용을 변경하여 사용하고자 하는 메서드에 덮어쓰는 것이다. 자식 클래스에 맞게 변경해야 하는 경우가 있는 이럴 때 메서드를 오버라이딩한다. 오버라이딩은 `메서드 재정의`라고 부르기도 한다.

### 오버라이딩 조건

메서드의 선언부는 부모와 완전히 동일해야 한다. 즉, 이름, 매개변수, return 타입이 같아야 한다는 것이다. JDK 1.5부터는 convariant return type이 추가되어 return 타입을 자식 클래스의 타입으로 변경하는 것이 가능하다.

접근 제어자(access modifier)를 부모 클래스의 메서드보다 좁은 범위로 변경할 수 없다. 만약 부모 클래스의 메서드가 protected로 정의되어 있다면 오버라이딩하는 자식 클래스의 메서드는 protected 또는 public이어야 한다. 일반적으로 같은 범위의 접근 제어자를 사용한다. 접근 제어자는 public, protected, (default), private 순으로 접근 범위가 좁아진다.

자바는 `throws` 키워드를 메서드에 붙여 프로그래머가 고의로 예외를 발생시킬 수가 있다. 오버라이딩을 할 때 조상 클래스의 메서드보다 많은 수의 예외(exception)를 선언할 수 없다.

인스턴스 메서드를 static 메서드로, 또는 그 반대로 변경할 수 없다.

부모 클래스에 정의된 static 메서드를 자식 클래스에서 똑같은 이름의 static 메서드로 정의할 수 있으나 이건 별개의 static 메서드로 정의된 것이다. 오버라이딩이 아니라는 것이다. static 메서드는 클래스에 묶여 있다고 생각하면 된다.

```java
public class Calculator {  
    double areaCircle(double r) {  
        System.out.println("Calculator 객체의 함수 실행");  
        return 3.14159 * r * r;  
    }  
}

public class Computer extends Calculator {  
    @Override  
    double areaCircle(double r) {  
        System.out.println("Computer 객체의 함수 실행");  
        return Math.PI * r * r;  
    }  
}

public class ComputerExample {  
    public static void main(String[] args) {  
        int r = 10;  
        Calculator calculator = new Calculator();  
        System.out.println(calculator.areaCircle(r));  
        System.out.println();  
        // 컴퓨터 객체의 함수가 더 자세한 결과를 출력한다.  
        Computer computer = new Computer();  
        System.out.println(computer.areaCircle(r));  
    }  
}
```

`@Override` 어노테이션은 생략해도 괜찮지만 메서드가 정확히 오버라이딩 된 것인지 컴파일러가 확인하기에 개발자의 실수를 줄여준다. 즉, 붙여주는 것이 도움이 되며 개발자가 이해하기도 쉽다. 

### 오버로딩 vs 오버라이딩

오버로딩은 기존에 없던 새로운 메서드를 추가하는 것이고 오버라이딩은 부모로부터 상속받은 메서드의 내용을 변경(덮어쓰기)하는 것이다. 

### super

super는 자식 클래스에서 부모 클래스로부터 상속받은 멤버를 참조는데 사용되는 참조 변수이다. 생성자에서 멤버변수와 매개변수의 이이 같을 때 this를 붙여 구별했듯이 상속받은 멤버와 자신의 멤버와 이름이 같을 때 super를 사용하여 구별한다.

부모 클래스로부터 상속받은 멤버도 자식 클래스의 멤버이므로 super대신 this를 사용할 수도 있다. 그러나 부모 클래스의 멤버와 자식 클래스의 멤버가 중복 정의되어 서로 구별해야 하는 경우에는 super를 사용하는 것이 좋다.

모든 인스턴스 메서드에는 인스턴스의 주소가 지역변수로 저장되는데 이게 참조변수인 this와 super의 값이 된다. 

this처럼 super도 static 메서드에서는 사용할 수 없고 인스턴스 메서드에서만 사용할 수 있다.

같은 이름의 멤버변수가 부모, 자식 클래스에 있을 대는 super와 this는 서로 다른 값을 참조한다. super는 부모로부터 상속 받은 멤버변수, this는 자식에 선언된 멤버변수가 된다. 

```java
public class SuperTest {  
    public static void main(String[] args) {  
        Child c = new Child();  
        c.method();  
    }  
}  
  
class Parent {  
    int x = 10;  
  
}  
  
class Child extends Parent {  
    int x = 20;  
  
    void method(){  
        System.out.println(x); // 20
        System.out.println(this.x); // 20 
        System.out.println(super.x); // 10
    }  
}
```

메서드도 super를 써서 호출할 수 있다. 부모 클래스의 메서드를 자식 클래스에서 오버라이딩한 경우에 super를 사용한다.

부모 클래스의 메서드 내용에 추가적으로 작업을 덧붙이는 경우 super를 사용하여 부모 클래스의 메서드를 포함시키는 것이 좋다. 나중에 부모 클래스의 메서드가 변경되더라도 변경된 내용이 자식 클래스의 메서드에 자동적으로 반영되기 때문이다.

```java
class Point {  
    int x;  
    int y;  
    String getLocation() {  
        return "x:" + x + " y:" + y;  
    }  
}  
  
class Point3D extends Point {  
    int z;  
    // 오버라이딩  
    String getLocation(){  
        return super.getLocation() + ", z:" + z;  
    }  
}
```

### super()

this()처럼 super()도 생성자다. this()는 같은 클래스의 다른 생성자를 호출할 때 사용하지만, super()는 부모 클래스의 생성자를 호출할 때 사용한다. 

자식 클래스의 인스턴스를 생성하면 자식, 조상의 멤버가 모두 합쳐진 하나의 인스턴스가 생성된다. 하나의 인스턴스가 생성되기 때문에 부모 클래스 멤버의 초기화 작업도 수행되어야 하는데 이 때 자식 클래스의 생성자에서 부모 클래스의 생성자가 호출되어야 한다.

this()가 첫 줄에서 생성자를 호출했듯이 super() 또한 생성자의 첫 줄에서 부모 클래스의 생성자를 호출해야 한다. 그 이유는 자식 클래스의 멤버가 부모 클래스의 멤버를 사용할 수도 있기에 부모 멤버들이 먼저 초기화 되어야 하기 때문이다. 

생성자의 호출은 최상위 클래스인 Object 클래스의 생성자인 Object()까지 가서야 끝이 난다. 그렇기에 Object 클래스를 제외한 모든 클래스의 생성자는 첫 줄에 자신의 다른 생성자 또는 부모의 생성자를 호출해야 한다.

만약, 생성자 첫 줄에서 다른 생성자를 추가하지 않았다면 컴파일러는 생성자의 첫 줄에 `super();`를 자동적으로 추가한다. "`super();`를 추가하면 편한 것이 아닌가?" 라고 생각할 수도 있지만, 매개변수가 없는 생성자를 호출하기 때문에 매개변수가 없는 생성자를 미리 선언하지 않았다면 에러를 발생시킬 수 있다. 그렇기에 부모 클래스의 멤버는 부모의 생성자에 의해 초기화되어야 한다.

```java
class PointTest {  
    public static void main(String[] args) {  
        Point3D p3 = new Point3D(1, 2, 3);  
        System.out.println(p3.x + p3.y + p3.z);
    }  
}  
  
class Point {  
    int x;  
    int y;  
  
    Point(int x, int y) {  
        // super(); -> Object 클래스의 Object() 생성자 호출
        this.x = x;  
        this.y = y;  
    }
  
    String getLocation() {  
        return "x:" + x + " y:" + y;  
    }  
}  
  
class Point3D extends Point {  
    int z;  
  
    Point3D(int x, int y, int z) {  
        // 아래와 같이 사용하면 컴파일러가 super();를 자동으로 추가하여 Point() 생성자 호출 -> 없기 때문에 에러 발생  
        // this.x = x;        // this.y = y;        super(x, y); // 부모 클래스 생성자 Point(int x, int y)를 호출  
        this.z = z;  
    }  

    Point3D() {  
        this(100, 200, 300);  
    }

    // 오버라이딩  
    String getLocation() {  
        return super.getLocation() + ", z:" + z;  
    }  
}
```

## Package와 import 

### 패키지

패키지에는 클래스 또는 인터페이스를 포함시킬 수 있으며, 서로 관련된 클래스들끼리 그룹 단위로 묶어놓은 것이다. 즉, 클래스를 효율적으로 관리할 수 있다. 같은 이름의 클래스이더라도 다른 패키지에 존재하는 것이 가능하기에 이름 간의 충돌이 일어나지 않는다.

클래스의 실제 이름은 패키지명을 포함한 것이다. 예를 들어 String의 실제 이름은 java.lang.String으로 java.lang 패키지에 속한 String 클래스라는 의미이다. 

클래스가 `.class`파일로 존재하는 것처럼 패키지도 하나의 디렉토리이다. 그렇기에 패키지에 속한 클래스라면 디렉토리에 클래스파일이 존재해야 한다. 

디렉토리가 하위 디렉토리를 가질 수 있으니 패키지 역시 다른 패키지를 포함할 수 있다. 예를 들어 java.lang에서 lang 패키지는 java 패키지의 하위 패키지다. 즉, dot(.)을 구분자로 하여 계층구조를 구성한다.

### 패키지 선언

`package 패키지이름;`

클래스나 인터페이스의 소스파일의 가장 위에 선언한다. 반드시 소스파일에서 주석, 공백을 제외한 첫 번째 문장이어야 한다. 

하나의 소스파일에 단 한번만 선언될 수 있다.

해당 소스파일에 포한된 모든 클래스나 인터페이스는 선언된 패키지에 속하게 된다. 

패키지 이름은 대소문자를 허용함지만 클래스 이름과 구분하기 위해 소문자로 한다.

### 이름없는 패키지(unnamed package)

소스파일에 자신이 속할 패키지를 지정하지 않는 모든 클래스는 자동으로 이름 없는 패키지에 속하게 된다.

간단한 프로그램은 패키지를 지정하지 않아도 문제가 없지만, 큰 프로젝트에서는 패키지를 적용시켜야 한다.

```java
package com.teddygood.study;  
  
class PackageTest {  
    public static void main(String[] args) {  
        System.out.println("Hello, World!");  
    }  
}
```

위의 예제를 `-d` 옵션을 추가하여 컴파일 한다. `-d` 옵션은 소스파에 지정된 경로를 통해 패키지의 위치를 차장서 클래스 파일을 생성한다. 만약 지정된 패키지와 일치하는 디렉토리가 존재하지 않는다면 자동으로 생성한다.

```bash
javac -d . PackageTest.java
```

### classpath

컴파일러나 JVM 등이 클래스의 위치를 찾는데 사용되는 경로이다.

소스코드를 컴파일 후 class 파일로 변환된 후 class 파일을 찾을 때 classpath에 지정된 경로를 사용한다.

환경변수를 사용하거나 `-cp` 옵션을 사용하여 일시적으로 클래스패스를 지정할 수 있다.

```bash
java -cp 파일위치 코드위치
```

### import문

import문은 컴파일러에게 소스파일에 사용된 클래스의 패키지에 대한 정보를 미리 제공하는 것이다. 즉, 클래스의 코드를 작성하기 사용하고 싶은 클래스의 패키지를 미리 import문으로 적어두면 패키지 이름을 생략할 수 있다.

```java
import 패키지.클래스;
```

```java
import 패키지.*;
```

같은 패키지에서 여러 개의 클래스가 사용될 때는 `*`문자를 사용하면 패키지에 속한 모든 클래스를 패키지 이름없이 사용할 수 있다. 

책에서는 실행 시 성능상의 차는 전혀 없다고 하는데 이건 컴파일러마다 다르지 않을까?

`*` 문자를 사용하는 것이 편하긴 하지만 import하는 패키지의 수가 많을 때는 어느 클래스가 어느 패키지에 속하는지 구별하기 어려울 수 있다.

`*`문자는 클래스를 대신하는 것이며 패키지를 대신할 수 없다. `import java.util.*;`을 `import java.*;`로 사용할 수 없다는 의미이다.

System과 String 등의 `java.lang`에 속한 클래스들은 import문을 사용하지 않아도 된다. `java.lang` 패키지는 자주 사용되는 주요한 클래스들이 속해 있기에 모든 소스파일에 암묵적으로 import문이 선언되어 있다.

### 일반적인 소스파일 구성

1. package문
2. import문
3. 클래스 선언

### static import문

static import문을 사용하면 static 멤버를 호출할 때 클래스 이름을 생략할 수 있다.그렇기에 특정 클래스의 static 멤버를 자주 사용할 때 편리하다. 

그러나 가독성 측면에서 좋지는 않은 것 같다. 예를 들어 `import static java.lang.System.out;`을 선언해두면 평소 쉽게 사용하던 `System.out.println()`을 `out.println()`으로 사용할 수 있다. 가끔은 생략되지 않은 것이 더 편한 경우가 있다.

## 제어자(modifier)

제어자는 클래스, 변수 또는 메서드의 선언부에 사용되어 부가적인 의미를 부여한다. 여러 제어자를 조합하여 사용하는 것이 가능하나 접근 제어자는 한 가지만 선택해서 사용할 수 있다.

### static

static은 `클래스의`, `공통적인`의 의미를 갖는다. 이건 저번 시간에 공부했던 걸 생각해보면 더 이해가 쉬울 것이다. 인스턴스 변수는 한 클래스에서 생성됐더라도 다른 값을 가질 수 있지만, 클래스 변수라고 부르는 static 변수는 인스턴스에 관계없이 같은 값을 갖는다. static 변수는 모든 인스턴스가 공유하기 때문이다. 

static이 붙으면 인스턴스가 아닌 클래스에 관계되기 때문에 인스턴스를 생성하지 않고도 사용할 수 있다. 

static 변수는 클래스가 메모리에 로드될 생성된다. 또한, static 초기화 블럭은 클래스가 메모리에 로드될 때 단 한번만 수행되어 클래스 변수를 초기화할 때 주로 사용한다. 

### final

final은 변수에 사용되면 값을 변경할 수 없는 상수가 되며, 메서드에 사용하면 오버라이딩을 못하고 클래스에 사용되면 자식 클래스에게 상속을 하지 못한다.

final이 붙은 변수는 상수이기에 일반적으로는 선언과 초기화를 동시에 하지만 인스턴스 변수는 생성자에서 초기화 할 수 있다. 클래스 내에 매개변수를 갖는 생성자를 선언하여 인스턴스를 생성할 때 final이 붙은 멤버를 초기화하는데 필요한 값을 생성자의 매개변수로부터 받는 것이다. 이렇게 되면 각 인스턴스마다 final이 붙은 멤버가 다른 값을 가질 수 있다.

```java
class Card {  
    final int NUMBER;  
    final String KIND;  
    static int width = 100;  
    static int height = 250;  
  
    Card(String kind, int num) {  
        KIND = kind;  
        NUMBER = num;  
    }  
  
    Card() {  
        this("HEART", 1);  
    }  
  
    public String toString() {  
        return KIND + " " + NUMBER;  
    }  
}  
  
class FinalCardTest {  
    public static void main(String[] args) {  
        Card c = new Card("HEART", 10);  
        // c.NUMBER = 5; // Error  
        System.out.println(c.KIND);  
        System.out.println(c.NUMBER);  
        System.out.println(c);  
    }  
}
```

### abstract

abstract는 메서드의 선언부만 작성하고 실제 수행되는 내용이 구현되지 않은 추상 메서드를 만들 때 사용한다. 클래스 내에 추상 메서드가 존재한다는 것을 알리기 위해 클래스 앞에 작성하기도 한다.

추상 클래스는 아직 완성되지 않은 메서드이므로 인스턴스를 생성할 수 없다. 드물게 추상 메서드가 없는 클래스에도 abstract를 붙여서 추상 클래스로 만드는 경우가 있다. 가끔 아무런 내용이 없는 메서드가 정의된 클래스가 있는데 이런 경우는 다른 클래스가 상속 받아 원하는 메서드만 오버라이딩 한다. 이런 클래스가 없다면 아무 내용도 없는 메서드를 다 오버라이딩 해야 한다.
```java
abstract class AbstractTest {  
    abstrac void move();  
}
```
### 접근 제어자(access modifier)

접근 제어자는 멤버 또는 클래스에 사용되어 해당하는 멤버 또는 클래스를 외부에서 접근하지 못하도록 제한하는 역할을 한다. 따로 접근 제어자를 설정하지 않았다면 default가 명시적으로 붙어있다.

- private: 같은 클래스 내에서만 접근이 가능하다.
- default: 같은 패키지 내에서만 접근이 가능하다.
- protected: 같은 패키지 내부 또는 다른 패키지의 자식 클래스에서 접근이 가능하다.
	- 패키지에 관계없이 상속 관계에 있는 자식클래스에서 접근할 수 있도록 하는 것이 제한 목적이지만, 같은 패키지 내에서도 접근이 가능하다. 
- public: 접근 제한이 전혀 없다.

### 캡슐화

접근 제어자를 사용하는 이유는 클래스 내부에 선언된 데이터를 보호하기 위해서이다. 다른 이유는 클래스 내에서만 사용되거나 내부 작업을 위해 임시로 사용되는 멤버변수 또는 메서드 등의 멤버들을 클래스 내부에 감추기 위해서이다. 객체지향의 특징 중 하나인 캡슐화(encapsulation)에 해당된다. 접근 제어자를 적절히 선택해서 접근 범위를 최소화하도록 하는 것이 변경 후 테스트에 도움이 된다.

보통 접근 제어자를 사용하면서 값을 바꿔야 하는 경우가 있을 때는 getter와 setter(get 또는 set으로 시작하는 메서드)를 정의하여 멤버변수의 값을 반환하거나, 조건에 맞는 값일 때 멤버변수의 값을 변경할 수 있도록 한다.

상속할 수 있다고 예상되는 클래스라면 멤버에 private 대신 protected를 사용한다. private는 자식 클래스에서도 접근이 불가능하기 때문에 상속을 쓸 일이 있는 경우라면 주의해야 한다.

생성자에도 접근 제어자를 사용함으로서 인스턴스 생성을 제한할 수 있다. 보통 생성자의 접근 제어자는 클래스의 접근 제어자와 같지만 다르게 지정할 수도 있다.

생성자가 private로 선언된 클래스는 상속을 할 수 없다. 자식 클래스의 인스턴스를 생성할 때는 부모 클래스의 생성자를 호출해야 하는데 이 때 부모 클래스의 생성자가 private이기에 호출이 불가능하다. 그렇기에 클래스 앞에 final을 더 추가하여 상속할 수 없는 클래스라는 것을 표기해주는 것이 좋다.

### 싱글톤

가끔 전체 프로그램에서 단 하나의 객체만 만들도록 보장해야 하는 경우가 있다. 단 하나만 생성된다고 해서 이 객체를 싱글톤(Singleton)이라 하며 , 여러 개의 객체를 만들지 못하도록 싱글톤(Singleton) 패턴을 설계해야 한다. 

싱글톤 패턴은 생성자를 private로 선언하고 자신의 유일한 객체를 리턴하는 getInstance() 정적 메서드를 선언하는 것을 말한다.

```java
class Singleton {  
    private static Singleton singleton = new Singleton();  
  
    private Singleton() {  
    }  
  
    static Singleton getInstance() {  
        return singleton;  
    }  
}  
  
public class SingletonPractice {  
    public static void main(String[] args) {  
  
        // 컴파일 에러  
        // Singleton obj1 = new Singleton();  
        // Singleton obj2 = new Singleton();  
        Singleton obj1 = Singleton.getInstance();  
        Singleton obj2 = Singleton.getInstance();  
  
        if (obj1 == obj2) {  
            System.out.println("같은 객체");  
        } else {  
            System.out.println("다른 객체");  
        }  
  
    }  
}
```

### 접근 제어자 상식

1. 메서드에 static과 abstract를 함께 사용할 수 없다.
2. 클래스에 abstract와 fina을 동시에 사용할 수 없다.
3. abstract메서드는 private로 선언할 수 없다.
4. 메서드에 private와 final을 같이 사용할 필요는 없다.

### Getter와 Setter

일반적으로 OOP에서는 객체의 필드를 객체 외부에서 직접적으로 접근하는 것을 막는다. 그 이유는 외부에서 마음대로 변경할 경우 객체의 무결성이 깨질 수 있기 때문이다. 이건 이전 Chapter 06에서도 설명했다. 그래도 중요하니 짧게 다시 설명한다.

위와 같은 문제점을 해결하기 위해서 OOP에서는 메서드를 통해서 필드를 변경한다. 필드는 외부에서 접근할 수 없도록 막아버리고 메서드는 공개해서 외부에서 메서드를 통해 필드에 접근하도록 유도하는 것이다. 이렇게 하면 메서드는 매개값을 검증해서 유효한 값만 객체의 필드로 저장할 수 있다. 이런 역할을 하는 것이 Setter이다.

외부에서 객체의 데이터를 읽을 때도 메서드를 사용하는 것이 좋다. 필드의 값을 직접적으로 사용하면 부적절한 경우도 있다. 이런 경우에는 메서드로 필드 값을 변경 후 외부로 전달한다. 이런 역할을 하는 것이 Getter이다. 

클래스를 선언할 때 가능하면 필드를 private로 선언 후 필드에 대해 Setter와 Getter 메서드를 만들어 필드 값을 안전하게 변경, 사용하는 것이 좋다. 

```java
class Car {  
    private int speed;  
    private boolean stop;  
    public int getSpeed(){  
        return speed;  
    }  
    public void setSpeed(int speed) {  
        if(speed < 0) {  
            this.speed = 0;  
            return;        }else{  
            this.speed = speed;  
        }  
    }  
}  
  
public class CarExample {  
    public static void main(String[] args) {  
        Car myCar = new Car();  
        myCar.setSpeed(-50);  
  
        System.out.println(myCar.getSpeed());  
        myCar.setSpeed(60);  
  
        System.out.println(myCar.getSpeed());  
    }  
}
```

## 다형성(polymorphism)

다형성은 사용 방법은 동일하지만 다양한 객체를 이용해서 다양한 결과가 나오도록 하는 것이다. 더 구체적으로 말하면 부모 클래스의 참조변수로 자식 클래스의 인스턴스를 참조할 수 있게 하는 것이다.

다형성을 알기 위해 먼저 자동 타입 변환(promotion)을 알아야 한다. promotion은 간단히 말하면 큰 타입의 자료형에 작은 타입을 담아도 자동으로 자료형이 변해 문제가 생기지 않는 것을 의미한다.

이게 상속에서도 적용된다. 상속 관계가 아니라면 적용되지 않으며, 자식 타입으로의 형변환은 허용되지 않는다. 의미적으로도 안 되는 것이 당연하며, 상속받은 클래스에서는 멤버가 추가가 될 수도 있기에 안 되는 것이 당연하다.

```java
class Animal {
    ...
}

class Cat extend Animal {
    ...
}
```

```java
Cat cat = new Cat();
Animal animal = cat;
```

이 코드는 제대로 돌아가며 두 변수가 동일한 객체를 참조하지만 클래스에 따라 사용할 수 있는 멤버의 개수가 달라진다. 꼭 부모가 아니더라도 상속 계층에서 상위 타입이면 promotion이 일어날 수 있다. 이렇게 부모 타입으로 변환된 이후에는 부모 클래스에 선언된 필드와 메서드에만 접근이 가능하다. 변수는 자식 객체를 참조하지만 변수로 접근 가능한 멤버는 부모 클래스 멤버로만 한정된다. 그러나 예외가 존재한다. 메소드가 자식 클래스에서 재정의 됐다면 자식 클래스의 메서드가 대신 호출된다. 

```java
class Parent {  
    public void method1() {  
        System.out.println("Parent method 1");  
    }  
  
    public void method2() {  
        System.out.println("Parent method 2");  
    }  
}  
  
class Child extends Parent {  
    @Override  
    public void method2() {  
        System.out.println("Child method 2");  
    }  
  
    public void method3() {  
        System.out.println("Child method 3");  
    }  
}  
  
public class ChildExample {  
    public static void main(String[] args) {  
        Child child = new Child();  
  
        Parent parent = child; // 자동 타입 변환  
        parent.method1();  
        parent.method2(); // 재정의된 메서드 호출  
        // parent.method3(); 호출 불가능  
  
    }  
}
```

멤버변수가 부모 클래스와 자식 클래스에 중복으로 정의된 경우, 부모 타입의 참조변수를 사용했을 때 부모 클래스에 선언된 멤버변수가 사용되고 자식 타입의 참조변수를 사용했을 때는 자식 클래스에 선언된 멤버변수가 사용된다. 중복 정의되지 않은 경우에는 차이가 없다. 메서드는 참조변수의 타입에 관계 없이 항상 실제 클래스 타입에 정의된 메서드가 호출된다.

```java
class Parent {  
    int x = 100;  
  
    void method() {  
        System.out.println("Parent");  
    }  
}  
  
class Child extends Parent {  
    int x = 200;  
  
    void method() {  
        System.out.println(x); // this.x와 동일  
        System.out.println(super.x); // 부모 클래스에 선언된 인스턴스 변수  
        System.out.println(this.x); // 자식 클래스의 인스턴스 변수  
    }  
}  
  
  
public class BinidingTest {  
    public static void main(String[] args) {  
        Parent p = new Child();  
        Child c = new Child();  
  
        System.out.println(p.x); // 100  
        p.method(); // Child 메서드 실행  
  
        System.out.println(c.x); // 200  
        c.method(); // Child 메서드 실행  
    }  
}
```

### 강제 타입 변환(casting)

casting은 부모 타입을 자식 타입으로 변환하는 것을 말한다. 모든 부모 타입을 자식 타입으로 강제 변환할 수 있는 것은 아니다. 자식 타입이 부모 타입으로 자동 타입 변환한 후 다시 자식 타입으로 변환할 때 강제 타입 변환을 사용할 수 있다.

```java
Parent parent = new Child(); // promotion
Child child = (Child) parent; // casting
```

자식 타입이 부모 타입으로 promotion되면 부모에 선언된 필드의 메서드만 사용 가능하나, 자식에 선언된 필드와 메서드를 꼭 사용해야 하는 경우가 있다면 casting을 써서 변환 후 사용하면 된다.

### instanceof 연산자

참조변수가 참조하고 있는 인스턴스의 실제 타입을 알기 휘애 `instanceof` 연산자를 사용한다. 주로 조건문에 사용되며 왼쪽에는 참조변수, 오른쪽에는 클래스 이름이 온다. 연산의 결과는 true 또는 false가 된다.

casting을 사용할 때는 instanceof 연산자를 이용해서 참조 변수가 가리키고 있는 인스턴스의 타입을 체크하고 적절히 형변환하는 것이 중요하다. 

```java
class Parent {  
  
}  
  
class Child extends Parent {  
  
}  
  
public class InstanceofExample {  
  
    public static void method1(Parent parent) {  
        // Child 타입으로 변환이 가능한지 확인  
        if (parent instanceof Child) {  
            Child child = (Child) parent;  
            System.out.println("성공");  
        } else {  
            System.out.println("실패");  
        }  
    }  
  
    public static void method2(Parent parent) {  
        Child child = (Child) parent; // ClassCastException이 발생할 수 있음  
        System.out.println("변환 성공");  
    }  
  
    public static void main(String[] args) {  
        Parent parentA = new Child();  
        method1(parentA);  
        method2(parentA);  
  
        Parent parentB = new Parent();  
        method1(parentB);  
        method2(parentB); // 예외 발생  
    }  
}
```

### 매개변수의 다형성

promotion은 필드의 값을 대입할 때도 발생하지만 주로 메서드를 호출할 때도 발생한다. 메서드를 호출할 때는 매개변수의 타입과 동일한 타입을 지정하는 것이 정석이지만, 타입을 다양화 하기 위해 매개변수에 자식 객체를 지정할 수도 있다. 

매개변수의 타입이 클래스일 경우 해당 클래스의 객체뿐만 아니라 자식 객체까지도 사용할 수 있다. 즉, 매개변수의 다형성은 어떤 자식 객체가 제공되느냐에 따라 메서드의 실행 결과가 다양해질 수 있다는 의미이다. 자식 객체가 부모의 메서드를 오버라이딩 했다면 메서드 내부에서 오버라이딩 된 메서드를 호출함으로써 메서드의 실행 결과는 다양해진다.

```java
import java.lang.annotation.Target;  
  
class Vehicle {  
    public void run() {  
        System.out.println("차가 달립니다.");  
    }  
}  
  
class Driver {  
    public void drive(Vehicle vehicle) {  
        vehicle.run();  
    }  
}  
  
class Bus extends Vehicle {  
    @Override  
    public void run() {  
        System.out.println("버스가 달립니다.");  
    }  
}  
  
class Taxi extends Vehicle {  
    @Override  
    public void run() {  
        System.out.printf("택시가 달립니다.");  
    }  
}  
  
public class DriverExample {  
    public static void main(String[] args) {  
        Driver driver = new Driver();  
        Bus bus = new Bus();  
        Taxi taxi = new Taxi();  
  
        // promotion  
        driver.drive(bus);  
        driver.drive(taxi);  
    }  
}
```

### 여러 종류의 객체를 배열로 다루기

부모 타입의 참조 변수 배열을 사용하면 공통의 부모를 가진 서로 다른 종류의 객체를 배열로 묶어서 다룰 수 있다. 묶어서 다루고 싶은 객체들의 상속관계를 따진 후 가장 가까운 부모 클래스 타입의 참조 변수 배열을 생성해서 객체를 저장하면 된다.

```java
Product p[] = new Product[3];
p[0] = new Tv();
p[1] = new Computer();
p[2] = new Speaker();
```

## 추상클래스(abstract class)

추상 클래스는 자체로는 큰 도움이 안 되지만, 새로운 클래스를 작성할 때 바탕이 되는 부모 클래스로서 중요한 의미를 갖는다. 추상 클래스가 부모가 되어 자식 클래스가 구현되면 자식 클래스는 추상 클래스의 모든 필드, 메서드를 상속 받을 수 있다.

`abstract` 키워드만 클래스 앞에 붙이면 된다. 이 클래스에는 추상 메서드가 있으니 상속을 통해 구현해줘야 한다는 것을 알 수 있다.

추상 클래스는 추상 메서드를 포함하고 있다는 것을 제외하면 일반 클래스와 다른 것이 없다. 추상 클래스에도 생성자가 있고, 멤버변수, 메서드를 가질 수 있다. 

꼭 추상 메서드를 포함하고 있지 않은 클래스에도 `abstract`를 붙이면 추상 클래스로 만들 수 있다. 그러나 추상 클래스로 지정되면 클래스의 인스턴스를 생성할 수 없기에 주의해야 한다.

### 추상 메서드

추상 메서드란 선언만 되어 있고 구현되어 있지 않은 채로 남겨 둔 것이다. 굳이 이러는 이유는 메서드의 내용이 상속받는 클래스에 따라 달라질 수 있기 때문이다. 즉, 부모 클래스에서는 선언만 되어 있고, 주석으로 어떤 기능을 수행할 목적으로 작성됐는지만 알려주면 된다. 추상 클래스를 상속 받는 자식 클래스는 부모의 추상 메서드를 상황에 맞게 구현해야 한다.

추상 클래스로부터 상속 받는 자식 클래스는 오버라이딩을 통해 부모의 추상 메서드를 모두 구현해야 한다. 하나라도 구현하지 않는다면 자식 클래스도 추상 클래스로 지정해야 한다.

```java
abstract class Animal {  
    public String kind;  
  
    public void breathe() {  
        System.out.println("숨을 쉰다.");  
    }  
  
    // 추상 메서드  
    public abstract void sound();  
}  
  
class Dog extends Animal {  
    public Dog() {  
        this.kind = "포유류";  
    }  
  
    @Override  
    public void sound() {  
        System.out.println("멍멍");  
    }  
}  
  
class Cat extends Animal {  
    public Cat(){  
        this.kind = "포유류";  
    }  
  
    @Override  
    public void sound() {  
        System.out.println("야옹");  
    }  
}  
  
  
public class AnimalExample {  
    public static void animalSound(Animal animal){  
        animal.sound(); // 오버라이딩 된 메서드  
    }  
    public static void main(String[] args) {  
        Dog dog = new Dog();  
        Cat cat = new Cat();  
        dog.sound();  
        cat.sound();  
        System.out.println("-----");  
  
        // promotion  
        Animal animal = null;  
        animal = new Dog();  
        animal.sound(); // 오버라이딩 된 메서드  
        animal = new Cat();  
        animal.sound(); // 오버라이딩 된 메서드  
        System.out.println("-----");  
  
        // 메서드 다형성  
        animalSound(new Dog()); // promotion  
        animalSound(new Cat()); // promotion  
    }  
}
```

### 추상화

상속이 자식 클래스를 만드는데 부모 클래스를 사용하는 거라면 추상화는 기존의 클래스의 공통 부분을 만들어 부모 클래스를 만드는 것이라고 할 수 있다. 

클래스를 설계하는 사람이 여러 사람인 경우 클래스마다 필드와 메서드가 다른 이름, 기능을 가질 수 있기 때문에 부모 클래스를 공통된 것을 만드는 것이다. 이렇게 공통적인 필드와 메서드를 만들어두면 실제 클래스를 작성하는 데 시간을 절약할 수 있다.

## 인터페이스 

인터페이스는 추상 클래스처럼 추상 메서드를 갖지만 추상 클래스보다 추상화 정도가 높아 멤버변수 또는 메서드를 가질 수 없다. 추상 메서드와 상수만을 멤버로 가질 수 있다.

인터페이스는 기본적으로 클래스를 만드는 방법과 동일하며 class 키워드 대신 interface 키워드를 사용한다.

인터페이스는 상수만 가질 수 있기에 무조건 `public static final`로 선언해야 한다. 키워드를 안 적어도 컴파일 과정에서 자동으로 붙으니 생략해도 된다.

인터페이스를 통해 호출된 메서드는 최종적으로 객체에서 실행된다. 그렇기에 인터페이스의 메서드는 실행할 필요가 없는 추상 메서드로 선언한다. 인터페이스에 선언된 추상 메서드는 모두 public abstract가 붙으며 생략이 가능하다.

### 인터페이스 상속

인터페이스는 인터페이스로부터만 상속받을 수 있고, 클래스와는 다르게 다중 상속이 가능하다. 또한, 인터페이스는 클래스와 다르게 Object 클래스 같은 최상위 부모가 없다.

### 인터페이스 구현

객체는 인터페이스에서 정의된 추상 메서드와 동일한 메서드를 갖고 있어야 한다. 이런 객체를 인터페이스의 구현(implement) 객체라 하고 구현 객체를 생성하는 클래스를 구현 클래스라 한다.

```java
class 클래스이름 implements 인터페이스 이름 {
    // 인터페이스에 정의된 추상 메서드 구현
}
```

```java
class Fighter extends Unit implements Fightable {  
      
    // 추상 메서드를 오버라이딩 했기 때문에 public으로 선언  
    public void move(int x, int y) {  
  
    }  
  
    public void attack(Unit u) {  
  
    }  
}  
  
class Unit {  
    int currentHP;  
    int x;  
    int y;  
}  
  
interface Fightable extends Movable, Attackable {  
  
}  
  
interface Movable {  
    void move(int x, int y); // public abstract가 생략된 것  
}  
  
interface Attackable {  
    void attack(Unit u);  
}  
  
public class FighterTest {  
    public static void main(String[] args) {  
        Fighter f = new Fighter();  
  
        if (f instanceof Unit)  
            System.out.println("f는 Unit 클래스의 자손");  
        if (f instanceof Fightable)  
            System.out.println("f는 Fightable 인터페이스를 구현");  
        if (f instanceof Movable)  
            System.out.println("f는 Movable 인터페이스를 구현");  
        if (f instanceof Attackable)  
            System.out.println("f는 Attackable 인터페이스를 구현");  
        if (f instanceof Object)  
            System.out.println("f는 Object 클래스의 자손");  
    }  
}
```

### 인터페이스를 이용한 다중 상속

이전에도 말했듯이 다중 상속은 장점도 있으나 단점도 있다. 두 부모로부터 상속받으면 멤버의 이름 또는 선언부가 일치하고 구현 내용이 다르면 이 두 부모로부터 상속 받은 자식 클래스는 어떤 부모로부터 상속받았는지 알 수 없다. 

그렇기에 자바는 다중 상속을 지원하지 않는다. 자바로 인터페이스를 이용하면 다중 상속이 가능하다는 말을 하지만 사실상 인터페이스로 다중 상속을 구현하는 경우는 거의 없다.

인터페이스는 상수만 정의할 수 있기에 부모 클래스의 멤버와 충돌하는 경우는 거의 없고 충돌되더라도 클래스 이름을 붙여 구분이 가능하다.

또한, 추상 메서드는 구현 내용이 전혀 없기에 부모 클래스의 메서드와 일치하더라도 부모 클래스의 메서드를 상속 받으면 된다. 그러나 이렇게 하면 다중 상속을 사용하는 의미가 없어진다. 다중 상속의 장점을 사용하려면 두 부모 클래스 중 비중이 높은 쪽을 선택하고 다른 한쪽은 클래스 내부의 멤버로 포함시키는 방식으로 처리하거나 어느 한쪽의 부분을 인터페이스로 만든 후 구현한다. 

### 인터페이스를 이용한 다형성

인터페이스 역시 참조 변수이기에 형변환이 가능해진다. 또한, 메서드의 매개변수 타입으로 사용될 수도 있다. 이렇게 되면 메서드 호출 시 해당 인터페이스를 구현한 클래스의 인스턴스를 매개변수로 제공해야 한다.

즉, 리턴 타입이 인터페이스라는 것은 메서드가 해당 인터페이스를 구현한 클래스의 인스턴스를 반환한다는 것을 의미한다. 

```java
interface Parseable {  
    public abstract void parse(String fileName);  
}  
  
class ParserManager {  
    // 리턴 타입이 Parseable 인터페이스  
    public static Parseable getParser(String type) {  
        if(type.equals("XML")) {  
            return new XMLParser();  
        } else {  
            Parseable p = new HTMLParser();  
            return p;  
        }  
    }  
}  
  
class XMLParser implements Parseable {  
    public void parse(String fileName) {  
        System.out.println(fileName + "- XML parsing completed");  
    }  
}  
  
class HTMLParser implements Parseable {  
    public void parse(String fileName){  
        System.out.println(fileName + "- HTML parsing completed");  
    }  
}  
  
public class ParserTest {  
    public static void main(String[] args) {  
        Parseable parser = ParserManager.getParser("XML");  
        parser.parse("document.xml");  
        parser = ParserManager.getParser("HTML");  
        parser.parse("document2.html");  
    }  
}
```

### 인터페이스 사용 이유

코드가 인터페이스 메서드를 호출하면 인터페이스는 객체의 메서드를 호출한다. 개발 코드는 객체의 내부 구조를 알 필요가 없으며 인터페이스의 메서드만 알고 있으면 된다. 

"코드가 인터페이스 메서드를 호출하지 않고 직접 객체의 메서드를 호출하면 되지 않냐?"라는 질문이 생기게 된다. 그 이유는 개발 코드를 수정하지 않고 사용하는 객체를 변경할 수 있도록 하기 위해서이다.

인터페이스는 하나의 객체가 아니라 여러 객체들과 사용이 가능하기에 어떤 객체를 사용하느냐에 따라 실행 내용과 리턴값이 달라질 수 있다. 그렇기에 코드의 변경 없이 실행 내용과 리턴 값을 다양화 할 수 있다.

인터페이스를 먼저 만들어두면 개발자들에게 인터페이스를 구현하여 프로그램을 작성하게 하여 계층적인 개발이 가능하다.

서로 상속관계가 아닌 클래스에게 하나의 인터페이스를 공통적으로 구현하도록 함으로써 관계를 만들 수 있다. 

인터페이스를 사용하면 클래스의 선언과 구현을 분리시킬 수 있기에 독립적인 프로그래밍이 가능하다. 

### static 메서드

인터페이스에 원래는 추상 메서드만 선언할 수 있었는데 지금은 디폴트 메서드와 static 메서드도 추가할 수 있다. 인터페이스의 static 메서드도 역시 항상 public이며 생략할 수 있다.

JDK 1.8 이전에는 인터페이스의 모든 메서드는 추상 메서드이어야 했기에 인터페이스와 관련된 static 메서드는 별도의 클래스에 따로 만들어야 했다. 대표적으로 java.utilCollection 인터페이스와 관련되 static 메서드들이 인터페이스에는 추상 메서드만 선언할 수 있다는 원칙 때문에 Collections라는 별도의 클래스를 만들었었다. static 메서드를 인터페이스에 선언할 수 있었더라면 Collections 클래스는 없었을 것이다.

### 디폴트 메서드

인터페이스를 한 번 만들어 두고 변경하지 않으면 좋겠지만 변경은 언제든지 일어날 수 있다. 인터페이스를 수정한다는 것이 큰 일이 아닌 것처럼 보이겠지만, 결국 부모 클래스에 메서드를 추가한다는 의미이므로 간단한 일이 아니다. 인터페이스를 구현한 기존의 모든 클래스들이 새로 추가된 메서드를 구현해야 한다. 

그렇기에 JDK 설계자들은 추상 메서드의 기본적인 구현을 제공하는 메서드인 디폴트 메서드(default method)를 만들었다. 디폴트 메서드는 추상 메서드가 아니기 때문에 새로 추가 되어도 인터페이스를 구현한 클래스를 변경하지 않는다. 즉, 부모 클래스에 새로운 메서드를 추가한 것과 동일해진다.

메서드 앞에 default 키워드를 붙이며 접근 제어자는 public이고 생략 가능하다. 

새로 추가된 디폴트 메서드가 기존의 메서드와 이름이 중복되어 충돌하는 경우도 생기기도 한다. 다른 인터페이스의 디폴트 메서드와 충돌하는 경우 인터페이스를 구현한 클래스에서 디폴트 메서드를 오버라이딩 해야 한다. 또, 디폴트 메서드와 부모 클래스의 메서드 간의 충돌하는 경우에는 부모 클래스의 메서드가 상속되고 디폴트 메서드는 무시된다. 

```java
interface MyInterface {  
    default void method1() {  
        System.out.println("method1 in MyInterface");  
    }  
  
    default void method2() {  
        System.out.println("method2 in MyInterface");  
    }  
  
    static void staticMethod2() {  
        System.out.println("static method in MyInterface");  
    }  
}  
  
interface MyInterface2 {  
    default void method1() {  
        System.out.println("method1 in MyInterface2");  
    }  
  
    static void staticMethod2() {  
        System.out.println("static method in MyInterface2");  
    }  
}  
  
  
class Parent {  
    public void method2() {  
        System.out.println("method2 in Parent");  
    }  
}  
  
class Child extends Parent implements MyInterface, MyInterface2 {  
    // 오버라이딩  
    public void method1() {  
        System.out.println("method1 in Child");  
    }  
}  
  
public class DefaultMethodTest {  
    public static void main(String[] args) {  
        Child c = new Child();  
        c.method1();  
        c.method2();  
        MyInterface.staticMethod();  
        MyInterface2.staticMethod();  
    }  
}
```

## 8. 중첩 클래스(Nested class)

```java
class ClaassName {
    class NestedClassName {
    }
}
```

중첩 클래스, 내부 클래스를 같은 의미로 쓰이는 경우가 많은 것 같은데 굳이 따지면 아니라고 할 수 있다. 중첩된 클래스가 있을 때 밖의 클래스를 외부(outter), 클래스 안의 클래스를 내부(inner) 클래스로 정의하며 저 클래스의 전체를 중첩 클래스로 보는 것이 맞다.

중첩 클래스를 사용하면 두 클래스의 멤버들을 서로 쉽게 접근할 수 있고, 외부에는 불필요한 관계를 감춤으로써 코드의 복잡성을 줄일 수 있다. 

```java
class ClassName {
    interface NestedInterfaceName {
    }
}
```

클래스 내부에 클래스만 만들 수 있는 것이 아니다. 인터페이스도 들어갈 수 있으며 이를 중첩 인터페이스라 부른다. 인터페이스를 굳이 클래스 내부에 선언하는 이유는 해당 클래스와 긴밀한 관계를 맺는 구현 클래스를 만들기 위해서이다.

### 내부 클래스

- 인스턴스 클래스 
	- 외부 클래스의 멤버 부분에 선언
	- 외부 클래스의 인스턴스 멤버처럼 다뤄진다.
	- 주로 외부 클래스의 인스턴스 멤버와 관련된 작업에 사용될 목적으로 선언한다. 
- static 클래스
	- 외부 클래스의 멤버 부분에 선언
	- 외부 클래스의 static 멤버처럼 다뤄진다.
- local 클래스
	- 외부 클래스의 메서드나 초기화 블럭 안에 선언
	- 선언된 영역 내부에서만 사용할 수 있다. 
		- 메서드 내부에서만 사용되므로 접근 제한자를 붙일 수도 없고 붙일 필요도 없다.  
- 익명 클래스: 클래스의 선언과 객체의 생성을 동시에 하는 이름 없는 클래스

내부 클래스 또한 클래스이기에 abstract, final, private 등의 키워드를 사용할 수 있다.

### 사용 제한 

외부 클래스에서 인스턴스 클래스를 사용할 때 제한이 있다. 인스턴스 클래스에는 외부 클래스의 인스턴스 필드나 메서드에서 객체를 생성할 수 있지만, static 필드나 정적 메서드에서는 객체를 생성할 수 없다. 

```java
public class A {  
    // 인스턴스 필드  
    B field1 = new B();  
    C field2 = new C();  
  
    // 인스턴스 메서드  
    void method1() {  
        B var1 = new B();  
        C var2 = new C();  
    }  
  
    // static 필드  
    // static B field3 = new B();    
    static C field4 = new C();  
    // static 메서드  
    static void method2(){  
        // B var1 = new B();  
        C var2 = new C();  
    }  
      
    // 인스턴스 클래스  
    class B {  
          
    }  
      
    // static 클래스  
    static class C {  
          
    }  
}
```

인스턴스 클래스 안에서는 외부 클래스의 모든 필드, 메서드에 접근할 수 있지만, static 클래스 안에서는 외부 클래스의 인스턴스 필드, 클래스에 접근할 수 없고, static 필드와 메서드에만 접근할 수 있다. 

```java
public class A {  
    int field1;  
    void method1() {  
          
    }  
      
    static int field2;  
    static void method2() {  
          
    }  
  
    // 인스턴스 클래스  
    class B {  
        void method() {  
            // 모든 필드와 메서드에 접근 가능  
            field1 = 10;  
            method1();  
            field2 = 190;  
            method2();  
        }  
    }  
      
    // static 클래스  
    static class C {  
        void method() {  
            // field1 = 190;  
            // method1();              
            // 인스턴스 필드, 메서드는 접근 가능  
            field2 = 10;  
            method2();  
        }  
    }  
}
```

로컬 클래스는 메서드 실행이 종료되면 객체가 없어지는 것이 정상이지만, 메서드가 종료되어도 계속 실행 상태로 존재할 수도 있다. 자바는 이런 문제를 해결하기 위해 컴파일 시 로컬 클래스에서 사용하는 매개변수, 지역 변수의 값을 로컬 클래스 내부에 복사해두고 사용한다. 또한, 매개변수나 지역 변수가 수정되어 값이 변경될 수도 있기에 final로 선언해야 한다. 자바 8부터는 final 키워드를 굳이 붙여주지 않아도 된다. final 기능이 없어진 게 아니라 컴파일러가 자동으로 붙여준다. 

```java
public class Outer {  
    public void method(int arg) {  
        int localVariable = 1;  
        // final이기에 변경 불가  
        // arg = 199;        
        // localVariable = 122;        
        class Inner {  
            public void innerMethod() {  
                int result = arg + localVariable;  
            }  
        }  
    }  
}
```


### 바이트 코드 생성

중첩 클래스도 하나의 클래스이기에 컴파일하면 바이트 파일(.class)이 별도로 생성된다. 멤버 클래스인 경우 `외부 클래스$내부 클래스.class`로 이름이 결정된다. 로컬 클래스인 경우에는 `외부 클래스$1내부클래스.class`로 된다.

### 내부 클래스에서 외부 클래스 참조

클래스 내부에서 this는 객체 자신의 참조이다. 중첩 클래스에서도 마찬가지다. 내부 클래스에서 this를 사용하면 외부 클래스의 객체 참조가 아니라 내부 클래스의 객체 참조가 된다. 그럼 내부 클래스에서 외부 클래스의 객체 참조를 얻으려면 어떻게 해야 할까? `바깥클래스.this.필드`, `바깥클래스.this.메소드();`처럼 사용하면 된다. 

```java
public class Outer {  
    String field = "outer-field";  
    void method() {  
        System.out.println("outer-method");  
    }  
    class inner {  
        String filed = "inner-field";  
        void method() {  
            System.out.println("inner-method");  
        }  
        void print() {  
            System.out.println(this.filed);  
            this.method();  
            System.out.println(Outer.this.field);  
            Outer.this.method();  
        }  
    }  
}
```

### 익명 클래스와 익명 객체

책마다 명칭이 다르다. 어떤 책은 익명 클래스라고 부르며, 어떤 책은 익명 객체라 부른다. 

익명 객체는 이름이 없는 객체이며, 만들기 위해서는 어떤 클래스를 상속하거나 인터페이스를 구현해야 한다. 또한, 이름이 없는 클래스라고 해서 익명 클래스라고 부르기도 한다. 클래스의 선언과 객체의 생성을 동시에 하기에 단 한번만 사용하고 하나의 객체를 생성할 수 있는 일회용 클래스이다.

```java
// 상속
부모 클래스 변수 = new 부모 클래스() { ... };
// 구현
인터페이스 변수 = new 인터페이스() { ... };
```

## References

>- 남궁성, Java의 정석, 도우출판, 2016
>- 신용권, 혼자 공부하는 자바, 한빛미디어, 2019