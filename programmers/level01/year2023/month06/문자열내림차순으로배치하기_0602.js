// 문제 설명 - 출처: https://school.programmers.co.kr/learn/courses/30/lessons/12917
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.
// 입출력 예
// s	return
// "Zbcdefg"	"gfedcbZ"

// 내 풀이
function solution(s) {
  var answer = "";
  return s
    .split("")
    .sort((a, b) => (a > b ? -1 : 1))
    .join("");
}

// 다른 사람 풀이
function solution(s) {
  return s.split("").sort().reverse().join("");
}

// 회고
// 전에 비슷한 문제를 풀어를 봐서
// 메소드로 풀어보았다.
// 다른 사람 풀이처럼 풀려다가
// 더 간단하게 풀었다.
