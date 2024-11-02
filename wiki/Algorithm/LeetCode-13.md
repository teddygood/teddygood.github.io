---
title: "LeetCode 13"
date: '2024-11-03'
draft: false
---

## [13. Roman to Integer](https://leetcode.com/problems/roman-to-integer/description/)

:::tip
Clicking the heading will take you to the LeetCode problem.
:::

## Solution

```python
class Solution:
    def romanToInt(self, s: str) -> int:
        symbol_dict = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        answer = 0
        prev_value = 0

        for c in reversed(s):
            current_value = symbol_dict[c]
            if current_value < prev_value:
                answer -= current_value
            else:
                answer += current_value
                prev_value = current_value
        return answer
```

The time complexity is $O(n)$ because the string is traversed once relative to its length n, and the space complexity is $O(1)$ since only a fixed amount of space is utilized.