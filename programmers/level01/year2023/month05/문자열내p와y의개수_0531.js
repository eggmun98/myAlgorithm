// 문제 설명 출처: https://school.programmers.co.kr/learn/courses/30/lessons/12916
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 내 풀이
function solution(s) {
  let p = (y = 0);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") p++;
    if (s[i] === "y" || s[i] === "Y") y++;
  }
  if (y === p) return true;
  return false;
}

// 다른 사람 풀이
function numPY(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

// 회고
// 나는 최대한 코드 수를 줄이려고 노력을 하였다.
// if문으로 p와 y의 문자 수를 변수에 저장했다
// 그리고 마지막 if문으로 true를 리턴을 하거나 그 조건이 틀리면 false을 리턴하게 하였다.
// 다른 사람 코드는 진짜 창의적인거 같다.
// 비교연산자로 true false 리턴이 가능하니 코드가 간단하고 가독성이 좋다.
