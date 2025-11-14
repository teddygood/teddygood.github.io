---
title: "Linked List"
date: '2025-11-14 16:11'
---
## Python

파이썬에서는 사실 Linked List를 잘 사용하지 않는데 그 이유는 파이썬 list가 사실 Dynamic Array이기 때문이다. 실제로 C array와 거의 유사하며, 구조적으로 C++의 `std::vector`와 비슷하다.

Linke


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

## C++

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