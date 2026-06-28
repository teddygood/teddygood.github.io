---
title: 'nano-vllm'
description: AER Labs에서 4명이 함께 진행한 C++ 기반 교육용 LLM inference engine 프로젝트로, continuous batching scheduler와 GPU benchmark 문서화를 구현한 팀 프로젝트
role: LLM Systems Contributor
timeline: Feb 2026 - Mar 2026
stack: [C++, LLM Serving, Scheduling, Benchmarking]
category: Team Project
image: /img/projects/nano-vllm/nano-vllm-github-card.png
hide_table_of_contents: false
---

{/* truncate */}

# nano-vllm

## nano-vllm은 어떤 프로젝트인가

[nano-vllm](https://github.com/aerlabsAI/nano-vllm)은 AER Labs에서 나를 포함한 4명이 함께 진행한 C++ 기반 교육용 LLM inference engine 프로젝트다. tokenizer, model, attention, sampler, scheduler, benchmark utility를 작은 코드베이스 안에 직접 구현해 LLM serving 내부 구조를 학습할 수 있게 만든 프로젝트다.

프로젝트의 목표는 이미 있는 inference engine을 단순히 사용하는 것이 아니라, PagedAttention, KV cache, continuous batching, chunked prefill 같은 개념이 실제 실행 흐름에서 어떻게 맞물리는지 직접 구현하면서 이해하는 것이었다. 2026년 3월 22일 AER Labs 블로그에 올라온 [Part 1](https://aerlabs.tech/blogs/nano-vllm-part1)과 [Part 2](https://aerlabs.tech/blogs/nano-vllm-part2)는 이 프로젝트를 구현한 뒤 4명이 함께 정리한 공개 기술 글이다.

## 프로젝트에서 맡은 작업

- Repository: [aerlabsAI/nano-vllm](https://github.com/aerlabsAI/nano-vllm)
- Feature PR: [PR #37](https://github.com/aerlabsAI/nano-vllm/pull/37) `Implement continuous batching scheduler`, merged
- Docs PR: [PR #50](https://github.com/aerlabsAI/nano-vllm/pull/50) `Add section 9.6 GPU benchmark after CPU analysis`, merged
- AER Labs blog: [Building an LLM Inference Engine from Scratch Part 1](https://aerlabs.tech/blogs/nano-vllm-part1), [Part 2](https://aerlabs.tech/blogs/nano-vllm-part2)

[PR #37](https://github.com/aerlabsAI/nano-vllm/pull/37)에서는 continuous batching scheduler를 구현했다. 이 PR은 2026년 2월 11일 merge됐고, local git 기준으로 10개 파일에 728 lines 추가, 146 lines 삭제가 있었다. 주요 변경은 `Scheduler`, `Request`, `BatchedRunner`, `AsyncRequestQueue`, `RequestSubmitter`, JSON benchmark input path였다.

후속으로 [PR #50](https://github.com/aerlabsAI/nano-vllm/pull/50)에서는 CPU benchmark 뒤에 GPU benchmark 섹션을 추가했다. 이 PR은 2026년 2월 27일 merge됐다. 처음에는 vLLM의 `max-num-seqs`, `max-num-batched-tokens` sweep 결과를 정리했지만, 리뷰에서 이것만으로는 request-level static batching과 continuous batching의 차이를 직접 보여주기 어렵다는 피드백이 있었다. 그래서 raw JSON benchmark 결과를 다시 남기고, vanilla Hugging Face 기반 request-level static batching vs continuous slot reuse control experiment를 추가했다.

이후 AER Labs 블로그 글에서는 이 구현 경험을 바탕으로 Part 1에서 core inference flow와 PagedAttention을 설명하고, Part 2에서 continuous batching, chunked prefill, GPU/CPU benchmark 결과를 정리했다. 즉 블로그 글은 내가 먼저 읽고 따라 구현한 자료가 아니라, 구현과 실험을 마친 뒤 프로젝트 내용을 외부에 설명하기 위해 정리한 결과물이다.

## 문제 정의

기존 실행 흐름은 요청을 순차적으로 처리하거나, 한 번 잡은 batch가 끝날 때까지 기다리는 구조에 가까웠다. 이 방식은 길이가 서로 다른 요청이 섞일 때 비효율이 생긴다. 짧은 요청이 먼저 끝나도 긴 요청이 batch를 계속 붙잡고 있으면, 비어 있는 slot을 다음 요청에 바로 재사용하지 못한다.

LLM serving에서 이 문제는 단순한 구현 디테일이 아니다. decode 단계는 토큰을 한 번에 하나씩 생성하므로, 매 iteration마다 어떤 요청을 같이 실행할지 다시 고르는 scheduler가 중요하다. continuous batching은 request 단위가 아니라 iteration 단위로 batch를 다시 구성해, 끝난 요청의 slot을 바로 회수하고 대기 중인 요청을 투입하는 방식이다.

## 구현한 범위

### Continuous batching scheduler

`Request`에 상태와 prefill 진행 상태를 두고, 요청이 `PENDING`, `PREFILLING`, `DECODING`, `FINISHED` 흐름을 갖도록 정리했다. `Scheduler`는 매 iteration마다 token budget과 max batch size를 기준으로 실행할 request를 고른다.

긴 prompt는 한 번에 모두 prefill하지 않고 chunk로 나눌 수 있게 했다. `prefill_cursor`로 진행 위치를 추적하고, token budget이 남는 만큼만 prefill chunk를 schedule한다. decode 요청은 iteration마다 계속 들어올 수 있으므로, prefill이 긴 요청 하나가 전체 decode 흐름을 막지 않게 하는 것이 핵심이었다.

### Async arrivals와 benchmark 입력

실제 serving에서는 모든 요청이 동시에 들어오지 않는다. 그래서 async arrival workload를 읽을 수 있는 path를 추가했다. JSON workload로 요청 목록을 읽고, `AsyncRequestQueue`와 `RequestSubmitter`가 arrival time에 맞춰 scheduler에 request를 넣는다.

CLI에서는 JSON benchmark workload, max batch size, max tokens per batch, async 실행, 결과 저장과 비교 흐름을 사용할 수 있게 했다. 이렇게 해야 scheduler 구현이 단순 기능이 아니라, 서로 다른 scheduling 설정을 비교할 수 있는 실험 단위가 된다.

### GPU benchmark 문서화

CPU에서는 continuous batching과 chunked prefill이 항상 throughput을 올려주지는 않는다. local CPU implementation에서는 batch가 실제 GPU kernel처럼 fused batched forward로 실행되는 것이 아니라 scheduler abstraction에 가까워서, scheduler overhead가 성능에 그대로 보일 수 있다.

그래서 GPU benchmark 문서에서는 vLLM을 기준으로 `max-num-seqs`, `max-num-batched-tokens`를 바꾸며 TTFT, TPOT, ITL, E2EL, throughput, peak VRAM을 비교했다. 이후 리뷰 피드백을 반영해 request-level static batching과 continuous slot reuse를 같은 요청 집합에서 비교하는 Hugging Face control script와 raw JSON 결과도 추가했다.

## 해결 과정에서 생긴 문제와 결정

첫 번째 문제는 continuous batching을 CPU implementation에서 어떻게 보여줄지였다. GPU serving engine에서는 여러 sequence를 한 번에 batched forward로 실행할 수 있지만, 이 educational C++ implementation에서는 scheduler가 batch를 만들더라도 실제 연산이 production GPU engine처럼 완전히 fused 되는 것은 아니다. 그래서 구현 목표를 "CPU에서 무조건 빨라진다"가 아니라, request lifecycle과 slot reuse 정책을 코드로 설명할 수 있게 하는 것으로 잡았다.

두 번째 문제는 benchmark 해석이었다. CPU 결과만 보면 continuous batching이 baseline보다 느리게 보일 수 있다. 이걸 실패로 숨기지 않고, CPU에서는 scheduler overhead가 더 크게 보이고 GPU에서는 batch occupancy와 kernel amortization 때문에 다른 결과가 나온다는 식으로 분리했다.

세 번째 문제는 리뷰에서 나온 request-level batching 비교였다. `max-num-seqs` sweep은 continuous batching 내부 capacity tuning이지, request-level static batching baseline 자체는 아니다. 그래서 vanilla Hugging Face control experiment를 따로 만들어, 같은 model과 request set에서 `request_level_static`과 `continuous_slot_reuse`를 비교했다. 이 실험에서는 Qwen3-0.6B에서 continuous slot reuse가 request throughput과 output token throughput 모두 4.70x 높았고, Qwen2.5-3B-Instruct에서도 2.73x 높게 나왔다.

## 결과

[PR #37](https://github.com/aerlabsAI/nano-vllm/pull/37)은 merge되어 nano-vllm에 continuous batching scheduler가 들어갔다. 이 작업으로 request state, scheduler iteration, async arrival, JSON benchmark workload가 하나의 실행 흐름으로 연결됐다.

[PR #50](https://github.com/aerlabsAI/nano-vllm/pull/50)은 GPU benchmark와 후속 control experiment를 문서화하는 작업으로 merge됐다. 기능 구현 PR과 달리 docs/benchmark 중심이지만, continuous batching을 "왜 빠른가"가 아니라 "어떤 조건에서 무엇과 비교해야 하는가"까지 설명하는 쪽으로 확장했다.

프로젝트 구현과 benchmark 정리 이후에는 AER Labs 블로그에 2편의 글로 공개했다. Part 1은 LLM inference engine의 core architecture와 PagedAttention을 설명하고, Part 2는 continuous batching과 chunked prefill, 그리고 GPU/CPU benchmark 결과를 설명한다. 두 글 모두 Hyogeun Oh, Wontak Ryu, Hyoseop Song, Chanho Lee 4명이 함께 작성한 AER Labs 기술 글이다.

## References

- [aerlabsAI/nano-vllm](https://github.com/aerlabsAI/nano-vllm)
- [PR #37: Implement continuous batching scheduler](https://github.com/aerlabsAI/nano-vllm/pull/37)
- [PR #50: Add section 9.6 GPU benchmark after CPU analysis](https://github.com/aerlabsAI/nano-vllm/pull/50)
- [Understanding LLM Inference Engines: Inside Nano-VLLM Part 1](https://aerlabs.tech/blogs/nano-vllm-part1)
- [Understanding LLM Inference Engines: Inside Nano-VLLM Part 2](https://aerlabs.tech/blogs/nano-vllm-part2)
