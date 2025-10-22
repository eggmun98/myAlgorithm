// 1. 문제와 이해
// 설명: 정렬(비내림차순)된 정수 배열 nums에서 중복을 제거하여
//       각 고유 값이 **최대 두 번까지만** 나타나도록 nums의 앞쪽에 in-place로 압축하고,
//       고유 값의 개수 k를 반환한다. 뒤쪽 요소는 무엇이든 무시된다.
// 입력: 정렬된 정수 배열 nums (길이 1..3*10^4, 값 범위 [-10^4,10^4])
// 출력: 정수 k (고유 값 개수), 그리고 nums[0..k-1]에 중복이 최대 두 번까지만 유지된 배열
// 조건: in-place (추가 배열 X), 상대적 순서 유지, O(1) 추가 공간
// 유형: Two Pointer (read/write, in-place overwrite, frequency limit)

// 2. 계획
// - 정렬되어 있어 중복은 연속으로 나타난다.
// - writeIndex: 다음에 쓸 위치
// - readIndex: 배열을 순회하면서 현재 값을 읽는 인덱스
// - 규칙:
//     * 처음 두 개의 값은 무조건 허용 (중복 허용 한도 2개)
//     * 이후부터는 nums[readIndex] !== nums[writeIndex - 2]일 때만 허용
// - 이유: writeIndex - 2 위치의 값과 동일하다면 이미 두 번 등장한 상태이므로 건너뛴다.
// - 종료 후 k = writeIndex 반환

// 3. 풀이
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let write = 0;

    for(let read = 0; read<nums.length; read++) {

        // 처음에 두개의 값은 허용해야 한다. 즉 write가 2이상일 경우 부터 조건식을 진행한다.
        // 
        // 1 
        if(write < 2 || nums[read] !== nums[write - 2]) {
            nums[write] = nums[read]
            write++
        }


    }

    return write 

};

// 4. 테스트 케이스
removeDuplicates([1,1,1,2,2,3]) // [1,1,2,2,3]
removeDuplicates([0,0,1,1,1,1,2,3,3]) // [0,0,1,1,2,3,3]
removeDuplicates([1])