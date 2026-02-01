---
authors: teddygood
date: 2025-11-14 16:11
description: Things I looked up while studying linked lists out of curiosity
draft: false
slug: /Linked-List
tags:
- Dev
title: Why Linked Lists Are Rarely Used in Python
---

<!-- truncate -->


## Introduction
When studying data structures and algorithms, one inevitably learns about linked lists. However, in my development experience or when solving practical problems, I rarely had to implement or use linked lists directly. After learning the basic concepts long ago, I had almost no practical use cases for them. Even while preparing for coding tests recently, I rarely encountered problems that required linked lists. When I did, I mostly solved them using Python's `deque`, and my understanding was limited to the superficial knowledge that "linked lists are inefficient in Python."

This led me to revisit linked lists and ask a fundamental question: "Why are linked lists not used often?" Simply attributing it to "inefficiency in Python" felt insufficient, so I wanted to investigate and organize the actual reasons. This post summarizes my research and reflections on the topic.

## Why Linked Lists Are Rarely Used in Python

:::caution
This is not a claim that linked lists are never used. The title was changed from "Reasons Not to Use Linked Lists" to "Reasons Why Linked Lists Seem Not to Be Used" to reflect this.
:::

:::info
English comments in the code are from the original source.
:::

### Dynamic Arrays
In Python, linked lists are rarely used because the built-in `list` is implemented as a dynamic array, providing many of the advantages of linked lists. According to the CPython FAQ, a list is a contiguous array of pointers to other objects, and the list header contains a pointer to this array and its length. This structure ensures that accessing an element by index `a[i]` is always O(1), regardless of the list size.

**Array**  
- Index access: O(1)  
- Contiguous memory  
- Insertion/deletion in the middle: O(n)  
- Appending at the end: Amortized O(1)  

**Linked List**  
- Index access: O(n)  
- Scattered memory  
- Insertion/deletion (given a node): O(1)  
- Finding the insertion position: O(n)  

This is structurally similar to C's arrays and C++'s `std::vector`. Below is the `PyListObject` definition from `cpython/Include/cpython/listobject.h`. The key part is `PyObject **ob_item`, which stores pointers to Python objects in a contiguous array.

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

Here, `ob_item` is allocated using `malloc`. When `append()` is called and the array is full, reallocation occurs. CPython uses a strategy to pre-allocate extra space to make multiple append operations efficient.

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

### Cache Locality
Cache locality is an important factor that makes dynamic arrays more efficient than linked lists, not just in Python but also in C++.

Theoretically, linked list insertions and deletions are O(1), but actual performance is heavily influenced by memory access patterns. CPUs have caches (L1, L2, L3) that are much faster than main memory (RAM). Accessing L1 cache takes about 1–2 ns, while accessing main memory takes about 60–100 ns. Modern CPUs prefetch adjacent memory when accessing a location, leading to cache hits for contiguous memory like arrays. Linked lists, with scattered memory, often result in cache misses.

**Array Example**  
Memory addresses: 1000   1008   1016   1024  
Pointers: [ptr0] [ptr1] [ptr2] [ptr3] (contiguous memory)  
Sequential access has high cache hit rates.

**Linked List Example**  
Memory addresses: 1000        5432        2048        7890  
Nodes: Node(1) → Node(2) → Node(3) → Node(4)  
Each node access may cause a cache miss.

Thus, arrays have near O(1) access due to cache hits, while linked lists suffer from O(n) access due to cache misses. This is why `std::vector` is preferred over `std::list` in C++ and Python's `list` over linked lists.

### PyObject and Memory Overhead
In Python, all values are represented as `PyObject` structures. Below is the `PyObject` definition from `cpython/Include/object.h`:

```c
// PyObject base structure
struct _object {
    _Py_ANONYMOUS union {
#if SIZEOF_VOID_P > 4 // 64-bit system
        PY_INT64_T ob_refcnt_full; /* For efficient initialization with Clang on ARM */ // 8 bytes
        struct {
#  if PY_BIG_ENDIAN
            uint16_t ob_flags; // 2 bytes
            uint16_t ob_overflow; // 2 bytes
            uint32_t ob_refcnt; // 4 bytes (reference count)
#  else
            uint32_t ob_refcnt;      
            uint16_t ob_overflow;
            uint16_t ob_flags;
#  endif
        }; // Union size is 8 bytes
#else
        Py_ssize_t ob_refcnt;
#endif
        _Py_ALIGNED_DEF(_PyObject_MIN_ALIGNMENT, char) _aligner;
    };
    PyTypeObject *ob_type;           // 8 bytes (type pointer)
};
```

