/* 문제와 이해
뒤섞여 있는 음수와 양수의 정수들을 정렬해야 한다.
단 각각의 음수와 양수는 순서가 섞이면 안된다.
음수는 왼쪽 정렬 양수는 오른쪽 정렬을 해야 한다.
 */

/* 계획
버블 정렬 알고리즘을 이용하여 푼다.
이중 반복문을 이용할 거다.
두 번째 반복문에서 j 번째와 j + 1 번째를 비교할 것이다.
j가 양수이고 j + 1가 음수이면 서로 자리를 교체한다.
왜 j가 음수이고 j + 1이 양수일 때 교체를 안하는 이유는
그렇게 교체를 한다면 음수는 오른쪽으로 가고 양수는 왼쪽으로 이동하기 때문이다.
그래서 j가 양수이고, j + 1이 음수일 때 교체를 해야 
양수는 오른쪽으로 가고 음수는 왼쪽으로 간다.
이렇게 반복문을 끝낸다.
*/

/* 풀이1
 */
function solution(n, arr) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}

/* 풀이2
 */
function solution(n, arr) {
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
    if (!count) return arr;
  }
  return arr;
}

/* 풀이3
 */
function solution(n, arr) {
  const stack = [[], []];

  for (let i = 0; i < n; i++) {
    if (arr[i] >= 1) {
      stack[1].push(arr[i]);
    } else {
      stack[0].push(arr[i]);
    }
  }

  return stack.flat();
}

/* 회고
이번 문제는 스택을 만들어서 풀면 간단한 문제였다.
하지만 정렬 알고리즘을 통해서 풀어봐야 실력이 늘기 때문에
정렬 알고리즘을 이용하여 풀었다.
그중 버블 정렬 알고리즘을 이용하여 풀었다.
이번 문제를 풀면서 버블 정렬 알고리즘에 대한 이해도가 높아진 거 같다.
앞으로도 특정 알고리즘을 도입해 문제를 풀겠다.
 */
