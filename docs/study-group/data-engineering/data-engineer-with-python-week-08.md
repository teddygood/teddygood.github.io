---
title: 'Data Engineering 스터디 8주차'
date: '2021-10-13'
tags: ["Data Engineering"]
draft: false

description: PseudoLab Data Science Fellowship 1기

sidebar_position: 1
---

# Introduction to Bash Scripting

## From Command-Line to Bash Script

### Bash script

- Bourne-again shell
- 89년에 발표되어 다양한 운영체제의 기본 shell로 탑재되었다.
- `#!`: shebang or hash-bang
  - UNIX 계열 OS(리눅스, Mac)에서 스크립트(bash, python등등) 코드 최상단에서 해당 파일을 해석해줄 인터프리터의 절대경로를 지정
  - bash script를 작성할 때도 `#!/usr/bash`처럼 경로를 알려줘야 한다.
    - bash의 경로를 알고 싶다면 `which bash`를 사용
- script에는 명령어가 포함되어 있다. -> 명령어들의 집합 같은 느낌
- `.sh` 확장자를 가진다.
  - `bash script_name.sh` 같이 사용
  - 첫 번째 라인에 shebang을 사용하여 경로를 알려주고 있으면 간단하게 `./script_name.sh`로도 사용 가능
  - 간단한 예제
    ```bash
    #!/usr/bash
    echo "Hello World!"
    echo "Goodbye World!"
    ```
    ```bash
    #!/usr/bash
    cat animals.txt | cut -d " " -f 2 | sort | uniq -c
    ```

### Some shell practice with REGEX

- `sed`
  - stream editor
  - 유닉스에서 텍스트를 분해하거나 변환하기 위한 명령어
  - 원본을 건드리지 않고 편집
    - `-i` 옵션을 사용하면 원본이 바뀐다. 
  - 문자열 치환
    - `s`를 사용하여 치환
    - `g`는 global로 전체를 대상으로 이루어진다는 것을 의미
    ```bash
    sed 's/Cherno/Cherno City/g'
    ```

- `egrep`
  - 정규식이 아닌 확장 정규 표현식을 사용하여 더 다양한 패턴들을 찾을 수 있는 명령어
  - `grep -E`로도 사용 가능 
    ```bash
    cat two_cities.txt | grep -E 'Sydney Carton|Charles Darnay' | wc -l

    cat two_cities.txt | egrep 'Sydney Carton|Charles Darnay' | wc -l
    ```

