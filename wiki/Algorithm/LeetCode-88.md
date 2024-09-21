---
title: "LeetCode 88"
date: '2024-09-21'
draft: false
---

## 88. Merge Sorted Array 

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

### Time Complexity

nums1과 num2의 모든 요소를 최대 한 번씩만 비교하므로 비교 횟수는 $O(m + n)$이다. 따라서 전체 시간 복잡도는 $O(m + n)$이다.

### Space Complexity

nums1의 내부에서 병합 작업을 수행하므로 추가 공간이 필요하지 않다. 따라서 공간 복잡도는 $O(1)$이다.

### Comment

두 배열이 정렬되어 있으므로 뒤에서부터 비교하면서 채워 넣으면 된다.