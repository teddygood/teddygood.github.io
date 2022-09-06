---
title: 'Data Engineering 스터디 3주차'
date: '2021-09-05'
tags: ["Data Engineering"]
draft: false

description: PseudoLab Data Science Fellowship 1기

sidebar_position: 1
---

# Streamlined Data Ingestion with pandas

## Importing Data from Flat Files

### pandas

- Wes Mckinney가 2008년에 개발
- 데이터를 수집하고 정리하는 데 최적화된 도구
- 오픈소스

### DataFrame

- 2차원 데이터 구조
- row(index), column

### Flat file

- 간단해서 데이터 저장 및 공유에 사용
- RDBMS, spreadsheet application에서 export할 수 있음
- 일반적인 텍스트로 저장
- CSV(comma-separated values)
  - 가장 흔한 flat file type
  - 쉼표로 구분된 텍스트 파일
  - 쉼표로 column 구분 개행으로 row 구분
  - `pandas`에서 `read_csv()`로 읽음
- us_tax_data_2016.csv 읽어보기
```python
import pandas as pd

tax_data = pd.read_csv("us_tax_data_2016.csv")
tax_data.head(4)  
```
- delimiter(구분문자)로 문자 구분
  - read_csv를 사용하지만 `sep` argument를 사용하여 delimiter 설정 가능 
- tab으로 구분 
```python
import pandas as pd

tax_data = pd.read__csv("us_tax_data_2016.csv", sep="\t")
tax_data.head(4)  
```

### Limiting column

- `usecols`를 사용하여 열을 선택
  - 가져올 모든 열 이름 또는 모든 열 번호
- column 이름, column number를 선택하여 가져온 데이터 비교
```python
col_names = ['STATEFIPS', 'STATE', 'zipcode', 'agi_stub', 'N1']
col_nums = [0, 1, 2, 3, 4]
# Choose columns to load by name
tax_data_v1 = pd.read_csv('us_tax_data_2016.csv',
                          usecols=col_names)
# Choose columns to load by number
tax_data_v2 = pd.read_csv('us_tax_data_2016.csv',
                          usecols=col_nums)
print(tax_data_v1.equals(tax_data_v2)) # true
```

### Limiting row
- `nrows`를 사용하여 load할 때 행 수 줄이기
- 파일을 청크 단위로 처리하기 위해 `skiprows`와 같이 사용
  - 처음 몇 줄을 skip 할 건지 설정
  - skip하려는 행의 번호를 담은 리스트로 설정 가능
- `header`는 열 이름으로 사용될 행의 번호(기본값 0)
  - header가 없고 첫 행부터 데이터가 있으면 None으로 지정 가능 
```python
tax_data_next500 = pd.read_csv('us_tax_data_2016.csv',
                              nrows=500,
                              skiprows=1000,
                              header=None) 
print(tax_data_next500.head(1)) # 확인해보면 column name이 없음
```

### Assigning column name

- `names`를 사용하여 열 이름 지정
  - 문자열 리스트를 사용
  - 리스트에는 모든 열에 대한 이름이 있어야 한다.
  - 일부 열의 이름을 수정하고 싶으면 불러온 후에 수정해야 한다.
```python
col_names = list(tax_data_first1000)
tax_data_next500 = pd.read_csv('us_tax_data_2016.csv',
                                nrows=500,
                                skiprows=1000,
                                header=None,
                                names=col_names)
print(tax_data_next500.head(1))
```

### 흔한 Flat file 이슈
- column data 타입이 잘못됨
- 값이 없음
- pandas에서 읽지 못하는 record

### 데이터 타입 지정
- pandas는 데이터를 가져올 때 데이터를 자동으로 유추하여 가져옴
  - 가끔 틀리기도 함
- `dtype`
- 데이터 타입 확인하기 
```python
print(tax_data.dtypes)
```
- `read_csv()`로 데이터를 읽을 때 `dtype` 사용
  - column name과 data type을 dict로 넣기
  - 데이터 값의 자료형은 object
```python
tax_data = pd.read_csv("us_tax_data_2016.csv", dtype={"zipcode": str})
print(tax_data.dtypes)
```

### missing data 

- pandas는 NA 또는 NULL 같은 값을 자동으로 인식하여 수비게 데이터 정리를 할 수 있다.
- 더미 코드와 같이 pandas가 인식하지 못 하는 데이터가 있을 수도 있다.
- `na_values`를 사용하여 값을 NaN으로 바꿀 수 있음
```python
tax_data = pd.read_csv("us_tax_data_2016.csv",
na_values={"zipcode" : 0})
print(tax_data[tax_data.zipcode.isna()]) # na 값만 확인 
```

