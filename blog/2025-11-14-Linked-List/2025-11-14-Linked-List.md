---
title: "🤔링크드 리스트는 어디에 사용되는 걸까"
date: '2025-11-14 16:11'
authors: teddygood
tags: ["Dev"]
draft: false
slug: '/Linked-List'
description: 링크드 리스트 공부하다가 궁금해서 알아본 것
---
## Introduction
자료구조와 알고리즘을 공부하다 보면 한 번쯤은 링크드 리스트(Linked List)를 배운다. 그런데 지금까지 막상 개발을 하거나 실제 문제를 풀 때 링크드 리스트를 직접 구현해서 사용한 경험은 거의 없다. 나 역시 예전에 기본 개념을 공부한 뒤로는 실질적인 사용 사례가 거의 없었고, 최근 코딩 테스트 준비를 하면서도 링크드 리스트를 사용하는 문제는 거의 만나지 못했다. 있어도 대부분은 파이썬의 `deque`로 해결했고, “파이썬에서는 링크드 리스트가 비효율적이다”라는 정도의 단편적인 지식만 갖고 넘어가고 있었다.

그래서 이번에 다시 링크드 리스트를 공부하면서, "왜 링크드 리스트를 잘 사용하지 않는 걸까?”라는 근본적인 질문이 생겼다. 단순히 “파이썬에서 비효율적이니까”라고 치부하기엔 뭔가 부족했고, 실제로 어떤 이유들이 존재하는지 정리해보고 싶었다. 이번 글은 그 과정에서 조사하고 생각한 내용을 정리한 것이다.

## 파이썬에서 링크드 리스트를 잘 사용하지 않는 것 같은 이유

:::caution
절대 제가 사용하는 케이스를 보지 못해서 '사용하지 않는 이유' -> '사용하지 않는 것 같은 이유'로 고친 게 아닙니다. 
:::

:::info
한글 주석을 제외한 영문 주석은 원래 코드에 있는 주석입니다.
:::
### 동적 배열 (Dynamic Array)
파이썬에서는 사실 링크드 리스트(Linked List)를 잘 사용하지 않는데 그 이유는 파이썬의 내장 `list`가 사실상 가변 길이 배열(variable‑length array)로 구현되어 있어 링크드 리스트가 제공하는 장점의 상당 부분을 이미 제공하기 때문이다. CPython FAQ에서는 리스트가 다른 객체에 대한 포인터를 담는 연속된 배열로 이루어져 있고, 리스트 헤더가 이 배열과 배열 길이를 가리키는 포인터를 포함한다고 설명한다. 이러한 구조 덕분에 인덱스로 요소에 접근하는 `a[i]` 연산은 리스트 크기와 무관하게 항상 O(1)이다.

배열
- 인덱스 접근 $O(1)$
- 연속된 메모리
- 삽입 및 삭제가 중간에서 진행할 경우 $O(n)$
- 끝에 추가는 amortized $O(1)$

링크드 리스트
- 인덱스 접근 $O(n)$
- 메모리 흩어져 있음
- 삽입 및 삭제가 노드를 알고 있다는 가정 하에 $O(1)$
- 삽입할 위치를 찾을 때 $O(n)$

실제로 C의 array와 거의 유사하며, 구조적으로 C++의 `std::vector`와 비슷하다.

아래는 `cpython/Include/cpython/listobject.h` 코드이다. 여기서 봐야할 건 `PyObject **ob_item`이다. 이 배열에 파이썬 객체의 포인터를 저장하는 구조로 되어 있다고 할 수 있다. 즉, `vector<int>`처럼 연속적으로 저장되는 배열이다.

```cpp
typedef struct {
    PyObject_VAR_HEAD
    /* Vector of pointers to list elements.  list[0] is ob_item[0], etc. */
    PyObject **ob_item;

    /* ob_item contains space for 'allocated' elements.  The number
     * currently in use is ob_size.
     * Invariants:
     *     0 <= ob_size <= allocated
     *     len(list) == ob_size
     *     ob_item == NULL implies ob_size == allocated == 0
     * list.sort() temporarily sets allocated to -1 to detect mutations.
     *
     * Items must normally not be NULL, except during construction when
     * the list is not yet visible outside the function that builds it.
     */
    Py_ssize_t allocated;
} PyListObject;

```

여기서 `ob_item` 배열은 C의 `malloc`을 쓴다. `append()` 연산 시 배열이 꽉 차면 크기를 늘리기 위해 재할당이 발생하는데, CPython은 여러 번의 추가 작업을 효율적으로 수행할 수 있도록 여유 공간을 미리 확장해 두는 전략을 사용한다.

- `cpython/Objects/lisobject.c`
```cpp
...
items = PyMem_New(PyObject*, size);
...
```

- `cpython/include/pymem.h`
```cpp
#define PyMem_New(type, n) \
  ( ((size_t)(n) > PY_SSIZE_T_MAX / sizeof(type)) ? NULL :      \
        ( (type *) PyMem_Malloc((n) * sizeof(type)) ) )
```

- `cpython/Objects/obmalloc.c`
```cpp
void *
PyMem_Malloc(size_t size)
{
    /* see PyMem_RawMalloc() */
    if (size > (size_t)PY_SSIZE_T_MAX)
        return NULL;
    OBJECT_STAT_INC_COND(allocations512, size < 512);
    OBJECT_STAT_INC_COND(allocations4k, size >= 512 && size < 4094);
    OBJECT_STAT_INC_COND(allocations_big, size >= 4094);
    OBJECT_STAT_INC(allocations);
    return _PyMem.malloc(_PyMem.ctx, size);
}
```

