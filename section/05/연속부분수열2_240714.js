/* 문제와 이해
한 배열에서 M보다 같거나 작은 연속 부분수열의 합을 횟수를 구해야 한다.
 */

/* 계획
두 가지 방법으로 풀 예정이다.
하나는 이중 반복문으로 완전 탐색을 할 에정이고,
하나는 투 포인트 방식으로 최소한의 반복으로만 풀 예정이다.
투 포인트 방식으로는
먼저 sum이라는 변수를 선언하여
첫 반복문을 돌 때마다 sum에 arr[start] 즉 arr[i]를 합쳐준다.
반복문은 start가 arr.length 만큼 돌면 된다.
만약 while(sum > m) sum이 m 보다 클 경우 횟수를 세면 안되기 때문에
sum = sum - arr[end]을 해준다.
- arr[start] 대신 arr[end]를 해주는 이유는 
매번 sum에 arr[start]를 더해주었는데,
그 원래 arr[start]을 값을 기억해서 빼주기 위한게 end 변수의 사용이유기도 하다.
end로 빼주었으면 end++을 해준다.
그리고 반복문 돌 때마다 마지막에 count = start - end + 1을 해준다.
+1은 만약 하나의 요소가 즉 현재의 start의 요소가 m보다 작을 경우 횟수를 세기 위함이다.
그리고 start - end는 start와 end사이의 거리를 재는 건데
그 거리가 m보다 작은 합의 횟수이기 때문이다.
예를 들어 1, 2, 3일 경우
start가 2이고, end가 0이면
2 - 0 이 바로 => 1, 2와 1, 2, 3의 경우의 수를 셀수 있기 때문이다.
*/

/* 풀이1
 */
function solution(n, m, arr) {
  let sum = 0;
  let count = 0;
  let end = 0;

  for (let start = 0; start < n; start++) {
    sum += arr[start];

    while (sum > m) {
      sum -= arr[end];
      end++;
    }
    count += start - end + 1;
  }

  return count;
}

/* 풀이2
 */
function solution2(n, m, arr) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    let sum = arr[i];
    if (sum <= m) {
      count++;
    }
    for (let j = i + 1; j < n; j++) {
      sum += arr[j];
      if (sum <= m) {
        console.log(sum, j, i, "");
        count++;
      } else {
        break;
      }
    }
  }
  return count;
}

/* 회고
이번 문제는 투 포인트 방식으로 풀었는데 m보다 작은 경우의 수를 구하는게 어려웠다.
count 변수에서 어떻게 횟수를 세야 하지 끊임없이 고민 끝에
start 포인트와 end 포인트의 사이의 거리가 m보다 작은 합의 횟수라는 것을 깨달았다.
또 +1을 해줌으로 써 한 자리 수의 횟수도 셀 수 있었다.
이번 문제의 계기로 투 포인트 문제가 나온다면 막힘없이 풀 수 있을거 같다.
앞으로도 새로운 꺠달음을 얻기 위해 더 노력하겠다.
 */
