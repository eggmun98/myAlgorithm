// 1. 문제와 이해
// 설명:
// 이진 트리의 루트(root)가 주어졌을 때, 트리를 오른쪽에서 바라본다면 보이는 노드들의 값을 위에서 아래 순서로 반환하라.
// 즉, 각 레벨(level)마다 가장 오른쪽 노드의 값만 결과 배열에 담으면 된다.
//
// 입력:
// - root: TreeNode (이진 트리의 루트)
// 출력:
// - number[]: 오른쪽에서 보이는 노드 값들의 배열
//
// 조건:
// - 노드 개수: 0 <= N <= 100
// - 노드 값: -100 <= val <= 100
// 유형: BFS / 레벨 순회 / 큐
//
// 예시:
// root = [1,2,3,null,5,null,4] → [1,3,4]
// root = [1,2,3,4,null,null,null,5] → [1,3,4,5]
// root = [1,null,3] → [1,3]
// root = [] → []
//
// 포인트:
// - 각 레벨(층)을 BFS로 순회하면서 마지막 노드 값만 결과 배열에 추가
// - DFS(깊이우선)로도 가능: “오른쪽 → 왼쪽” 순서로 내려가며 depth별 첫 번째 값만 저장
// - 루트가 null일 수 있으므로 예외처리 필요

// 2. 계획
// step 1: 예외 처리 — root가 null이면 [] 반환
// step 2: 큐(queue)에 루트를 넣고 BFS 시작
// step 3: while(큐가 빌 때까지):
// - 현재 레벨의 노드 개수를 구함(levelSize)
// - levelSize번 만큼 노드를 꺼내며
// → 마지막 노드(i === levelSize - 1)의 값을 result에 push
// → 왼쪽, 오른쪽 자식이 있으면 큐에 추가
// step 4: 결과 배열 반환
// 시간복잡도: O(N) — 모든 노드 1회 방문
// 공간복잡도: O(W) — 트리의 최대 너비(큐)

// 3. 풀이
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    // 일단 결과를 담는 변수를 만들어 줍시다.

    if(root === null) {
        return []
    }
    const result = [];
    // 그리고 큐를 담는 변수를 만들어 줍시다.
    const queue = [root];
    while(queue.length) {
        const nodeLen = queue.length;

        for(let i = 0; i<nodeLen; i++) {
            const node = queue.shift()

             if(node.left) {
                queue.push(node.left)
            }

            if(node.right) {
                queue.push(node.right)
            }
           

            if(i === nodeLen - 1) {
                result.push(node.val)
            }
        }

        
    }

    console.log(result)
    return result
    
};

// 4. 테스트 케이스
rightSideView([1,2,3,null,5,null,4]) // [1,3,4]
rightSideView([1,2,3,4,null,null,null,5]) // [1,3,4,5]
rightSideView([1,null,3]) // [1,3]
rightSideView([])