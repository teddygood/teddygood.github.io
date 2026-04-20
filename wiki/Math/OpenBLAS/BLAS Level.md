---
title: "BLAS Level"
date: '2026-04-20'
draft: false
---

BLAS는 선형대수 기본 연산을 level별로 나눈다. 여기서 level은 중요도나 난이도를 뜻하는 게 아니라, 다루는 데이터의 형태(벡터, 행렬)와 그에 따른 연산 비용을 기준으로 나눈 것이다.

## Level 1

벡터 대 벡터 연산이다.

대표 예시:

- `AXPY`
- `DOT`
- `SCAL`
- `COPY`
- `SWAP`
- `ASUM`
- `NRM2`

주요 특징:

- 구현 구조가 단순하다
- 메모리 대역폭 영향이 크다
- SIMD 적용은 비교적 쉽다
- 계산량보다 load/store 비용이 더 중요해지기 쉽다

## Level 2

행렬과 벡터 연산이다.

대표 예시:

- `GEMV`
- `GER`
- `SYMV`

주요 특징:

- Level 1보다 계산량이 크다
- 그래도 memory-bound 성격이 강한 경우가 많다
- 행렬 접근 방향과 transpose 여부가 성능에 크게 영향을 준다

## Level 3

행렬과 행렬 연산이다.

대표 예시:

- `GEMM`
- `TRSM`
- `TRMM`
- `SYRK`
- `SYR2K`

주요 특징:

- 계산량이 크다
- data reuse가 많다
- packed layout, microkernel, blocking 전략의 효과가 크게 나타난다
- 라이브러리 최적화의 차이가 가장 두드러지기 쉽다

## 왜 이 구분이 중요한가

BLAS level은 단순한 분류가 아니라, 성능 특성을 예측하는 힌트다.

- Level 1: 벡터 커널, 메모리 접근이 중요
- Level 2: 행렬-벡터, 접근 패턴이 중요
- Level 3: 행렬-행렬, blocking과 kernel 설계가 중요

즉 level은 단순한 이름표가 아니라, 성능을 어디서 읽어야 하는지 알려 주는 힌트다.

## 왜 Level 3가 특별히 중요하나

Level 3는 연산량이 크고 데이터 재사용이 많다. 그래서 아키텍처별 커널 차이가 성능 차이로 크게 드러난다.

예를 들어:

- `GEMM`는 SIMD와 microkernel 최적화 효과가 매우 크다
- `TRSM`는 Level 3지만 dependency가 강해서 `GEMM`보다는 더 어렵다

즉 같은 Level 3 안에서도 연산 성격은 다르지만, 전체적으로는 가장 많은 최적화 기회가 있는 계층이다.

## Takeaway

BLAS level은 연산의 종류를 나누는 분류이면서 동시에 성능 특성을 예측하는 기준이다. 기여를 하거나 benchmark를 읽을 때는 먼저 이 연산이 Level 1, 2, 3 중 어디에 속하는지부터 보는 것이 좋다.

## References

- [BLAS](https://www.netlib.org/blas/)
- [BLAS Technical Forum Standard](http://www.netlib.org/blas/blast-forum/)

## Link

- [BLAS와 LAPACK](BLAS%EC%99%80%20LAPACK.md)
- [OpenBLAS](OpenBLAS.md)
- [GEMM](GEMM.md)
- [TRSM](TRSM.md)
