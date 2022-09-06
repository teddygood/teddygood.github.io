---
title: 'Data Engineering 스터디 10주차'
date: '2021-10-27'
tags: ["Data Engineering"]
draft: false

description: PseudoLab Data Science Fellowship 1기

sidebar_position: 1
---

# Object-Oriented Programming in Python

## OOP Fundamentals

### Procedural programming vs Object-oriented programming

- Procedural programming(절차지향)
  - 순서대로 실행
  - 데이터 분석을 할 때 주로 사용
  - 코드가 기렁지고 데이터, 기능이 많아질수록 사용하기 어려움
- Object-oriented programming(객체지향)
  - reusable and maintainable
  - object
    - Object = State + Behavior
    - 강의에서는 객체를 data structure라고 설명하는데 그건 아니다.
      - 꼭 객체가 data structure인 것만은 아니다.
    - framework 등을 만들 때 주로 사용
  - encapsulation
    - state와 behavior가 같이 묶이는 것
  - class
    - state와 behavior을 설명

### 파이썬에서의 OOP

- 파이썬에서 모든 것은 객체
- 모든 object는 class를 가진다.
- 속성(attribute) = 데이터(data) = 멤버 변수(member variables) = 상태(state) = 필드(field)
- 행위(behavior) = 연산(operation) = 멤버 함수(member function) = 메서드(method)
- `.`을 사용해서 접근
  - attribute
    ```python
    import numpy as np
    a = np.array([1,2,3,4])
    a.shape
    ```
  - method
    ```python
    import numpy as np
    a = np.array([1,2,3,4])
    a.reshape(2,2)
    ```
- `dir(object)`를 사용하면 object의 attribute, method를 모두 확인 가능
- class
  - 빈 클래스
    ```python
    class Customer:
        pass
    ```
    ```python
    c1 = Customer()
    ```
  - method 추가
    - method를 정의할 때는 `self`를 첫 번째 argument로 설정
    ```python
    class Customer:
        def identify(self, name):
            print("I am Customer " + name)
    ```
    ```python
    cust = Customer()
    cust.identify("Laura")
    ```
  - self
    - 클래스를 정의할 때 클래스의 객체는 존재하지 않지만 클래스 정의 내에서 특정 객체의 데이터를 참조할 때 사용
    - 모든 method에는 self가 있어야 한다. 
    - self는 `.`을 사용하여 method를 실행새킬 때 처리
      - object.method -> object를 argument로 전달하는 것
      - 기존 객체에서 mehtod를 호출할 대 명시적으로 지정하지 않음
  - class에 attribute 추가
    ```python
    class Customer:
        def set_name(self, new_name):
            # Create an attribute by assigning a value
            self.name = new_name
    ```
    ```python
    cust = Customer()
    cust.set_name("Lara de Silva")
    print(cust.name)
    ```

- 생성자
  - `__init__()`을 사용하여 객체가 생성될 때마다 자동으로 호출
  - 가능하면 생성자 외부에서 attribute를 정의하지 않는 것을 추천
    - 프로젝트가 커질수록 class 정의도 많아진다. -> 읽기 힘들어진다.
    - 아직 존재하지 않는 attribute에 접근하려고 할 때 걱정할 필요가 없다.
  - 결론적으로 유지 관리가 쉽고, 읽기 쉬우며 체계적인 코드를 만들 수 있다.
  ```python
  class Customer:
      def __init__(self, name, balance): # <-- balance parameter added
          self.name = name
          self.balance = balance # <-- balance attribute added
          print("The __init__ method was called")
  
  cust = Customer("Lara de Silva", 1000) # <-- __init__ is called
  print(cust.name)
  print(cust.balance)
  ```
  ```python
  class Customer:
      def __init__(self, name, balance=0): # <-- set default value for balance
          self.name = name
          self.balance = balance 
          print("The __init__ method was called")
  
  cust = Customer("Lara de Silva")
  print(cust.name)
  print(cust.balance)
  ```

### Best pracices

1. Initialize attributes in `__init__()`
2. Naming
  - class는 `CamelCase`, function and attribute는 `lower_snake_case`
3. `self` 사용
  ```python
  class MyClass:
      # This works but isn't recommended
      def my_method(kitty, attr):
          kitty.attr = attr
  ```
  - 위의 코드는 돌아가지만 추천하지 않는다.
  - `self`는 관례이며 객체 참조로 처리되기 때문에 실제로 첫 번째 인자에 아무 이름이나 사용 가능하다.

## Inheritance and Polymorphism

### Instance-level data

```python
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

emp1 = Employee("Teo Mille", 50000)
emp2 = Employee("Marta Popov", 65000)
```
- name, salary는 instance attribute
- 특정 instance에 묶기 위해 `self`를 사용

