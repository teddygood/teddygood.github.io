---
authors: teddygood
date: '2024-11-24'
description: "Troubleshooting Issues When Deploying a Python Backend with Docker  \n(Note:
  The original Korean text was a title/heading, so the translation reflects that structure.
  If you need elaboration on specific problems/solutions, additional context would
  be required.)  \n\n**Alternative (if intended as a sentence):**  \n\"I encountered
  and resolved issues while attempting to deploy a Python backend using Docker.\"
  \ \n\nLet me know if you'd like a detailed troubleshooting guide or specific problem-solution
  pairs!"
draft: false
keywords:
- Docker
- Python
- Alpine Linux
slug: /python-alpine-linux
tags:
- Troubleshooting
title: "\U0001F40BWhy Alpine Linux Should Be Avoided When Choosing a Docker Base Image
  for Python Projects"
---

## Introduction

I encountered several errors while moving a Django blog project to Docker. This post shares the knowledge I gained while resolving these issues.

## First Problem

### Compatibility Issue Between Alpine Linux and cryptography

While building after creating the `Dockerfile` and `docker-compose.yml`, I encountered the following error:

```
ERROR: No matching distribution found for cryptography==3.4.7
```

The Docker image version and cryptography version in `requirements.txt` were as follows:

```Dockerfile
FROM python:3.8-alpine
```

```bash
cryptography==3.4.7
```

### Solution

I realized this was a compatibility issue between Alpine Linux and the cryptography package, which implements cryptographic algorithms in Python. After consulting the [official cryptography documentation](https://cryptography.io/en/latest/installation/), I found a solution.

![crypto-doc](../assets/troubleshooting/cryptography-doc.jpg)

In summary, cryptography uses Rust for building. This means **cargo**, Rust's package manager and build tool, must also be installed. I added the following to the Dockerfile:

```shell
$ sudo apk add gcc musl-dev python3-dev libffi-dev openssl-dev cargo
```

This resolved the first issue.

## Second Problem

### Build Process Took Too Long and Failed

After adding the above commands to the Dockerfile and rebuilding, another error occurred. The build process kept running indefinitely (showing "still running") for about 10 minutes before eventually stopping.

![More detailed error](../assets/troubleshooting/crypto-building-error.jpg)

### Solution

After extensive research, I revisited the cryptography documentation and GitHub issues to find a similar case.

![More detailed error](../assets/troubleshooting/alpine-linux-build-issue.jpg)

The key points from the issue were:

1. Building Python packages on Alpine Linux is slow, especially in CI/CD environments where rebuilding is frequent.
2. Uploading Alpine-compatible wheels requires changes to pip/wheel/packaging, which involves ongoing PEP discussions.
3. Installing Python packages properly on newer Alpine versions requires the latest Rust compiler.
4. These issues are documented, and no improvements are currently planned. If further issues arise, new issues or PRs should be submitted.

The core takeaway was that **Alpine Linux itself was the problem**. Switching the base image resolved the issue:

```Dockerfile
FROM python:3.8-slim-buster
```

But why did this happen? Let's explore the reasons.

## Why Alpine Linux Is Not Ideal for Python Environments

I initially chose Alpine Linux because it’s smaller and faster to build compared to Ubuntu. However, it’s not well-suited for Python environments.

The key difference lies in the C standard libraries used. Most Linux distributions use **GNU C Library (glibc)** for C programs, including Python. However, Alpine Linux uses **musl libc** for lightweight optimization. Since musl doesn’t support `Wheel binaries` compiled with glibc, it downloads `.tar.gz` files instead of `.whl` files. This means **all Python packages with C extensions must be compiled from source**, leading to longer build times and larger image sizes.

Most modern Python packages include precompiled Wheel binaries on PyPI, which are essentially ZIP archives with a `.whl` extension. These speed up installations significantly. However, Alpine Linux bypasses this optimization.

### Drawbacks of Using Alpine Linux for Python:
1. **Slow builds** due to source compilation.
2. **Larger image sizes** from compiled dependencies.
3. **Wasted time** waiting for builds.
4. **Potential runtime bugs** from compatibility issues.

For Python projects, Debian-based **slim images** or **Ubuntu-based images** are more suitable than Alpine Linux.

## 🌐 References

- [Cryptography installation](https://cryptography.io/en/latest/installation/)
- [Dependencies to build on Alpine Linux?](https://github.com/pyca/cryptography/issues/5776)
- [How to Build Docker Images Efficiently](https://jonnung.dev/docker/2020/04/08/optimizing-docker-images/)
- [Using Alpine Can Make Python Docker Builds 50x Slower](https://pythonspeed.com/articles/alpine-docker-python/)
- [The Best Docker Base Image for Python Applications](https://pythonspeed.com/articles/base-image-python-docker-images/)