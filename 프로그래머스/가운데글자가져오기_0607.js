// 문제 설명 - 출처: https://school.programmers.co.kr/learn/courses/30/lessons/12903
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
// 입출력 예
// s	return
// "abcde"	"c"
// "qwer"	"we"

// 내 풀이
function solution(s) {
  var answer = s.length;
  if (s.length % 2 === 0) {
    return (answer = String(s[answer / 2 - 1] + s[answer / 2]));
  } else return (answer = String(s[Math.floor(answer / 2)]));
}

// 내 풀이2(가독성 무시)
function solution(s) {
  return s.length % 2 === 0
    ? String(s[s.length / 2 - 1] + s[s.length / 2])
    : String(s[Math.floor(s.length / 2)]);
}

// 이번 풀이는 뭔가 가독성이 많이 안좋은거 같다.
// 간단하게 풀려다 보니까 가독성을 무시한채 푼거 같다.
// 가독성을 높이면서 풀려고 노력을 해야겠다.
// 내 풀이2는 한줄로 풀어보려고 삼항연산자를 이용하였다.
