// 1. 문제와 이해
// 설명:
// 이진 트리의 루트가 주어질 때, 지그재그(Zigzag) 형태의 레벨 순회 결과를 반환하라.
// 즉, 트리의 각 층을 탐색할 때
// - 첫 번째 레벨은 왼쪽 → 오른쪽
// - 다음 레벨은 오른쪽 → 왼쪽
// - 그 다음은 다시 왼쪽 → 오른쪽
// 이런 식으로 방향을 번갈아가며 값을 수집해야 한다.
//
// 입력:
// - root: TreeNode (이진 트리의 루트)
// 출력:
// - number[][]: 각 레벨별로 노드 값을 담은 2차원 배열 (지그재그 순서)
//
// 조건:
// - 노드 개수: 0 <= N <= 2000
// - 노드 값: -100 <= val <= 100
// 유형: BFS / 큐 / 레벨 순회 / 순서 반전
//
// 예시:
// root = [3,9,20,null,null,15,7] → [[3],[20,9],[15,7]]
// root = [1] → [[1]]
// root = [] → []
//
// 포인트:
// - BFS로 각 레벨을 한 번에 탐색하면서 level 배열에 값 저장
// - 짝수 레벨(0, 2, 4...)은 왼→오, 홀수 레벨(1, 3, 5...)은 오른→왼
// - 홀수 레벨일 경우 level.reverse() 해서 결과에 push
// - root가 null이면 빈 배열 반환
//
// ---

// 2. 계획
// step 1: 예외 처리 — root가 null이면 [] 반환
// step 2: 큐(queue)에 root를 넣고 BFS 시작
// step 3: while(큐가 빌 때까지):
// - 현재 레벨의 노드 수(levelSize)만큼 순회
// - level 배열에 현재 노드 값을 추가
// - 자식 노드(left, right)가 있으면 큐에 push
// - 한 레벨이 끝나면, direction(방향 플래그)에 따라
// → leftToRight면 그대로 push
// → 아니면 reverse() 해서 push
// - 다음 레벨 탐색 시 direction을 반전
// step 4: 결과 배열 반환
// 시간복잡도: O(N) (모든 노드를 한 번씩 방문)
// 공간복잡도: O(W) (최대 너비 W만큼 큐에 저장)

// 3. 풀이
/**
Definition for a binary tree node.
function TreeNode(val, left, right) {
this.val = (val===undefined ? 0 : val)
this.left = (left===undefined ? null : left)
this.right = (right===undefined ? null : right)
}
*/

/**
@param {TreeNode} root
@return {number[][]}
*/
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    let leftToRight = true; // 방향 플래그 (true면 왼→오, false면 오→왼)
    
    while (queue.length) {
    const levelSize = queue.length;
    const level = [];
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);
    
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    
    // 현재 레벨 방향에 맞게 결과에 추가
    result.push(leftToRight ? level : level.reverse());
    leftToRight = !leftToRight; // 다음 레벨은 방향 반전
     
    }
    
    return result;
    };

    // 4. 테스트 케이스
    console.log(zigzagLevelOrder([3,9,20,null,null,15,7])); // [[3],[20,9],[15,7]]
    console.log(zigzagLevelOrder([1])); // [[1]]
    console.log(zigzagLevelOrder([])); // []