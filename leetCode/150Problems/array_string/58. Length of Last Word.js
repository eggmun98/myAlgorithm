// 1. 문제와 이해
// 설명: 공백과 단어로 이루어진 문자열 s가 주어진다. 마지막 단어의 길이를 반환한다.
//       단어는 공백이 아닌 문자들로 이루어진 최대 부분 문자열.
// 입력: 문자열 s (1 ≤ s.length ≤ 10^4, 영문자와 공백만)
// 출력: 마지막 단어의 길이 (정수)
// 조건: 문자열에 최소 1개의 단어 존재 (앞/중/뒤에 공백 존재 가능)
// 유형: 문자열 처리 / 역방향 스캔(two-pointer)

// 2. 계획
// A안(간단): trim()으로 양끝 공백 제거 → split(/\s+/) → 마지막 토큰 길이.
//   - 간단하지만 split이 배열을 만들어 O(n) 추가 공간.
// B안(권장): O(1) 공간 역방향 스캔
//   - i를 맨 끝에서 시작
//   - 뒤쪽 연속 공백을 먼저 건너뛴다
//   - 공백이 아닌 문자를 만나면 카운트 시작, 다시 공백 만나면 종료
//   - 한 번만 순회: O(n) 시간, O(1) 공간

// 3. 풀이1
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const parts = s.trim().split(" ")
      return parts[parts.length - 1].length
  };

// 3. 풀이2
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    i = s.length - 1

    while(i >= 0 && s[i] === " ") {
        i--
    }

    let result = 0;
    while(i >= 0 &&  s[i] !== " ") {
        result++
        i--
    }

    return result
};

// 4. 테스트 케이스
lengthOfLastWord("Hello World")
lengthOfLastWord("   fly me   to   the moon  ")
lengthOfLastWord("luffy is still joyboy")