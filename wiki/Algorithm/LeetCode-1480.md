---
title: "LeetCode 1480"
date: '2025-11-13 19:50'
---
## [1480. Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array)

:::tip
Clicking the heading will take you to the LeetCode problem.
:::

## Solution

처음 생각한 풀이는 $O(n^2)$이다.

```python
class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        answer = [0] * len(nums)

        for i in range(len(nums)):
            for j in range(i + 1):
                answer[i] += nums[j]

        return answer
```

두 번째 생각한 풀이는 $O(n)$이다.

```python
class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        answer = []
        s = 0

        for n in nums:
            s += n
            answer.append(s)

        return answer
```