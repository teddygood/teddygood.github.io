---
title: 'Data Engineering 스터디 2주차'
date: '2021-08-30'
tags: ["Data Engineering"]
draft: false

description: PseudoLab Data Science Fellowship 1기

sidebar_position: 1
---

# Inrtroduction to Data Engineering

## Introduction to Data Engineering

최악의 상황
- 데이터는 흩어져있음
- 분석에 최적화되어 있지 않음
- 레거시코드 때문에 데이터가 손상되어 있음

data engineer는 data scientist 삶을 편하게 함
- 여러 소스에서 데이터를 extract하고 single DB에 load
- 분석을 위하여 DB를 최적화하여 쿼리 속도를 빠르게 만듬
- 손상된 데이터도 제거
- 확장을 원하는 데이터 중심(data-driven) 회사에서 가장 가치있는 사람

데이터 엔지니어 정의
- DB와 large-scale processing system 같은 architecture를 개발, 구성, 테스트, 유지 관리하는 엔지니어
- 많은 양의 데이터를 처리
- 컴퓨팅을 수행하는 machine cluster를 사용 및 설정 -> virtual machine의 cluster
  - cluster: 고성능 컴퓨팅을 위해 여러 단말의 컴퓨터로 구성된 컴퓨터 집합

Data Engineer vs Data Scientist
- Data Engineer
  - 확장가능한 데이터 아키텍처 개발
  - 데이터 수집 간소화
  - 데이터를 가져오는 프로세스 설정
  - 손상된 데이터를 정리하여 데이터 보호
  - 클라우드 기술에 잘 알아야 함
- Data Scientist
  - 데이터 패턴을 찾기 위해 하는 데이터 마이닝
  - 대규모 데이터셋에 통계 모델 적용
  - 머신러닝으로 예측 모델 구축
  - 비즈니스 프로세스를 모니터링하는 도구 개발
  - cleaning 작업으로 이상치(outlier) 제거
  - 비즈니스에 대한 깊은 이해를 가짐

Database
- 간략하게 말하면 DB는 많은 양의 데이터를 보유하는 컴퓨터 시스템
- 애플리케이션은 특정 기능을 제공하기 위헤 DB에 의존

Processing
- clean, aggregate, join하기 위해 데이터 처리
- 엄청난 양의 데이터 처리
  - 병렬 처리
  - 한 컴퓨터에서 데이터 처리 -> virtual machine cluster를 사용하여 분산하여 데이터 처리
    - 이런 툴은 기본 아키텍처 추상화, 간단한 API 제공
    - e.g.
      ```python
      df = spark.read.parquet("users.parquet")
      outliers = df.filter(df["age"] > 100)
      print(outliers.count())
      ```

Scheduling
- 데이터가 특정 간격에 따라 적절한 시간에 한 장소에서 다른 장소로 이동하는지 확인
- 경우에 따라 처리 작업이 올바르게 작동하려면 특정 순서로 실행되어야 함
  - 시간에 맞게 실행되도록 하고 올바른 순서로 실행되도록 만듬
- 작업의 종속성이 올바르게 해결되어야 함

Existing tools
- Databases: MySQL, PostgreSQL
- Processing: Apache Spark, Apache Hive
- Scheduling: Apache Airflow, Oozie, cron

Data Pipeline
- DB와 연결하여 모든 데이터 Extract, Transform
- Spark 같은 cluster computing framework를 사용하여 analytical DB에 Load
- Airflow와 같은 scheduling framework를 통해 특정 순서로 실행되도록 scheduling
- source가 외부 API 또는 기타 파일 형식일 수도 있음

Data processing in the cloud
- 과거에는 자체 데이터 센터를 설립하여 서버 랙을 사용
  - 전기 요금, 유지관리 비용
  - 피크 타임에 충분한 처리 능력 필요 -> 사용이 없을 때는 처리 능력이 그대로 남아있음 -> 리소스 낭비
  - 재난을 대비해 데이터를 다른 지리적 위치에 복제 필요
- 클라우드
  - 리소스를 필요할 때 사용
  - 비용 최적화
  - DB 안정성 -> 재난 같은 최악의 상황에 대비

AWS, Azure, GCP
- 2017 AWS 중단 발생
- 2018 기준 점유율: AWS > Azure > GCP

Storage
- 모든 유형 파일 클라우드에 업로드
- 일반적으로 매우 저렴
- 파일 안정적으로 저장
- AWS S3, Azure Blob Storage, Google Cloud Storage

