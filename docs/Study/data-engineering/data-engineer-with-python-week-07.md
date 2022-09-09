---
title: 'Data Engineering 스터디 7주차'
date: '2021-10-06'
tags: ["Data Engineering"]
draft: false

description: PseudoLab Data Science Fellowship 1기

sidebar_position: 1
---
# Data Processing in Shell

## Downloading Data on the Command Line

### curl

- Clinet for URLs
- UNIX command line tool
- 서버와 데이터를 주고받음
- HTTP 사이트, FTP 서버에서 데이터를 다운로드할 때 사용
- 다운로드 되어 있는지 확인
  ```bash
  man curl
  ```  

- 기본 문법
  - URL은 필수
  - flag 순서는 상관X
  ```bash
  curl [option flags] [URL]
  ```

- 수많은 통신 프로토콜을 지원
  - HTTP, HTTPS, FTP, SFTP, ...

- 옵션 확인
  ```bash
  curl --help
  ```

- 파일 다운로드
  - `-O`: 파일을 저장할 때 원래 이름으로 저장(일반 저장)
  - `-o`: 파일을 저장할 때 옵션 뒤에 이름으로 재지정하여 저장(다른 이름으로 저장)

- 비슷한 이름을 가진 파일 한번에 받기
  - wildcard 사용
    ```bash
    curl -O https://example.com/datafilename*.txt
    ```
  - globbing parser
    - glob 패턴: wildcard character로 여러 파일의 이름의 집합을 지정
    - 대괄호 안의 범위에 속하는 하나의 문자를 일치
      ```bash
      curl -O "http://example.com/datafilename[001-100].png"
      ```
    - 주어진 범위에서 10번째마다 파일을 받기
      ```bash
      curl -O "http://example.com/datafilename[001-100:10].png"
      ```

- 시간 초과
  - `-L`: 3xx 에러 코드가 발생하면 HTTP URL을 redirection 
    - 서버에서 HTTP 301 또는 HTTP 302 response가 왔을 경우 redirection URL로 따라간다.
  - `-C`: 이전 파일 전송, 이어받기

### Wget

- World Wide Web get
- GNU 프로젝트이지만 모든 OS 지원
- HTTP(S), FTP 프로토콜을 통해 데이터 다운로드할 때 사용
- 파일들을 재귀적으로 다운로드
  - 모든 파일들을 한 번에 그대로 복사

- 설치 확인
  ```bash
  which wget
  ```

- 기본 문법
  ```bash
  wget [option flags] [URL]
  ```

- 수많은 통신 프로토콜을 지원
  - HTTP, HTTPS, FTP, SFTP, ...

- 옵션 확인
  ```bash
  wget --help
  ```

- 파일 다운로드
  - `-b`: background에서 다운로드
  - `-q`: 출력 끄기
  - `-c`: 이전에 깨진 파일을 다시 다운로드

- 여러 파일 다운로드
  - `-i`: 다운로드 하려는 URL들을 써놓은 파일로 다운
    - 이 옵션 뒤에 다른 옵션이 오면 안 되며, 다른 옵션을 같이 사용하고 싶다면 이 옵션 앞에 사용해야 한다.

- 큰 파일 다운로드
  - bandwidth 제한 -> 다운로드 속도 제어
    - bytes per second
    - `--limit-rate`
    ```bash
    wget --limit-rate=200k -i url_list.txt
    ```

- 다운로드 할 때 대기 시간 주기
  - `--wait`
  ```bash
  wget --wait=2.5 -i url_list.txt
  ```

### curl vs Wget

- curl 장점
  - 20개가 넘는 프로토콜 사용
  - Wget에 비해 모든 OS에서 설치하는 것이 쉽다.
- Wget 장점
  - 다수의 파일 다운로드를 처리할 수 있는 기본 제공 기능이 많다.
  - recursive downlod
    - 전체 파일 디렉토리에서 HTML 페이지까지 거의 모든 파일을 한 번에 다운로드


## Data Cleaning and Munging on the Command Line

### csvkit

