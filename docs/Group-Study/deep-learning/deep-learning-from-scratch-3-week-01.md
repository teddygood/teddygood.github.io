---
title: '나만의 딥러닝 프레임워크 만들기 1주차'
date: '2023-02-09'
# tags: ["Java"]
draft: false

description: 가짜연구소 6기 스터디

sidebar_position: 1
---

## DeZero

이 책은 DeZero라는 오리지널 프레임워크를 처음부터 만들어본다.

## STEP 01 상자로서의 변수

### 변수란

이 책에서는 '데이터를 담는 상자'에 비유한다.

- 상자와 데이터는 별개다.
- 상자에는 데이터가 들어간다.(대입 혹은 할당)
- 상자 속을 들여다보면 데이터를 알 수 있다.(참조)

## Variable 클래스 구현

DeZero에서 사용하는 변수를 Variable이라는 이름의 클래스로 구현한다.

파이썬에서는 클래스 이름의 첫 글자를 보통 대문자로 한다. 자세한 코딩 컨벤션은 [PEP8](https://peps.python.org/pep-0008/)을 참고하자.

초기화 함수 `__init__`에 주어진 인수를 인스턴스 변수 data에 대입했다.

```python
class Variable:
	def __init__(self, data):
		self.data = data
```

x는 Variable 인스턴스이며 실제 데이터는 x 안에 담겨 있다. 

```python
import numpy as np

data = np.array(1, 0)
x = Variable(data) 
print(x.data)
```

ML 시스템은 기본 데이터 구조로 다차원 배열을 사용한다. DeZero 또한 넘파이의 다차원 배열만 취급한다. 넘파이의 다차원 배열 클래스는 `numpy.ndarray`이며 `np.ndarray`로 줄여 쓴다.

```python
x.data = np.array(2, 0)
print(x.data)
```

## 넘파이의 다차원 배열

다차원 배열에서 원소의 순서에는 방향이 있고, 이를 차원(dimmension) 혹은 축(axis)이라고 한다. 

스칼라는 단순히 하나의 수, 벡터는 축이 한 개, 행렬은 축이 두 개이다. 다차원 배열을 텐서(tensor)라고도 한다. 스칼라는 0차원 텐서, 벡터는 1차원 텐서, 행렬은 2차원 텐서가 된다.

넘파이의 ndarray 인스턴스에는 ndim이라는 인스턴스 변수가 있다. number of dimmensions의 약자이다.

```python
import numpy as np

x = np.array(1) # 스칼라
print(x.ndim) # 0
```

```python
import numpy as np

x = np.array([1, 2, 3]) # 벡터
print(x.ndim) # 1
```

벡터를 다룰 때는 차원이라는 말에 주의해야 한다. `np.array([1, 2, 3])`에서 세 개의 요소가 있기에 3차원 벡터라고도 한다. 이때 벡터의 차원은 벡터의 원소 수를 말한다. 그러나 3차원 배열이라 표현할 때의 배열의 차원은 원소가 아닌 축이 3개라는 것을 의미한다. 

## 2.1 함수란

원과 사각형 모양의 노드들을 화살표로 연결해 함수의 계산 과정을 표현한 그림을 계산 그래프(computational graph)라고 한다. 그래프란 node와 edge로 구성된 데이터 구조이다.

## 2.2 Function 클래스 구현

- Function 클래스는 Variable 인스턴스를 입력받아 Variable 인스턴스를 출렿나다.
- Variable 인스턴스의 실제 데이터는 인스턴스 변수인 data에 있다.

```python
class Function:
	def __call__(self, input):
		x = input.data
		y = x ** 2
		output = Variable(y)
		return output
```

`__call__` 메서드의 인수 input은 Variable의 인스턴스라 가정한다. 

`__call__` 메서드는 파이썬의 특수 메서드로 `f = Function()` 형태로 함수의 인스턴스를 변수 `f`에 대입해두고 변수를 함수의 형태로 호출할 수 있다.

## 2.3 Function 클래스 이용

- Function 클래스는 모든 함수에 공통되는 기능을 구현한다.
- 구체적인 함수는 Function 클래스를 상속한 클래스에서 구현한다.

```python
class Function:
	def __call__(self, input):
		x = input.data
		y = self.forward(x)
		output = Variable(y)
		return output
		
	def forward(self, x):
		raise NotImplementedError()
```

구체적인 계산은 forward 메서드를 호출하여 수행한다. 이 메서드는 예외를 발생시키는데 이렇게 해두면 이 메서드를 직접 호출한 사람에게 이 메서드는 상속하여 구현해야 한다는 사실을 알려줄 수 있다. 

```python
class Square(Function):
	def forward(self, x):
		return x ** 2
```

Square 클래스는 Function 클래스를 상속하기에 `__call__` 메서드는 그대로 계승된다. 

```python
x = Variable(np.array(10))
f = Square()
y = f(x)

print(type(y)) # <class '__main__.Variable'>
print(y.data) # 100
```

## 3.1 Exp 함수 구현

$y = e^x$ 식을 계산하는 함수이다. $e$는 자연로그의 밑(base of the natural logarithm)으로 오일러 수(Euler's number) 또는 네이피어 상수(Napier's constant)라고도 한다.

```python
class Exp(Function):
	def forward(self, x):
		return np.exp(x)
```

## 3.2 함수 연결

Function 클래스의 `__call__` 메서드는 입력과 출력이 모두 Variable 인스턴스이기에 DeZero 함수들을 사용할 수 있다.

```python
A = Sqaure()
B = Exp()
C = Square()

x = Variable(np.array(0, 5))
a = A(x)
b = B(a)
y = C(b)
print(y.data)
```

Function 클래스의 `__call__` 메서드의 입출력이 Variable 인스턴스로 통일되어 있기에 여러 함수를 연속하여 적용할 수 있는 것이다. 이렇게 여러 함수로 구성된 함수를 합성 함수(composite function)라고 한다. 

## 4.1 미분이란

미분은 간단히 말하면 변화율을 의미한다. 정확한 정의는 극한으로 짧은 시간(순간)에서의 변화량이다.

$$\begin{align*}
f^{\prime}(x)=\lim _{h \rightarrow 0} \frac{f(x+h)-f(x)}{h}
\end{align*}$$

$\frac{f(x+h)-f(x)}{h}$ 식은 두 점을 지나는 직선의 기울기를 의미한다. $f^{\prime}(x)$는 $f(x)$의 도함수라고 한다.

## 4.2 수치 미분 구현

컴퓨터는 극한을 취급할 수 없으니 극한과 비슷한 값으로 대체한다. $h$ = 0.0001(= 1e-4)과 같은 매우 작은 값을 이용하여 계산한다. 이런 미세한 차이를 이용하여 함수의 변화량을 구하는 방법을 수치 미분(numeriacal differentation)이랗고 한다.

수치 미분은 작은 값을 사용하여 근사하는 것이기에 어쩔 수 없이 오차가 포함된다. 이 근사 오차를 줄이는 방법으로는 중앙차분(centered difference)이라는 게 있다. 중앙차분은 $f(x)$와 $f(x+h)$의 차이를 구하는 대신 $f(x-h)$와 $f(x+h)$의 차이를 구한다. 

$f(x)$와 $f(x+h)$ 지점에서의 기울기를 구하는 방법을 전진차분(forward difference)라고 하고 $f(x-h)$와 $f(x+h)$에서의 기울기를 구하는 방법을 중앙차분이라 한다. 중앙차분이 상대적으로 오차가 작기에 중앙차분을 사용한다. 자세한 증명은 생략한다. 전진차분보다 중앙차분이 진정한 미분값에 가깝다는 사실은 테일러 급수(Taylor series)를 이용해 증명할 수 있다.  중앙차분에서 직선의 기울기는 $\frac{f(x+h)-f(x-h)}{2h}$이다.

중앙차분을 이용하여 수치 미분을 계산하는 `numerical_diff(f, x, eps=1e-4)` 함수를 구현한다. f는 미분의 대상이 되는 함수이며 Function의 인스턴스이다. x는 미분을 계산하는 변수로 Variable 인스턴스이다. 마지막 eps는 epsilon의 약어로 작은 값을 나타낸다. 앱실론은 수학에서 작은 양의 값을 나타내는 데 사용되고, 컴퓨터에서는 아주 작은 양의 부동소수점 값을 담는 변수의 이름으로 흔히 사용된다. 기본값은 1e-4이다.

```python
def numerical_diff(f, x, eps=1e-4):
	x0 = Variable(x.data - eps)
	x1 = Variable(x.data + eps)
	y0 = f(x0)
	y1 = f(x1)
	return (y1.data - y0.data) / (2 * eps)

f = Square()
x = Variable(np.array(2, 0))
dy = numerical_diff(f, x)
print(dy) # 4.000000000004
```

## 4.3 합성 함수의 미분

$y=(e^{x^2})^2$의 미분 $\frac{dy}{dx}$를 계산한다.

```python
def f(x):
    A = Square()
    B = Exp()
    C = Square()
    return C(B(A(x)))


x = Variable(np.array(0.5))
dy = numerical_diff(f, x)
print(dy) # 3.2974426293330694
```

파이썬에서는 함수도 객체이기 때문에 다른 함수에 인수로 전달할 수 있다. 

## 4.4 수치 미분의 문제점 

수치 미분의 결과에는 오차가 포함되어 있다. 대부분의 경우 오차가 매우 작지만 어떤 계산이냐에 따라 오차는 커질 수도 있다.  결과에 오차가 포함되기 쉬운 이유는 주로 자릿수 누락 때문이다. 주앙차분 등 차이를 구하는 계산은 주로 크기가 비슷한 값들을 다루므로 계산 결과에서 자릿수 누락이 생겨 유효 자릿수가 줄어들 수 있다. 

더 심각한 문제는 계산량이 많다는 것이다. 변수가 여러 개인 계산을 미분할 경우 변수 각각을 미분해야 한다. 매개변수를 수백만 개 이상 사용하는 경우도 있는 이 모든 변수를 수치 미분으로 구하는 것은 비현실적이다. 그렇기에 역전파를 사용한다.

또한, 수치 미분은 구현하기 쉽고 거의 정확한 값을 얻을 수 있다. 이에 비해 역전파는 복잡한 알고리즘이기에 구현하면서 버그가 섞여 들어가기 쉽다. 그래서 역전파를 정확하게 구현했는지 확인하기 위해 수치 미분의 결과를 이용하곤 한다. 이를 기울기 확인(gradient checking)이라 하는데 단순히 수치 미분 결과와 역전파의 결과를 비교하는 것이다.

## 5.1 연쇄 법칙

연쇄 법칙(chain rule)에 따르면 합성 함수의 미분은 구성 함수 각각을 미분한 후 곱한 것과 같다. $y = C(B(A(x)))$ 식에서 x에 대한 y의 미분은 $\frac{d y}{d x}=\frac{d y}{d y} \frac{d y}{d b} \frac{d b}{d a} \frac{d a}{d x}$이 된다. $\frac{d y}{d y}$는 자신에 대한 미분이라 항상 1이다. 

## 5.2 역전파 원리 도출

합성 함수의 미분은 구성 함수들의 미분의 곱으로 분해할 수 있다. 어떤 순서로 곱해도 상관없다.

$$\frac{d y}{d x}=\left(\left(\frac{d y}{d y} \frac{d y}{d b}\right) \frac{d b}{d a}\right) \frac{d a}{d x}$$

위의 식처럼 보통 계산과는 반대 방향으로 미분을 계산해볼 수도 있다. 계산 그래프를 그려보면 미분값이 오른쪽에서 왼쪽으로 전파되는 형태를 보여주는데 이것이 역전파이다. 전파되는 데이터는 모두 y의 미분값이 되며, 만약 입력에서 출력 방향으로 계산한다면 x에 대한 미분을 전파하게 된다. 

ML은 주로 대량의 매개변수를 입력받아 마지막에 손실 함수(loss function)를 거쳐 출력을 내는 형태로 진행된다. 손실 함수의 출력은 많은 경우 스칼라 값이며 이 값이 중요하다. 손실 함수의 각 매개변수에 대한 미분을 계산해야 한다. 이런 경우 미분값을 출력에서 입력 방향으로 전파하면 한 번의 전파만으로 모든 매개변수에 대한 미분을 계산할 수 있다. 즉, 계산이 효율적으로 이뤄지기 때문에 미분을 반대 방향으로 전파하는 역전파를 이용하는 것이다.

## 5.3 계산 그래프로 살펴보기

역전파 시에는 순전파 때 이용한 데이터가 필요하다. 즉, 역전파를 구현하려면 먼저 순전파를 하고, 각 함수가 입력 변수의 값을 기억해두지 않으면 안 된다. 

## 6.1 Variable 클래스 추가 구현

역전파에 맞는 Variable 클래스를 구현한다. 값과 미분값도 저장하도록 확장한다.

```python
class Variable:
	def __init(self, data):
		self.data = data
		self.grad = grad
```

인스턴스 변수인 data와 grad는 모두 넘파이의 ndarray라고 가정한다. grad는 None으로 초기화해둔 다음, 나중에 실제로 역전파를 하면 미분값을 계산하여 대입한다. 벡터나 행렬 등 다변수에 대한미분은 기울기(gradient)라고 한다.

## 6.2 Function 클래스 추가 구현

이전 단계까지의 Function 클래스는 순전파만 지원하는 상태이다. 미분을 계산하는 역전파와 순전파 메서드 호출 시 건네받은 Variable 인스턴스를 유지하는 기능을 추가한다.

```python
class Function:
	def __call__(self, input):
		x = input.data
		y = self.forward(x)
		output = Variable(y)
		self.input = input # 입력 변수를 따로 저장
		return output

	def forward(self, x):
		raise NotImplementedError()

	def backward(self, gy):
		raise NotImplementedError()
```

backward 메서드에서 Function에 입력한 Variable 인스턴스가 필요할 때 self.input에서 가져와 사용할 수 있다. 

## 6.3 Square와 Exp 클래스 추가 구현

Function을 상속한 함수에서 역전파를 구현한다. $y=x^2$의 미분은 $\frac{d y}{d x} = 2x$이다.

```python
class Square(Function):
	def forward(self, x):
		y = x ** 2
		return y

	def backward(self, gy):
		x = self.input.data
		gx = 2 * x * gy
		return gx
```

gy는 ndarray 인스턴스이며, 출력 쪽에서 전해지는 미분값을 전달하는 역할을 한다.

$y=e^x$ 계산을 할 Exp 클래스를 구현한다. 미분을 해도 그대로 이기에 아래와 같이 구현할 수 있다.

```python
class Exp(Function):
	def forward(self, x):
		y = np.exp(x)
		return y

	def backward(self, gy):
		x = self.input.data
		gx = np.exp(x) * gy 
		return gx
```

## 6.4 역전파 구현

```python
A = Square()
B = Exp()
C = Square()

x = Variable(np.array(0.5))
a = A(x)
b = B(a)
c = C(b)
```

위의 순전파 코드를 역전파로 구현해본다. 순전파 때와 반대로 각 함수의 backward 메서드를 호출하면 된다. 

```python
y.grad = np.array(1.0)
b.grad = C.backward(y.grad)
a.grad = B.backward(b.grad)
x.grad = A.backward(a.grad)
print(x.grad) # 3.297442541400256
```

역전파는 $\frac{d y}{d y}=1$에서 시작하기에 np.array(1.0)로 설정했다.

역전파 메서드를 호출하는 코드를 수동으로 작성하는 것은 불편함이 있다. 그렇기에 자동화 한다. 순전파를 한 번만 하면 어떤 계산이라도 상관없이 역전파가 자동으로 이루어지는 구조를 만들어본다.

지금부터가 Define-by-Run의 핵심을 건드리는 내용이다. Defien-by-Run이란 딥러닝에서 수행하는 계산들을 계산 시점에 연결하는 방식으로 동적 계산 그래프라고도 한다. 

함수의 순서를 리스트 형태로 저장해두면 나중에 거꾸로 추적하는 식으로 역전파를 자동화할 수 있으나 분기가 있는 계산 그래프나 같은 변수가 여러 번 사용되는 복잡한 계산 그래프는 단순히 리스트로 저장하는 식으로는 풀 수 없다.

수행한 계산을 리스트에 추가해 나가는 것만으로 어떠한 계산 그래프의 역전파도 해낼 수 있는 데이터 구조가 있기는 하다. 웬거트 리스트(Wengert List) 또는 tape라고 한다. 

## 7.1 역전파 자동화의 시작

creator라는 인스턴스 변수를 추가하고 cretor를 설정할 수 있도록 set_creator 메서드도 추가한다.

```python
class Variable:
	def __init__(self, data):
		self.data = data
		self.grad = None
		self.creator = None

	def set_creator(self, func):
		self.creator = func
```

순전파르 계산하면 output이라는 Variable 인스턴스가 생성된다. output에 만든 사람을 저장한다. 이 부분이 연결을 동적으로 만드는 기법의 핵심이다. 

DeZero의 동적 계산 그래프(Dynamic Computational Graph)는 실제 계산이 이루어질 때 변수에 관련 연결을 기록하는 방식으로 만들어진다. 체이너와 파이토치의 방식도 이와 비슷한다.

```python
class Function:
	def __call__(self, input):
		x = input.data
		y = self.forward(x)
		output = Variable(y)
		output.set_creator(self) 
		self.input = input
		self.output = output
		return output
```

연결된 Variable과 Function이 있다면 계산 그래프를 거꾸로 거슬러 올라갈 수 있다. 

```python
A = Square()
B = Exp()
C = Square()

x = Variable(np.array(0.5))
a = A(x)
b = B(a)
c = C(b)

# 계산 그래프의 노드들을 거꿀로 거슬러 올라간다.
assert y.creator == C
assert y.creator.input == b
assert y.creator.input.creator == B
assert y.creator.input.creator.input == a
assert y.creator.input.creator.input.creator == A
assert y.creator.input.creator.input.creator.input == x
```

assert 문은 뒤의 문장이 True가 아니면 예외가 발생한다. 즉, 조건을 충족하는지 여부를 확인하는 데 사용할 수 있다. 위의 코드는 문제없이 실행되므로 assert 문의 조건을 모두 충족한다.

계산 그래프는 함수와 변수 사이의 연결로 구성된다. 중요한 점은 이 연결이 실제로 계산을 수행하는 시점에(순전파로 데이터를 보낼 때) 만들어진다는 것이다. 이런 특성에 이름을 붙인 것이 Define-by-Run이다. 데이터를 흘려보냄으로써 연결이 규정된다는 의미이다.

계산 그래프는 링크드 리스트라는 데이터 구조를 이용하여 표현하고 있다.

## 7.2 역전파 도전!

역전파는 다음과 같은 순서로 진행된다.

1. 함수를 가져온다.
2. 함수의 입력을 가져온다.
3. 함수의 backward 메서드를 호출한다.

y에서 b까지의 역전파를 구현한다.

```python
y.grad = np.array(1.0)

C = y.creator
b = C.input
b.grad = C.backward(y.grad)
```

b에서 a로의 역전파를 구현한다.

```python
B = b.creator
a = B.input
a.grad = B.backward(b.grad)
```

a에서 x로의 역전파를 구현한다.

```python
A = a.cretor
x = A.input
x.grad = A.backward(a.grad)
print(x.grad) # 3.297442541400256
```

## 7.3 backward 메서드 추가

이런 반복 작업을 자동화할 수 있도록 Variable 클래스에 backward라는 메서드를 추가한다.

Varialbe 인스턴스의 creator가 None이면 역전파는 중단된다.

```python
class Variable:
	def __init__(self, data):
		self.data = data
		self.grad = None
		self.creator = None

	def set_creator(self, func):
		self.creator = func

	def backward(self):
		f = self.creator
		if f is not None:
			x = f.input
			x.grad = f.backward(self.grad)
			x.backward()
```

```python
A = Square()
B = Exp()
C = Square()

x = Variable(np.array(0.5))
a = A(x)
b = B(a)
c = C(b)

y.grad = np.array(1.0)
y.backward()
print(x.grad) # 3.297442541400256
```

## 8.1 현재의 Variable 클래스

현재의 Variable 클래스의 backward 메서드는 self.creator가 None인 변수를 찾을 때까지 반복되는 재귀 구조로 이루어져 있다.

## 8.2 반복문을 이용한 구현

재귀 구조에서 반복문을 이용하는 방식으로 변경한다. 처리해야 할 함수들을 funcs라는 리스트에 넣고 pop()을 호출하여 처리할 함수를 꺼내고 backward 메서드를 사용하는 방법이다. 

```python
class Variable:
	...

	def backward(self):
		funcs = [self.creator]
		while funcs:
			f = funcs.pop() # 함수를 가져온다.
			x, y = f.input, f.output
			x.grad = f.backward(y.grad) # backward 메서드 호출
			if x.creator is not None:
				funcs.append(x.creator)
```

## 8.3 동작 확인

```python
A = Square()
B = Exp()
C = Square()

x = Variable(np.array(0.5))
a = A(x)
b = B(a)
c = C(b)

y.grad = np.array(1.0)
y.backward()
print(x.grad) # 3.297442541400256
```

같은 결과가 나온다. 나중에 복잡한 계산 그래프를 다루는데 반복문 방식을 사용함으로서 확장가능성이 올라갔고 처리 효율이 더 뛰어나게 됐다. 

재귀는 함수를 재귀적으로 호출할 때마다 중간 결과를 메모리에 유지하면서 처리를 이어간다. 일반적으로 반복문 방식의 효율이 더 좋은 이유이다. 그러나 요즘 컴퓨터는 메모리가 넉넉하여 큰 문제가 되지는 않는다. 또한, 꼬리 재귀(tail recursion) 기법을 이용하여 재귀를 반복문처럼 실행할 수 있는 경우도 있다.

## 9.1 파이썬 함수로 이용하기

지금까지 함수를 클래스로 정의해 사용했다.

```python
x = Variable(np.array(0.5))
f = Sqaure()
y = f(x)
```

위의 코드와 같이 클래스의 인스턴스를 생성 후, 인스턴스를 호출하는 두 단계로 진행했다. y = Square()(x) 형태로 한 줄로 적을 수도 있지만 보기 좋지는 않다. 그렇기에 파이썬 함수를 지원하도록 만든다. 

```python
def square(x):
	f = Square()
	return f(x)

def exp(x):
	f = Exp()
	return f(x)
```

위의 코드를 아래 코드처럼 더 간단하게 표현할 수도 있다.

```python
def square(x):
	return Square()(x)

def exp(x):
	return Exp()(x)
```

사용해보면 같은 결과가 나온다. nparray(0.5)를 Variable로 감싸면 일반적인 수치 계산을 하듯 넘파이를 사용하여 코딩할 수 있다.

```python
x = Variable(np.array(0.5))
a = square(x)
b = exp(a)
y = square(b)
# y = square(exp(square(x)))처럼 사용 가능

y.grad = np.array(1.0)
y.backward()
print(x.grad)
```

## 9.2 backward 메서드 간소화

역전파 시 y.grad = np.array(1.0) 부분을 생략한다. 역전파할 때마다 이 코드를 작성해야 한다. 

```python
class Variable:
	...

	def backward(self):
		if self.grad is None:
			self.grad = np.ones_like(self.data)
			
		funcs = [self.creator]
		while funcs:
			f = funcs.pop()
			x, y = f.input, f.output
			x.grad = f.backward(y.grad)

			if x.creator is not None:
				funcs.append(x.creator)
```

변수의 grad가 None이면 자동으로 미분값을 생성한다. np.ones_like(self.data)코드는 self.data와 형상, 데이터 타입이 같은 ndarray 인스턴스를 생성하는데, 모든 요소를 1로 채워서 돌려준다. self.data가 스칼라이면 self.grad도 스칼라가 된다.

np.array(1.0)에서 np.ones_like()로 변경한 이유는 Variable의 data와 grad의 데이터 타입을 같게 만들기 위해서이다. np.array(1.0)은 64비트 부동소수점 숫자 타입으로 만들어준다.

이제 마지막으로 backward 메서드를 호출하는 것만으로 미분값이 구해진다.

```python
x = Variable(np.array(0.5))
y = square(exp(square(x)))
y.backward()
print(x.grad)
```

## 9.3 ndarray만 취급하기

Variable은 ndarray 인스턴스만 취급하도록 만들어져 있다. 그러나 사용자가 float나 int 등과 같은 데이터 타입을 사용하는 일도 발생할 수 있다. 그렇기에 Variable에 ndarray 인스턴스 외의 데이터를 넣을 경우 즉시 오류를 일으키로 구현한다. 

```python
class Variable:
	def __init__(self, data):
		if data is not None:
			if not isinstance(data, np.ndarray):
				raise TypeError('{}은(는) 지원하지 않습니다.'.format(type(data)))

		self.data = data
		self.grad = None
		self.creator = None
```

data가 None이 아니고 ndarray 인스턴스도 아니라면 TypeError 예외를 발생시킨다.

```python
x = Variable(np.array(1.0))
x = Varaible(None)

x = Variable(1.0) # Error
```

이렇게 바꾸면 넘파이에서 주의할 점이 생긴다. 

```python
x = np.array([1.0])
y = x ** 2
print(type(x), x.ndim) # <class 'numpy.ndarray'> 1
print(type(y)) # <class 'numpy.ndarray'>
```

```python
x = np.array(1.0)
y = x ** 2
print(type(x), x.ndim) # <class 'numpy.ndarray'>  0
print(type(y)) # <class 'numpy.float64'>
```

위의 코드의 x는 0차원의 ndarray인데 제곱을 하니 np.float64가 된다. 이건 넘파이가 의도한 동작이다. 0차원 ndarray 인스턴스를 사용하여 계산하면 데이터 타입이 numpy.float64나 numpy.float32 등으로 달라진다. 이 부분을 고려하여 함수를 하나 만든다.

```python
def as_array(x):
	if np.isscalar(x):
		return np.array(x)
	return x
```

np.isscalar는 입력 데이터가 numpy.float64 같은 스칼라 타입인지 확인해주는 함수이다. 이 함수를 이용하여 입력이 스칼라인 경우 ndarray 인스턴스로 변환한다.

```python
class Function
	def __call__(self, input):
		x = input.data
		y = self.forward(x)
		output = Variable(as_array(y)) # output이 항상 ndarray  인스턴스가 되도록 보장 
		output.set_creator(self)
		self.input = input
		self.output = output
		return output
		
```

소프트웨어 개발에서는 테스트를 빼놓을 수 없다. 테스트를 해야 버그를 예방할 수 있으며 테스트를 자동화해야 소프웨어의 품질을 유지할 수 있다.

소프트웨어 테스트는 규모가 커지면 독특한 규약이나 세세한 규칙이 많아지기 쉽다. 테스트를 처음부터 어렵게 생각할 필요는 없으며 우선 테스트한다는 것 자체가 중요하다.

## 10.1 파이썬 단위 테스트

파이썬으로 테스트할 때는 표준 라이브러리에 포함된 unittest를 사용하면 편하다.

unittest.TestCase를 상속한 SquareTest 클래스를 구현한다. 

```python
improt unittest

class SqaureTest(unittest.TestCase):
	def test_forward(self):
		x = Variable(np.array(2.0))
		y = square(x)
		expected = np.array(4.0)
		self.assertEqual(y.data, expected)
```

테스트할 때는 이름이 test로 시작하는 메서드를 만들고 그 안에 테스트할 내용을 적는다. 

square 함수의 출력이 기댓값(expected)과 같은지 확인하기 위해 self.assertEqual이라는 메서드를 사용했다. 이 메서드는 주어진 두 객체가 동일한지 여부를 판정한다. 이 메서드 외에도 self.assertGreater와 self.assertTrue 등 unittest에는 다양한 메서드가 준비되어 있다.

실행은 아래의 명령어를 터미널에서 사용할 수 있다. -m unittest 인수를 제공하면 파이썬 파일을 테스트 모드로 실행할 수 있다.

```bash
python -m unittest 테스트코드.py
```

또는 테스트코드 끝에 아래의 코드를 추가하면 평소처럼 파이썬 파일을 실행하는 것만으로도 테스트를 수행할 수 있다.

```python
unittest.main()
```

## 10.2 square 함수의 역전파 테스트

방금 구현한 SquareTest 클래스에 다음 코드를 추가한다. 미분값을 구하고 그 값이 기댓값과 일치하는지 확인한다. 기댓값 6.0은 손으로 계산해서 구한 값을 하드코딩한 것이다.

```python
class SquareTest(unittest.TestCase):
	...

	def test_backward(self):
		x = Variable(np.array(3.0))
		y = sqaure(x)
		y.backward()
		expected = np.array(6.0)
		self.assertEqual(x.grad, expected)
		
```

테스트 케이스가 많아질수록 함수의 신뢰도도 높아질 것이다.

## 10.3 기울기 확인을 이용한 자동 테스트

이전에서는 기댓값을 손으로 계산해 입력했으나 이 부분도 자동화할 수 있다. 기울기 확인(gradient checking)이라는 방법이다. 기울기 확인이란 수치 미분으로 구한 결과와 역전파로 구한 결과를 비교하여 그 차이가 크면 역전파 구현에 문제가 있다고 판단하는 검증 기법이다. 기울기 확인은 기댓값을 모르고 입력값만 준비하면 되므로 테스트 효율을 높여준다.

```python
def numerical_diff(f, x, eps=1e-4)
	x0 = Variable(x.data - eps)
	x1 = Variable(x.data + eps)
	y0 = f(x0)
	y1 = f(x1)
	return (y1.data - y0.data) / (2 * eps)

class SquareTest(unittest.TestCase):
	...

	def test_gradient_check(self):
		x = Variable(np.random.rand(1)) # 무작위 입력값
		y = square(x)
		y.backward()
		num_grad = numerical_diff(square, x)
		flg = np.allclose(x.grad, num_grad)
		self.assertTrue(flg)
```

기울기 확인을 할 메서드 안에서 무작위 입력값을 하나 생성 후 역전파로 미분값을 구하고 numerical_diff 함수를 사용하여 수치 미분으로도 계산해본다. 그 다음 두 메서드로 각각 구한 값들이 거의 일치하는지 확인한다.

이때 np.allclose라는 넘파이 함수를 이용한다. np.allclose(a, b)는 ndarray 인스턴스인 a와 b의 값이 가까운지 판정한다. 얼마나 가까운 것인지는 인수 rtol과 atol로 지정할 수 있으며 a와 b의 모든 요소가 아래의 조건을 만족하면 True를 반환한다.

$$|a - b| \leqq (atol+rtol\times|b|)$$  

기울기 확인을 하는 대상의 계산에 따라 atol과 rtol의 값을 미세하게 조정해야 할 수도 있다. 

기울기 확인을 이용하면 미분을 자동으로 계산하는 딥러닝 프레임워크를 반자동으로 테스트할 수 있고, 더 체계적으로 넓은 범위를 검증하는 테스트 케이스를 만들 수 있다.

## 10.4 테스트 정리

테스트 파일들은 하나의 장소에 모아 관리하는 것이 일반적이다. 

unittest를 지정할 때 discover라는 인수를 추가하면 discover 다음에 지정한 디렉터리에서 테스트 파일이 있는지 검색한다. 그리고 발견한 모든 파일을 실행하게 된다. 기본적으로는 이름이 test*.py 형태인 파일을 테스트 파일로 인식한다.

```bash
python -m unittest discover tests
```

DeZero 깃허브 저장소는 트래비스 CI라는 지속적 통합(continuous integration, CI) 서비스와 연계해뒀다. 소스코드를 지속해서 테스트할 수 있게 설계되었으며 코드의 신뢰성을 유지할 수 있다.

## 칼럼: 자동 미분

딥러닝 프레임워크의 중심에는 역전파가 있다. 역전파는 문헌에 따라 자동 미분이라고 부르기도 한다. 

자동 미분을 문자 그대로 해석하면 자동으로 미분을 계산하는 방법이다. 사람이 아니라 컴퓨터가 미분을 계산한다는 의미다. 어떤 계산을 코드로 구현하면 그 계산의 미분을 컴퓨터가 자동으로 계산해주는 시스템을 가리킨다. 자동 미분은 학계에서 오랫동안 연구해온 분야이며 지금까지 ML과의 교류가 없었으나 현재는 관심이 높아지는 추세이다.

컴퓨터 프로그램에서 미분을 계산하는 방법은 크게 세 가지로 나눌 수 있다. 첫 번째는 수치 미분(numerical differentiation)이다. 변수에 미세한 차이를 주어 순전파를 2번 실시하고 두 출력의 차이로부터 근사적으로 미분을 계산한다. 구현하기 쉽지만 출력에 오차가 포함되기 쉽고 다량의 변수를 사용하는 함수를 다룰 때는 계산 비용이 높다는 단점이 있다.

두 번째 방법은 기호 미분(symbolic differentiation)이다. 고등학교 수학에서 배운 것처럼 미분 공식을 이용하여 계산하는 방법이다. 입력도 출력도 수식이다. 즉, 도함수를 얻은 후 구체적인 값에서의 미분을 계산하는 방법이다. Mathematica와 MATLAB 등에서 이용된다. 단점은 수식이 크게 부풀어 오르기 쉽다는 것이다. 최적화를 고려하지 않고 구현하면 수식이 거대해진다. 딥러닝에서 취급하는 계산은 수많은 변수에 대한 미분 값을 효율적으로 구해야 하기에 기호 미분보다 효율적인 방법을 사용한다.

세 번째 방법은 자동 미분(automatic differentiation)이다. 자동 미분은 연쇄 법칙을 사용하여 미분하는 방법으로 어떤 함수를 프로그램으로 짜서 건네주면 그 미분을 효율적이고 정밀하게 계산한다. 순전파와 역전파가 자동미분에 속한다. 역전파는 미분 결과를 출력 쪽에서 입력 쪽으로 전달한다. 반대로 순전파는 입력에서 출력으로 전달한다. 두 방법 모두 연쇄 법칙을 사용하여 미분을 계산하지만 경로가 다른 것이다. 출력이 하나고 그 하나의 출력 변수를 미분하려면 역전파가 적합하다. ML은 대부분 출력이 변수 하나로 모아지는 문제를 다루기 때문에 역전파가 사용된다. 

## References

>- 사이토 고키, 개앞맵시, 밑바닥부터 시작하는 딥러닝 3, 도우출판, 2020