/* 문제와 이해
올바른 괄호인지 체크해야 합니다.
"("와 ")"의 개수가 맞아야 합니다.
 */

/* 계획
스택이라는 변수를 만든다.
그리고 "("만 스택에 푸시를 한다.
")"를 만나면 팝을 한다.
만약 ")"이거면서 스택의 길이가 0이라면,
짝이 안맞다는 뜻이므로 NO를 리턴한다.
*/

/* 풀이1
 */
function solution(s) {
  const stack = [];
  for (x of s) {
    if (x === "(") {
      stack.push("(");
    } else {
      if (stack.length == 0) {
        return "NO";
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0 ? "YES" : "NO";
}

/* 회고
이번 문제는 스택을 이용하면 쉽게 풀 수 있었던 문제였다.
다시 한번 스택의 원리를 알게 되는 문제였던거 같다.
 */
