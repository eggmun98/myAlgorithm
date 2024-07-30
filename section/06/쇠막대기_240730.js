/* 문제와 이해
앞이 "(" 뒤가 ")" 이거라면 레이저이다.
그게 아니라면 막대기이다.
막대기 안에 레이저의 개수를 세고 레이저의 +1을 해주면 
그 막대기가 레이저에 의해 잘라지는 개수이다.
 */

/* 계획
"("를 만나면 무조건 스택에 푸시 한다.
만약 ")" 이거를 만난다면 레이저인지 검사를 해야 한다.
바로 앞에 "("이거라면 레이저이고, pop을 해준다.
레이저일 경우 현재 스택에 있는 길이가 보유하고 있는 막대의 개수이므로
스택의 길이를 result라는 변수에 담는다.
만약 레이저가 아니라면 그 막대의 끝이므로 그 막대는 계산이 끝나야 한다.
그러므로 +1을 해주고 그 막대기의 계산은 끝낸다.
그리고 남은 스택의 길이는 남은 막대의 개수이다.
*/

/* 풀이1
 */
function solution(bar) {
  const stack = [];
  let result = 0;
  const bL = bar.length;

  for (let i = 0; i < bL; i++) {
    if (bar[i] === "(") {
      stack.push("(");
    } else {
      stack.pop();
      if (bar[i - 1] === "(") {
        result += stack.length;
      } else {
        result += 1;
      }
    }
  }
  return result;
}

/* 회고
이번 문제는 어떻게 풀까 많은 고민을 하였다.
머리속으로 (이거만 스택에 넣으면 되겠다고 생각을 하고,
그림으로 그려서 어떻게 할지 풀었다.
하지만 코드로 바꾸는게 어려웠다.
그림으로 그려서 풀었지만 예상치 못한 경우의 수도 있기 때문이다.
그래도 포기하지 않고 끝까지 풀었다.
앞으로도 더 잘 풀기 위해 노력을 할 것이다.
 */
