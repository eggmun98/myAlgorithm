// 1. 문제와 이해
// 설명: 길이 n 배열 nums에서 ⌊n/2⌋ 번보다 "많이" 등장하는 다수 원소를 반환한다.
//       문제에서 다수 원소가 "반드시 존재"한다고 가정한다.
// 입력: 정수 배열 nums (1 ≤ n ≤ 5*10^4)
// 출력: 정수 하나 (다수 원소)
// 조건: 항상 존재. 값 범위는 넓음(해시 가능). 
// 유형: Boyer–Moore Majority Vote (선형 시간, O(1) 공간)

// 2. 계획
// [핵심 아이디어 - Boyer–Moore]
// - 다수 원소는 총표 대 결손표 관점에서 "최후에 살아남는 후보"가 된다.
// - 후보(candidate)와 카운트(count)를 유지하며 한 번 순회:
//   * count가 0이면 현재 값을 후보로 세팅
//   * 현재 값이 후보와 같으면 count++, 다르면 count--
// - 다수 원소 존재가 보장되므로, 순회 후 후보가 정답.
// - 시간 O(n), 공간 O(1)

// 3. 풀이
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let candidate = null;

    for (x of nums) {
        if(count === 0) {
            candidate = x
            count = 1;
        } else if(candidate === x) {
            count++;
        } else {
            count--;
        }
    }

    return candidate
};

// 4. 테스트 케이스
majorityElement([3, 2, 3])
majorityElement([2, 2, 1, 1, 1, 2, 2])