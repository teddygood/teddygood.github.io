---
title: "WSL2에서 do-release-upgrade 중 snapd.socket 에러 해결"
date: '2026-02-14'
draft: false
---

## 🤔 문제

WSL2 Ubuntu에서 `sudo do-release-upgrade`를 실행했는데 초반에 바로 중단됐다.

```bash
error: cannot list snaps: cannot communicate with server:
Get "http://localhost/v2/snaps": dial unix /run/snapd.socket: connect: no such file or directory
...
subprocess.CalledProcessError: Command '['snap', 'list']' returned non-zero exit status 1.
```

처음에는 "WSL2인데 왜 snap이 안 되지?"라고 생각했는데, 결론적으로는 **WSL2 자체 문제가 아니라 systemd가 꺼져 있어서 snapd가 못 뜬 상태**였다.

## 🚩 해결

### 1) systemd 활성화

`/etc/wsl.conf` 파일에 아래 내용을 넣는다.

```ini
[boot]
systemd=true
```

### 2) WSL 완전 재시작

리눅스 쉘이 아니라 **Windows 터미널(PowerShell/cmd)**에서 아래 명령을 실행한다.

```powershell
wsl --shutdown
```

그 다음 Ubuntu를 다시 실행한다.

### 3) 상태 확인

아래 두 가지가 통과해야 한다.

```bash
ps -p 1 -o comm=
snap list
```

- 첫 번째 명령 결과가 `systemd`여야 함
- 두 번째 명령이 소켓 에러 없이 반환돼야 함

### 4) 업그레이드 전 정리

```bash
sudo apt update
sudo apt full-upgrade -y
sudo apt autoremove -y
```

### 5) 릴리즈 업그레이드 실행

```bash
sudo do-release-upgrade
```

## ⚠️ 삽질 포인트

예전 이슈를 보면 `genie`, `unshare/nsenter`, upgrader 파이썬 임시 파일 수정 같은 우회 방법이 많이 나오는데, 요즘에는 이런 방식보다 **systemd를 정식으로 켜는 방식이 훨씬 안전**하다.

특히 임시 해킹은 다음 문제가 있었다.

- 세션/재부팅마다 다시 해야 하는 경우
- 업그레이드는 지나가도 이후 `apt` 상태가 꼬이는 경우
- 배포판이 깨졌다는 사례

즉, 지금 기준으로는 "해킹으로 통과"보다 "환경을 정상 상태로 맞춘 뒤 업그레이드"가 정답에 가깝다.

## ✅ 요약

이번 케이스는 `do-release-upgrade` 버그라기보다, 업그레이더가 호출한 `snap list`가 실패한 상황이었다.
핵심은 `snapd.socket`을 살리는 것이고, 그 전제 조건이 `systemd=true + wsl --shutdown`이다.

## 🌐 References

- [Use systemd to manage Linux services with WSL](https://learn.microsoft.com/en-us/windows/wsl/systemd)
- [[WSL1] Upgrade to Ubuntu 24.04 from 22.04 fails with missing snap. Possible to work around?](https://github.com/microsoft/WSL/issues/11982)
- [`do-release-upgrade` when systemd is disabled.](https://github.com/ubuntu/WSL/issues/493)
- [WSL2- Ubuntu 20.04 Snap store doesn't work due to systemd dependency](https://github.com/microsoft/WSL/issues/5126)
