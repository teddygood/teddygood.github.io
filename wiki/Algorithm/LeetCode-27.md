---
title: "LeetCode 27"
date: '2024-09-21'
draft: false
---

## [27. Remove Element](https://leetcode.com/problems/remove-element/description)

:::tip
Clicking the heading will take you to the LeetCode problem.
:::

## Solution

```python
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        # Initialize a pointer to track the index for non-val elements 
        i = 0

        # Iterate through the array
        for j in range(len(nums)):
            # If the current element is not equal to val
            if nums[j] != val:
                # Place the element at the i-th position
                nums[i] = nums[j]
                # Move the pointer i forward
                i += 1
        
        # Return the length of the modified array
        return i
```

The time complexity is $O(n)$ because it iterates through the length of the array. Since the operation is performed in-place, no additional space is required. Therefore, the space complexity is $O(1)$.