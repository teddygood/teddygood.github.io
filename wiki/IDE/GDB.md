---
title: "GDB"
date: '2026-04-29'
---

GDB(GNU Debugger)는 실행 중인 네이티브 프로그램(native program)을 멈추고, 그 순간의 호출 스택, 변수, 레지스터, 메모리, 스레드 상태를 보는 디버거(debugger)다. C, C++, Rust처럼 컴파일된 바이너리를 디버깅할 때 많이 쓰고, CPython이나 native extension처럼 Python 아래쪽에서 도는 C/C++ 런타임을 볼 때도 쓴다.

`printf`나 로그가 실행 흐름을 추정하게 해준다면, GDB는 프로세스의 실제 상태를 멈춘 자리에서 직접 확인하게 해준다. 그래서 GDB는 "어디서 죽었는가"보다 "왜 그 상태가 되었는가"를 좁혀 가는 도구에 가깝다.

## 언제 쓰는가

- segmentation fault, abort, assert 실패의 실제 위치를 확인할 때
- 재현 가능한 crash에서 함수 호출 경로와 인자 값을 보고 싶을 때
- 포인터, 배열, 구조체, 메모리 값이 예상과 다른 순간을 잡고 싶을 때
- multi-threaded program에서 어떤 thread가 어디에 멈춰 있는지 확인할 때
- 죽은 프로세스의 core dump를 열어 마지막 상태를 분석할 때
- 실행 중인 서버나 장기 실행 프로세스에 attach해서 현재 상태를 볼 때

## 디버그 심볼

GDB가 소스 라인, 함수명, 변수명을 잘 보여주려면 바이너리에 debug symbol이 있어야 한다.

```bash
gcc -g -O0 main.c -o app
g++ -g -O0 main.cpp -o app
cargo build
```

`-g`는 디버그 정보를 넣고, `-O0`는 최적화를 꺼서 변수와 실행 흐름이 소스 코드와 잘 대응되게 만든다. 최적화 빌드에서만 나는 문제라면 `-Og`, `-O1`, `-O2`에서도 다시 봐야 하지만, 처음 관찰할 때는 최적화를 끄는 쪽이 읽기 쉽다.

## 기본 흐름

프로그램을 GDB로 연다.

```bash
gdb ./app
```

GDB 안에서 프로그램을 실행한다.

```gdb
run
```

인자를 붙여 실행할 수도 있다.

```gdb
run input.txt --verbose
```

처음부터 인자를 고정하려면 아래처럼 시작한다.

```bash
gdb --args ./app input.txt --verbose
```

가장 작은 디버깅 루프는 아래 정도면 충분하다.

```gdb
break main
run
next
print value
backtrace
continue
```

`break`로 멈출 위치를 잡고, `run`으로 실행한 뒤, `next`와 `step`으로 흐름을 좁힌다. 상태는 `print`, `info locals`, `info args`로 보고, crash가 나면 `backtrace`로 호출 경로를 확인한다.

## 자주 쓰는 명령

| 목적 | 명령 |
| --- | --- |
| 프로그램 실행 | `run`, `r` |
| 계속 실행 | `continue`, `c` |
| 한 줄 실행, 함수 안으로 들어감 | `step`, `s` |
| 한 줄 실행, 함수 호출은 넘김 | `next`, `n` |
| 현재 함수가 끝날 때까지 실행 | `finish` |
| 변수 출력 | `print x`, `p x` |
| 지역 변수 출력 | `info locals` |
| 함수 인자 출력 | `info args` |
| 호출 스택 출력 | `backtrace`, `bt` |
| 특정 스택 프레임으로 이동 | `frame 2`, `f 2` |
| 브레이크포인트 목록 | `info breakpoints` |
| 브레이크포인트 삭제 | `delete 1` |
| 프로그램 종료 | `quit`, `q` |

## Breakpoint와 watchpoint

breakpoint는 "이 위치에 도달하면 멈춘다"는 규칙이다.

```gdb
break main
break parse_config
break src/parser.c:120
```

조건을 붙이면 특정 상태에서만 멈출 수 있다.

```gdb
break src/parser.c:120 if len > 1024
condition 1 len > 1024
```

watchpoint는 "이 값이 바뀌면 멈춘다"는 규칙이다.

```gdb
watch counter
watch *ptr
rwatch global_state
awatch global_state
```

어떤 코드가 특정 메모리나 전역 상태를 바꾸는지 모를 때 watchpoint가 유용하다. 반복문 안에서 매번 멈추는 breakpoint보다, 실제 값이 바뀌는 순간만 잡는 편이 빠를 때가 많다.

## Stack, frame, 변수 읽기

crash가 나면 먼저 `bt`를 본다.

```gdb
backtrace
```

출력은 보통 아래처럼 읽는다.

```text
#0  parse_token (...)
#1  parse_line (...)
#2  load_config (...)
#3  main (...)
```

