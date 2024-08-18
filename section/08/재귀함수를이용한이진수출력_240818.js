/* 문제와 이해
10진 수 n을 2진수로 변환을 해야 한다. 
단 재귀함수를 이용해야 한다.
 */

/* 계획
재귀함수 dfs 함수를 만든다.
재귀함수의 로직은 초기 만약 n이 0이면 바로 리턴 시킨다.
그게 아니라면 다시 자기 함수로를 호출한다.
그리고 매개변수로 n / 2값을 전달한다.
콘솔 로그로 n % 2를 출력한다.
n / 2값을 전달하는 이유는
10진수를 2진수로 변환하는 방법이 아래와 같다.
11 ÷ 2 = 5 (몫), 나머지 = 1
5 ÷ 2 = 2 (몫), 나머지 = 1
2 ÷ 2 = 1 (몫), 나머지 = 0
1 ÷ 2 = 0 (몫), 나머지 = 1
*/

/* 풀이1
 */
function solution(n) {
  function dfs(n) {
    if (n === 0) return;
    else {
      dfs(Math.floor(n / 2));
      console.log(n % 2);
    }
  }
  dfs(n);
}

/* 풀이2
 */
function solution2(n) {
  let result = "";
  function dfs(n) {
    if (n === 0) return;
    else {
      dfs(Math.floor(n / 2));
      result += n % 2;
    }
  }

  dfs(n);
  return result;
}

/* 회고
이번 문제도 간단한 문제라서 금방 풀었다.
10진수에서 2진수로 변환하는 방법이 기억이 잘 안나서
다시 찾아보면서 공부를 하였다.
이번 기회에 진수 변환에 대한 공부를 하게 되어서 좋았다.
 */
