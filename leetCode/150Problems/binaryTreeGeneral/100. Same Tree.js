// 1. 문제와 이해
// 설명: 두 개의 이진 트리 p, q가 주어질 때,
// 두 트리가 구조적으로 같고 각 노드의 값이 모두 같다면 true를 반환한다.
// 정의: “같다” = (1) 둘 다 null이거나 (2) 둘 다 존재하며 값이 같고,
//       왼쪽과 오른쪽 서브트리도 각각 같을 때
// 제약: 각 트리의 노드 수 ≤ 100, 노드 값 범위: -10^4 ~ 10^4
// 복잡도: O(N) 시간 (모든 노드 1회 방문), 공간 O(H) (재귀 스택; H=트리 높이)

// 2. 계획
// - 재귀(DFS) 접근:
//   - base case:
//     1️⃣ p와 q 둘 다 null → true (둘 다 비어 있음)
//     2️⃣ 둘 중 하나만 null → false (구조가 다름)
//     3️⃣ p.val !== q.val → false (값이 다름)
//   - 재귀 호출:
//     leftSame = isSameTree(p.left, q.left)
//     rightSame = isSameTree(p.right, q.right)
//     둘 다 true일 때만 true 반환
// - 반복(BFS)로도 가능하지만 재귀가 훨씬 간단

// 3-1. 풀이1 (재귀 DFS)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p === null && q === null) return true;   // 둘 다 null → 같음
    if (p === null || q === null) return false;  // 하나만 null → 다름
    if (p.val !== q.val) return false;           // 값이 다름 → 다름
  
    // 왼쪽·오른쪽 서브트리가 모두 같아야 전체가 같음
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  };
  
  // 3-2. 풀이2 (반복 BFS)
  /**
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {boolean}
   */
  var isSameTreeBFS = function(p, q) {
    const queue = [[p, q]];
  
    while (queue.length > 0) {
      const [node1, node2] = queue.shift();
  
      // 둘 다 null이면 이번 레벨은 같음 → continue
      if (!node1 && !node2) continue;
      // 한쪽만 null이거나 값이 다르면 즉시 false
      if (!node1 || !node2 || node1.val !== node2.val) return false;
  
      // 다음 비교를 위해 자식들을 쌍으로 넣기
      queue.push([node1.left, node2.left]);
      queue.push([node1.right, node2.right]);
    }
  
    return true;
  };
  
  // 4. 테스트 케이스 (예시 트리 빌더 포함)
  function buildTreeLevelOrder(arr) {
    if (!arr || !arr.length || arr[0] == null) return null;
    const nodes = arr.map(v => (v == null ? null : new TreeNode(v)));
    let i = 0, j = 1;
    while (j < nodes.length) {
      if (nodes[i]) {
        nodes[i].left = nodes[j++] ?? null;
        if (j < nodes.length) nodes[i].right = nodes[j++] ?? null;
      }
      i++;
    }
    return nodes[0];
  }
  
  // Example 1
  const p1 = buildTreeLevelOrder([1,2,3]);
  const q1 = buildTreeLevelOrder([1,2,3]);
  console.log(isSameTree(p1, q1)); // true
  
  // Example 2
  const p2 = buildTreeLevelOrder([1,2]);
  const q2 = buildTreeLevelOrder([1,null,2]);
  console.log(isSameTree(p2, q2)); // false
  
  // Example 3
  const p3 = buildTreeLevelOrder([1,2,1]);
  const q3 = buildTreeLevelOrder([1,1,2]);
  console.log(isSameTree(p3, q3)); // false
  