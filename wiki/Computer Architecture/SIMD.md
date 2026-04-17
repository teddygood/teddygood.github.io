---
title: "SIMD"
date: '2026-04-17'
draft: false
---

SIMD는 Single Instruction, Multiple Data의 약자다. 같은 명령 하나를 여러 데이터에 동시에 적용하는 방식이다. 현대 CPU와 WebAssembly 같은 런타임에서 벡터 연산을 빠르게 처리하는 핵심 개념이다.

## 왜 필요한가

벡터나 행렬 계산은 같은 연산을 연속된 데이터에 반복하는 경우가 많다. 예를 들어 다음 네 개의 곱셈은 구조가 같다.

```text
a0 * b0
a1 * b1
a2 * b2
a3 * b3
```

SIMD는 이런 연산을 하나씩 처리하지 않고, 여러 원소를 벡터 레지스터에 넣어서 한 번에 계산한다.

## lane이란 무엇인가

SIMD 벡터 안에 들어가는 각 원소 자리를 lane이라고 부른다.

예를 들어 128비트 벡터에서:

- `f32x4`: 32비트 float 4개
- `f64x2`: 64비트 double 2개

즉 같은 128비트 `width`라도 자료형에 따라 lane 수가 달라진다.

## `width`란 무엇인가

여기서 `width`는 벡터 전체 크기를 뜻한다. lane 하나의 크기가 아니라, 벡터 레지스터 하나가 몇 비트인지에 대한 말이다.

예를 들어:

- 128비트 `width` + 32비트 원소 = 4 lane
- 128비트 `width` + 64비트 원소 = 2 lane

즉 `width`와 lane은 같은 말이 아니다.

- `width`: 벡터 전체 크기
- lane: 벡터 안에 들어가는 각 원소 칸

그래서 lane 수는 보통 `width / 원소 크기`로 이해하면 된다.

## SIMD를 볼 때 같이 봐야 하는 것

SIMD를 이해할 때는 보통 아래 요소를 함께 본다.

- 벡터 `width`
- lane 수
- load/store 패턴
- alignment
- tail 처리
- register pressure

같은 SIMD라고 해도 이 조건이 맞지 않으면 기대만큼 이득이 나지 않는다.

## 대표적인 SIMD 확장

SIMD는 하나의 특정 ISA 이름이 아니라, 여러 아키텍처에서 반복해서 등장하는 공통 아이디어다. 실제 CPU에서는 이 개념이 각 ISA 확장으로 구현된다.

### x86의 SSE와 AVX

`SSE`와 `AVX`는 x86 계열 CPU의 대표적인 SIMD 확장이다. 둘 다 벡터 연산을 빠르게 처리하기 위한 ISA extension이지만, 세대와 `width`, 명령 형태가 다르다.

#### SSE

SSE는 Streaming SIMD Extensions의 약자다. x86에서 널리 쓰인 초기 SIMD 확장 계열로, 보통 128비트 XMM 레지스터를 사용한다.

대표 특징:

- 128비트 벡터
- `float32` 4개 또는 `float64` 2개 처리 가능
- x86 SIMD 확장의 초기 기반

SSE 세대는 `SSE`, `SSE2`, `SSE3`, `SSSE3`, `SSE4` 등으로 확장되었다.

#### AVX

AVX는 Advanced Vector Extensions의 약자다. SSE보다 더 넓은 벡터와 더 현대적인 명령 형식을 제공한다.

대표 특징:

- AVX, AVX2: 256비트 YMM 레지스터
- AVX-512: 512비트 ZMM 레지스터
- 세 operand 형식이 강화되어 register move 부담이 줄어듦

예를 들어 AVX2에서는:

- `float32` 8개
- `float64` 4개

를 한 번에 처리할 수 있다.

#### SSE와 AVX를 같이 볼 때

가장 단순하게 보면 다음 차이가 먼저 보인다.

- SSE: 128비트, 초기 x86 SIMD 기반
- AVX: 더 넓은 벡터와 더 현대적인 명령 체계

다만 실제 차이는 벡터 `width`만으로 끝나지 않는다. FMA, 레지스터 수, load/store 대역폭, 스케줄링 같은 요소도 함께 본다.

### ARM의 NEON과 SVE

ARM에서는 `NEON`과 `SVE`가 자주 같이 언급된다. 둘 다 벡터 연산을 빠르게 처리하기 위한 확장이지만, 설계 철학은 다르다.

#### NEON

NEON은 ARM에서 널리 사용되는 고정 `width` SIMD 확장이다. 보통 128비트 벡터를 사용한다.

대표 특징:

- 고정 `width` 128비트
- 모바일과 서버 ARM에서 널리 보임
- 전통적인 SIMD 확장에 가깝다

