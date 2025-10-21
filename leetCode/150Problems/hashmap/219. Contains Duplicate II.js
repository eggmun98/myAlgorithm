// 1. 문제와 이해
// 설명: 정수 배열 nums와 정수 k가 주어졌을 때,
//       동일한 값을 가진 두 원소의 인덱스 차이가 k 이하라면 true를 반환하는 문제.
//
// 입력:
//   nums: 정수 배열 (1 <= nums.length <= 10^5)
//   k: 정수 (0 <= k <= 10^5)
//
// 출력:
//   boolean (조건을 만족하는 인덱스 쌍이 존재하면 true, 아니면 false)
//
// 조건:
//   - 두 인덱스 i, j는 서로 달라야 함 (i ≠ j)
//   - nums[i] === nums[j]
//   - |i - j| <= k
//
// 유형: HashMap / Sliding Window / 배열
//
// 예시:
//   nums = [1,2,3,1], k = 3 → true
//     (nums[0] === nums[3]) && |0 - 3| = 3 <= 3
//
//   nums = [1,0,1,1], k = 1 → true
//     (nums[2] === nums[3]) && |2 - 3| = 1 <= 1
//
//   nums = [1,2,3,1,2,3], k = 2 → false
//     동일한 값은 있지만 모두 간격이 2 초과
//
// 포인트:
//   - 중복 숫자의 최근 인덱스를 기억해야 함
//   - |i - j| <= k 조건을 빠르게 확인하기 위해 HashMap 사용
//   - 각 숫자의 “마지막으로 본 인덱스”를 저장하면서 순회


// 2. 계획
// step 1: 빈 HashMap 생성 (numToIndex)
// step 2: nums를 순회하면서
//         - 현재 숫자가 이미 맵에 존재한다면 (중복 발견)
//           → 현재 인덱스(i) - 이전 인덱스(numToIndex[num]) <= k 확인
//           → 조건 만족 시 true 반환
//         - 만족하지 않으면 현재 인덱스로 갱신 (가장 최근 인덱스 저장)
// step 3: 모든 숫자를 확인했는데 조건을 만족하지 않으면 false 반환
//
// 시간복잡도: O(n)
// 공간복잡도: O(n)

// 3. 풀이
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map()

    for(let i = 0; i<nums.length; i++) {
        if(map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true
        }

        map.set(nums[i], i)
    }


    return false

};

// 4. 테스트 케이스
console.log(containsNearbyDuplicate([1,2,3,1], 3)) // true
console.log(containsNearbyDuplicate([1,0,1,1], 1)) // true
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)) // false