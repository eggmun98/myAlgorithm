// 1. 문제와 이해
// s의 길이가 4 또는 6이어야 합니다.
// s는 숫자로만 구성되어 있어야 합니다.

// 2. 계획
// 먼저 s의 길이가 4 또는 6인지 체크합니다.
// 그리고 문자열을 split("")으로 배열을 만듭니다.
// 필터 메소드를 이용합니다.
// Number 객체의 isNaN 함수를 이용합니다.
// isNaN함수는 숫자가 맞는지 확인을 해주는 함수입니다.
// el을 숫자로 변경하고나서 isNaN으로 숫자인지 체크하는 이유는
// 먼저 Number() 함수가 숫자가 아니라면 NaN값을 반환합니다.
// 그러므로 Number.isNaN에 문자열이 들어가게 되면 true을 리턴합니다.
// 그리고 answer라는 변수의 길이가 0이라면 트루 아니라면 펄스값을 리턴합니다.

// 3. 풀이
function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  const answer = s.split("").filter((el) => Number.isNaN(Number(el)));
  return answer.length === 0;
}

// 회고
// 이번 문제는 문자열을 잘 다루기 위한 문제였습니다.
// 이 문제를 풀기 위해 isNaN 메소드를 공부하였습니다.
// 그리고 문자열을 더 잘 다루게 되었습니다.
// 앞으로도 더 발전할 수 있도록 노력해야겠습니다.
