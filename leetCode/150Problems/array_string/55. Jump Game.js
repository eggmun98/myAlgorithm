// 1. 문제와 이해
// 설명: 정수 배열 nums가 주어진다. 
//       nums[i]는 i번째 인덱스에서 최대 몇 칸까지 점프할 수 있는지를 의미한다.
//       시작은 항상 인덱스 0에서 시작하며,
//       마지막 인덱스(nums.length - 1)에 도달할 수 있으면 true, 아니면 false를 반환하라.
//
// 입력: 정수 배열 nums (1 <= nums.length <= 10^4, 0 <= nums[i] <= 10^5)
// 출력: boolean (마지막 인덱스 도달 가능 여부)
// 유형: Greedy (탐욕적 접근), Dynamic Programming (DP 가능)

// 2. 계획
// - 핵심 아이디어: “현재까지 도달 가능한 최대 위치”를 추적한다.
// - 순회하면서 i번째 인덱스가 현재 도달 가능한 범위 내인지 확인한다.
//   만약 i > maxReach라면, 그곳에 도달할 수 없으므로 false를 반환한다.
// - 매번 maxReach = Math.max(maxReach, i + nums[i])로 업데이트한다.
// - 반복이 끝날 때까지 막히지 않으면 true.
// - 시간복잡도: O(n), 공간복잡도: O(1)

// 3. 풀이
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    let maxReach = 0; // 현재까지 도달 가능한 최대 인덱스

    for (let i = 0; i < nums.length; i++) {

        // 만약 현재 위치가 도달 불가능한 구간이면 false
        if (i > maxReach) {
            return false;
        }

        // 도달 가능한 최대 위치 갱신
        maxReach = Math.max(maxReach, i + nums[i]);

        // 마지막 인덱스에 도달 가능하면 조기 종료
        if (maxReach >= nums.length - 1) {
            return true;
        }
    }

    return true; // 끝까지 막히지 않았으면 도달 가능
};

// 4. 테스트 케이스
console.log(canJump([2,3,1,1,4])); // true (0→1→4 도달 가능)
console.log(canJump([3,2,1,0,4])); // false (3에서 막힘)
console.log(canJump([0]));         // true (이미 마지막)
console.log(canJump([2,0,0]));     // true (0→2 도달)
console.log(canJump([1,0,1,0]));   // false (1→1까지만 가능)
