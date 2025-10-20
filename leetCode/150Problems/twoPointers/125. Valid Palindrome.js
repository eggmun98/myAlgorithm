// 1. 문제와 이해
// 설명: 문자열 s가 주어질 때, 
//       - 대문자를 소문자로 바꾸고
//       - 영문자와 숫자만 남겼을 때
//       앞뒤가 똑같이 읽히면 palindrome(회문)으로 본다.
// 입력: 문자열 s (1 ≤ s.length ≤ 2 * 10^5)
// 출력: boolean (true/false)
// 조건:
//   - 대소문자 구분하지 않음
//   - 영숫자(문자+숫자) 외 문자는 모두 제거
// 유형: 문자열 처리 / 투 포인터 / 전처리

// 2. 계획
// step 1: 모든 문자를 소문자로 변환
// step 2: 영문자(a-z)와 숫자(0-9)만 필터링 (정규식 or 조건문)
// step 3: 투 포인터(left, right)를 사용해 비교
//   - s[left] !== s[right] → false
//   - left++, right-- 반복
// step 4: 끝까지 통과하면 true 반환

// 3. 풀이
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "")
    let left = 0;
    let right = s.length - 1;
    while(left < right) {
        if(s[left] === s[right]) {
        left++
        right--
        } else {
            return false
        }
        
    }
    return true

    
};

// 4. 테스트 케이스
isPalindrome("A man, a plan, a canal: Panama")
isPalindrome("race a car")