Every Python object includes:
- Reference count: 8 bytes (union size)
- Type pointer: 8 bytes (64-bit system)
- Total: 16 bytes

**C++ Node vs Python Node Comparison**
```c
// C++ Node structure
struct Node {
    int val;        // 4 bytes
    // Padding: 4 bytes (for 8-byte alignment on 64-bit systems)
    Node* next;     // 8 bytes (64-bit pointer)
    Node(int v) : val(v), next(nullptr) {} // Constructor stored in code segment
};

Node node(1);       // Instance creation
// Total: 16 bytes
```

```python
# Python
class Node:
    def __init__(self, val): # Constructor stored in class
        self.val = val
        self.next = None

node = Node(1)
```

In Python, object attributes are stored in a `__dict__` dictionary. For example:
```python
print(node.__dict__)  # {'val': 1, 'next': None}
```

Thus, the total memory usage includes both the object itself and the `__dict__`:
```python
import sys
print(sys.getsizeof(node))          # Object itself: 48 bytes
print(sys.getsizeof(node.__dict__)) # Attribute dictionary: 64 bytes
# Total: 112 bytes (may vary by version)
```

For cases requiring insertions/deletions at both ends, Python's `collections.deque` is more efficient. Deque is a hybrid structure of linked lists and arrays, allowing O(1) operations at both ends while maintaining cache efficiency. Below is the deque structure from `cpython/Modules/_collectionsmodule.c`:

```c
#define BLOCKLEN 64  // Each block size

// Block structure - doubly linked list node
typedef struct BLOCK {
    struct BLOCK *leftlink;      // Previous block pointer
    PyObject *data[BLOCKLEN];    // Array of 64 PyObject pointers
    struct BLOCK *rightlink;     // Next block pointer
} block;

struct dequeobject {
    PyObject_VAR_HEAD
    block *leftblock;
    block *rightblock;
    Py_ssize_t leftindex;       /* 0 <= leftindex < BLOCKLEN */
    Py_ssize_t rightindex;      /* 0 <= rightindex < BLOCKLEN */
    size_t state;               /* Incremented when indices move */
    Py_ssize_t maxlen;          /* -1 for unbounded deques */
    Py_ssize_t numfreeblocks;
    block *freeblocks[MAXFREEBLOCKS];
    PyObject *weakreflist;
};
```

Each block is a doubly linked list node containing a fixed-size array. This structure allows O(1) operations at both ends while maintaining cache efficiency. However, deque has slightly more memory overhead than `list`, and middle insertions/deletions are still O(n), with indexing being O(1) only at the ends.

```python
from collections import deque

# Deque creation
dq = deque([1, 2, 3])

# O(1) operations at both ends
dq.append(4)        # Right append: [1, 2, 3, 4]
dq.appendleft(0)    # Left append: [0, 1, 2, 3, 4]
dq.pop()            # Right pop: [0, 1, 2, 3]
dq.popleft()        # Left pop: [1, 2, 3]

# Indexing (O(1) at ends, O(n) in the middle)
print(dq[0]) # 1 - Left end, O(1) 
print(dq[-1]) # 3 - Right end, O(1) 
print(dq[1]) # 2 - Middle, O(n)
```

Thus, `deque` is suitable for stack/queue-like operations at the ends, while `list` is better for random access or middle insertions/deletions.

## Cases Where Linked Lists Are Used in Python
Despite the above, linked lists are still useful in specific scenarios. Below are examples from Python's standard library and other systems.

### Python `functools.lru_cache` Double Linked List
Python's `functools.lru_cache` uses a circular doubly linked list to implement LRU caching. The dictionary alone cannot track usage order, and using an array would make middle insertions/deletions O(n). The linked list allows O(1) operations when combined with a dictionary for O(1) lookups.

```python
def _lru_cache_wrapper(user_function, maxsize, typed, _CacheInfo):
    # Constants shared by all lru cache instances:
    sentinel = object()          # Unique object for cache misses
    make_key = _make_key         # Build a key from function arguments
    PREV, NEXT, KEY, RESULT = 0, 1, 2, 3   # Names for link fields

    cache = {}
    hits = misses = 0
    full = False
    cache_get = cache.get    # Bound method to lookup a key or return None
    cache_len = cache.__len__  # Get cache size without calling len()
    lock = RLock()           # Because linkedlist updates aren't threadsafe
    root = []                # Root of the circular doubly linked list -> Sentinel node
    root[:] = [root, root, None, None]     # Initialize by pointing to self
```

