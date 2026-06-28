---
title: 'RecSys 행동 이벤트 플랫폼'
description: Synerise RecSys 2025 행동 로그를 Java, Kafka, Flink, Elasticsearch 기반 event-to-feature pipeline으로 재해석한 백엔드 프로젝트
role: Backend Engineer
timeline: May 2026 - Jun 2026
stack: [Java, Python, Kafka, Flink, Elasticsearch, Docker, Kubernetes]
category: Personal Project
image: /img/projects/recs-behavior-platform/architecture.png
hide_table_of_contents: false
---

{/* truncate */}

# RecSys 행동 이벤트 플랫폼

## 왜 이 프로젝트를 만들었는가

추천 시스템을 공부하다 보니 모델 자체보다 그 앞뒤의 시스템이 궁금해졌다. 사용자의 행동 로그가 어떤 형태로 들어오고, 그 로그를 어떻게 profile로 집계하고, serving API에서는 그 profile을 어떻게 읽어 후보를 만드는지 직접 설계해보고 싶었다.

데이터는 Synerise RecSys Challenge 2025에서 공개된 행동 로그를 사용했다. 원래는 Universal Behavioral Profiles를 만드는 대회 데이터지만, 나는 이 로그를 추천 모델 학습 문제가 아니라 event pipeline 입력으로 다시 해석했다. Python으로 원본 row를 normalized event로 바꾸고, Java, Kafka, Flink, Elasticsearch를 거쳐 사용자 behavior profile과 후보 상품 feature를 조회하는 작은 event-to-feature pipeline을 만들어봤다.

## 데이터와 전처리

