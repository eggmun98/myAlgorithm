// 1. 문제와 이해
// 앞에서 또는 뒤에서부터 문자를 비교해야 합니다.
// 그리고 만약 앞에서 부터 문자를 비교한다면
// 앞에 문자와 바로 뒤에 문자와 비교한다
// 갚으면 제거한다. 다르면 나둔다.
// 이런식으로 모든 문자가 제거되면 1을 반환
// 문자가 남아 있으면 0을 반환한다.

// 2. 게획
// 스택으로 간단하게 풀려고 한다.
// answer라는 변수에 빈배열을 선언한다.
// 첫번째 문자와 answer의 마지막 요소와 비교한다.
// 같으면 pop 메소드를 사용한다
// 다르면 push 메소드로 s[i]를 담는다.

// 3-1. 실패한 풀이
function solution(s) {
  const answer = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      answer.pop();
      i++;
    } else {
      answer.push(s[i]);
    }
  }
  return answer.length ? 0 : 1;
}

// 3-2. 성공한 풀이
function solution(s) {
  const answer = [];
  for (let i = 0; i < s.length; i++) {
    if (answer[answer.length - 1] === s[i]) {
      answer.pop();
    } else {
      answer.push(s[i]);
    }
  }
  return answer.length ? 0 : 1;
}

// 4. 회고
// 이 문제는 스택을 이용하면 간단하게 풀수 있겠다고 생각하였다.
// 실패한 풀이에서 빈 배열을 선언을 하고
// s[i]와 s[i + 1]이 같다면 pop() 메소드를 사용하고
// i++를 통해서 i를 2나 올렸다.
// 또 그게 아니라면 push()를 해주었는데
// 이럴 경우 "cbbaac"와 같은 경우의 수를 계산에 실패를 하게 된다.
// 왜나하면 s[1]인 c를 answer push하고
// bb와 aa를 pop()를 하고
// c와 c는 answer라는 배열에 남아 있기 때문에 실패를 하였다.
// 그래서 answer라는 배열의 마지막 요소와 s[i]와 비교를 해야겠다고 생각하였다.
// 그래야 스택의 원리를 제대로 이용할 수 있기 때문이다.
// 이 문제로 자료구조의 원리를 더 제대로 이해할 수 있도록 노력을 해야겠다.
