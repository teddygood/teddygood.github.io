---
title: 'Data Engineering 스터디 15주차'
date: '2021-11-24'
tags: ["Data Engineering"]
draft: false

description: PseudoLab Data Science Fellowship 1기

sidebar_position: 1
---

# Introduction to PySpark

## Getting to know PySpark

### Spark

- Spark
  - cluster computing을 위한 플랫폼
  - 각 노드를 컴퓨터로 생각하여 데이터와 계산을 여러 노드가 있는 cluster에 분산시킬 수 있음 
  - 데이터를 분할하면 각 노드가 적은 양의 데이터로만 작동하므로 매우 큰 데이터셋으로 작업하기 쉬워짐
  - 데이터 처리와 계산이 cluster의 노드에서 병렬로 수행됨
    - 특정 유형의 프로그래밍 작업을 빠르게 할 수 있음
    - 컴퓨팅 성능이 향상될수록 복잡성은 더 커짐
  - 스파크 사용 전 고려해볼 점
    - 컴퓨터 한 대에서 작업하기에는 데이터가 너무 큰가?
    - 계산을 쉽게 병렬화할 수 있는가?
- 중심 컴퓨터를 master라고 정의하며 master에 연결되어 있는 컴퓨터를 worker라고 정의
  - 연결되어 있는 worker에 데이터를 보내고 계산을 실행하도록 함
- 빅데이터와 같이 복잡한 작업을 위해 설계되어 있기 때문에 작은 작업을 할 때는 효율적이지 않음

- PySpark에서 Spark cluster에 연결하는 방법
  - `sc`라고 불리는 `SparkContext` class의 instance를 생성
    ```python
    # Verify SparkContext
    print(sc)

    # Print Spark version
    print(sc.version)
    ```
  
### Spark Data Structure

- 스파크의 핵심 자료구조는 `Resilient Distributed Dataset(RDD)`
  - RDD는 직접 작업하기 어렵기 때문에 RDD 위에 구축된 Spark `DataFrame`을 사용
- `DataFrame`
  - SQL table과 유사
  - 이해하기 쉬우며 RDD보다 복잡한 작업에 더 최적화가 되어 있음
  - `RDD`를 사용할 때는 query를 최적화하는 좋은 방법을 찾는 것은 data scientist가 해야 하지만, `DataFrame`은 죄적화 기법이 많이 내장되어 있음
  - DataFrame을 사용하려면 `SparkContext` 클래스에서 `SparkSession` 객체를 생성해야 함
    - `SaprkContext`는 cluster에 대한 연결, `SparkSession`은 해당 연결에 대한 interface라고 생각할 수 있음
    - 다수의 SparkSession과 SparkContext를 생성하면 문제가 될 수 있기 때문에 가장 좋은 방법은 `SparkSession.builder.getOrCreate()` 메서드를 사용 
      - SparkSession이 있으면 그걸 사용하고 없으면 새로 생성
    - SparkSession 생성
      ```python
      # Import SparkSession from pyspark.sql
      from pyspark.sql import SparkSession
      # Create my_spark
      spark = SparkSession.builder.getOrCreate()
      # Print my_spark
      print(spark)
      ```
    - SparkSession에는 cluster의 모든 데이터를 리스트로 나열하는 `catalog`라는 attribute가 있으며, 다양한 정보를 추출하는 메서드가 존재
      - cluster에 있는 모든 테이블의 이름을 list로 return하는 listTables() 메서드 사용
        ```python
        print(spark.catalog.listTables())
        ```
  - DataFrame의 장점 중 하나는 Spark cluster의 테이블에서 SQL query를 사용할 수 있다는 것
    - `sql()` 메서드 사용
      - DataFrame 반환
      ```python
      # Don't change this query
      query = "FROM flights SELECT * LIMIT 10"

      # Get the first 10 rows of flights
      flights10 = spark.sql(query)

      # Show the results
      flights10.show()
      ```
  - Pandas 사용
    - `toPandas()`: 결과를 pandas DataFrame으로 변환
      ```python
      # Don't change this query
      query = "SELECT origin, dest, COUNT(*) as N FROM flights GROUP BY origin, dest"

      # Run the query
      flight_counts = spark.sql(query)

      # Convert the results to a pandas DataFrame
      pd_counts = flight_counts.toPandas()

      # Print the head of pd_counts
      print(pd_counts.head())
      ```
    - `createDataFrame()`: pandas DataFrame을 사용하고 Spark DataFrame을 반환
      - 원본에는 변화가 없기 때문에 `createTempView()` 메서드를 사용
        - 이 방법도 임시적인 table을 사용하는 방법이기 때문에 특정 SparkSession에서만 사용 가능
        - 대신 `createOrReplaceTempView()` 메서드 사용
          - 이전에 아무것도 없었으면 임시 테이블을 안전하게 생성하고 정의된 경우면 기존 테이블을 업데이트함
          - 중복으로 테이블을 만드는 문제를 발생시키지 않음
      ```python
      # Create pd_temp
      pd_temp = pd.DataFrame(np.random.random(10))

      # Create spark_temp from pd_temp
      spark_temp = spark.createDataFrame(pd_temp)

      # Examine the tables in the catalog
      print(spark.catalog.listTables())

      # Add spark_temp to the catalog
      spark_temp.createOrReplaceTempView('temp')

      # Examine the tables in the catalog again
      print(spark.catalog.listTables())
      ```
    - `read()` 메서드를 사용하여 csv 읽기
      ```python
      # Don't change this file path
      file_path = "/usr/local/share/datasets/airports.csv"

      # Read in the airports data
      airports = spark.read.csv(file_path, header=True)

      # Show the data
      airports.show()
      ```

