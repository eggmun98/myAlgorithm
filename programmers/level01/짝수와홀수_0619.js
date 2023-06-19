// 문제 설명 - 출처: https://school.programmers.co.kr/learn/courses/30/lessons/12937
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.

// 내 풀이
function solution(num) {
  return !(num % 2 === 0) ? "Odd" : "Even";
}

// 회고
// 이번 문제는 쉬운 문제여서 삼항연산자로 풀었다.
// 실제 프로젝트에서는 삼항연산자를 자주 사용했는데
// 알고리즘 문제를 풀때는 자주 사용하지 않고 있다.
// 그래서 자주 사용하는 연습을 하고 있다.
