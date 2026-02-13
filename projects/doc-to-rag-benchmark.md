---
title: 'Doc-to-RAG Benchmark'
description:  Doc-to-Text에서 평가 가능한 RAG 데이터까지 | Meta Llama Academy 워크숍에서 진행한 PDF 기반 Doc-to-RAG Benchmark 구축 프로젝트 회고
role: AI Engineer
timeline: Sep 2025 - Oct 2025
stack: [LangGraph, Upstage API, Solar Pro 2, Llama 3.2, PDF Parsing, QLoRA]
category: Team Project
image: /img/projects/doc-to-rag-benchmark/experience/experience-01-expanded.png
hide_table_of_contents: false
---

{/* truncate */}

# Doc-to-RAG Benchmark

## 왜 이 프로젝트를 시작했는가

워크숍 초반에 가장 크게 느낀 문제는 단순했다. RAG 성능 비교를 하려면 먼저 "비교 가능한 데이터"가 있어야 하는데, PDF 문서는 파서마다 결과가 달라서 같은 질문에도 기준이 흔들렸다.

내가 팀에서 합의한 방향은 "모델 자랑"이 아니라 "평가 기준 고정"이었다. 문서 추출부터 QA 생성, Judge 검증, 데이터셋 저장까지 한 흐름으로 묶어야 재현 가능한 실험이 된다고 봤다.

## 팀 구성과 역할

팀은 아래처럼 나눠서 일했다.

1. 프로젝트 총괄 리더: 방향성, 우선순위, 일정 관리
2. 프론트엔드 + 백엔드: 데모 및 서비스 연결
3. 멀티 에이전트 구현: 파싱/정제 그래프 설계
4. 데이터/평가 파이프라인: 추출 텍스트 기반 벤치마크 + LLM Judge + Hugging Face 업로드
5. 나: QLoRA 기반 파인튜닝 실험 설계 및 운영

내가 맡은 비중은 5번이 가장 컸다. 프로젝트 전체 성능에서 파인튜닝이 실제로 의미 있는 개선을 내는지, 그리고 그 결과를 운영 가능한 형태로 남기는 데 집중했다.

## 팀 역할별 상세 설명(내 역할 외)

초기 문서에서 강조했던 것처럼, 이 프로젝트는 한 사람의 모델 실험으로 완성된 게 아니라 각 축이 맞물려서 돌아간 결과였다. 그래서 내 역할 외의 축도 구현 관점으로 정리해 두는 게 맞다.

### 1) 프로젝트 총괄 리더: 방향성과 의사결정 프레임 고정

총괄 리더는 단순 일정 관리가 아니라, 우리가 "무엇을 성공으로 볼지"를 먼저 고정했다.

1. 목표를 "최고 성능 모델 찾기"가 아니라 "재현 가능한 Doc-to-RAG 파이프라인 구축"으로 정렬
2. 우선순위를 기능 나열이 아니라 병목 해소 순서(추출 -> 검증 -> 정제 -> 평가)로 설정
3. 발표/데모 메시지를 수치 과시보다 운영 가능성(비용/속도/품질 균형) 중심으로 통일

이 정렬 덕분에 팀이 각자 다른 모듈을 개발해도 최종 산출물이 한 방향으로 수렴했다.

### 2) 프론트엔드 + 백엔드: 데모를 "실제 동작 흐름"으로 연결

프론트/백엔드 담당자는 파이프라인 단계를 화면에서 끊김 없이 확인할 수 있게 묶었다.

1. 입력 문서부터 추출 결과, 검증 상태, 정제 결과, 최종 선택 결과까지 단계별로 시각화
2. 백엔드에서 각 단계 산출물(JSON/로그)을 프론트에서 재사용 가능한 포맷으로 전달
3. 데모 시나리오 기준으로 실패 케이스와 성공 케이스를 같은 흐름에서 비교 가능하게 구성

결과적으로 발표 때 "모델이 좋다"가 아니라 "시스템이 어떻게 의사결정하는지"를 보여줄 수 있었다.

### 3) 멀티 에이전트 구현: 파싱/정제 그래프를 운영 가능한 구조로 구현

멀티 에이전트 담당자는 LangGraph 기반으로 두 축을 분리했다.

1. OCR/파싱 전략 선택 그래프: 기본 추출 -> 유효성 검증 -> Judge -> 최종 선택
2. Refine 그래프: 정제 필요 여부 판단 -> 필요한 페이지만 정제 -> 재검증

