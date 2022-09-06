---
title: 'Data Engineering 스터디 12주차'
date: '2021-11-03'
tags: ["Data Engineering"]
draft: false

description: PseudoLab Data Science Fellowship 1기

sidebar_position: 1
---

# Unit Testing for Data Science in Python

## Unit testing basics

### Unit test

- 가장 쉽게 코드를 테스트하는 방법은 interpreter를 사용하는 방법이다.
  - 실제로는 매우 비효율적 -> 버그를 수정하거나 새로운 기능을 구현하기 위해 함수를 수정할 때마다 테스트를 진행하기 때문이다.
- unit test는 반복적으로 진행하는 테스트 과정을 자동화한다.
- 문서 역할을 하기도 한다.
  - 테스트 코드를 보고 함수의 역할을 추측하여 코드를 더 빨리 이해할 수 있도록 도와준다.
- package의 신뢰도가 높아진다.
  - 사용자가 unit test를 실행하고 기능이 작동하는지 확인할 수 있기 때문이다.
- 시스템의 downtime을 줄일 수 있다.
  - downtime: 시스템을 이용할 수 없는 시간

- 파이썬의 다양한 unit test library
  - pytest -> 사용하기 쉽고 가장 널리 사용되는 유닛 테스트 라이브러리
  - unittest -> 표준
  - nosetests
  - doctest

### unit

- 작은 코드 조각 
- Python의 함수 또는 클래스

### Integration test, End to end test

- Integration test(통합 테스트)
  - 서로 다른 시스템들이 상호작용이 잘 이루어 지는가에 대해 테스트하는 것
- End to end test
  - 전체 소프트웨어를 한 번에 확인 

### pytest

- `test_`를 파일 이름 앞에 붙인다. -> naming convention
- test module
- `assert`
  ```python
  assert boolean_expression
  ```
  - boolean_expression이 `False`면 AssertionError 발생

- 예시: test_row_to_list.py
  ```python
  import pytest
  import row_to_list

  def test_for_clean_row():
      assert row_to_list("2,081\t314,942\n") == ["2,081", "314,942"]

  def test_for_missing_area():
      assert row_to_list("\t293,410\n") is None

  def test_for_missing_tab():
      assert row_to_list("1,463238,765\n") is None
  ```
- command line에서 사용
  ```bash
  pytest test_row_to_list.py
  ```
- IPython에서 사용 -> `!`를 붙이면 command line에서 실행시킨다는 의미
  ```bash
  !pytest test_row_to_list.py
  ```
- 결과
  - `.`: Passed -> No exception raised.
  - `F`: Failure -> An exception is raised.
  - 실패 했을 때 실행 결과
    - `>`: 예외를 발생시키는 라인
    - `E`: 예외에 대한 세부 정보 포함

## Intermediate unit testing

### assert

- boolean_expression 이외에도 message라는 인자를 받을 수 있다.
  ```python
  assert 1 == 2, "One is not equal to two!" # AssertionError
  ```
  - 예시: test_row_to_list.py 메시지 추가
    - `AssertionError:` 다음에 메시지가 출력된다.
  ```python
  import pytest
  ...  
  def test_for_missing_area_with_message():
      actual = row_to_lsit("\t293,410\n")
      expected = None
      message = ("row_to_list('\t293,410\n) "
                  "returned {0} instead "
                  "of {1}".format(actural, excepted)
                  )
      assert actual is expected, message
  ```
- assert statement를 사용하는 경우 메시지를 포함하는 것이 좋다.
- 디버깅과 관련된 모든 변수 값을 인쇄하는 것을 추천한다.
- assert문에서 부동 소수점을 비교하는 일반적인 방법은 사용하면 안 된다.
  - 부동 소수점 오차
  ```python
  0.1 + 0.1 + 0.1 == 0.3 # False
  ```
  - `pytest.approx()`를 사용
    ```python
    assert 0.1 + 0.1 + 0.1 == pytest.approx(0.3)
    ```
    - NumPy에도 적용된다.
      ```python
      assert np.array([0.1 + 0.1, 0.1 + 0.1 + 0.1]) == pytest.approx(np.array([0.2, 0.3]))
      ```