Computation
- 클라우드에서 계산 수행
- 가상머신을 원하는대로 사용 -> 필요에 따라 유연하게 시작, 중지
  - e.g. 웹 서버 호스팅
- AWS EC2, Azure Virtual Machines, Google Compute Engine
  
Database
- DB 호스팅
- AWS RDS, Azure SQL Database, Google Cloud SQL
  
## Data engineering toolbox

Database 정의
- 데이터 보유
- 데이터 구성
- DBMS를 통해 되찾아오거나 검색하는 데 도움이 됨 

DB와 File system 차이
- DB
  - 매우 조직화되어 있음
  - 검색, 복제 등과 같은 복잡한 작업들을 추상화
- File system
  - 덜 조직화되어 있음
  - 위와 같은 기능들이 간단하거나 덜함

Structured and unstructured data
- Structured: database schema
  - RDBMS의 테이블 형식 데이터
- Semi-structured
  - JSON
- Unstructured: shemaless, 파일과 더 비슷함
  - 비디오, 사진

SQL and NoSQL
- SQL
  - Tables
  - Database schema: 테이블 간의 관계, 속성 정의
  - RDBMS(Relational DataBase Management System)
  - Mysql, PostgreSQL
- NoSQL
  - Non-relational database
  - NoSQL DB에는 여러가지 유형이 있음
    - unstructured data만 연결되는 것이 아님 -> structured data도 연결될 수 있음
  - Key-value 저장(e.g. caching, 분산 구조)
  - Document DB(e.g. JSON object -> structured or unstructured object)
  - Redis, MongoDB

database schema
- DB의 구조와 관계 설명 
- e.g. 스키마 테이블 생성
  ```sql
  -- Create Customer Table
  CREATE TABLE "customer" (
    "id" SERIAL NOT NULL,
    "first_name" varchar,
    "last_name" varchar,
    PRIMARY KEY ("id")
  );

  -- Create Order Table
  CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "customer_id" integer REFERENCES "Customer",
    "product_name" varchar,
    "product_price" integer,
    PRIMARY KEY ("id")
  );
  ```
  - customer_id로 주문을 고객과 연결 -> foreign key
  - JOIN 문을 사용하여 테이블을 조인하여 외래 키 활용
    ```sql
    SELECT * FROM "Customer"
    INNER JOIN "Order"
    ON "customer_id" = "Customer"."id";
    ```

Star schema
- data warehousing에서 자주 볼 수 있음
- Redshift와 같은 많은 분석 DB에서 스키마에 대한 최적화 존재
- 스타 스키마는 여러 차원 테이블을 참조하는 하나 이상의 fact table로 구성
- Fact table에는 세상에서 일어나는 일들을 표현하는 record 포함되어 있음
  - e.g. orders
- Dimension table은 세계 자체에 대한 정보
  - e.g. customer information 

The database schema
```python
# Complete the SELECT statement
data = pd.read_sql("""
SELECT first_name, last_name FROM "Customer"
ORDER BY last_name, first_name
""", db_engine)

# Show the first 3 rows of the DataFrame
print(data.head(3))

# Show the info of the DataFrame
print(data.info())
```

Joining on relations
```python
# Complete the SELECT statement
data = pd.read_sql("""
SELECT * FROM "Customer"
INNER JOIN "Order"
ON "Order"."customer_id"="Customer"."id"
""", db_engine)

# Show the id column of data
print(data.id)
```

parallel computing
- 거의 모든 최신 데이터 처리 도구의 기초를 형성
- 병렬 컴퓨팅이 중요한 이유
  - 메모리  
    - 메모리에 모든 데이터를 로드할 필요 없음
    - dataset을 분할하여 다른 컴퓨터의 메모리에 로드 -> 컴퓨터 당 메모리 사용량 낮춤
    - 각 컴퓨터는 메모리 공간이 상대적으로 작음
    - RAM에 가까운 메모리에 들어갈 수 있음
  - 처리 능력
    - 여러 개의 작은 하위 작업들로 분할 -> 여러 컴퓨터에 배포
      - 널리 사용 가능, 상대적으로 저렴
    - 개별적으로는 전체 작업을 처리하는데 오랜 시간이 걸리지만 더 작은 하위 작업에서 병렬로 작동하기 때문에 전체 작업이 더 빠르게 수행됨
    - 여러 개의 processing unit을 가지면 처리 능력 향상
