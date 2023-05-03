// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
// 문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을 작성하세요.
// 단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다. 알파벳 이외의 문자들의 무시합니다.
// ▣ 입력설명
// 첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.
// ▣ 출력설명
// 첫 번째 줄에 팰린드롬인지의 결과를 YES 또는 NO로 출력합니다.
// ▣ 입력예제 1
// found7, time: study; Yduts; emit, 7Dnuof
// ▣ 출력예제 1 YES

// 내 풀이 1번
const myFn = (str) => {
  str = str
    .toUpperCase()
    .split("")
    .filter((el) => el !== " " && el !== ";" && el !== ":" && el !== ",")
    .join("");
  let answer = str.split("").reverse().join("");
  if (answer === str) return "YES";
  return "NO";
};

myFn("found7, time: study; Yduts; emit, 7Dnuof");

// 내 풀이 2번
const myFn2 = (str) => {
  str = str.toUpperCase().replace(/\:|\;|\,|\ /g, "");
  let answer = str.split("").reverse().join("");
  if (answer === str) return "YES";
  return "NO";
};

myFn2("found7, time: study; Yduts; emit, 7Dnuof");

// 다른 사람 풀이
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
}

// 회고
// 일단 나는 첫 번째 풀이에는 메서드를 7번이나 사용하였다. 너무 비효율적인거 같아서 메서드를 줄이는 방향으로 갔다
// 두번째 풀이에서 replace를 사용하여 메서드 사용을 줄였다.
// 다른 사람 풀이에는 replace 메서드를 더 짧게 간단하게 사용하였다.
// 정규식 공부를 좀더 해야될거 같다.
