/* 문제와 이해
선생님은 가능한 많은 학생들에게 선물을 해야 한다.
선생님은 상품 하나를 골라서 50% 할인을 할 수 있다.
 */

/* 계획
가장 먼저 상품들의 합을 구하는 정렬 함수를 만든다.
=> n 번 째 학생일 경우 n 번 째 학생의 금액은 50% 할인한 금액으로 합을 구한다.
n 번째 학생의 상품을 50% 할인을 할 경우의 수를 구하는 이중 반복문을 돌린다.
첫 번째 반복문은 n 번 째 학생이 50% 할인을 받을 경우이다.
두 번째 반복문은 정렬된 함수의 값을 가져와 한도까지 합을 구하면서.
횟수를 센다.
기존의 횟수와 새로운 횟수와 비교를 하여 큰 값만 저장한다.
그리고 마지막은 횟수를 리턴한다.
*/

/* 풀이1
 */
function solution(n, max, arr) {
  const discountedCosts = (i) =>
    arr
      .map((el, j) => {
        if (i === j) {
          return el[0] / 2 + el[1];
        } else {
          return el[0] + el[1];
        }
      })
      .sort((a, b) => a - b);
  let maxCount = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    let sortedCosts = discountedCosts(i);
    let checkCount = 0;
    for (let j = 0; j < n; j++) {
      if (sum + sortedCosts[j] <= max) {
        checkCount++;
        sum += sortedCosts[j];
      } else {
        break;
      }
    }
    if (checkCount > maxCount) {
      maxCount = checkCount;
    }
  }
  return maxCount;
}

solution(5, 28, arr);

/* 다른 사람 풀이
 */
function solution2(n, max, arr) {
  let answer = 0;
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < n; i++) {
    let money = max - (arr[i][0] / 2 + arr[i][1]);
    let cnt = 1;

    for (let j = 0; j < n; j++) {
      if (j !== i && arr[j][0] + arr[j][1] > money) break;
      if (j !== i && arr[j][0] + arr[j][1] <= money) {
        money -= arr[j][0] + arr[j][1];
        cnt++;
      }
    }

    answer = Math.max(answer, cnt);
  }

  return answer;
}
solution2(5, 28, arr);

/* 회고
이 문제는 금액의 합들을 정렬하는 것까지 생각하는게 오래 걸렸다.
그전까지는 모든 경우의 수를 구해서 합을 구하려고 했었다.
하지만 비효율적이라고 생각해 정렬이라는 방법을 생각하였다.
다른 사람의 코드와 내 코드를 비교를 해보면 다른 사람 코드가 훨씬 가독성이 좋다.
또 내 코드와 달리 기존의 배열을 가지고 정렬을 했기 때문에 공간 복잡도 측면에서 내 코드보다 좋다.
다른 사람 코드를 보면서 어떻게 하면 더 가독성 좋은 코드를 작성해야 할지 공부가 되는거 같다.
마지막으로 가독성 좋은 코드를 작성하기 위해 노력을 해야겠다.
 */
