---
title: "JSON number parsing"
date: '2026-05-21'
draft: false
---

Python에서 JSON을 읽을 때 보통 먼저 떠올리는 코드는 `json.loads`다. 문자열로 된 JSON 문서를 넘기면 dict, list, str, int, float, bool, None 같은 Python 객체로 바꿔 준다.

```python
import json

data = json.loads('{"count": 3, "ratio": 0.5, "ok": true}')

assert data == {"count": 3, "ratio": 0.5, "ok": True}
```

`json.load`는 파일 같은 객체에서 읽고, `json.loads`는 문자열, bytes, bytearray에서 읽는다. 반대로 Python 객체를 JSON 문자열이나 파일로 내보낼 때는 `json.dumps`, `json.dump`를 쓴다. 사용법만 보면 단순한 변환 함수처럼 보이지만, decoder 내부에서는 먼저 입력을 JSON 토큰(token)으로 나누고, 그 토큰을 Python 값으로 바꾼다.

숫자도 예외가 아니다. decoder가 바로 `int`나 `float`를 호출하는 것이 아니라, 먼저 현재 위치에서 JSON 숫자로 인정할 수 있는 범위가 어디까지인지 정한다. 이 경계를 잘못 잡으면 잘못된 JSON을 `JSONDecodeError`로 거절하지 못하고, 내부 숫자 변환 단계에서 엉뚱한 실패가 난다. 그래서 이 문제는 `json.loads` 사용법, RFC 8259의 숫자 문법, CPython의 scanner 구현을 같이 봐야 이해된다.

## JSON 숫자는 Python 숫자와 다르다

Python 코드에서는 숫자처럼 보이는 Unicode 문자를 다룰 일이 있다. 예를 들어 fullwidth digit zero인 `０`는 사람이 보기에는 `0`과 비슷하다. 하지만 JSON 숫자 안에서 digit 자리를 채울 수 있는 문자는 ASCII `0`부터 `9`까지다.

```python
json.loads("1\uff10")
```

위 입력은 눈으로 보면 `10`처럼 보이지만, CPython은 이것을 숫자 10으로 읽지 않는다. scanner는 `1`까지만 JSON 숫자로 읽고, 뒤에 남은 `０` 때문에 전체 문서를 잘못된 JSON으로 본다. 결과는 `JSONDecodeError`다.

같은 이유로 아래 입력들도 유효한 JSON 숫자가 아니다.

```text
0.０
0e０
```

점 뒤와 지수부 뒤에는 digit이 하나 이상 필요하다. 여기서 필요한 digit은 Unicode 숫자 일반이 아니라 JSON 문법이 정한 ASCII digit이다.

## RFC 8259의 숫자 규칙

RFC 8259는 JSON을 정의하는 표준 문서다. 여기서 JSON 값은 object, array, number, string, false, null, true 중 하나이고, 숫자는 별도의 문법을 가진다.

숫자 부분만 줄이면 아래 모양이다.

```text
number = [ minus ] int [ frac ] [ exp ]
frac   = decimal-point 1*DIGIT
exp    = e [ minus / plus ] 1*DIGIT
int    = zero / ( digit1-9 *DIGIT )
```

이 문법에서 중요한 점은 세 가지다.

- 정수부는 `0` 하나이거나, `1`부터 `9`로 시작한 뒤 digit이 이어지는 모양이다. 그래서 leading zero는 허용되지 않는다.
- 소수부는 점 하나로 끝날 수 없다. 점 뒤에 digit이 하나 이상 있어야 한다.
- 지수부도 `e`, `E`, 또는 부호에서 끝날 수 없다. 마지막에는 digit이 하나 이상 있어야 한다.

그래서 아래 문자열은 숫자처럼 시작하지만 완성된 JSON 숫자는 아니다.

```text
0.
0e
0e+
01
```

CPython의 `json.loads`는 이런 입력에서 앞부분을 가능한 JSON 숫자로 읽은 뒤, 남은 문자가 있으면 "Extra data" 형태의 `JSONDecodeError`를 낸다. 예를 들어 `0e`는 `0`까지만 숫자로 읽을 수 있고, 뒤의 `e`는 문서 끝에 남은 잘못된 데이터가 된다.

## Python json이 숫자를 넘기는 방식

Python 공식 문서에서 `json.JSONDecoder`는 JSON number를 기본적으로 int 또는 float로 바꾼다. 동시에 `parse_int`, `parse_float`, `parse_constant` 같은 hook도 제공한다.

```python
import decimal
import json

json.loads("1.1", parse_float=decimal.Decimal)
```