`#0`은 지금 멈춘 가장 안쪽 함수다. 직접 원인은 위쪽 프레임에서 보이고, 그 함수가 왜 호출됐는지는 아래쪽 프레임을 따라가며 본다.

특정 프레임의 상태를 보려면 이동한다.

```gdb
frame 2
info args
info locals
```

포인터는 주소와 값이 다르므로 구분해서 본다.

```gdb
print ptr
print *ptr
```

메모리 자체를 볼 때는 `x` 명령을 쓴다.

```gdb
x/16xb ptr
x/8xw ptr
x/s str
x/i $pc
```

`x/16xb ptr`은 `ptr`부터 16바이트를 16진수로 보여준다. `x/s str`은 C 문자열로 읽고, `x/i $pc`는 현재 program counter 위치의 instruction을 보여준다.

## Thread와 core dump

multi-threaded program에서는 먼저 thread 목록을 본다.

```gdb
info threads
```

특정 thread로 이동한 뒤 stack을 확인한다.

```gdb
thread 3
bt
```

deadlock이나 hang을 볼 때는 모든 thread의 stack을 한 번에 찍는 편이 좋다.

```gdb
thread apply all bt
```

프로세스가 이미 죽은 뒤에도 core dump가 있으면 마지막 상태를 볼 수 있다.

```bash
gdb ./app core
```

core dump는 사후 분석이므로 `continue`, `next`, `step`으로 실행을 진행할 수 없다. 대신 죽은 순간의 stack, 변수, 메모리, thread 상태를 읽는다.

## Attach

이미 실행 중인 프로세스에도 붙을 수 있다.

```bash
gdb -p <pid>
```

또는 GDB 안에서 attach한다.

```gdb
attach <pid>
```

붙는 순간 대상 프로세스는 멈춘다. 운영 중인 서버에 붙으면 서비스 영향이 생길 수 있으므로, attach는 관찰 대상과 영향 범위를 알고 써야 한다.

## Python과 native runtime을 볼 때

Python 코드 자체만 볼 때는 `pdb`, `breakpoint()`, IDE debugger가 더 직접적이다. GDB는 그 아래에서 CPython이 어떤 C 함수로 Python bytecode를 실행 중인지, native extension이나 thread pool이 어디서 막혔는지 볼 때 의미가 있다.

CPython용 GDB helper가 활성화되어 있으면 아래 명령을 같이 쓸 수 있다.

```gdb
py-bt
py-list
py-locals
bt
thread apply all bt
```

`py-bt`는 Python frame 기준의 backtrace를 보여주고, `bt`는 C/native stack을 보여준다. PyTorch, NumPy, CPython extension처럼 Python과 native layer가 섞인 문제에서는 두 stack을 같이 봐야 어디에서 막혔는지 구분할 수 있다.

## PyTorch 코드를 볼 때

PyTorch도 GDB로 볼 수 있다. 다만 "PyTorch Python 코드"와 "PyTorch C++/CUDA runtime"을 같은 방식으로 보는 것은 아니다.

Python으로 작성한 model, dataloader, training loop의 흐름은 보통 `pdb`, `breakpoint()`, IDE debugger, `faulthandler`가 더 직접적이다. GDB가 강해지는 지점은 그 아래다. 예를 들어 Python stack은 `loss.backward()` 안쪽에 있는데 실제로는 ATen C++ op, BLAS/OpenMP thread, CUDA 동기화 지점, native extension에서 시간이 쓰이는지 확인하고 싶을 때 GDB가 의미가 있다.

가장 단순한 시작점은 Python interpreter 자체를 GDB로 실행하는 것이다.

```bash
gdb --args python train.py --arg value
```

GDB 안에서 실행한다.

```gdb
run
```

이미 실행 중인 학습 프로세스라면 attach할 수도 있다.

```bash
gdb -p <pid>
```

붙은 뒤에는 Python stack과 native stack을 나눠 본다.

```gdb
py-bt
bt
info threads
thread apply all bt
thread apply all py-bt
```

`py-bt`는 현재 thread의 Python frame을 보여준다. `bt`는 CPython, libtorch, libc, pthread 같은 native call stack을 보여준다. `thread apply all bt`는 dataloader worker, OpenMP thread, background thread까지 한 번에 훑을 때 쓴다. CPython 문서에서도 `thread apply all py-bt`처럼 모든 thread에 Python-level backtrace를 적용하는 방식을 설명한다.

PyTorch 내부 C++ 함수에 breakpoint를 걸 수도 있다. 예를 들어 PyTorch 개발 문서의 예시는 `at::Tensor::neg`에 pending breakpoint를 걸고, `import torch` 이후 해당 symbol이 로드되면 breakpoint가 활성화되는 흐름을 보여준다.

```gdb
break at::Tensor::neg
run
```