- 병렬컴퓨팅은 비용이 들 수 있음
  - 하위 작업으로 분할, 하위 작업의 결과 병합 과정에서 communication cost 발생
  - 처리 요구사항이 많지 않거나 processing unit이 너무 적은 경우 communication ovearhead는 병목현상(bottleneck)이 일어남
    - overhead: 어떤 처리를 하기 위해 들어가는 간접적인 처리 시간, 메모리 등
  - overhead 때문에 분할할 때 속도가 선형적으로 증가하지 않을 수 있음
    - parallel slowdown

multiprocessing.Pool
- low level에서 multiprocessing.Pool

```python
from multiprocessing import Pool

def take_mean_age(year_and_group):
    year, group = year_and_group
    return pd.DataFrame({"Age": group["Age"].mean()}, index=[year])

with Pool(4) as p:
    results = p.map(take_mean_age, athlete_events.groupby("Year")) # mapping -> 4 seperate process

result_df = pd.concat(results)
```

여러 패키지는 이러한 낮은 수준의 코드를 작성할 필요가 없도록 추상화 계층을 제공
- e.g. dask
  - GROUPBY 수행, multiprocessing 사용하는 DataFrame 객체 제공
  - Lazy evaluation 사용 -> .compute() 붙임
  - Using a DataFrame
    ```python
    import dask.dataframe as dd

    # Partition dataframe into 4
    athlete_events_dask = dd.from_pandas(athlete_events, npartitions=4)

    # Run parallel computations on each partition
    # Calculate the mean Age per Year
    result_df = athlete_events_dask.groupby('Year').Age.mean().compute()
    ```

From task to subtasks
```python
## From task to subtasks

# Function to apply a function over multiple cores
@print_timing
def parallel_apply(apply_func, groups, nb_cores):
    with Pool(nb_cores) as p:
        results = p.map(apply_func, groups)
    return pd.concat(results)

# Parallel apply using 1 core
parallel_apply(take_mean_age, athlete_events.groupby('Year'), 1)

# Parallel apply using 2 cores
parallel_apply(take_mean_age, athlete_events.groupby('Year'), 2)

# Parallel apply using 4 cores
parallel_apply(take_mean_age, athlete_events.groupby('Year'), 4)
```

Hadoop 
- Apache Software Foundation에서 유지관리하는 오픈소스 프로젝트
- HDFS
  - 분산 파일 시스템
  - 파일 시스템과 유사
  - 파일이 다른 컴퓨터들에 존재
  - 확장에 의한 parallel computing에서는 필수적이었음
  - S3 같은 storage system이 종종 HDFS를 대체
- MapReduce
  - 대중화 된 최초의 빅데이터 처리 패러다임 중 하나
  - 하위 작업으로 나누고 여러 processing unit에 workload와 data 분배 -> computer cluster
  - 작업을 작성하기 어려움 -> Hive로 해결
  - MapReduce 기반 시스템은 작업 간에 고가의 디스크 쓰기가 필요 -> MapReduce의 한계
  - MapReduce의 디스크 쓰기는 각 단계가 이전 단계 위에 구축되는 interactive한 EDA(Exploratory Data Analysis)에서 제한적


Hive
  - 데이터를 생성하는 Hadoop echo system의 최상위 계층
  - Hive SQL을 사용하여 structured query
    - parallel processing을 위해 structured query 사용
  - Facebook이 개발했지만 이젠 Apache software Fondation에서 프로젝트 유지
  - 처음에는 MapReduce로 Hive를 실행했지만 지금은 다른 데이터 처리 도구와 통합됨
  - e.g.
    ```sql
    SELECT year, AVG(age)
    FROM views.athlete_events
    GROUP BY year
    ```
    - 일반 sql과 다른 것이 없어 보이지만 뒤에서는 cluster에서 작동할 수 있는 작업으로 변환됨
    - Hive -> MapReduce -> cluster

Spark
  - computer cluster간에 데이터 처리 작업을 분산시킴
  - Spark는 메모리에서 가능한 많은 처리를 하려고 함 -> MapReduce 한계 해결
  - UC Berkeley AMPLab에서 개발, 현재는 Apache Software Foundation에서 유지관리

Resilient distributed datasets(RDD)
- 스파크가 의존
- 여러 노드 간의 분산된 데이터를 유지하는 자료구조
- DataFrame과 다르게 열에 이름이 없음 -> tuple과 비슷함
- Operation
  - Transformation: map() or filter()
  - Action: count() or first()

Pyspark
- Spark에 대한 python interface
- DataFrame abstraction 호스트
  - pandas의 DataFrame과 비슷하게 사용
