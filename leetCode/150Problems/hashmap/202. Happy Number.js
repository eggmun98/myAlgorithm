// 1. 문제와 이해
// 설명: 주어진 양의 정수 n이 '행복한 수(happy number)'인지 판별하는 문제.
// 행복한 수는 각 자리의 숫자를 제곱해 더하는 과정을 반복했을 때,
// 결국 1이 되는 수를 의미한다.
// 만약 1이 되지 않고 동일한 숫자 패턴이 반복된다면(사이클 발생) → false.
//
// 입력:
//   n: 양의 정수 (1 <= n <= 2^31 - 1)
//
// 출력:
//   boolean (행복한 수면 true, 아니면 false)
//
// 조건:
//   - 각 자리수를 제곱해 더하는 과정을 반복
//   - 1이 나오면 종료(true)
//   - 이전에 나왔던 숫자가 다시 나오면 사이클이므로 종료(false)
//
// 유형: HashSet / Math / Simulation
//
// 예시:
//   n = 19 → true
//     1² + 9² = 82
//     8² + 2² = 68
//     6² + 8² = 100
//     1² + 0² + 0² = 1  ✅
//
//   n = 2 → false
//     2² = 4
//     4² = 16
//     1² + 6² = 37
//     3² + 7² = 58
//     5² + 8² = 89
//     8² + 9² = 145
//     1² + 4² + 5² = 42
//     4² + 2² = 20
//     2² + 0² = 4  🔁 (반복 발생 → false)
//
// 포인트:
//   - 중복된 숫자가 다시 등장하면 무한 루프에 빠진 것
//   - 이를 탐지하기 위해 Set을 사용
//   - 각 단계에서 자리수를 분리하여 제곱 후 합산


// 2. 계획
// step 1: Set을 생성해 이미 등장한 숫자를 기록
// step 2: n이 1이 될 때까지 반복
//         - n이 Set에 이미 있다면 → 사이클 발생 → false
//         - n을 Set에 추가
//         - n의 각 자리 숫자의 제곱 합으로 n 갱신
// step 3: n === 1이면 true 반환
// 시간복잡도: O(log n) ~ O(k), (k는 사이클 길이)
// 공간복잡도: O(k)


// 3. 풀이
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = new Set();

    // 각 자리 제곱합을 구하는 헬퍼 함수
    const getNext = (num) => {
        let sum = 0;
        while (num > 0) {
            let digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    };

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getNext(n);
    }

    return n === 1;
};


// 4. 테스트 케이스
console.log(isHappy(19)); // true
console.log(isHappy(2));  // false
console.log(isHappy(7));  // true (7 → 49 → 97 → 130 → 10 → 1)
console.log(isHappy(1111111)); // true
