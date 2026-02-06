---
title: 'Pyodide'
description: 'Implemented `pyodide clean recipes` CLI and enabled WASM SIMD support for OpenBLAS.'
role: 'Contributor'
timeline: 'Ongoing'
stack: []
category: 'Open Source'
image: /img/logo-pyodide.png
hide_table_of_contents: false
---

{/* truncate */}

# Pyodide

Here is the story of my contributions to Pyodide, focusing on build system improvements and performance optimizations via WASM SIMD.

## Build System Improvements: `pyodide clean recipes`

While working with the Pyodide build system, I noticed a friction point: there was no built-in way to clean up downloaded source files and intermediate build artifacts. Developers had to manually delete directories, which was error-prone and tedious.

Addressing this ([Issue #218](https://github.com/pyodide/pyodide-build/issues/218)), I implemented a comprehensive cleanup solution in two stages:

1.  **Core Logic Implementation ([PR #223](https://github.com/pyodide/pyodide-build/pull/223))**: I added a helper function to `pyodide-build` that intelligently removes source layouts and build directories while preserving the `dist` folder (where built wheels reside) by default.
2.  **CLI Integration ([PR #254](https://github.com/pyodide/pyodide-build/pull/254))**: I exposed this functionality through a new CLI command `pyodide clean recipes`. This allowed users to clean specific packages or the entire workspace with simple flags, significantly improving the developer experience for package maintainers.

## High-Performance Computing: Enabling WASM SIMD

Pyodide's performance is a critical factor for data science in the browser. Emscripten supports WebAssembly SIMD (Single Instruction, Multiple Data) to vectorize C/C++ code, but it wasn't clear if this ecosystem was ready for prime time within Pyodide. I took on the initiative to validate and enable SIMD support ([Issue #5855](https://github.com/pyodide/pyodide/issues/5855)).

### Phase 1: Validation ([PR #5880](https://github.com/pyodide/pyodide/pull/5880))
Before optimizing complex packages, I needed to prove that SIMD intrinsics worked correctly in the Pyodide environment. I created a new test package, `test-simd`, which validated two critical compilation paths:
*   Direct usage of `wasm_simd128.h` intrinsics.
*   Emscripten's implicit translation of SSE/AVX intrinsics to WASM SIMD.

### Phase 2: Optimizing OpenBLAS ([PR #5960](https://github.com/pyodide/pyodide/pull/5960))
With validation complete, I moved to a real-world use case: **OpenBLAS**, the foundational library for NumPy and SciPy. I identified that the existing OpenBLAS build was not leveraging SIMD ([Issue #5948](https://github.com/pyodide/pyodide/issues/5948)).

I implemented a new build recipe, `libopenblas-simd`, compiling with `-msimd128`. To quantify the impact, I wrote a benchmarking suite (`test-openblas-simd`) comparing scalar vs. SIMD performance for key operations like Dot Product (`sdot`) and Matrix Multiplication (`sgemm`). This work paved the way for significant performance gains in scientific computing on the web.


**Pyodide 0.29 Release**
![SIMD Support Exploration](/img/projects/pyodide/simd-exploration.png)

## Impact and Recognition

My contributions have been accepted and released in Pyodide versions 0.30.8, 0.30.9, and 0.31.0.

### Release 0.30.8
Marking my first contribution to the project.
![Release 0.30.8](/img/projects/pyodide/release-0.30.8.png)

### Release 0.30.9
Introduction of the `pyodide clean recipes` CLI.
![Release 0.30.9](/img/projects/pyodide/release-0.30.9.png)

### Release 0.31.0
Further refactoring and improvements.
![Release 0.31.0](/img/projects/pyodide/release-0.31.0.png)

## Summary of Contributions

| Project | Pull Request | Description | Status |
| :--- | :--- | :--- | :--- |
| [pyodide-build](https://github.com/pyodide/pyodide-build) | [PR #223](https://github.com/pyodide/pyodide-build/pull/223) | Add helper function for recipe clean up | Merged |
| [pyodide-build](https://github.com/pyodide/pyodide-build) | [PR #254](https://github.com/pyodide/pyodide-build/pull/254) | Add CLI command `pyodide clean recipes` | Merged |
| [pyodide](https://github.com/pyodide/pyodide) | [PR #5880](https://github.com/pyodide/pyodide/pull/5880) | Add `test-simd` package to validate WASM/SSE/AVX intrinsics | Merged |
| [pyodide](https://github.com/pyodide/pyodide) | [PR #5960](https://github.com/pyodide/pyodide/pull/5960) | Enable SIMD for OpenBLAS (WASM) | Merged |
