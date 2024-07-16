/* 문제와 이해
나열된 숫자에서 연속된 3자리의 합이 가장 큰 값을 구해야 한다.
 */

/* 계획
하나의 반복문으로 첫 sum의 값은 k만큼 구한다.
그리고 또 다른 반복문을 돌린다.
그 반복문은 k부터 시작한다
그리고 curr라는 변수를 선언한다.
초기값은 sum이다.
반복문을 돌 때 마다 curr은 -k번째 만큼의 값을 빼고
k번째의 값을 더한다.
그리고 마지막에 curr와 기존의 sum과 비교해서 큰값만 남긴다.
*/

/* 풀이1
 */
function solution(n, k, arr) {
  let sum = 0;
  let curr = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  curr = sum;
  for (let i = k; i < n; i++) {
    curr += arr[i] - arr[i - k];
    sum = Math.max(sum, curr);
  }
  return sum;
}

/* 풀이2
 */
function solution(n, k, arr) {
  let curr = 0;
  let sum = 0;
  for (let i = 0; i < n - 2; i++) {
    curr = arr[i] + arr[i + 1] + arr[i + 2];

    if (curr > sum) {
      sum = curr;
    }
  }

  return sum;
}

/* 회고
  이번 문제는 간단했다. 
  처음에는 i가 0부터시작해서 반복문을 시작하였는데
  그렇게 하는 것보다 처음부터 sum에 k번째 만큼의 합을 구하는게 더 효율적이라고
  판단하여 k번째까지 반복문을 돌려 초기 sum의 값을 구했다.
  이렇게 하여 더 좋은 방법으로 풀게되었는데,
  앞으로도 끊임없이 고민을 하여 더 좋은 방법을 풀수 있도록 하겠다.
   */
