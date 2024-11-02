---
title: "LeetCode 88"
date: '2024-09-21'
draft: false
---

## 88. Merge Sorted Array 

You are given two integer arrays `nums1` and `nums2`, sorted in **non-decreasing order**, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

**Merge** `nums1` and `nums2` into a single array sorted in **non-decreasing order.**

The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to 0 and should be ignored. `nums2` has a length of `n`.

### Example

**Example 1:**
>**Input:** nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3  
**Output:** [1,2,2,3,5,6]  
**Explanation:** The arrays we are merging are [1,2,3] and [2,5,6].  
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

**Example 2:**
>**Input:** nums1 = [1], m = 1, nums2 = [], n = 0  
**Output:** [1]  
**Explanation:** The arrays we are merging are [1] and [].  
The result of the merge is [1].

**Example 3:**

> **Input:** nums1 = [0], m = 0, nums2 = [1], n = 1  
**Output:** [1]  
**Explanation:** The arrays we are merging are [] and [1].  
The result of the merge is [1].  
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.


**Constraints:**
- `nums1.length == m + n`
- `nums2.length == n`
- `0 <= m, n <= 200`
- `1 <= m + n <= 200`
- `-10^9 <= nums1[i], nums2[j] <= 10^9`

Follow up: Can you come up with an algorithm that runs in $O(m + n)$ time?

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