여기서 `parse_float`는 JSON float 문자열을 받는다. 이 말은 scanner가 먼저 어디까지가 float 문자열인지 결정한다는 뜻이다. `parse_int`도 마찬가지로 이미 잘린 정수 문자열을 받는다.

따라서 구현 순서는 대략 이렇게 된다.

1. 현재 위치에서 JSON 값이 시작될 수 있는지 본다.
2. 값이 숫자라면 정수부, 소수부, 지수부의 경계를 읽는다.
3. 완성된 숫자 문자열만 `parse_int`나 `parse_float`로 넘긴다.
4. 숫자 뒤에 문서가 더 남아 있으면 decoder 단계에서 잘못된 JSON으로 처리한다.

숫자 변환 함수는 "이미 올바른 숫자 문자열"을 받는다는 전제에 가깝다. `0e`처럼 덜 끝난 지수부를 float 변환에 넘기는 것은 scanner가 맡아야 할 검사를 뒤로 미룬 셈이다.

## CPython의 순수 Python scanner

CPython에는 순수 Python scanner와 C accelerator가 있다. 순수 Python 쪽은 `Lib/json/scanner.py`에서 숫자를 정규식으로 잡는다.

```python
NUMBER_RE = re.compile(
    r'(-?(?:0|[1-9][0-9]*))(\.[0-9]+)?([eE][-+]?[0-9]+)?',
    (re.VERBOSE | re.MULTILINE | re.DOTALL))
```

여기서 눈에 띄는 부분은 digit을 `[0-9]`로 쓴다는 점이다. Python 정규식의 `\d`는 Unicode digit까지 포함할 수 있으므로 JSON 숫자 scanner에는 맞지 않는다. CPython [PR #125687](https://github.com/python/cpython/pull/125687)도 이 차이를 명확히 하기 위해 Python 구현의 JSON number 정규식에서 non-ASCII digit이 들어오지 않게 고친 작업이었다.

정규식이 match되면 scanner는 그룹을 나눠서 본다. 소수부나 지수부가 있으면 `parse_float`를 호출하고, 없으면 `parse_int`를 호출한다. 즉 scanner가 "이 문자열은 float로 볼 수 있다"는 판단을 먼저 끝낸 뒤에 변환 hook이 호출된다.

## CPython의 C accelerator

실제 CPython 실행에서는 `_json` C accelerator가 쓰일 수 있다. 이쪽도 원리는 같다. `Modules/_json.c`의 number matching 코드는 문자를 하나씩 읽으면서 정수부, 소수부, 지수부를 확인한다.

정수부가 `0`이면 그 한 글자만 정수부로 보고, `1`부터 `9`로 시작하면 뒤의 ASCII digit을 이어서 읽는다. 점이 보이면 바로 소수부로 확정하지 않고, 점 뒤에 digit이 있는지 확인한다. `e`나 `E`도 마찬가지로, 선택적인 부호 뒤에 digit이 있어야 지수부로 확정된다.

이 기준 때문에 `0e\uff10`은 `0e` 전체가 float 문자열이 되지 않는다. `e` 뒤의 문자가 ASCII digit이 아니기 때문에 scanner는 숫자를 `0`에서 멈춘다. 이후 decoder는 뒤에 남은 `e０` 때문에 입력 전체를 잘못된 JSON 문서로 처리한다.

## 정리

Python의 Unicode 처리와 JSON 숫자 문법은 같은 기준을 쓰지 않는다. Python 문자열 안에서 어떤 문자가 숫자처럼 보여도, JSON number token 안에서는 ASCII digit만 digit이다.

`json.loads`를 사용할 때 이 차이를 직접 의식할 일은 많지 않다. 그래도 JSON parser를 구현하거나, CPython 호환 동작을 맞추거나, `parse_int`와 `parse_float` hook을 디버깅할 때는 중요하다. 숫자 변환 함수가 무엇을 하느냐보다 먼저, scanner가 어디까지를 숫자로 잘라냈는지를 봐야 한다.

## References

- IETF, [RFC 8259: The JavaScript Object Notation (JSON) Data Interchange Format](https://www.rfc-editor.org/rfc/rfc8259)
- Python documentation, [json - JSON encoder and decoder](https://docs.python.org/3/library/json.html)
- CPython, [Lib/json/scanner.py](https://github.com/python/cpython/blob/3.14/Lib/json/scanner.py)
- CPython, [Modules/_json.c](https://github.com/python/cpython/blob/3.14/Modules/_json.c)

## Link

- [Python reduce](./reduce.md)
