---
title: "WebAssembly SIMD"
date: '2026-04-15'
draft: false
---

WebAssembly SIMD는 WebAssembly에 벡터 연산을 추가하는 확장이다. 핵심은 simd128, 즉 128비트 벡터 폭이다.

일반 SIMD 개념은 CPU의 SSE, AVX, NEON처럼 하드웨어 ISA 이름으로 먼저 접하게 된다. WebAssembly SIMD는 조금 다르다. 브라우저나 Node.js 같은 런타임이 이해하는 WebAssembly 명령 집합 안에 128비트 벡터 타입과 벡터 명령을 추가한 것이다. 그래서 C, C++, Rust 같은 언어에서 WebAssembly로 컴파일한 수치 계산 코드가 여러 값을 한 번에 처리할 수 있다.

## v128

WebAssembly SIMD에서 중심이 되는 값 타입은 `v128`이다. 이름 그대로 128비트짜리 벡터 값을 담는 타입이다. `v128` 자체는 "정수 네 개"나 "실수 두 개"처럼 한 가지 의미로 고정되지 않는다. 어떤 SIMD 명령으로 해석하느냐에 따라 lane, 즉 벡터 안의 원소 자리가 다르게 나뉜다.

같은 `v128` 값도 명령에 따라 아래처럼 나눠 읽을 수 있다.

- `i8x16`: 8비트 정수 16개
- `i16x8`: 16비트 정수 8개
- `i32x4`: 32비트 정수 4개
- `i64x2`: 64비트 정수 2개
- `f32x4`: 32비트 실수 4개
- `f64x2`: 64비트 실수 2개

같은 128비트라도 `f32x4`는 lane이 4개이고, `f64x2`는 lane이 2개다. 이 차이 때문에 64비트 실수 기반 계산은 32비트 실수 기반 계산보다 한 번에 처리할 수 있는 원소 수가 적다. DGEMM이나 DTRSM 같은 64비트 실수 중심 연산을 볼 때 이 점을 먼저 떠올리면 된다.

## 명령을 읽는 기준

WebAssembly SIMD 명령은 크게 산술 연산, 비트 연산, 변환, lane 추출과 교체, 메모리 읽기와 쓰기, lane 순서를 바꾸는 shuffle 계열로 나뉜다. 대부분의 명령은 `v128`을 특정 lane 구성으로 해석해서 동작한다.

예를 들면 아래 WebAssembly text format(WAT) 코드는 32비트 실수 네 개를 담은 두 벡터를 더한다.

```wat
v128.const f32x4 1.0 2.0 3.0 4.0
v128.const f32x4 10.0 20.0 30.0 40.0
f32x4.add
```

여기서 `v128.const`는 128비트 값을 만들고, `f32x4.add`는 그 값을 32비트 실수 4개짜리 벡터로 해석해 lane별 덧셈을 수행한다. SIMD를 읽을 때는 항상 "이 명령이 어떤 lane 해석을 전제로 하는가"를 같이 봐야 한다.

## 컴파일할 때 켜지는 방식

C/C++ 코드를 Emscripten으로 WebAssembly에 맞춰 빌드할 때는 `-msimd128` 플래그로 WebAssembly SIMD 타깃을 켠다. 이 플래그는 LLVM의 자동 벡터화도 함께 활성화한다.

```bash
emcc source.c -O3 -msimd128 -o output.js
```

자동 벡터화를 원하지 않고 명시적인 intrinsic 함수만 쓰고 싶다면 `-fno-vectorize -fno-slp-vectorize`를 함께 넘길 수 있다. 직접 SIMD intrinsic 함수를 쓰는 경우에는 `wasm_simd128.h`를 포함하고, 빌드 조건은 `__wasm_simd128__` 매크로로 확인할 수 있다.

```c
#include <wasm_simd128.h>

#ifdef __wasm_simd128__
v128_t a = wasm_f32x4_make(1.0f, 2.0f, 3.0f, 4.0f);
v128_t b = wasm_f32x4_splat(10.0f);
v128_t c = wasm_f32x4_add(a, b);
#endif
```

여기서 중요한 것은 `-msimd128`이 "모든 루프가 자동으로 빨라진다"는 뜻은 아니라는 점이다. 컴파일러가 벡터화할 수 있는 루프여야 하고, 데이터 배치와 의존성도 SIMD에 맞아야 한다.

