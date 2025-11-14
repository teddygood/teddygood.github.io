---
title: "Linked List"
date: '2025-11-14 16:11'
---
## 파이썬에서 링크드 리스트를 잘 사용하지 않는 것 같은 이유

:::caution
절대 제가 사용하는 케이스를 보지 못해서 '사용하지 않는 이유' -> '사용하지 않는 것 같은 이유'로 고친 게 아닙니다. 
:::
### 동적 배열 (Dynamic Array)

파이썬에서는 사실 Linked List를 잘 사용하지 않는데 그 이유는 파이썬 list가 사실 Dynamic Array이기 때문이다. 즉, 파이썬 list가 Linked List의 장점을 이미 대부분 커버한다. 

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

아래는 `cpython/Include/cpython/listobject.h` 코드이다. 여기서 봐야할 건 `PyObject **ob_item`이다. 이 배열에 파이썬 객체의 포인터를 저장하는 구조로 되어 있다고 할 수 있다. 즉, `vector<int>`처럼 연속저긍로 저장되는 배열이다.

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

여기서 `ob_item` 배열은 C의 `malloc`을 쓴다. 그러니 메모리에 연속적으로 할당이 된다.

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

그러니 비슷하게 적어보면 아래와 같은 형태인 것이다.

```c
int arr[] = {1, 2, 3}
```

```
list = [1, 2, 3]
```

```
ob_item  ───────┐
                ▼
     ┌─────────────────────────────┐
     │  ptr0 │  ptr1 │  ptr2 │ ... │   ← 연속된 메모리 (C 배열)
     └─────────────────────────────┘
        │        │        │
        ▼        ▼        ▼
      PyObj    PyObj    PyObj
       (1)      (2)      (3)
```

### PyObject와 메모리 오버헤드

위에서도 보면 알 수 있듯이 파이썬에서 모든 값은 PyObject로 표현된다.

아래는 `cpython/Include/object.h`의 PyObject 구조체 정의다.

```c
// PyObject 기본 구조체
struct _object {
    _Py_ANONYMOUS union {
#if SIZEOF_VOID_P > 4
        PY_INT64_T ob_refcnt_full; /* This field is needed for efficient initialization with Clang on ARM */
        struct {
#  if PY_BIG_ENDIAN
            uint16_t ob_flags;
            uint16_t ob_overflow;
            uint32_t ob_refcnt;
#  else
            uint32_t ob_refcnt;      // Reference count(참조 카운터)
            uint16_t ob_overflow;
            uint16_t ob_flags;
#  endif
        };
#else
        Py_ssize_t ob_refcnt;
#endif
        _Py_ALIGNED_DEF(_PyObject_MIN_ALIGNMENT, char) _aligner;
    };
    PyTypeObject *ob_type;           // Type pointer(타입 정보 포인터)
};
```

파이썬의 모든 객체는 PyObject 구조체를 기반으로 하며, 최소한 다음 정보를 포함한다.
- Reference count (참조 카운터): 4-8바이트
- Type pointer (타입 정보): 8바이트 (64bit 시스템)
- 실제 값

예를 들어 정수 하나를 저장하더라도 최소 28바이트가 필요하다(현재 CPython 기준).

```
파이썬 list [1, 2, 3]:
┌─────────────────┐
│   ob_item 배열   │  → 포인터 3개 (24바이트)
└─────────────────┘
      ↓  ↓  ↓
   PyObject들은 작은 정수의 경우 미리 생성된 싱글톤 재사용

링크드 리스트 [1→2→3]:
Node(1)                  Node(2)                  Node(3)
├─ PyObject 오버헤드     ├─ PyObject 오버헤드     ├─ PyObject 오버헤드
├─ val → PyObject(1)     ├─ val → PyObject(2)     ├─ val → PyObject(3)
└─ next → Node(2)        └─ next → Node(3)        └─ next → None
```

링크드 리스트를 직접 구현하면:
- 각 Node 객체마다 PyObject 오버헤드 발생
- next 포인터를 위한 추가 공간
- 메모리 할당/해제 오버헤드 (각 노드마다 개별 할당)

파이썬 list는 포인터 배열만 관리하고, 실제 객체들은 이미 생성된 것을 재사용하거나 공유하므로 메모리 효율이 훨씬 좋다.

### 캐시 지역성 (Cache Locality)

이론적으로는 링크드 리스트의 삽입/삭제가 O(1)이지만, **실제 성능은 메모리 접근 패턴에 크게 영향을 받는다**.

**배열 (Python list):**
```
메모리 주소: 1000   1008   1016   1024
           [ptr0] [ptr1] [ptr2] [ptr3]  ← 연속된 메모리
```
- 연속된 메모리 블록
- CPU가 한 번에 여러 요소를 캐시로 가져옴 (prefetching)
- 순차 접근 시 캐시 히트율 매우 높음

**링크드 리스트:**
```
메모리 주소: 1000        5432        2048        7890
           Node(1) --> Node(2) --> Node(3) --> Node(4)
           (흩어져 있음)
```
- 각 노드가 메모리 곳곳에 분산
- 다음 노드 접근할 때마다 캐시 미스 가능성 높음
- 포인터를 따라가는 과정에서 메모리 접근 지연 발생

