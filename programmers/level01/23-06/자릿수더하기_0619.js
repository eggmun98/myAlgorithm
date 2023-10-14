// 문제 설명 - 출처: https://school.programmers.co.kr/learn/courses/30/lessons/12931
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
// 제한사항
// N의 범위 : 100,000,000 이하의 자연수

// 내 풀이
function solution(n) {
  return String(n)
    .split("")
    .reduce((acc, cur) => {
      return acc + Number(cur);
    }, 0);
}
// 회고
// reduce 메소드 사용에 익숙해지기 위해
// reduce 메소드를 이용하였다.
// 먼저 n을 문자열로 바꿨다.
// 그리고 split을 이용하여 배열을 만들었다.
// 그 다음에는 reduce를 이용하여
// 배열의 모든 합을 구했다.