### Error handling

- pandas가 파싱할 수 없는 줄
  - e.g. 레코드에 있는 것보다 더 많은 값
- `error_bad_lines=False`: 파싱할 수 없는 record 스킵
  - False로 하면 오류가 발생한 줄을 빼고 처리
- `warn_bad_lines`: record를 스킵할 때 메시지 확인
  - False로 하면 에러 메시지 보여주지 않음
```python
tax_data = pd.read_csv("us_tax_data_2016_corrupt.csv",
                      error_bad_lines=False,
                      warn_bad_lines=True)
```

## Importing Data From Excel Files

### data wrangling

- raw data를 다른 형태로 전환하거나 mapping하는 과정

### Spreadsheet

- Excel
- 행과 열 데이터 셀과 함께 테이블로 구성
- 자동으로 업데이트
- flat file이 지원하지 않는 형식도 지원
- excel 파일이나 workbook(통합문서)에는 다수의 spreadsheet가 존재할 수 있음 
- `pandas`에서 `read_excel()`을 사용하여 읽음
```python
import pandas as pd
# Read the Excel file
survey_data = pd.read_excel("fcc_survey.xlsx")
# View the first 5 lines of data
print(survey_data.head())
```
- metadata header나 invoice 같은 데이터는 non-tabular이지만 spreadsheet에 있을 수 있음
  - `read_excel()`의 argument를 사용하여 처리
  - `nrows`: load할 때 행 수 줄이기
  - `skiprows`: 처음 몇 줄을 skip 할 건지 설정
  - `usecols`: 가져올 모든 열 이름 또는 모든 열 번호
    - 문자열 범위도 허용(e.g. "A:P")
```python
# Read columns W-AB and AR of file, skipping metadata header
survey_data = pd.read_excel("fcc_survey_with_headers.xlsx",
                            skiprows=2,
                            usecols="W:AB, AR")
# View data
print(survey_data.head())
```

### single sheet

- `read_excel()`은 첫번째 sheet만 가져옴
- `sheet_name`으로 다른 sheet를 로드할 수 있음
  - 이름 또는 번호의 조합이 포함된 목록이 허용
  - 0부터 시작
- argument가 모든 sheet에 설정됨
- sheet 인덱스와 이름을 불러와서 데이터가 같은지 비교
```python
# Get the second sheet by position index
survey_data_sheet2 = pd.read_excel('fcc_survey.xlsx', sheet_name=1)
# Get the second sheet by name
survey_data_2017 = pd.read_excel('fcc_survey.xlsx', sheet_name='2017')
print(survey_data_sheet2.equals(survey_data_2017)) # true
```

### all sheet

- `sheet_name=None`
```python
survey_responses = pd.read_excel("fcc_survey.xlsx", sheet_name=None)
print(type(survey_responses))
```
```
<class 'collections.OrderedDict'>
```
```python
for key, value in survey_responses.items():
print(key, type(value))
```
```
2016 <class 'pandas.core.frame.DataFrame'>
2017 <class 'pandas.core.frame.DataFrame'>
```

### 지금까지 한 것들 전부 사용해보기 

- 각각의 sheet에 다른 년도 동안 같은 열이 있음 -> DataFrame으로 합치기
- value는 worksheet에 해당하는 DataFrame, key는 sheet 이름

```python
# Create empty data frame to hold all loaded sheets
all_responses = pd.DataFrame()
# Iterate through data frames in dictionary
for sheet_name, frame in survey_responses.items():
# Add a column so we know which year data is from
frame["Year"] = sheet_name
# Add each data frame to all_responses
all_responses = all_responses.append(frame)
# View years in data
print(all_responses.Year.unique())
```

### pandas에서 boolean type 처리

- True/False
- pandas에서는 Tru/False column을 float data로 load
  - `dtype` argument로 bool type으로 변환 가능
```python
# Load data, casting True/False columns as Boolean
bool_data = pd.read_excel("fcc_survey_booleans.xlsx",
                          dtype={"AttendedBootcamp": bool,
                          "AttendedBootCampYesNo": bool,
                          "AttendedBootcampTF":bool,
                          "BootcampLoan": bool,
                          "LoanYesNo": bool,
                          "LoanTF": bool})
                          print(bool_data.dtypes)
```

