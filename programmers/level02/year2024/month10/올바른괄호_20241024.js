/* 문제와 이해
왼쪽 괄호와 오른쪽 괄호의 쌍이 다 맞아야 true
그게 아니라면 false값을 리턴해야 한다.
 */

/* 계획
스택에 "("만 넣는다.
오른쪽 괄호를 만나면 스택에서 pop을 시킨다.
단 스택에 아무것도 없는데 오른쪽 괄호를 만났다는 건
짝이 맞을 수가 없으므로 바로 false을 반환시킨다.
*/

/* 풀이1
 */
function solution(s){
    const stack = [];
    for(x of s) {
    if(x === "(") {
      stack.push('(')
    } else {
    if(!stack.length) {
      return false
    } else {
      stack.pop()
    }
  }  
    }
}

/* 풀이2
 */
function solution(s){
    const stack = [];
    for(x of s) {
    if(x === "(") {
      stack.push('(')
    } else {
    if(stack[stack.length - 1] === "(") {
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }  
    }
}

/* 풀이3
 */
function solution(s){
    const stack = [];
    const len = s.length;
    for(let i = 0; i<len; i++) {
        if(s[i] === "(") {
            stack.push("(") 
        } else {
          if(stack[stack.length - 1] === "(") {
            stack.pop()
          } else {
            stack.push(s[i])
          }
        }
    }
}

/* 회고
풀이 1가 예전에 풀었던 방식이다.
풀이 2~3은 시간이 지난 후 푼 방식이다.
예전 보다 더 안좋은 방법으로 풀었기 때문에 반성을 해야겠다...
 */
