---
title: 'LeetCode 49'
date: '2025-06-26'
---

## [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/description/)

:::tip
Clicking the heading will take you to the LeetCode problem.
:::

## Problem

Given an array of strings `strs`, group the anagrams together. You can return the answer in **any order**.

**Example 1:**

```
**Input:** strs = ["eat","tea","tan","ate","nat","bat"]

**Output:** [["bat"],["nat","tan"],["ate","eat","tea"]]
```

**Explanation:**

- There is no string in strs that can be rearranged to form `"bat"`.
- The strings `"nat"` and `"tan"` are anagrams as they can be rearranged to form each other.
- The strings `"ate"`, `"eat"`, and `"tea"` are anagrams as they can be rearranged to form each other.

**Example 2:**

```
**Input:** strs = [""]

**Output:** [[""]]
```

**Example 3:**

```
**Input:** strs = ["a"]

**Output:** [["a"]]
```

**Constraints:**

- `1 <= strs.length <= 104`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters.


## Solution(Sorting based)

```python
from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = collections.defaultdict(list)

        for word in strs:
            anagrams[''.join(sorted(word))].append(word)
        return anagrams.values()
```

### Time and Space Complexity

- **Sorting a word**: `O(k log k)`, where `k` is the length of the word
- **Total time complexity**: `O(n * k log k)`, where `n` is the number of words in the input list
- **Space complexity**: `O(n * k)` for storing the grouped anagrams in a hash map

## Solution(word length count based)

```python
from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = collections.defaultdict(list)

        for word in strs:
            count = [0] * 26 # a~z
            for chat in word:
                count[ord(char) - ord('a')] += 1

            key = tuple(count) # List can't be keys, so convert to tuples
            anagrams[key].append(word)
```

### Time and Space Complexity

- **Counting letters in a word** takes `O(k)`, where `k` is the length of the word
    
- **Total time complexity** is `O(n * k)`, where `n` is the number of words in the input list
    
- **Space complexity** is `O(n * k)` for storing the grouped anagrams in a hash map (`defaultdict`)