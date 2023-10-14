// 문제 설명 - 출처: https://school.programmers.co.kr/learn/courses/30/lessons/12944
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

// 오늘 푼 내 풀이
function solution(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

// 옛날 내 풀이
function solution(arr) {
  var answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer / arr.length;
}

// 회고
// 이 문제는 예전에 풀었던 문제이다.
// 그래서 다른 방식으로 풀어보았다.
// 예전에는 반복문으로 하나하나 더해서 나누었는데
// 오늘 푼 풀이는 reduce라는 메서드를 이용하여 한줄로 풀었다.
