// 1. 문제와 이해

// 설명:
// 정수 배열 nums와 정수 val이 주어진다.
// 배열 안에서 val과 같은 모든 원소를 제거하고,
// 남은 원소 개수 k를 반환해야 한다.
// 단, in-place (새 배열 생성 X) 로 처리해야 한다.

// 입력:
// nums = [3, 2, 2, 3], val = 3

// 출력:
// k = 2, 배열의 처음 두 원소는 [2, 2]
// (그 뒤에 어떤 값이 오든 상관없음)

// 조건:
// 0 ≤ nums.length ≤ 100
// 0 ≤ nums[i] ≤ 50
// 0 ≤ val ≤ 100
// 순서 유지할 필요 없음 (단, 제거는 제자리에서)

// 유형:
// 🧭 Two Pointer (in-place overwrite pattern)

// 2. 계획
// 정렬된 배열에서 중복을 제거해야 하므로, 투 포인터(two pointer) 방식을 사용한다.
// p1(읽기 포인터)은 배열을 순회하면서 현재 값을 읽는다.
// p2(쓰기 포인터)는 고유한 값을 쓸 위치를 가리킨다.
// 처음에는 p1=1, p2=0에서 시작한다. (첫 번째 값은 이미 고유하므로)
// p1이 배열 끝에 도달할 때까지 다음을 반복한다:
//   - nums[p1]이 nums[p2]와 다르면 → 새 고유값 발견
//     → p2를 1 증가시키고, nums[p2] = nums[p1]로 덮어쓴다.
//   - nums[p1]이 nums[p2]와 같으면 → 중복이므로 넘어간다.
// p1이 배열 길이에 도달하면 반복을 종료한다.
// 최종적으로 p2 + 1이 고유값의 개수(k)가 된다.


// 3. 풀이
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let p1 = 0;
    let p2 = 0;

    while(p1 < nums.length) {
        if(nums[p1] !== val) {
            nums[p2] = nums[p1];
            p2++
        }
        p1++

    }

    return p2
};

// 4. 테스트 케이스
removeElement([3, 2, 2, 3], 3)
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)