- 하나 이상의 assert문이 있을 수 있다.
  - 두 개의 assert 문이 모두 통과하면 테스트가 통과
  - 하나라도 AssertionError를 일으키면 실패
  ```python
  import pytest
  ...

  def test_on_string_with_one_comma():
      return_value = convert_to_int("2,081")
      assert isinstance(return_value, int)
      assert return_value == 2081
  ```

### 데이터 타입이 달라 예외를 발생하는 경우 

- 일부 함수는 특정 타입의 값이 전달되어 호출될 때 아무것도 반환하지 않고 예외를 발생시킬 수 있다.
  - `with`문과 `pytest.raises()`을 사용하여 해결
    ```python
    def test_valueerror_on_one_dimensional_argument():
        example_argument = np.array([2081, 314942, 1059, 186606, 1148, 206186])
        with pytest.raises(ValueError):
            split_into_training_and_testing_sets(example_argument)
    ```
    - ValueError를 발생 시키면 테스트 통과
    - 함수에 버그가 있고 ValueError가 발생하지 않으면 context manager가 실패 예외를 발생시켜 테스트가 실패
  - 발생한 예외의 테스트
    - as문 사용
    ```python
    def test_valueerror_on_one_dimensional_argument():
        example_argument = np.array([2081, 314942, 1059, 186606, 1148, 206186])
        with pytest.raises(ValueError) as exception_info: # store the exception
            split_into_training_and_testing_sets(example_argument)
        # Check if ValueError contains correct message
        assert exception_info.match("Argument data array must be two dimensional. "
                                    "Got 1 dimensional array instead!"
                                    )
    ```
    - context 내에서 ValueError가 발생하면 exception_info에는 ValueError에 대한 메시지가 포함된다.
    - with문이 끝나면 match method를 사용하여 exception_info에 메시지가 있는지 확인

### 얼마나 많은 테스트를 해야 할까?

- Test argument types
  - Bad arguments
    - 함수가 값을 반환하는 대신 예외를 발생시키는 argument
  - Special arguments
    - Boundary values -> ValueError가 일어나기 전 후의 경계값
    - some argument values, function uses special logic -> 유동적인 값, 비율 값
  - Normal arguments -> 일반적으로 계산되는 값
- 위의 argument들을 테스트 했다면, 함수는 제대로 테스트된 것이다.
- 모든 함수가 bad, special argument를 갖고 있는 것은 아니다.
  - 그렇기에 그런 경우에는 해당 argument를 테스트에 포함시키지 않고 무시해야 한다. 

### Test Driven Development

- 실제 프로그램을 구현해보면 unit test 코드를 작성하는 것을 생략할 수도 있다.
  - 그렇기에 함수를 구현하기 전에 unit test를 작성하는 단계를 추가한다. -> unit test 작성이 연기되거나 우선 순위가 낮아지지 않는다.
1. 테스트 모듈에서 함수에 대한 테스트 코드를 작성
2. 테스트 모듈 실행
3. 함수를 구현하고 테스트를 다시 실행

## Test Organization and Execution

### 테스트 코드 directory

- 소스코드를 담고 있는 directory와 동일 레벨의 directory를 만드는 것을 권장
- 테스트 코드를 담고 있는 directory를 test suite라고 부르기도 한다.
- `__init__.py`를 제외하고 소스코드 directory에 있는 모든 코드들의 test 파일을 만든다.

- test module의 문제점
  - 한 함수에 대한 테스트가 어디서 끝나고 다른 함수가 어디서 시작되는지 알 수 있는 방법이 없다.
  - 해결: test class를 사용
    ```python
    import pytest
    from data.preprocessing_helpers import row_to_list, convert_to_int

    class TestRowToList(object): # Always put the argument object
        def test_on_no_tab_no_missing_value(self): # Always put the argument self
        ...
        def test_on_two_tabs_no_missing_value(self): # Always put the argument self
        ...

    class TestConvertToInt(object): # Test class for convert_to_int()
        def test_with_no_comma(self): # A test for convert_to_int()
        ...
        def test_with_one_comma(self): # Another test for convert_to_int()
        ...
    ```

