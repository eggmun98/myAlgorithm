// 1. 문제와 이해
// 설명: 이진 트리의 각 레벨(level)에 있는 노드 값들의 평균을 구해 배열로 반환한다.
// 평균은 1e-5 오차까지 허용된다.
//
// 입력:
// root: 이진 트리의 루트(TreeNode)
// 출력:
// number[]: 각 레벨의 평균값을 순서대로 담은 배열
// 조건:
// - 노드 개수: 1 <= N <= 10^4
// - 노드 값: -2^31 <= val <= 2^31 - 1
// 유형: BFS(레벨 순회) / 큐 / 누적합
//
// 예시:
// root = [3,9,20,null,null,15,7] → [3.00000, 14.50000, 11.00000]
// root = [3,9,20,15,7] → [3.00000, 14.50000, 11.00000]
//
// 포인트:
// - 레벨 순회(BFS)로 같은 깊이의 노드들을 한 번에 처리
// - 각 레벨에서 합(sum)과 개수(count)로 평균 계산
// - JS Number는 2^53-1까지 정수 정밀: 최악합 ≈ 2.1e13 < 9e15 → 안전
// - 음수 값 포함 가능하므로 합/평균 계산에 주의(그냥 실수 연산으로 OK)

// 2. 계획
// step 1: 큐를 준비하고 root를 넣는다.
// step 2: while(큐가 빌 때까지) 다음을 반복
// - 현재 큐 크기(levelSize)만큼 순회하며:
// · 노드를 pop하고 합계에 더함
// · 왼/오 자식이 있으면 큐에 push
// - (합계 / levelSize)를 결과 배열에 push
// 시간복잡도: O(N) (각 노드 1회 방문)
// 공간복잡도: O(W) (최대 너비 W 만큼 큐 사용)

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
var averageOfLevels = function(root) {

    // 1. 일단 결과를 담는 변수와, 트리의 루트 레벨을 계산하는 큐를 담는 변수를 만든다.
    const result = [] 
    const queue = [root] // 처음에는 root 노드를 담아줍시다.

    // 2. 큐가 비어있을 때까지 반복문을 돌립니다 -> 큐가 비어있다는 건 트리의 레벨이 끝났다는 뜻
    while(queue.length > 0) {
        const nodeLength = queue.length; // 각 노드의 길이를 세봅시다.
        let sum = 0; // 각 노드의 합을 구해봅시다.

        for(let i = 0; i<nodeLength; i++) {
            const node = queue.shift() // 노드를 꺼내십다.
            sum += node.val // 노드의 값을 더해주십다.

            // 그리고 큐에 새로운 레벨의 노드들을 넣어야 합니다. null이 아닐 경우에만
           if (node.left) queue.push(node.left);   
           if (node.right) queue.push(node.right)
        }
    
    result.push(sum / nodeLength) // 1회 반복할 때 마다 각 레벨에 맞는 노드들의 평균을 구합시다.

    }

    return result // 결과값을 반환해주십다.
    
};

// 4. 테스트 케이스
console.log(averageOfLevels([3,9,20,null,null,15,7])) // [3.00000, 14.50000, 11.00000]
console.log(averageOfLevels([3,9,20,15,7])) // [3.00000, 14.50000, 11.00000]