- 복잡한 parallel computing operation 처리
- e.g.
  ```python
  # Load the dataset into athlete_events_spark first
  (athlete_events_spark
    .groupBy('Year')
    .mean('Age')
    .show())
  ```

PySpark groupby
```python
# Print the type of athlete_events_spark
print(type(athlete_events_spark))

# Print the schema of athlete_events_spark
print(athlete_events_spark.printSchema())

# Group by the Year, and find the mean Age
print(athlete_events_spark.groupBy('Year').mean('Age'))

# Group by the Year, and find the mean Age
print(athlete_events_spark.groupBy('Year').mean('Age').show())
```

An example pipeline
- csv 추출, spark로 clean, sql load
- How to schedule?
  - 수동으로 작업 실행
  - Linux cron 같은 scheduling tool 사용
- CSV 파일 작업, API로 데이터를 가져와서 clean하는 작업, 데이터를 join하는 작업
  - 작업에 대한 의존성이 생김 -> DAG(Directed Acyclic Graph)로 의존성 시각화

DAG(Directed Acyclic Graph)
- directed edge로 연결된 node들의 집합
- cycle이 없는 graph
  - 특정 노드가 두번 이상 표시X

위의 작업에 대한 tool
- Linux의 cron
- Spotify의 Luigi
  - 복잡한 파이프라인에 대해 DAG를 정의할 수 있음
- Apache Airflow
  - 사실상 workflow scheduling framework
  - Airbnb가 workflow 관리를 위해 만듬
  - 2015 오픈 소스로 공개, 2016년 Apache Software Foundation에 가입
  - 파이썬을 사용하여 복잡한 파이프라인을 구축하는 DAG를 만들고 테스트할 수 있음
  - e.g.
    ```python
    # Create the DAG object
    dag = DAG(dag_id="example_dag", ..., schedule_interval="0 * * * *")

    # Define operations
    start_cluster = StartClusterOperator(task_id="start_cluster", dag=dag)
    ingest_customer_data = SparkJobOperator(task_id="ingest_customer_data", dag=dag)
    ingest_product_data = SparkJobOperator(task_id="ingest_product_data", dag=dag)
    enrich_customer_data = PythonOperator(task_id="enrich_customer_data", ..., dag=dag)

    # Set up dependency flow
    start_culster.set_downstream(ingest_customer_data)
    ingest_customer_data.set_downstream(enrich_customer_data)
    ingest_product_data.set_downstream(enrich_customer_data)
    ```

Airflow DAGs
```python
# Create the DAG object
dag = DAG(dag_id="car_factory_simulation",
          default_args={"owner": "airflow","start_date": airflow.utils.dates.days_ago(2)},
          schedule_interval="0 * * * *")

# Task definitions
assemble_frame = BashOperator(task_id="assemble_frame", bash_command='echo "Assembling frame"', dag=dag)
place_tires = BashOperator(task_id="place_tires", bash_command='echo "Placing tires"', dag=dag)
assemble_body = BashOperator(task_id="assemble_body", bash_command='echo "Assembling body"', dag=dag)
apply_paint = BashOperator(task_id="apply_paint", bash_command='echo "Applying paint"', dag=dag)

# Complete the downstream flow
assemble_frame.set_downstream(place_tires)
assemble_frame.set_downstream(assemble_body)
assemble_body.set_downstream(apply_paint)
```

## Extract, Transform and Load(ETL)

Extracting data
- 데이터 처리에 적합하지 않은 데이터를 S3 같은 서비스 또는 DB에서 메모리로 추출
- Plain text file
- Flat file
  - 각 row가 record, 각 column이 record atrribute
  - tarbular format
  - csv, tsv
- JSON(JavaScript Object Notation)
  - Semi-structured
  - Atomic
    - number
    - string
    - boolean
    - null
  - Composite
    - array
    - object
  - 파이썬 dict와 mappging -> `import json`

Data on the web
- request, response
- e.g.
  1. Browse to Google
  2. Request to Google Server
  3. Google responds with web page
- 사람이 읽기 힘든 웹 페이지도 존재
  - JSON format
  - 서버 API(Application Programming Interface)
    - e.g.
      - twitter는 JSON 형식으로 트윗에 대한 정보를 제공하는 API 호스팅
      - Hackernews API
        ```python
        import requests

        response = requests.get("https://hacker-news.firebaseio.com/v0/item/16222426.json")
        print(response.json())
        ```