### 캐시 지역성(Cache Locality)
뜬금없이 캐시 지역성은 동적 배열에 이어 설명하기 좋다고 생각하여 넣게 됐다.

이 문제는 파이썬뿐만 아니라 C++에서도 동일하다. 이론적으로는 링크드 리스트의 삽입 및 삭제가 $O(1)$이지만, 실제 성능은 메모리 접근 패턴에 크게 영향을 받는다.

CPU는 메인 메모리(RAM)에서 데이터를 가져올 때 매우 느린데, 그래서 CPU 내부에 캐시(Cache)라는 작지만 매우 빠른 메모리를 가지고 있다. 현대 CPU는 L1, L2, L3 캐시 같은 메모리 계층 구조를 가지는데, 대략적으로 L1 캐시 접근은 약 1-2ns, 메인 메모리 접근은 약 60-100ns가 걸린다. CPU 아키텍처나 세대에 따라 다르지만, 캐시와 메인 메모리 간에는 수십 배에서 100배 가까운 속도 차이가 난다.

여기서 중요한 건 CPU가 메모리 주소 X를 읽으면 주변 메모리(X+1, X+2, ...)도 함께 캐시로 가져온다는 점이다. 배열처럼 연속된 메모리를 사용하면 다음 데이터가 이미 캐시에 있어서 빠르게 접근할 수 있다. 이걸 캐시 히트(cache hit)라고 한다. 반면 링크드 리스트처럼 메모리가 흩어져 있으면 매번 메인 메모리에서 가져와야 해서 느리다. 이걸 캐시 미스(cache miss)라고 한다.

배열의 경우를 보면 아래와 같다. 포인터들이 연속된 메모리에 저장되어 있어서 CPU가 한 번에 여러 요소를 캐시로 가져올 수 있다(prefetching). 순차 접근 시 캐시 히트율이 매우 높다.
```
메모리 주소: 1000   1008   1016   1024
           [ptr0] [ptr1] [ptr2] [ptr3]  <- 연속된 메모리
```

링크드 리스트는 다르다. 각 노드가 메모리 곳곳에 흩어져 있어서 다음 노드에 접근할 때마다 캐시 미스가 발생할 가능성이 높다. 포인터를 따라가는 과정에서 메모리 접근 지연이 발생한다.
```
메모리 주소: 1000        5432        2048        7890
           Node(1) --> Node(2) --> Node(3) --> Node(4)
```

정리하면 배열은 순차 접근 시 대부분 캐시 히트(~1ns)가 발생하지만, 링크드 리스트는 노드마다 캐시 미스(~100ns)가 발생할 가능성이 높다. 즉, 링크드 리스트는 이론적으로 $O(1)$ 연산이어도 실제 메모리 접근 시간 때문에 배열보다 훨씬 느릴 수 있다. 이것이 파이썬뿐만 아니라 C++에서도 `std::vector`를 `std::list`보다 선호하는 이유다.

### PyObject와 메모리 오버헤드
위에서도 보면 알 수 있듯이 파이썬에서 모든 값은 `PyObject` 구조체로 표현된다. 아래는 `cpython/Include/object.h`의 PyObject 구조체 정의다.
```c
// PyObject 기본 구조체
struct _object {
    _Py_ANONYMOUS union {
#if SIZEOF_VOID_P > 4 // 64 bit 시스템
        PY_INT64_T ob_refcnt_full; /* This field is needed for efficient initialization with Clang on ARM */ // 8 바이트
        struct {
#  if PY_BIG_ENDIAN
            uint16_t ob_flags; // 2 바이트
            uint16_t ob_overflow; // 2 바이트
            uint32_t ob_refcnt; // 4 바이트, Reference count(참조 카운터)
#  else
            uint32_t ob_refcnt;      
            uint16_t ob_overflow;
            uint16_t ob_flags;
#  endif
        }; // union의 크기는 가장 큰 멤버 크기다 -> 8 바이트
#else
        Py_ssize_t ob_refcnt;
#endif
        _Py_ALIGNED_DEF(_PyObject_MIN_ALIGNMENT, char) _aligner;
    };
    PyTypeObject *ob_type;           // 8 바이트 Type pointer(타입 정보 포인터)
};
```

파이썬의 모든 객체는 `PyObject` 구조체를 기반으로 하며, 최소한 다음 정보를 포함한다.
- Reference count (참조 카운터): 8바이트 (union 전체 크기)
- Type pointer (타입 정보): 8바이트 (64bit 시스템)
- 총 16바이트

**C++의 Node vs 파이썬의 Node 비교**
```c
// C++의 Node 구조체
struct Node {
    int val;        // 4바이트
    // 패딩: 4바이트 (64bit 시스템에서 8바이트 정렬을 위해)
    Node* next;     // 8바이트 (64bit 포인터)
    Node(int v) : val(v), next(nullptr) {} // 생성자는 메모리가 아닌 코드 세그먼트에 저장된다.
};

Node node(1);       // 인스턴스 생성
// 총 16바이트
```

```python
# Python은?
class Node:
    def __init__(self, val): # 생성자는 클래스에 저장된다.
        self.val = val
        self.next = None

node = Node(1)
```