The sentinel node (`root`) points to itself when the list is empty, simplifying edge cases. The dictionary provides O(1) lookups, and the linked list manages usage order. When a new item is added, it is inserted right after the root. When an existing item is accessed, it is moved to the front. If the cache is full, the least recently used item (root's previous node) is removed in O(1) time.

### Python `weakref` Module
Python's `weakref` module uses linked lists to manage weak references. When an object is deleted, all weak references to it must be invalidated. The linked list allows O(1) removal when combined with a dictionary for O(1) lookups.

```c
/* PyWeakReference is the base struct for Python ReferenceType, ProxyType, and CallableProxyType. */
struct _PyWeakReference {
    PyObject_HEAD

    /* The object to which this is a weak reference, or Py_None if none.
     * Note that this is a stealth reference:  wr_object's refcount is
     * not incremented to reflect this pointer.
     */
    PyObject *wr_object;

    /* A callable to invoke when wr_object dies, or NULL if none. */
    PyObject *wr_callback;

    /* Cache for wr_object's hash code. -1 if not known yet. */
    Py_hash_t hash;

    /* If wr_object is weakly referenced, it has a doubly-linked NULL-terminated
     * list of weak references. These are the list pointers.
     * If wr_object goes away, wr_object is set to Py_None, and these pointers
     * have no meaning then.
     */
    PyWeakReference *wr_prev;
    PyWeakReference *wr_next;
    vectorcallfunc vectorcall;

#ifdef Py_GIL_DISABLED
    /* Pointer to the lock used when clearing in free-threaded builds.
     * Normally this can be derived from wr_object, but in some cases we need
     * to lock after wr_object has been set to Py_None.
     */
    PyMutex *weakrefs_lock;
#endif
};
```

The `wr_prev` and `wr_next` pointers form a doubly linked list of weak references. When an object is deleted, the list is traversed to invalidate all weak references and call their callbacks.

### Python `asyncio` Event Loop
The `asyncio` event loop uses `deque` for the `_ready` queue, which is a hybrid of linked lists and arrays. The `_ready` deque allows O(1) operations at both ends, while the `_scheduled` list uses a heap for time-based sorting.

```python
class BaseEventLoop(events.AbstractEventLoop):
    def __init__(self):
        self._ready = collections.deque()  # Ready callbacks
        self._scheduled = []  # Time-sorted heap
        # ...

    def call_soon(self, callback, *args, context=None):
        """Arrange for a callback to be called as soon as possible."""
        self._check_closed()
        if self._debug:
            self._check_thread()
            self._check_callback(callback, 'call_soon')
        handle = self._call_soon(callback, args, context)
        if handle._source_traceback:
            del handle._source_traceback[-1]
        return handle

    def _call_soon(self, callback, args, context):
        handle = events.Handle(callback, args, self, context)
        if handle._source_traceback:
            del handle._source_traceback[-1]
        self._ready.append(handle)  # O(1) append to deque
        return handle

    def _run_once(self):
        """Run one full iteration of the event loop."""
        # Move timed-out scheduled callbacks to ready
        ready = self._ready
        self._ready = collections.deque()
        end_time = self.time()
        while self._scheduled:
            handle = self._scheduled[0]
            if handle._when > end_time:
                break
            handle = heapq.heappop(self._scheduled)
            ready.append(handle)

        # ready is deque for efficient O(1) operations at both ends
        ntodo = len(ready)
        for _ in range(ntodo):
            handle = ready.popleft()
            if not handle._cancelled:
                handle._run()
```

The `_ready` deque is a block-based linked list, while `_scheduled` is a heap implemented as a dynamic array. This design leverages the strengths of both structures.

## Other Cases Where Linked Lists Are Used
### Python `OrderedDict` Double Linked List
Before Python 3.7, dictionaries did not preserve insertion order, so `OrderedDict` was used. The C implementation in `cpython/Objects/odictobject.c` uses a doubly linked list to maintain order.

```c
/* PyODictObject */
struct _odictobject {
    PyDictObject od_dict;        /* Underlying dict */
    _ODictNode *od_first;        /* First node in the linked list, if any */
    _ODictNode *od_last;         /* Last node in the linked list, if any */
    /* od_fast_nodes, od_fast_nodes_size, and od_resize_sentinel are managed
     * by _odict_resize().
     * Note that we rely on implementation details of dict for both. */
    _ODictNode **od_fast_nodes;  /* Hash table mirroring the dict table */
    Py_ssize_t od_fast_nodes_size;
    void *od_resize_sentinel;    /* Changes if odict should be resized */

    size_t od_state;             /* Incremented whenever the LL changes */
    PyObject *od_inst_dict;      /* OrderedDict().__dict__ */
    PyObject *od_weakreflist;    /* Holds weakrefs to the odict */
};

...

struct _odictnode {
    PyObject *key;
    Py_hash_t hash;
    _ODictNode *next;
    _ODictNode *prev;
};
```

The `od_fast_nodes` array mirrors the dictionary's hash table, allowing O(1) lookups while maintaining insertion order via the linked list.

### Redis Sorted Set with Skip List and Double Linked List
Redis uses a skip list with backward pointers (a doubly linked list at level 1) for sorted sets. This allows O(log N) range queries and O(1) reverse traversal.

```cpp
/* ZSETs are ordered sets using two data structures to hold the same elements
 * in order to get O(log(N)) INSERT and REMOVE operations into a sorted
 * data structure.
 *
 * The elements are added to a hash table mapping Redis objects to scores.
 * At the same time the elements are added to a skip list mapping scores
 * to Redis objects (so objects are sorted by scores in this "view").
 *
 * This skiplist implementation is almost a C translation of the original
 * algorithm described by William Pugh in "Skip Lists: A Probabilistic
 * Alternative to Balanced Trees", modified in three ways:
 * a) this implementation allows for repeated scores.
 * b) the comparison is not just by key (our 'score') but by satellite data.
 * c) there is a back pointer, so it's a doubly linked list with the back
 * pointers being only at level 1. This allows to traverse the list
 * from tail to head, useful for ZREVRANGE. */
```

The backward pointer at level 1 enables reverse traversal for commands like `ZREVRANGE`.

### glibc `malloc` Free List
The `malloc`/`free` implementation in glibc uses a linked list to manage free memory blocks. The next pointer is stored in the first few bytes of the free block, eliminating the need for additional memory.

```c
// Free memory block linked list
struct malloc_chunk {
  INTERNAL_SIZE_T mchunk_prev_size;  /* Previous chunk size */
  INTERNAL_SIZE_T mchunk_size;       /* Current chunk size */
  struct malloc_chunk* fd;           /* Forward link - next free block */
  struct malloc_chunk* bk;           /* Backward link - previous free block */
  struct malloc_chunk* fd_nextsize;  /* Next size for large chunks */
  struct malloc_chunk* bk_nextsize;  /* Previous size for large chunks */
};

// Remove a free chunk from the list - O(1) operation
static void
unlink_chunk (mstate av, mchunkptr p)
{
  mchunkptr fd = p->fd;  // Pointer re-linking
  mchunkptr bk = p->bk;  // O(1) removal
  fd->bk = bk;
  bk->fd = fd;
}
```

This design avoids extra memory allocation by storing pointers within the free blocks themselves.

### libstdc++ `unordered_map` Chaining
The C++ standard library's `std::unordered_map` uses chaining with linked lists to resolve hash collisions. This allows O(1) insertions in the case of collisions.

```cpp
// Single linked list for collision resolution
struct _Hash_node_base {
  _Hash_node_base* _M_nxt;  // Next node pointer

  _Hash_node_base() noexcept : _M_nxt() { }
  _Hash_node_base(_Hash_node_base* __next) noexcept : _M_nxt(__next) { }
};

// Node storing the actual value
template<typename _Value, bool _Cache_hash_code>
struct _Hash_node : _Hash_node_base,
                    _Hash_node_value<_Value, _Cache_hash_code> {
  _Hash_node* _M_next() const noexcept {
    return static_cast<_Hash_node*>(this->_M_nxt);
  }
};
```

Each bucket points to a linked list of colliding elements, allowing efficient insertions.

### Linux Kernel Intrusive Doubly Linked List
The Linux kernel provides an intrusive doubly linked list in `include/linux/list.h`. This design allows any structure with a `list_head` field to be part of a linked list.

```c
struct list_head {
    struct list_head *next, *prev;
};

// Initialization - self-referential
#define LIST_HEAD_INIT(name) { &(name), &(name) }

static inline void INIT_LIST_HEAD(struct list_head *list) {
    WRITE_ONCE(list->next, list);
    WRITE_ONCE(list->prev, list);
}

// O(1) insertion
static inline void __list_add(struct list_head *new,
                struct list_head *prev,
                struct list_head *next) {
    next->prev = new;
    new->next = next;
    new->prev = prev;
    WRITE_ONCE(prev->next, new);
}
```

This intrusive design allows the same list operations to be reused across different data structures, such as task scheduling and memory management.

### Chromium `base::LinkedList` Intrusive List
Chromium uses its own `base::LinkedList` implementation, which is intrusive and allows O(1) deletions without needing to search for the element.

```cpp
// Chromium's intrusive linked list implementation
template <typename T>
class LinkedList {
 public:
  // The "root" node is self-referential, forming the basis of a circular list.
  LinkedList() { root_.set(&root_, &root_); }
  LinkedList(const LinkedList&) = delete;
  LinkedList& operator=(const LinkedList&) = delete;
  
  // Move constructor (use with care if nodes are stack-allocated)
  LinkedList(LinkedList&& other) : root_(std::move(other.root_)) {
    other.root_.MakeSelfReferencing();
  }

  // Appends |e| to the end of the linked list
  void Append(LinkNode<T>* e) { e->InsertBefore(&root_); }

  LinkNode<T>* head() const { return root_.next(); }

  LinkNode<T>* tail() const { return root_.previous(); }

  const LinkNode<T>* end() const { return &root_; }

  bool empty() const { return head() == end(); }

 private:
  LinkNode<T> root_;
};
```

This design avoids the overhead of reallocating and copying elements, making it suitable for scenarios where multiple iterators need to remain valid during modifications.

## Summary
While linked lists are rarely used directly in Python for general-purpose programming, they are still essential in specific scenarios and system-level implementations. The built-in `list` and `deque` provide most of the functionality needed for everyday tasks, but linked lists shine in cases requiring efficient insertions/deletions at known positions or when memory constraints demand intrusive designs.

The main takeaway is that unless a problem explicitly requires implementing a linked list, it's unlikely you'll need to use one in coding tests or general development. However, understanding their strengths and weaknesses is crucial for designing efficient systems.

Below is a comparison of time complexity and implementation examples in Python and C++.

| Operation     | `list`           | `deque` | Custom Linked List |
| ----------- | ---------------- | ------- | ------------------ |
| Append      | O(1) amortized   | O(1)    | O(n) (find end)    |
| Prepend     | O(n)             | O(1)    | O(1)               |
| Pop from end| O(1)             | O(1)    | O(n) (find end)    |
| Pop from front| O(n)           | O(1)    | O(1)               |
| Index access| O(1)             | O(1)    | O(n)               |
| Memory efficiency| High         | Medium  | Low                |
| Cache efficiency| High         | Medium  | Low                |

## Implementation Examples

### Python
```python
class Node:
    def __init__(self, val):
        self.val = val
        self.next = None  # Each node has its value and a pointer to the next node

class LinkedList:
    def __init__(self):
        self.head = None  # Pointer to the first node

    def insert_front(self, val):
        node = Node(val)
        node.next = self.head
        self.head = node

    def insert_back(self, val):
        # If the list is empty, set head to the new node
        if not self.head:
            self.head = Node(val)
            return
        # Traverse to the end
        cur = self.head
        while cur.next:
            cur = cur.next
        cur.next = Node(val)

    def delete(self, val):
        # If the list is empty, return
        if not self.head:
            return
        # If the head is the target, remove it
        if self.head.val == val:
            self.head = self.head.next
            return
        # Traverse to find the node before the target
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
    
    // Insert at the front
    void insert_front(int val) {
        Node* node = new Node(val);
        node->next = head;
        head = node;
    }
    
    // Insert at the end
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
    
    // Delete a value
    void delete_value(int val) {
        if (head == nullptr)
            return;
            
        // If head is the target
        if (head->val == val) {
            Node* temp = head;
            head = head->next;
            delete temp;
            return;
        }
        
        // Traverse to find the node before the target
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
    
    // Print the list
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
}
```

## References
- [CPython GitHub](https://github.com/python/cpython)
- [CPython Design and History FAQ](https://docs.python.org/3/faq/design.html#how-are-lists-implemented-in-cpython)
- [Latency Numbers Every Programmer Should Know](https://gist.github.com/jboner/2841832)
- [Approximate cost to access various caches and main memory - Stack Overflow](https://stackoverflow.com/questions/4087280/approximate-cost-to-access-various-caches-and-main-memory)
- [Redis GitHub](https://github.com/redis/redis/)
- [Linux Kernel GitHub](https://github.com/torvalds/linux)