## Manipulating data

- Spark DataFrame은 immutable
  - 덮어쓰기를 하려면 반환된 Dataframe을 다시 할당해야 함
  - `withColumn()` 메서드를 사용하여 Column 단위 연산 사용
    - 새로운 column 이름, 새로운 column
    ```python
    df = df.withColumn("newCol", df.oldCol + 1)
    ```
- SQL에는 WHERE 문이 있듯이, Spark DataFrame에는 `filtering()` 메서드 존재
  - WHERE 문에 들어갈 수 있는 모든 표현을 허용
  ```python
  flights.filter("air_time > 120").show()
  flights.filter(flights.air_time > 120).show()
  ```

### Selecting 

- Spark에서는 SELECT 대신 `select()` 메서드 사용
  - `withColumn()`과 차이점
    - `select()`는 지정한 column만 return
    - `withColumn()`은 사용자가 정의한 column 말고도 DataFrame의 모든 column을 return
  ```python
  # Select the first set of columns
  selected1 = flights.select("tailnum","origin", "dest")

  # Select the second set of columns
  temp = flights.select(flights.origin, flights.dest, flights.carrier)

  # Define first filter
  filterA = flights.origin == "SEA"

  # Define second filter
  filterB = flights.dest == "PDX"

  # Filter the data, first by filterA then by filterB
  selected2 = temp.filter(filterA).filter(filterB)
  ```
  - column 단위의 연산 가능
    ```python
    flights.select(flights.air_time/60)
    ```
  - `alias()` 메서드를 사용하면 SQL의 `as`처럼 선택한 column의 이름을 재설정할 수 있음 
    ```python
    flights.select((flights.air_time/60).alias("duration_hrs"))
    ```
  - SQL 표현식을 문자열로 사용할 수 있는 `selectExpr`을 사용하여 `SELECT`를 사용할 수도 있음

### Aggregating

- min(), max() 같은 aggregation 메서드도 .groupBy() 메서드로 `<pyspark.sql.group.GroupedData>`를 만든 후 사용
  ```python
  df.groupBy().min("col").show()
  ```
- 한 줄로 표현하는 것이 아니라 나눠서도 사용 가능
  ```python
  by_plane = flights.groupBy("tailnum")
  by_plane.count().show()
  ```
- `groupBy()` 대신 `agg()`를 사용하여 aggregation 표현식 전달
  - `pyspark.sql.functions` submodule의 aggregation 함수 사용
    ```python
    import pyspark.sql.functions as F

    by_month_dest.agg(F.stddev("dep_delay")).show()
    ```

