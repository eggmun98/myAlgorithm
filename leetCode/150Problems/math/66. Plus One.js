// 1. 문제와 이해
// 설명: 숫자를 각 자리별로 쪼갠 배열이 주어졌을 때,
//        해당 숫자에 +1을 한 결과를 배열로 반환하는 문제.
// 예: [1,2,3] → 123 + 1 = 124 → [1,2,4]
//
// 입력:
//   digits: 정수 배열 (각 요소는 0~9 사이 숫자)
//
// 출력:
//   정수 배열 (각 자리는 +1 한 결과)
//
// 조건:
//   - digits는 0으로 시작하지 않는다.
//   - 9일 경우 올림(carry)이 발생할 수 있다.
//   - 배열 길이는 1~100
//
// 유형: Array / Simulation / Math
//
// 예시:
//   digits = [1,2,3] → [1,2,4]
//   digits = [4,3,2,1] → [4,3,2,2]
//   digits = [9] → [1,0]
//   digits = [9,9,9] → [1,0,0,0]
//
// 포인트:
//   - 오른쪽(마지막 자리)부터 +1 시작
//   - 10이 되면 0으로 바꾸고 carry를 왼쪽으로 넘김
//   - 모든 자리가 9라면 맨 앞에 1을 추가해야 함 (예: [9,9,9] → [1,0,0,0])


// 2. 계획
// step 1: 오른쪽 끝자리부터 +1
// step 2: digits[i] < 10이면 그대로 반환 (carry 없음)
// step 3: digits[i] === 10이면 0으로 만들고 carry를 왼쪽으로 이동
// step 4: 모든 자리를 다 돌았는데 carry가 남으면 맨 앞에 1 추가
// 시간복잡도: O(n) (한 번 순회)
// 공간복잡도: O(1) (입력 배열 내부 수정)


// 3. 풀이
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += 1;

        // carry 없이 끝나는 경우
        if (digits[i] < 10) {
            return digits;
        }

        // carry 발생
        digits[i] = 0;
    }

    // 모든 자리가 9였던 경우 (carry가 맨 앞자리로)
    digits.unshift(1);
    return digits;
};


// 4. 테스트 케이스
console.log(plusOne([1,2,3])); // [1,2,4]
console.log(plusOne([4,3,2,1])); // [4,3,2,2]
console.log(plusOne([9])); // [1,0]
console.log(plusOne([9,9,9])); // [1,0,0,0]
