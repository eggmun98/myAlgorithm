// 1. 문제와 이해
// 설명: 정수 배열 nums와 정수 target이 주어졌을 때,
//       두 수의 합이 target이 되는 인덱스 쌍을 반환하는 문제.
//       각 입력에는 정답이 하나만 존재하며, 같은 원소를 두 번 사용할 수 없다.
//
// 입력:
//   nums: 정수 배열 (2 <= nums.length <= 10^4)
//   target: 정수 (-10^9 <= target <= 10^9)
//
// 출력:
//   [i, j]: 두 수의 인덱스 배열 (순서는 상관 없음)
//
// 조건:
//   - nums[i] + nums[j] == target
//   - 정답은 반드시 하나 존재
//
// 유형: HashMap / Array / Brute Force
//
// 예시:
//   nums = [2,7,11,15], target = 9 → [0,1]
//   nums = [3,2,4], target = 6 → [1,2]
//   nums = [3,3], target = 6 → [0,1]
//
// 포인트:
//   - 단순 이중 반복문(O(n^2))은 비효율적
//   - HashMap(값 → 인덱스)을 이용하면 O(n)에 해결 가능


// 2. 계획
// step 1: 빈 Map 생성 (숫자값을 key, 인덱스를 value로 저장)
// step 2: nums를 순회하면서
//         - 필요한 값(complement = target - nums[i])이 Map에 있으면 정답 반환
//         - 없으면 현재 값과 인덱스를 Map에 저장
// step 3: 정답이 하나만 존재하므로, 찾자마자 즉시 반환
// 시간복잡도: O(n)
// 공간복잡도: O(n)

// 3. 풀이
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = new Map()

    for(let i = 0; i<nums.length; i++) {
 
        const complement = target - nums[i]

        if(hash.has(complement)) {
            return [hash.get(complement), i]
        }

        hash.set(nums[i], i)
    }

};

// 4. 테스트 케이스
console.log(twoSum([2,7,11,15], 9)) // [0,1]
console.log(twoSum([3,2,4], 6)) // [1,2]
console.log(twoSum([3,3], 6)) // [0,1]