- boolean column에서 NA/missing value는 True로 변한다. 
  - e.g. Yes/No 같은 값 -> True
  - 이 문제도 `true_values` argument로 True value를 커스텀하여 해결 가능
  - `false_values`로는 False value를 커스텀
```python
# Load data with Boolean dtypes and custom T/F values
bool_data = pd.read_excel("fcc_survey_booleans.xlsx",
                          dtype={"AttendedBootcamp": bool,
                          "AttendedBootCampYesNo": bool,
                          "AttendedBootcampTF":bool,
                          "BootcampLoan": bool,
                          "LoanYesNo": bool,
                          "LoanTF": bool},
                          true_values=["Yes"],
                          false_values=["No"])
```
- 그래도 NA가 True로 인코딩되는 문제가 남아있음

### boolean으로 casting하여 사용할 때 고려할 점
- NA 값의 존재 여부
  - NA가 True로 인코딩되는 문제 -> 잘못 코딩됨
- 분석에서 column을 어떻게 사용할 것인가
- boolean을 사용하지 않고 float or integer로 유지할 것인가

### datetime

- Python은 날짜와 시간을 datetime이라는 type으로 저장
- 무수한 형태의 string format으로 표현될 수 있음
- 표준 형식 존재

### pandas datetime

- datetime column은 object(string)으로 load
- `dtype`이 아닌 `parse_dates`를 사용
  - 파싱할 열 이름 또는 숫자를 허용
  - list도 허용
  - dict에 저장
```python
# List columns of dates to parse
date_cols = ["Part1StartTime", "Part1EndTime"]
# Load file, parsing standard datetime columns
survey_df = pd.read_excel("fcc_survey.xlsx",
parse_dates=date_cols)

# Check data types of timestamp columns
print(survey_df[["Part1StartTime",
                "Part1EndTime",
                "Part2StartDate",
                "Part2StartTime",
                "Part2EndTime"]].dtypes)
```
```
Part1StartTime    datetime64[ns]
Part1EndTime      datetime64[ns]
Part2StartDate    object
Part2StartTime    object
Part2EndTime      object
dtype: object
```
- 내부에 목록을 추가하여 날짜를 구분
```python
# List columns of dates to parse
date_cols = ["Part1StartTime",
            "Part1EndTime",
            [["Part2StartDate", "Part2StartTime"]]]
# Load file, parsing standard and split datetime columns
survey_df = pd.read_excel("fcc_survey.xlsx", parse_dates=date_cols)
print(survey_df.head(3))
```
- column name 제어 -> dict 사용
```python
# List columns of dates to parse
date_cols = {"Part1Start": "Part1StartTime",
            "Part1End": "Part1EndTime",
            "Part2Start": ["Part2StartDate",
            "Part2StartTime"]}
# Load file, parsing standard and split datetime columns
survey_df = pd.read_excel("fcc_survey.xlsx", parse_dates=date_cols)
print(survey_df.Part2Start.head(3))
```

### Non-standard date

- `parse_dates`는 non-standard datetime format에는 적용X
- `parse_dates`가 작동하지 않으면 데이터를 load한 후 `pd.to_datetime()` 사용 
  - DataFrame의 column 변환
  - `format`: format 설정 

### Datetime format

- strftime
  - %d : 0을 채운 10진수 표기로 날짜를 표시
  - %m : 0을 채운 10진수 표기로 월을 표시
  - %y : 0을 채운 10진수 표기로 2자리 년도
  - %Y : 0을 채운 10진수 표기로 4자리 년도  
  - %H : 0을 채운 10진수 표기로 시간 (24시간 표기)
  - %I : 0을 채운 10진수 표기로 시간 (12시간 표기)
  - %M : 0을 채운 10진수 표기로 분
  - %S : 0을 채운 10진수 표기로 초

### parsing non-standard date

```python
format_string = "%m%d%Y %H:%M:%S"
survey_df["Part2EndTime"] = pd.to_datetime(survey_df["Part2EndTime"], format=format_string)
print(survey_df.Part2EndTime.head())
```
```
0 2016-03-29 21:27:25
1 2016-03-29 21:29:10
2 2016-03-29 21:28:21
3 2016-03-29 21:30:51
4 2016-03-29 21:31:54
Name: Part2EndTime, dtype: datetime64[ns]
```

## Importing Data from Databases

### Relational Database

