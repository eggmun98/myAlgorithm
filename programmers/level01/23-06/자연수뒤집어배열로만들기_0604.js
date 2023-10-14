// 문제 설명 - 출처: https://school.programmers.co.kr/learn/courses/30/lessons/12932
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.
// 입출력 예
// n	return
// 12345	[5,4,3,2,1]

// 내 풀이
function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((el) => Number(el));
}

// 회고
// 내가 많이 다뤄본 메소드로 풀어보았다.
// 먼저 n을 문자열로 만들었다.
// 그리고 split으로 배열을 만들었다.
// 리버스로 그 배열을 뒤집었다.
// 그리고 다시 맵으로 숫자형식 배열로 만들었다.
