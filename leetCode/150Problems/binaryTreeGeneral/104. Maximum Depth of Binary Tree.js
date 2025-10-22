// 1. 문제와 이해
// 설명: 이진 트리의 루트 root가 주어질 때, 리프까지의 최장 경로에 있는 "노드 수"를 반환한다.
// 정의: 깊이 = 루트 → (가장 먼 리프)까지 지나가는 노드 개수
// 핵심: 현재 노드의 깊이 = 1(자기 자신) + max(왼쪽 서브트리 깊이, 오른쪽 서브트리 깊이)
// 제약/복잡도: O(N) 시간 (모든 노드 1회 방문), 공간 O(H) (재귀 스택; H=트리 높이)
// 엣지: 빈 트리(null) ⇒ 0, 한 노드 ⇒ 1, 한쪽으로만 긴 트리 ⇒ H가 커짐

// 2. 계획
// - 재귀(DFS):
//   - base: root === null 이면 0 반환
//   - left = maxDepth(root.left), right = maxDepth(root.right)
//   - return Math.max(left, right) + 1
// - 반복(BFS, 레벨순회):
//   - 큐에 root를 넣고, 레벨(층)마다 순회할 때마다 depth++
//   - 현재 큐 크기만큼 꺼내며 자식들(좌/우)을 큐에 추가
//   - 큐가 빌 때까지 반복 → 누적된 depth가 정답
// - 주의: JS는 재귀 깊이가 매우 큰 편에서는 콜스택 초과 가능 → BFS가 안전

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
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) return 0;                 // base: 빈 트리
    const leftDepth = maxDepth(root.left);       // 왼쪽 서브트리 깊이
    const rightDepth = maxDepth(root.right);     // 오른쪽 서브트리 깊이
    return Math.max(leftDepth, rightDepth) + 1;  // 자기 자신(+1)을 포함
  };
  
  // 3-2. 풀이2 (반복 BFS: 큐로 레벨 카운트)
  /**
   * @param {TreeNode} root
   * @return {number}
   */
  var maxDepthBFS = function(root) {
    if (!root) return 0;
    const queue = [root];
    let depth = 0;
  
    while (queue.length) {
      const size = queue.length; // 현재 레벨에 있는 노드 수
      for (let i = 0; i < size; i++) {
        const node = queue.shift();
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      depth++; // 한 레벨을 완전히 처리했으니, 깊이 +1
    }
    return depth;
  };
  
  // 4. 테스트 케이스 (설명용; LeetCode는 root를 제공)
  // 예시 트리: [3,9,20,null,null,15,7]
  // 구조:
  //         3
  //        / \
  //       9   20
  //           / \
  //          15  7
  // 기대값: 3
  
  // 간단한 빌더(레벨순 배열 → 트리)로 직접 만들어 테스트하고 싶다면:
  function buildTreeLevelOrder(arr) {
    if (!arr || !arr.length || arr[0] == null) return null;
    const nodes = arr.map(v => (v == null ? null : new TreeNode(v)));
    let i = 0, j = 1;
    while (j < nodes.length) {
      if (nodes[i]) {
        nodes[i].left = nodes[j++] ?? null;
        if (j < nodes.length) nodes[i].right = nodes[j++] ?? null;
      } else {
        i++;
      }
      i++;
    }
    return nodes[0];
  }
  
  // 사용 예시:
  const root = buildTreeLevelOrder([3,9,20,null,null,15,7]);
  console.log(maxDepth(root));    // 3
  console.log(maxDepthBFS(root)); // 3
  
  // 추가 체크
  console.log(maxDepth(buildTreeLevelOrder([1,null,2]))); // 2
  console.log(maxDepth(buildTreeLevelOrder([])));         // 0
  console.log(maxDepth(buildTreeLevelOrder([1])));        // 1
  