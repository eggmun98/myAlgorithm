/* 문제와 이해
필수과목은 반드시 이수해야 한다.
필수과목은 반드시 순서대로 이수해야 한다.
현수가 작성 한 수업 계획표에 필수과목의 순서가 안맞으면 NO
맞으면 YES를 리턴해야 한다.
 */

/* 계획
큐와, 스택, 횟수 세기 방식으로 풀려고 한다.
먼저 큐 방식은 큐에 필수과목을 담는다.
그리고 수업계획을 반복문으로 돌린다.
만약 큐에 반복문의 i번째 요소가 있다면 검사를 시작 한다.
만약 큐의 첫 번째 요소를 시프트 하면서 수업계획 i번째 요소가 틀리다면
NO를 리턴한다. 그게 아니라면 계속 반복문을 돌린다.
반복문을 끝까지 돌렸다면 큐의 길이를 체크한다.
큐의 길이가 0이라면 YES이고 아니라면 NO이다.
스택 방식과 큐 횟수 세기 방식은 비슷한 방법이다.
어차피 반복문은 한 번만 돌리기 때문에 
필수과목의 첫 번째 요소부터 비교를 하여 있는 것만 체크를 한다.
아니라면 다음 번째 요소로 넘어가기 때문에 그 횟수가
잘 된 것이고 그게 아니라면 잘못된 것이다.
*/

/* 풀이1
 */
function solution(need, plan) {
  const queue = need.split("");

  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) {
        return "NO";
      }
    }
  }
  return queue.length ? "NO" : "YES";
}

/* 풀이2
 */
function solution(need, plan) {
  let p = 0;

  for (let i = 0; i < plan.length; i++) {
    if (need[p] === plan[i]) {
      p++;
    }
  }
  return p === need.length ? "YES" : "NO";
}

/* 풀이3
 */
function solution(need, plan) {
  const stack = [];
  const nL = need.length;
  const pL = plan.length;
  let p = 0;

  for (let i = 0; i < pL; i++) {
    if (need[p] === plan[i]) {
      stack.push(plan[i]);
      p++;
    }
  }
  const result = stack.length === nL ? "YES" : "NO";
  return result;
}

/* 회고
이번 문제는 큐를 이용하여 풀어보았다.
큐를 이용하니 훨씬 더 간단하였다.
항상 문제를 볼 때마다 무슨 자료구조로 풀어야 할지 모르겠다.
아직 문제를 많이 안풀어봐서 그런거 같다.
앞으로도 더 문제를 많이 풀어서 바로바로 자료구조를 선택하여
풀 수 있게 노력을 해야겠다.

 */
