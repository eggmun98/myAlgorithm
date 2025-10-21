// 1. 문제와 이해
// 설명: 주어진 정수 x가 팰린드롬(회문)인지 판별하는 문제.
// 팰린드롬이란, 숫자를 앞뒤로 읽었을 때 동일한 수를 말함.
// 예: 121 → true, -121 → false, 10 → false
//
// 입력:
//   x: 정수 (-2^31 <= x <= 2^31 - 1)
//
// 출력:
//   boolean (팰린드롬이면 true, 아니면 false)
//
// 조건:
//   - 음수는 무조건 false (맨 앞의 '-' 때문에 대칭 불가)
//   - 숫자를 문자열로 변환하지 않고 풀 수 있으면 더 좋음 (Follow-up)
//
// 유형: Math / Two Pointers / 조건 분기
//
// 예시:
//   x = 121  → true   (왼쪽→오른쪽, 오른쪽→왼쪽 동일)
//   x = -121 → false  ("-121" → "121-")
//   x = 10   → false  ("10" → "01" 다름)
//
// 포인트:
//   - 음수는 바로 false
//   - 0으로 끝나는 수는 0 자체가 아니면 팰린드롬이 될 수 없음
//   - 문자열 변환 없이, 숫자를 뒤집어서 비교하는 방법도 가능


// 2. 계획
// step 1: x가 음수면 바로 false 반환
// step 2: x가 0으로 끝나는데 x가 0이 아니라면 false (예: 10, 100)
// step 3: x의 절반을 뒤집는 방식으로 비교
//         → 뒤집은 수(rev)가 원래 수(x)보다 작아질 때까지 반복
//         → 홀수 자릿수의 경우 rev를 10으로 나눠서 중앙값 제거 후 비교
// step 4: 원래 수와 뒤집은 절반(rev)이 같으면 true, 아니면 false
// 시간복잡도: O(log₁₀(n)) (자릿수 길이만큼 반복)
// 공간복잡도: O(1)

// 3. 풀이
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    // 음수일 경우 false 반환
    if(x < 0 || (x % 10 === 0 && x !== 0)) {
        return false
    }

    let reverseHalf = 0;
    

    while (reverseHalf < x)  {
        let lastDigit = x % 10;
        reverseHalf = reverseHalf * 10 + lastDigit
        x = Math.floor(x / 10)
    }


    return  x === reverseHalf || x === Math.floor(reverseHalf / 10)


};

// 4. 테스트 케이스
console.log(isPalindrome(121)) // true
console.log(isPalindrome(-121)) // false
console.log(isPalindrome(10)) // false