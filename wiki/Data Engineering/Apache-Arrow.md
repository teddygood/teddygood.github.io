---
title: "Apache Arrow"
date: '2026-04-27'
draft: false
---

## Apache Arrow란

Apache Arrow는 대용량 테이블 데이터를 분석하고 옮길 때 쓰는 columnar memory format이다. 하나의 라이브러리 이름이기도 하지만, 더 중요하게는 테이블형 데이터를 메모리에 어떻게 놓을지 정한 표준에 가깝다.

Python, Java, Rust, C++, 데이터프레임 라이브러리, 쿼리 엔진, 머신러닝 도구가 모두 자기 방식으로 테이블 데이터를 들고 있으면 경계마다 변환 비용이 생긴다. Arrow는 schema, array, record batch, buffer 같은 공통 단위를 정의하고, 각 타입이 어떤 메모리 배치를 갖는지도 함께 정한다.

그래서 Arrow는 단순한 파일 확장자 하나로 이해하면 안 된다. Arrow의 중심은 저장보다 실행 중 데이터 표현이다. 여러 시스템이 같은 테이블을 같은 메모리 규칙으로 읽을 수 있으면, 데이터를 다른 언어의 객체로 풀었다가 다시 묶는 일이 줄어든다.

## columnar memory format

행(row) 중심 표현은 한 레코드의 모든 필드를 가까이 둔다. 반대로 컬럼형 표현은 같은 필드의 값들을 연속된 메모리 영역에 모은다.

간단히 보면 아래와 같다.

```text
행 중심:
  (id=1, age=20, score=0.7)
  (id=2, age=24, score=0.9)

컬럼 중심:
  id:    [1, 2]
  age:   [20, 24]
  score: [0.7, 0.9]
```

분석 작업은 보통 모든 컬럼을 항상 다 읽지 않는다. 특정 컬럼만 스캔하거나, 같은 타입의 값에 같은 연산을 반복하는 일이 많다. columnar layout은 이런 접근에 유리하다. 같은 타입의 값이 붙어 있으니 CPU cache, SIMD, vectorization과도 잘 맞는다.

## Arrow의 기본 단위

Arrow 문서를 읽을 때는 아래 단위를 먼저 잡으면 된다.

- array: 같은 타입의 값들이 모인 컬럼 단위
- schema: 컬럼 이름, 타입, null 가능 여부 같은 테이블 구조
- record batch: 같은 길이를 가진 여러 array를 묶은 배치
- buffer: 실제 값, offset, null bitmap 같은 물리 메모리 조각

여기서 중요한 것은 Arrow가 "테이블"을 추상적으로만 말하지 않는다는 점이다. 어떤 타입이 어떤 buffer 조합으로 놓이는지까지 정한다. 예를 들어 값 자체를 담는 buffer와 null 여부를 표시하는 null bitmap이 분리될 수 있다. 이 구조 덕분에 엔진은 데이터를 다시 객체로 풀지 않고도 필요한 위치를 계산해서 읽을 수 있다.

## 왜 빠를 수 있나

Arrow가 빠르다고 말할 때의 핵심은 단순히 바이너리 포맷이라서가 아니다. 공식 스펙에서 강조하는 성질은 아래와 같다.

- sequential scan에 유리한 data adjacency
- 대부분의 array에서 O(1) random access
- SIMD와 vectorization에 맞는 columnar layout
- shared memory에서 zero-copy access에 유리한 relocatable 구조

즉 Arrow의 장점은 "저장 공간을 가장 작게 만든다"보다 "계산하기 좋은 모양으로 메모리에 올려 둔다"에 가깝다.

## Arrow와 Parquet의 차이

Arrow와 Parquet는 둘 다 컬럼형이라는 이유로 같이 언급되지만, 역할은 다르다.

- Parquet: 디스크에 오래 저장하기 좋은 columnar file format
- Arrow: 계산 중 메모리에서 바로 다루기 좋은 columnar memory format

Parquet는 압축과 인코딩으로 저장 효율을 높이는 쪽에 강하다. 대신 계산하려면 보통 메모리 구조로 디코딩해야 한다. Arrow는 반대로 CPU가 바로 읽고 계산하기 좋은 메모리 배치를 지향한다. 그래서 현실적인 파이프라인에서는 Parquet로 저장하고, 읽어 온 뒤 Arrow 형태로 처리하는 식으로 둘이 같이 쓰이는 경우가 많다.

## 어디에 쓰이나

Arrow는 데이터가 한 시스템 안에서만 머무르지 않을 때 자주 보인다. 데이터프레임, 쿼리 엔진, 데이터베이스 클라이언트, 머신러닝 전처리 도구가 같은 테이블 데이터를 주고받아야 하면 변환 비용이 커지기 때문이다.

대표적으로 아래 상황에서 Arrow가 유용하다.

- 여러 언어와 엔진 사이에서 테이블 데이터를 주고받아야 한다.
- 데이터프레임, 쿼리 엔진, 머신러닝 전처리 사이의 변환 비용이 크다.
- 특정 컬럼을 반복해서 스캔하거나 배치 단위로 처리한다.
- memory mapping, zero-copy, vectorization이 성능에 의미 있는 구간이다.

Hugging Face Datasets는 Arrow가 실제로 보이는 대표적인 예다. Hub에 올라온 원본 파일이 대부분 Arrow라는 뜻은 아니다. Hub에는 CSV, JSON, Parquet, 텍스트, 이미지, 오디오처럼 여러 형태의 원본 데이터가 올라올 수 있다. 대신 Datasets 라이브러리는 일반적인 로컬 캐시와 Dataset 처리 모델에서 Arrow를 적극적으로 사용한다. 공식 문서는 로컬 캐시가 디스크 위의 Arrow 데이터로 저장되고, 이를 memory mapping으로 빠르게 조회한다고 설명한다.

반대로 작은 JSON 몇 개를 읽고 끝나는 작업이나, 단일 애플리케이션 내부 객체로 충분한 작업에서는 Arrow를 도입해도 체감 이득이 작을 수 있다. Arrow는 데이터가 커지고, 경계가 많아지고, 반복 스캔이 많아질수록 가치가 커진다.

## 같이 보면 좋은 계층

Arrow 주변에는 여러 계층이 붙어 있다.

- Arrow IPC: Arrow record batch를 파일이나 스트림으로 직렬화하는 형식
- Arrow Flight: Arrow 데이터를 네트워크로 주고받기 위한 RPC 계층
- ADBC: Arrow 중심의 데이터베이스 연결 API
- PyArrow: Python에서 Arrow 구조를 다루는 구현체

처음부터 이 계층을 모두 외울 필요는 없다. 먼저 Arrow를 "분석용 테이블 데이터를 메모리에서 어떻게 놓을 것인가"에 대한 표준으로 이해하고, 그 다음 IPC, Flight, ADBC를 데이터 이동 계층으로 붙이면 된다.

## References

- [Apache Arrow](https://arrow.apache.org/)
- [Apache Arrow Columnar Format](https://arrow.apache.org/docs/format/Columnar.html)
- [Apache Arrow FAQ](https://arrow.apache.org/faq/)
- [Apache Arrow Releases](https://arrow.apache.org/release/)
- [Hugging Face Datasets Arrow](https://huggingface.co/docs/datasets/en/about_arrow)
