/* 문제와 이해
n개의 수열에서 연속 부분 수열의 개수를 찾아야 한다.
 */

/* 계획
시간복잡도 O(n^2) 방법과 O(n)방법으로 풀어볼 계획이다.
1. O(n) 방법은 투 포인터/슬라이딩 윈도우 기법을 이용하여 풀 계획이다. 
2. O(n^2) 방법은 이중반복문으로 이중탐색 방법을 이용할거다.
*/

/* 풀이1
 */
function solution1(n, m, arr) {
  let sum = 0;
  let count = 0;
  let start = 0;

  for (let end = 0; end < n; end++) {
    sum += arr[end];

    while (sum > m) {
      sum -= arr[start];
      start++;
    }

    if (sum === m) {
      count++;
    }
  }

  return count;
}

/* 풀이2
 */
function solution2(n, m, arr) {
  let count = 0;
  let sum = 0;
  let start = 0;
  let i = 0;

  while (start < n) {
    sum += arr[start];
    if (sum === m) {
      sum = 0;
      count++;
      i++;
      start = i;
    } else if (sum > m) {
      sum = 0;
      i++;
      start = i;
    } else {
      start++;
    }
  }

  return count;
}

/* 풀이3
 */
function solution3(n, m, arr) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    let sum = arr[i];
    for (let j = i + 1; j < n; j++) {
      sum += arr[j];
      if (sum === m) {
        count++;
        break;
      } else if (sum > m) {
        break;
      }
    }
  }

  return count;
}

/* 회고
일단 이 문제는 가장 비효율적인 방법인 이중 반복문으로 먼저 풀었다.
그리고 더 효율적인 방법을 생각한게 while문으로만 체크하는거다.
근데 결국 이것도 while문으로만 반복을 돌려도 이중 반복문과 횟수는 똑같을 거다.
그래서 더 좋은 방법이 생각한게 투 포인트 방식과 슬라이딩 윈도우 방식의 결합이다.
투 포인트 방식과 슬라이딩 윈도우방식을 코드로 변환시키는데 어려웠다.
하지만 계속 코드를 지웠다가 썼다가 반복을 하면서 문제를 풀었다.
앞으로도 여러가지 알고리즘 풀이 방법으로 문제를 풀 생각이다.
 */
