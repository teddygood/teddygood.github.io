---
title: "WSL VHD 압축은 왜 주기적으로 해야 할까?"
date: '2026-03-18'
draft: false
---

WSL을 쓰다 보면 C 드라이브 공간이 점점 줄어드는 경험을 하게 된다. 특히 Docker, 빌드 캐시, 패키지 캐시, 모델 파일 등을 WSL 안에서 많이 만들었다가 지우는 작업을 반복하면 체감이 더 크다.

이번에 확인한 내 환경에서는 Ubuntu 내부 루트 사용량이 약 `101GB`였는데, 호스트 쪽 `ext4.vhdx`는 약 `150GB`를 그대로 차지하고 있었다. 즉, WSL 내부에서는 이미 지운 공간이 있었지만 Windows 입장에서는 그 여유 공간이 자동으로 반환되지 않은 상태였다.

## 왜 이런 일이 생길까

기본적인 WSL2 디스크는 동적으로 커지는 VHDX(Virtual Hard Disk)를 사용한다. 그래서 WSL 안에서 파일을 많이 생성하면 `ext4.vhdx`는 자연스럽게 커진다. 여기까지는 당연한 것이다. 문제는 반대 방향이다. WSL 안에서 파일을 삭제해도, 호스트 쪽 VHDX 파일 크기가 자동으로 줄어들지 않는 경우가 많다.

이 말은 곧 다음을 의미한다.

- WSL 안 캐시를 많이 썼다가 지우면 WSL 자체의 내부 여유 공간은 늘어난다.
- 하지만 C 드라이브에서는 그만큼의 공간이 바로 돌아오지 않을 수 있다.
- 그래서 WSL 내부를 정리한 뒤에는 별도로 VHD를 compact(압축) 해야 한다.

## 자동으로 되지는 않는가?

여기서 조금 헷갈린다. Microsoft는 2023년 9월 업데이트 글에서 sparse VHD를 소개하면서, 디스크가 자동으로 shrink되는 흐름을 기대하게 만드는 설명을 했다. 그래서 `.wslconfig`의 `sparseVhd=true`나 `wsl --manage <distro> --set-sparse true`를 켜두면 파일을 지웠을 때 호스트의 `ext4.vhdx`도 알아서 줄어들 것처럼 읽힌다.

그런데 현재 공식 설정 문서의 설명은 더 조심스럽다. 지금 문서는 `sparseVhd=true`를 "새로 생성되는 VHD를 sparse로 만든다" 정도로 설명하고 있다. 반면 `diskpart`의 `compact vdisk` 문서는 동적 VHD가 파일 추가 시 커지지만, 삭제한다고 자동으로 줄어들지는 않는다고 분명히 적고 있다.

실제 사용자 경험도 이쪽에 더 가깝다. Microsoft WSL GitHub 이슈를 보면 `set-sparse true`를 적용했는데도 `ext4.vhdx`가 줄어들지 않았다는 보고가 몇 번 보인다. 2023년 이슈 [#10703](https://github.com/microsoft/WSL/issues/10703)에서는 테스트 파일을 만들었다가 지운 뒤에도 자동 정리가 안 됐고, 2024년 이슈 [#12103](https://github.com/microsoft/WSL/issues/12103)에서도 sparse 설정 후 VHDX 크기가 그대로였다고 적혀 있다.

게다가 2025년에는 sparse VHD 지원이 더 애매해졌다. WSL 2.5.6 프리릴리스 릴리스 노트에는 sparse VHD를 `--allow-unsafe` 뒤로 숨겼다고 적혀 있다.

정리하면 기본적인 동적 VHD는 자동 축소를 기대하면 안 된다. sparse VHD는 "될 수도 있다" 정도로 봐야지, 지금 시점에 믿고 맡길 기능으로 보기는 어렵다.

내 결론은 단순하다. **지금은 자동 축소를 기대하기보다, WSL 안쪽 정리와 Windows 쪽 compact를 별개 작업으로 생각하는 편이 안전하다.**

## 실제 작업 방법

Windows 관리자 터미널에서 아래 순서로 진행하면 된다.

1. Docker Desktop 종료
2. 관리자 권한 PowerShell 또는 Windows Terminal 실행
3. WSL 종료

WSL VHD를 줄이는 가장 일반적인 방법은 Windows에서 `diskpart`의 `compact vdisk`를 사용하는 것이다. 그런데 Microsoft 문서 기준으로 이 명령은 VHD가 `detached` 상태이거나 `read-only`로 붙어 있을 때만 가능하다. 그래서 WSL 종료가 필요하다.

```powershell
wsl --shutdown
```

4. `diskpart` 실행

```powershell
diskpart
```

5. 아래 명령 실행

```text
select vdisk file="C:\Users\ChanhoLee\AppData\Local\Packages\CanonicalGroupLimited.Ubuntu_79rhkp1fndgsc\LocalState\ext4.vhdx"
detail vdisk
compact vdisk
exit
```

6. 다시 WSL 실행

```powershell
wsl -d Ubuntu
```

## References

- [How to manage WSL disk space](https://learn.microsoft.com/en-us/windows/wsl/disk-space)
- [compact vdisk](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/compact-vdisk)
- [Advanced settings configuration in WSL](https://learn.microsoft.com/en-us/windows/wsl/wsl-config)
- [Windows Subsystem for Linux September 2023 update](https://devblogs.microsoft.com/commandline/windows-subsystem-for-linux-september-2023-update/)
- [microsoft/WSL issue #10703](https://github.com/microsoft/WSL/issues/10703)
- [microsoft/WSL issue #12103](https://github.com/microsoft/WSL/issues/12103)
- [microsoft/WSL releases](https://github.com/microsoft/WSL/releases)
