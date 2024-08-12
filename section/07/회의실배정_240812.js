/* 문제와 이해
회의실 배정표가 있다. 
그중 가장 많은 회의를 할 수 있는 횟수들만 세야 한다.
 */

/* 계획
가장 먼저 끝나는 시간 기준으로 오름차순 정렬을 한다.
그래야 반복문을 한 번만 돌릴 수 있기 때문이다.
만약 시작 순서로 정렬을 한다면 반복문을 더 많이 돌려야 한다.
끝나는 시간으로 해야 반복문을 적게 돌리는 이유는 간단하다.
끝나는 순으로 정렬을 하기 때문에 한 번에 경우의 수를 계산이 가능하기 때문이다.
|1-2-3-4-5-6-7|
|--s-e--------|
|----s---e----|
|--------s---e|
이런식으로 바로 한 번에 계산이 가능하다.
*/

/* 풀이1
 */
function solution(arr) {
  const sortArr = arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  let end = arr[0][1];
  let answer = 1;

  for (let i = 1; i < len; i++) {
    if (end <= arr[i][0]) {
      answer++;
      end = arr[i][1];
    }
  }

  return sortArr;
}

/* 풀이2
 */
function solution(arr) {
  const len = arr.length;
  const sortArr = arr.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

  let answer = 0;
  for (let i = 0; i < len; i++) {
    let count = 1;
    let end = arr[i][1];

    for (let j = i + 1; j < len; j++) {
      if (end <= arr[j][0]) {
        count++;
        end = arr[j][1];
      }
    }
    if (answer < count) {
      answer = count;
    }
  }

  return answer;
}

/* 회고
이번 문제는 두 가지 방법으로 풀어보았다.
시작 순서로 정렬해서 푸는 방법과
끝나는 순서로 정렬해서 푸는 방법이다.
가장 먼저 생각한 아이디어가 시작 순서로 정렬해서 푸는 방법이었다.
하지만 반복문을 이중 반복문이나 돌려야 하기 때문에 비효율적이라고 생각하였다.
그래서 어떻게 하면 반복문을 한 번만 돌릴 수 있을까 생각을 하다가.
시작 순서 대신 반대로 끝나는 순서로 정렬하면 어떨까 생각을 하였다.
끝나는 순서로 정렬을 하면 바로 최대 회의 수를 셀 수 있다는 것을 깨달았다.
그것을 깨닫는 순간 바로 코드로 바꾸어서 풀었다.
이번 문제의 계기로 생각을 전환을 해야 문제를 더 효율적으로 풀 수 있다는 것을 알게 되었다.
 */
