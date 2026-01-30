---
title: "Optiver \"Trading at the Close\" Competition Retrospective"
description: Kaggle Optiver - Trading at the Close Retrospective (Bronze Medal, Top 30%)
role: Data Scientist
timeline: Oct 2023 - Dec 2023
stack: [Python, LightGBM, Numba, Pandas]
category: Kaggle Competition
image: /img/projects/optiver-kaggle-header.png
hide_table_of_contents: false
---

# Optiver "Trading at the Close" Competition Retrospective

## Motivation

In 2023, while participating in the 4th cohort of the Google ML Bootcamp, one of the completion requirements was to participate in a Kaggle competition. Coincidentally, Optiver was hosting a competition called "Trading at the Close," and I chose it because although it was a domain completely unrelated to me and unfamiliar at the time, it seemed interesting. My final submission was LightGBM-based code.

---

## Competition Overview

### Optiver and Closing Auctions

Optiver is a global electronic market maker. They provide liquidity to major exchanges worldwide while trading derivatives, equities, ETFs, bonds, and foreign exchange.

The **Nasdaq Closing Cross** takes place daily during the last 10 minutes of the market (3:50–4:00 PM ET), during which the official closing price for the day is determined. It is a complex period where investors adjust positions, leading to high volatility, and requires simultaneous processing of traditional order book data and auction data.

### Schedule and Prize

![Competition Timeline](/img/projects/optiver-timeline.png)

This is a forecasting competition with an active training phase and a second period where models will be run against real market data.

**Training Timeline:**
- **Sep 20, 2023** - Start Date.
- **Dec 13, 2023** - Entry Deadline.
- **Dec 13, 2023** - Team Merger Deadline.
- **Dec 20, 2023** - Final Submission Deadline.

All deadlines are at 11:59 PM UTC.

**Forecasting Timeline:**
Selected notebooks are run against real market data with leaderboard updates every two weeks.

- **Mar 20, 2024** - Competition End Date
- **Total Prize**: $100,000 (1st Place $25,000)

Unlike typical Kaggle competitions, this was a **forecasting competition** where models were evaluated on actual market data for about 3 months after submission. The leaderboard was updated every two weeks, and the previous day's answers were released daily via `revealed_targets`.

### Problem Definition

The task was to predict price movements 60 seconds into the future during the closing auction period.

### Target Definition

The target is the change in the WAP (Weighted Average Price) of an individual stock minus the change in the Index WAP, expressed in basis points (bp, 0.01%):

$$
Target = \left( \frac{StockWAP_{t+60}}{StockWAP_t} - \frac{IndexWAP_{t+60}}{IndexWAP_t} \right) \times 10000
$$

In other words, it is a problem of predicting the "relative" price change of an individual stock with the overall market movement removed.

### Evaluation Metric

Mean Absolute Error (MAE):

$$
MAE = \frac{1}{n} \sum_{i=1}^{n} |y_i - x_i|
$$

Where:

- $n$ is the total number of data points.
- $y_i$ is the predicted value for data point i.
- $x_i$ is the observed value for data point i.

### Data Structure

The training data consists of closing auction snapshots for about 200 stocks over 481 days, totaling about 5 million rows. Key columns are as follows:

- `stock_id`: Stock unique identifier
- `date_id`: Date identifier (sequential)
- `seconds_in_bucket`: Seconds elapsed since auction start
- `imbalance_size`: Unmatched volume at current reference_price (USD)
- `imbalance_buy_sell_flag`: Imbalance direction: 1 (Buy side), -1 (Sell side), 0 (None)
- `reference_price`: Price where matched volume is maximized
- `matched_size`: Volume matchable at current reference_price (USD)
- `far_price` / `near_price`: Optimal execution price (Auction only / Including continuous orders)
- `bid_price` / `ask_price`: Best bid/ask price in non-auction order book
- `bid_size` / `ask_size`: Volume of best bid/ask (USD)
- `wap`: Weighted average price of non-auction order book ($BidP \times AskS + AskP \times BidS) / (BidS + AskS)$

---

## My Approach

### Feature Engineering

I used a total of 124 features in `my-submission.ipynb`. They can be broadly categorized into five groups:

**1. Liquidity/Imbalance Features**
- `liquidity_imbalance`: Order volume imbalance → `(bid_size - ask_size) / (bid_size + ask_size)`
- `matched_imbalance`: Matched/Imbalance volume ratio → `(imbalance_size - matched_size) / (imbalance_size + matched_size)`
- `size_imbalance`: Simple ratio → `bid_size / ask_size`
- `imbalance_momentum`: Time change of `imbalance_size` per stock divided by `matched_size`

**2. Price Spread Features**
- `price_spread`: `ask_price - bid_price`
- `spread_intensity`: Change in spread per stock
- `price_pressure`: `imbalance_size * price_spread`
- `market_urgency`: `price_spread * liquidity_imbalance`

**3. Price Pair/Triplet Ratio Features**
- Imbalance ratios for all pair combinations of 6 prices (`reference_price`, `far_price`, `near_price`, `ask_price`, `bid_price`, `wap`) → `(P1 - P2) / (P1 + P2)` form
- Numba-accelerated triplet imbalance: (max - mid) / (mid - min) ratio of three prices

**4. Time Series Features**
- 1/2/3/10 lags and pct_change for `matched_size`, `imbalance_size`, `reference_price`, `imbalance_buy_sell_flag`
- 1/2/3/10 diffs for `ask_price`, `bid_price`, `ask_size`, `bid_size`, `market_urgency`, `imbalance_momentum`, `size_imbalance`

