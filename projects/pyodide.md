---
title: 'Pyodide'
description: Pyodide 빌드 시스템 개선과 WASM SIMD 최적화 기여
role: 'Contributor'
timeline: 'Ongoing'
stack: ['Python', 'WebAssembly', 'C++']
category: 'Open Source'
image: /img/projects/pyodide/logo-pyodide-repositioned.png
hide_table_of_contents: false
---

{/* truncate */}

# Pyodide

Pyodide에 기여하면서 한 작업은 크게 두 갈래였다. 하나는 빌드 시스템을 조금 덜 번거롭게 만드는 일이었고, 다른 하나는 WASM SIMD를 실제로 쓸 수 있게 확인하고 OpenBLAS에 붙이는 일이었다.

## 빌드 시스템 개선

Pyodide 빌드 시스템을 쓰다 보니 소스 파일과 중간 빌드 결과물을 한 번에 정리하는 기본 명령이 없다는 점이 불편했다. 결국 디렉토리를 직접 지워야 했는데, 자주 쓰는 흐름치고는 손이 많이 갔다.

[Issue #218](https://github.com/pyodide/pyodide-build/issues/218)에서 시작한 작업은 두 번에 나눠 진행했다.

1. **[PR #223](https://github.com/pyodide/pyodide-build/pull/223)**에서 정리 로직을 먼저 넣었다. 소스 레이아웃과 빌드 디렉토리를 지우되, 기본적으로는 빌드된 휠이 들어 있는 `dist` 폴더는 남기도록 했다.
2. **[PR #254](https://github.com/pyodide/pyodide-build/pull/254)**에서 이 기능을 `pyodide clean recipes` 명령으로 꺼내 쓸 수 있게 했다. 그 뒤로는 특정 패키지만 지우거나 작업 공간 전체를 정리하는 흐름이 훨씬 단순해졌다.

## WASM SIMD 활성화

브라우저에서 Pyodide를 쓸 때 성능은 꽤 중요한 문제다. Emscripten이 WebAssembly SIMD를 지원하긴 했지만, Pyodide 환경에서도 이 경로가 실제로 잘 작동하는지는 따로 확인이 필요했다. 그래서 [Issue #5855](https://github.com/pyodide/pyodide/issues/5855)를 기준으로 SIMD를 검증하고 실제 패키지에 적용하는 작업을 진행했다.

### 검증 작업

먼저 [PR #5880](https://github.com/pyodide/pyodide/pull/5880)에서 `test-simd` 패키지를 만들어 기본 경로를 확인했다. 여기서는 두 가지를 봤다.

- `wasm_simd128.h` 내장 함수를 직접 쓰는 방식
- Emscripten이 SSE/AVX 내장 함수를 WASM SIMD로 바꿔 주는 방식

### OpenBLAS 적용

검증이 끝난 다음에는 NumPy와 SciPy 밑단에 있는 **OpenBLAS**로 넘어갔다. 확인해 보니 기존 OpenBLAS 빌드는 SIMD를 거의 활용하지 못하고 있었고, 이 부분은 [Issue #5948](https://github.com/pyodide/pyodide/issues/5948)로 정리했다.

[PR #5960](https://github.com/pyodide/pyodide/pull/5960)에서는 `-msimd128`로 컴파일하는 `libopenblas-simd` 레시피를 추가했고, `test-openblas-simd`로 `sdot`, `sgemm` 같은 연산의 성능 차이를 비교할 수 있게 했다. 검증만 하고 끝낸 게 아니라 실제 패키지에 SIMD를 붙이고 벤치마크까지 남긴 작업이었다.

## 결과

### Pyodide

#### Release 0.29

SIMD 관련 작업은 `pyodide` 메인 저장소에 들어갔고 0.29 릴리스에도 포함됐다. 자세한 내용은 [Pyodide 0.29 Release Blog](https://blog.pyodide.org/posts/0.29-release/)에서 확인할 수 있다.

![SIMD Support Exploration](/img/projects/pyodide/simd-exploration.png)

### Pyodide-build

`pyodide-build` 쪽 작업은 0.30.8, 0.30.9, 0.31.0에 걸쳐 릴리스됐다.

#### Release 0.30.8

프로젝트에 처음으로 들어간 기여였다.

![0.30.8 릴리스](/img/projects/pyodide/release-0.30.8.png)

#### Release 0.30.9

`pyodide clean recipes` 명령이 릴리스에 포함됐다.

![0.30.9 릴리스](/img/projects/pyodide/release-0.30.9.png)

#### Release 0.31.0

추가 리팩토링과 정리가 반영됐다.

![0.31.0 릴리스](/img/projects/pyodide/release-0.31.0.png)

## 기여 요약

| 프로젝트 | PR | 설명 | 상태 |
| :--- | :--- | :--- | :--- |
| [pyodide-build](https://github.com/pyodide/pyodide-build) | [PR #223](https://github.com/pyodide/pyodide-build/pull/223) | 레시피 정리 로직 구현 | Merged |
| [pyodide-build](https://github.com/pyodide/pyodide-build) | [PR #254](https://github.com/pyodide/pyodide-build/pull/254) | `pyodide clean recipes` CLI 명령 추가 | Merged |
| [pyodide](https://github.com/pyodide/pyodide) | [PR #5880](https://github.com/pyodide/pyodide/pull/5880) | WASM/SSE/AVX 내장 함수 검증을 위한 `test-simd` 패키지 추가 | Merged |
| [pyodide](https://github.com/pyodide/pyodide) | [PR #5960](https://github.com/pyodide/pyodide/pull/5960) | OpenBLAS (WASM)에 대한 SIMD 활성화 | Merged |
