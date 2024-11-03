---
title: "LeetCode 121"
date: '2024-11-02'
draft: false
---

## [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

:::tip
Clicking the heading will take you to the LeetCode problem.
:::

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
