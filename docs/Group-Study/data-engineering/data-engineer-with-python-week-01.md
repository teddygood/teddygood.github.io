---
title: 'Data Engineering 스터디 1주차'
date: '2021-08-25'
# tags: ["Data Engineering"]
draft: false

description: PseudoLab Data Science Fellowship 1기

sidebar_position: 1
---

# Data Engineering for Everyone

## What is data engineering?

4 steps of Data workflow
  1. Data Collection & Storage
  2. Data Preparation
  3. Exploration & Visualization
  4. Experimentation & Prediction

Data Engineer
  - 첫번째 단계를 담당
  - 데이터 분석가, 과학자, 머신러닝 엔지니어를 위한 기초 작업 수행
  - 댜앙한 소스에서 데이터 수집
  - 분석을 위해 DB 최적화
  - 데이터 손상을 관리
  - 데이터 아키텍처 개발, 구성, 테스트 및 유지 관리

The five Vs
  - Volume(how much?)
  - Variety(what kind?)
  - Velocity(how frequent?)
  - Veracity(how accurate?)
  - Value(how useful?)

Data Scientist
  - 나머지 세 단계를 담당
  - Engineer가 준비한 데이터를 이용
  - DB에 엑세스
  - 파이프라인의 출력 사용

Data pipeline
  - 추출, 변환, 결합, 검증, 데이터 로드하는 것을 자동화
  - 사람의 개입, 오류, 데이터가 흐르는 데 걸리는 시간을 줄임
  - 한 시스템에서 다른 시스템으로 데이터 이동

ETL
- 데이터 파이프라인을 설계하는 데 많이 사용되는 프레임워크
- Extract, Transfrom, Load
- 데이터가 저장되기 전에 처리
- 데이터가 transform되지 않고 시각화 도구 또는 Salesforce 같은 application으로 직접 라우팅될 수 있기에 ETL이 필수는 아님

## Storing data

Structured data
- 검색과 구성이 쉬움
- row와 column이 있는 구조
- 정의된 타입 사용
- 관계를 쉽게 형성 -> RDBMS
  - 구조화되어 있기 때문에 다른 구조화 된 데이터와 쉽게 연결
- 20% 데이터는 정형 데이터
- SQL로 데이터 쿼리
  - ACID
    - 트랜잭션이 안전하게 수행된다는 것을 보장하기 위한 성질
    - Atomicity(원자성):
    - Consistency(일관성)
    - Isolation(독립성)
    - Durability(지속성)

Semi-structured data
- structured data와 유사하지만 더 자유로움 -> 유연성이 더 좋음
- 다른 타입들
- 그룹화할 수 있지만 더 많은 일을 해야 함
  - 유연성에 대한 비용
- NoSQL DB에 저장
- JSON, XML, YAML 파일 형식 사용

Unstructured data
- 모델을 따르지 않음, row와 column 형식이 아닌 데이터
- 검색과 구성이 어려움
- 텍스트, 사운드, 사진, 영상
- 일반적으로 data lake에 저장되지만 data warehouse 또는 DB에도 나타날 수 있음
- 대부분의 데이터는 구조화되지 않음
- 머신러닝을 사용하여 검색 및 organize

SQL
- Structured Query Language
- Relational Database Management System(RDBMS)
- 한 번에 여러 레코드에 엑세스하고 그룹화, 필터링, 집계 등을 할 수 있음
- 영어와 가까워서 이해하기도 쓰기도 쉬움
- data engineer는 SQL을 사용하여 DB를 생성, 유지함
  ```sql
  CREATE TABLE employees (
      employee_id INT,
      first_name VARCHAR(255),
      last_name VARCHAR(255),
      role VARCHAR(255),
      team VARCHARA(255),
      full_time BOOLEAN,
      office VARCHAR(255)
  )
  ```
- data scientist는 SQL을 사용하여 DB를 쿼리함
  ```sql
  SELECT first_name, last_name
  FROM employees
  WHERE role LIKE '%Data%'
  ```

Database Schema
- DB는 많은 테이블로 이루어짐
- 데이터베이스의 구조와 제약조건에 관해 전반적인 명세를 기술한 것
- schema는 테이블의 관계 방식을 제어

SQL 종류
- SQLite
- MySQL
- PostgreSQL
- Oracle SQL
- SQL Server

Data warehouses와 Data lake
- Data lake
  - 모든 raw data를 저장 -> 처리되지 않았기에 지저분함
  - petabytes ->  $$10^{15}$$ bytes
  - 모든 형태의 데이터가 들어감 -> structure를 따지지 않음 -> storage
    - 데이터를 저장하는 도중에 어떤 모델도 적용하지 않음
  - 효율적
  - 분석하기 어려움
  - 데이터 카탈로그를 최신 상태로 유지해야 함
  - data scientist가 빅데이터에서 실시간 분석에 사용

- Data warehouse
  - 모든 데이터를 저장하지 않고 특정 용도로 사용되는 데이터 저장
  - 상대적으로 적은 용량
  - structured data 형식 적용 -> database
  - update하는데 더 많은 비용 소모
  - 데이터 분석에 최적화되어 있음
  - data analyst가 집계 및 요약과 같은 읽기 전용 쿼리, 미리 정의된 쿼리가 아닌 즉석에서 사용되는 쿼리(Ad-hoc)에 사용

