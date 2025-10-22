// 설명:
// 정렬(비내림차순)된 정수 배열 numbers가 주어진다.
// 두 수를 골라서 합이 target이 되도록 해야 한다.
// 단, 같은 원소를 두 번 쓸 수 없으며,
// 인덱스(index1, index2)는 1부터 시작하는 1-indexed 값으로 반환해야 한다.
// 반드시 해답이 하나 존재함이 보장된다.
//
// 입력:
// - numbers: 정렬된 정수 배열 (길이 2 ~ 3*10^4, 값 범위 -1000 ~ 1000)
// - target: 정수 (-1000 ~ 1000)
//
// 출력:
// - [index1, index2]: 두 수의 1-indexed 위치 (index1 < index2)
//
// 조건:
// - 같은 원소를 중복 사용 X
// - 추가 공간 O(1)
// - 배열은 정렬되어 있음
//
// 유형:
// - Two Pointer (left/right)
// - O(n) 시간, O(1) 공간

// 2. 계획
// ✅ 배열이 정렬되어 있으므로 투 포인터로 탐색 가능
// 1) left = 0, right = numbers.length - 1 로 시작
// 2) 두 수의 합 = numbers[left] + numbers[right] 계산
// - 합이 target보다 작으면 → left++ (합을 키워야 함)
// - 합이 target보다 크면 → right-- (합을 줄여야 함)
// - 합이 정확히 target이면 → [left+1, right+1] 반환 (1-indexed)
// 3) 반드시 한 쌍이 존재하므로 루프 안에서 정답을 찾을 수 있다.



// 3. 풀이
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    // target = p1 + p2
  
    let p1 = 0;
    let p2 = numbers.length - 1;
  
    while(p1 < p2) {
  
      let sum = numbers[p1] + numbers[p2]
      if(sum === target) {
          return [p1 + 1, p2 + 1]
      } else if(sum < target){
          // 이미 오름차순으로 정렬되어 있다.
          // 그러므로 합이 타겟보다 작다면은 p1이 문제이므로 p1을 올린다.
          p1++
      } else {
          p2--
      }
      
    }
  };


// 4. 테스트 케이스
twoSum([2, 7, 11, 15], 9)   // [1, 2]
twoSum([2, 3, 4], 6)        // [1, 3]
twoSum([-1, 0], -1)         // [1, 2]