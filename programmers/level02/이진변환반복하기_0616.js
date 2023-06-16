// 문제 설명 - 출처: https://school.programmers.co.kr/learn/courses/30/lessons/70129
// 0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.
// x의 모든 0을 제거합니다.
// x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
// 예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.
// 0과 1로 이루어진 문자열 s가 매개변수로 주어집니다. s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때, 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.

// 내 풀이
function solution(s) {
  let count = 0;
  let removeCount = 0;

  while (s !== "1") {
    count++;
    removeCount += s.split("").filter((el) => el === "0").length;
    s = s
      .split("")
      .filter((el) => el !== "0")
      .length.toString(2);
  }

  return [count, removeCount];
}

// 다른 사람 풀이
function solution(s) {
  var answer = [0, 0];
  while (s.length > 1) {
    answer[0]++;
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, "").length.toString(2);
  }
  return answer;
}

// 회고
// 2레벨 문제라서 좀 어려웠다.
// 일단 나는 회차를 세는 변수인 count와
// 0의 제거 개수를 세는 변수인 removeCount 변수를 만들었다.
// 그리고 while문을 통해서 0이 없어질 때까지 반복문을 돌렸다.
// 그리고 반복문을 돌릴 때마다 회차를 세야 하니 count++를 하였다.
// 0의 제거 개수는 메소드를 이용하였다.
// s.split("").filter((el) => el === "0").length;을 통해서 0의 개수를 셌다.
// 그리고 0을 제거하기 위해
// s.split("").filter((el) => el !== "0").length.toString(2)을 통해서
// 0을 제거하였다.
// 마지막으로 배열로 리턴을 해야 되기 때문에 [count, removeCount]을 리턴하였다.
// 다른 사람 풀이를 보니 간단하게 푸셨다.
// match(/0/g) || [] 이렇게 해준 이유는
// match 메소드는 없는게 나타나면 null이 들어있는 배열이 생기기 때문에 방지하고자
// 빈 배열을 넣어주는 거다.
// 그리고 s.replace(/0/g, "")을 통해서 0을 ""으로 바꾸어서 이진 변환을 하였다.
// 이번 문제는 배운게 많았고 메소드 사용법이 익숙해지는데 도움이 된 거 같다.
