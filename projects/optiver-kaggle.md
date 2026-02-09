---
title: 'Optiver "Trading at the Close" 대회'
description: Kaggle Optiver - Trading at the Close 대회 (Top 30%)
role: Data Scientist
timeline: Oct 2023 - Dec 2023
stack: [Python, LightGBM, Numba, Pandas]
category: Kaggle Competition
image: /img/projects/optiver-kaggle-header-aspect.png
hide_table_of_contents: false
---

{/* truncate */}


# Optiver "Trading at the Close" 대회

## 시작하게 된 계기

2023년, Google ML 부트캠프 4기에 참여하면서 수료 조건 중 하나로 캐글 대회 참가가 있었다. 마침 Optiver가 "Trading at the Close"라는 대회를 열었고, 당시 나랑은 전혀 관계없고 생소한 도메인이지만 재밌을 것 같은 도메인이라 선택했다. 최종 제출물은 LightGBM 기반 코드였다.

---

## 대회 개요

### Optiver와 종가 경매

Optiver는 글로벌 전자 마켓메이커다. 파생상품, 주식, ETF, 채권, 외환 등을 거래하면서 전 세계 주요 거래소에 유동성을 공급한다.

**나스닥 종가 경매(Nasdaq Closing Cross)**는 매일 장 마감 10분(3:50~4:00 PM ET) 동안 진행되며, 이 시간에 그 날의 공식 종가가 결정된다. 투자자들이 포지션을 조정하면서 변동성이 크고, 전통적인 호가창 데이터와 경매 데이터를 동시에 처리해야 하는 복잡한 구간이다.

### 대회 일정

![대회 일정](/img/projects/optiver-timeline.png)

이 대회는 모델을 먼저 제출하고(Active Training Phase), 이후 실제 시장 데이터로 평가받는(Forecasting Phase) 방식으로 진행되었다.

**Training Timeline:**

- **2023년 9월 20일** - 대회 시작
- **2023년 12월 13일** - 참가 마감 (이 날짜 전까지 규정에 동의해야 함)
- **2023년 12월 13일** - 팀 병합 마감
- **2023년 12월 20일** - 최종 제출 마감

모든 마감 시간은 해당 날짜의 11:59 PM UTC다.

**Forecasting Timeline:**
최종 제출 마감 후, 선택된 노트북은 실제 시장 데이터 업데이트에 맞춰 주기적으로 실행되며 리더보드가 갱신된다. 업데이트는 약 2주마다 진행되었다.

- **2024년 3월 20일** - 대회 종료

이 대회는 일반적인 캐글 대회와 달리, 제출 후 약 3개월간 실제 시장 데이터로 모델이 평가되는 **forecasting 대회**였다. 리더보드가 2주마다 갱신되었고, 매일 `revealed_targets`로 전날의 정답이 공개됐다.

### 문제 정의

종가 경매 구간에서 60초 뒤의 주가 움직임을 예측하는 게 과제다.

### 타깃 정의

타깃은 개별 종목의 WAP(가중평균가격) 변화에서 지수 WAP 변화를 뺀 값으로, basis points(bp, 0.01%) 단위로 표현된다:

$$
Target = \left( \frac{StockWAP_{t+60}}{StockWAP_t} - \frac{IndexWAP_{t+60}}{IndexWAP_t} \right) \times 10000
$$

즉, 시장 전체의 움직임을 제거한 개별 종목의 "상대적" 가격 변화를 맞추는 문제다.

### 평가 지표

Mean Absolute Error (MAE)

$$
MAE = \frac{1}{n} \sum_{i=1}^{n} |y_i - x_i|
$$

여기서:

- $n$ 은 전체 데이터 포인트의 수다.
- $y_i$ 는 데이터 포인트 $i$ 의 예측값이다.
- $x_i$ 는 데이터 포인트 $i$ 의 관측값이다.

### 데이터 구조

학습 데이터는 481일간 약 200개 종목의 종가 경매 스냅샷으로, 약 500만 행 규모다. 주요 컬럼은 다음과 같다:

- `stock_id`: 종목 고유 식별자
- `date_id`: 날짜 식별자 (순차적)
- `seconds_in_bucket`: 경매 시작 후 경과 시간 (초)
- `imbalance_size`: 현재 reference_price에서 매칭되지 않은 물량 (USD)
- `imbalance_buy_sell_flag`: 불균형 방향: 1(매수 초과), -1(매도 초과), 0(없음)
- `reference_price`: 매칭 수량이 최대가 되는 가격
- `matched_size`: 현재 reference_price에서 매칭 가능한 물량 (USD)
- `far_price` / `near_price`: 경매 주문만/연속 주문 포함 시 최적 체결가
- `bid_price` / `ask_price`: 비경매 호가창의 최우선 매수/매도 가격
- `bid_size` / `ask_size`: 최우선 호가의 물량 (USD)
- `wap`: 비경매 호가창의 가중평균가격 ($BidP \times AskS + AskP \times BidS) / (BidS + AskS)$

---

## 내 접근 방식

### 피처 엔지니어링

`my-submission.ipynb`에서 총 124개의 피처를 사용했다. 크게 다섯 가지 카테고리로 나눌 수 있다

**1. 유동성/불균형 피처**

- `liquidity_imbalance`: 호가 물량 불균형 → `(bid_size - ask_size) / (bid_size + ask_size)`
- `matched_imbalance`: 매칭/불균형 물량 비율 → `(imbalance_size - matched_size) / (imbalance_size + matched_size)`
- `size_imbalance`: 단순 비율 → `bid_size / ask_size`
- `imbalance_momentum`: 종목별 `imbalance_size`의 시간 변화를 `matched_size`로 나눈 값

**2. 가격 스프레드 피처**

- `price_spread`: `ask_price - bid_price`
- `spread_intensity`: 종목별 스프레드 변화량
- `price_pressure`: `imbalance_size * price_spread`
- `market_urgency`: `price_spread * liquidity_imbalance`

**3. 가격 쌍/삼중 비율 피처**

- 6개 가격(`reference_price`, `far_price`, `near_price`, `ask_price`, `bid_price`, `wap`)의 모든 쌍 조합으로 imbalance 비율 계산 → `(P1 - P2) / (P1 + P2)` 형태
- Numba로 가속한 triplet imbalance: 세 가격의 (max - mid) / (mid - min) 비율

**4. 시계열 피처**

- `matched_size`, `imbalance_size`, `reference_price`, `imbalance_buy_sell_flag`의 1/2/3/10 래그와 pct_change
- `ask_price`, `bid_price`, `ask_size`, `bid_size`, `market_urgency`, `imbalance_momentum`, `size_imbalance`의 1/2/3/10 diff

**5. 전역 통계 피처**

- 종목별 `bid_size`, `ask_size`, `bid_price`, `ask_price`의 median, std, ptp(peak-to-peak)를 계산해 `global_*` 형태로 매핑
- 시간 파생: `dow`(요일), `seconds`, `minute`

### 모델과 학습

- **모델**: LightGBM (`objective='mae'`, **Tesla P100 GPU**)
- **하이퍼파라미터**: n_estimators=6000, num_leaves=256, max_depth=11, learning_rate=0.00871, subsample=0.6, colsample_bytree=0.8
- **검증**: 날짜 기준 5-fold CV, 각 fold 사이에 5일 purge gap 적용 (시간 누수 방지)
- **최종 학습**: 5개 fold의 평균 best_iteration(약 5103)으로 전체 데이터 재학습

### 추론

- 종목별 최근 21행을 롤링 캐시로 유지하면서 피처 생성
- 5개 fold 모델의 equal-weight 앙상블
- `zero_sum` 후처리: 예측값에서 **거래량(bid+ask size)의 제곱근**을 가중치로 써서 가중 평균을 뺀다. 시장 전체의 합이 0이 되도록 맞추는 과정이다.
- 클리핑: [-64, 64] 범위로 제한

---

## 결과

| 항목              | 값                                          |
| ----------------- | ------------------------------------------- |
| 5-fold CV MAE     | 5.83 (fold별: 6.75, 6.12, 5.97, 5.49, 4.80) |
| Public/Private LB | 5.4744                                      |
| 순위              | 981위 / 3,225팀 (Top 30%)                   |
| 실행 시간         | 2시간 35분 (P100 GPU)                       |
| 추론 속도         | 배치당 ~0.34초                              |

---

## 상위 솔루션과 비교

대회가 끝나고 상위권 솔루션들을 살펴봤다. 아래는 내가 놓친 부분이 무엇인지 정리한 것이다.

### 1위 – HYD (hydantess)