핵심 구현 포인트는 페이지 단위 폴백과 조기 중단이었다.

1. 전체 문서가 아니라 Fail 페이지에만 후처리를 적용
2. 개선이 없으면 다음 단계로 넘어가지 않고 중단
3. 품질 점수와 처리 속도를 함께 반영한 복합 점수로 최종 선택

이 설계가 없으면 정확도는 오를 수 있어도 비용과 지연시간이 급격히 커진다.

### 4) 데이터/평가 파이프라인: 벤치마크를 재사용 가능한 자산으로 전환

데이터/평가 담당자는 추출 텍스트를 "한 번 쓰고 버리는 결과"가 아니라 "반복 실험용 데이터셋"으로 바꿨다.

1. 추출 텍스트 기반 QA 생성 파이프라인 구축
2. LLM Judge를 검증 단계와 평가 단계로 분리해 역할 혼선을 줄임
3. 결과를 CSV/JSON/데이터셋 형태로 저장해 다음 실험에서 바로 재사용 가능하게 구성
4. Hugging Face 업로드까지 연결해 팀 외부에서도 동일 포맷으로 재현 가능하게 정리

이 축이 있었기 때문에 파인튜닝 결과도 단발성 실험이 아니라, 고정된 기준 위에서 비교할 수 있었다.

## 프로젝트 설명: 전체 흐름을 어떻게 설계했는가

처음에는 "파서 하나를 잘 고르면 된다"라고 생각했는데, 실제로는 그보다 훨씬 복합적이었다.  
문서 추출 품질이 흔들리면 QA 생성이 흔들리고, QA 품질이 흔들리면 LLM Judge 결과도 흔들린다.  
그래서 이 프로젝트는 기능 단위가 아니라 "파이프라인 단위"로 설계했다.

### 1) 코드베이스를 세 갈래로 분리한 이유

실험 속도와 운영 안정성을 같이 잡기 위해 역할별로 레포를 나눴다.

1. `llamacpp`: 파인튜닝/추론/평가 루프를 빠르게 반복하기 위한 실험 축
2. `Doc-to-RAG-Benchmark`: 제품 관점의 흐름 정리, 발표/데모 구성, 평가 기준 정리 축
3. `Doc-to-text_Parsing_Agent`: OCR/파싱 전략 선택 + Refine 정제를 실제로 돌리는 구현 축

이렇게 분리하니, 모델 실험을 바꿔도 서비스/에이전트 코드와 충돌이 적고, 반대로 파싱 로직을 고쳐도 파인튜닝 루프를 깨지 않고 독립적으로 검증할 수 있었다.

### 2) 파싱/정제 시스템에서 중요한 설계 포인트

핵심은 "전 문서 고비용 처리"를 피하는 것이었다.

1. 기본 추출 단계에서는 여러 파서를 병렬로 돌려 후보를 만든다.
2. 검증 단계에서 Pass/Fail을 판단한다.
3. Fail인 페이지에만 폴백/정제를 적용한다.
4. 다시 검증해 개선 없으면 중단한다.

이 방식 덕분에 품질을 올리면서도 API 비용과 처리 시간을 통제할 수 있었다.

### 3) 평가를 "점수 하나"로 끝내지 않은 이유

이 프로젝트에서 평가는 단순 리더보드용이 아니라, 다음 실험의 기준점을 만드는 일이었다.

1. 품질: 추출 정확도, 답변 일관성, 노이즈/표/문장 구조 보존
2. 속도: 문서 단위 처리 시간, 병목 구간
3. 비용: 외부 LLM 호출 빈도와 페이지 단위 비용

즉, "이번에 잘 나왔다"가 아니라 "다음에도 재현 가능한가"를 기준으로 봤다.

실제 평가 운영에서는 LLM Judge 5축 가중치를 아래처럼 고정해서 사용했다.

1. `S_read` 25%
2. `S_sent` 25%
3. `S_noise` 15%
4. `S_table` 25%
5. `S_fig` 10%

최종 선택 단계에서는 품질 점수 80%와 처리 속도 20%를 합산해 의사결정했다.

## 내가 맡은 핵심: 파인튜닝 실험 설계와 운영

### 1) 학습 루프를 먼저 고정했다

내가 처음 한 일은 "한 번 돌아가면 끝"인 스크립트가 아니라, 반복 가능한 실험 루프를 만드는 것이었다.