- regular expression(정규 표현식)
  - [regex101](https://regex101.com/)에서 연습
- 'p'를 제외한 문자 출력
  ```bash
  grep '[^p]' fruits.txt
  ```
- 'pc'가 포함된 문자 출력
  ```bash
  grep '[pc]' fruits.txt
  ```
- 정렬하고 중복된 내용의 행이 연속으로 있으면 하나만 남기고 삭제
  ```bash
  sort | uniq -c
  ```

### Standard stream

- Bash script에는 3가지 stream 존재
  - STDIN, STDOUT, STDERR
    - 각각 file descriptor는 0, 1, 2
      - file descriptor가 우측 값으로 올 경우 `&`를 사용해야 한다.
      - redirection과 같이 사용할 때는 좌측에 공백 없이 있어야 한다.
        - 그렇지 않으면 명령어의 인수로 인식이 된다. 
    - 각각 `/dev/stdin`, `/dev/stdout`, `/dev/stderr`에 파일로 존재
  - redirection을 사용하여 파일을 input, output으로 받아올 수 있다.
    ```bash
    $ cat inputfile
    hello
    world

    $ wc 0< inputfile 1> outfile
    $ cat outfile
    2  2 12
    ```
    - wc 명령어를 아무 옵션 없이 사용하면 줄, 단어, 문자 수가 순서대로 출력된다.
    - inputfile을 입력으로 받아 wc의 결과를 outfile로 쓴다.
  - `/dev/null` 파일은 항상 없으며, 이곳에 전송된 데이터는 없어진다.
    ```bash
    $ 2> /dev/null # STDERR 삭제
    $ 1> /dev/null # STDOUT 삭제
    ```
    ```bash
    $ echo HelloWorld 1> /dev/null # STDOUT 무시
    $ echo HellWorld > /dev/null 2>&1 # STDERR, STDOUT 무시
    ```

### Argument

- argv
  - `$`을 이용해서 변수 사용
  - `$@`: 모든 인자를 별도의 단어로 출력
  - `$*`: 모든 인자를 하나의 단어로 출력
  - `$#`: 모든 인자의 개수
  ```bash
  #!/usr/bash
  echo $1
  echo $2
  echo $@ # "one", "two", "three", ...
  echo "Thre are " $# "arguments"
  ```
  ```bash
  $ bash args.sh one two three four five
  one
  two
  one two three four five
  There are 5 arguments
  ```

## Variables in Bash Scripting

### 변수 할당

- `$`를 표기하지 않으면 문자열을 사용한다는 것으로 인식된다.
- 등호에 공백을 사용하지 않는다.

```bash
firstname='Cynthia'
lastname='Liu'
echo "Hi there" firstname lastname
```
```bash
Hi there firstname lastname
```

- 작은 따옴표(')는 문자 그대로 해석
- 큰 따옴표(")는 `$`와 `backtick`을 인식
  - backtick(`)
    - shell 내에 shell을 만든다. -> 모든 내용을 새로운 쉘로 보내고 결과를 다시 변수로 가져오는 기능
    - backtick을 사용하는 것은 옛날 방법이며 괄호를 쓰는 것이 modern한 방법

```bash
now_var='Now'
now_var_singlequote='$now_var'
echo $now_var_singlequote
```
```bash
$now_var
```
```bash
now_var_doublequote='$now_var'
echo $now_var_doublequote
```
```bash
$Now
```
```bash
rightnow_doublequote="The date is `date`."
echo $rightnow_doublequote
```
```bash
The date is Mon 2 Dec 2019 14:13:35 AEDT.
```
```bash
rightnow_parentheses="The date is $(date)."
echo $rightnow_parentheses
```
```bash
The date is Mon 2 Dec 2019 14:13:35 AEDT.
```

### 숫자형 변수

- expr
  - 사칙연산 계산
  - 소수점 연산 불가
  - 연산할 때 공백이 필요하다.
  ```bash
  $ expr 5 + 7
  $ expr $((5 + 7))
  12
  12
  ```
- bc
  - basic calculator
  - shell에 입력하면 bc가 호출되어 원하는 연산을 할 수 있으며 quit으로 종료하면 나가진다.
  - pipeline을 사용하면 한 줄로도 호출이 가능
    ```bash
    $ echo "5 + 7.5" | bc
    12.5
    ```
  - `scale`을 사용하여 소수점 자리수를 지정할 수 있다.
    ```bash
    $ echo "10 / 3" | bc
    3
    ```
    ```bash
    $ echo "scale=3; 10 / 3" | bc
    3.333
    ```
  - 응용
    ```bash
    model1=87.65
    model2=89.20
    echo "The total score is $(echo "$model1 + $model2" | bc)"
    echo "The average score is $(echo "("$model1 + $model2") / 2" | bc)"
    ```

### Array

- 2개의 타입
  - 파이썬의 list 같은 배열
    - 쉼표가 아닌 공백으로 구분
      ```bash
      # element 추가 없이 생성
      declare -a my_first_array

      # element 추가하여 생성
      my_first_array=(1 2 3)
      ```
    - 리스트에 접근하기 위해서는 `{}`를 사용
    - index 번호를 사용하여 접근
      - 모든 리스트를 출력하려면 `@` 사용
    - 모든 리스트 확인
      ```bash
      my_array=(1 3 5 2)
      echo ${my_array[@]}
      ```
    - 배열 길이
      ```bash
      echo ${#my_array[@]}
      ```
    - 단일 요소를 바꾸려 할 때 `$` 사용 X
      ```bash
      # 0번째 index 값 수정
      my_array[0]=999
      ```
    - 슬라이싱
      ```bash
      # N번째 index 값부터 M개 출력
      echo ${my_array[@]:N:M}
      ```
    - append
      ```bash
      # array에 원소 elements를 array 마지막에 추가
      my_array+=(elements)
      ```
      ```bash
      my_array=(300 42 23 2 4 33 54)
      my_array+=(18)
      echo ${my_array[@]}
      ```
      - append 할 때 추가하려는 값을 괄호()를 사용하지 않으면 첫 번째 값에 붙어서 출력된다.
        ```bash
        my_array=(300 42 23 2 4 33 54)
        my_array+=18
        echo ${my_array[@]}
        ```
        ```bash
        30018 42 23 2 4 33 54
        ```
  - associative array
    - 파이썬의 dict
    - Bash 4 이상에서만 사용 가능 
    - `declare`를 사용하지만 `-a` 대신 `-A` 사용
    ```bash
    declare -A city_details

    # 원소 추가
    city_details=([city_name]="New York" [population]=14000000)

    # 다른 선언 방법
    declare -A city_details=([city_name]="New York" [population]=14000000)

    # key에 해당하는 value 출력
    echo ${city_details[city_name]} # New York

    # key 값 출력
    echo ${!city_details[@]}
    ```

## Control Statements in Bash Scripting

### if

```bash
if [ CONDITION ]; then
    # SOME CODE
else
    # SOME OTHER CODE
fi
```

- 조건 앞, 뒤로 공백이 있어야 한다.
- 조건문 이후에는 `;`를 붙여야 한다.

```bash
x="Queen"
if [ $x == "King" ]; then
    echo "$x is a King!"
else
    echo "$x is not a King!"
fi

> Queen is not a King!
```

- 조건문을 감싸는 대괄호는 소괄호 2개를 중첩하여 대체할 수 있다.
  ```bash
  x=10
  if (($x > 5)); then
      echo "$x is more than 5!"
  fi
  ```
- 비교 연산자는 flag로 대신 사용할 수도 있다.
  - `-eq`: equal to
  - `-ne`: not equal to
  - `-lt`: less than
  - `-le`: less than or equal to
  - `-gt`: greater than
  - `-ge`: greater than or equal to
  ```bash
  x=10
  if [ $x -gt 5 ]; then
      echo "$x is more than 5!"
  fi
  ```
  - `-e`: if the file exists
  - `-s`: if the file exists and has size greater than zero
  - `-r`: if the file exists and is readable
  - `-w`: if the file exists and is writable 
  - 사용 가능한 더 많은 flag들은 [gnu.org](https://www.gnu.org/software/bash/manual/html_node/Bash-Conditional-Expressions.html)를 참고
  - 논리 연산자 `&&`와 `||` 사용
    ```bash
    # 두 예제는 같은 결과를 가진다.
    x=10
    if [ $x -gt 5 ] && [ $x -lt 11 ]; then
        echo "$x is more than 5 and less than 11!"
    fi

    x=10
    if [[ $x -gt 5 && $x -lt 11 ]]; then
        echo "$x is more than 5 and less than 11!"
    fi
    ```
  - command-line에서 사용
    - grep `-q` 옵션을 사용하여 일치하는 행이 있으면 True를 반환
      - 아무 출력도 하지 않고 매칭이 발견되는 즉시 종료 상태 값으로 0을 리턴하고 exit한다.
      - shell에서는 true가 0이고 false가 1이다.

    ```bash
    if grep -q Hello words.txt; then
        echo "Hello is inside!"
    fi

    if $(grep -q Hello words.txt); then
        echo "Hello is inside!"
    fi
    ```

### 반복문

- for문
  ```bash
  for x in 1 2 3
  do
      echo $x
  done
  ```

  - brace expansion
    - `{start..stop..increment}`
      - 기본적으로 increment를 주어주지 않으면 1씩 증가
      ```bash
      for x in {1..5..2}
      do
          echo $x
      done
      ```
  - three expression
    - c언어의 for문과 비슷한 형태
    ```bash
    for ((x=2;x<=4;x+=2))
    do
        echo $x
    done
    ```

  - glob expansions
    ```bash
    for book in books/*
    do
        echo $book
    done
    ```
    ```bash
    books/book1.txt
    books/book2.txt
    ```
  - shell-within-a-shell
    - grep `-i` 옵션은 대소문자 구분 없이 매칭
    ```bash
    for book in $(ls books/ | grep -i 'air')
    do
        echo $book
    done
    ```
    ```bash
    AirportBook.txt
    FairMarketBook.txt
    ```

- while문
  - 조건을 대괄호로 묶는다.
  - 무한 루프 조심
  ```bash
  x=1
  while [ $x -le 3 ];
  do
      echo $x
      ((x+=1))
  done
  ```

### case문

- 복잡하고 여러 if문으로 중첩된 경우 더 명확하고 효율적인 코드를 만드는 데 도움이 된다.
  ```bash
  if grep -q 'sydney' $1; then
      mv $1 sydney/
  fi
  if grep -q 'melbourne|brisbane' $1; then
      rm $1
  fi
  if grep -q 'canberra' $1; then
      mv $1 "IMPROTANT_$1"
  fi
  ```
- 문법
  - pattern에서는 정규식도 사용 가능
  - 마지막에 `*`만 일치시켜 기본 조건을 갖는 것이 일반적
  - esac은 case의 거꾸로 쓴 것
  ```bash
  case 'STRINGVAR' in 
      PATTERN1)
      COMMAND1;;
      PATTERN2)
      COMMAND2;;
      *)
      DEFAULT COMMAND;;
  esac
  ```
- 위의 if 문을 case문으로 변환
  ```bash
  case $(cat $1) in
    *sydney*)
    mv $1 sydney/ ;;
    *melbourne*|*brisbane*)
    rm $1 ;;
    *canberra*)
    mv $1 "IMPORTANT_$1" ;;
  ```

## Functions and Automation

### funcition

```bash
function_name () {
    #function_code
    return #something
}
```
```bash
function function_name {
    #function_code
    return #something
}
```
```bash
function print_hello () {
    echo "Hello World!"
}
print_hello # here we call the function
```
```bash
Hello World!
```

- argument 전달
  ```bash
  function print_filename {
      echo "The first file was $1"
      for file in $@
      do
          echo "This file has name $file"
      done
  }
  print_filename "LOTR.txt" "mod.txt" "A.py"
  ```
  ```
  The first file was LOTR.txt
  This file has name LOTR.txt
  This file has name mod.txt
  This file has name A.py
  ```

- Bash는 기본적으로 모든 변수가 global 변수
- 변수의 범위를 제한하고 싶다면 `local` 명령어 사용
  ```bash
  function print_filename {
      local first_filename=$1
  }

  print_filename "LOTR.txt" "model.txt"
  echo $first_filename # local로 제한했기 때문에 공백이 출력
  ```

- Bash의 return 값은 특정 값을 반환하는 것이 아니라 성공(0)과 실패(1-255)를 반환
  - `$?`에 값이 저장된다.
  - 에러를 반환하는 예제
    ```bash
    function function_2 {
      echlo # An error of 'echo'
    }
    fucntion_2 # Call the function
    echo $? # Print the return value
    ```
    ```bash
    script.sh: line 2: echlo: command not found 127
    ```

### cron으로 scheduling

- cron은 crontab에 의해 구동된다.
  - crontab에는 실행할 코드와 시기를 crontab에 알려주는 cronjob이 포함되어 있다.
  - cronjob 확인
    ```bash
    $ crontab -l
    ```
  - cronjob 예제
    - 매일 오전 1시 5분에 스크립트 실행
      ```bash
      5 1 * * * bash myscript.sh
      ```
    - 매주 일요일 오후 2시 15분에 스크립트 실행
      ```bash
      15 14 * * 7 bash myscript.sh
      ```
- cronjob 구조 장점
  - 특정 시간마다 여러번 프로그램을 실행할 수 있고 일정 시간 단위로 실행 가능
  - 특정 간격에 쉼표를 사용할 수 있다. -> 매시간 실행
    - `15,30,45 * * * *`: 15분, 30분, 45분마다 실행
  - step 실행
    - `*/30 * * * *`: 30분이 지날 때마다 실행
      - `30 * * * *`은 30분이 될 때마다 실행

- crontab에 추가하기 위해서 `crontab -e`로 가지고 있는 cronjobs을 수정 가능
  - cronjob이 없다면 nano, vim 등을 활용해서 작성
- `crontab -l`로 cronjob이 추가되었는 지 확인