### Joining

- PySpark에서는 `join()` 메서드 사용
  - DataFrame과 결합할 다른 DataFrame, 어디에서 join할 지 결정하는 `on`, 방법을 결정하는 how
  ```python
  flights_with_airports = flights.join(airports, on="dest", how="leftouter")
  ```

## Getting started with machine learning pipelines

### Machine learning pipeline

- pyspark.ml
  - `Transformer`: DataFrame을 column이 추가도니 다른 DataFrame으로 변환해주는 알고리즘들을 의미
    - `transform()` 메서드 사용
  - `Estimator`: Transformer에 의해 생성된 DataFrame을 사용하여 학습을 진행하고 모델을 생성하는 알고리즘들
    - `fit()` 메서드 사용

### Data type

- Spark는 모델링을 할 때 numeric data만 다룰 수 있음
- Spark DataFrame은 데이터를 가져올 때 각 column에 어떤 타입인지 추측을 함
  - Spark가 제대로 추측하지 못할 때는 `withColumn()` 메서드와 `cast()` 메서드를 같이 사용
    - `cast()`는 column에서 작동하고 `withColumn()`은 DataFrame에서 작동
    ```python
    dataframe = dataframe.withColumn('column_name', dataframe.column_name.cast('integer'))
    ```
    - 데이터를 boolean 표현식을 사용하여 True/False로 나누고 integer로 바꾼 후 missing value를 삭제하는 예시
      ```python
      # Create is_late
      model_data = model_data.withColumn("is_late", model_data.arr_delay > 0)

      # Convert to an integer
      model_data = model_data.withColumn("label", model_data.is_late.cast('integer'))

      # Remove missing values
      model_data = model_data.filter("arr_delay is not NULL and dep_delay is not NULL and air_time is not NULL and plane_year is not NULL")
      ```

### Strings and factors

- Spark는 모델링을 할 때 numeric data 밖에 처리하지 못 하기 때문에 string data를 사용하려면 데이터를 수정해야 함
  - one-hot vector/encoding
    - `pyspark.ml.feature` submodule에 기능이 내장되어 있음
      - `pyspark.ml.feature.StringIndexer`
        - string column이 있는 DataFrame을 사용하고 고유한 string을 숫자에 mapping하는 Estimator
        - DataFrame를 입력 받아 Transformer를 반환하고 mapping한 것을 metadata로 첨부한 후, string column에 해당하는 numeric column이 존재하는 새로운 DataFrame을 반환
      - `pyspark.ml.feature.OneHotEncoder`를 사용하여 one-hot encoding 진행
        - Estimator를 생성 후 Transformer를 사용하는 StringIndexer와 동일하게 작동
    - 단어 집합의 크기를 벡터의 dimension으로 하고 표현하고 싶은 단어의 index에 1, 다른 index에 0을 부여하는 벡터 표현 방식
    - example
      ```python
      # Create a StringIndexer
      carr_indexer = StringIndexer(inputCol="carrier", outputCol="carrier_index")
      
      # Create a OneHotEncoder
      carr_encoder = OneHotEncoder(inputCol="carrier_index", outputCol="carrier_fact")
      ```

### Assemble a vector

- 파이프라인의 마지막 단계는 feature를 포함하는 모든 열을 단일 열로 결합하는 것
  - `VectorAssembler`라는 `Transformer`를 사용하여 벡터화
    ```python
    vec_assembler = VectorAssembler(inputCols=["month", "air_time", "carrier_fact", "dest_fact", "plane_age"], outputCol="features")
    ```

### Create the pipeline

```python
# Import Pipeline
from pyspark.ml import Pipeline

# Make the pipeline
flights_pipe = Pipeline(stages=[dest_indexer, dest_encoder, carr_indexer, carr_encoder, vec_assembler])
```

### Test vs Train

- 가장 중요한 단계는 data를 test set과 train set으로 나누는 단계
- Spark에서는 transformer 진행 후 데이터를 분할

### Transform and Split the data