## 어디서 쓰이나

WebAssembly SIMD는 일반적인 화면 렌더링 중심 웹앱보다, 브라우저나 Node.js 안에서 CPU 계산을 많이 하는 코드에서 의미가 크다. 특히 같은 연산을 큰 배열에 반복하는 경우에 잘 맞는다.

대표적인 사용처는 아래와 같다.

- ML 추론(inference): TensorFlow.js WebAssembly backend, ONNX Runtime Web, Transformers.js
- 컴퓨터 비전과 이미지 처리: OpenCV.js
- 수치 계산: Pyodide, NumPy, SciPy, OpenBLAS 같은 과학 계산 스택을 WebAssembly에서 실행하는 경우
- 오디오, 비디오, 압축, 암호화처럼 같은 계산을 큰 데이터에 반복해서 적용하는 처리

TensorFlow.js 블로그는 WebAssembly backend에서 SIMD와 멀티스레딩(multithreading)을 조합해 SIMD를 쓰지 않는 WebAssembly보다 큰 성능 개선을 얻었다고 설명한다. ONNX Runtime Web도 배포 단위에 `ort-wasm-simd.wasm`, `ort-wasm-simd-threaded.wasm` 같은 SIMD용 바이너리를 따로 둔다. Hugging Face Transformers.js는 브라우저 CPU 실행 경로에서 ONNX Runtime Web의 WebAssembly backend를 사용한다.

즉 WebAssembly SIMD는 "웹 페이지 전체를 빠르게 만드는 기능"이라기보다, 웹 안에서 네이티브에 가까운 계산 코어를 돌릴 때 쓰는 도구에 가깝다.

## 128비트 고정 모델

WebAssembly SIMD는 128비트 고정 벡터 모델을 기본으로 한다. 이 점은 네이티브 SIMD와 비교할 때 중요하다.

x86에는 128비트 SSE뿐 아니라 256비트 AVX, 512비트 AVX-512도 있다. ARM에는 128비트 NEON과 확장 가능한 벡터(scalable vector) 모델인 SVE가 있다. 하지만 WebAssembly SIMD의 기본 추상화는 `v128`이다. 런타임은 이 128비트 WebAssembly 명령을 실제 호스트 CPU 명령으로 변환한다.

그래서 WebAssembly SIMD는 "호스트의 가장 넓은 SIMD 레지스터를 그대로 노출한다"기보다 "여러 런타임에서 공통으로 실행할 수 있는 128비트 벡터 명령을 제공한다"에 가깝다. 이식성은 좋아지지만, 네이티브 AVX2 코드의 256비트 커널을 그대로 기대하면 안 된다.

이 한계는 손으로 최적화한 네이티브 SIMD 코드를 WebAssembly로 옮길 때 더 크게 보인다. AVX2나 AVX-512에 맞춰 256비트, 512비트 단위로 짠 커널은 WebAssembly SIMD의 `v128` 명령으로 다시 쪼개져야 한다. 그래서 WebAssembly SIMD는 여러 런타임에서 실행하기 쉬운 이식성을 얻는 대신, 특정 CPU의 가장 넓은 SIMD 폭을 직접 노출하지 않는다.

## 성능에서 자주 헷갈리는 지점

WebAssembly SIMD를 켰는데 기대만큼 빨라지지 않는 경우가 있다. 보통 아래 지점을 먼저 확인한다.

- 컴파일 플래그에 `-msimd128`이 실제로 들어갔는가
- 실제로 시간이 많이 쓰이는 반복 구간이 컴파일러가 벡터화할 만큼 단순하고 규칙적인가
- 생성된 WebAssembly 바이너리에 `v128.load`, `f32x4.add`, `f64x2.mul` 같은 SIMD 명령이 실제로 들어갔는가
- 데이터가 연속적으로 배치되어 메모리 읽기와 쓰기 비용이 낮은가
- 끝부분 처리나 조건 분기 때문에 대부분의 시간이 SIMD가 아닌 일반 연산 경로로 빠지지 않는가
- 네이티브 SSE, AVX, NEON intrinsic 함수가 WebAssembly SIMD 명령으로 잘 대응되는가