이것의 결과를 알기 위해서는 **'파이썬은 객체의 속성(attribute)을 어떻게 저장하는가?'** 를 알아야 한다. 

C++에서는 구조체의 멤버 변수(`val`, `next`)가 구조체 내부에 직접 저장된다. 하지만 파이썬은 다르다. 파이썬 객체의 속성은 `__dict__`라는 **딕셔너리**에 저장된다. 위의 예시를 아래와 같이 사용해보면 알 수 있다(절대 cpython을 다시 까기 귀찮은 게 아니다).

```python
print(node.__dict__)  # {'val': 1, 'next': None}
```

즉, 파이썬 객체는 객체 자체 (PyObject 구조)와 `__dict__` 딕셔너리 (속성을 저장하는 별도 객체)로 나뉘어 있다. 따라서 실제 메모리 사용량을 알려면 둘 다 측정해야 한다:

```python
import sys
print(sys.getsizeof(node))          # 객체 자체 -> 48 바이트
print(sys.getsizeof(node.__dict__)) # 속성 딕셔너리 -> 64 바이트
# 총 112 바이트, (버전에 따라 다를 수 있다.)
```

즉, 메모리적으로도 엄청난 손해다. 그러면 무엇을 쓰냐?

파이썬에서 양쪽 끝에서의 삽입/삭제가 필요하다면 `collections.deque`를 사용하면 된다. deque는 double-ended-queue의 줄임말로 양방향에서 데이터를 처리할 수 있는 queue형 자료구조이다. 내부적으로 블록 단위 링크드 리스트로 구현되어 있는데, 링크드 리스트와 배열의 하이브리드 구조라고 생각하면 된다. 양쪽 끝에서 메모리 효율적으로 O(1) 시간에 `append`와 `pop`을 수행할 수 있다. 리스트도 `pop()`과 `append()`를 지원하지만, 맨 앞에서 요소를 제거하는 `pop(0)`이나 맨 앞에 삽입하는 `insert(0, v)`는 $O(n)$ 시간이 걸린다.

아래는 `cpython/Modules/_collectionsmodule.c`의 deque 구조체 정의다. 블록(block)이 이중 링크드 리스트로 연결되어 있고, 각 블록은 고정 크기 배열을 가진다는 걸 알 수 있다.
```c
#define BLOCKLEN 64  // 각 블록의 크기

// 블록 구조체 - 이중 링크드 리스트의 노드
typedef struct BLOCK {
    struct BLOCK *leftlink;      // 이전 블록 포인터
    PyObject *data[BLOCKLEN];    // 64개 요소를 담는 배열
    struct BLOCK *rightlink;     // 다음 블록 포인터
} block;

struct dequeobject {
    PyObject_VAR_HEAD
    block *leftblock;
    block *rightblock;
    Py_ssize_t leftindex;       /* 0 <= leftindex < BLOCKLEN */
    Py_ssize_t rightindex;      /* 0 <= rightindex < BLOCKLEN */
    size_t state;               /* incremented whenever the indices move */
    Py_ssize_t maxlen;          /* maxlen is -1 for unbounded deques */
    Py_ssize_t numfreeblocks;
    block *freeblocks[MAXFREEBLOCKS];
    PyObject *weakreflist;
};
```

구조를 그림으로 나타내면 다음과 같다.

```
deque 내부 구조:
Block 1     <-->    Block 2     <-->    Block 3
[64개 요소]  <-->   [64개 요소]   <-->   [64개 요소]
```

각 블록은 `leftlink`와 `rightlink`로 이전/다음 블록을 가리키는 포인터를 가진다. 그리고 `data[BLOCKLEN]` 배열에 실제 PyObject 포인터 64개를 연속적으로 저장한다. 이 구조 덕분에 앞/뒤 삽입/삭제가 진짜 $O(1)$이면서도 캐시 효율까지 좋다. 블록 내부는 연속 메모리를 쓰니 캐시 효율성이 유지된다. 다만 list보다는 메모리 오버헤드가 약간 있고, 중간 삽입/삭제는 여전히 $O(n)$이며, 인덱싱은 양 끝에서는 $O(1)$이지만 중간 요소 접근은 $O(n)$이다.

```python
from collections import deque

# deque 생성
dq = deque([1, 2, 3])

# 양쪽 끝에서 O(1) 연산
dq.append(4)        # 오른쪽에 추가: [1, 2, 3, 4]
dq.appendleft(0)    # 왼쪽에 추가: [0, 1, 2, 3, 4]
dq.pop()            # 오른쪽에서 제거: [0, 1, 2, 3]
dq.popleft()        # 왼쪽에서 제거: [1, 2, 3]

# 인덱싱 (양 끝은 O(1), 중간은 O(n)) 
print(dq[0]) # 1 - 왼쪽 끝, O(1) 
print(dq[-1]) # 3 - 오른쪽 끝, O(1) 
print(dq[1]) # 2 - 중간, O(n)
```

따라서 스택/큐처럼 한쪽 끝 또는 양쪽 끝에서만 데이터를 처리하는 경우에는 `deque`가 적합하고, 임의 위치의 요소에 빠르게 접근하거나 중간에서 삽입/삭제해야 하는 경우에는 동적 배열인 `list`가 적합하다.