### Class-level data 

- class attribute는 인스턴스 전체가 사용해야 하는 값을 저장할 때 사용
- attribute의 최소값, 최대값을 지정할 때 사용
- class에서 사용할 상수 값을 만들 때 사용

```python
class Employee:
    # Define a class attribute
    MIN_SALARY = 30000
    def __init__(self, name, salary):
        self.name = name
        # Use class name to access class attribute
        if salary >= Employee.MIN_SALARY:    
            self.salary = salary
        else:
            self.salary = Employee.MIN_SALARY
```
```python
emp1 = Employee("TBD", 40000)
emp1 = Employee("TBD", 60000)
print(emp1.MIN_SALARY) # 30000
print(emp2.MIN_SALARY) # 30000
```

### Class method

- 일반적인 method는 instance 간에 이미 공유되어 있으며 모든 instance에 대해 동일한 코드를 실행
- instance-level data를 사용할 수 없다.
- decorator를 사용해서 정의
- 첫 번째 인수가 `self`가 아닌 `cls`
- `object.method`가 아닌 `class.method`로 사용

```python
class Employee:
    # Define a class attribute
    MIN_SALARY = 30000
    def __init__(self, name, salary=30000):
        self.name = name
        # Use class name to access class attribute
        if salary >= Employee.MIN_SALARY:    
            self.salary = salary
        else:
            self.salary = Employee.MIN_SALARY
    @classmethod
    def from_file(cls, filename):
        with open(filename, "r") as f:
            name = f.readline()
        return cls(name)

# Create an employee without calling Employee()
emp = Employee.from_file("employee_data.txt")
type(emp) # __main__.Employee
```
- 파일에 저장된 데이터로 Employee 객체 생성 
- from_file에서 직원의 이름이 있는 파일의 첫 번재 줄을 읽고 cls return
- cls는 클래스를 참조하기 때문에 클래스를 정의하는 부분 밖에서 Employee를 사용하는 것처럼 init 생성자를 호출

- 사용하는 이유
  - 클래스 생성자에 다른 type의 parameter를 전달하기 위해 사용
  - instance method에서는 instance에 한정해서 데이터를 사용한다면 class method는 instance가 공유하는 class data를 사용 가능 

### 코드 재사용

- 객체지향 프로그래밍은 코드를 재사용할 때 유용하다.
- 누군가는 이미 내가 작성하려는 코드를 작성했다.
  - 다양한 라이브러리의 코드들을 가져와 사용할 수 있다.
- DRY: Don't Repeat Yourself
  - 복붙하지 말고 데이터 구조를 가진 코드를 작성하자.

### Inheritance

- 상속
  - 다른 클래스의 기능에 코드를 다시 구현하지 않고 기능들을 추가할 수 있다.
```python
class BankAccount:
    def __init__(self, balance):
        self.balance = balance
    def withdraw(self, amount):
        self.balance -= amount

# Empty class inherited from BankAccount
class SavingsAccount(BankAccount):
    pass
```

```python
# Constructor inherited from BankAccount
savings_acct = SavingsAccount(1000)
type(savings_acct) # __main__.SavingsAccount

# Attribute inherited from BankAcount
print(savings_acct.balance) # 1000

# Method inherited from BankAccount
savings_acct.withdraw(300)
```
- `is-a` 관계
  - A SavingsAccount is a BankAccount
  ```python
  savings_acct = SavingsAccount(1000)
  isinstance(savings_acct, SavingsAccount) # True

  acct = BankAccount(500)
  isinstance(acct, SavingsAccount) # False

  isinstance(savings_acct, BankAccount) # True 
  isinstance(acct, BankAccount) # True
  ```

### Customizing 

- Customizing constructor
  ```python
  class SavingsAccount(BankAccount):

      # Constructor speficially for SavingsAccount with an additional parameter
      def __init__(self, balance, interest_rate):
          # Call the parent constructor using ClassName.__init__()
          BankAccount.__init__(self, balance) # <--- self is a SavingsAccount but also a BankAccount
          # Add more functionality
          self.interest_rate = interest_rate
  ```
  ```python
  acct = SavingsAccount(1000, 0.03)
  acct.interest_rate # 0.03
  ```
  - 새로운 코드를 작성할 수도 있지만 거의 부모 생성자 사용

