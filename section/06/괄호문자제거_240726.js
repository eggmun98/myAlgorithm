/* 문제와 이해
괄호 사이의 () 문자를 제거해야 한다.
남은 문자들을 리턴한다.
 */

/* 계획
스택이라는 변수를 만든다.
문자열을 반복문을 돌린다.
")"를 만나면 자기의 짝인 "("를 만날 때까지
스택에서 pop을 해준다.
")"를 만나지 않을 때는 계속 스택에 push를 해준다.
반복문의 결과로 나온 스택을 join해서 문자열로 만든다.
=> join을 안쓴다면 반복문을 돌려서 문자열로 만들어도 됨
=> 이 문제는 스택을 활용하기 위한 문제니 그럴 필요가 없음
*/

/* 풀이1
 */
function solution(str) {
  const stack = [];

  for (x of str) {
    if (x === ")") {
      while (stack.pop() !== "(") {}
    } else {
      stack.push(x);
    }
  }
  return stack.join("");
}

/* 풀이2
 */
function solution2(str) {
  let stack = [];
  let result = "";

  for (let char of str) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      stack.pop();
    } else {
      if (stack.length === 0) {
        result += char;
      }
    }
  }

  return result;
}

/* 회고
이번 문제의 코드는 생각보다 간단한 보인다.
하지만 이렇게까지 풀려고 했을 때가 어려웠다.
)를 만나면 자기의 짝을 만날 때까지 지워야 한다는 것을
좀 늦게 깨달았다.
이것을 깨닫고 나서 바로 코드로 바꿔서 풀었다.
첫 번째 풀이를 풀고 나서 다른 풀이로 풀어봤다.
생각해 보니 굳이 스택에 문자를 추가 안하고,
스택이 비어있을 때만 result라는 변수에 문자를 추가하면 된다.
진짜 알고리즘 문제는 풀면 풀수록 재밌는거 같다.
새로운 방법으로 코드로 바꾸니 잘 풀린다.
 */