특히 네이티브 SIMD 코드를 WebAssembly로 포팅할 때는 명령이 1:1로 대응되지 않을 수 있다. Emscripten 문서는 일부 x86/ARM SIMD 동작이 WebAssembly SIMD에 직접 노출되지 않거나, 여러 명령으로 에뮬레이션되거나, 일반 연산으로 풀릴 수 있다고 설명한다. 그래서 단순히 "SIMD가 켜졌다"보다 "기대한 명령 형태로 내려갔는가"를 확인해야 한다.

## 생성된 WebAssembly 바이너리 확인

빌드가 SIMD를 실제로 사용했는지는 바이너리를 역어셈블(disassemble)해서 확인할 수 있다. WABT의 `wasm-objdump`를 쓰면 명령 이름을 볼 수 있다.

```bash
wasm-objdump -d output.wasm | rg 'v128|f32x4|f64x2|i32x4'
```

여기서 아무 것도 나오지 않는다면 `-msimd128`이 빠졌거나, 컴파일러가 해당 루프를 벡터화하지 못했거나, 다른 빌드 경로를 타고 있을 가능성이 있다.

## 운영할 때는 바이너리를 나눈다

WebAssembly 모듈은 로드되는 시점에 포함된 명령을 런타임이 이해해야 한다. 그래서 SIMD 명령이 들어간 WebAssembly 바이너리는 SIMD를 지원하지 않는 브라우저에서 그대로 실행할 수 없다. Rust 문서도 이 점 때문에 SIMD가 켜진 바이너리와 그렇지 않은 바이너리를 어떻게 배포할지 상황에 맞게 결정해야 한다고 설명한다.

TensorFlow.js는 런타임에서 SIMD와 멀티스레딩 지원 여부를 검사한 뒤, 기본 바이너리, SIMD 바이너리, SIMD와 멀티스레딩을 모두 쓰는 바이너리를 나눠 제공하는 방식을 설명한다. ONNX Runtime Web도 배포 문서에서 기본 WebAssembly, SIMD, 스레드, SIMD와 스레드를 함께 쓰는 WebAssembly 파일을 나눠 둔다.

따라서 WebAssembly SIMD를 쓰는 서비스에서는 보통 아래 흐름을 생각해야 한다.

1. 브라우저가 SIMD를 지원하는지 확인한다.
2. 지원하면 SIMD용 WebAssembly 바이너리를 로드한다.
3. 지원하지 않으면 기본 WebAssembly 바이너리, 서버 처리, 기능 제한 같은 fallback을 사용한다.

## 수치 계산 라이브러리에서 보는 이유

WebAssembly SIMD는 이미지 처리, 오디오 처리, 압축, 암호화, 선형대수처럼 같은 연산을 큰 배열에 반복하는 코드에서 자주 중요해진다. Pyodide, NumPy, SciPy, OpenBLAS 같은 환경을 WebAssembly 위에서 볼 때도 같은 이유다.

다만 수치 계산 라이브러리에서는 SIMD 지원 여부만으로 성능이 결정되지 않는다. BLAS 계열 코드는 커널 선택, packing, blocking, register pressure, 메모리 접근 패턴이 함께 맞아야 한다. WebAssembly에서 `-msimd128`을 켰다는 사실은 출발점이고, 실제 성능은 어떤 커널과 데이터 흐름이 선택됐는지까지 봐야 한다.

## References

- [WebAssembly SIMD-specific instructions](https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/SIMD)
- [v128: Wasm type](https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/Types/v128)
- [SIMD proposal for WebAssembly](https://github.com/WebAssembly/simd)
- [Using SIMD with WebAssembly](https://emscripten.org/docs/porting/simd.html)
- [Supercharging the TensorFlow.js WebAssembly backend with SIMD and multi-threading](https://blog.tensorflow.org/2020/09/supercharging-tensorflowjs-webassembly.html)
- [Deploying ONNX Runtime Web](https://onnxruntime.ai/docs/tutorials/web/deploy.html)
- [Transformers.js](https://huggingface.co/docs/transformers.js/)
- [Build OpenCV.js](https://docs.opencv.org/4.x/d4/da1/tutorial_js_setup.html)
- [WebAssembly Specification](https://webassembly.github.io/spec/core/)

## Link

- [SIMD](../Computer%20Architecture/SIMD.md)
