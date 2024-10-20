// 문제 설명 - 출처: https://school.programmers.co.kr/learn/courses/30/lessons/70128
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.
// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)
// 제한사항
// a, b의 길이는 1 이상 1,000 이하입니다.
// a, b의 모든 수는 -1,000 이상 1,000 이하입니다.
// 입출력 예
// a	b	result
// [1,2,3,4]	[-3,-1,0,2]	3
// [-1,0,1]	[1,0,-1]	-2

// 내 풀이
function solution(a, b) {
  var answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer = a[i] * b[i] + answer;
  }
  return answer;
}

// 다른 사람 풀이
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}

// 회고
// 기계공학과 시절 많이 풀어본 벡터 문제라서 바로 풀었다.
// 평소에 알고 있었던 공식이라서 기억을 하면서 풀었다.
// 일단 다른 사람 풀이를 보니 reduce 메소드로 간단하게 풀었다.
// 나도 reduce 메소드를 응용할줄 알아야 겠다.
