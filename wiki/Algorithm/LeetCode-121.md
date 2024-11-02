---
title: "LeetCode 121"
date: '2024-11-02'
draft: false
---

## 121. Best Time to Buy and Sell Stock

### Problem Description

You are given an array `prices` where `prices[i]` is the price of a given stock on the iᵗʰ day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.

### Example

**Example 1:**

```text
Input: prices = [7,1,5,3,6,4]
Output: 5
```
Explanation: 
Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

**Example 2:**

```text
Input: prices = [7,6,4,3,1]
Output: 0
```
Explanation: 
In this case, no transactions are done and the max profit = 0.

Constraints

- `1 <= prices.length <= 10^5`
- `0 <= prices[i] <= 10^4`

## Solution

### for loop

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if not prices:
            return 0
            
        # Initialize two variables to store the minimum price and the maximum profit
        min_price = prices[0]
        max_profit = 0

        for index, price in enumerate(prices):
            if price < min_price:
                min_price = price
            else:
                profit = price - min_price
                if profit > max_profit:
                    max_profit = profit
        
        return max_profit
```

The time complexity is $O(n)$ because I iterate through the array only once. The space complexity is $O(1)$ because I use only two variables.
