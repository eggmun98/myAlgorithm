// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.
// 제한 조건
// n은 길이 10,000이하인 자연수입니다.
// 입출력 예
// n	return
// 3	"수박수"
// 4	"수박수박"

// 내 풀이
function solution(n) {
  var answer = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      answer += "박";
    } else {
      answer += "수";
    }
  }
  return answer;
}

// 다른 사람 풀이
const waterMelon = (n) => "수박".repeat(n).slice(0, n);
return waterMelon(n);

// 회고
// 다른 사람 풀이를 보고 repeat() 메소드에 대해 알게 되었다.
// 이 메소드는 문자열을 일정 횟수 만큼 반복해서 늘어나게 해준다.
// 이것을 통해 한줄로 풀수 있는 코드를 알게 되어서 좋았다.
// 모르는 메소드들이 많으니 더 공부해야겠다고 느꼈다.
