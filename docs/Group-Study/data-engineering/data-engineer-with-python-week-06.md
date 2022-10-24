---
title: 'Data Engineering 스터디 6주차'
date: '2021-09-29'
# tags: ["Data Engineering"]
draft: false

description: PseudoLab Data Science Fellowship 1기

sidebar_position: 1
---

# Introduction to Shell

## Manipulating files and directories

### 절대 경로 상대 경로

- absolute path
  - 파일이 갖고 있는 고유한 경로
- relative path
  - 현재 위치를 기준으로 하는 상대적인 경로

### Commands

- cp
  - spring.csv 및 summer.csv를 현재 작업 디렉토리(/home/repl)를 변경하지 않고 백업 디렉토리로 복사
    ```bash
    cp seasonal/spring.csv seasonal/summer.csv backup
    ```
- mv
  - 파일 이동 + 이름 변경
    ```bash
    mv winter.csv winter.csv.bck
    ```
- ls
  - `-R`: 하위 디렉토리까지 보여준다.
  - `-F`: 실행 파일 *, 디렉토리 /, 소켓 =, 링크 @ 등으로 파일 이름의 뒤에 추가 출력한다.

- ~
  - home directory
  ```bash
  ls ~
  ```


## Manipulating data

- less
  - 파일 내용을 확인하는 명령어
  - more와의 차이점
    - 한 번에 보여지는 만큼만 읽어서 출력
    - more는 아래로만 페이지 이동 가능(지나간 내용을 볼 수 없음), less는 위, 아래 페이지 이동이 가능
  - `:n`: 페이지 이동
  - `:q`: 종료

- head
  - 파일의 앞부분을 지정한만큼 출력
  - 기본은 10줄
  - `-n`을 사용하여 원하는 라인까지 확인
    ```bash
    head -n 5 seasonal/summer.csv
    ```

- ! 뒤에 명령어 넣으면 재실행

- tail
  - 파일의 뒷부분을 지정한만큼 출력
  - 기본은 10줄
  - 숫자 앞에 `+`가 있을 경우 K번째까지 출력
    ```bash
    tail -n +7 seasonal/spring.csv
    ```

- history
  - 지금까지 쓴 명령어들 출력

- grep
  - `-c`: 파일 당 패턴이 일치하는 라인 개수 출력
  - `-h`: 결과 출력 시 파일 이름 무시
  - `-i`: 대소문자 무시
  - `-l`: 패턴이 존재하는 파일 이름만 표시
  - `-n`: 결과 출력 시 라인 앞에 라인 번호 출력
  - `-v`: 매칭되는 패턴이 존재하지 않는 라인 선택


## Combining tools

- redirection
  - `>`: 기존 파일의 내용 삭제하고 새로운 결과 저장

- pipe
  - 앞 명령어의 결과를 뒤에 나오는 명령어의 입력으로 처리하기 위해 사용
  - 명령어를 조합하여 사용 가능
  ```bash
  wc -l seasonal/*.csv | grep -v total | sort -n | head -n 1
  ```

- wc(word count)
  - 파일 내 문자, 라인, 단어 수를 출력
  - `-c`: 문자 수
  - `-l`: 라인 수
  - `-w`: 단어 수

- cut
  - 각 줄마다 필요한 부분만 잘라서 반환
  - `-d`: 구분자
  - `-f`: 추출할 구간

- sort
  - `-n`: 숫자로 정렬
  - `-r`: 역순
- uniq
  - 중복된 내용의 행이 연속으로 있으면 하나만 남기고 삭제
  - 정렬하여 순차적으로 만든 후 사용
  - `-c`: 같은 라인이 몇 번 나오는지 표시
 
## Batch processing

- set
  - 로컬 환경변수 조회

- echo
  - 문자열을 그대로 화면에 출력
  - 환경 변수를 출력할 수도 있다.

- 변수
  - `=`을 사용하여 대입연산
    - 사용 예제
    ```bash
    testing=seasonal/winter.csv
    head -n 1 $testing
    ```
  - `$@`: 입력된 변수를 공백으로 구분된 별도의 문자열로 취급

- 한 줄에서 여러 명령어를 수행하고 싶은 경우 세미콜론을 끝에 붙여준다.
  
- 반복문
  ```bash
  for filetype in docx odt pdf
  do
      echo $filetype
  done
  ```
  ```bash
  for filetype in docx odt pdf; do echo $filetype; done
  ```

- wildcard character
  - 특정한 패턴이 있는 문자열이나 파일을 찾거나 긴 이름을 생략할 때 사용
  - 다양한 문자들이 있음 
  - 예제
    ```bash
    files=seasonal/*.csv
    for f in files; do echo $f; done
    ```

## Creating new tools

- nano 사용
  - `Ctrl + K`: 라인 삭제
  - `Ctrl + O`: 파일 저장
  - `Ctrl + X`: 에디터 나가기