Database
- 일반적인 데이터 추출 방법 -> 기존 application DB에서 추출
- 대부분의 application에는 데이터를 백업, 유지하기 위해 DB가 필요
- Applications databases
  - application이 사용하는 DB는 일반적으로 많은 Transaction 가지도록 최적화 되어있음
  - DB에서 row 또는 record를 변경하거나 삽입
  - OLTP(Online transaction processing)
  - row-oriented, 시스템이 행별로 데이터를 추가
- Analytical databases
  - 분석에 최적화 된 DB
  - OLAP(Online Analyticall processing)
  - Colum-oriented

Extraction from database
- Connection string/URI
  - DB에 연결하는 방법에 대한 정보를 포함하는 문자열 
  - e.g. PostgreSQL
    - `postgresql://[user[:password]@][host][:port]`
- Python
  ```
  import sqlalchemy
  import pandas as pd

  connection_uri = "postgresql://repl:password@localhost:5432/pagila"
  db_engine = sqlalchemy.create_engine(connection_uri)

  pd.real_sql("SELECT * FROM customer", db_engine)
  ```

Fetch from an API
```python
import requests

# Fetch the Hackernews post
resp = requests.get("https://hacker-news.firebaseio.com/v0/item/16222426.json")

# Print the response parsed as JSON
print(resp.json())

# Assign the score of the test to post_score
post_score = resp.json()["score"]
print(post_score)
```

Read from a database
```python
# Function to extract table to a pandas DataFrame
def extract_table_to_pandas(tablename, db_engine):
    query = "SELECT * FROM {}".format(tablename)
    return pd.read_sql(query, db_engine)

# Connect to the database using the connection URI
connection_uri = "postgresql://repl:password@localhost:5432/pagila" 
db_engine = sqlalchemy.create_engine(connection_uri)

# Extract the film table into a pandas DataFrame
extract_table_to_pandas('film', db_engine)

# Extract the customer table into a pandas DataFrame
extract_table_to_pandas('customer', db_engine)
```

어떤 종류의 변환을 수행해야 하는가
- 속성을 선택 
- 코드 값 번역
- 데이터 유효성 검사
- 단일 열을 여러 열로 split
  - e.g. 이메일을 아이디와 도메인으로 분리
    ```python
    customer_df # Pandas DataFrame with customer data

    # Split email column into 2 columns on the '@' symbol
    split_email = customer_df.email.str.split("@", expand=True)

    # Create 2 new columns using the resulting DataFrame
    customer_df = customer_df.assign(
      username=split_email[0],
      domail=split_email[1],
    )
    ```
- 여러 source에서 join
  - e.g. Pyspark
    ```python
    customer_df # PySpark DataFrame with customer data
    ratings_df # PySpark DataFrame with ratings data

    # Groupby ratings
    ratings_per_customer = ratings_df.groupBy("customer_id").mean("rating")

    # Join on customer ID
    customer_df.join(
      ratings_per_customer,
      customer_df.customer_id==ratings_per_customer.customer_id
    )
    ```

Transforming in PySpark
- load가 적으면 pandas를 사용할 수도 있음
- PySpark를 사용하면 Extract 단계에서 table을 Spark에 load
  ```python
  import pyspark.sql

  spark = pyspark.sql.SparkSession.builder.getOrCreate()
  spark.read.jdbc("jdbc:postgresql://localhost:5432/pagila",
                  "customer",
                  properties={"user":"repl","password":"password"})
  ```
  - JDBC는 Spark가 여러 RDBMS에 연결하는데 도와주는 소프트웨어

Splitting
```python
# Get the rental rate column as a string
rental_rate_str = film_df.rental_rate.astype(str)

# Split up and expand the column
rental_rate_expanded = rental_rate_str.str.split('.', expand=True)

# Assign the columns to film_df
film_df = film_df.assign(
    rental_rate_dollar=rental_rate_expanded[0],
    rental_rate_cents=rental_rate_expanded[1],
)
```

Joining
```
# Use groupBy and mean to aggregate the column
ratings_per_film_df = rating_df.groupBy('film_id').mean('rating')

# Join the tables using the film_id column
film_df_with_ratings = film_df.join(
    ratings_per_film_df,
    film_df.film_id==ratings_per_film_df.film_id
)

# Show the 5 first results
print(film_df_with_ratings.show(5))
```

Analytics or applications databases
- Analytics
  - 복잡한 집계 쿼리는 분석 DB에서 자주 실행 -> 최적화 필요
  - OLAP위해 최적화
  - Column-oriented
    - column 당 데이터를 저장하면 특정 열을 loop시켜 query하는 것이 더 빠름
    - parallelization에 더 적합
