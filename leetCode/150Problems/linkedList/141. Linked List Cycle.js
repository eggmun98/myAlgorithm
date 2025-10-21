// 1. 문제와 이해
// 설명: 
//   단일 연결 리스트(head)가 주어질 때, 
//   리스트 내에 사이클(cycle)이 존재하는지 판별하는 문제.
//
//   사이클이란? 어떤 노드의 next 포인터가 이전 노드 중 하나를 가리키는 경우.
//   즉, next 포인터를 계속 따라가면 무한 루프에 빠짐.
//
// 입력:
//   head: ListNode (연결 리스트의 첫 노드)
//
// 출력:
//   boolean
//   - true: 사이클 존재
//   - false: 사이클 없음
//
// 조건:
//   - 노드 수: [0, 10^4]
//   - 노드 값 범위: [-10^5, 10^5]
//   - pos: tail이 연결된 노드의 인덱스 (-1이면 사이클 없음)
//
// 유형: Linked List / Two Pointers / Floyd's Cycle Detection
//
// 예시:
//   head = [3,2,0,-4], pos = 1 → true
//     (tail이 인덱스 1 노드로 연결됨)
//
//   head = [1,2], pos = 0 → true
//     (tail이 첫 노드로 연결)
//
//   head = [1], pos = -1 → false
//     (노드 1개, 연결 없음)
//
// 포인트:
// - O(1) 공간으로 풀라는 “Follow up” 존재 → 플로이드의 토끼와 거북이 알고리즘 사용.
// - 방문 여부를 저장하는 Set 사용 시 O(n) 공간, 포인터 2개 사용 시 O(1).


// 2. 계획
// step 1: slow, fast 두 개의 포인터를 head에서 시작
// step 2: fast는 한 번에 2칸, slow는 1칸씩 이동
// step 3: 순회 중 slow === fast 되는 순간이 있다면 cycle 존재
// step 4: fast 또는 fast.next가 null이 되면 cycle 없음 (리스트의 끝 도달)
// step 5: 결과 반환
//
// 시간복잡도: O(n)
// 공간복잡도: O(1)

// 3. 풀이
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next

        if(fast === slow) {
            return true
        }

    }

    return false
    
};

// 4. 테스트 케이스
console.log(hasCycle([3,2,0,-4,2])) // true
console.log(hasCycle([1,2])) // true
console.log(hasCycle([1])) // false