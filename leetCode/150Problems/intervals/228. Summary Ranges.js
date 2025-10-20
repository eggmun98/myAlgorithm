// 1. 문제와 이해
// 설명: 정렬된 중복 없는 정수 배열 nums가 주어졌을 때,
//       연속된 수들을 하나의 구간(range)으로 묶어 문자열 형태로 반환하는 문제.
//       각 구간은 "a->b" 또는 단일 값 "a" 형태로 출력해야 한다.
// 입력:
//   nums: 정렬된 정수 배열 (중복 없음)
// 출력:
//   문자열 배열
//   - "a->b"  → a부터 b까지 연속된 구간
//   - "a"     → 단일 숫자
// 조건:
//   0 <= nums.length <= 20
//   -2^31 <= nums[i] <= 2^31 - 1
//   nums는 오름차순 정렬되어 있고, 중복 없음
// 유형: Intervals (연속 구간 처리) / 배열 / 문자열

// 예시:
//   nums = [0,1,2,4,5,7]
//   출력 = ["0->2","4->5","7"]
//   설명: [0,2], [4,5], [7] 구간으로 나뉨

//   nums = [0,2,3,4,6,8,9]
//   출력 = ["0","2->4","6","8->9"]
//   설명: [0], [2,4], [6], [8,9] 구간으로 나뉨


// 2. 계획
// step 1: 빈 배열일 경우 빈 리스트 반환
// step 2: start 변수에 첫 숫자(nums[0]) 저장
// step 3: 배열을 순회하면서
//         - 현재 숫자가 이전 숫자 + 1이면 연속된 구간
//         - 아니면 이전 구간을 result에 추가하고 start 갱신
// step 4: 마지막 구간은 루프 이후에 처리
// step 5: 결과 반환
// 시간복잡도: O(n) (한 번 순회)
// 공간복잡도: O(1) (결과 제외)


// 3. 풀이
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const result = [];
    if (nums.length === 0) return result;
  
    let start = nums[0]; // 현재 구간의 시작점
  
    for (let i = 1; i <= nums.length; i++) {
      // 1) 연속이 끊기거나 배열 끝에 도달하면
      if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
        const end = nums[i - 1];
        // 2) start와 end가 같으면 단일 숫자, 다르면 "start->end"
        result.push(start === end ? `${start}` : `${start}->${end}`);
        // 3) 새로운 구간 시작
        start = nums[i];
      }
    }
  
    return result;
  };
  
  
  // 4. 테스트 케이스
  console.log(summaryRanges([0,1,2,4,5,7]));  // ["0->2","4->5","7"]
  console.log(summaryRanges([0,2,3,4,6,8,9])); // ["0","2->4","6","8->9"]
  console.log(summaryRanges([]));              // []
  console.log(summaryRanges([1]));             // ["1"]