- Application
  - 초당 transaction이 많음 -> 최적화 필요
  - OLTP위해 최적화
  - Row-oriented
    -  record 당 데이터를 저장 -> 소규모 transaction에서 새 row를 쉽게 추가

MPP DB(Massively Parallel Processing Database)
- ETL 프로세스가 끝날 때 대상이 되는 DB 유형
- 분산 방식으로 실행되는 분석에 최적화 된 column-oriented DB
- Query는 단일 컴퓨팅 노드에서 실행되는 것이 아니라 하위 작업으로 분할되어 여러 노드에 분산
- Amazon Redshift, Azure SQL Data Warehouse, Google BigQuery
- 일반적으로 column-oriented format을 사용하는 파일에서 잘 load

Redshift
- S3에 파일을 쓰고 Redshift에 복사 query를 보냄
- e.g.
  ```python
  # Pandas .to_parquet() method
  df.to_parquet("./s3://path/to/bucket/customer.parquet")
  # PySpark .write.parquet() method
  df.write.parquet("./s3://path/to/bucket/customer.parquet")
  ```
  - PostgreSQL connection URI를 사용하여 Redshift에 연결, S3의 데이터를 Redshift로 복사
  ```sql
  COPY customer
  FROM 's3://path/to/bucket/customer.parquet'
  FORMAT as parquet
  ```

Load to PostgreSQL
- pandas.to_sql()
  ```sql
  # Transformation on data
  recommendations = transform_find_recommendations(ratings_df)

  # Load into PostgreSQL database
  recommendations.to_sql("recommendations",
                         db_engine,
                         schema="store",
                         if_exitsts="replace")
  ```

Writing to a file
```python
# Write the pandas DataFrame to parquet
film_pdf.to_parquet("films_pdf.parquet")

# Write the PySpark DataFrame to parquet
film_sdf.write.parquet("films_sdf.parquet")
```

Load into Postgres
```python
# Finish the connection URI
connection_uri = "postgresql://repl:password@localhost:5432/dwh"
db_engine_dwh = sqlalchemy.create_engine(connection_uri)

# Transformation step, join with recommendations data
film_pdf_joined = film_pdf.join(recommendations)

# Finish the .to_sql() call to write to store.film
film_pdf_joined.to_sql("film", db_engine_dwh, schema="store", if_exists="replace")

# Run the query to fetch the data
pd.read_sql("SELECT film_id, recommended_film_ids FROM store.film", db_engine_dwh)
```

The ETL function
- ETL 동작을 `elt()` 함수로 캡슐화
  ```python
  # PostgreSQL table을 pandas DataFrame으로 extract하는 함수
  def extract_table_to_dfd(tablename, db_engine):
    return pd.read_sql("SELECT * FROM {}".format(tablename), db_engine)

  # 분석에 더 적합한 형식으로 transform
  def split_columns_transform(df, column, pat, suffixes):
    # Converts column into str and splits it on pat...

  # 변환된 데이터를 PostgreSQL DB에 load
  def load_df_into_dwh(film_df, tablename, schema, db_engine):
    return pd.to_sql(tablename, db_engine, schema=schema, if_exists="replace")

  db_engines = { ... } # Needs to be configured
  def etl():
    # Extract
    film_df = extract_table_to_df("film", db_engines["store"])
    # Transform
    film_df = split_columns_transform(film_df, "renntal_rate", ".", ["_dollar", "_cents"])
    # Load
    load_df_into_dwh(film_df, "film", "store", db_engines["dwh"])
  ``` 

Airflow
- 특정 시간에 실행되도록 함
- python으로 작성된 workflow scheduler
- Python 객체에서 DAG 사용
- DAG task 사이에 의존성 관계가 있을 수 있기에 workflow를 관리하는 데 완벽
- operator는 작업단위를 나타냄
  - 다양한 종류가 있으며 custom operator도 쓸 수 있음
- Scheduling with DAGs in Airflow
  - DAG 객체 만들기
  ```python
  frorm airflow.models import DAG

  dag = DAG(dag_id="sample",
            ...,
            schedule_interval="0 0 * * *") # DAG를 실행해야 하는 시기를 정의
  ```
  - 일반적으로 cron 표현식을 사용하여 실행 간격을 정의
    - minute(0~59), hour(0~23), day of the month(1~31), month(1~12), day of the week(0~6)
      - e.g. 0 * * * * -> 매 시간 0분