**5. Global Statistics Features**
- Median, std, ptp (peak-to-peak) of `bid_size`, `ask_size`, `bid_price`, `ask_price` per stock mapped to `global_*`
- Time derivatives: `dow` (day of week), `seconds`, `minute`

### Model and Training

- **Model**: LightGBM (`objective='mae'`, **Tesla P100 GPU**)
- **Hyperparameters**: n_estimators=6000, num_leaves=256, max_depth=11, learning_rate=0.00871, subsample=0.6, colsample_bytree=0.8
- **Validation**: Date-based 5-fold CV, with a 5-day purge gap between folds (to prevent time leakage)
- **Final Training**: Retrained on full data using the average best_iteration (approx. 5103) of the 5 folds

### Inference

- Mantained a rolling cache of the last 21 rows per stock to generate features
- Equal-weight ensemble of 5 fold models
- `zero_sum` post-processing: Subtract weighted average from predictions using **square root of volume (bid+ask size)** as weights. This ensures the market-wide sum is zero.
- Clipping: Limited to [-64, 64] range

---

## Results

| Item | Value |
|---|---|
| 5-fold CV MAE | 5.83 (Per fold: 6.75, 6.12, 5.97, 5.49, 4.80) |
| Public/Private LB | 5.4744 |
| Rank | 981st / 3,225 Teams (Top 30%) |
| Runtime | 2h 35m (P100 GPU) |
| Inference Speed | ~0.34s per batch |

---

## Comparison with Top Solutions

After the competition, I reviewed top solutions to see what I missed.

### 1st Place – HYD (hydantess)

- **Model**: CatBoost(50%) + GRU(30%) + Transformer(20%) Ensemble
- **Features**: GRU captured 55-step time-series patterns, Transformer captured cross-sectional relationships among 200 stocks
- **Online Learning**: Retrained every 12 days (Total 4 times)
- **Weighted zero_sum**: `pred -= (pred * stock_weights).sum() / stock_weights.sum()`
- **Sample Weights**: Normalized per-stock volatility with `1.0 / (stock_std + 1e-7)`

### 9th Place – ADAM. (hookman)

- **Model**: 3× XGBoost (different seeds)
- **Features**: 157 features, median-scaled volume, MACD, WAP-based target proxy
- **Data Weights**: 1.5x weight on last 45 days
- **Online Learning**: Retrained on Day N and Day N+30

### 14th Place – Clash Royale (5-person team)

- **Model**: LightGBM + CatBoost simple average
- **Features**: 193 features, revealed target lags, RSI/MACD/Bollinger Bands
- **Online Learning**: Alternating LGB/CAT retraining every 6-9 days
- **Key Fix**: Fixed leakage in `mid_price_movement` calculation by grouping by `stock_id`

### 15th Place – O Yuksel (lognorm)

- **Model**: 3× LGB (Offline) + 4× XGB + 1× LGB (Online)
- **Features**: Revealed target, relative performance vs. market/sector, behavior-based embeddings instead of stock_id
- **Post-processing**: Subtracted index-weighted mean instead of simple zero-sum

### Common Themes and What I Missed

| Top Solution Feature | My Solution |
|---|---|
| **Online Learning** (Retrain every 6~30 days) | Trained once and fixed |
| **Multi-Model Ensemble** (LGB+CAT+XGB or +GRU/Transformer) | LightGBM Single |
| **Per-Stock Scaling** (stock_std, median) | used Global statistics only |
| **Weighted zero_sum** | Used simple volume sqrt weights |
| **Revealed Target Features** | Not used |
| **Seed Diversity** (3+ same models) | 5-fold ensemble only |

---

## Retrospective

### What Went Well
- Accelerated triplet imbalance calculation with Numba to reduce feature generation time
- Prevented time leakage with date-based purge gap
- Ran stably in Kaggle environment thanks to memory downcasting

### What Could Be Improved
- **Did not use Online Learning.** The competition API provided the **previous day's target (`revealed_targets`)** at the start of each day. Top rankers did not discard this data but periodically retrained models to reflect the latest market trends. I trained the model once and left it for 3 months, failing to adapt to drift.
- **Did not use Sequence Models.** The 1st place solution used GRU for temporal order and Transformer for cross-stock relationships. Tree models alone likely struggled to capture these structural patterns.
- **Lack of Per-Stock Normalization.** Scaling by stock_std or median could have corrected for volatility differences between stocks.
- **Persistence:** Since this project was for completing the Google ML Bootcamp, I didn't persist until the very end of the competition. I wonder if I could have gotten a higher score if I had put in a bit more effort.

---

## References

- [1st place – HYD](https://www.kaggle.com/competitions/optiver-trading-at-the-close/writeups/hyd-1st-place-solution)
- [9th place – ADAM.](https://www.kaggle.com/competitions/optiver-trading-at-the-close/writeups/adam-9th-place-solution)
- [14th place – Clash Royale](https://www.kaggle.com/competitions/optiver-trading-at-the-close/writeups/clash-royale-14th-place-solution-for-the-optiver-t)
- [15th place – O Yuksel](https://www.kaggle.com/competitions/optiver-trading-at-the-close/writeups/o-yuksel-15th-place-solution)
- [Kaggle Data Page](https://www.kaggle.com/competitions/optiver-trading-at-the-close/data)