- command-line에서 데이터 처리를 위한 툴
- wireservice가 파이썬으로 개발 
- 다양한 기능(데이터 변환, 처리 및 정리 기능)을 제공
- pip으로 설치
  ```bash
  pip install csvkit
  pip install --upgrade csvkit
  ```

### in2csv

- redirection을 사용하여 텍스트나 Excel과 같은 테이블 형식 데이터 파일을 csv로 변환
  ```bash
  in2csv SpotifyData.xlsx > SpotifyData.csv
  ```
- 첫번째 sheet를 출력하고 저장하지 않음
  ```bash 
  in2csv SpotifyData.xlsx
  ```
- 원하는 시트가 첫 번째가 아니면 `-names` or `-n` 옵션으로 sheet name 지정
  ```bash
  in2csv -n SpotifyData.xlsx
  ```
- `--sheet`를 사용하여 저장
  ```bash
  in2csv SpotifyData.xlsx --sheet "Worksheet1_Popularity" > Spotify_Popularity.csv
  ```
- 따로 log를 출력하지 않기 때문에 `ls` or `cat` or `less`로 확인

### csvlook

- CSV 파일을 보기 쉽게 마크다운과 호환 가능한 fixed-width format(고정 너비 형식)으로 출력

```bash
csvlook Spotify_Popularity.csv
```

### csvstat

- pandas의 describe()와 유사
- csv파일의 각 열에 있는 data type을 알아서 인식하여 mean, median, unique values count 등과 같은 통계 정보를 출력

```bash
csvstat Spotify_Popularity.csv
```

### filtering

- 데이터 파일은 테이블 형식이기 때문에 행 또는 열을 이용해서 필터링
- csvcut은 열별로 데이터를 필터링할 수 있으며, csvgrep은 행별로 필터링할 수 있습니다.

- csvcut
  - 열 이름이나 열 index로 csv 파일을 필터링
  - 열 이름이나 index를 모르면 `--names`, `-n`을 사용하여 열 이름을 확인
  ```bash
  csvcut -n Spotify_MusicAttributes.csv
  ```
  - index로 필터링
    ```bash
    csvcut -c 1 Spotify_MusicAttributes.csv
    ```
  - name으로 필터링
    ```bash
    csvcut -c "track_id" Spotify_MusicAttributes.csv
    ```
  - 여러 열 index로 반환
    - 구분하기 위해서 공백 삽입X
    ```bash
    csvcut -c 2,3 Spotify_MusicAttributes.csv
    ```
  - 여러 열 name으로 반환
    - 구분하기 위해서 공백 삽입X
    ```bash
    csvcut -c "danceability","duration_ms" Spotify_MusicAttributes.csv
    ```
- csvgrep
  - 행 이름으로 필터링
  - regex fuzzy matching
  - 3가지 옵션 중 하나는 필수
    - `-m`: row 값 추출
    - `-r`: 정규표현식 
    - `-f`: 파일의 행이 일치하는 경우 그 행은 패스
  - row name으로 필터링
    ```bash
    csvgrep -c "track_id" -m track_id 값 Spotify_Popularity.csv
    ```
  - row index로 필터링
    ```bash
    csvgrep -c 1 -m track_id 값 Spotify_Popularity.csv
    ```

### csvstack

- 둘 이상의 CSV 파일에서 행을 쌓는다.
- 동일한 스키마를 가진 파일이 있지만 API 요청 제한과 같은 다운로드 제한으로 인해 chunk로 다운로드 되었을 때 자주 사용

- Schema가 같은지 확인 
  - csvstack을 사용하려면 두 개의 파일 구조가 동일해야 된다.
  ```bash
  csvlook Spotify_Rank6.csv
  csvlook Spotify_Rank7.csv
  ```
- 다수의 csv 파일 합치기
  ```bash
  csvstack Spotify_Rank6.csv Spotify_Rank7.csv > Spotify_AllRanks.csv
  ```