- Add function and Customizing functionality
  ```python
  class SavingsAccount(BankAccount):
      # Constructor speficially for SavingsAccount with an additional parameter
      def __init__(self, balance, interest_rate):
          # Call the parent constructor using ClassName.__init__()
          BankAccount.__init__(self, balance) # <--- self is a SavingsAccount but also a BankAccount
          # Add more functionality
          self.interest_rate = interest_rate
      # New functionality
      def compute_interest(self, n_periods = 1):
          return self.balance * ( (1 + self.interest_rate) ** n_periods - 1)

  class CheckingAccount(BankAccount):
      def __init__(self, balance, limit):
          BankAccount.__init__(self, content)
          self.limit = limit
      def deposit(self, amount):
          self.balance += amount
      def withdraw(self, amount, fee=0):
          if fee <= self.limit:
              BankAccount.withdraw(self, amount - fee)
          else:
              BankAccount.withdraw(self, amount - self.limit)
  ```
  ```python
  check_acct = CheckingAccount(1000, 25)
  # Will call withdraw from CheckingAccount
  check_acct.withdraw(200)
  # Will call withdraw from CheckingAccount
  check_acct.withdraw(200, fee=15)
  ```
  ```python
  bank_acct = BankAccount(1000)
  # Will call withdraw from BankAccount
  bank_acct.withdraw(200)

  # Will produce an error
  bank_acct.withdraw(200, fee=15) # TypeError -> BankAccount의 withdraw에는 fee를 받지 않는다.
  ```
## Integrating with Standard Python

### 값이 같은 두 객체가 다른 이유

```python
class Customer:
    def __init__(self, name, balance):
        self.name, self.balance = name, balance

customer1 = Customer("Maryam Azar", 3000)
customer2 = Customer("Maryam Azar", 3000)
customer1 == customer2 # False
```

- 같은 값을 가진 객체라도 두 객체를 다르게 인식
  - 객체가 저장된 메모리 주소가 다르기 때문
- 위의 예시에서는 변수를 비교할 때 데이터 값으로 비교하는 것이 아니라 참조 값을 비교
  - NumPy array를 비교할 때는 값으로 비교가 된다.
    ```python
    import numpy as np

    array1 = np.array([1,2,3])
    array2 = np.array([1,2,3])

    array1 == array2 # True
    ```
- interpreter는 다양한 기능들을 알아서 사용

### Operator overloading: comparison

- `__eq__()`
  - 같은 클래스의 두 객체가 서로 비교할 때마다 호출

```python
class Customer:
    def __init__(self, id, name):
        self.id, self.name = id, name
    # Will be called dwhen == is used
    def __eq__(self, other):
        # Diagnostic printout
        print("__eq__() is called")

        # Returns True if all attributes match
        return (self.id == other.id) and (self.name == ohter.name)
```
```python
customer1 = customer1 = Customer(123, "Maryam Azar")
customer2 = Customer(123, "Maryam Azar")
customer1 == customer2
```
```
__eq__() is called
True
```

### Other comparison operators

- `==`: `__eq__()`
- `!=`: `__ne__()`
- `>=`: `__ge__()`
- `<=`: `__le__()`
- `>`: `__gt__()`
- `<`: `__lt__() `

- `__hash__()`: 객체를 dict key와 set로 사용
  - 동일한 객체는 동일한 해시를 가지며 해시는 객체의 수명 동안 변경되지 않는다.

### Operator overloading: string representation

- 클래스에서 객체의 출력 가능한 표현을 반환하는 두 가지 특별한 메서드
  - `__str__()`
    - 객체를 `print()`, `str()`를 사용하여 호출할 때 실행
    - 최종 사용자에게 적합한 비공식적 표현 제공
  - `__repr__()`
    - 객체를 `repr()`를 사용하여 호출할 때 또는 print()를 사용하여 출력하는 것이 아닌 콘솔에서 직접 출력할 때 실행
    - 주로 개발자가 사용
- best practice는 `__repr__()`을 사용하여 객체를 재사용하는 데 사용할 수 있는 문자열을 출력
- 둘 중 하나만 구현한다면 `__repr__()` 사용
  - `__str__()`이 정의되지 않은 경우 출력을 위해 사용

### 구현
- `__str__()`
  ```python
  class Customer:
      def __init__(self, name, balance):
          self.name, self.balance = name, balance
      def __str__(self):
          cust_str = """
          Customer:
            name: {name}
            balance: {balance}
          """.format(name = self.name, balance = self.balance)
          return cust_str
  ```
  ```python
  cust = Customer("Azar", 3000)
  print(cust)
  ```
- `__repr__()`
  ```python
  class Customer:
      def __init__(self, name, balance):
          self.name, self.balance = name, balance
      
      def __repr__(self):
      # Notice the '...' around name
          return "Customer('{name}', {balance})".format(name = self.name, balance = self.balance)

  cust = Customer("Maryam Azar", 3000)
  cust # <--- # Will implicitly call __repr__()
  ```
  ```
  Customer('Maryam Azar', 3000) # <--- not Customer(Maryam Azar, 3000)
  ```
  - 문자열 인자를 따옴표료 묶는 이유는 객체를 출력할 때 정확한 호출을 제공하기 위해서이다.