## 그럼에도 파이썬에서 링크드 리스트를 쓰는 경우
하지만 이렇게 그냥 넘어가면 재미가 없으니까 링크드 리스트를 쓰는 경우도 알아보자. 파이썬에서의 경우만 찾아보려다가 이것저것 더 추가했다.

위에서 캐시 지역성 문제와 메모리 오버헤드 때문에 링크드 리스트가 비효율적이라고 했지만, 여전히 링크드 리스트가 유용한 특수한 경우들이 있기는 하다.

### Python functools.lru_cache의 이중 링크드 리스트
파이썬 표준 라이브러리의 `functools.lru_cache`는 LRU(Least Recently Used) 캐시를 구현할 때 이중 링크드 리스트를 사용한다. LRU Cache는 가장 오래 사용되지 않은 항목을 제거하는 캐싱 알고리즘인데, 딕셔너리만으로는 "어떤 데이터가 최근에 사용됐는지" 순서를 추적할 수 없다. 배열로 순서를 관리하면 중간 삽입/삭제가 $O(n)$이 걸려서 효율적이지 않다.

`cpython/Lib/functools.py`를 보면 원형 이중 링크드 리스트(circular doubly linked list)를 사용한다. 각 링크는 `[previous_link, next_link, key, cached_result]` 형태의 리스트다. 코드에서는 이렇게 정의돼 있다.

```python
def _lru_cache_wrapper(user_function, maxsize, typed, _CacheInfo):
    # Constants shared by all lru cache instances:
    sentinel = object()          # unique object used to signal cache misses
    make_key = _make_key         # build a key from the function arguments
    PREV, NEXT, KEY, RESULT = 0, 1, 2, 3   # names for the link fields

    cache = {}
    hits = misses = 0
    full = False
    cache_get = cache.get    # bound method to lookup a key or return None
    cache_len = cache.__len__  # get cache size without calling len()
    lock = RLock()           # because linkedlist updates aren't threadsafe
    root = []                # root of the circular doubly linked list -> Sentinel 노드
    root[:] = [root, root, None, None]     # initialize by pointing to self
```

sentinel 노드(root)가 자기 자신을 가리키게 초기화하면 리스트가 비었을 때의 예외 처리를 단순화할 수 있다. 캐시는 딕셔너리와 링크드 리스트를 함께 사용한다. 딕셔너리는 `{key: link}` 형태로 $O(1)$ 조회를 제공하고, 링크드 리스트는 사용 순서를 관리한다. 새 항목을 캐시에 추가할 때는 root 바로 다음에 링크를 삽입하고, 기존 항목에 접근하면 해당 링크를 찾아서 제거한 뒤 다시 root 다음으로 이동시킨다. 이게 $O(1)$인 이유는 딕셔너리로 링크의 위치를 이미 알고 있어서 포인터 4개(링크의 prev/next, 이웃 노드들의 prev/next)만 업데이트하면 되기 때문이다. 캐시가 꽉 차면 root의 prev(가장 오래된 항목)를 $O(1)$에 제거한다. 이 구조 덕분에 파이썬의 lru_cache 데코레이터는 함수 호출 결과를 효율적으로 캐싱할 수 있다.

### Python weakref의 링크드 리스트
파이썬의 `weakref` 모듈은 약한 참조(weak reference)를 관리할 때 링크드 리스트를 사용한다. 약한 참조는 객체를 가리키지만 참조 카운트를 증가시키지 않는 참조 방식이다. 객체가 삭제될 때 모든 약한 참조를 무효화해야 하는데, 이때 링크드 리스트가 유용하다.

CPython(main 브랜치 기준)의 `Include/cpython/weakrefobject.h`에 약한 참조 객체가 정의되어 있다(`Include/weakrefobject.h`에서 이 파일을 include한다).

```c
struct _PyWeakReference {
    PyObject_HEAD
    PyObject *wr_object;   /* 참조하는 객체(stealth ref, refcnt 올리지 않음) */
    PyObject *wr_callback; /* 객체가 삭제될 때 호출할 콜백 또는 NULL */
    Py_hash_t hash;        /* 캐시된 해시, 미계산 시 -1 */
    /* wr_object를 가리키는 약한 참조들을 잇는 이중 연결 리스트 */
    PyWeakReference *wr_prev;
    PyWeakReference *wr_next;
    vectorcallfunc vectorcall;
#ifdef Py_GIL_DISABLED
    PyMutex *weakrefs_lock;
#endif
};
```

약한 참조 대상 객체는 `weakreflist` 포인터를 통해 자신을 가리키는 약한 참조들을 이중 연결 리스트로 유지한다. 객체가 삭제될 때 이 리스트를 순회하면서 모든 약한 참조를 무효화하고 콜백을 호출한다. 배열로 관리하면 중간 제거 시마다 재할당이 필요하지만, 링크드 리스트는 포인터만 재연결하면 되므로 $O(1)$에 처리할 수 있다.

### Python asyncio의 이벤트 루프

`asyncio`의 이벤트 루프는 예약된 콜백들을 관리할 때 내부적으로 힙(heap)과 링크드 리스트 구조를 함께 사용한다. `cpython/Lib/asyncio/events.py`의 `Handle` 클래스를 보면 아래와 같다.