- 합쳤을 때 각각의 행이 어떤 파일로부터 왔는지 확인
  - group이라는 column이 따로 생긴다.
    ```bash
    csvstack -g "Rank6","Rank7" Spotify_Rank6.csv Spotify_Rank7.csv > Spotify_AllRanks.csv
    ```
  - group이라는 column 이름이 마음에 들지 않는다면 `-n` 옵션으로 이름 변경
    ```bash
    csvstack -g "Rank6","Rank7" -n "source" Spotify_Rank6.csv Spotify_Rank7.csv > Spotify_AllRanks.csv
    ```

### chaining command-line commands

- 한 번에 여러 개의 명령어를 사용할 때 구분하기 위해서 `;`를 사용
- `&&`는 첫 번째 명령이 성공했을 경우에만 두 번째 명령어를 사용

## Database Operations on the Command Line

### sql2csv

- csvkit에서 SQL과 유사한 기능 제공
- Microsoft SQL, MySQL, Oracle, PostgreSQL, SQLite 등 다양한 SQL DB에 접근 가능
- PgAdmin과 TablePlus와 같은 데이터베이스 클라이언트를 거치지 않고도 command-line을 통해 접근할 수 있다는 장점

```bash
sql2csv --db "sqlite:///SpotifyDatabase.db" \
	    --query "SELECT * FROM Spotify_Popularity" \
        > Spotify_Popularity.csv
```

- 명령 하나가 길기 때문에 `\`로 여러 줄로 나눈다.
- 쉘 스크립트는 한 줄에 80줄 제한 
- `--db`를 사용하여 DB와 연결
  - DB따라 다르게 작성
    - SQLite: `sqlite:///`로 시작하고 `.db`로 끝난다.
    - Postgres & MySql: `postgres:///` or `mysql:///`로 시작하고 `.db`로 끝나지 않는다.
- `--query`에는 query문 작성
  - 데이터베이스와 호환되는 SQL문을 사용
  - 쿼리 문자열은 쿼리의 길이나 복잡성에 관계없이 한 줄로 작성해야 합니다.
- redirection
  - 하지 않으면 해당 쿼리로 얻은 결과를 저장하지 못한다.
  - `>`를 활용해서 원하는 파일 이름으로 출력 결과를 저장

### csvsql

- 로컬에 저장된 CSV 파일에 SQL과 유사한 명령문을 적용 가능
- 내부적으로 전체 CSV 파일을 임시로 메모리 내 SQL 데이터베이스를 생성
- 편리하지만 대용량 파일 처리나 복잡한 SQL 쿼리를 적용하기에는 적합X

- 데이터의 첫 번째 행을 출력하는 예제
  ```bash
  csvsql --query "SELECT * FROM Spotify_MusicAttributes LIMIT 1" \
  	Spotify_MusicAttributes.csv
  ```
  - 보기 좋은 형태로 출력하기 위해서는 `|` 파이프 뒤에 csvlook을 적용
  - 출력된 결과를 저장하기 위해서는 redirection 사용
    - 적용했을 때에는 콘솔에 결과를 출력X
  - 둘 이상의 CSV 파일에 적용 가능
    - SQL 쿼리는 1줄에 표현, 쿼리에 사용된 파일을 순서대로 작성
    ```bash
    csvsql --query "SELECT * FROM file_a INNER JOIN file_b..." file_a.csv file_b.csv
    ```

### 데이터를 DB로 보내는 방법

- `csvsql`은 데이터를 가져오는 것뿐만 아니라 DB로 보낼 때도 사용
  ```bash
  csvsql --db "sqlite:///SpotifyDatabase.db" \
  	--insert Spotify_MusicAttributes.csv
  ```
  - `--db`: DB와 연결
  - `--insert`: DB를 만드는 과정 처리
    - SQL 클라이언트 또는 사용자 인터페이스에 따라 빈 테이블을 만들고, 테이블 스키마를 지정, 테이블에 키를 입력 후 데이터를 작성하는 과정
    - `--insert`는 항상 `--db`와 함께 사용
      - DB와 연결하지 않으면 데이터 삽입 불가능
    - csvsql이 항상 스키마를 잘 유추하지는 않는다.
    - 데이터에 텍스트 열로 취급되어야 하는 숫자 열이 있다면, `--no-inference`와 `--no-constraints`를 사용하여 사전에 알려줄 수 있다.
      - `--no-inference`: 모든 열을 text로 처리
      - `--no-constraints`: 문자 길이에 제한 없이 테이블을 생성
        - 큰 데이터 테이블에 유용하고 삽입 프로세스 속도를 상당히 높일 수 있다.
        - 오류를 발생하지 않으며 모든 null 데이터를 포함하는 열을 생성

