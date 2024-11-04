---
title: "LeetCode 58"
date: '2024-11-05'
draft: false
---

## [58. Length of Last Word](https://leetcode.com/problems/length-of-last-word/description)

:::tip
Clicking the heading will take you to the LeetCode problem.
:::

## Solution

### naive solution

```python
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        length = 0
        i = len(s) - 1

        while i >= 0 and s[i] == ' ':
            i -= 1

        while i >= 0 and s[i] != ' ':
            length += 1
            i -= 1

        return length         
```

By reserving the loop, we first find the index of the whitespace and then calculate the length. The overall time complexity is $O(n)$, where $n$ is the length of the string. The space complexity is $O(1)$ since we only use a constant amount of space.

### Using split

```python
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        words = s.split()
    
        return len(words[-1]) if words else 0
```

The `split()` method splits the string based on whitespace, which involves a single traversal of the string to find spaces. Therefore, the time complexity is $O(n)$. When using the `split()` method, the space complexity is $O(n)$ because the method creates a list of words. 

### Using strip

```python
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        # Remove whitespace from the right end of the string
        s = s.strip()
    
        # Find the position of the last space to determine where the last word starts
        last_space_index = s.rfind(' ')
    
        # The length of the last word is the difference between the string length and the last space position
        return len(s) - last_space_index - 1
```

First, use the `strip()` method to remove any whitespace from both ends of the string. Then, use the `rfind()` method to find the position of the last space and calculate the length of the last word. The length of the last word is obtained by subtracting the position of the last space from the total length of the string and adding 1.

The time complexity of this code is $O(n)$ because both `strip()` and `rfind()` each scan the string once. The space complexity is $O(1)$, as it uses only a few variables and does not allocate additional memory beyond the trimmed string.