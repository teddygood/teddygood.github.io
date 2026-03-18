---
title: "WSL에서 메모리, CPU, swap 제한 설정하기"
date: '2026-03-18'
draft: false
---

Windows에서 WSL을 오래 켜 두거나 Docker, 빌드, 모델 작업을 같이 돌리다 보면 WSL이 메모리를 꽤 크게 잡는 느낌이 들 때가 있다. 이럴 때는 배포판 안의 `/etc/wsl.conf`가 아니라 Windows 사용자 홈의 `.wslconfig`로 WSL2 VM 자체의 자원 한도를 정하면 된다.

## 어디에 설정하나

Microsoft 공식 문서 기준으로 WSL2 전역 설정 파일은 `%UserProfile%\.wslconfig`다. 예를 들면 다음 경로다.

```text
C:\Users\ChanhoLee\.wslconfig
```

이 파일은 기본으로 없을 수 있어서 직접 만들어도 된다. 최근 문서에는 수동 편집보다 **WSL Settings** 앱에서 수정하는 방식을 권장한다고도 적혀 있지만, 파일로 관리하고 싶다면 `.wslconfig`를 직접 써도 된다.

중요한 점은 이 파일이 **WSL2 전체에 전역 적용**된다는 것이다. 즉 Ubuntu 하나만이 아니라 WSL2로 실행되는 다른 배포판에도 같이 영향을 준다.

## 자주 만지는 항목

- `memory`: WSL2 VM에 할당할 최대 메모리. 기본값은 Windows 전체 메모리의 50%.
- `processors`: WSL2 VM이 사용할 논리 CPU 개수. 기본값은 Windows와 동일한 논리 프로세서 수.
- `swap`: WSL2 VM에 붙일 swap 크기. 기본값은 Windows 메모리의 25%를 GB 단위로 올림한 값.
- `swapFile`: swap VHDX 파일 위치.
- `[experimental] autoMemoryReclaim`: 캐시 메모리를 어떻게 회수할지 정하는 실험 옵션. `disabled`, `gradual`, `dropCache`를 지원한다.

메모리만 줄여도 대부분의 체감 문제는 해결되지만, 빌드나 Docker 작업이 자주 터지면 `swap`도 같이 조정하는 편이 낫다. 크기 값은 `16GB`, `512MB`처럼 단위를 붙여 적는 방식이 가장 덜 헷갈린다.

## 예시 설정

아래처럼 시작하면 무난하다.

```ini
[wsl2]
memory=16GB
processors=8
swap=8GB

[experimental]
autoMemoryReclaim=gradual
```

각 항목의 의미는 다음과 같다.

- `memory=16GB`: WSL이 최대 16GB까지만 메모리를 사용하도록 제한
- `processors=8`: 논리 CPU 8개까지만 사용
- `swap=8GB`: 메모리가 부족할 때 사용할 디스크 기반 swap 8GB 지정
- `autoMemoryReclaim=gradual`: 캐시 메모리를 천천히 회수하는 실험 옵션

`autoMemoryReclaim`은 공식 문서에서도 `[experimental]` 섹션에 있는 기능이라, 항상 켜야 하는 기본 옵션으로 보기보다는 필요할 때 써보는 정도가 적당하다.

## 적용 방법

1. Windows에서 `%UserProfile%\.wslconfig` 파일을 만들거나 연다.
2. 원하는 설정을 저장한다.
3. PowerShell이나 Windows Terminal에서 WSL을 완전히 종료한다.
4. 다시 Ubuntu 같은 배포판을 실행한다.

```powershell
wsl --shutdown
wsl -d Ubuntu
```

Microsoft 문서에는 설정 변경 후 WSL 서브시스템이 완전히 내려가야 반영된다고 적혀 있다. 쉘 창만 닫고 바로 다시 열면 이전 설정이 남아 있을 수 있어서, 보통은 `wsl --shutdown`을 같이 쓰는 편이 가장 확실하다.

## 적용됐는지 확인하는 방법

WSL 안에서 아래 정도만 보면 된다.

```bash
free -h
nproc
swapon --show
```

- `free -h`: 메모리와 swap 총량 확인
- `nproc`: 현재 보이는 CPU 개수 확인
- `swapon --show`: swap 활성화 여부와 크기 확인

## 설정할 때 주의할 점

- `.wslconfig`는 WSL1이 아니라 **WSL2**에만 적용된다.
- 메모리를 너무 낮게 잡으면 Docker 빌드, 패키지 컴파일, 모델 로딩 같은 작업이 오히려 자주 실패할 수 있다.
- `swap=0`으로 두면 디스크 사용은 줄지만 메모리 부족 상황에서 바로 OOM으로 죽을 가능성이 커진다.
- 파일 문법이 잘못돼도 WSL은 대체로 그냥 실행되기 때문에, 설정이 안 먹었다 싶으면 오타부터 보는 편이 빠르다.

내 기준에서는 처음부터 아주 공격적으로 줄이기보다, `memory`만 먼저 적당히 제한하고 필요하면 `swap`과 `processors`를 같이 조정하는 쪽이 덜 번거롭다.

## References

- [Advanced settings configuration in WSL](https://learn.microsoft.com/en-us/windows/wsl/wsl-config)
