// 문제 설명 - 출처: https://school.programmers.co.kr/learn/courses/30/lessons/12910
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 내 풀이
function solution(arr, divisor) {
  var answer = arr.filter((num) => num % divisor === 0);

  return !answer.length ? [-1] : answer.sort((a, b) => (a > b ? 1 : -1));
}

// 회고
// 이번 문제는 filter 메소드와 정렬 메소드인 sort로 간단하게 풀었다.
// 먼저 필터 메소드를 이용하여 나머지가 0인 값만 answer 변수에 담았다.
// 그리고 리턴문에 삼항연산자를 이용하였다.
// !answer.length 기준으로 0이 라면 -1
// 아니면 answer를 오름차순으로 정렬해서 리턴하였다.
// 그리고 answer.length로 기준을 나눈 이유는
// 빈배열은 falsy값이 아니기 때문에 길이를 기준으로 나누었다.