1. 베이스 모델: `meta-llama/Llama-3.2-1B-Instruct`
2. 비교 모델: `meta-llama/Llama-3.2-3B-Instruct`
2. 데이터: KorQuAD v1 정규화 + validation 샘플링
3. 방법: QLoRA(4bit NF4)
4. 비교: 베이스 vs 튜닝 모델 동시 추론
5. 평가: EM/F1 중심으로 고정
6. 배포 검증: 병합 후 GGUF 변환 + `llama.cpp` 추론

프로젝트를 진행하면서 1B와 3B를 병행해 실험했다.  
1B는 빠른 반복 실험과 파라미터 탐색에 유리했고, 3B는 품질 상한과 개선 폭을 확인하는 비교 축으로 사용했다.  
최종적으로는 품질만이 아니라 처리 시간과 리소스 비용까지 같이 보고, 운영 환경에서 사용할 구성을 판단했다.

### 2) "좋은 실험"보다 "지속 가능한 실험"에 집중했다

성능 숫자만 모으면 다음 실험에서 다시 무너지는 경우가 많아서, 운영 지표를 같이 남겼다.

1. `TimeBudgetCallback`으로 학습 시간 상한 관리
2. step 단위 wall time/CUDA time/메모리 사용량 CSV 기록
3. 학습 종료 후 LoRA 병합까지 스크립트 한 번으로 처리

이렇게 해두니 "성능이 올랐다"가 아니라 "왜 올랐는지"를 다음 실험에서 다시 검증할 수 있었다.

### 3) 파인튜닝 목표를 좁게 잡았다

목표는 범용 대화 성능이 아니라, 문서 기반 QA에서 답변 일관성과 근거 회수율을 높이는 것이었다. 그래서 데이터 포맷, 프롬프트 템플릿, 평가 루틴을 바꾸지 않고 유지했다.

## 파인튜닝과 전체 파이프라인을 어떻게 연결했는가

내가 본 핵심은 이거였다. RAG는 한 컴포넌트만 좋아져도 전체가 좋아지지 않는다.

1. 파싱 품질이 낮으면 검색이 흔들린다.
2. 검색이 흔들리면 생성 모델이 좋아도 환각이 늘어난다.
3. 그래서 파인튜닝은 "마지막 단계 보정" 역할로 두고, 앞단 품질 기준과 같이 운영해야 한다.

결론적으로 파인튜닝은 단독 해법이 아니라, 파싱/평가 기준이 정돈된 상태에서 최종 응답 품질을 안정화하는 축이었다.

## 서비스 흐름(README 기준)

### 전체 구조

<img
  src="/img/projects/doc-to-rag-benchmark/doc1-left.png"
  alt="Doc-to-RAG 전체 개요 (1)"
  style={{ width: "100%", maxWidth: "1100px", height: "auto", display: "block", margin: "0 auto" }}
/>

<img
  src="/img/projects/doc-to-rag-benchmark/doc1-right.png"
  alt="Doc-to-RAG 전체 개요 (2)"
  style={{ width: "100%", maxWidth: "1100px", height: "auto", display: "block", margin: "16px auto 0" }}
/>

이 그림을 기준으로 팀 내부에서 역할 경계를 먼저 정했다. 문서 파싱 최적화와 벤치마크 자동화를 분리된 작업이 아니라 하나의 파이프라인으로 다루는 것이 목표였다.

### 문제 정의와 접근 방향

![문제 정의](/img/projects/doc-to-rag-benchmark/doc2.png)

핵심은 "문서마다 다른 구조" 때문에 같은 질문에서도 추출 품질이 크게 흔들린다는 점이었다. 그래서 단일 파서 고정이 아니라, 문서 특성을 보고 전략을 선택하는 구조로 설계했다.

### OCR/파싱 전략 선택 시스템

![OCR/파싱 전략 선택](/img/projects/doc-to-rag-benchmark/doc3.png)

여기서 중요한 운영 원칙은 페이지 단위 폴백이었다. Fail 페이지에만 후처리를 태워서 품질을 보정하고, 전 페이지에 무거운 처리를 거는 방식은 피했다.

### 문서 정제(Refine) 시스템

![문서 정제(Refine)](/img/projects/doc-to-rag-benchmark/doc4.png)