### 모든 테스트 실행

- test 폴더로 변경한 후 `pytest` 실행
  - 폴더 내부에 존재하는 `test_`로 시작하는 파일 검색 -> 테스트 모듈로 인식
  - 클래스의 경우는 CamelCase로 작성되기 때문에 `Test`로 시작하는 클래스 식별
  - test_로 시작하는 function을 unit test로 인식
  - unit test들을 모두 수집한 후 실행된다.
  - 일반적으로 이 명령어는 커밋이 되고 repository에 push된 후 CI(Continuous Integration) server에서 실행
    - 새로운 코드 변경 사항이 정기적으로 빌드 및 테스트되어 repository에 통합된다.
- `pytest -x`를 사용하면 테스트가 실패하면 즉시 pytest를 중지시킨다.
  - 시간과 자원 절약

### 일부의 테스트 진행

- 파이썬 파일에만 테스트
  ```bash
  pytest data/test_preprocessing_helpers.py
  ```
- Node ID
  - pytest는 발견되는 모든 test class, unit test에 Node ID를 할당
  - Node ID of a test class: `<path to test module>::<test class name>`
  - Node ID of an unit test: `<path to test module>::<test class name>::<unit test name>`
  - 예시
    ```bash
    pytest data/test_preprocessing_helpers.py::TestRowToList
    pytest data/test_preprocessing_helpers.py::TestRowToList::test_on_one_tab_with_missing_value
    ```
- keyword 사용
  - `-k`: 따옴표로 묶인 문자열을 포함하는 코드 테스트 진행
    ```bash
    pytest -k "TestSplitIntoTrainingAndTestingSets"
    pytest -k "TestSplit"
    ```
    - 논리 연산자도 사용 가능
      ```bash
      pytest -k "TestSplit and not test_on_one_row"
      ```

### 실패 예측, 특별한 조건일 때 생략

- 훈련 데이터에 가장 적합한 모델을 반환하는 새로운 함수인 train_model()을 구현한다고 가정
  - TDD -> Test code부터 작성 
    ```python
    import pytest

    class TestTrainModel(object):
        def test_on_linear_data(self):
    ...
    ```
  - test code를 작성했지만 구현이 되어 있지 않기 때문에 CI 서버가 테스트 실패 경고를 보낸다.
    - 실패할 곳을 에측하여 `@pytest.mark.xfail`을 사용 -> 테스트가 어짜피 틀릴 것임을 미리 알려줄 수 있다.
      - 데코레이터는 클래스 전체에 대해서도 적용할 수 있다.
      - `@pytest.mark.skipif`처럼 reason으로 이유를 표기할 수도 있다.
      ```python
      @pytest.mark.xfail(reason="“Using TDD, train_model() is not implemented")
      ```
      ```python
      import pytest

      class TestTrainModel(object):
          @pytest.mark.xfail
          def test_on_linear_data(self):
        ...
      ```
- 특정 조건에서 테스트가 실패하는 경우
  - 특정 Python 버전 또는 특정 플랫폼에서 일부 기능들이 작동하지 않는 경우
    ```python
    class TestConvertToInt(object):
        def test_with_no_comma(self):
            """Only runs on Python 2.7 or lower"""
            test_argument = "756"
            expected = 756
            actual = convert_to_int(test_argument)
            message = unicode("Expected: 2081, Actual: {0}".format(actual)) # Requires Python 2.7 or lower
            assert actual == expected, message
    ```
    - `@pytest.mark.skipif`를 사용하여 해결
      - bolean_expression 사용 -> True이면 테스트를 스킵
      ```python
      import sys

      class TestConvertToInt(object):
          @pytest.mark.skipif(sys.version_info > (2, 7), reason="requires Python 2.7")
          def test_with_no_comma(self):
              """Only runs on Python 2.7 or lower"""
              test_argument = "756"
              expected = 756
              actual = convert_to_int(test_argument)
              message = unicode("Expected: 2081, Actual: {0}".format(actual)) # Requires Python 2.7 or lower
              assert actual == expected, message
      ```