- entity: DB에서 사용자들이 관심을 갖는 모든 요소(e.g. 고객, 부품, 지리적 위치정보 등)
- RDB는 entity의 instance로 표현된 row
- column entity의 attribute로 표현된 column 
- table은 unique key or unique identifier를 통하여 연결할 수 있음 
- SQL
  - Microsoft SQL Server
  - ORACLE
  - PostgreSQL
  - SQLite
    - 일반적이고 자체적인 컴퓨터 파일로 저장 -> 데이터 공유에 적합

### 데이터 읽기

1. DB에 연결하는 방법 만들기
2. SQL, pandas로 query

### SQLAlchemy

- `create_engine()`은 DB에 대한 URL을 가져와서 DB 연결을 관리하는 engine object를 만듬
  - URL은 DB마다 패턴이 다를 수 있음
  - SQLite URL format: sqlite:///filename.db

### Querying DB

- `pd.read_sql(query, engine)`
  - `query`: SQL query string, table name
  - `engine`: 엔진 객체

### SELECT

```sql
-- 기본
SELECT [column_names] FROM [table_name];
-- table의 모든 데이터 -> ' * ' 사용
SELECT * FROM [table_name];
```

- 쿼리 결과에 포함할 열을 결정
  - query: 쉽게 설명하면 클라이언트가 DB에 데이터를 요청하는 것
- 대문자 사용, 끝에 세미콜론(;)

### pandas, sqlalchemy 사용

```python
# Load pandas and sqlalchemy's create_engine
import pandas as pd
from sqlalchemy import create_engine

# Create database engine to manage connections
engine = create_engine("sqlite:///data.db")

# Load entire weather table by table name
weather = pd.read_sql("weather", engine) # 테이블의 모든 데이터

print(weather.head())
```

- SQL을 사용하여 원하는 데이터를 선택할 수도 있음
``` python
# Load entire weather table with SQL
weather = pd.read_sql("SELECT * FROM weather", engine)
```

### WHERE 문

```sql
SELECT [column_names]
FROM [table_name]
WHERE [condition];
```

- 조건문
- `=`, `>`, `>=`, `<`, `<=` 허용
- `<>`: 같지 않음(파이썬에서는 !=)
- e.g
```sql
SELECT * FROM weather
WHERE tmax > 32;
```
- 텍스트 필터링 가능
  - 대소문자 구분
- e.g.
  
```python
/* Get records about incidents in Brooklyn */
SELECT * FROM hpd311calls
WHERE borough = 'BROOKLYN';
```

- 지금까지 한 것들 모두 사용해보는 예
```python
# Load libraries
import pandas as pd
from sqlalchemy import create_engine
# Create database engine
engine = create_engine("sqlite:///data.db")
# Write query to get records from Brooklyn
query = """SELECT * FROM hpd311calls
            WHERE borough = 'BROOKLYN';"""
# Query the database
brooklyn_calls = pd.read_sql(query, engine)
print(brookyn_calls.borough.unique()) # ['BROOKLYN']
```

- `AND`나 `OR`도 조건에 사용 가능 
```python
# Write query to get records about plumbing in the Bronx
and_query = """SELECT *
                FROM hpd311calls
                WHERE borough = 'BRONX'
                AND complaint_type = 'PLUMBING';""" 
# Get calls about plumbing issues in the Bronx
bx_plumbing_calls = pd.read_sql(and_query, engine)
# Check record count
print(bx_plumbing_calls.shape)
```

### DISTINCT

- 보고 싶은 column이 중복되는 것을 막음 -> unique value
- 고유한 집합으로 본다는 의미
- `SELECT` 뒤에 사용
```sql
SELECT DISTINCT [column names] FROM [table];
```
- 중복 값 없애기
```sql
SELECT DISTINCT * FROM [table];
```
- 예제
```sql
SELECT DISTINCT incident_address, borough
FROM hpd311calls;
```

### Aggregate Functions

- 집계 함수
- `SUM`, `AVG`, `MAX`, `MIN`
```sql
SELECT AVG(tmax) FROM weather;
```
- `COUNT`
- query 조건을 만나는 row의 수 
```sql
SELECT COUNT(*) FROM [table_name];
```
- column에 unique value 개수 얻기
```sql
SELECT COUNT(DISTINCT [column_names]) FROM [table_name];
```

### GROUP BY 

