---
title: "Programmers 노란불 신호등"
date: '2026-05-16 09:20'
---
## 문제

- 2025 카카오 하반기 1차
## Solution

레벨 1이라길래 풀었는데 레벨 1이 아닌 느낌의 문제. lcm과 주기, `%`를 활용할 수 있으면 풀 수 있다.


```python
from math import gcd
from functools import reduce

def lcm(a, b):
    return a * b // gcd(a, b)

def solution(signals):
    # 신호등 주기
    cycles = [g + y + r for g, y, r in signals]
    
    # 전체 반복 주기
    limit = reduce(lcm, cycles)
    
    # 시간 탐색
    for t in range(1, limit + 1):
        ok = True
        # 모든 신호등 검사
        for g, y, r in signals:
            cycle = g + y + r
            
            x = (t - 1) % cycle + 1
            
            # 노란불인지 검사
            if not (g < x <= g + y):
                ok = False
                break
                
        if ok:
            return t

    return -1
```