```python
class Handle:
    """Object returned by callback registration methods."""

    __slots__ = ('_callback', '_args', '_cancelled', '_loop',
                 '_source_traceback', '_repr', '__weakref__',
                 '_context')

    def __init__(self, callback, args, loop, context=None):
        if context is None:
            context = contextvars.copy_context()
        self._context = context
        self._loop = loop
        self._callback = callback
        self._args = args
        self._cancelled = False
        self._repr = None
        if self._loop.get_debug():
            self._source_traceback = format_helpers.extract_stack(
                sys._getframe(1))
        else:
            self._source_traceback = None
        # ...
```

이벤트 루프의 `_ready` 큐는 `collections.deque`를 사용하는데, 이는 내부적으로 블록 단위 링크드 리스트다.
```python
# cpython/Lib/asyncio/base_events.py
class BaseEventLoop(events.AbstractEventLoop):
    def __init__(self):
        self._ready = collections.deque()  # 실행 준비된 콜백들
        self._scheduled = []  # 시간순으로 정렬된 힙
        # ...

    def call_soon(self, callback, *args, context=None):
        handle = self._call_soon(callback, args, context)
        return handle

    def _call_soon(self, callback, args, context):
        handle = events.Handle(callback, args, self, context)
        self._ready.append(handle)  # deque에 O(1)로 추가
        return handle
```

`_ready` 큐는 즉시 실행할 콜백들을 저장하는데, 앞에서 꺼내고(`popleft()`) 뒤에 추가하는(`append()`) 작업이 빈번하게 일어난다. 일반 리스트로는 `pop(0)`이 $O(n)$이지만, `deque`는 양쪽 끝에서 $O(1)$로 동작한다. 이벤트 루프가 한 번 돌 때마다 `_ready`에서 모든 핸들을 꺼내서 실행하고, 새로운 콜백이 등록되면 다시 추가하는 패턴이 반복되기 때문에 링크드 리스트 기반의 deque가 적합하다.

## 이밖에 링크드 리스트를 쓰는 경우
### Python OrderedDict의 이중 링크드 리스트
파이썬 3.7 이전에는 일반 딕셔너리가 삽입 순서를 보장하지 않았기 때문에 `OrderedDict`가 필요했다(3.7 이후에는 일반 dict도 순서를 보장하지만, OrderedDict는 여전히 순서 관련 메서드를 제공한다). CPython의 C 구현(`cpython/Objects/odictobject.c`)을 보면 이중 링크드 리스트로 순서를 유지한다는 걸 알 수 있다.

핵심 구조체는 두 가지다.
```c
/* PyODictObject */
struct _odictobject {
    PyDictObject od_dict;        /* the underlying dict */
    _ODictNode *od_first;        /* first node in the linked list, if any */
    _ODictNode *od_last;         /* last node in the linked list, if any */
    /* od_fast_nodes, od_fast_nodes_size and od_resize_sentinel are managed
     * by _odict_resize().
     * Note that we rely on implementation details of dict for both. */
    _ODictNode **od_fast_nodes;  /* hash table that mirrors the dict table */
    Py_ssize_t od_fast_nodes_size;
    void *od_resize_sentinel;    /* changes if odict should be resized */

    size_t od_state;             /* incremented whenever the LL changes */
    PyObject *od_inst_dict;      /* OrderedDict().__dict__ */
    PyObject *od_weakreflist;    /* holds weakrefs to the odict */
};

...

struct _odictnode {
    PyObject *key;
    Py_hash_t hash;
    _ODictNode *next;
    _ODictNode *prev;
};
```

여기서 중요한 건 `od_fast_nodes`다. 단순히 링크드 리스트만 쓰면 특정 키의 노드를 찾는 게 $O(n)$이 걸린다. 그래서 OrderedDict는 "dict의 키 순서를 노드 포인터 배열로 미러링"해서 $O(1)$ 조회를 유지한다. 노드를 추가할 때는 `_odict_add_tail()` 함수가 리스트 끝에 연결한다:

```c
static void
_odict_add_tail(PyODictObject *od, _ODictNode *node)
{
    _odictnode_PREV(node) = _odict_LAST(od);
    _odictnode_NEXT(node) = NULL;
    if (_odict_LAST(od) == NULL)
        _odict_FIRST(od) = node;
    else
        _odictnode_NEXT(_odict_LAST(od)) = node;
    _odict_LAST(od) = node;
    od->od_state++;
}
```

삭제할 때는 `_odict_remove_node()`가 앞뒤 포인터를 재연결한다. 이렇게 딕셔너리의 $O(1)$ 조회 성능을 유지하면서도 삽입 순서를 추적할 수 있다.

### Redis의 Skiplist와 이중 링크드 리스트
Redis는 Sorted Set(정렬된 집합)을 구현할 때 skiplist를 사용하는데, 이 **skiplist는 레벨 1에서만 backward 포인터를 가진 이중 링크드 리스트다.** `redis/src/t_zset.c`를 보면 Redis는 William Pugh의 원래 skiplist 알고리즘을 세 가지 변경해서 사용한다고 나와 있다. 첫째, 중복된 점수(score)를 허용한다. 둘째, 점수뿐만 아니라 satellite data까지 비교한다. 셋째, "there is a back pointer, so it's a doubly linked list with the back pointers being only at level 1"이라고 명시돼 있다.

