/* 문제와 이해
바둑이들을 C 킬로그램 이내에 가장 무겁게 태워야 한다
 */

/* 계획
이진 트리를 이용하여 깊이 우선 탐색을 하려고 한다
왼쪽 노드는 바둑이를 태웠을 경우, 오른쪽 노드는 바둑이를 태우지 않았을 경우로 생각하면 된다
태웠을 경우에만 sum을 매개변수로 더해준다
그러지 않을 경우 sum은 그대로 둔다.
그리고 최댓값을 찾기 위해 비교를 한다.
비교를 하기 전에 sum이 c보다 클 경우 리턴을 한다.
왜나하면 더 이상 태울 수 없기 때문에
바로 리턴을 하여 불필요한 깊이 탐색을 제외한다.
*/

/* 풀이1
 */
function solution(c, arr) {
  let answer = 0;
  const len = arr.length;

  const dfs = (n, sum) => {
    if (sum > c) return;
    if (n === len) {
      answer = Math.max(answer, sum);
    } else {
      dfs(n + 1, sum + arr[n]);

      dfs(n + 1, sum);
    }
  };
  dfs(0, 0);

  return answer;
}

/* 회고
이번 문제는 이진 트리를 이용한 문제를 많이 풀었더니,
금방 풀게 되었다.
역시 같은 자료구조의 문제를 여러 번 풀어야 금방 푸는 거 같다.
 */
