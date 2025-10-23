// 1. 문제와 이해
// 설명:
// 정렬된 배열 nums와 정수 target이 주어진다.
// - 만약 target이 nums 안에 존재하면 그 인덱스를 반환한다.
// - 존재하지 않으면, 정렬 순서를 유지한 채 삽입할 위치의 인덱스를 반환해야 한다.
// 즉, nums가 항상 오름차순으로 정렬되어 있으므로,
// target이 들어가야 하는 정확한 자리(왼쪽보다 크고, 오른쪽보다 작거나 같은 위치)를 찾아야 한다.
//
// 요구사항:
// - 알고리즘의 시간 복잡도는 O(log n) 이어야 한다 → 즉, 이진 탐색(binary search) 을 사용해야 한다.
//
// 입력:
// - nums: 오름차순 정렬된 정수 배열 (중복 없음)
// - target: 찾을 값
// 출력:
// - 정수 (target의 인덱스 혹은 삽입할 인덱스)
//
// 조건:
// - 1 <= nums.length <= 10⁴
// - -10⁴ <= nums[i], target <= 10⁴
// - nums는 정렬되어 있고, 중복되지 않음
// 유형: Binary Search / Array
//
// 예시:
// nums = [1,3,5,6], target = 5 → Output: 2
// nums = [1,3,5,6], target = 2 → Output: 1
// nums = [1,3,5,6], target = 7 → Output: 4
// nums = [1,3,5,6], target = 0 → Output: 0
//
// 포인트:
// - 배열이 정렬되어 있으므로 단순 순회(O(n)) 대신 이진 탐색(O(log n))으로 찾는다.
// - target == nums[mid] → mid 반환
// - target < nums[mid] → 오른쪽 경계(right)를 mid - 1로 이동
// - target > nums[mid] → 왼쪽 경계(left)를 mid + 1로 이동
// - 탐색이 끝났을 때의 left는 삽입 가능한 최소 위치가 된다.

// 2. 계획
// step 1: left = 0, right = nums.length - 1 초기화
// step 2: while(left <= right) 반복
// - mid = Math.floor((left + right) / 2)
// - if(nums[mid] === target) → mid 반환
// - else if(nums[mid] < target) → left = mid + 1
// - else → right = mid - 1
// step 3: 루프가 끝나면 left 반환 (삽입 위치)
// 시간복잡도: O(log n)
// 공간복잡도: O(1)

// 3. 풀이
/**

@param {number[]} nums

@param {number} target

@return {number}
*/
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
      return mid;                // target 찾음
    } else if (nums[mid] < target) {
      left = mid + 1;            // 오른쪽 탐색
    } else {
      right = mid - 1;           // 왼쪽 탐색
    }
    
    
    }
    
    return left; // target이 없을 경우 삽입 위치
    };
    
    // 4. 테스트 케이스
    console.log(searchInsert([1,3,5,6], 5)); // 2
    console.log(searchInsert([1,3,5,6], 2)); // 1
    console.log(searchInsert([1,3,5,6], 7)); // 4
    console.log(searchInsert([1,3,5,6], 0)); // 0