// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
// 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요.
// 단 회문을 검사할 때 대소문자를 구분하지 않습니다.
// ▣ 입력설명
// 첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.
// ▣ 출력설명
// 첫 번째 줄에 회문 문자열인지의 결과를 YES 또는 NO로 출력합니다.
// ▣ 입력예제 1 gooG
// ▣ 출력예제 1 YES

// 내 풀이
const myFn = (str) => {
  str = str.toUpperCase();
  let a = str.slice(0, str.length / 2);
  let b = str
    .slice(str.length / 2, str.length)
    .split("")
    .reverse()
    .join("");
  if (a === b) return "YES";
  else return "NO";
};

myFn("gooG");
myFn("accccA");
myFn("happah");
myFn("good");

// 다른 사람 풀이
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] != s[len - i - 1]) return "NO";
  }
  return answer;
}

// 다른 사람 풀이2
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  if (
    s
      .split("")
      .reverse()
      .join("" !== s)
  )
    return "NO";
  return answer;
}

// 회고
// 처음에 나도 반복문으로 풀려고 하였다가 안풀어져서 메소드로 간단하게 풀었다.
// 너무 메소드에 의지안하고 순수 javaScript 문법으로 풀려고 노력을 해야겠다.
// 회고 내용 추가
// 다른 사람 풀이2를 보고 이 생각을 왜 못했지 싶었다.
// 변수도 만들 필요 없이 그냥 if문에서 바로 reverse한 값이랑 초기값만 비교하면 됐었다..
// 또 내 풀이는 입력 예제가 "gooog" 이라면 잘못된 값을 가져온다. 즉 내 풀이는 틀렸다.
