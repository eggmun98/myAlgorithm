// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력 하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄에 대문자로 통일된 문자열이 출력된다.
// ▣ 입력예제 1 ItisTimeToStudy
// ▣ 출력예제 1 ITISTIMETOSTUDY

// 내 풀이
const myFn = (str) => {
  return str.toUpperCase();
};
myFn("ItisTimeToStudy");

// 다른 사람 풀이
function solution(s) {
  let answer = "";
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;
  }
  return answer;
}

// 배운 점
// 아스키코드로 소문자를 대문자로 변환 방법을 알게 됨
// 아스키 코드는
// 대문자 65~90
// 소문자 97~122
// 알파벳 갯수는 26개니까
// 65에서 25만 더하고
// 97에서 25만 더하면 외울 수 있음

// 97에서 32를 빼면
// 65임 그럼 즉 A
// 98에서 32를 빼면
// 66 그럼 즉 B

// String.fromCharCode으로 숫자를 문자로 바꿔줌
