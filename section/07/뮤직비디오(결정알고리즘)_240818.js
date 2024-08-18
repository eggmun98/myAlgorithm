/* 문제와 이해
@목표
 주어진 노래들을 순서대로 M개의 DVD에 나누어 담되, 각 DVD의 크기(녹화 가능한 길이)를 최소화하는 것입니다.
@제약 조건
 1. 노래의 순서는 바뀌면 안 됩니다.
 2. 한 노래를 쪼개서 여러 DVD에 담을 수 없습니다.
 3. M개의 DVD는 모두 같은 크기여야 합니다.
 */

/* 계획
이진 탐색을 이용하여 풀 생각이다.
먼저 배열의 최솟값과 최댓값을 구한다.
최댓값은 하나의 dvd에 최대 분이고,
최솟값은 하나의 dvd에 최소 분이다
최댓값은 배열의 값을 합치면 된다.
최솟값은 배열에서 가장 큰 숫자가 최소 값이다. => 왜나하면 가장 큰 숫자가 하나의 dvd에 혼자 들어 있어야 하기 때문이다.
그래서 최솟값부터 최댓값까지 이진 탐색을 한다.
중간 값은 (최솟값 + 최댓값) / 2이다.
그리고 중간값 기준으로 배열을 반복문을 돌리는 check 함수를 만든다.
배열의 왼쪽부터 중간값이랑 같거나 작을 때까지 sum이라는 변수에 담는다.
count 변수는 초깃값이 1이다. 이거는 최소한 1개의 dvd가 있다는 뜻이고,
바로 sum이라는 변수에 담기 때문에 하나는 이미 있다고 생각하는 거다.
그러다가 중간값보다 커지면 그전까지만 하나의 dvd에 담고 
다시 새로운 dvd에 담는다.
이렇게 몇 개의 dvd가 생기는지 확인한다.
이제 이진 탐색 while 문을 돌린다.
만약 check의 결과값이 mid보다 같거나 작다면 rt는 mid - 1을 해준다.
그리고 answer라는 변수에 mid 값을 저장한다.
그게 아니라면 lt는 mid + 1을 해준다.
*/

/* 풀이1
 */
function solution(arr, m) {
  const check = (arr, mid) => {
    let count = 1;
    let sum = 0;
    for (x of arr) {
      if (sum + x > mid) {
        count++;
        sum = x;
      } else {
        sum += x;
      }
    }
    return count;
  };

  let lt = Math.max(...arr);
  let rt = arr.reduce((acc, cur) => acc + cur, 0);
  let answer;

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (check(arr, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}

/* 회고
이번 문제가 가장 어려웠던 문제였던 거 같다.
어떻게 풀지 감이 안잡혔다.
하지만 계속 고민을 시도하였고, 이렇게 하면 풀 수 있겠다고 생각을 하였다.
앞으로 더 노력해야겠다.
 */
