// 문제 설명
// JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
// 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// s는 길이 1 이상 200 이하인 문자열입니다.
// s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
// 숫자는 단어의 첫 문자로만 나옵니다.
// 숫자로만 이루어진 단어는 없습니다.
// 공백문자가 연속해서 나올 수 있습니다.
// 입출력 예
// s	return
// "3people unFollowed me"	"3people Unfollowed Me"
// "for the last week"	"For The Last Week"

// 내 풀이
function solution(s) {
  let answer = s.toLowerCase().split(" ");
  let sum = [];
  for (let i = 0; i < answer.length; i++) {
    sum.push(answer[i][0]?.toUpperCase() ?? "");
  }
  for (let j = 0; j < sum.length; j++) {
    sum[j] = sum[j] + answer[j].slice(1);
  }
  return sum.join(" ");
}

// 다른 사람 풀이
function solution(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}

//회고
// 이번 문제는 하나의 변수 때문에 좀 막혔다.
// 테스트 코드에 "A " 이라는 출력 결과값이 있다.
// 이 테스트 코드 때문에 막혔다.
// 왜나하면 코드를 처음 이렇게 작성하였는데 sum.push(answer[i][0]?.toUpperCase());
// 여기서 answer[i][0]이 빈문자열이면 언디파인드가 발생하였다.
// 그래서  sum.push(answer[i][0]?.toUpperCase() ?? "") 이렇게 ?? 연산자를 이용하여
// 예외처리를 해주었다.
// 일단 반복문을 두개 써써 비효율적인거 같다.
// 다른 사람 풀이를 보면 메소드로만 한줄로 풀었다.
// split(" ")을 이용하여 공백 기준으로 배열을 만들었다.
// 그리고 map함수를 써서 각 배열마다 v.charAt(0) 메소드로 대문자를 만들어 주었고
// 내가 쓴 slice(1) 메소드 처럼 v.substring(1) 메소드로 제일 첫 글자 빼고 나머지는
// 소문자로 만드는 메소드를 사용하였다.
// 나도 메소드로만 풀어보려다가 안풀어져서 방향을 틀었는데 앞으로는 메소드로만 풀기도 하고,
// 기본 문법을 이용한 방법으로도 풀도록 노력해야 겠다.