정제도 같은 원칙으로 비용을 통제했다. On-device로 먼저 판정하고, `Need Refine`만 Solar로 넘겨 정제했다.

### End-to-End 파이프라인

<img
  src="/img/projects/doc-to-rag-benchmark/doc5.png"
  alt="End-to-End 파이프라인"
  style={{ width: "100%", maxWidth: "1100px", height: "auto", display: "block", margin: "0 auto" }}
/>

추출 결과와 평가 결과를 같은 기준으로 누적해서, "이번 실험"이 아니라 "다음 실험에 재사용 가능한 데이터"로 남기는 데 집중했다.

### 평가 관점과 결과 정리

<img
  src="/img/projects/doc-to-rag-benchmark/doc6.png"
  alt="평가 관점 1"
  style={{ width: "100%", maxWidth: "1100px", height: "auto", display: "block", margin: "0 auto" }}
/>

<img
  src="/img/projects/doc-to-rag-benchmark/doc7.png"
  alt="평가 관점 2"
  style={{ width: "100%", maxWidth: "1100px", height: "auto", display: "block", margin: "16px auto 0" }}
/>

점수 하나로 결론내지 않고, 품질/속도/비용을 같이 봤다. 이 기준을 고정해두니 파인튜닝 결과를 해석할 때도 팀 내 합의가 빨라졌다.

## 데모 화면

<img
  src="/img/projects/doc-to-rag-benchmark/domo1.png"
  alt="데모 화면 1"
  style={{ width: "100%", maxWidth: "1100px", height: "auto", display: "block", margin: "0 auto" }}
/>

<img
  src="/img/projects/doc-to-rag-benchmark/domo2.png"
  alt="데모 화면 2"
  style={{ width: "100%", maxWidth: "1100px", height: "auto", display: "block", margin: "16px auto 0" }}
/>

<img
  src="/img/projects/doc-to-rag-benchmark/domo3.png"
  alt="데모 화면 3"
  style={{ width: "100%", maxWidth: "1100px", height: "auto", display: "block", margin: "16px auto 0" }}
/>

<img
  src="/img/projects/doc-to-rag-benchmark/domo4.png"
  alt="데모 화면 4"
  style={{ width: "100%", maxWidth: "1100px", height: "auto", display: "block", margin: "16px auto 0" }}
/>

![데모 화면 5](/img/projects/doc-to-rag-benchmark/domo5.png)

데모 구간은 "선택 -> 검증 -> 정제 -> 평가"가 실제로 어떻게 보이는지를 보여주는 용도로 정리했다. 발표에서 모델 성능 수치만 보여주지 않고, 운영 흐름이 어떻게 재현되는지 설명하는 데 유용했다.

### The Experience

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "12px",
    alignItems: "start",
  }}
>
  <img
    src="/img/projects/doc-to-rag-benchmark/experience/experience-01.jpeg"
    alt="The experience 1"
    style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }}
  />
  <img
    src="/img/projects/doc-to-rag-benchmark/experience/experience-02.jpeg"
    alt="The experience 2"
    style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }}
  />
  <img
    src="/img/projects/doc-to-rag-benchmark/experience/experience-03.jpeg"
    alt="The experience 3"
    style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }}
  />
  <img
    src="/img/projects/doc-to-rag-benchmark/experience/experience-04.jpeg"
    alt="The experience 4"
    style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }}
  />
  <img
    src="/img/projects/doc-to-rag-benchmark/experience/experience-05.jpeg"
    alt="The experience 5"
    style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }}
  />
  <img
    src="/img/projects/doc-to-rag-benchmark/experience/experience-06.jpeg"
    alt="The experience 6"
    style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }}
  />
</div>

## 프로젝트를 하면서 확인한 점

이 프로젝트에서 얻은 가장 큰 확인은 명확했다. "좋은 모델 하나"보다 "좋은 평가 데이터와 선택 기준"이 RAG 성능을 더 안정적으로 끌어올린다.

내 역할 관점에서는, 파인튜닝 성능 자체보다 실험 루프를 고정하고 결과를 재현 가능하게 남긴 것이 이후 개선 속도를 더 크게 만들었다.

## 다음에 바로 개선하고 싶은 것

1. 도메인별 Judge 프롬프트 자동 선택
2. 벤치마크 산출물을 Hugging Face 포맷으로 일관 출력
3. 파싱 실패/정제 역효과 케이스를 회귀 테스트로 상시 관리
