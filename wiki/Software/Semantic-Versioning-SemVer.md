---
title: "Semantic Versioning (SemVer)"
date: '2026-04-01'
draft: false
---

Semantic Versioning, 줄여서 SemVer는 버전 번호에 API 호환성 정보를 담는 규칙이다. 핵심은 숫자를 기계적으로 올리는 것이 아니라, 버전만 보고도 사용자가 어떤 종류의 변화를 예상해야 하는지 전달하는 데 있다.

## Why it exists

의존성이 많아질수록 두 가지 문제가 자주 나타난다.

- Version lock: 의존 조건이 너무 빡빡해서 하위 패키지가 안전하게 업그레이드되지 못하는 상태
- Version promiscuity: 미래 버전과도 과하게 호환될 것이라 가정했다가 나중에 깨지는 상태

SemVer는 릴리스 의도를 명확하게 표현해서 이 두 문제를 줄이려는 규칙이다.

## Version format

일반 버전은 `MAJOR.MINOR.PATCH` 형태를 사용한다.

- `MAJOR`: incompatible public API changes
- `MINOR`: backward compatible functionality additions
- `PATCH`: backward compatible bug fixes

세 부분 모두 0 이상의 정수여야 하고, 앞에 불필요한 0이 붙으면 안 된다. 한 번 릴리스한 버전의 내용은 바꾸면 안 되며, 수정이 필요하면 기존 버전을 덮어쓰는 대신 새 버전을 릴리스해야 한다.

## First prerequisite: define your public API

SemVer는 패키지의 public API가 명확할 때만 제대로 동작한다. 이 API는 코드로 정의될 수도 있고, 문서로 정의될 수도 있고, 둘 다일 수도 있다. 중요한 것은 사용자 입장에서 무엇이 공개 계약이고 무엇이 내부 구현인지 분명해야 한다는 점이다. 이 경계가 흐리면 어떤 변경이 major, minor, patch인지 판단 자체가 모호해진다.

## When to bump what

### PATCH

하위 호환성을 유지하는 버그 수정에는 patch 릴리스를 사용한다.
예를 들어 아래와 같은 경우다.

- API 형태는 그대로 두고 잘못된 검증 로직만 수정
- 내부 query, parser, serialization 버그 수정
- 지원하는 입력과 출력은 유지한 채 잘못된 동작만 바로잡기

### MINOR

public API에 하위 호환적인 기능을 추가할 때는 minor 릴리스를 사용한다.
예를 들어 아래와 같은 변경이다.

- 안전한 기본값을 가진 optional parameter 추가
- 기존 사용 방식을 깨지 않는 새 endpoint, method, CLI flag 추가
- 기존 API를 바로 제거하지 않고 deprecated 처리

`MINOR`가 올라가면 `PATCH`는 `0`으로 초기화된다.

```text
1.4.7 -> 1.5.0
```

### MAJOR

public API에 하위 호환이 깨지는 변경이 들어가면 major 릴리스를 사용한다.
예를 들어 아래와 같은 변경이다.

- 공개 endpoint나 function 제거 또는 이름 변경
- parameter의 의미를 바꿔 기존 클라이언트가 깨지게 만드는 경우
- response schema나 return type을 비호환적으로 변경하는 경우

`MAJOR`가 올라가면 `MINOR`와 `PATCH`는 모두 `0`으로 초기화된다.

```text
1.9.4 -> 2.0.0
```

## Special case: `0.y.z`

`0.y.z`는 초기 개발 단계용 버전이다. SemVer 스펙은 이 구간에서 무엇이든 언제든 바뀔 수 있다고 본다. 따라서 public API 역시 아직 안정적이라고 간주하지 않는다. 실무적으로도 `0.x` 릴리스는 `1.x`보다 더 조심해서 받아들이는 편이 맞다.

## Pre-release versions

pre-release 버전은 patch 뒤에 `-`와 하나 이상의 식별자를 붙인다.
예를 들어 다음과 같다.

- `1.0.0-alpha`
- `1.0.0-alpha.1`
- `2.3.0-rc.2`

중요한 규칙:

- pre-release 버전은 대응하는 일반 버전보다 precedence가 낮다.
- 숫자 식별자에는 leading zero가 있으면 안 된다.
- 식별자는 ASCII 영숫자와 하이픈만 사용할 수 있다.

So:

```text
1.0.0-rc.1 < 1.0.0
```

## Build metadata

build metadata는 일반 버전 또는 pre-release 버전 뒤에 `+`를 붙여 표현한다.
예를 들어 다음과 같다.

- `1.0.0+20260401`
- `1.0.0-rc.1+build.5`

build metadata는 버전 precedence에 영향을 주지 않는다. 즉 `1.0.0+abc`와 `1.0.0+xyz`는 라벨은 다르지만 정렬 순서는 같다.

## Precedence rules

버전을 비교할 때는 다음 순서를 따른다.

1. `MAJOR`, `MINOR`, `PATCH`를 숫자로 비교한다.
2. 셋이 같다면 일반 버전이 pre-release 버전보다 precedence가 높다.
3. 둘 다 pre-release라면 점으로 구분된 식별자를 왼쪽부터 순서대로 비교한다.
4. 숫자 식별자는 숫자로 비교하고, 숫자가 아닌 식별자는 ASCII 사전순으로 비교한다.
5. 숫자 식별자는 숫자가 아닌 식별자보다 precedence가 낮다.
6. 앞부분이 모두 같다면 더 많은 pre-release 필드를 가진 쪽이 precedence가 높다.

자주 보는 비교 예시는 다음과 같다.

```text
1.0.0 < 2.0.0 < 2.1.0 < 2.1.1
1.0.0-alpha < 1.0.0
1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-beta < 1.0.0-rc.1 < 1.0.0
```

## When is `1.0.0` appropriate?

SemVer FAQ는 다음 기준을 제시한다.

- 이미 production에서 쓰이고 있다면 `1.0.0`이어야 할 가능성이 높다.
- 사용자가 안정적인 API에 의존하고 있다면 `1.0.0`이어야 한다.
- 이제 backward compatibility가 중요한 고민이 되기 시작했다면 `1.0.0`이어야 한다.

## Practical reading guide

SemVer 버전을 빠르게 읽는 기준은 아래와 같다.

- `PATCH`가 바뀌었다면 하위 호환 버그 수정일 가능성이 크고, 업그레이드 위험은 대체로 낮다.
- `MINOR`가 바뀌었다면 새 기능이 추가된 것이고, 기존 사용 방식은 계속 동작해야 한다.
- `MAJOR`가 바뀌었다면 업그레이드 전에 migration note를 먼저 확인해야 한다.
- `-alpha`, `-beta`, `-rc`는 불안정 버전 또는 release candidate 단계를 뜻한다.
- `+build`는 추가 빌드 정보일 뿐, 버전 순서를 바꾸지는 않는다.

## Takeaway

SemVer는 겉으로는 단순하지만, "public API"가 명확하고 릴리스 규율이 지켜질 때만 의미가 있다. 진짜 가치는 `X.Y.Z`라는 모양 자체가 아니라, 사용자가 모든 커밋을 읽지 않아도 버전 번호만 보고 호환성 기대치를 추론할 수 있다는 데 있다.

## References

- [Semantic Versioning 2.0.0](https://semver.org/)
- [Semantic Versioning 2.0.0 Specification](https://semver.org/spec/v2.0.0.html)
