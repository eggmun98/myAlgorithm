// 출처: https://school.programmers.co.kr/learn/courses/30/lessons/12939?language=javascript
// 문제 설명
// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
// 예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

// 제한 조건
// s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
// 입출력 예
// s	return
// "1 2 3 4"	"1 4"
// "-1 -2 -3 -4"	"-4 -1"
// "-1 -1"	"-1 -1"

// 내 풀이
const myFn = (s) => {
  const answer = s.split(" ").map((el) => Number(el));
  let sum = "";
  sum += Math.min(...answer) + " ";
  sum += Math.max(...answer);

  return sum;
};

myFn("1 2 3 4");
myFn("-1 -2 -3 -4");
myFn("-1 -1");

// 다른 사람 풀이
function solution(s) {
  const arr = s.split(" ");

  return Math.min(...arr) + " " + Math.max(...arr);
}

// 회고
// 처음으로 프로그래머스 2레벨 문제를 풀어봤다.
// 지금까지 1레벨 문제만 풀어봐서 2레벨 문제는 무서웠는데 생각보다 쉬운 문제였다.
// 근데 나는 반복문은 돌려서 푼거라서 다른 사람 풀이보다 안좋다고 생각한다.
// 그리고 다른 사람 풀이를 보고 하나 알게 된 사실이 있다.
// Math.max와 Math.min 메소드는 문자열로 매개변수를 넣을 시
// 숫자형으로 바꿔서 계산을 해준다.
// 오늘도 또 다른 지식을 알게 되었다!