사용한 데이터는 Synerise가 공개한 [RecSys Challenge 2025 Universal Behavioral Modeling Dataset](https://www.recsyschallenge.com/2025/)이다. 이 데이터셋은 익명화된 실제 사용자 interaction log로 구성되어 있고, 대회 목표는 여러 downstream task에 재사용할 수 있는 Universal Behavioral Profiles를 만드는 것이다. 공식 설명 기준 데이터에는 product buy, add to cart, remove from cart, page visit, search query event와 product attributes가 포함된다.

데이터셋 전체 규모는 꽤 크다. 공식 페이지 기준으로 product buy는 약 170만 건, add to cart는 약 520만 건, remove from cart는 약 170만 건, page visit은 약 1억 5천만 건, search query는 약 960만 건이고, unique user는 약 1,900만 명이다. 라이선스는 CC BY-NC 4.0이다.

이 프로젝트에서는 전체 데이터를 그대로 학습에 쓰는 대신, replay와 smoke 검증이 가능한 slice로 잘라 event pipeline 입력으로 바꿨다. 핵심 변환은 아래와 같다.

| 원본 | 원본 필드 | 프로젝트에서 만든 형태 |
|---|---|---|
| `product_buy` | `client_id`, `timestamp`, `sku` | `event_type=product_buy`인 normalized behavior event |
| `add_to_cart` | `client_id`, `timestamp`, `sku` | `event_type=add_to_cart`인 normalized behavior event |
| `remove_from_cart` | `client_id`, `timestamp`, `sku` | `event_type=remove_from_cart`인 normalized behavior event |
| `product_properties` | `sku`, `category`, `price`, `embedding` | product feature document |

Python normalizer는 원본 row를 `event_id`, `event_type`, `client_id`, `event_time`, `sku`, `source`, `schema_version`을 가진 NDJSON event로 바꾼다. `event_id`는 source, event type, client id, event time, sku를 조합해 deterministic하게 만들었다. 이 덕분에 같은 원본 row를 다시 replay해도 같은 idempotency key가 만들어진다.

`product_properties`는 별도의 product feature document로 변환했다. 이 문서는 Elasticsearch에 저장되고, candidate API가 behavior profile의 top sku를 읽을 때 category, price bucket, freshness 같은 후보 상품 metadata를 함께 조회하는 데 쓴다.

## 문제 정의

추천 시스템 주변 인프라에서 핵심이 되는 문제는 아래였다.

- 같은 원본 row를 다시 replay해도 같은 event id가 만들어져야 한다.
- 같은 event가 중복 소비되어도 profile count가 부풀면 안 된다.
- 너무 늦게 도착한 event는 최신 profile을 되돌리지 않아야 한다.
- profile과 product feature를 Elasticsearch에 저장해 API가 조회할 수 있어야 한다.
- 장애나 재시작 뒤에도 replay, checkpoint, dead-letter 기준을 설명할 수 있어야 한다.

이 프로젝트에서는 완전한 추천 모델이나 production cluster를 만들었다고 주장하지 않는다. 대신 추천 serving path 앞단의 event normalization, profile aggregation, feature lookup, failure accounting을 구현하고 smoke로 검증했다.

## 전체 흐름

<div className="project-architecture-frame">
  <img
    className="project-architecture-image"
    src="/img/projects/recs-behavior-platform/architecture.png"
    alt="RecSys event-to-feature pipeline architecture"
  />
</div>

```text
Synerise-style rows
  -> Python normalizer
  -> normalized behavior events
  -> Kafka topic
  -> Flink keyed aggregation
  -> Elasticsearch behavior profile store
  -> Java profile and candidate API
```

데이터셋의 원래 목적은 Universal Behavioral Profiles 모델링이다. 이 프로젝트에서는 그 로그를 추천 인프라 관점으로 바꿔 봤다. Python normalizer가 product event를 안정적인 event contract로 만들고, Java API와 Flink job은 client id 기준 profile state를 materialize한다.

## 구현한 범위

### Event contract와 replay

Python normalizer는 Synerise-style product row를 normalized event JSON으로 바꾼다. event id는 source, event type, client id, event time, sku를 사용해 deterministic하게 만들었다. 이 기준 덕분에 같은 row replay가 같은 idempotency key를 갖는다. page visit과 search query는 데이터셋 맥락에는 포함되지만, 현재 public project 문서에서 설명하는 실행 경로는 product event와 product feature를 중심으로 닫았다.

Java 쪽에서는 `BehaviorEvent` record와 loader를 만들어 같은 contract를 읽도록 했다. `client_id`는 Kafka key이면서 Flink keyed state boundary다.

### Profile aggregation

초기에는 in-memory projector로 event count, event type count, distinct sku count, last event time, top sku를 계산했다. 이 path가 baseline이 되었고, 이후 Kafka input, Flink aggregation, Elasticsearch profile store로 한 단계씩 교체했다.

Flink aggregation에서는 duplicate event id를 suppress하고, keyed max event time보다 10분 초과로 늦은 event는 profile snapshot에 반영하지 않게 했다. 너무 늦은 event는 configured dead-letter path가 있으면 Kafka dead-letter topic으로 보낸다.

### API와 feature serving

Java HTTP API는 `GET /users/{client_id}/behavior-profile`로 profile을 반환한다. 이후 product feature path를 추가해 `GET /features/products/{sku}`와 `GET /users/{client_id}/candidates`도 만들었다.

Candidate API는 아직 ranking model이 아니다. behavior profile의 top sku 순서를 유지하면서 product feature freshness와 category affinity를 deterministic score에 반영하는 prototype이다. 그래서 글에서도 "full recommendation serving"이 아니라 "feature-backed deterministic candidate scoring prototype"으로 구분한다.

### 운영성

이 프로젝트의 중요한 부분은 실패 경로를 작게라도 남긴 것이다.

- Java file ingestion에서 invalid event를 dead-letter로 capture
- Kafka dead-letter sink와 publisher boundary 구현
- Flink late-event exclusion과 Kafka dead-letter output smoke
- `GET /metrics/pipeline`으로 dead-letter count와 late-event count 노출
- Elasticsearch-backed latest pipeline metrics snapshot 저장
- kind 기반 API, Kafka, Elasticsearch, replay worker, standalone Flink runtime 검증
- local PVC-backed Flink recovery variant와 TaskManager, JobManager restart proof

## 해결 과정에서 생긴 문제와 결정

첫 번째 문제는 대회 데이터를 서비스 event처럼 다시 해석하는 일이었다. 원본 row는 모델 학습용 행동 로그에 가깝기 때문에, 그대로 Kafka에 넣으면 event contract가 애매해진다. 그래서 Python normalizer를 먼저 만들고, source, event type, client id, event time, sku로 deterministic event id를 만들었다. 같은 row를 replay해도 같은 id가 나오게 한 것이 이후 idempotency 기준이 됐다.

두 번째 문제는 aggregation의 중복과 late event였다. 같은 event를 두 번 소비하면 event count와 top sku가 틀어지고, 너무 늦게 온 event를 반영하면 최신 profile이 과거 상태로 되돌아갈 수 있다. Flink keyed aggregation에서는 seen event id를 기준으로 duplicate를 suppress하고, keyed max event time보다 10분 넘게 늦은 event는 profile에는 반영하지 않고 dead-letter로 분리했다.

세 번째 문제는 local 검증 범위였다. 단순 unit test만으로는 Kafka, Flink, Elasticsearch, API 사이의 contract가 맞는지 알기 어렵다. 그래서 처음에는 in-memory projector로 기준 동작을 만들고, 이후 Kafka vertical slice, Flink to Elasticsearch smoke, candidate API smoke, kind 기반 recovery smoke를 순서대로 붙였다. 각 단계는 하나의 실패 원인만 드러나도록 좁게 나눴다.

## 검증

대표 검증은 아래와 같다.

| 검증 | 내용 |
|---|---|
| `bash scripts/test.sh` | Python test, Compose helper test, Kubernetes manifest validator, image packaging validator, Flink recovery policy validator, Java test 92개 통과 |
| `bash scripts/smoke-local-vertical-slice.sh` | NDJSON에서 Java API profile 조회까지 local path 검증 |
| `bash scripts/smoke-kafka-vertical-slice.sh` | Kafka publish/consume 이후 Java API profile 조회 검증 |
| `bash scripts/smoke-flink-kafka-elasticsearch-vertical-slice.sh` | Flink output을 Elasticsearch에 저장하고 API가 profile을 읽는 path 검증 |
| `bash scripts/smoke-candidate-vertical-slice.sh` | behavior profile과 product feature를 결합한 candidate API 검증 |
| `bash scripts/smoke-kind-flink-job-profile.sh` | standalone Flink job이 Elasticsearch profile을 쓰고 reader-only API가 조회하는 path 검증 |
| `bash scripts/smoke-kind-flink-jobmanager-recovery.sh` | JobManager restart 이후 job running 상태와 API profile 유지 확인 |

kind replay worker smoke에서는 fixture event를 Kafka로 publish한 뒤 API가 `client_id=123`, `event_count=2`, `distinct_sku_count=2`, `top_skus=[456,789]`를 반환하는 것을 확인했다.

## References

- [RecSys Challenge 2025](https://www.recsyschallenge.com/2025/)
- [RecSys Challenge 2025 by Synerise summary](https://recsys.synerise.com/summary)
- [Synerise/recsys2025 repository](https://github.com/Synerise/recsys2025)
