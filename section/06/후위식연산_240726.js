/* 문제와 이해
후위식 연산으로 나열된 문자열을 후위식으로 풀어야 한다.
 */

/* 계획
스택이라는 변수를 만든다.
숫자를 만날 경우 계속 스택에 넣어준다.
연산기호를 만나면 그때부터 계산을 시도한다.
지금까지 숫자만 스택에 넣었기 때문에
가장 최근의 숫자를 두 개 꺼낸다.
꺼내는 방법은 pop으로 꺼내고
pop으로 나온 결과값을 변수에 저장한다.
그리고 현 연산기호에 맞춰서 계산을 하여 다시 스택에 넣는다.
그렇게 반복문을 돌게 되면 스택의 길이는 1가 될 거다.
그리고 스택의 첫 번째 요소가 결과값이다.
*/

/* 풀이1
 */
function solution(str) {
  const stack = [];

  for (let x of str) {
    if (!isNaN(Number(x))) {
      stack.push(Number(x));
    } else {
      const rp = stack.pop();
      const lp = stack.pop();

      if (x === "*") {
        stack.push(lp * rp);
      } else if (x === "/") {
        stack.push(lp / rp);
      } else if (x === "+") {
        stack.push(lp + rp);
      } else {
        stack.push(lp - rp);
      }
    }
  }
  return stack[0];
}

solution(str);

/* 회고
이번 문제는 노트에 그림으로 그려서 문제를 풀어보았다.
그리고 그림으로 풀고 다시 코드로 옮기는 작업을 하였다.
그림으로 그려보니 훨씬 쉽게 풀었다.
앞으로도 노트를 잘 이용하겠다.
 */
