// 출처 https://school.programmers.co.kr/learn/courses/30/lessons/12911

// 문제 설명
// 자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.
// 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
// 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
// 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
// 예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.
// 자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.
// 제한 사항
// n은 1,000,000 이하의 자연수 입니다.
// 입출력 예
// n	result
// 78	83
// 15	23
// 입출력 예 설명
// 입출력 예#1
// 문제 예시와 같습니다.
// 입출력 예#2
// 15(1111)의 다음 큰 숫자는 23(10111)입니다.

// 내 풀이
function solution(n) {
  const countFn = (num) => {
    let count = 0;

    num = num.toString(2);
    for (x of num) {
      if (x === "1") {
        count++;
      }
    }
    return count;
  };

  const targetCount = countFn(n);
  let nextCount = n + 1;

  while (countFn(nextCount) !== targetCount) {
    nextCount++;
  }
  return nextCount;
}

// 다른 사람 풀이
function nextBigNumber(n) {
  var size = n.toString(2).match(/1/g).length;
  while (n++) {
    if (size === n.toString(2).match(/1/g).length) return n;
  }
}

// 회고
// 이번 문제는 시간 복잡도 때문에 많이 힘들었던 문제이다.
// 내 코드의 풀이는 countFn이라는 함수를 만들어 1의 갯수를 리턴하도록 하였다.
// 그리고 targetCount 변수에 주어진 입력값의 1의 갯수를 저장하였다.
// nextCount는 n보다 커야 하므로 +1을 해주었다.
// 그리고 while문을 이용하여 1의 갯수가 다르면 계속 nextCount 값이 증가하도록 하였다.
// 즉 값이 갑다면 반복문이 즉시 종료되어 return 하게 된다
// 다른 사람 풀이는 메소드로 인해 간단하게 풀었다.
// match 메소드를 이용하여 1의 갯수를 셌다.
// 그리고 조건에 맞는 경우에만 리턴하도록 하였다.
// 다른 사람 풀이를 보고 while문의 이해도가 낮았구나 싶었다.
// while문에도 증감식을 적을 수 있었다니... 처음 알았다.
// 앞으로 while문을 이용하여 다른 문제도 풀수 있을거 같다.
