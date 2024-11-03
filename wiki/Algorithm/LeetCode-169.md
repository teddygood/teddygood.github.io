---
title: "LeetCode 169"
date: '2024-10-29'
draft: false
---

## [169. Majority Element](https://leetcode.com/problems/majority-element/)

:::tip
Clicking the heading will take you to the LeetCode problem.
:::

## Solution

### naive solution

```python
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        n = len(nums)
        for i in range(n):
            count = 0
            for j in range(n):
                if nums[j] == nums[i]:
                    count += 1
            if count > n // 2:
                return nums[i]
```

I solved it the naive way, but I couldn't submit it because it exceeded the time limit. The time complexity of this solution is $O(n^2)$.

### Sorting

```python
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        nums.sort()
        return nums[len(nums) // 2]
```

If the array is sorted, the majority element will always be at the middle index. The time complexity of this solution is $O(n \log n)$. The space complexity is $O(1)$ because it uses in-place sorting.

### Using a Hash Map

```python
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        counts = {}
        n = len(nums)

        for num in nums:
            # get value of num(key), if not exist, return 0
            counts[num] = counts.get(num, 0) + 1
            if counts[num] > n // 2:
                return num
```

The time complexity of this solution is $O(n)$ because I only iterate through the array once. The space complexity is $O(n)$ because I use a hash map to store the count of each element.

### Using Counter

```python
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        return Counter(nums).most_common(1)[0][0] # Counter(nums).most_common(1) == [(3, 2)]
```

The time complexity of this solution is $O(n)$ because I use the `Counter` class from the `collections` module. 

### Boyer-Moore Voting Algorithm

```python
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        count = 0
        candidate = None

        for num in nums:
            if count == 0:
                candidate = num
                count = 1
            elif num == candidate:
                count += 1
            else:
                count -= 1

        return candidate
```

The time complexity of this solution is $O(n)$ because I only iterate through the array once. The space complexity is $O(1)$ because I use only two variables. 