- The DAG definition file
  ```python
  from airflow.models import DAG
  from airflow.operators.python_operator import PythonOperator

  dag = DAG(dag_id="etl_pipeline",
            schedule_interval="0 0 * * *")
  
  etl_task = PythonOperator(task_id="etl_task",
                            python_callable=etl,
                            dag=dag)
  
  etl_task.set_upstream(wait_for_this_task)
  ```
  - `etl_dag.py`을 `~/airflow/dags/`에 저장

Defining a DAG
```python
# Define the ETL function
def etl():
    film_df = extract_film_to_pandas()
    film_df = transform_rental_rate(film_df)
    load_dataframe_to_film(film_df)

# Define the ETL task using PythonOperator
etl_task = PythonOperator(task_id='etl_film',
                          python_callable=etl,
                          dag=dag)

# Set the upstream to wait_for_table and sample run etl()
etl_task.set_upstream(wait_for_table)
etl()
```

## Case Study: DataCamp

Ratings at DataCamp
- 한 장이 끝나면 완료 후 평가
- 특정 과정을 평가하는 방법을 추정 -> 추천 시스템에서 사용하기 적합
- 등급 데이터를 clean 작업 후 각 사용자에게 권장하는 상위 과정 계산
- 매일 다시 계산 -> dashboard에 과정 표시

ETL process
- extract rating data
  -  datacapmp_application DB의 두 SQL table에서 extract 수행 -> PostgreSQL
- 유용한 recommendation을 얻기 위한 transform
  - clean, rating table에서 recommendation을 계산하는 알고리즘
- load application database 
  - data warehouse DB에 load
- data scientist는 recommendation을 제공
- data engineer는 schedule에 맞게 recommendation을 업데잍트하는 안정적인 시스템 구축

Table
- Course
  - course_id(foreign key), title, description, programming_language
- Rating
  - user_id(identifier), course_id, rating

Querying the table
```python
# Complete the connection URI
connection_uri = "postgresql://repl:password@localhost:5432/datacamp_application" 
db_engine = sqlalchemy.create_engine(connection_uri)

# Get user with id 4387
user1 = pd.read_sql("SELECT * FROM rating WHERE user_id=4387", db_engine)

# Get user with id 18163
user2 = pd.read_sql("SELECT * FROM rating WHERE user_id=18163", db_engine)

# Get user with id 8770
user3 = pd.read_sql("SELECT * FROM rating WHERE user_id=8770", db_engine)

# Use the helper function to compare the 3 users
print_user_comparison(user1, user2, user3)
```

Average rating per course
```python
# Complete the transformation function
def transform_avg_rating(rating_data):
    # Group by course_id and extract average rating per course
    avg_rating = rating_data.groupby('course_id').rating.mean()
    # Return sorted average ratings per course
    sort_rating = avg_rating.sort_values(ascending=False).reset_index()
    return sort_rating

# Extract the rating data into a DataFrame    
rating_data = extract_rating_data(db_engines)

# Use transform_avg_rating on the extracted data and print results
avg_rating_data = transform_avg_rating(rating_data)
print(avg_rating_data) 
```

The recommendations table
- user_id, course_id, rating prediction
  - rating prediction: 등급 예측을 통해 사용자가 코스를 수강하기 전에 등급을 추정
- triplet은 rating table에서 각 unique한 user id에 대한 추천 코스 top 3로 구성
  - 유용함
    - recommendation table에 access할 수 있는 응용 프로그램이 특정 사용자에 대해 query
    - 추천할 3개의 코스를 즉시 얻을 수 있음

Recommendation technique
- rating table을 recommendation 으로 변환 가능
  - matrix frctorization

Average course ratings
- course_id, avg_rating
- 높은 등급의 코스를 추천하고 싶기 때문에 이 table이 유용할 것

Use the right programming language
- 사용자가 관심을 갖는 프로그래밍 언어로 된 강좌 추천
- 과정별 프로그래밍 언어에 대한 data, 어떤 과정을 평가하는지에 대한 data
- SQL 과정 2개를 포함하여 4개 과정을 평가하면 다음 SQL 과정을 추천

Recommend new course
- 사용자가 평가하지 않은 코스 추천
- user_id, course_id combination이 rating table에 있으면 안됨

추천 전략
- 사용자가 대부분 코스를 평가한 기술의 코스 추천
- 해당 사용자에 대해 이미 평가된 코스는 추천하지 않음
- 가장 높은 등급을 유지하는 세 가지 코스 추천