```cpp
/* ZSETs are ordered sets using two data structures to hold the same elements
 * in order to get O(log(N)) INSERT and REMOVE operations into a sorted
 * data structure.
 *
 * The elements are added to a hash table mapping Redis objects to scores.
 * At the same time the elements are added to a skip list mapping scores
 * to Redis objects (so objects are sorted by scores in this "view").
 *
 * Note that the SDS string representing the element is the same in both
 * the hash table and skiplist in order to save memory. What we do in order
 * to manage the shared SDS string more easily is to free the SDS string
 * only in zslFreeNode(). The dictionary has no value free method set.
 * So we should always remove an element from the dictionary, and later from
 * the skiplist.
 *
 * This skiplist implementation is almost a C translation of the original
 * algorithm described by William Pugh in "Skip Lists: A Probabilistic
 * Alternative to Balanced Trees", modified in three ways:
 * a) this implementation allows for repeated scores.
 * b) the comparison is not just by key (our 'score') but by satellite data.
 * c) there is a back pointer, so it's a doubly linked list with the back
 * pointers being only at "level 1". This allows to traverse the list
 * from tail to head, useful for ZREVRANGE. */
```

이 backward 포인터는 왜 필요할까? Redis는 `ZREVRANGE` 같이 정렬된 집합에서 점수 순서를 높은 점수부터 낮은 점수로 즉, 역순으로 특정 범위의 요소들을 가져오는 커맨드를 지원한다. skiplist의 여러 레벨 중 가장 하위 레벨(level 1)에만 backward 포인터를 두면, 정방향으로는 skiplist의 $O(log N)$ 탐색 효율을 유지하면서도 역방향으로는 링크드 리스트처럼 순차적으로 탐색할 수 있다. 코드를 보자.

```c
...
x->backward = (update[0] == zsl->header) ? NULL : update[0];
if (x->level[0].forward)
    x->level[0].forward->backward = x;
...
```

각 노드가 자신의 이전 노드를 가리키는 backward 포인터를 유지한다. Redis는 이 skiplist를 해시 테이블과 함께 사용한다. 해시 테이블은 멤버로 $O(1)$ 조회를 제공하고, skiplist는 점수 기준 $O(log N)$ 범위 쿼리를 제공한다. 작은 데이터셋에는 listpack을 쓰다가 크기가 커지면 skiplist+dict로 전환한다. listpack은 모든 요소를 하나의 메모리 블록에 연속적으로 저장하는 압축된 데이터 구조이다. 이런 설계 덕분에 Redis는 정렬된 집합 연산을 효율적으로 처리할 수 있다.

### glibc malloc의 Free List
malloc/free가 빈 메모리 블록을 관리할 때 free list라는 링크드 리스트를 사용한다. 중요한 건 별도 메모리를 쓰지 않는다는 점이다. 빈 블록 자체의 첫 몇 바이트에 next 포인터를 저장한다. 1000바이트 빈 블록이 있으면 첫 8바이트를 다음 빈 블록 주소로 쓰고, 나머지 992바이트는 그대로 둔다. 블록 크기가 제각각이고 주소가 연속적이지 않아서 배열로는 불가능한 구조다.