Data catalog
  - 데이터 출처가 무엇인가, 어떻게 사용하는가, 유지 관리 책임자가 누구인가, 얼마나 자주 업데이트 되는가를 알 수 있음
  - 데이터 governance(데이터 보안, 가용성, 사용성, 무결성을 보장하기 위해 수행하는 모든 작업) 측면에서 우수
  - 예상하지 못한 상황이 발생한 경우, 데이터를 처음 수집하며 분석 할 때 프로세스의 재현성 보장
  - 데이터 레이크의 저장 방식은 유연하기 때문에 늪이 되는 것을 방지하기 위해 필요
  - 카탈로그를 만들면 좋은 이유
    - Reliability
    - Autonomy
    - Scalability
    - Speed
  
Database와 data warehouse 차이
  - DB는 컴퓨터에 저장되는 구조화된 데이터의 모음
  - 웨어하우스는 DB의 유형 중 하나
  
## Moving and processing data

Data processing
- raw한 데이터를 의미있는 정보로 변환하는 것
- 원하지 않은 정보 지우기
- 프로세스 및 네트워크 비용, 메모리 최적화
- 다른 타입으로 변환
- 데이터 재구성
  - e.g. data lake to data warehouse
- 특정 schema 또는 structure에 맞춤
- 생산성 증가

Data Engineer가 어떻게 데이터를 처리하는가
 - 데이터 가공, cleaning, tidying 
   - cleaning: 잘못된 정보를 고치거나 제거해서 데이터를 깨끗하게 하는 것
   - tidying: 데이터를 분석하기 쉬운 모양새로 정리하는 것
   - 자동화되어야 함
   - 언제든지 준비되어 있어야 함
 - structured DB에 정상적으로 데이터를 저장
 - DB 테이블 맨 위에 view 생성
   - view는 데이터에 대한 저장된 쿼리의 출력
 - 두 테이블을 결합하여 DB에 view를 만들어야 함
 - DB 성능 최적화
   - e.g. 데이터를 더 쉽게 검색할 수 있도록 인덱싱

Scheduling
- data processing에서 모든 작업에 적용 가능
- 데이터 엔지니어링 시스템의 접착제
- 작은 조각 하나 하나가 함께 작동하는 방식을 정리
- 특정 순서로 작업 실행, 모든 종속성을 올바르게 해결
- 리눅스 작업 스케줄러 crontab

붙이는 방법
- 수동
- 특정 시간에 자동으로 실행
- 특정 조건이 충족되면 자동으로 실행
  - sensor scheduling

데이터가 수집되는 방식
- Batches
  - 특정 간격으로 그룹별로 전송
  - 종종 저렴
    - 리소스가 다른 곳에서 사용되지 않을 때 예약할 수 있기 때문
- Streams
  - 개별 데이터 레코드가 업데이트되면 파이프라인을 통해 전송

Scheduling tools
- Apache Airflow
- Luigi

Parallel computing
- 병렬 컴퓨팅 또는 병렬 처리
- 모든 최신 데이터 처리 도구의 기초 
- 기억력 문제, 처리 능력 
- 빅데이터 처리 도구가 작업을 수행
  - 여러 개의 작은 하위 작업으로 나누고 작업들을 여러 컴퓨터에 배포

Parallel coumputing의 이익과 리스크
- 직원 = 처리 단위
- 이점
  - 추가 처리 능력  
  - 메모리 사용량이 상대적으로 적음
    - 한 컴퓨터의 메모리에 모든 데이터를 로드하지 않고 분할하여 하위 집합들을 다른 컴퓨터의 메모리에 로드
- 리스크
  - 데이터를 이동하면 비용 발생
  - 커뮤니케이션 시간 발생
    - 분할한 하위 작업의 결과를 다시 병합 -> 프로세스간의 통신 필요

Cloud computing
- 개인 서버
  - 구매
  - 공간 필요
  - 전기 요금, 유지 관리 비용
  - 데이터 처리 작업은 집중적이고 지속적으로 발생X
    - 최대일 때 충분한 처리 능력 제공 필요
    - 데이터 처리 작업을 하지 않을 때 프로세싱 파워 사용되지 않음 -> 리소스 낭비
- 클라우드
  - 서버 임대
  - 공간 필요X
  - 필요한 자원을 필요할 때 사용
  - 서버가 사용자와 가까울수록 사용할 때 발생하는 지연 시간 줄어듬
    - 글로벌 고객 기반이면 글로벌 서버가 필요
  - DB 안전성
    - 다른 위치에 데이터 복제
  - 민감한 데이터를 조작할 때의 위험
    - 클라우드 제공 업체가 해결
  - 종류: AWS, Azure, GCP
    - File storage: AWS S3, Azure Blob Storage, Google Cloud Storage
    - Computation: AWS EC2, Azure Virtual Machines, Google Compute Engine
    - Databases: AWS RDS, Azure SQL database, Google Cloud SQL

Multicloud
- 동일한 기업에서 모든 서비스를 받을 필요X
- 공급업체에 대한 의존도를 줄임
- 비용 최적화
- 지역적인 법률 때문에 필요할 수도 있음
- 재난에 대비
  - e.g. 2017 AWS 운영 중단으로 인해 인터넷이 중단됨
  - 대처 방법
    - 리전을 복사하는 경우도 있다고 한다. 
- 기업은 많은 서비스를 통합하여 소비자를 고정하려 함
- 일부 서비스들은 호환되지 않을 수 있음
- 보안 및 governance 관리가 어려워짐