GDB가 아직 symbol을 모른다고 하면 pending breakpoint로 둘지 묻는다. 이 경우 `y`를 선택하면 `import torch`로 공유 라이브러리가 로드된 뒤 breakpoint가 걸릴 수 있다.

```text
Function "at::Tensor::neg" not defined.
Make breakpoint pending on future shared library load? (y or [n]) y
```

PyTorch source tree에는 `pytorch-gdb`라는 GDB helper도 있다. 이 helper가 로드되면 `torch-tensor-repr` 같은 PyTorch 전용 명령을 쓸 수 있고, `at::Tensor`를 Python의 tensor 표현에 가깝게 읽을 수 있다. 보안 때문에 프로젝트 `.gdbinit` 자동 로딩이 막힐 수 있으므로, 신뢰하는 PyTorch checkout이라면 home의 GDB 설정에 safe path를 추가한다.

```gdb
add-auto-load-safe-path /path/to/pytorch/.gdbinit
```

PyTorch C++ 내부로 제대로 step-in하려면 debug symbol이 중요하다. 일반 wheel이나 release build에서도 stack을 어느 정도 볼 수는 있지만, 소스 라인과 지역 변수까지 보려면 source build가 낫다. PyTorch 개발 문서 기준으로 `DEBUG=1`은 전체를 `-g -O0`로 빌드하지만 매우 느릴 수 있다. 관심 파일만 보고 싶으면 `USE_CUSTOM_DEBINFO`로 특정 C++ 파일에만 debug info를 넣는 쪽이 더 실용적이다.

```bash
USE_CUSTOM_DEBINFO="aten/src/ATen/native/Linear.cpp" python setup.py develop
```

에러가 나는 순간 C++ stack trace만 빠르게 보고 싶을 때는 GDB보다 환경 변수가 먼저일 수 있다.

```bash
TORCH_SHOW_CPP_STACKTRACES=1 python train.py
```

CUDA 문제는 한 단계 더 구분해야 한다. `CUDA_LAUNCH_BLOCKING=1`은 CUDA 호출을 동기적으로 만들어 Python/C++ stack과 실제 오류 지점을 맞추는 데 도움이 된다.

```bash
CUDA_LAUNCH_BLOCKING=1 python train.py
```

하지만 GPU kernel 내부를 보려면 일반 GDB보다 `cuda-gdb`, `cuda-memcheck`, `nsys`, `ncu`, `torch.profiler`가 더 맞다. 일반 GDB는 주로 Python process, CPython, libtorch host-side C++ stack, thread 상태를 보는 도구로 생각하는 편이 안전하다.

## 원하는 정보가 안 보일 때

변수 값이 `<optimized out>`으로 보이면 최적화 때문에 소스 코드의 변수 형태가 남아 있지 않은 것이다. 재현 가능하면 `-O0` 또는 `-Og`로 다시 빌드한다.

소스 라인이 안 보이면 debug symbol이 없거나 빌드 당시 경로와 현재 소스 경로가 다를 수 있다. 필요하면 소스 경로를 추가한다.

```gdb
directory /path/to/source
```

공유 라이브러리 symbol이 안 보이면 라이브러리의 debug symbol 패키지가 따로 필요할 수 있다. 배포판에 따라 `-dbg`, `-dbgsym`, `debuginfo` 패키지를 설치해야 한다.

GDB에서 값을 바꾸는 것도 가능하다.

```gdb
set variable count = 10
```

이 기능은 가설 검증에는 좋지만 원래 프로그램과 다른 상태를 만든다. 값을 바꿔서 문제가 사라졌다고 해서 버그가 해결된 것은 아니다.

## References

- [GDB: The GNU Project Debugger](https://www.sourceware.org/gdb/)
- [Debugging with GDB](https://sourceware.org/gdb/current/onlinedocs/gdb.html)
- [Debugging Builds - The Cargo Book](https://doc.rust-lang.org/cargo/reference/profiles.html#debug)
- [Debugging Builds - The Rustc Book](https://doc.rust-lang.org/rustc/codegen-options/index.html#debuginfo)
- [Python Developer's Guide - Debugging](https://devguide.python.org/development-tools/gdb/)
- [Debugging C API extensions and CPython Internals with GDB - Python documentation](https://docs.python.org/3/howto/gdb_helpers.html)
- [Development Tips - PyTorch Wiki](https://github.com/pytorch/pytorch/wiki/Development-Tips)
- [C++ Debugging - PyTorch/XLA documentation](https://docs.pytorch.org/xla/release/r2.9/contribute/cpp_debugger.html)
- [Debugging Environment Variables - PyTorch documentation](https://docs.pytorch.org/docs/2.9/debugging_environment_variables.html)
- [CUDA Environment Variables - PyTorch documentation](https://docs.pytorch.org/docs/2.9/cuda_environment_variables.html)

## Link

- [LSP](./LSP.md)
