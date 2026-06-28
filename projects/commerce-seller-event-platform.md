---
title: '커머스 셀러 운영 이벤트 플랫폼'
description: 상품 원장, 재고 변경, outbox, Kafka projection worker, Redis cache invalidation, Elasticsearch search projection을 TDD로 구현한 커머스 백엔드 프로젝트
role: Backend Engineer
timeline: Jun 2026
stack: [Python, Django, MySQL, Kafka, Redis, Elasticsearch, Grafana, Docker]
category: Personal Project
unlisted: true
hide_table_of_contents: false
---

{/* truncate */}

# 커머스 셀러 운영 이벤트 플랫폼

## 왜 이 프로젝트를 만들었는가

커머스 도메인을 공부하다 보니 단순 상품 CRUD보다 운영 중 계속 바뀌는 상태가 더 궁금했다. 상품 정보와 재고는 seller API에서만 끝나지 않고 cache, search index, backoffice 상태 화면까지 퍼진다. 이 흐름을 직접 설계해보고 싶어서 셀러 운영 이벤트를 중심으로 작은 백엔드 시스템을 만들었다.

핵심 질문은 "상품과 재고가 바뀌었을 때 원장, outbox, cache, search read model, 운영자 재처리 경로가 어디까지 일관되게 이어지는가"였다.

## 문제 정의

커머스 백엔드에서는 상품 생성과 재고 변경이 여러 시스템으로 퍼진다. write path가 성공해도 cache나 search projection이 실패할 수 있고, 재시도 요청이 같은 재고 변경을 두 번 반영하면 안 된다. 운영자는 실패한 projection을 조회하고, retry하고, 그 결과를 audit으로 남겨야 한다.

이 프로젝트는 아래 문제를 하나의 실행 경로로 구현했다.

- 상품 생성과 재고 변경 domain rule
- idempotency key 기반 stock movement 중복 방지
- product write와 outbox append의 transaction boundary
- Kafka broker로 outbox event 발행
- Redis 상품 상세 cache invalidation
- Elasticsearch 상품 검색 projection
- projection dead-letter listing, retry, status, audit, metrics, alerts
- projection worker packaging, shutdown, CI smoke skip

## 전체 흐름

```text
Seller API
  -> Django domain service
  -> MySQL product and stock movement records
  -> domain event outbox
  -> Kafka product-events topic
  -> projection worker
  -> Redis product detail cache invalidation
  -> Elasticsearch product search projection
  -> backoffice status, retry, audit, metrics
```

처음부터 모든 인프라를 붙이지 않았다. TDD와 Tidy First 기준으로 domain behavior를 먼저 고정하고, 그 위에 Django API, repository, outbox, broker, cache, search projection, worker, backoffice 운영 API를 순서대로 붙였다.

## 구현한 범위

### Domain과 API

상품 생성은 `product.changed` event를 남긴다. 재고 변경은 `idempotency_key`를 기준으로 중복 반영을 막고, 재고가 음수가 되는 요청은 저장과 event 기록 전에 거부한다.

Django API는 `POST /seller/products`, `POST /seller/products/{product_id}/stock-movements`, `GET /products/{product_id}`, `GET /products/search`를 제공한다. API view는 in-memory repository가 아니라 Django ORM 기반 repository에 연결했다.

### Transaction과 outbox

상품 row, stock movement row, domain event outbox row가 같은 write 흐름에서 저장된다. product/stock write와 outbox append는 `transaction.atomic()` boundary로 묶었다. 따라서 outbox append가 실패하면 product row와 stock movement row도 함께 rollback된다.

outbox event는 Kafka `product-events` topic으로 publish된다. broker key는 aggregate id를 사용하도록 문서와 테스트로 고정했다.

### Projection worker

Projection worker는 broker record를 `DomainEvent`로 복원하고, Redis invalidation과 Elasticsearch projection runner를 실행한다. 처리한 event id는 DB-backed processed-event store에 남겨 worker 재시작 이후 duplicate replay를 skip할 수 있게 했다.