```python
# Fit and transform the data
piped_data = flights_pipe.fit(model_data).transform(model_data)

# Split the data into training and test sets
training, test = piped_data.randomSplit([.6, .4])
```

## Model tuning and selection

### Logistic regression

- 선형 회귀(linear regression)
  - 종속변수 Y와 한 개 이상의 독립변수 X와의 선형 상관관계를 모델링하는 회귀분석 기법
- 로지스틱 회귀(logistic regression)
  - 데이터가 어떤 범주에 속할 확률을 0에서 1 사이의 값으로 예측하고 그 확률에 따라 가능성이 더 높은 범주에 속하는 것으로 분류해주는 지도 학습 알고리즘
  - linear regression과 매우 유사
    - 선형 회귀와는 조금 다르게 종속 변수가 범주형 데이터를 대상으로 하며 입력 데이터가 주어졌을 때 해당 데이터의 결과가 특정 분류로 나뉘기 때문에 일종의 분류 기법으로 보기도 함 
- PySaprk에서 사용
  - `pyspark.ml.classification`에 있는 `LogisticRegression` Estimator 사용
  ```python
  # Import LogisticRegression
  from pyspark.ml.classification import LogisticRegression

  # Create a LogisticRegression Estimator
  lr = LogisticRegression()

### Cross validation

- train set으로 모델 훈련, test set으로 모델 검증 
- test set에 overfitting하게 되므로 실제 데이터를 사용하여 예측을 수행하면 좋지 않은 결과가 나옴
  - 교차 검증(cross validation)을 사용하여 해결
    - train set을 train set + validation set으로 분리한 후 validation set을 사용하여 검증하는 방식
- 이번 예시에서는 k-fold cross validation 사용

### Create the evaluator

- 모델 선택을 위한 교차 검증을 수행할 때 가장 필요한 것은 서로 다른 모델을 비교하는 것
  - `pyspark.ml.evaluation`에 비교를 위한 class들이 있음
    - binary classificaion model example
      ```python
      # Import the evaluation submodule
      import pyspark.ml.evaluation as evals

      # Create a BinaryClassificationEvaluator
      evaluator = evals.BinaryClassificationEvaluator(metricName="areaUnderROC")
      ```

### Make a grid

- 최적의 hyperparameter를 찾기 위해 생성
  - `pyspark.ml.tuning`의 `ParamGridBuilder` 사용
  - 교차 검증에 사용할 수 있는 그리드를 생성하려면 `addGrid()`와 `build()` 메서드를 사용해야 함
```python
# Import the tuning submodule
import pyspark.ml.tuning as tune

# Create the parameter grid
grid = tune.ParamGridBuilder()

# Add the hyperparameter
grid = grid.addGrid(lr.regParam, np.arange(0, .1, .01))
grid = grid.addGrid(lr.elasticNetParam, [0, 1])

# Build the grid
grid = grid.build()
```

### Make the validator

- `pyspark.ml.tuning`에는 cross validation을 진행하는 `CrossValidator`가 존재
  - 이 Estimator는 fit하려는 model, 생성한 hyperparameter의 grid, 모델을 비교하는 데 사용하는 evaluator를 사용

```python
## Create the CrossValidator
cv = tune.CrossValidator(estimator=lr,
               estimatorParamMaps=grid,
               evaluator=evaluator
               )
```

### Fit the model

```python
# Fit cross validation models
models = cv.fit(training)

# Extract the best model
best_lr = models.bestModel
```

```python
# Call lr.fit()
best_lr = lr.fit(training)

# Print best_lr
print(best_lr)
```

### Evaluating binary classifiers

- AUC 또는 area under the ROC(receiver operating characteristic) curve라고 불리는 binary classification 알고리즘 사용
  - binary classifier는 두 가지의 클래스를 분류할 수 있는 분류기
  - 이진 분류기의 성능을 평가하는데 사용하는 것 중 하나가 AUC
  - ROC curve의 아래쪽 면적
  - 아래쪽 면적이 적을수록 많이 틀림
  - 1에 가까울수록 좋은 모델

```python
# Use the model to predict the test set
test_results = best_lr.transform(test)

# compute the AUC.
print(evaluator.evaluate(test_results))
```