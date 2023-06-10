// 문제 설명 - 출처: https://school.programmers.co.kr/learn/courses/30/lessons/12948
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// phone_number는 길이 4 이상, 20이하인 문자열입니다.

// 내 풀이
function solution(phone_number) {
  var answer = [];
  for (let i = 0; i < phone_number.length; i++) {
    if (phone_number.length - 4 > i) answer[i] = "*";
    else answer[i] = phone_number[i];
  }
  return answer.join("");
}

// 회고
// answer라는 배열을 만들었다.
// 그리고 for문을 돌려 if문으로 조건을 걸었다.
// if문 조건이 phone_number.length -4 > i으로 이보다 크면 앞자리다.
// 그리고 뒷자리는 else문으로 분기처리 해주었다.
// 마지막으로 join을 통해 문자열로 다시 만들었다.