[glibc/malloc/malloc.c](https://github.com/bminor/glibc/blob/master/malloc/malloc.c)의 실제 구현을 보면:

```c
// 빈 메모리 블록을 링크드 리스트로 관리
struct malloc_chunk {
  INTERNAL_SIZE_T mchunk_prev_size;  /* 이전 청크 크기 */
  INTERNAL_SIZE_T mchunk_size;       /* 현재 청크 크기 */
  struct malloc_chunk* fd;           /* forward link - 다음 빈 블록 */
  struct malloc_chunk* bk;           /* backward link - 이전 빈 블록 */
  struct malloc_chunk* fd_nextsize;  /* 큰 청크용 다음 크기 */
  struct malloc_chunk* bk_nextsize;  /* 큰 청크용 이전 크기 */
};

// Free chunk를 리스트에서 제거 - O(1) 연산
static void
unlink_chunk (mstate av, mchunkptr p)
{
  mchunkptr fd = p->fd;  // 포인터 재연결만으로
  mchunkptr bk = p->bk;  // O(1)에 제거 완료
  fd->bk = bk;
  bk->fd = fd;
}
```

해제된 메모리 블록 자체의 메모리 공간에 `fd`/`bk` 포인터를 저장하여 별도 메모리 할당 없이 free list를 구성한다.

### libstdc++ unordered_map의 체이닝
같은 해시 값을 가진 요소들을 링크드 리스트로 연결하면 충돌 시 `O(1)`에 추가할 수 있다. 배열이었다면 버킷마다 동적 배열을 관리해야 하고 재할당 오버헤드가 발생한다.

C++ 표준 라이브러리의 `std::unordered_map` 구현은 실제로 체이닝을 사용한다. [gcc/libstdc++-v3/include/bits/hashtable_policy.h](https://github.com/gcc-mirror/gcc/blob/master/libstdc++-v3/include/bits/hashtable_policy.h)를 보면:

```cpp
// 단일 링크드 리스트로 충돌 해결
struct _Hash_node_base {
  _Hash_node_base* _M_nxt;  // 다음 노드 포인터

  _Hash_node_base() noexcept : _M_nxt() { }
  _Hash_node_base(_Hash_node_base* __next) noexcept : _M_nxt(__next) { }
};

// 실제 값을 저장하는 노드
template<typename _Value, bool _Cache_hash_code>
struct _Hash_node : _Hash_node_base,
                    _Hash_node_value<_Value, _Cache_hash_code> {
  _Hash_node* _M_next() const noexcept {
    return static_cast<_Hash_node*>(this->_M_nxt);
  }
};
```

[blog.ilvokhin.com](https://blog.ilvokhin.com/libstdc++-std-unordered-map/)의 분석에 따르면:

> "The `_Hashtable` class itself is a combination of `std::forward_list<_Hash_node>` containing the elements and `std::vector<std::forward_list<_Hash_node>::iterator>` representing the buckets."

각 버킷은 해시 충돌이 발생한 요소들을 단일 링크드 리스트로 체이닝하여 `O(1)` 삽입을 보장한다.

### Linux Kernel의 Intrusive Doubly Linked List
Linux 커널은 `include/linux/list.h`에 이중 링크드 리스트 구조를 제공한다. 특이한 점은 "intrusive list" 설계를 쓴다는 거다.

**Intrusive list란?** 일반적인 링크드 리스트는 노드가 데이터를 포함하지만(`struct Node { int data; Node* next; }`), intrusive list는 반대로 데이터 구조체 안에 리스트 포인터를 포함시키는 방식이다.

Linux 커널은 프로세스 스케줄링, 메모리 관리, 디바이스 드라이버 등 커널 전체에서 이 intrusive doubly linked list를 사용한다. [linux/include/linux/list.h](https://github.com/torvalds/linux/blob/master/include/linux/list.h)의 구현을 보면:

```c
struct list_head {
    struct list_head *next, *prev;
};

// 초기화 - 자기 자신을 가리킴
#define LIST_HEAD_INIT(name) { &(name), &(name) }

static inline void INIT_LIST_HEAD(struct list_head *list) {
    WRITE_ONCE(list->next, list);
    WRITE_ONCE(list->prev, list);
}

// O(1) 삽입
static inline void __list_add(struct list_head *new,
                struct list_head *prev,
                struct list_head *next) {
    next->prev = new;
    new->next = next;
    new->prev = prev;
    WRITE_ONCE(prev->next, new);
}
```

어떤 구조체든 `struct list_head` 필드만 추가하면 링크드 리스트에 넣을 수 있다. 커널은 `container_of` 매크로로 `list_head`의 주소에서 실제 데이터 구조체의 주소를 역산한다. 이 방식의 장점은 같은 리스트 조작 코드(`list_add`, `list_del`, `list_for_each` 등)를 모든 데이터 타입에 재사용할 수 있다는 점이다. 실제로 커널의 태스크 구조체(`task_struct`)는 여러 개의 `list_head` 필드를 가져서 동시에 여러 리스트에 속할 수 있다(예: run queue, wait queue 등). 배열로는 이런 유연성을 구현하기 어렵다.

### Chromium base::LinkedList의 Intrusive List
`std::vector`는 용량이 부족하면 더 큰 메모리를 할당하고 모든 요소를 복사하는데, 이때 기존 iterator, 포인터, 참조가 모두 무효화된다. 예를 들어 `capacity`가 3인 vector에 4번째 요소를 추가하면 재할당이 일어나서 기존 iterator를 사용하면 undefined behavior가 발생한다. 반면 `std::list`는 각 노드가 독립적으로 힙에 할당되기 때문에 새 노드를 추가해도 기존 노드들의 주소는 변하지 않는다. 삭제된 노드의 iterator만 무효화되고 나머지는 유효하다. 여러 iterator를 동시에 유지하면서 컨테이너를 수정해야 하는 복잡한 자료구조에서는 이게 중요하다.

Chromium 프로젝트는 `std::list` 대신 자체 구현한 `base::LinkedList`를 사용한다. [chromium/base/containers/linked_list.h](https://github.com/chromium/chromium/blob/main/base/containers/linked_list.h)의 주석에는 다음과 같이 설명되어 있다:

> "Erasing an element of type `T*` from `base::LinkedList&lt;T&gt;` is an O(1) operation. Whereas for `std::list&lt;T*&gt;` it is O(n). That is because with std::list&lt;T*&gt; you must obtain an iterator to the T* element before you can call erase(iterator)."

```cpp
// Chromium의 Intrusive 링크드 리스트 구현
template <typename T>
class LinkedList {
 public:
  // The "root" node is self-referential, and forms the basis of a circular
  // list (root_.next() will point back to the start of the list,
  // and root_->previous() wraps around to the end of the list).
  LinkedList() { root_.set(&root_, &root_); }
  LinkedList(const LinkedList&) = delete;
  LinkedList& operator=(const LinkedList&) = delete;
  
  // Use move constructor with care. Returning a LinkedList from a function may
  // be unsafe if the nodes are allocated on the stack. This operation is O(1)
  // as only head and tail nodes are modified. `other` is left empty.
  LinkedList(LinkedList&& other) : root_(std::move(other.root_)) {
    other.root_.MakeSelfReferencing();
  }

  // Appends |e| to the end of the linked list.
  void Append(LinkNode<T>* e) { e->InsertBefore(&root_); }

  LinkNode<T>* head() const { return root_.next(); }

  LinkNode<T>* tail() const { return root_.previous(); }

  const LinkNode<T>* end() const { return &root_; }

  bool empty() const { return head() == end(); }

 private:
  LinkNode<T> root_;
};
```

`std::list`는 값으로 삭제 시 먼저 요소를 찾아야 하지만(`O(n)`), Chromium의 구현은 객체가 자신의 노드를 직접 포함하므로 즉시 제거 가능하다.

## 정리

처음에는 파이썬에서 코딩 테스트 때 링크드 리스트를 잘 쓰지 않는 이유로 시작했다가 여기까지 왔다. 좀 야크 털을 많이 깎은 걸지도. '코딩 테스트 때 링크드 리스트를 잘 쓰지 않는 이유'에 집중했어야 했는데, 어쩌다 보니 이상하게 됐다. 글을 적다 보니 은근 링크드 리스트를 사용한 곳이 많아서 놀랬다. 

내가 말하고 싶었던 결론은 어쨌든 진짜 링크드 리스트를 구현하라고 문제가 나오지 않는 이상 코딩 테스트에서 링크드 리스트를 직접 구현해서 쓸 일은 거의 없지 않을까 싶다는 것이다.

아래 시간 복잡도와 C++과 Python으로 구현한 예시를 끝으로 이 글을 마친다.

| 연산     | list           | deque | 직접 구현한 링크드 리스트 |
| ------ | -------------- | ----- | -------------- |
| 끝에 추가  | O(1) amortized | O(1)  | O(n) - 끝 찾기    |
| 앞에 추가  | O(n)           | O(1)  | O(1)           |
| 끝에서 제거 | O(1)           | O(1)  | O(n) - 끝 찾기    |
| 앞에서 제거 | O(n)           | O(1)  | O(1)           |
| 인덱스 접근 | O(1)           | O(1)  | O(n)           |
| 메모리 효율 | 높음             | 중간    | 낮음             |
| 캐시 효율  | 높음             | 중간    | 낮음             |

## 구현 예제

### Python
```python
Class Node:
    def __init__(self, val):
        self.val = val
        self.next = None # 각 노드는 자신의 값과 다음 노드를 가리키는 포인터(next)를 가진다.
        
Class LinkedList:
    def __init(self):
        self.head = None # 리스트 첫 번째 노드를 가리키는 포인터
        
    def insert_front(self, val):
        node = Node(val)
        node.next = self.head
        self.head = node
        
    def insert_back(self, val):
        # 빈 리스트면 head를 새 노드로 설정
        if not self.head:
            self.head = Node(val)
            return
            
        # cur을 head에서 시작해 끝까지 이동 -> cur.next가 None이 될 때까지
        cur = self.head
        while cur.next:
            cur = cur.next
        cur.next = Node(val)
        
    def delete(self, val):
        # 빈 리스트인 경우 종료
        if not self.head:
            return
        # head가 삭제할 값인 경우 -> head를 다음 노드로 바꾸기
        if self.head.val == val:
            self.head = self.head.next
            return
        # 지금 보고 있는 노드(cur)의 next가 삭제 대상인지 확인 후 삭제하면 한 칸 건너뛰기
        cur = self.head
        while cur.next:
            if cur.next.val == val:
                cur.next = cur.next.next
                return
            cur = cur.next
```

### C++
```cpp
#include <iostream>

using namespace std;

struct Node {
    int val;
    Node* next;
    Node(int v) : val(v), next(nullptr) {}
};

class LinkedList {
public:
    Node* head;
    
    LinkedList() : head(nullptr) {}
    
    // 맨 앞에 삽입
    void insert_front(int val) {
        Node* node = new Node(val);
        node->next = head;
        head = node;
    }
    
    // 맨 뒤에 삽입
    void insert_back(int val) {
        if (head == nullptr) {
            head = new Node(val);
            return;
        }
        Node* cur = head;
        while (cur->next != nullptr) {
            cur = cur->next;
        }
        cur->next = new Node(val);
    }
    
    // 특정 값 삭제
    void delete_value(int val) {
        if (head == nullptr)
            return;
            
        // head 삭제해야 하는 경우
        if (head->val == val) {
            Node* temp = head;
            head = head->next;
            delete temp;
            return;
        }
        
        // 나머지 노드 탐색
        Node* cur = head;
        while (cur->next != nullptr) {
            if (cur->next->val == val) {
                Node* temp = cur->next;
                cur->next = cur->next->next;
                delete temp;
                return;
            }
            cur = cur->next;
        }
    }
    
    // 리스트 출력
    void print() {
        Node* cur = head;
        while (cur != nullptr) {
            cout << cur->val << " -> ";
            cur = cur->next;
        }
        cout << "NULL\n";
    }
};

int main() {
    LinkedList list;

    list.insert_front(3);
    list.insert_front(2);
    list.insert_front(1);

    list.insert_back(4);
    list.insert_back(5);

    list.print(); // 1 -> 2 -> 3 -> 4 -> 5 -> NULL

    list.delete_value(3);
    list.print(); // 1 -> 2 -> 4 -> 5 -> NULL

    list.delete_value(1);
    list.print(); // 2 -> 4 -> 5 -> NULL

    return 0;
```

## References
- [cpython](https://github.com/python/cpython)
- [cpython Design and History FAQ](https://docs.python.org/3/faq/design.html#how-are-lists-implemented-in-cpython#)
- [Latency Numbers Every Programmer Should Know](https://gist.github.com/jboner/2841832)
- [Approximate cost to access various caches and main memory - Stack Overflow](https://stackoverflow.com/questions/4087280/approximate-cost-to-access-various-caches-and-main-memory)
- [redis](https://github.com/redis/redis/)
- [linux](https://github.com/torvalds/linux)
