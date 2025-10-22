// 1. 문제와 이해
// 설명: 주어진 이진 트리를 '좌우 반전(invert)'시켜라.
// 즉, 모든 노드의 왼쪽 자식과 오른쪽 자식을 서로 바꾼 트리를 반환.
// 예: 
//      4              4
//     / \     →      / \
//    2   7          7   2
//   / \ / \        / \ / \
//  1  3 6  9      9 6 3  1
//
// 제약: 노드 수 ≤ 100, 노드 값: -100 ~ 100
// 복잡도: O(N) (각 노드를 한 번씩만 방문), 공간 O(H) (재귀 스택 깊이 H)

// 2. 계획
// - 재귀(DFS) 접근:
//   1️⃣ base case: root가 null이면 null 반환
//   2️⃣ 왼쪽과 오른쪽 자식을 swap
//   3️⃣ 왼쪽·오른쪽 하위 노드에 대해서도 반복적으로 invert
//   4️⃣ 최종적으로 root 반환
//
// - 반복(BFS) 접근:
//   큐를 써서 레벨 순회하면서 각 노드마다 left, right를 바꾼다.

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) return null;         // base: 비어있는 트리
  
    // 왼쪽과 오른쪽 자식을 swap
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
  
    // 하위 트리들도 재귀적으로 반전
    invertTree(root.left);
    invertTree(root.right);
  
    return root;
  };
  
  // 3-2. 풀이2 (반복 BFS)
  /**
   * @param {TreeNode} root
   * @return {TreeNode}
   */
  var invertTreeBFS = function(root) {
    if (!root) return null;
    const queue = [root];
  
    while (queue.length > 0) {
      const node = queue.shift();
  
      // swap
      [node.left, node.right] = [node.right, node.left];
  
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  
    return root;
  };
  
  // 4. 테스트 케이스
  // 예시1: [4,2,7,1,3,6,9] → [4,7,2,9,6,3,1]
  // 예시2: [2,1,3] → [2,3,1]
  // 예시3: [] → []
  
  // 테스트용 빌더
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
  
  // 테스트
  const root1 = buildTreeLevelOrder([4,2,7,1,3,6,9]);
  console.log(invertTree(root1)); // 출력 트리: [4,7,2,9,6,3,1]
  
  const root2 = buildTreeLevelOrder([2,1,3]);
  console.log(invertTree(root2)); // [2,3,1]
  
  const root3 = buildTreeLevelOrder([]);
  console.log(invertTree(root3)); // []
  