- 테스트 결과에서 이유를 알고 싶을 때 `-r` 사용
  - `-r` 뒤에는 다른 문자가 붙을 수 있다.
    - `-rs`: 스킵한 테스트 표시
    - `-rx`: 이유와 함께 xfail한 테스트만 출력
    - `-rsx`로 위의 두 결과를 모두 확인할 수도 있다.

### GitHub badge

- CI 서버 사용 -> commit하고 push할 때마다 모든 테스트 자동으로 실행
  - `Travis CI` 사용
    - configuration 파일 ->. `.travis.yml`
      ```yaml
      language: python
      python:
        - "3.6"
      install:
        - pip install -e .
      script:
        - pytest tests
      ```  
  - GitHub에 push
    ```bash
    git add .travis.yml
    git push origin master
    ```
  - Marketplace에서 Travis CI 설치 -> 접근 허용 
  - CI 화면으로 들어가서 badge 클릭 -> 마크다운 선택

- Code coverage 
  - test suite를 실행할 때 실행되는 application code의 비율
  - 퍼센트가 높을수록 테스트가 잘 된 코드
  - Codecov라는 서비스에서 제공
$$
\text { code coverage }=\frac{\text { num lines of application code that ran during testing }}{\text { total num lines of application code }} \times 100
$$

- badge 만들기
  - configuration 파일 ->. `.travis.yml`
    ```yaml
    language: python
    python:
      - "3.6"
    install:
      - pip install -e .
      - pip install pytest-cov codecov # Install packages for code coverage report
    script:
      - pytest --cov=src tests # Point to the source directory
    after_success:
      - codecov # uploads report to codecov.io
    ```
  - GitHub에 Codecov 설치 -> 설정으로 들어가 마크다운 코드를 README 문서에 붙여넣기 


## Testing Models, Plots and Much More

### workflow 변경

- Old workflow
  - assert
- New workflow
  - setup -> assert -> teardown
- Fixture
  ```python
  import pytest

  @pytest.fixture
  def my_fixture():
    # Do setup here
    yield data # Use yield instead of return
    # Do teardown here
  ```
  ```python
  def test_something(my_fixture):
      ...
      data = my_fixture
      ...
  ```
- 예시
  ```python
  @pytest.fixture
  def raw_and_clean_data_file():
      # setup
      raw_data_file_path = "raw.txt"
      clean_data_file_path = "clean.txt"
      with open(raw_data_file_path, "w") as f:
          f.write("1,801\t201,411\n"
                  "1,767565,112\n"
                  "2,002\t333,209\n"
                  "1990\t782,911\n"
                  "1,285\t389129\n"
                  )
      yield raw_data_file_path, clean_data_file_path
      # teardown
      os.remove(raw_data_file_path)
      os.remove(clean_data_file_path)
  ```
  ```python
  import os
  import pytest

  def test_on_raw_data(raw_and_clean_data_file):
      raw_path, clean_path = raw_and_clean_data_file
      preprocess(raw_path, clean_path)
      # assert
      with open(clean_data_file_path) as f:
          lines = f.readlines()
      first_line = lines[0]
      assert first_line == "1801\t201411\n"
      second_line = lines[1]
      assert second_line == "2002\t333209\n"
  ```

### tmpdir

- pytest에 built-in 되어 있는 fixture
- setup 중에 임시 directory 설정하고 teardown될 때 임시 directory 삭제

### fixture chaining

- tmpdir fixture를 argument로 전달하는 것
- setup of `tmdir()` -> setup of `raw_and_clean_data_file()` -> test -> teardown of `raw_and_clean_data_file()` -> teardown of `tmpdir()`

```python
@pytest.fixture
def raw_and_clean_data_file(tmpdir):
    raw_data_file_path = tmpdir.join("raw.txt")
    clean_data_file_path = tmpdir.join("clean.txt")
    with open(raw_data_file_path, "w") as f:
        f.write("1,801\t201,411\n"
                "1,767565,112\n"
                "2,002\t333,209\n"
                "1990\t782,911\n"
                "1,285\t389129\n"
                )
    yield raw_data_file_path, clean_data_file_path
    # No teardown code necessary
```

### Mocking

