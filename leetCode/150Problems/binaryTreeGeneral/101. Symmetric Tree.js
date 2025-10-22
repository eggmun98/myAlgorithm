// 1. 문제와 이해
// 설명: 이진 트리 root가 '중심선을 기준으로 좌우가 거울 대칭'인지 확인하라.
// 정의: 대칭이라면, 루트의 왼쪽 서브트리와 오른쪽 서브트리가
//       구조적으로 대칭이고, 마주보는 노드의 값이 같다.
// 핵심: "왼쪽의 왼쪽 ↔ 오른쪽의 오른쪽", "왼쪽의 오른쪽 ↔ 오른쪽의 왼쪽" 비교
// 제약: 노드 수 ≤ 1000, 값 범위 -100~100
// 복잡도: O(N) 시간, O(H) 공간(재귀) / O(N) 공간(반복 큐)

// 2. 계획
// - 재귀(DFS) 접근:
//   isMirror(a, b):
//     1) 둘 다 null → true
//     2) 한쪽만 null → false
//     3) a.val !== b.val → false
//     4) isMirror(a.left, b.right) && isMirror(a.right, b.left)
//   최종: isMirror(root.left, root.right)
// - 반복(BFS/큐) 접근:
//   루트의 (left, right) 쌍을 큐에 넣고, 매번 쌍을 꺼내 같은지 확인.
//   (L.left, R.right), (L.right, R.left)를 다시 큐에 push.

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
  * @return {boolean}
  */
 var isSymmetric = function(root) {
    if (!root) return true; // (문제 제약상 root는 최소 1노드지만 방어적으로)
    return isMirror(root.left, root.right);
  
    function isMirror(a, b) {
      if (a === null && b === null) return true;
      if (a === null || b === null) return false;
      if (a.val !== b.val) return false;
      return isMirror(a.left, b.right) && isMirror(a.right, b.left);
    }
  };
  
  // 3-2. 풀이2 (반복 BFS/큐)
   /**
    * @param {TreeNode} root
    * @return {boolean}
    */
  var isSymmetricIter = function(root) {
    if (!root) return true;
    const queue = [[root.left, root.right]];
  
    while (queue.length) {
      const [a, b] = queue.shift();
  
      if (a === null && b === null) continue; // 이 쌍은 대칭 OK
      if (a === null || b === null) return false;
      if (a.val !== b.val) return false;
  
      // 대칭 위치 쌍을 유지해서 넣기
      queue.push([a.left, b.right]);
      queue.push([a.right, b.left]);
    }
    return true;
  };
  
// 4. 테스트 케이스
isSymmetric(buildTreeLevelOrder([1,2,2,3,4,4,3])) // true
isSymmetric(buildTreeLevelOrder([1,2,2,null,3,null,3])) // false
isSymmetric(buildTreeLevelOrder([1]))
isSymmetric(buildTreeLevelOrder([1,2,2,2,null,2])) // false
