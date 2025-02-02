---
title: "📖 Amazon Bedrock으로 시작하는 실전 생성형 AI 개발"
date: '2025-02-02'
authors: teddygood
tags: ["Book Review"]
draft: false
slug: '/Hands-on-generative-AI-dev-with-AWS-Bedrock'
description: 이제 AI도 당신의 개발 도구가 된다 - 실무자를 위한 AWS Gen AI 완벽 가이드
keywords:
  - Amazon Bedrock
  - Generative AI
  - AWS
---

## Book Info

:::tip
책 이미지를 클릭하면 교보문고 사이트로 이동합니다!
:::
[![책](..%2Fassets%2Freview%2FHands-on-generative-AI-dev-with-AWS-Bedrock.png)](https://product.kyobobook.co.kr/detail/S000214962344)
- 
- 제목: Amazon Bedrock으로 시작하는 실전 생성형 AI 개발
- 저자: 임지훈, 최성우
- 출판사: 디지털북스
- 출간: 2025-01-10

{/* truncate */}

## Intro

최근에 회사에서 AWS Bedrock을 사용해야 하는 일이 있어 공식 문서를 보고 공부를 하고 있었는데 링크드인을 보다 이 책이 나온 것을 알게 되어 구매하고 읽어봤다. 마이크로소프트, 구글이 생성형 AI에 엄청난 강세를 보이고 있는데 아마존도 최근 Nova라는 모델을 공개했고, Bedrock을 통해 더 많은 힘을 쓰려고 하는 느낌이다. 조금 늦긴 했으나 좋은 행보라고 생각한다. AWS Bedrock은 생성형 AI 모델들을 사용할 수 있는 플랫폼이라고 말할 수 있으며, 이 책을 통해 실전에서 어떻게 사용할 수 있는지 알고 싶었다. 

## ## Book Review

### Bedrock

Bedrock은 AWS에서 제공하는 완전 관리형 생성형 AI 플랫폼이다. A121 Labs, Anthropic, Cohere, Meta, Mistral AI, Stability AI 등 다양한 파트너사와 협력하여 모델들을 제공하고 있다. 아쉽지만 OpenAI는 없다. 이 책에서는 Bedrock을 웹 사이트에서 사용하는 방법부터, 생성형 AI 모델을 코드를 사용하여 응용하는 방법, Bedrock에서 제공하는 기능 등을 다룬다.

### 전반적인 책 리뷰

책은 9개의 목차로 이루어져 있다. 먼저 특이하게 0장이 있다. 부록이 아닌 0장을 오랜만에 봐서 재밌었고, 역시 개발자들이라는 생각이 먼저 떠올랐다. 0장에서는 AWS 가입, 그리고 AWS를 처음 사용하면 어려울 수 있는 IAM, 이후 코딩을 하기 위한 AWS CLI 세팅까지 친절하게 알려준다. AWS를 사용해보지 않은 사람도 이 책을 쉽게 읽을 수 있을 거라 생각한다.

1장에서는 간단하게 생성형 AI가 무엇인지, 그리고 AWS에 Bedrock과 SageMaker와의 차이점이 무엇인지 알려준다. 2장에서는 Bedrock 웹 사이트에서 각종 모델들을 사용할 수 있는 플레이그라운드, 다양한 모델 소개, 간단한 코딩 실습 등이 있다. 3장에서는 프롬프트 엔지니어링에 대해 알려주고, 4장에서는 Bedrock으로 RAG(Retrieval-Augmented Generation)을 구현하는 방법을 알려준다. 여기서 Bedrock의 기능 중 하나인 Knowledge Bases가 나온다. 이 부분에서 각종 AWS 서비스를 추가적으로 더 사용해볼 수도 있다.

5장에서는 Bedrock으로 Agent를 구현하는 방법을 설명하고 6장에서는 Bedrock에서 모델을 학습할 수 있는 방법에 대해 설명한다. Bedrock에서 Fine-Tuning(미세조정), Continued Pre-Training(지속적인 사전 학습)이 된다는 게 인상적이었다. 예전에 SageMaker를 사용하여 했던 기억이 있는데 이제는 그럴 필요가 없게 된 것이다. 외부 모델을 가져와서 학습하는 과정도 설명해준다.

7장에서는 Bedrock 운영과 관련된 기능들을 설명해준다. 이 부분에서는 Bedrock의 기능 중 하나인 Guardrails로 환각 현상 탐지를 할 수 있다는 게 너무 신기했다. 모델 평가 기능도 있고, 잘 만든 서비스라 생각이 들었다. 마지막 8장에서는 Bedrock의 최신 기능을 간단하게 소개한다.

## 대상 독자

RAG도 그렇고, Agent도 그렇고 전반적으로 생성형 AI에 관심이 많고, 어떤 방법으로 사용하면 좋을지에 대해 관심이 많다면 읽어보는 걸 추천한다. AWS를 사용해본 적이 없어도 이 책을 통해 쉽게 사용할 수 있을 것이다. 생성형 AI는 자신이 사용량에 따라 비용을 부과하며 큰 돈이 들지도 않으니 다양한 모델들을 써보고 싶다면 이 책을 읽어보면서 사용해보는 것도 좋을 것 같다.