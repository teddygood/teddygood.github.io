---
title: 'Pyodide'
description: Open Source Contribution Academy
role: 'Contributor'
timeline: 'Ongoing'
stack: ['Python', 'WebAssembly', 'C++']
category: 'Open Source'
image: /img/logo-pyodide.png
hide_table_of_contents: false
---

{/* truncate */}

# Pyodide

Pyodide 빌드 커맨드 개선과 WASM SIMD를 통한 성능 최적화에 대한 기여 내용이다.

## 빌드 시스템 개선: `pyodide clean recipes`

Pyodide 빌드 시스템을 사용하면서 소스 파일과 중간 빌드 아티팩트를 정리하는 내장된 방법이 없다는 불편함을 발견했다. 개발자들은 수동으로 디렉토리를 삭제해야 했으며, 이는 오류가 발생하기 쉽고 번거로웠다.

이를 해결하기 위해 ([Issue #218](https://github.com/pyodide/pyodide-build/issues/218)), 두 단계에 걸쳐 포괄적인 정리 솔루션을 구현했다:

1.  **핵심 로직 구현 ([PR #223](https://github.com/pyodide/pyodide-build/pull/223))**: `pyodide-build`에 정리 로직을 구현하여 소스 레이아웃과 빌드 디렉토리를 지능적으로 제거하면서 기본적으로 빌드된 휠이 있는 `dist` 폴더는 보존하도록 했다.
2.  **CLI 통합 ([PR #254](https://github.com/pyodide/pyodide-build/pull/254))**: 새로운 CLI 명령인 `pyodide clean recipes`를 통해 이 기능을 제공했다. 이를 통해 사용자는 간단한 플래그로 특정 패키지나 전체 작업 공간을 정리할 수 있게 되어 패키지 유지 관리자의 개발자 경험이 크게 향상되었다.

## 성능 최적화: WASM SIMD 활성화

Pyodide의 성능은 브라우저 데이터 과학의 핵심 요소다. Emscripten은 C/C++ 코드를 벡터화하여 성능을 최적화하는 WebAssembly SIMD(Single Instruction, Multiple Data)를 지원하지만, Pyodide 내에서 이 생태계가 바로 사용 가능한지는 불분명했다. 나는 SIMD 지원을 검증하고 활성화하는 이니셔티브를 주도했다 ([Issue #5855](https://github.com/pyodide/pyodide/issues/5855)).

### 1단계: 검증 ([PR #5880](https://github.com/pyodide/pyodide/pull/5880))
복잡한 패키지를 최적화하기 전에, Pyodide 환경에서 SIMD 내장 함수가 올바르게 작동하는지 증명해야 했다. `test-simd`라는 새로운 테스트 패키지를 만들어 두 가지 중요한 컴파일 경로를 검증했다:
*   `wasm_simd128.h` 내장 함수를 직접 사용하는 방식.
*   Emscripten이 SSE/AVX 내장 함수를 WASM SIMD로 변환하는 방식.

### 2단계: OpenBLAS 최적화 ([PR #5960](https://github.com/pyodide/pyodide/pull/5960))
검증이 완료된 후, NumPy와 SciPy의 기반 라이브러리인 **OpenBLAS**라는 실제 사용 사례로 넘어갔다. 기존 OpenBLAS 빌드가 SIMD를 활용하지 못하고 있음을 확인했다 ([Issue #5948](https://github.com/pyodide/pyodide/issues/5948)).

`-msimd128`로 컴파일하는 새로운 빌드 레시피인 `libopenblas-simd`를 구현했다. 영향을 정량화하기 위해, Dot Product(`sdot`) 및 Matrix Multiplication(`sgemm`)과 같은 주요 연산에 대해 스칼라 대 SIMD 성능을 비교하는 벤치마킹 제품군(`test-openblas-simd`)을 작성했다. 이 작업을 통해 웹에서의 과학 컴퓨팅 성능 향상에 기여할 수 있었다.

## 영향 및 성과

### Pyodide

#### Release 0.29

WASM SIMD 지원 및 최적화 작업은 `pyodide` 메인 저장소에 기여되었으며, 0.29 릴리스에 포함되었다. 자세한 내용은 [Pyodide 0.29 Release Blog](https://blog.pyodide.org/posts/0.29-release/)에서도 확인할 수 있다.

![SIMD Support Exploration](/img/projects/pyodide/simd-exploration.png)

### Pyodide-build
내 기여는 `pyodide-build` 버전 0.30.8, 0.30.9, 0.31.0에 승인되어 릴리스되었다.

#### Release 0.30.8
프로젝트에 대한 첫 기여다.
![0.30.8 릴리스](/img/projects/pyodide/release-0.30.8.png)

#### Release 0.30.9
`pyodide clean recipes` CLI 도입.
![0.30.9 릴리스](/img/projects/pyodide/release-0.30.9.png)

#### Release 0.31.0
추가 리팩토링 및 개선.
![0.31.0 릴리스](/img/projects/pyodide/release-0.31.0.png)

## 기여 요약

| 프로젝트 | PR | 설명 | 상태 |
| :--- | :--- | :--- | :--- |
| [pyodide-build](https://github.com/pyodide/pyodide-build) | [PR #223](https://github.com/pyodide/pyodide-build/pull/223) | 레시피 정리 로직 구현 | Merged |
| [pyodide-build](https://github.com/pyodide/pyodide-build) | [PR #254](https://github.com/pyodide/pyodide-build/pull/254) | `pyodide clean recipes` CLI 명령 추가 | Merged |
| [pyodide](https://github.com/pyodide/pyodide) | [PR #5880](https://github.com/pyodide/pyodide/pull/5880) | WASM/SSE/AVX 내장 함수 검증을 위한 `test-simd` 패키지 추가 | Merged |
| [pyodide](https://github.com/pyodide/pyodide) | [PR #5960](https://github.com/pyodide/pyodide/pull/5960) | OpenBLAS (WASM)에 대한 SIMD 활성화 | Merged |