- 의존성과 독립적으로 함수를 테스트할 수 있는 방법
- pytest-momck
  ```bash
  pip install pytest-mock
  ```
- unittest.mock
  - Python standard library package

- 버그가 있는 의존성을 `unittest.mock.MagicMock()` 객체로 바꾸는 것
  - 테스트 중에만 가능
  - `mocker`라는 fixture 사용
- `mocker.patch()`는 반환된 MagicMock() 객체의 attribute로 인식하지 못하는 키워드 인수를 처리하고 그에 따라 attribute 값을  설정 
  ```python
  mocker.patch("<dependency name with module name>")
  ```
  ```python
  def test_on_raw_data(raw_and_clean_data_file, mocker):
      raw_path, clean_path = raw_and_clean_data_file
      row_to_list_mock = mocker.patch("data.preprocessing_helpers.row_to_list",
                                      side_effect = row_to_list_bug_free)
      # row_to_list_mock.side_effect = row_to_list_bug_free 
  ```
  ```python
  def row_to_list_bug_free(row):
      return_values = {
      "1,801\t201,411\n": ["1,801", "201,411"],
      "1,767565,112\n": None,
      "2,002\t333,209\n": ["2,002", "333,209"],
      "1990\t782,911\n": ["1990", "782,911"],
      "1,285\t389129\n": ["1,285", "389129"],
      }
    return return_values[row]
  ```

- `call_args_list`
  - mock가 호출된 argument의 list 반환 
  ```python
  def test_on_raw_data(raw_and_clean_data_file, mocker):
      raw_path, clean_path = raw_and_clean_data_file
      row_to_list_mock = mocker.patch("data.preprocessing_helpers.row_to_list",
                                      side_effect = row_to_list_bug_free)
      preprocess(raw_path, clean_path)
      assert row_to_list_mock.call_args_list == [
      call("1,801\t201,411\n"),
      call("1,767565,112\n"),
      call("2,002\t333,209\n"), call("1990\t782,911\n"),
      call("1,285\t389129\n")
      ]
  ```

### 모델 테스트

- 예상 결과값을 모르면 함수를 테스트할 수 없다.
  - 계산하기 쉽거나 잘 알려진 training set을 사용
  - 예측하지 못한다면 확실한 사실을 이용 -> sanity check
    - 공식적인 테스트 수행 전에 변경된 부분에 대해 빠르게 확인

### plot 테스트

- matplotlib에 의해 생성된 plot 테스트
- `matplotlib.figure.Figure()`에는 속성 수가 많기 때문에 각각 개별적으로 테스트하는 것은 좋지 않다. 
1. 일회성으로 먼저 기준선을 생성하기 위해 plot fucntion에 test argument를 결정
2. test argument를 사용하여 plot fucntion을 호출하고 반환된 matplotlib.figure.Figure() 객체를 PNG 파일로 변환
3. 눈으로 직접 검사하고 예상되로 표시되는지 확인
4. 이미지로 저장하고 기준 이미지로 지정, 예상대로 표시되지 않으면 될 될 때까지 function 수정하면서 반복

- `pytest-mpl`
  ```bash
  pip install pytest-mpl
  ```
  - 예시
    ```python
    import pytest
    import numpy as np
    from visualization import get_plot_for_best_fit_line

    @pytest.mark.mpl_image_compare # Under the hood baseline generation and comparison
    def test_plot_for_linear_data():
        slope = 2.0
        intercept = 1.0
        x_array = np.array([1.0, 2.0, 3.0]) # Linear data set
        y_array = np.array([3.0, 5.0, 7.0])
        title = "Test plot for linear data"
        return get_plot_for_best_fit_line(slope, intercept, x_array, y_array, title)
    ```
    - generate baseline image
      ```bash
      pytest -k "test_plot_for_linear_data"
              --mpl-generate-path
              visualization/baseline
      ```
    - verify the baseline image
    - pytest가 baseline 이미지를 실제 이미지와 비교
      - 동일하면 테스트 통과, 동일하지 않으면 테스트가 실패하고 pytest는 기준 이미지를 저장
      ```bash
      pytest -k "test_plot_for_linear_data" --mpl
      ```