- **모델**: CatBoost(50%) + GRU(30%) + Transformer(20%) 앙상블
- **특징**: GRU는 55개 타임스텝의 시계열 패턴을, Transformer는 200개 종목 간 cross-sectional 관계를 포착
- **온라인 학습**: 12일마다 재학습 (총 4회)
- **가중 zero_sum**: `pred -= (pred * stock_weights).sum() / stock_weights.sum()`
- **샘플 가중치**: `1.0 / (stock_std + 1e-7)`로 종목별 변동성 정규화

### 9위 – ADAM. (hookman)

- **모델**: 3× XGBoost (다른 시드)
- **피처**: 157개, median-scaled 물량, MACD, WAP 기반 타깃 프록시
- **데이터 가중치**: 최근 45일에 1.5배 가중치
- **온라인 학습**: Day N, Day N+30에 재학습

### 14위 – Clash Royale (5인 팀)

- **모델**: LightGBM + CatBoost 단순 평균
- **피처**: 193개, revealed target 래그, RSI/MACD/Bollinger Bands
- **온라인 학습**: 6~9일마다 LGB/CAT 교대 재학습
- **핵심 수정**: `mid_price_movement` 계산 시 `stock_id` 그룹화로 누수 수정

### 15위 – O Yuksel (lognorm)

- **모델**: 3× LGB(오프라인) + 4× XGB + 1× LGB(온라인)
- **피처**: revealed target, 시장/섹터 대비 상대 성과, stock_id 대신 행동 기반 임베딩
- **후처리**: 단순 zero-sum 대신 index-weighted mean 차감

### 공통점과 내가 놓친 것들

| 상위권 특징                                              | 내 솔루션                      |
| -------------------------------------------------------- | ------------------------------ |
| **온라인 학습** (6~30일마다 재학습)                      | 한 번 학습 후 고정             |
| **다중 모델 앙상블** (LGB+CAT+XGB 또는 +GRU/Transformer) | LightGBM 단일                  |
| **종목별 스케일링** (stock_std, median)                  | 전역 통계만 사용               |
| **가중 zero_sum**                                        | 단순 거래량 제곱근 가중치 사용 |
| **revealed target 피처**                                 | 사용 안 함                     |
| **시드 다양성** (같은 모델 3개 이상)                     | 5-fold 앙상블만                |

---

## 회고

### 잘한 점

- Numba로 triplet imbalance를 가속해서 피처 생성 시간을 줄였다
- 날짜 기반 purge gap으로 시간 누수를 억제했다
- 메모리 다운캐스팅으로 Kaggle 환경에서도 안정적으로 돌았다

### 아쉬운 점

- **온라인 학습을 안 했다.** 이 대회는 API가 매일 장 시작 때 **전날의 정답(`revealed_targets`)을 제공**해준다. 상위권들은 이 데이터를 버리지 않고 모델을 주기적으로 재학습(retrain)시켜서 시장의 최신 트렌드를 반영했다. 나는 모델을 한 번 학습시키고 3개월 내내 그대로 둬서 drift에 대응하지 못했다.
- **시퀀스 모델을 안 붙였다.** 1위 솔루션은 GRU로 시간 순서, Transformer로 종목 간 관계를 포착했다. 트리 모델만으로는 이런 구조적 패턴을 잡기 어려웠을 것이다.
- **종목별 정규화가 없었다.** stock_std나 median으로 스케일링했으면 종목 간 변동성 차이를 보정할 수 있었다.
- Google ML Bootcamp 수료를 목적으로 한 프로젝트이기에 대회가 끝날 때까지 끊기있게 하지 않았다. 좀 더 노력을 했으면 더 높은 점수도 받을 수 있지 않았을까 싶다.

---

## 참고 자료

- [1st place – HYD](https://www.kaggle.com/competitions/optiver-trading-at-the-close/writeups/hyd-1st-place-solution)
- [9th place – ADAM.](https://www.kaggle.com/competitions/optiver-trading-at-the-close/writeups/adam-9th-place-solution)
- [14th place – Clash Royale](https://www.kaggle.com/competitions/optiver-trading-at-the-close/writeups/clash-royale-14th-place-solution-for-the-optiver-t)
- [15th place – O Yuksel](https://www.kaggle.com/competitions/optiver-trading-at-the-close/writeups/o-yuksel-15th-place-solution)
- [Kaggle Data Page](https://www.kaggle.com/competitions/optiver-trading-at-the-close/data)
