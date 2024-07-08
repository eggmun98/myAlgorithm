/* 문제와 이해
멘토는 멘티보다 모든 시험에서 등수가 높아야 한다.
*/

/* 계획
4중 반복문을 돌린다.
첫번 째 반복문은 멘토
두번 째 반복문은 멘티
세번 째 반복문은 시험
네번 째 반복문은 시험 등수
이렇게 1~2중 반복문으로 멘토와 멘티의 가짓 수를 센다.
3~4중 반복문으로 arr 반복문을 탐색을 한다.
arr[k][z]에서 j가 먼저 나오면 바로 break; 한다.
=> j가 i보다 등수가 높다는 뜻이기에 의미가 없으므로
arr[k][z]에서 i가 먼저 나오면 횟수를 센다.
횟수가 3이면 멘토(i)가 멘티(j)보다 모든 시험에서 등수가 높다는 뜻이므로
count++를 해준다.
*/

/* 풀이1
 */
function solution(arr) {
  const M = arr.length;
  const N = arr[0].length;
  let count = 0;

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (i === j) continue;
      let sum = 0;
      for (let k = 0; k < M; k++) {
        for (let z = 0; z < N; z++) {
          if (arr[k][z] === i) {
            sum++;
            break;
          }
          if (arr[k][z] === j) {
            break;
          }
        }
      }
      if (sum === 3) {
        count++;
      }
    }
  }

  return count;
}

/* 풀이2
 */
function solution(arr) {
  let M = arr.length;
  let N = arr[0].length;
  let count = 0;

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (i === j) continue;
      let isMentor = true;

      for (let k = 0; k < M; k++) {
        let iRank = arr[k].indexOf(i);
        let jRank = arr[k].indexOf(j);

        if (iRank > jRank) {
          isMentor = false;
          break;
        }
      }

      if (isMentor) {
        count++;
      }
    }
  }

  return count;
}

/* 회고
처음 이 문제를 풀려고 했을 때 4중 반복문으로 풀 생각을 못했다.
왜나하면 4중 반복문으로 풀면 비효율적이라고 생각하였기 때문이다.
이 문제는 4중 반복문으로 풀어야겠다는 생각이 오래 걸렸고,
코드로 바꾸는 데는 금방 하였다.
역시 알고리즘 문제를 풀려면 머릿속으로 어떻게 풀지 정리하는게 중요한거 같다.
*/