worker loop에는 successful offset commit, SIGINT/SIGTERM shutdown callback, idle poll tolerance, stopped reason, time-boxed run, Prometheus-style metrics output을 추가했다.

### Backoffice 운영 경로

Projection 실패는 dead-letter로 저장된다. Backoffice API는 unresolved dead-letter listing, retry, projection status, audit events, metrics, alerts를 제공한다.

운영자 권한도 나눴다. write token은 retry까지 가능하고, read-only token은 status, dead-letter, audit, metrics, alerts 조회만 가능하다. 인증 실패와 retry 실패는 `unauthorized`, `forbidden`, `dead_letter_not_found`, `projection_retry_failed`, `product_not_found` 같은 구조화된 error code로 맞췄다.

### Monitoring과 packaging

Grafana-ready dashboard spec을 만들고, Grafana API import smoke로 dashboard JSON이 실제로 import되는지 확인했다. Projection worker는 Docker Compose service로 packaging했고, live smoke, event smoke, load-shaped replay smoke, shutdown smoke를 추가했다.

CI에서는 unit test job과 packaged smoke skip job을 분리했다. 무거운 Docker smoke는 `COMMERCE_SKIP_DOCKER_SMOKES=1`에서 의도적으로 건너뛰고, 고정 skip output을 남기도록 했다.

## 해결 과정에서 생긴 문제와 결정

첫 번째 문제는 상품 write와 event publish를 어디서 끊을지였다. API 요청 안에서 바로 Redis와 Elasticsearch까지 갱신하면 단순하지만, 중간 실패가 생겼을 때 어느 상태가 진짜인지 설명하기 어렵다. 그래서 product, stock movement, outbox row를 같은 transaction에 저장하고, projection worker가 outbox event를 따로 처리하도록 나눴다.

두 번째 문제는 중복 요청과 replay였다. 같은 stock movement가 두 번 들어오면 재고가 틀어지고, worker가 같은 broker record를 다시 읽어도 projection이 중복 반영될 수 있다. 이 부분은 `idempotency_key`와 processed-event store로 나눠 막았다. API write path에서는 stock movement 중복을 막고, worker path에서는 처리한 event id를 저장해 재시작 뒤 duplicate replay를 건너뛰게 했다.

세 번째 문제는 실패를 숨기지 않는 것이었다. Redis invalidation이나 Elasticsearch indexing이 실패하면 사용자 조회와 검색 결과가 서로 달라질 수 있다. 그래서 projection 실패를 dead-letter로 저장하고, backoffice에서 조회, retry, audit, metrics까지 이어지는 운영 경로를 따로 만들었다. 이 덕분에 "이벤트가 실패했다"에서 끝나지 않고, 어떤 event가 실패했고 누가 재처리했는지까지 확인할 수 있다.

## 검증

대표 검증은 아래와 같다.

| 검증 | 내용 |
|---|---|
| `bash scripts/test.sh` | domain, Django API, repository, outbox, Kafka adapter, Redis cache, Elasticsearch projection, worker, backoffice, dashboard, packaging test 112개 통과 |
| `bash scripts/mysql-smoke.sh` | MySQL migration, product persistence, stock movement idempotency, outbox row 검증 |
| `bash scripts/kafka-smoke.sh` | Kafka topic publish and consume smoke |
| `bash scripts/redis-smoke.sh` | 상품 상세 cache 저장, stock 변경 후 invalidation, 최신 재고 재생성 검증 |
| `bash scripts/elasticsearch-smoke.sh` | 상품 검색 문서 upsert, search query, stock 변경 후 최신 재고 반영 검증 |
| `bash scripts/projection-worker-smoke.sh` | consumed broker record 기반 Redis invalidation과 Elasticsearch indexing 검증 |
| `bash scripts/kafka-daemon-smoke.sh` | Kafka daemon mode에서 worker lag drain, duplicate replay skip, latest-state projection 검증 |
| `bash scripts/grafana-dashboard-smoke.sh` | Grafana dashboard import와 uid 조회 검증 |
| packaged worker smokes | live, event, load-shaped replay, shutdown, skip toggle 검증 |
