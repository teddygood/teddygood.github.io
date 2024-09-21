---
title: "LeetCode 26"
date: '2024-09-21'
draft: false
---

## 26. Remove Duplicates from Sorted Array

### Solution

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

### Time Complexity

배열의 길이만큼 반복하므로 $O(n)$이다.

### Space Complexity

in-place로 작업을 수행하므로 추가 공간이 필요하지 않다. 따라서 공간 복잡도는 $O(1)$이다.

### Comment

두 배열이 정렬되어 