- 그룹화 
```sql
/* Get counts of plumbing calls by borough */
SELECT borough,
        COUNT(*)
FROM hpd311calls
WHERE complaint_type = 'PLUMBING'
GROUP BY borough;
```
- 파이썬 사용 예제
```python
# Create database engine
engine = create_engine("sqlite:///data.db")
# Write query to get plumbing call counts by borough
query = """SELECT borough, COUNT(*)
            FROM hpd311calls
            WHERE complaint_type = 'PLUMBING'
            GROUP BY borough;"""
# Query databse and create data frame
plumbing_call_counts = pd.read_sql(query, engine)
print(plumbing_call_counts)
```
```
  borough       COUNT(*)
0 BRONX         2016
1 BROOKLYN      2702
2 MANHATTAN     1413
3 QUEENS        808
4 STATEN ISLAND 178
```

### Key

- primary key
  - unique
- foreign key
  - 두 table 간의 연결되는 column

### Join

- 둘 이상의 테이블을 연결
- `table.column` `.`으로 table과 column 지정
- 두 테이블에 모두 나타나는 키 값이 있는 record만 반환
- 동일한 데이터 타입이어야 한다.
```sql
SELECT * FROM hpd311calls
JOIN weather
ON hpd311calls.created_date = weather.date;
```
- `WHERE`을 사용하여 조건 사용
```sql
/* Get only heat/hot water calls and join in weather data */
SELECT * FROM hpd311calls
JOIN weather
ON hpd311calls.created_date = weather.date
WHERE hpd311calls.complaint_type = 'HEAT/HOT WATER';
```
- Aggregate function도 같이 사용
```python
# Get call counts by borough
# and join in population and housing counts
query = """SELECT hpd311calls.borough,
            COUNT(*),
            boro_census.total_population,
            boro_census.housing_units
            FROM hpd311calls
            JOIN boro_census
            ON hpd311calls.borough = boro_census.borough
            GROUP BY hpd311calls.borough;"""
call_counts = pd.read_sql(query, engine)
print(call_counts)
```
```
  borough       COUNT(*) total_population housing_units
0 BRONX         29874    1455846          524488
1 BROOKLYN      31722    2635121          1028383
2 MANHATTAN     20196    1653877          872645
3 QUEENS        11384    2339280          850422
4 STATEN ISLAND 1322     475948           179179
```

## Importing JSON Data and Working with APIs

### JSON

- JavaScript Object Notation
- 웹에서 흔하게 쓰이는 data format
- tabular 형태가 아님
  - record가 모두 동일한 속성을 가질 필요 없음
- 데이터는 객체들의 모임으로 구성됨
- attribute-value 형태
  - python의 dict와 비슷함
- nested
- `read_json()`
  - JSON 경로 또는 JSON을 문자열로 직접 제공
  - pandas가 자동으로 data type을 유추하지만 `dtype`을 사용하여 따로 지정 가능 
  - `orient`를  사용하여 JSON 문자열의 형식 지정
- pandas가 자주 사용하는 record, column 방향을 자동으로 감지
- pandas가 어떻게 테이블에 정렬할지 추측

### Record orientation

- table의 record로 변환되는 dict로 구성
```json
[
  {
    "age_adjusted_death_rate": "7.6",
    "death_rate": "6.2",
    "deaths": "32",
    "leading_cause": "Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)",
    "race_ethnicity": "Asian and Pacific Islander",
    "sex": "F",
    "year": "2007"
  },
  {
    "age_adjusted_death_rate": "8.1", 
    "death_rate": "8.3",
    "deaths": "87",
    ...
```

### Column orientation

- attribute 이름을 반복하지 않아 파일 크기를 줄임
```json
{
  "age_adjusted_death_rate": {
    "0": "7.6",
    "1": "8.1",
    "2": "7.1",
    "3": ".",
    "4": ".",
    "5": "7.3",
    "6": "13",
    "7": "20.6",
    "8": "17.4",
    "9": ".",
    "10": ".",
    "11": "19.8",
    ...
```

### split

- ‘split’ : dict like {‘index’ -> [index], ‘columns’ -> [columns], ‘data’ -> [values]}

```json
{
  "columns": [
    "age_adjusted_death_rate",
    "death_rate",
    "deaths",
    "leading_cause",
    "race_ethnicity",
    "sex",
    "year"
  ],
  "index": [...],
  "data": [
    [
      "7.6"
```
```python
import pandas as pd
death_causes = pd.read_json("nyc_death_causes.json",
                            orient="split")
print(death_causes.head())
```

### API

- Application Programming Interface
- application이 다른 프로그램과 통신하게 해주는 것
- 요청을 보낼 endpoint 제공

