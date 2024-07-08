/* 문제와 이해
1부터 100사이의 카드가 n장을 가지고 있다.
같은 숫자의 카드가 여러장 있을 수 있다.
현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 구해야 한다.
그리고 그 중 k번째로 큰 수를 구하는 프로그램을 작성해야 한다.
합한 값 중에서 중복된 값이 있으면 중복값을 제거를 하고 k번째로 구해야 한다.
 */

/* 계획
Set 생성자 함수를 이용한다.
삼중 반복문을 통해 3장의 카드의 합을 구한다.
각 반복문마다 n장의 카드 중에서 중복없이 합을 구해야 한다.
그러기 위해 i, j, k의 값이 다 달라야 한다.
또한 j는 i +1 k는 j + 1을 해준다.
i가 0일 때
0 1 2
0 1 3
0 1 3
i가 1일 때
1 0 2
1 0 3
1 0 3
이렇게 이미 0 1 2번째 카드의 값을 구했으므로 또 구할 필요가 없다.
그러므로 j에 i + 1을 해준다.
마지막으로 Set 객체를 배열로 변경하고 정렬을 하여 k번째의 값을 구한다
=> 배열의 요소는 0부터 시작이므로 -1을 해준다.
*/

/* 풀이1
 */
let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
let n = 10;
let k = 3;

function solution(n, k, arr) {
  const result = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        result.add(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  return [...result].sort((a, b) => b - a)[k - 1];
}

solution(n, k, arr);

/* 풀이2
 */
function solution(n, k, arr) {
  let sums = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        sums.add(arr[i] + arr[j] + arr[k]);
      }
    }
  }

  let sortResult = Array.from(sums).sort((a, b) => b - a);
  return sortResult[k - 1];
}

/* 회고
이 문제를 보자마자 Set 객체를 이용해야 겠다고 생각하였다.
그리고 바로 삼중반복문을 써서 각 경우의 수를 구해야겠다고 생각했다.
머리속으로만 생각한 방법이 코드로 잘 작동해서 좋았다.
다음에도 빠르게 풀수 있게 매일 노력해야겠다.
 */
