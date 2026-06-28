---
title: 'wasm-bindgen Float16Array 기여'
description: js-sys에 Float16Array와 DataView float16 지원을 추가하며 Rust stable 제약 아래 public API 경계를 정리한 오픈소스 기여
role: Open Source Contributor
timeline: Mar 2026
stack: [Rust, WebAssembly, JavaScript, js-sys]
category: Open Source
image: /img/projects/wasm-bindgen-float16array/wasm-bindgen-github-card.png
hide_table_of_contents: false
---

{/* truncate */}

# wasm-bindgen Float16Array 기여

## wasm-bindgen은 어떤 프로젝트인가

[wasm-bindgen](https://github.com/wasm-bindgen/wasm-bindgen)은 Rust로 만든 WebAssembly module과 JavaScript 사이의 binding을 만들어주는 프로젝트다. Rust에서 JavaScript API를 import하거나, Rust 함수를 JavaScript에서 호출할 수 있게 glue code와 type binding을 생성한다.

이 프로젝트 안에서 `js-sys`는 JavaScript 표준 built-in object를 Rust에서 다룰 수 있게 노출하는 crate다. 예를 들어 `Array`, `Promise`, `DataView`, 여러 typed array 같은 JS API가 `js_sys::*` 타입과 메서드로 연결된다. 이번 작업은 그중 `js-sys`에 빠져 있던 `Float16Array`와 `DataView` float16 메서드를 추가한 기여였다.

## 왜 이 작업을 했는가

마침 Rust를 공부하고 있었고, Rust와 WebAssembly가 JavaScript와 만나는 지점을 직접 만져보고 싶었다. 그러던 중 wasm-bindgen 저장소에서 [Issue #4984](https://github.com/wasm-bindgen/wasm-bindgen/issues/4984)를 발견했다. 라벨도 `good first issue`, `js-sys`, `enhancement`였고, 설명만 보면 기존 typed array binding을 따라 추가하면 되는 작업처럼 보였다.

이슈는 간단했다. `Float16Array`는 주요 브라우저에서 이미 지원되고 있었지만 `js-sys`에는 binding이 없었고, 기존 typed array 예시를 따라 `Float16Array`를 추가하면서 `DataView`의 새 float16 메서드도 추가하면 된다는 내용이었다.

문제는 Rust stable에 아직 builtin `f16` 타입이 없다는 점이었다. JavaScript의 float16 값은 JS `Number`로 읽고 쓸 수 있지만, Rust 쪽 public API에 어떤 타입을 노출할지는 별개의 문제였다. `js-sys`는 raw JS binding에 가까운 crate이기 때문에, 단순히 외부 crate의 `half::f16`을 public API로 끌어오거나, 나중에 native `f16`이 생겼을 때 써야 할 이름을 지금 다른 타입에 써버리면 API가 오래 남는 문제가 생길 수 있다.

그래서 이 작업의 핵심은 "Float16Array를 추가한다"가 아니라, Rust stable에 `f16`이 없는 상태에서 지금 열어도 되는 public API 경계를 정하는 것이었다.

## 이슈와 PR

- Issue: [Issue #4984](https://github.com/wasm-bindgen/wasm-bindgen/issues/4984)
- PR: [PR #5033](https://github.com/wasm-bindgen/wasm-bindgen/pull/5033)
- 후속 PR: [PR #5067](https://github.com/wasm-bindgen/wasm-bindgen/pull/5067)
- 상태: 2026년 3월 29일 merge
- merge commit: `2c8fe69db`
- 범위: `js-sys` public API 추가, wasm test 추가, `CHANGELOG.md` 반영

최종 merge는 5개 파일, 374 lines 추가였다.

- `CHANGELOG.md`
- `crates/js-sys/Cargo.toml`
- `crates/js-sys/src/lib.rs`
- `crates/js-sys/tests/wasm/DataView.rs`
- `crates/js-sys/tests/wasm/TypedArray.rs`

초기에는 `half` 기반 변환과 `f64` accessor까지 검토했지만, 최종 방향은 더 명시적인 `f32` accessor와 raw `[u16]` helper였다.

처음 [Issue #4984](https://github.com/wasm-bindgen/wasm-bindgen/issues/4984)에서 확인한 방향은 raw binding을 기본으로 만들고, `half` crate 변환을 feature flag 뒤에 둘 수 있는지였다. 메인테이너는 당장은 `half`를 직접 의존하지 말고, `half`가 제공하는 `u16` bit conversion과 잘 맞도록 `new_from_u16_slice` 같은 helper를 두는 편이 낫다고 정리했다. 이때부터 raw binding, explicit helper, future `f16` 이름 보존이라는 방향이 잡혔다.

[PR #5033](https://github.com/wasm-bindgen/wasm-bindgen/pull/5033)에서는 이 방향이 리뷰를 거치며 더 다듬어졌다. `TypedArray`가 Atomics generic bound에도 쓰인다는 지적이 있었지만, 기존 float typed array와의 일관성을 위해 이 문제는 PR 범위 밖으로 뺐다. 이후 float16 값은 `f32`로 손실 없이 표현할 수 있으니 `*_as_f32`, `*_from_f32` suffix를 쓰자는 리뷰를 반영했다. 마지막에는 `half` 사용 예를 docs/tests에 추가하고 `CHANGELOG.md` entry를 넣은 뒤 merge됐다.

## 구현한 범위

### Float16Array raw binding

`js_sys::Float16Array` 타입과 기본 JS typed array 메서드를 추가했다. 생성자, buffer, subarray, slice, copyWithin, set, length, byte length, byte offset 같은 API를 기존 typed array 패턴에 맞춰 정리했다.

숫자 값을 직접 받거나 반환하는 메서드는 모두 타입 의미가 드러나도록 이름을 붙였다.

- `fill_with_f32`
- `for_each_as_f32`
- `try_for_each_as_f32`
- `at_as_f32`
- `get_index_as_f32`
- `set_index_from_f32`

unsuffixed 이름을 쓰지 않은 이유는 의도적이다. 예를 들어 `get_index`를 지금 `f32` 반환 API로 열어버리면, 나중에 Rust native `f16`이 안정화됐을 때 더 자연스러운 `f16` API 이름을 쓰기 어렵다.

### DataView float16 accessors

처음에는 numeric helper를 어떤 타입으로 둘지 여러 방향을 검토했다. 리뷰를 거치며 최종 방향은 `f32` 기반의 명시적 이름으로 정리됐다.

- `get_float16_as_f32`
- `get_float16_endian_as_f32`
- `set_float16_from_f32`
- `set_float16_endian_from_f32`

`f32`는 float16 값을 손실 없이 표현할 수 있고, WebAssembly에서도 native numeric type이다. 이 결정은 리뷰에서 나온 의견을 반영한 것이다. 처음 초안은 `f64` 쪽을 보고 있었지만, `f32`로 충분하다면 더 작은 타입을 명시하는 편이 낫고, 이름에도 `as_f32`, `from_f32`를 붙여 future native `f16` API와 충돌하지 않게 만들 수 있었다.

### Raw u16 helper API

float16의 binary16 bit pattern을 직접 다룰 수 있도록 `[u16]` helper도 추가했다.

- `new_from_u16_slice`
- `copy_to_u16_slice`
- `copy_from_u16_slice`
- `to_u16_vec`

이 helper들은 `Float16Array`가 바라보는 `ArrayBuffer`, `byte_offset`, `length`를 그대로 사용해 내부적으로 `Uint16Array` view를 만든다. 그 다음 기존 `Uint16Array`의 `copy_to`, `copy_from`, `to_vec` 구현을 재사용한다.

이 방식은 float16 값을 "숫자 타입"으로 가장하지 않고, 실제 저장 단위인 IEEE 754 binary16 bit pattern을 그대로 다룬다. `half` crate는 public API dependency로 강제하지 않았다. 대신 doc comment와 wasm test에서 `half::f16::to_bits`, `half::f16::from_bits` 예시를 보여 주는 방식으로 실제 사용 흐름을 설명했다.

## 해결해야 했던 문제들

### Rust stable에 f16이 없었다

처음부터 가장 큰 제약은 Rust stable에 builtin `f16`이 없다는 점이었다. 그래서 `Float16Array`를 `Float32Array`나 `Float64Array`처럼 자연스럽게 Rust primitive type과 연결할 수 없었다.

해결 방향은 세 층으로 나눴다.

- JS API 자체는 raw binding으로 추가한다.
- 숫자로 읽고 쓰는 API는 `f32`임을 이름에 드러낸다.
- raw binary16 bit pattern은 `[u16]` helper로 다룬다.

이렇게 하면 지금은 안정적인 Rust 타입만 사용하면서, 나중에 native `f16`이 안정화됐을 때 unsuffixed 이름을 새 API에 남겨둘 수 있다.

### f64 초안에서 f32 API로 바뀌었다

초기 PR 설명과 일부 중간 기록에는 `f64` accessor가 남아 있다. 당시에는 JS `Number` 모델과 기존 `DataView` float API를 의식해 `f64`를 검토했다. 하지만 리뷰에서 `f32`도 native Wasm type이고 float16을 손실 없이 표현하기에 충분하다는 피드백이 나왔다.

그 결과 `DataView`와 `Float16Array`의 직접 numeric API를 전부 `f32` 기반으로 바꿨다. 동시에 이름도 `get_float16_as_f32`, `set_float16_from_f32`, `fill_with_f32`처럼 바꿨다. 타입을 바꾸는 것만으로는 부족했고, API 이름에도 "이건 native `f16`이 아니라 `f32` 경유 API"라는 의미가 남아야 했다.

### half를 쓰지 않는다는 말의 의미가 정리됐다

처음 방향은 "`half`를 hard dependency로 만들지 않는다"였다. 여기서 헷갈릴 수 있는 부분은 "아예 `half`를 언급하지 않는다"가 아니라는 점이다.

최종적으로 `half`는 normal dependency나 public API type으로 들어가지 않았다. 대신 `[u16]` helper의 대표 사용 방식이 `half::f16::to_bits`와 `half::f16::from_bits`가 될 가능성이 높기 때문에, doc comment와 test에서는 그 흐름을 보여줬다. 즉 사용자는 원하면 `half`를 자기 코드에서 쓸 수 있지만, `js-sys` API 자체가 `half`에 묶이지는 않는다.

### TypedArray와 Atomics trait 의미가 걸렸다

리뷰 중 `impl TypedArray for Float16Array {}`에 대한 지적이 있었다. 이 repo에서 `TypedArray`는 단순 marker처럼 보이지만, 실제로는 `Atomics::*` generic bound에도 쓰인다. `Float16Array`에 `TypedArray`를 구현하면, 원래 float16에는 맞지 않는 atomic API surface가 같이 열릴 수 있다는 문제였다.

이 부분은 내가 처음 구현할 때 놓친 지점이었다. 기존 `Float32Array`, `Float64Array`도 같은 방식으로 들어가 있었기 때문에 패턴을 따라갔지만, 그 패턴 자체가 완전히 깨끗한 설계는 아니었다.

최종 결정은 이번 PR에서 `Float16Array`만 다르게 고치지 않는 쪽이었다. RReverser는 기존 float typed array와 일관성을 유지하고, atomic bound 문제는 나중에 전체적으로 고치는 편이 낫다고 정리했다. 그래서 이 이슈는 [PR #5033](https://github.com/wasm-bindgen/wasm-bindgen/pull/5033) 범위 밖으로 빼고, `Float16Array`는 기존 float typed array들과 같은 방향으로 merge됐다.

### runtime feature detection이 필요했다

`Float16Array`와 `DataView.getFloat16`은 모든 JS runtime에서 항상 있는 API가 아니다. 그래서 테스트를 그냥 추가하면, API를 아직 지원하지 않는 환경에서 전체 `js-sys` 테스트가 깨질 수 있다.

이 문제는 테스트에 runtime guard를 넣어서 해결했다.

- `TypedArray.rs`에는 `has_float16_array`를 두고 `globalThis.Float16Array` 존재 여부를 확인했다.
- `DataView.rs`에는 `has_float16_methods`를 두고 `DataView.prototype.getFloat16`, `setFloat16` 존재 여부를 확인했다.

이렇게 해서 API가 있는 환경에서는 실제 동작을 검증하고, 아직 지원하지 않는 환경에서는 관련 테스트만 건너뛰게 했다.

## 검증

처음 WSL에서는 컴파일 검증부터 진행했다.

```bash
cargo test -p js-sys --target wasm32-unknown-unknown --no-run
```

이 단계는 통과했다. 문제는 전체 wasm 테스트였다. `cargo test -p js-sys --target wasm32-unknown-unknown`를 끝까지 돌리려면 `wasm-bindgen-test-runner`가 browser test까지 실행해야 하고, 이를 위해 WebDriver가 필요했다.

WSL에서 바로 막힌 이유는 세 가지였다.

- WSL 내부에 `geckodriver`, `chromedriver`, `msedgedriver`가 없었다.
- Windows Chrome/ChromeDriver를 WSL에서 붙이려 했지만 loopback과 WSL 네트워크 경계 때문에 안정적으로 연결되지 않았다.
- Linux용 Chrome for Testing과 ChromeDriver를 WSL 안에서 직접 띄우는 방식은 리소스 사용량이 커서 실행 중 강제 종료됐다.

그래서 최종 검증은 Windows native 환경에서 진행했다. Windows Rust toolchain에 wasm target을 추가하고, ChromeDriver 경로를 환경변수로 지정한 뒤 같은 테스트를 다시 실행했다.

```powershell
rustup target add wasm32-unknown-unknown
$env:CHROMEDRIVER = "C:\Users\ChanhoLee\Tools\WebDriver\chromedriver.exe"
cd D:\code\wasm-bindgen
cargo test -p js-sys --target wasm32-unknown-unknown
```

작업 보고서 기준 최종 결과는 아래와 같았다.

- `tests/browser.rs` 통과
- `tests/node.rs` 통과
- `tests/wasm/main.rs` 통과
- `700 passed`
- `0 failed`
- `5 ignored`

이번 변경과 직접 관련된 `TypedArray::float16array_basic_methods`, `TypedArray::float16array_u16_helpers`, `DataView::test`도 이 흐름 안에서 통과했다. 즉 최종 상태는 단순히 `--no-run` 컴파일만 된 것이 아니라, Windows native 환경에서 `js-sys` wasm 테스트를 실제로 실행한 상태였다.

## 진행 중 생긴 CI와 리뷰 이슈

PR 중간에 CodSpeed regression과 `wasm-bindgen-cli` reference test 실패도 확인했다. 조사 결과 `Float16Array` 변경이 `JsValue::from_str` hot path를 직접 건드린 것은 아니었고, reference test 실패는 `.wat` type section ordering 쪽의 snapshot fragility로 보는 쪽이 더 설득력 있었다.

CodSpeed 쪽에서는 `bench_js_value_from_str`가 느려진 것으로 표시된 적이 있었다. 이때 PR 커밋과 merge commit을 다시 보고, 실제로 건드린 파일도 확인했다. 변경 범위는 `js-sys`의 `Float16Array`, `DataView`, test, changelog였고 `JsValue::from_str` 관련 hot path를 직접 수정하지 않았다. 그래서 확정 원인을 단정하지 않고, 이 PR 코드가 해당 benchmark를 직접 느리게 만들었다고 보기는 어렵다고 판단했다.

`wasm-bindgen-cli` reference test 실패는 `.wat` 출력의 `type (;N;)` 순서와 type index 번호 차이에 가까웠다. 로컬 조사에서는 runtime behavior 차이라기보다 snapshot ordering 문제로 보였다. `reference.rs`가 import order와 local function order는 안정화하지만 type section ordering까지 canonicalize하지는 않는다는 점도 확인했다. 비슷한 실패가 다른 open PR에서도 보였기 때문에, 이 문제는 이번 `Float16Array` 구현 버그라기보다 upstream reference snapshot fragility로 분리해서 봤다.

리뷰 막바지에는 `CHANGELOG.md` entry도 추가했다. 단순 코드 변경만이 아니라 public API 추가가 release-facing 기록에도 남아야 했기 때문에, 최종 PR에는 changelog 반영까지 포함됐다.

## merge 후 후속 수정

[PR #5033](https://github.com/wasm-bindgen/wasm-bindgen/pull/5033)이 merge된 뒤 [PR #5067](https://github.com/wasm-bindgen/wasm-bindgen/pull/5067)에서 `Float16Array::fill_with_f32`에 빠진 `js_name = "fill"`이 보완됐다.

[PR #5067](https://github.com/wasm-bindgen/wasm-bindgen/pull/5067) 본문에는 원인이 명확히 적혀 있었다. `Float16Array::fill_with_f32`에 `js_name = "fill"`이 빠져 있어서, binding이 JavaScript 객체의 native `fill()`이 아니라 존재하지 않는 `fill_with_f32`라는 메서드를 호출하게 되는 버그였다. 이 문제는 앞선 `Float16Array` binding을 조사하던 중 발견됐고, Guy Bedford가 2026년 3월 30일에 한 줄 수정으로 merge했다.

원인은 이름 변경 과정에 있었다. 처음에는 Rust 메서드 이름도 `fill`이었다가, 리뷰를 반영하면서 `fill_with_f32`로 바뀌었다. 그런데 `#[wasm_bindgen(method)]`만 남아 있으면 wasm-bindgen은 Rust 메서드 이름을 JS 메서드 이름으로 사용하려고 한다. JavaScript의 실제 메서드는 `fill`이므로, Rust 쪽 이름을 `fill_with_f32`로 바꿨다면 attribute에 `js_name = fill`을 명시해야 했다.

[PR #5067](https://github.com/wasm-bindgen/wasm-bindgen/pull/5067)의 수정은 한 줄이었다.

```rust
#[wasm_bindgen(method, js_name = fill)]
pub fn fill_with_f32(this: &Float16Array, value: f32, start: u32, end: u32) -> Float16Array;
```

이 후속 수정까지 보면, 이번 작업에서 남은 실수는 "API 이름을 Rust 쪽에서 명시적으로 바꾸는 과정에서 JS method mapping을 끝까지 같이 맞추지 못한 것"이었다. 해결은 `wasm_bindgen` attribute에 실제 JS 이름을 명시하는 방식이었다.

## 결과

[PR #5033](https://github.com/wasm-bindgen/wasm-bindgen/pull/5033)은 2026년 3월 29일 merge됐다. 최종적으로 `js_sys::Float16Array`, `DataView` float16 accessor, `Float16Array`의 `f32` 기반 숫자 메서드, raw `[u16]` helper API가 들어갔다.

이 작업에서 중요한 판단은 Rust stable에 없는 타입을 public API처럼 가장하지 않는 것이었다. JS binding은 추가하되, Rust 쪽 helper는 `f32`와 `u16`이라는 현재 안정적인 표현으로 제한했다. 동시에 이름에는 타입 의미를 남겨서, future native `f16` API가 들어올 자리를 비워뒀다.

## References

- [wasm-bindgen repository](https://github.com/wasm-bindgen/wasm-bindgen)
- [wasm-bindgen guide](https://wasm-bindgen.github.io/wasm-bindgen/)
- [Issue #4984: Float16Array bindings](https://github.com/wasm-bindgen/wasm-bindgen/issues/4984)
- [PR #5033: Add Float16Array bindings](https://github.com/wasm-bindgen/wasm-bindgen/pull/5033)
- [PR #5067: fix(js-sys): add missing js_name = "fill" to Float16Array::fill_with_f32](https://github.com/wasm-bindgen/wasm-bindgen/pull/5067)
