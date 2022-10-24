---
title: 'Data Engineering 스터디 16주차'
date: '2021-12-06'
# tags: ["Data Engineering"]
draft: false

description: PseudoLab Data Science Fellowship 1기

sidebar_position: 1
---

# Building Data Engineering Pipelines in Python

16주차에 들었던 강의는 저희가 수강하고 있는 career track인 `Data Engineer with Python`에서 사라진 course입니다. 총 6개의 course가 사라졌으며 아직까지 Old Track으로 들을 수 있지만, 스터디에서 "New Track으로 업데이트 되면서 사라지는 강의들은 넘어가자."라고 결정되었기 때문에 16주차는 더이상 정리하지 않습니다. 또한, 이제 곧 연말이라 저희가 진행하던 Datacamp 스터디는 잠시 쉬고, 스터디 시작한지 20주인 2022년 1월 6일에 `Introduction to AWS Boto in Python`로 다시 시작합니다.

## Ingesting Data

### Data lake

- 오늘날 데이터의 규모와 데이터가 흐르는 속도는 `data lake`의 부상으로 이어짐
  - 여러 시스템으로 구성되며 일반적으로 여러 영역으로 구성됨
    - 파이프라인은 설계하는 사람에 따라 언제든지 달라질 수 있으며, 이 과정이 정의되어 진 것이 아님
    - Landing
      - 운영체제에서 data lake로 데이터를 가져오는 과정을 ingestion이라고 함
      - 예측(predictive) 알고리즘과 마케팅 팀을 위한 A/B test dashboard 등 데이터 레이크 위에 다양한 종류의 서비스를 구축
      - raw data
    - Clean
      - 데이터를 변환할 때, 변환의 중복을 방지하기 위해 하는 작업
    - Business
      - cleaning 된 데이터에 또 다른 변환 적용
      - 이탈 할 가능성이 있는 고객 예측
      - 도메인마다 특정 데이터를 business layer에 데이터 저장
    - `data lake`를 탐색하기 위해 일반적으로 `data catalog`가 제공됨
      - 데이터 위치와 저장되는 형식에 대한 세부 정보를 추상화
      - data catalog를 참조하면 코드를 하드코딩 하지 않아도 됨
        - `하드코딩`
          - 데이터를 코드 내부에 직접 입력하는 것
          - 기술적으로는 데이터가 실행 바이너리(exe 파일 등)에 합쳐져 있는 상태
          - 주로 파일 경로, URL 또는 IP 주소, 비밀번호, 화면에 출력될 문자열 등이 대상

- 일반적으로 대규모 batch로 데이터를 처리하는 pipeline은 schedule에 따라 야간에 처리할 수도 있음
- ETL pipeline: Extract, Transform, Load

### Singer

- 많은 데이터 소스와 연결할 수 있는 오픈소스
- 데이터를 수집하는 방법은 다양해서 조직 내에서 프로세스가 표준화 되어 있으면 편리
- The open-source standard for writing scripts that move data.
- data extraction script와 data loading script가 JSON 기반의 데이터 형식을 사용하여 stdout을 통해 통신
  - extraction script는 `tap`, loading script는 `target`이라고 불림
  - 어떤 프로그래밍 언어로든지 작성할 수 있음
- 데이터를 한 장소에서 다른 곳으로 이동하는 작은 데이터 파이프라인을 만들기 위해 쉽게 mix or match 할 수 있음
- tap과 target은 특정 stream으로 송신되고 읽히는 `SCHEMA`, `STATE`, `RECORD`의 3가지 메시지를 사용하여 통신
  - stream은 downstream에서 선택할 수 있는 메시지를 전송하는 가상 위치
    - 주제에 따라 데이터를 분할하기 위해 다른 stream을 사용할 수 있음
  - SCHEMA 메시지는 structured data에 주석을 달고 검증할 수 있는 JSON schema 형태이어야 함
    - 속성 또는 필드의 데이터 유형 지정
    - $id, $schema를 통해 스키마를 고유하게 지정할 수 있으며,사용중인 JSON 스키마 버전을 다른 사용자에게 알려주는 기능을 함
    - example
      ```python
      columns = {"id","name","age","has_children"}
      users = {(1, "Adrian", 32,False),
              (2, "Ruanne", 28, False),
              (3, "Hillary", 29, True)}
      json_schema = {
          "properties": {"age": {"maximum": 130,
                              "minimum": 1,
                              "type": "integer"},
                      "has_children": {"type": "boolean"},
                      "id": {"type": "integer"},
                      "name": {"type": "string"}},
          "$id": "http://yourdomain.com/schemas/my_user_schema.json",
          "$schema": "http://json-schema.org/draft-07/schema#"
      }
      ```
    - write_schema 사용
      - schema, 스트림 이름, key_properties
        - 스트림 이름은 사용자 마음대로 설정 가능
        - key_properties는 스트림의 레코드에 대한 primary key를 구성하는 문자열 list와 같아야 함
        - primary key가 없으면 빈 list로 지정
      - 속한 데이터는 동일한 스트림으로 전송되어야 함
      ```python
      import singer
      singer.write_schema(schema=json_schema,
                          stream_name="DC_employees",
                          key_properties=["id"])
      ```
    - JSON 직렬화(Serialize)
      - 객체를 문자열로 변환하는 작업
      - 파이썬 `json` 라이브러리 사용
      - 단순히 객체를 문자열로 변환
        ```python
        import json

        json.dumps(json_schema["properties"]["age"])
        # '{"maximum": 130, "minimum": 1, "type": "integer"}'
        ```
      - 동일한 문자열을 파일에 쓰기
      ```python
      with open("foo.json", mode="w") as fh:
          json.dump(obj=json_schema, fp=fh) # writes the json-serialized object
      ```

- ingestion pipeline
  - user record를 Singer RECORD 메시지로 변환하기 위해 write record 함수 호출
    ```python
    columns = ("id", "name", "age", "has_children")
    user = {(1, "Adrian", 32, False),
            (2, "Ruanne", 28, False),
            (3, "Hillary", 29, True)}
    ```
    ```python
    singer.write_record(stream_name="DC_employees",
                        record=dict(zip(columns, user.pop())))
    # v{"type": "RECORD", "stream": "DC_employees", "record": {"id": 1, "name": "Adrian", "age": 32, "has_children": false}}
    ```
    - stream_name은 이전에 schema 메시지에서 지정한 스트림과 일치해야 함
  - 두 개의 키가 있는 사전을 사용하여 중첩된 JSON처럼 거의 동일하게 사용
    ```python
    fixed_dict = {"type": "RECORD", "stream": "DC_employee"}
    recored_msg = {**fixed_dict, "record": dict(zip(columns, users.pop()))}
    print(json.dumps(record_msg))
    ```
  - `write_record` 대신 `write_recods`를 사용하면 많은 record를 처리할 수 있음
  - STATE 메시지는 일반적으로 상태를 추적하기 위해 사용되며, 특정 시점에 있는 방식
    - 프로세스의 메모리의 형태
    - tap 실행이 성공적으로 끝나면 state 메시지로 내보는 것
    - `write_state`를 사용하여 내보냄
      ```python
      singer.write_state(value={"max-last-updated-on": some_variable})
      ```

## Creating a data transformation pipeline with PySpark

## Testing your data pipeline

## Managing and orchestrating a workflow
