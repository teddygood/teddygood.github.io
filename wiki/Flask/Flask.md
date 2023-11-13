---
title: "Flask"
date: '2023-11-13'
draft: false

description: Flask
---

![flask](https://flask.palletsprojects.com/en/3.0.x/_images/flask-horizontal.png)

- 파이썬으로 만든 마이크로 웹 프레임워크
    - 마이크로 웹 프레임워크: 핵심 기능을 유지하면서 확장성을 가진 프레임워크
- DB 기능이 포함되어 있지 않는 등 최소한의 기능만 제공
- 앱 구성도 자유롭게 결정
- 확장 기능 많이 지원
    - 플라스크 자체에 구현되어 있는 것처럼 간단하게 이용 가능
- 필요에 따라 다양한 확장 기능을 추가해서 크고 작은 웹 앱 개발을 비롯해 다양한 모델을 만들 수 있게 설계되어 있다.

## 설치

```bash
pip install flask
```

## 기본 명령어

```bash
flask --help
```

```bash
flask run --help
```

- `-h`: 호스트 지정
- `-p`: 포트 지정
- `--reload`: 오토 리로드, 코드를 편집할 때 자동으로 반영시키려면 on으로 한다. 디버그 모드 시에는 기본적으로 on이 된다.
    - `--no-reload`
- `--debuger`: 디버거, 기본 on
    - `--no-debuger`

## routes 명령어

```bash
flask routes
```

- 앱의 라우팅 정보를 출력
- 라우팅: 요청한 곳의 URL과 실제로 처리하는 함수를 연결하는 작업
- Endpint: 일반적으로 API에 접근하기 위한 URL
    - 플라스크에서는 URI와 연결된 함수명 또는 함수에 붙이 이름을 의미
    - static은 정적 파일용의 엔드포인트로 항상 고정으로 존재
- Methods: 사용할 HTTP 메서드
    - Get이 디폴트
- Rule: 사용할 URL의 규칙

## Shell 명령어

- 플라스크 앱의 컨텍스트(실행 환경)에서 파이썬 인터렉티브 shell을 사용하고 싶은 경우에 이용
- 디버깅이나 테스트 할 때 유용