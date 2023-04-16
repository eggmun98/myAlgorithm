// 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
// 문자열의 길이는 100을 넘지 않습니다.
// ▣ 입력설명
// 첫 줄에 문자열이 주어지고, 두 번째 줄에 문자가 주어진다.
// ▣ 출력설명
// 첫 줄에 해당 문자의 개수를 출력한다.
// ▣ 입력예제 1 COMPUTERPROGRAMMING R
// ▣ 출력예제 1 3

// 내 풀이
const myFn = (str, find) => {
  let count = 0;
  for (let x of str) {
    if (x === find) {
      count++;
    }
  }
  return count;
};
myFn("COMPUTERPROGRAMMING", "R");

// 다른 사람 풀이
function solution(s, t) {
  let answer = 0;
  for (let x of s) {
    if (x === t) answer++;
  }
  return answer;
}

// 배운 점
// for of문을 안써봐서 처음으로 써봤다.
// 다른 사람 풀이도 나랑 같아서 배운건 없다.