### Requests

- Python에서 HTTP 요청을 보내는 모듈
- `requests.get(url_string)`을 사용하여 GET 요청을 보냄
  - URL에서 데이터를 가져옴
  - `params`: dict를 사용하여 customize API request를 보냄
  - `headers`: dict 사용, user authentication 키가 필요한 경우 header로 전달
- 결과는 data와 metadata를 포함하는 `response` 객체
  - `response.json()`로 JSON data를 받음
  - DataFrame으로 받으려면 `pd.DataFrame()` 사용

```python
import requests
import pandas as pd
api_url = "https://api.yelp.com/v3/businesses/search"
# Set up parameter dictionary according to documentation
params = {"term": "bookstore",
          "location": "San Francisco"}
# Set up header dictionary w/ API key according to documentation
headers = {"Authorization": "Bearer {}".format(api_key)}
# Call the API
response = requests.get(api_url,
                        params=params,
                        headers=headers)
```
- JSON으로 받기
```python
# Isolate the JSON data from the response object
data = response.json()
print(data)
```
- DataFrame으로 받기
```python
# Load businesses data to a data frame
bookstores = pd.DataFrame(data["businesses"])
print(bookstores.head(2))
```

### Nested JSON

- API는 종종 반환되는 데이터 양 제한
  - 대용량 데이터셋을 전송하는 데 시간과 리소스가 많이 소모될 수 있기 때문

```python
# Print columns containing nested data
print(bookstores[["categories", "coordinates", "location"]].head(3))
```

- `pandas.io.json`
  - JSON을 읽고 쓰기 위한 submodule
  - import 필요

- `json_normalize()`
  - Normalize semi-structured JSON data into a flat table.
  - DataFrame 반환
  - JSON에서 DataFrame을 쉽게 생성하도록 도움을 줌
  - `sep`: str, default ‘.’
    - Nested records will generate names separated by sep. e.g., for sep=’.’, {‘foo’: {‘bar’: 0}} -> foo.bar.

```python
import pandas as pd
import requests
from pandas.io.json import json_normalize
# Set up headers, parameters, and API endpoint
api_url = "https://api.yelp.com/v3/businesses/search"
headers = {"Authorization": "Bearer {}".format(api_key)}
params = {"term": "bookstore",
          "location": "San Francisco"}
# Make the API call and extract the JSON data
response = requests.get(api_url,
                        headers=headers,
                        params=params)
data = response.json()

# Flatten data and load to data frame, with _ separators
bookstores = json_normalize(data["businesses"], sep="_")
print(list(bookstores))
```

- `record_path`: str or list of str, default None
  - 각 객체의 record의 list 경로, If not passed, data will be assumed to be an array of records.
- `meta`: list of paths (str or list of str), default None
  - Fields to use as metadata for each record in resulting table.
- `meta_prefix`: str, default None
  - If True, prefix records with dotted (?) path, e.g. foo.bar.field if meta is [‘foo’, ‘bar’].

```python
# Flatten categories data, bring in business details
df = json_normalize(data["businesses"],
                    sep="_",
                    record_path="categories",
                    meta=["name", "alias", "rating",
                        ["coordinates", "latitude"],
                        ["coordinates", "longitude"]],
                    meta_prefix="biz_")
```

### Append

- `append()`
- 데이터프레임 결합
- `ignore_index`: True면 0부터 시작

```python
# Add an offset parameter to get cafes 51-100
params = {"term": "cafe", 
          "location": "NYC",
          "sort_by": "rating", 
          "limit": 50,
          "offset": 50
}

result = requests.get(api_url, headers=headers, params=params)
next_50_cafes = json_normalize(result.json()["businesses"])

# Append the results, setting ignore_index to renumber rows
cafes = top_50_cafes.append(next_50_cafes, ignore_index=True)

# Print shape of cafes
print(cafes.shape)
```

### Merging

- `merge()`
- SQL JOIN의 pandas 버전
- 두 데이터프레임을 각 데이터에 존재하는 고유값(key)을 기준으로 병합
- `on`: 공통된 열
  - merge의 기준이 되는 열의 이름이 같을 때 사용
- `left_on`, `right_on`: 왼쪽 열, 오른쪽 열
  - 두 데이터프레임의 열 이름이 다를 때 사용

```python
# Merge weather into call counts on date columns
merged = call_counts.merge(weather,
                          left_on="created_date",
                          right_on="date")
print(merged.head()
```