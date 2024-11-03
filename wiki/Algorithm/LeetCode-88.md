---
title: "LeetCode 88"
date: '2024-09-21'
draft: false
---

## [88. Merge Sorted Array ](https://leetcode.com/problems/merge-sorted-array/description)

:::tip
Clicking the heading will take you to the LeetCode problem.
:::

### Solution

```python
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        # Initialize pointers for nums1, nums2, and the end of nums1
        i, j, k = m - 1, n - 1, m + n - 1

        # Traverse from the end of both arrays and the merge them
        while i >= 0 and j >= 0:
            if nums1[i] > nums2[j]:
                nums1[k] = nums1[i]
                i -= 1
            else:
                nums1[k] = nums2[j]
                j -= 1
            k -= 1
        
        # If any elements are left in nums2, copy them to nums1
        while j >= 0:
            nums1[k] = nums2[j]
            k -= 1
            j -= 1
```

Since both arrays are sorted, elements can be compared from the end and the merged array can be filled accordingly. Each element in `nums1` and `nums2` is compared at most once, resulting in a total of $O(m + n)$ comparisons. Therefore, the time overall time complexity is $O(m + n)$. As the merge operation is performed in-place within `nums1`, no additional space is required. Consequently, the space complexity is $O(1)$.