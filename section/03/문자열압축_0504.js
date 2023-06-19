// 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시 오. 단 반복횟수가 1인 경우 생략합니다.
// ▣ 입력설명
// 첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
// ▣ 출력설명
// 첫 줄에 압축된 문자열을 출력한다.
// ▣ 입력예제 1 KKHSSSSSSSE
// ▣ 출력예제 1 K2HS7E

// 내 풀이
const myFn = (str) => {
  let answer = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      answer += str[i] + String(count);
      count = 1;
    }
  }

  return answer.replaceAll("1", "");
};
myFn("KKHSSSSSSSE");

// 다른 사람 풀이
function solution(s) {
  let answer = "";
  let cnt = 1;
  s = s + " ";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}

// 회고
// else문 안에 if문을 할 생각을 못했다.
// 처음에 else if문으로 count가 1일 경우는 체크를 못하게 하려고 했었다.
// 하지만 코드가 작동이 안돼 간단하게 메소드로 풀었다.
// 메소드 없이 if문으로만 풀수 있도록 좀더 노력을 해야겠다.