**실제 성능 차이:**
```python
# 배열 순회: 캐시 친화적
for item in python_list:  # 매우 빠름
    process(item)

# 링크드 리스트 순회: 캐시 미스 빈번
current = head
while current:            # 상대적으로 느림
    process(current.val)
    current = current.next
```

현대 CPU는 메모리 계층 구조(L1/L2/L3 캐시)를 가지는데:
- L1 캐시 접근: ~1ns
- 메인 메모리 접근: ~100ns

링크드 리스트는 이론적 O(1) 연산도 캐시 미스로 인해 100배 느려질 수 있다. 반면 배열은 연속 메모리 덕분에 캐시를 효율적으로 활용한다.

이것이 파이썬뿐만 아니라 C++에서도 `std::vector`를 `std::list`보다 선호하는 이유다.

### 그러면 무엇을 쓰냐?

파이썬에서 양쪽 끝에서의 삽입/삭제가 필요하다면 `collections.deque`를 사용하면 된다.

**collections.deque (Double-Ended Queue):**

deque는 내부적으로 **블록 단위 링크드 리스트**로 구현되어 있다. 즉, 링크드 리스트와 배열의 하이브리드 구조다.

```
deque 내부 구조:
Block 1     ←→    Block 2     ←→    Block 3
[64개 요소]  ←→   [64개 요소]  ←→   [64개 요소]
```

각 블록은:
- 고정 크기 배열 (기본 64개 요소)
- 이전/다음 블록을 가리키는 포인터

**장점:**
- 앞/뒤 삽입/삭제: O(1) (진짜 O(1), 캐시 효율도 좋음)
- 블록 내부는 연속 메모리 → 캐시 효율성 유지
- 중간 요소 접근도 O(1) (인덱싱 지원)

**단점:**
- list보다는 메모리 오버헤드가 약간 있음
- 중간 삽입/삭제는 여전히 O(n)

**예제:**
```python
from collections import deque

# deque 생성
dq = deque([1, 2, 3])

# 양쪽 끝에서 O(1) 연산
dq.append(4)        # 오른쪽에 추가: [1, 2, 3, 4]
dq.appendleft(0)    # 왼쪽에 추가: [0, 1, 2, 3, 4]
dq.pop()            # 오른쪽에서 제거: [0, 1, 2, 3]
dq.popleft()        # 왼쪽에서 제거: [1, 2, 3]

# 인덱싱도 가능 (O(1))
print(dq[0])        # 1
```

### 실제 사용 사례 비교

**언제 list를 쓸까?**
- 대부분의 경우 (파이썬의 기본)
- 끝에 추가/제거만 하는 경우 (append, pop)
- 인덱스 접근이 빈번한 경우
- 정렬이나 슬라이싱이 필요한 경우
- 간단하고 범용적인 용도

```python
# 스택 구현
stack = []
stack.append(1)  # push
stack.pop()      # pop

# 일반적인 데이터 저장
data = [1, 2, 3, 4, 5]
print(data[2])   # 빠른 인덱스 접근
```

**언제 deque를 쓸까?**
- 양쪽 끝에서 삽입/삭제가 빈번한 경우
- 큐(Queue) 구현
- 슬라이딩 윈도우 알고리즘
- BFS (Breadth-First Search)
- 최근 N개 이벤트 추적

```python
from collections import deque

# 큐 구현
queue = deque()
queue.append(1)      # enqueue
queue.popleft()      # dequeue - O(1)!

# BFS
queue = deque([start_node])
while queue:
    node = queue.popleft()  # O(1)
    for neighbor in node.neighbors:
        queue.append(neighbor)

# 슬라이딩 윈도우 (최근 N개만 유지)
window = deque(maxlen=5)  # 최대 5개만 유지
for item in data_stream:
    window.append(item)  # 자동으로 가장 오래된 것 제거
```

**언제 링크드 리스트를 직접 구현할까?**
- 거의 없음 (코딩 테스트/교육 목적 제외)
- 특수한 요구사항이 있는 경우:
  - LRU Cache 구현 (dict + doubly linked list 조합)
  - 노드 포인터를 직접 관리해야 하는 경우
  - 커스텀 메모리 관리가 필요한 경우

```python
# LRU Cache: OrderedDict가 내부적으로 dict + doubly linked list
from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.cache = OrderedDict()
        self.capacity = capacity

    def get(self, key):
        if key in self.cache:
            self.cache.move_to_end(key)  # 최근 사용으로 이동
            return self.cache[key]
        return -1

    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)  # 가장 오래된 것 제거
```

**성능 비교 요약:**

| 연산 | list | deque | 직접 구현 링크드 리스트 |
|------|------|-------|------------------------|
| 끝에 추가 | O(1) amortized | O(1) | O(n) - 끝 찾기 |
| 앞에 추가 | O(n) | O(1) | O(1) |
| 끝에서 제거 | O(1) | O(1) | O(n) - 끝 찾기 |
| 앞에서 제거 | O(n) | O(1) | O(1) |
| 인덱스 접근 | O(1) | O(1) | O(n) |
| 메모리 효율 | 높음 | 중간 | 낮음 |
| 캐시 효율 | 높음 | 중간 | 낮음 |

**결론:** 파이썬에서는 list와 deque만으로 거의 모든 상황을 커버할 수 있으며, 링크드 리스트를 직접 구현할 필요는 거의 없다.

## 구현 예제

그러나 거의 사용하지는 않는 것 같지만 구현은 할 수 있다.
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