---
title: "LeetCode 27"
date: '2024-09-21'
draft: false
---

## 27. Remove Element

### Solution

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

### Time Complexity

배열의 길이만큼 반복하므로 $O(n)$이다.

### Space Complexity

in-place로 작업을 수행하므로 추가 공간이 필요하지 않다. 따라서 공간 복잡도는 $O(1)$이다.

### Comment

두 배열이 정렬되어 