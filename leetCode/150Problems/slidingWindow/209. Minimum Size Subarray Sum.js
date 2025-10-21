// 1. 문제와 이해
// 설명:
// 양의 정수 배열 nums와 양의 정수 target이 주어질 때,
// 부분 배열(subarray)의 합이 target 이상이 되는 것들 중 최소 길이를 구하는 문제.
// 그러한 부분 배열이 없으면 0을 반환한다.
// 입력:
// target: number (1 <= target <= 1e9)
// nums: number[] (길이 1..1e5, 각 원소 1..1e4, 모두 양수)
// 출력:
// number (최소 길이, 없으면 0)
// 조건/특징:
// - 모든 원소가 양수 → 슬라이딩 윈도우로 O(n) 가능 (윈도우 확장/축소가 단조적으로 진행됨)
// 유형: Sliding Window / Two Pointers / Prefix Sum + Binary Search(팔로우업)
//
// 예시:
// target = 7, nums = [2,3,1,2,4,3] → 2 (부분 배열 [4,3])
// target = 4, nums = [1,4,4] → 1
// target = 11, nums = [1,1,1,1,1,1,1,1] → 0
//
// 포인트:
// - 윈도우 [left, right]의 합이 target 이상이 되면, 왼쪽을 당겨가며 최소 길이를 갱신한다.
// - 모든 원소가 양수이기 때문에 합이 커지면 left를 늘리는 전략이 항상 유효(단조성).
// - 팔로우업: Prefix Sum을 만들고, 각 i에 대해 ps[i] - ps[j] >= target를 만족하는 최소 j를 이분 탐색(lower_bound)로 찾으면 O(n log n).

// 2. 계획 (O(n) 슬라이딩 윈도우)
// step 1: left=0, sum=0, ans=Infinity 초기화
// step 2: right를 0..n-1로 순회하며 sum += nums[right]
// step 3: sum >= target인 동안:
// - ans = min(ans, right - left + 1)
// - sum에서 nums[left]를 빼고 left++ (윈도우 축소)
// step 4: ans가 Infinity면 0, 아니면 ans 반환
// 시간복잡도: O(n)
// 공간복잡도: O(1)

// 3. 풀이
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let sum = 0;
    let ans = Infinity;
    
    for(let right = 0; right<nums.length; right++) {
        sum += nums[right]
    
        while(sum >= target) {
            ans = Math.min(ans, right - left + 1)
            sum -= nums[left]
            left++
        }
    
    }
    
    return ans === Infinity ? 0 : ans
        
    };

// 4. 테스트 케이스
console.log(minSubArrayLen(7, [2,3,1,2,4,3])) // 2
console.log(minSubArrayLen(4, [1,4,4])) // 1
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1])) // 0