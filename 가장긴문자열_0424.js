// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(3<=N<=30)
// 두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다. 각 문자열의 길이는 서로 다릅니다.
// ▣ 출력설명
// 첫 줄에 가장 긴 문자열을 출력한다.
// ▣ 입력예제 1 5
// teacher
// time
// student beautiful good
// ▣ 출력예제 1 beautiful

// 내 풀이
const str = ["teacher", "time", "student", "beautiful", "good"];
const myFn = (str) => {
  let answer = str[0];
  for (let i = 1; i < str.length; i++) {
    if (answer.length < str[i].length) {
      answer = str[i];
    }
  }
  return answer;
};
myFn(str);

// 다른 사람 풀이
function solution(s) {
  let answer = "",
    max = Number.MIN_SAFE_INTEGER;
  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}

// 배운 점
// MIN_SAFE_INTEGER 메서드와 MAX_SAFE_INTEGER 메서드를 잊고 있었다.
// 이 메서드를 이용하는 방법을 알게 되었다.
