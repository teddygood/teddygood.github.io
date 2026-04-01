---
title: 'Pyodide'
description: 'Contributions to Pyodide build tooling and WASM SIMD performance work.'
role: 'Contributor'
timeline: 'Ongoing'
stack: ['Python', 'WebAssembly', 'C++']
category: 'Open Source'
image: /img/projects/pyodide/logo-pyodide-repositioned.png
hide_table_of_contents: false
---

{/* truncate */}

# Pyodide

My Pyodide contributions mostly fell into two buckets. One was smoothing out a rough edge in the build workflow, and the other was validating and applying WASM SIMD to a real package stack.

## Build system improvements

While working with the Pyodide build system, I kept running into the same annoyance. There was no built-in command to clean downloaded sources and intermediate build artifacts, so the usual answer was deleting directories by hand.

[Issue #218](https://github.com/pyodide/pyodide-build/issues/218) was the starting point, and the work landed in two steps.

1. **[PR #223](https://github.com/pyodide/pyodide-build/pull/223)** added the cleanup logic itself. It removes source layouts and build directories while keeping the `dist` folder by default.
2. **[PR #254](https://github.com/pyodide/pyodide-build/pull/254)** exposed that logic through the `pyodide clean recipes` CLI. After that, cleaning one package or an entire workspace became much less awkward.

## Enabling WASM SIMD

Performance matters a lot when Pyodide is used for scientific computing in the browser. Emscripten already supports WebAssembly SIMD, but it still had to be verified in the actual Pyodide environment before it could be treated as production-ready. That work started from [Issue #5855](https://github.com/pyodide/pyodide/issues/5855).

### Validation

In [PR #5880](https://github.com/pyodide/pyodide/pull/5880), I added a `test-simd` package to check two paths first.

- Direct use of `wasm_simd128.h` intrinsics
- Emscripten translation from SSE/AVX intrinsics to WASM SIMD

### Applying it to OpenBLAS

Once the validation path was in place, I moved on to **OpenBLAS**, which sits underneath NumPy and SciPy. The existing OpenBLAS build was not really taking advantage of SIMD, and I tracked that in [Issue #5948](https://github.com/pyodide/pyodide/issues/5948).

[PR #5960](https://github.com/pyodide/pyodide/pull/5960) added a `libopenblas-simd` recipe built with `-msimd128`, along with a `test-openblas-simd` benchmark suite for operations such as `sdot` and `sgemm`. The point was not just to enable SIMD, but to measure what changed after enabling it.

## Results

### Pyodide

#### Release 0.29

The SIMD support work landed in the main `pyodide` repository and shipped in the 0.29 release. More details are also mentioned in the [Pyodide 0.29 Release Blog](https://blog.pyodide.org/posts/0.29-release/).

![SIMD Support Exploration](/img/projects/pyodide/simd-exploration.png)

### Pyodide-build

The `pyodide-build` side of the work was released across 0.30.8, 0.30.9, and 0.31.0.

#### Release 0.30.8

This was my first contribution merged into the project.

![Release 0.30.8](/img/projects/pyodide/release-0.30.8.png)

#### Release 0.30.9

This release included the `pyodide clean recipes` CLI.

![Release 0.30.9](/img/projects/pyodide/release-0.30.9.png)

#### Release 0.31.0

More follow-up cleanup and refactoring landed here.

![Release 0.31.0](/img/projects/pyodide/release-0.31.0.png)

## Summary of Contributions

| Project | Pull Request | Description | Status |
| :--- | :--- | :--- | :--- |
| [pyodide-build](https://github.com/pyodide/pyodide-build) | [PR #223](https://github.com/pyodide/pyodide-build/pull/223) | Implement recipe cleanup logic | Merged |
| [pyodide-build](https://github.com/pyodide/pyodide-build) | [PR #254](https://github.com/pyodide/pyodide-build/pull/254) | Add CLI command `pyodide clean recipes` | Merged |
| [pyodide](https://github.com/pyodide/pyodide) | [PR #5880](https://github.com/pyodide/pyodide/pull/5880) | Add `test-simd` package to validate WASM/SSE/AVX intrinsics | Merged |
| [pyodide](https://github.com/pyodide/pyodide) | [PR #5960](https://github.com/pyodide/pyodide/pull/5960) | Enable SIMD for OpenBLAS (WASM) | Merged |