#### SVE

SVE는 Scalable Vector Extension의 약자다. 이름 그대로 벡터 길이가 implementation-defined라는 점이 핵심이다.

대표 특징:

- 벡터 길이가 고정되지 않음
- 구현에 따라 더 넓은 벡터 사용 가능
- predicate 기반 연산과 tail 처리에 강함

즉 SVE는 "항상 128비트" 같은 고정 `width` 모델과 다르다.

#### NEON과 SVE를 같이 볼 때

- NEON: 고정 `width` SIMD
- SVE: scalable vector ISA

둘 다 벡터 연산용이지만, 고정 `width`와 scalable vector라는 차이 때문에 커널 설계 방식도 달라진다.

### RISC-V의 RVV

RISC-V에서는 `RVV`가 벡터 확장 역할을 맡는다. RVV는 고정 `width` SIMD보다 벡터 길이 독립적인 모델 쪽에 더 가깝다.

#### RVV

RVV는 RISC-V Vector Extension의 약자다. 중요한 특징은 SVE와 비슷하게 벡터 길이가 implementation-dependent라는 점이다. 즉 코드가 특정 고정 `width`만을 가정하지 않고, 실제 구현의 벡터 길이에 맞춰 동작할 수 있다.

이 모델은 특히 다음 관점에서 눈에 띈다.

- 벡터 길이에 따른 portability
- tail 처리
- 다양한 implementation 대응

즉 RVV는 "128비트"나 "256비트"처럼 폭을 먼저 고정하는 방식보다, 벡터 길이 독립적인 모델에 더 가깝다.

#### RVV를 같이 볼 때

- 전통적인 SIMD는 고정 `width` 벡터를 전제로 하는 경우가 많다.
- RVV는 벡터 길이 독립적인 방식으로 코드를 구성할 수 있다.

그래서 RVV는 넓게 보면 SIMD 계열이지만, 좁게 보면 고정 `width` SIMD보다 더 유연한 vector ISA 쪽에 놓인다.

즉 SIMD라는 공통 개념 위에 x86의 SSE/AVX, ARM의 NEON/SVE, RISC-V의 RVV 같은 ISA가 각각 다른 방식으로 올라와 있다고 보면 된다.

## SIMD에 잘 맞는 연산

다음 연산은 SIMD 친화적이다.

- 벡터 덧셈
- 스케일링
- 내적
- 행렬 곱셈의 안쪽 multiply-add

공통점은 계산 패턴이 규칙적이고 dependency가 약하다는 점이다.

## SIMD에 덜 잘 맞는 연산

다음 연산은 더 어렵다.

- triangular solve
- irregular memory access가 많은 연산
- 분기와 dependency가 강한 알고리즘

즉 SIMD는 항상 유리하지만, 연산 구조에 따라 얻을 수 있는 이득은 크게 달라진다.

## `width`가 넓다고 항상 좋은가

SIMD `width`가 넓으면 한 번에 처리하는 데이터 수는 늘어나지만, 그에 맞는 데이터 배치와 레지스터 운용이 같이 따라와야 한다. 그래서 `width`만 넓다고 바로 유리해지는 것은 아니다.

## Takeaway

SIMD는 같은 연산을 여러 데이터에 동시에 적용하는 방식이다. 이 개념은 x86의 SSE/AVX, ARM의 NEON/SVE, RISC-V의 RVV처럼 각 아키텍처에서 다른 이름의 ISA 확장으로 구현된다. 핵심은 단순히 벡터 `width`가 아니라, 연산 구조와 데이터 배치가 그 `width`와 잘 맞느냐에 있다.

## 선형대수 라이브러리에서 왜 자주 보이나

SIMD는 수학 라이브러리나 선형대수 라이브러리에서 특히 자주 등장한다. 같은 multiply-add를 연속된 데이터에 반복하는 경우가 많기 때문이다.

예를 들어 다음 연산은 SIMD 친화적인 편이다.

- `AXPY`
- `DOT`
- `SCAL`
- `GEMM`

반대로 다음 연산은 구조적으로 더 까다롭다.

- `TRSM`
- 일부 `GEMV`
- 분기나 irregular access가 많은 연산

즉 SIMD라는 개념 자체는 일반적이지만, 실제 라이브러리 최적화에서는 "어떤 연산이 얼마나 잘 벡터화되는가"가 더 중요해진다.

## References

- [Single instruction, multiple data](https://en.wikipedia.org/wiki/Single_instruction,_multiple_data)
- [Intel Intrinsics Guide](https://www.intel.com/content/www/us/en/docs/intrinsics-guide/index.html)

## Link

- [WebAssembly SIMD](../WebAssembly/WebAssembly%20SIMD.md)