Filter out corrupt data
```python
course_data = extract_course_data(db_engines)

# Print out the number of missing values per column
print(course_data.isnull().sum())

# The transformation should fill in the missing values
def transform_fill_programming_language(course_data):
    imputed = course_data.fillna({"programming_language": "R"})
    return imputed

transformed = transform_fill_programming_language(course_data)

# Print out the number of missing values per column of transformed
print(transformed.isnull().sum())
```

Using the recommender transformation
```python
# Complete the transformation function
def transform_recommendations(avg_course_ratings, courses_to_recommend):
    # Merge both DataFrames
    merged = courses_to_recommend.merge(avg_course_ratings) 
    # Sort values by rating and group by user_id
    grouped = merged.sort_values("rating", ascending=False).groupby("user_id")
    # Produce the top 3 values and sort by user_id
    recommendations = grouped.head(3).sort_values("user_id").reset_index()
    final_recommendations = recommendations[["user_id", "course_id","rating"]]
    # Return final recommendations
    return final_recommendations

# Use the function with the predefined DataFrame objects
recommendations = transform_recommendations(avg_course_ratings, courses_to_recommend)
```

지금까지 한 것들
- `extract_course_data()`, `extract_raing_data()`를 사용하여 courses 및 rating 테이블에서 데이터 Extract 
- courses 테이블에서 missing value clean up using transform_fill_programming_language()
- 코스 당 평균 코스 rating을 얻기위해 집계 함수 제작: transform_avg_rating()
- 적합한 사용자, 코스 id 쌍이 있는 DataFrame 얻기: transform_courses_to_recommend()
- recommendations 계산: transform_recommendations()

Loading to Postgres
- recommendation engine처럼 data product에서 table 사용할 수 있음
- Airflow 작업의 모든 것을 조정하여 테이블을 매일 최신 상태로 유지
- e.g. recommendations을 통해 특정 고객에게 이메일 보내기

The loading phase
- 테이블에 데이터를 가져오기 위해 recommendations DataFrame을 가져오기
- pandas의 `.to_sql()` 사용하여 SQL 테이블에 쓰기
  ```python
  recommendations.to_sql(
      "recommendations", # 테이블 이름
      db_engine, # db engine
      if_exitsts="append") # 테이블 존재하는 경우에 대한 전략
  ```

etl()
```python
def etl(db_engines):
    # Extract the data
    courses = extract_course_data(db_engines)
    rating = extract_rating_data(db_engines)
    # Clean up courses data -> NA를 채워 courses table 정리
    courses = transform_fill_programming_language(courses)
    # Get the average course ratings
    avg_course_rating = transform_avg_rating(rating)
    # Get eligible user and course id pairs
    courses_to_recommend = transform_courses_to_recommend(
        rating,
        courses,
    )
    # Calculate the recommendations
    recommendations = transform_recommendations(
        avg_course_rating,
        courses_to_recommend,
    )
    # Load the recommendations into the database
    load_to_dwh(recommendations, db_engine))
```

Creating the DAG
```python
from airflow.models import DAG
from airflow.operators.python_operator import PythonOperator

dag = DAG(dag_id="etl_pipeline",
          schedule_interval="0 0 * * *")
task_recommendations = PythonOperator(
    task_id="recommendations_task",
    python_callable=etl,
)
```

The target table
```python
connection_uri = "postgresql://repl:password@localhost:5432/dwh"
db_engine = sqlalchemy.create_engine(connection_uri)

def load_to_dwh(recommendations):
    recommendations.to_sql("recommendations", db_engine, if_exists="replace")
```

Defining the DAG
```python
# Define the DAG so it runs on a daily basis
dag = DAG(dag_id="recommendations",
          schedule_interval="0 0 * * *")

# Make sure `etl()` is called in the operator. Pass the correct kwargs.
task_recommendations = PythonOperator(
    task_id="recommendations_task",
    python_callable=etl,
    op_kwargs={"db_engines": db_engines},
)
```

Querying the recommendations
```python
def recommendations_for_user(user_id, threshold=4.5):
    # Join with the courses table
    query = """
    SELECT title, rating FROM recommendations
    INNER JOIN courses ON courses.course_id = recommendations.course_id
    WHERE user_id=%(user_id)s AND rating>%(threshold)s
    ORDER BY rating DESC
    """
    # Add the threshold parameter
    predictions_df = pd.read_sql(query, db_engine, params = {"user_id": user_id, 
                                                             "threshold": threshold})
    return predictions_df.title.values

# Try the function you created
print(recommendations_for_user(12, 4.65))
```