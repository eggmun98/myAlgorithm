// 약수의 개수와 덧셈 - 출처: https://school.programmers.co.kr/learn/courses/30/lessons/77884
// 문제 설명
// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
// 제한사항
// 1 ≤ left ≤ right ≤ 1,000
// 입출력 예
// left	right	result
// 13	17	43
// 24	27	52

// 내 풀이
function solution(left, right) {
  const divisorFn = (num) => {
    let count = 1;
    for (let i = 1; i < num; i++) {
      if (!(num % i)) {
        count++;
      }
    }
    return count;
  };

  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (!(divisorFn(i) % 2)) {
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}

// 다른 사람 풀이
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

// 내 풀이2
function solution(left, right) {
  const divisorFn = (num) => {
    let count = 1;
    for (let i = 1; i < num; i++) !(num % i) && count++;
    return count;
  };

  let answer = 0;
  for (let i = left; i <= right; i++)
    !(divisorFn(i) % 2) ? (answer += i) : (answer -= i);
  return answer;
}

// 회고
// 나는 이번 문제를 풀기 위해 약수의 갯수를 구하는 함수를 만들었다.
// 그리고 그 함수를 또 다시 반복문을 돌려서 값을 비교하여
// 최종값을 리턴하였다.
// 다른 사람 코드는 제곱근 값이 정수면 약수가 홀수라는 특징을 알고 있었다.
// 그것을 가지고 간단하게 풀었다.
// 오늘은 제곱근 값이 정수면 약수의 갯수가 홀수라는 것을 배워 유익한 시간이였다.
