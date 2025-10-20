// 1. 문제와 이해
// 설명: 정렬(비내림차순)된 정수 배열 nums에서 중복을 제거하여
//       각 고유 값이 한 번만 나타나도록 nums의 앞쪽에 in-place로 압축하고,
//       고유 값의 개수 k를 반환한다. 뒤쪽 요소는 무엇이든 무시된다.
// 입력: 정렬된 정수 배열 nums (길이 1..3*10^4, 값 범위 [-100,100])
// 출력: 정수 k (고유 값 개수), 그리고 nums[0..k-1]에 정렬된 고유 값
// 조건: in-place (추가 배열 X), 상대적 순서 유지, O(1) 추가 공간
// 유형: Two Pointer (fast/slow, in-place overwrite)

// 2. 계획
// - 정렬되어 있어 중복은 연속으로 나타난다.
// - slow: 마지막으로 확정한 고유 값의 위치
// - fast: 배열을 순회하며 새 고유 값을 찾는 인덱스
// - 초기 slow=0, fast=1. fast가 끝까지 갈 때까지:
//     * nums[fast] != nums[slow] 면 새 고유값 발견:
//         slow++ 하고 nums[slow] = nums[fast] 로 덮어쓴다.
// - 종료 후 k = slow + 1 을 반환한다.

// 3. 풀이
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let write = 0;
    for(let read = 1; read<nums.length; read++) {

        // 1. 읽기 포인터와 쓰기포인터의 값이 다를 경우
        // -> nums[쓰기] = nums[읽기]
        // -> 즉 앞으로 땡긴다.
        if(nums[read] !== nums[write]) {
            write++;  // 어짜피 이미 write는 초기값이 고유하니까 write를 +1 해준다 
            nums[write] = nums[read]
        }
    }
    return write + 1 // 고유의 값은 최소 1개 이상이니까
    // 또한 nums.length의 최소값이 1이상이니까 nums.length가 0일 경우를 신경 쓸 필요 없으므로
    
};

// 4. 테스트 케이스
removeDuplicates([1,1,2])
removeDuplicates([0,0,1,1,1,2,2,3,3,4])