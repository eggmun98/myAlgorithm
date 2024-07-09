/* 문제와 이해
두 배열의 오름차순으로 하나의 배열로 합쳐야 한다.
 */

/* 계획
메소드로만 풀어보기도 하고, 메소드없이 풀어보도록 한다.
메소드로만 푼다면 하나의 배열로 합치고 나서 sort 메소드를 사용해야 한다.
위 방식으로 한다면 시간 복잡도는 O((n + m) log (n + m)) 이렇게 된다.
그래서 sort를 안쓰고 풀어야 O(n + m) 시간 복잡도로 풀 수 있다.
*/

/* 풀이1
 */
function solution(a, b) {
  return [...a, ...b].sort();
}

/* 풀이2
 */
function solution2(a, b) {
  return [a, b].flat().sort();
}

/* 풀이3
 */
function solution3(a, b) {
  const result = [];
  let p1 = (p2 = 0);
  const total = a.length + b.length;

  for (let i = 0; result.length < total; i++) {
    if (p1 >= a.length) {
      result.push(b[p2++]);
    } else if (p2 >= b.length) {
      result.push(a[p1++]);
    } else if (a[p1] < b[p2]) {
      result.push(a[p1++]);
    } else {
      result.push(b[p2++]);
    }
  }
  return result;
}

/* 다른 사람 풀이
 */
function solution4(a, b) {
  const result = [];
  let n = a.length;
  let m = b.length;
  let p1 = (p2 = 0);

  while (p1 < n && p2 < m) {
    if (a[p1] < b[p2]) {
      result.push(a[p1++]);
    } else {
      result.push(b[p2++]);
    }
  }

  while (p1 < n) {
    result.push(a[p1++]);
  }

  while (p2 < m) {
    result.push(b[p2++]);
  }

  return result;
}

/* 회고
처음 이 문제는 메소드로만 풀었을 때는 금방 풀었다.
하지만 이렇게 메소드로만 푼다면 의미가 없을거 같았다.
그래서 메소드없이 절차 지향적으로 풀어보려고 하였다.
확실히 메소드없이 풀어보니 O(n + m) 시간 복잡도로 풀 수 있게 되어
메소드로만 풀었을 때보다 더 효율적으로 풀게 되었다.
또한 다른 사람의 풀이를 보면서 더 좋은 방법이 있다는 것을 알게 되었다.
앞으로 더 좋은 코드를 작성하기 위해 노력을 하겠다.
 */
