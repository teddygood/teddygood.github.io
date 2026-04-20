---
title: "BLAS와 LAPACK"
date: '2026-04-20'
draft: false
---

BLAS와 LAPACK는 둘 다 선형대수 계산을 위한 이름이지만, 서로 같은 선상에 두고 비교할 대상은 아니다. BLAS는 기본 연산을 표준화한 인터페이스에 가깝고, LAPACK은 그 위에서 더 큰 알고리즘을 구성하는 패키지에 가깝다.

## BLAS란 무엇인가

BLAS(Basic Linear Algebra Subprograms)는 기본적인 선형대수 연산을 표준화한 인터페이스다. 핵심은 "연산 자체를 표준 이름과 호출 규약으로 정리한다"는 데 있다.

대표적으로 아래 같은 연산이 여기에 속한다.

- 벡터 연산
- `GEMM`
- `GEMV`
- `AXPY`
- `DOT`

즉 BLAS는 "행렬 계산 전부"라기보다, 더 큰 선형대수 알고리즘을 구성하는 기본 블록 집합으로 보는 편이 맞다.

## LAPACK이란 무엇인가

LAPACK(Linear Algebra PACKage)은 행렬 분해, 선형 시스템 해법, 고유값 문제 같은 더 큰 알고리즘을 제공한다. BLAS가 기본 연산 계층이라면, LAPACK은 그 연산들을 조합해서 더 높은 수준의 문제를 푸는 계층이다.

대표적으로:

- `solve`
- `inv`
- `qr`
- `svd`
- `eigh`

이런 루틴은 직접 BLAS 이름을 드러내지 않지만, 내부에서는 `GEMM`, `TRSM`, `GEMV` 같은 BLAS 연산을 많이 호출한다.

## 둘의 관계는 어떻게 보면 되나

가장 단순하게 보면 다음 구조다.

- BLAS: 기본 연산
- LAPACK: 그 기본 연산을 조합한 고수준 알고리즘

그래서 `solve`, `qr`, `svd` 같은 함수는 "LAPACK 루틴"이지만, 실제 계산 과정에서는 BLAS가 반복해서 등장한다.

## 왜 이 구분이 중요한가

이 둘을 구분해야 "어디를 최적화하고 있는가"를 헷갈리지 않는다.

- `GEMM`를 바꾸는 것은 BLAS 계층의 변화다.
- `solve`나 `svd`의 동작은 LAPACK 계층의 문제다.

BLAS가 빨라지면 LAPACK도 영향을 받을 수 있지만, 영향이 항상 1:1로 나타나는 것은 아니다. LAPACK 루틴은 여러 BLAS 연산과 추가 알고리즘 단계를 함께 거치기 때문이다.

## OpenBLAS 관점에서의 의미

OpenBLAS는 이름상 BLAS 라이브러리지만, 실제 빌드에는 일부 LAPACK 구성요소도 함께 포함된다. 그래서 OpenBLAS를 읽을 때도 "지금 보고 있는 것이 BLAS 커널인지, LAPACK 경로인지"를 구분하는 편이 좋다.

BLAS Level 자체는 별도 문서로 보는 편이 더 깔끔하다.

## Takeaway

BLAS는 기본 연산 계층이고, LAPACK은 그 위의 고수준 알고리즘 계층이다. 둘을 같은 것으로 보면 안 되고, "LAPACK이 BLAS를 많이 사용한다"는 관계로 이해하는 편이 정확하다.

## References

- [BLAS](https://www.netlib.org/blas/)
- [LAPACK](https://www.netlib.org/lapack/)

## Link

- [BLAS Level](BLAS%20Level.md)
- [OpenBLAS](OpenBLAS.md)
- [GEMM](GEMM.md)
- [TRSM](TRSM.md)
