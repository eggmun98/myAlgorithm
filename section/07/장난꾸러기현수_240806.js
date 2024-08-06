/* 문제와 이해
현수는 짝꿍보다 키가 크다.
현수는 앞자리에 앉고 싶어 원래의 짝꿍과 자리를 바꾸려고 한다.
선생님은 원래의 현수 자리와 원래의 짝꿍 자리를 알아야 한다.
 */

/* 계획
먼저 원래의 키 순으로 정렬을 한다.
그리고 반복문으로 원래의 자리와 다르면 result라는 변수에 푸시한다.
sort 메소드, 선택 정렬, 버블 정렬로 정렬 후 풀어볼 계획이다.
*/

/* 풀이1 - sort 메소드 정렬
 */
function solution(arr) {
  const len = arr.length;
  const result = [];
  const sortArr = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    if (arr[i] !== sortArr[i]) {
      result.push(i + 1);
    }
  }
  return result;
}

/* 풀이2 - 선택 정렬
 */
function solution(arr) {
  const len = arr.length;
  const result = [];

  const copy = [...arr];

  for (let i = 0; i < len; i++) {
    let min = i;
    const tmp = arr[i];
    for (let j = i + 1; j < len; j++) {
      if (copy[min] > copy[j]) {
        min = j;
      }
    }
    [copy[min], copy[i]] = [copy[i], copy[min]];
  }

  for (let i = 0; i < len; i++) {
    if (arr[i] !== copy[i]) {
      result.push(i + 1);
    }
  }

  return result;
}

/* 풀이3 - 버블 정렬
 */
function solution(arr) {
  const len = arr.length;
  const result = [];
  const sortArr = [...arr];

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (sortArr[j] > sortArr[j + 1]) {
        [sortArr[j + 1], sortArr[j]] = [sortArr[j], sortArr[j + 1]];
      }
    }
  }
  for (let i = 0; i < len; i++) {
    if (arr[i] !== sortArr[i]) {
      result.push(i + 1);
    }
  }
  return result;
}

/* 회고
이번 문제는 정렬을 하고 나서 풀면 금방 풀겠다고 생각을 하였다.
정말로 정렬 후 비교를 하니 금방 풀게 되었다.
그래서 삽입 정렬 알고리즘과 버블 정렬 알고리즘을 복습하고자
정렬 알고리즘으로 정렬 후 풀어보기도 하였다.
앞으로 더 꾸준한 복습을 해야겠다.
 */
