// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄에 대문자는 소문자로, 소문자는 대문자로 변환된 문자열을 출력합니다.
// ▣ 입력예제 1 StuDY
// ▣ 출력예제 1 sTUdy

// 내 풀이
const myFn = (str) => {
  let answer = "";
  for (let x of str) {
    let num = x.charCodeAt();
    console.log(num);
    if (num >= 97 && num <= 122) {
      answer += String.fromCharCode(num - 32);
    } else {
      answer += String.fromCharCode(num + 32);
    }
  }
  return answer;
};

myFn("StuDY");

// 다른 사람 풀이
function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }
  return answer;
}

// 배운 점
// 아스키 코드로 변환 안하고도 대소문자 변환 메서드로만으로도 풀 수 있다는 것을 알게 됨
