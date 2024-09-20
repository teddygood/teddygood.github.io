---
title: "Docker를 사용할 때 DB URL 설정하기"
date: '2023-04-24'
draft: false
---

## 🤔 문제

`.env` 파일에서 `DATABASE_URL=mongodb://localhost:27017`로 설정 후 `docker-compose up -d` 명령어를 사용하니 서버와 MongoDB가 연결이 되지 않는 현상이 발생했다.

처음에는 포트가 사용중인가 한참을 고민했다. 분명히 도커가 아닌 로컬 환경으로 돌렸을 때는 잘 작동됐는데 왜 안 되는가에 대해 꽤 많은 시간을 소비했다.

## 🚩 해결

해결은 간단했다. `localhost`를 현재 사용하고 있는 서버의 컨테이너 이름으로 바꿔주면 된다.

```bash
docker ps
```

위 명령어를 통해 현재 사용중인 컨테이너의 이름을 확인 후 `.env` 파일의 `DATABASE_URL`을 `DATABASE_URL=mongodb://CONTAINER_NAME`처럼 수정해주면 된다.

## 🌐 References

- [Docker and MongoDB](https://www.mongodb.com/compatibility/docker)
- [Connecting to mongo docker container from host](https://stackoverflow.com/questions/33336773/connecting-to-mongo-docker-container-from-host)
- [Pymongo keeps refusing the connection at 27017](https://stackoverflow.com/questions/7744147/pymongo-keeps-refusing-the-connection-at-27017)