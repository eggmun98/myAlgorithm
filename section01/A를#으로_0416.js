// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 문자열이 입력된다.
// ▣ 출력설명
// 첫 번째 줄에 바뀐 단어를 출력한다.
// ▣ 입력예제 1 BANANA
// ▣ 출력예제 1 B#N#N#

// 내 풀이
const str = "BANANA";
const myFn = (str) => {
  return (str = str.replaceAll("A", "#"));
};
myFn(str);

// 다른 사람 풀이
function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x == "A") answer += "#";
    else answer += x;
  }
  return answer;
}

// 배운 점
// for of문으로 풀수 있다는 것을 알게 됨
