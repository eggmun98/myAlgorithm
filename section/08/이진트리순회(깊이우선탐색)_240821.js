/* 문제와 이해
이진트리 순회를 깊이 우선 탐색 알고리즘으로 풀어야 한다.
 */

/* 계획
전위 순회와 중위 순회, 후위 순회를 각각 풀어본다.
*/

/* 풀이1 전위순회 풀이
 */
function solution(n) {
  function dfs(n) {
    if (n > 7) {
      return;
    } else {
      console.log(n);
      dfs(n * 2);
      dfs(n * 2 + 1);
    }
  }
  dfs(n);
  return;
}

/* 풀이2 중위순회 풀이
 */
function solution2(n) {
  function dfs(n) {
    if (n > 7) {
      return;
    } else {
      dfs(n * 2);
      console.log(n);
      dfs(n * 2 + 1);
    }
  }
  dfs(n);
}

/* 풀이3 후위순회 풀이
 */
function solution3(n) {
  function dfs(n) {
    if (n > 7) {
      return;
    } else {
      dfs(n * 2);
      dfs(n * 2 + 1);
      console.log(n);
    }
  }
  dfs(n);
}

/* 회고
학창 실절에는 이해를 하지 않고 외우기만 했었는데,
이제는 이해를 하려고 노력을 하였다.
이 문제를 풀기 위해서
그림으로 스택을 그리면서 풀어보았다.
그러면서 깊이 우선 탐색 알고리즘에 대해 약간 이해를 하게 되었다.
아직은 부족하지만 좀 더 노력을 하겠다.
 */
