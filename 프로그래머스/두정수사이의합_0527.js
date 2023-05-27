// 문제 설명
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
// 제한 조건
// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
// a와 b의 대소관계는 정해져있지 않습니다.
// 입출력 예
// a	b	return
// 3	5	12
// 3	3	3
// 5	3	12

// 내 풀이
function solution(a, b) {
  var answer = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  }
  return answer;
}

// 다른 사람 풀이
function adder(a, b, s = 0) {
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}

// 회고
// 오늘 피그마 스터디를 들어서 쉬운 문제를 찾아 풀었다.
// 다른 사람 풀이를 보니 if문 없이 for문 하나만으로 작성한게 놀랐다.
// 나는 if문으로 구분을 해서 코드를 작성했었다.
// 다른 사람 코드처럼 코드를 줄이는 법을 연구해야겠다.
