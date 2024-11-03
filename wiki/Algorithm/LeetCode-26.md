---
title: "LeetCode 26"
date: '2024-09-21'
draft: false
---

## [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description)

:::tip
Clicking the heading will take you to the LeetCode problem.
:::

## Solution

```python
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        
        # Pointer to track the position of the unique elements
        i = 0

        # Iterate through the array starting from the second element
        for j in range(1, len(nums)):
            # If current element is different from the last unique element
            if nums[j] != nums[i]:
                # Move the pointer i forward and replace the next position with nums[j]
                i += 1
                nums[i] = nums[j]
                
        # Return the length of the array with unique elements
        return i + 1    
```

The time complexity is $O(n)$ because it iterates through the length of the array. Since the operation is performed in-place, no additional space is required. Therefore, the space complexity is $O(1)$.