## Data Pipeline on the Command Line

### command-line에서 파이썬 실행

- GUI interfaces
  - Jupyter Notebook, Spyder, PyCharm, ...
- 더 효율적인 방법은 command line에서 파이썬을 직접 실행하는 것

- manual과 version 확인
  ```bash
  man python
  python --version
  ```

- 한 컴퓨터에 여러 버전의 파이썬이 존재할 때 위치 찾기
  ```bash
  which python
  ```
- command line에서 파이썬 실행 방법
  ```bash
  python
  ```
  - 종료하고 싶을 때는 exit(), quit(), Ctrl-Z 등의 방법 사용 
  - interactive 코딩은 쉽지만 재사용할 때는 도움이 되지 않는다.

- 동일한 파이썬 명령을 여러 번 실행하거나 필요할 때 사용하는 방법
  - `.py` 확장자를 가진 파이썬 스크립트에 코드를 저장하고 해당 스크립트를 호출하여 사용
    - 해당 `.py` 파일이 현재 경로에 있는 지를 확인 필요
    ```bash
    python hello_world.py
    ```
    - 스크립트는 다양한 에디터로 작성
    - 짧은 코드인 경우는 `echo`와 redirection을 사용하여 작성
      ```bash
      echo "print('hello world')" > hello_world.py
      ```

### pip

- 파이썬에서 제공하는 패키지 관리자
- command-line에서 pip 명령어를 사용하여 패키지 설치
  ```bash
  pip install scikit-learn
  ```
  - 항상 최신 버전의 라이브러리 설치
  - 예전 버전 설치하는 방법
    ```bash
    pip install scikit-learn==0.19.2
    ```
- pip를 사용할 때는 Python 버전과 호환 필요
  ```bash
  pip --version
  ```
  - 업그레이드 해야한다고 warning 메시지가 나올 때
    ```bash
    pip install --upgrade pip
    ```
- 설치한 패키지 확인
  ```bash
  pip list
  ```
- 다수의 패키지 설치 및 업데이트
  ```bash
  pip install scikit-learn statsmodels
  pip install --upgrade scikit-learn statsmodels
  ```
- requirements.txt를 만들어서 패키지 설치
  ```bash
  pip install -r requirements.txt
  ```

### scheduler

- 사전에 결정된 순서에 따라 Python 모델과 같은 작업 실행하고 데이터 파이프라인을 자동화할 수 있다.
- Airflow, Luigi, Rundeck, ...
- cron
  - simple, free, customizable, purely command-line
  - UNIX 계열 OS에 설치된 time-based-job-scheduler
  - MacOS나 Linux 시스템에는 있지만 Windows에는 없다.
  - Windows 사용자의 경우에는 Cygwin을 설치하여 cron을 사용 또는 Windows Task Scheduler 사용
  - 시스템 유지 관리 작업, bash 스크립트, 파이썬 파일까지 다양한 작업을 자동화하는 데 사용
  - 작업을 예약하기 위해서는 모든 작업, 작업 실행 시기 및 일정과 관련된 지침을 기록할 파일인 `crontab` 필요
    - crontab 확인
      ```bash
      crontab -l
      ```
    - crontab 생성
      - 텍스트 에디터 사용
        - nano, Vim, Emacs, ...
      - `echo` 명령어 사용
        ```bash
        echo "* * * * * python create_model.py" | crontab
        ```
    - 표현식 및 규칙
      - cron에서 예약할 수 있는 가장 작은 단위는 1분
      - 5개의 시간 구성
        - minute(0 - 59), hour(0 - 23), day of the month(1 - 31), month(1 - 12), day of the week(0 - 6)
        - `*`는 항상 사용
        - [crontab.guru](https://crontab.guru/)