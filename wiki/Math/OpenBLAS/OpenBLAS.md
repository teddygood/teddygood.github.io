---
title: "OpenBLAS"
date: '2026-04-20'
draft: false
---

OpenBLAS는 BLAS(Basic Linear Algebra Subprograms)를 빠르게 구현하는 고성능 선형대수 라이브러리다. 이름 그대로 GotoBLAS 계열 구현을 기반으로 발전해 왔고, 실제 빌드에는 일부 LAPACK 구성요소도 함께 포함된다.

## OpenBLAS는 무엇을 구현하나

OpenBLAS는 주로 다음과 같은 계산을 빠르게 처리한다.

- 벡터 덧셈과 스케일링
- 내적(dot product)
- 행렬 곱셈
- 삼각행렬 solve
- 분해에 필요한 하위 연산

파이썬 생태계에서는 NumPy, SciPy 같은 라이브러리가 내부적으로 OpenBLAS를 사용할 수 있다. 따라서 OpenBLAS 성능은 고수준 수치 계산 성능에 직접 영향을 준다.

## BLAS와 LAPACK 문서와는 무엇이 다른가

`BLAS와 LAPACK` 문서가 계층 개념을 설명한다면, 이 문서는 구현 쪽에 더 가깝다. 핵심은 "어떤 연산이 존재하는가"보다 "어떤 타깃에서 어떤 커널이 실제로 선택되는가"에 있다.

## 왜 아키텍처별 커널이 중요한가

같은 `GEMM`이나 `TRSM`이라도 CPU나 실행 환경에 따라 유리한 구현 방식이 다르다. OpenBLAS는 이를 위해 연산별 커널 파일을 따로 두고, 타깃에 따라 적절한 커널을 선택한다.

예를 들어 성능 차이에 영향을 주는 요소는 다음과 같다.

- SIMD 폭(width)
- 레지스터 수
- load/store 비용
- cache 크기
- packed layout
- microkernel tile 크기

즉 OpenBLAS 최적화는 "한 번 구현하면 끝"이 아니라, 타깃별로 커널을 고르는 구조 위에서 이루어진다.

## OpenBLAS를 읽을 때 같이 보는 계층

OpenBLAS를 볼 때는 대체로 다음 계층을 같이 이해해야 한다.

1. BLAS와 LAPACK 개념
2. 연산별 특성
3. 아키텍처별 `KERNEL` wiring
4. 실제 커널 구현
5. benchmark와 runtime dispatch 확인

이 중에서 구현을 따라갈 때 가장 자주 보게 되는 것은 `KERNEL` 설정과 연산별 커널 파일이다.

## WebAssembly와 OpenBLAS

WebAssembly 환경에서는 보통 `simd128`를 쓴다. 이 경우 벡터 폭이 128비트라서 `float32`는 `f32x4`, `float64`는 `f64x2`로 처리된다. 이 폭은 x86 AVX2 같은 256비트 SIMD보다 좁기 때문에, OpenBLAS를 wasm에 맞게 최적화할 때는 작은 tile과 build wiring이 특히 중요해진다.

## 자주 보게 되는 연산

OpenBLAS 안에서는 다음 연산을 자주 보게 된다.

- `AXPY`
- `DOT`
- `SCAL`
- `GEMM`
- `TRSM`

이 연산들은 BLAS level도 다르고, SIMD 친화성도 서로 다르다.

## Takeaway

OpenBLAS는 단순한 수치 라이브러리가 아니라, 연산별 알고리즘과 아키텍처별 커널 선택이 결합된 최적화 프레임워크에 가깝다. 그래서 기여를 하려면 연산 의미를 아는 것만으로는 부족하고, 어떤 타깃에서 어떤 커널이 실제로 선택되는지까지 봐야 한다.

## References

- [OpenBLAS](https://github.com/OpenMathLib/OpenBLAS)
- [BLAS](https://www.netlib.org/blas/)
- [LAPACK](https://www.netlib.org/lapack/)

## Link

- [BLAS와 LAPACK](BLAS%EC%99%80%20LAPACK.md)
- [BLAS Level](BLAS%20Level.md)
- [SIMD](../../Computer%20Architecture/SIMD.md)
- [WebAssembly SIMD](../../WebAssembly/OpenBLAS/WebAssembly%20SIMD.md)
- [WASM128_GENERIC](../../WebAssembly/OpenBLAS/WASM128_GENERIC.md)
- [GEMM](GEMM.md)
- [TRSM](TRSM.md)
- [AXPY](AXPY.md)
- [DOT 연산군](DOT%20%EC%97%B0%EC%82%B0%EA%B5%B0.md)
- [SCAL](SCAL.md)