### Exception handling

- 파이썬에서 Exception은 built-in class인 BaseException 또는 Exception class에서 상속된 class이다.
- Error들은 각각 특수한 이름을 갖기 때문에 자신이 해결하지 못하면 검색해보자.
- try - except - finally 구문 사용
  ```python
  try:
      # try running some code
  except ExceptionNameHere:
      # Run this code if ExceptionNameHere happens
  except AnotherExceptionHere: # <-- multiple except blocks
      # Run this code if AnotherExceptionHere happens
  ...
  finally: # <-- optional
      # Run this code no matther what
  ```

### Raising exception

- 인위적으로 예외를 일으키는 경우도 있다.
- `raise` 키워드 사용
  ```python
  def make_list_of_ones(length):
      if length <= 0:
          raise ValueError("Invalid length!") # <-- Will stop the program and raise an error
      return [1]*length
  ```

### Custom exception

- 자신이 커스텀한 Exception은 구체적일 수 있으니 유용하다.
- Built-in Exception class 또는 subclass 중 하나에서 새로운 예외를 파생시킬 것을 권장
- class는 비어있을 수 있으며 상속만 하면 된다.
  ```python
  class BalanceError(Exception): pass

  class Customer:
      def __init__(self, name, balance):
          if balance < 0:
              raise BalanceError("Balance has to be non-negative!")
          else:
              self.name, self.balance = name, balance

  c1 = Customer("Andre", -200)
  print(c1.name)
  print(c1.balance)
  ```

## Best Practices of Class Design

### Polymorphism

- 다형성
  - 서로 다른 클래스의 객체에서 작동하기 위해 통일된 인터페이스를 사용하는 것
  - 무엇이 전달되는지에 대해 걱정할 필요가 없고 단지 어떤 인터페이스를 가지고 있는가에 대해서만 걱정해야 한다.

### Liskov substitution principle

- 리스코프 치환 원칙
  - 상속을 언제 어떻게 적절하게 사용할 것인가에 대해 설명한 근본적인 객체 지향 설계 원칙
  - 기본 클래스는 주변 프로그램의 어떠한 특성도 바꾸지 않고 하위 클래스와도 상호 호환이 가능해야 한다. 
  - 특정 메소드가 상위 타입을 인자로 사용한다고 할 때 그 타입의 하위 타입도 문제 없이 정상적으로 작동을 해야 한다. 
  - 클래스 계층이 LSP를 위반할 경우 상속을 사용하면 안 된다.
    - 코드가 예측할 수 없는 방식으로 동작할 가능성이 있기 때문

### Managing data access: private attributes

- 파이썬의 모든 클래스 데이터는 기술적으로 공개된다.
- 데이터에 대한 접근을 관리하는 방법
  - Naming conventions
    - `_`: public API의 일부가 아닌 속성이나 메서드를 나타내며 예고 없이 변경될 수 있다는 것을 의미
      - As a class user: "don't touch this"
      - As a class developer: use for implementation details, helper functions..
      - e.g. `df._is_mixed_type`, `datetime._ymd2ord()`
    - `__`: private -> 비공개
      - 데이터가 상속되지 않는다.
      - Name mangling: `object.__attr_name`는 `object._MyClass__attr_name`로 변경해서 사용
        - 선언된 클래스 안에서만 해당 이름으로 사용 가능하다.
      - 자식 클래스에서 이름 충돌을 방지
  - `@property`
    - attribute 접근 제어, 검증
    - 클래스의 사용자가 특별한 작업을 수행할 필요가 없기 때문에 `@property`는 유용하다.
      - 사용자는 property와 regular attribute를 구별하기도 힘들 것이다. -> 접근 통제
    - `@attr.setter`를 사용하지 않으면 attribute를 읽기 전용으로 만든다. 
    - `@attr.getter`
    - `@attr.deleter`
    ```python
    class Employer:
    def __init__(self, name, new_salary):  # Use "protected" attribute with leading	__ to store data ( _salary)
        self._salary = new_salary

    @property
    def salary(self):  # Use @property on a method whose name is exactly the name of the restricted attribute (salary with out underscore); return the internal attribute
        return self._salary

    @salary.setter
    def salary(self, new_salary):  # Use decorator: @attr.setter on a method attr(). It will be called when a value is assigned to the property attribute
        if new_salary < 0:
            raise ValueError("Invalid salary")
        self._salary = new_salary #  the value to assign passed as argument

    emp = Employee("Miriam Azari", 35000) 
    # accessing the "property" 
    emp.salary # 35000

    emp.salary = 60000 # <-- @salary.setter

    emp.salary = -1000 # ValueError: Invalid salary
    ```

  - Overriding `__gatattr__()` and `__setattr__()`