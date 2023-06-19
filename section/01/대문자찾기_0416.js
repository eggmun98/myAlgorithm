// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램 을 작성하세요.
// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄에 대문자의 개수를 출력한다.
// ▣ 입력예제 1 KoreaTimeGood
// ▣ 출력예제 1 3

// 내 풀이
const myFn = (str) => {
  let count = 0;
  for (x of str) {
    if (x.toUpperCase() === x) {
      count++;
    }
  }
  return count;
};
myFn("KoreaTimeGood");

// 다른 사람 풀이
function solution(s) {
  let answer = 0;
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 65 && num <= 90) answer++;
  }
  return answer;
}

// 배운 점
// 아스키 코드로도 풀수 있다는 것을 알게 됨
