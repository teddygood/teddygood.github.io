---
title: "LeetCode 27"
date: '2024-09-21'
draft: false
---

## 27. Remove Element

### Problem Description

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` **in-place**. The order of the elements may be changed. Then return the **number of elements in `nums` which are not equal to `val`**.

Consider the number of elements in `nums` which are not equal to `val` to be `k`. To get accepted, you need to do the following things:

1. Change the array `nums` such that the first `k` elements of `nums` contain the elements which are not equal to `val`. The remaining elements of `nums` are not important as well as the size of `nums`.
2. Return `k`.

### Custom Judge:

The judge will test your solution with the following code:

```cpp
int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
// It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
```

### Example

**Example 1:**
>**Input:** nums = [3,2,2,3], val = 3  
**Output:** 2, nums = [2,2,\_,\_]  
**Explanation:** Your function should return k = 2, with the first two elements of nums being 2.  
It does not matter what you leave beyond the returned k (hence they are underscores).

**Example 2:**

>**Input:** nums = [0,1,2,2,3,0,4,2], val = 2  
**Output:** 5, nums = [0,1,3,0,4,\_,\_,\_]  
**Explanation:** Your function should return k = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.  
It does not matter what you leave beyond the returned k (hence they are underscores).

**Constraints:**
- `0 <= nums.length <= 100`
- `0 <= nums[i] <= 50`
- `0 <= val <= 100`

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