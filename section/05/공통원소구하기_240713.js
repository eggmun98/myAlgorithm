/* 문제와 이해
두개의 배열에서 공통 숫자를 찾아야 한다.
 */

/* 계획
머리속으로 가장 먼저 생각이 난 이중 반복문으로 풀기(비효율)
효율적으로 풀기 위해 해시테이블을 이용하기(효율)
메소드와 생성자를 이용해서 풀기(메소드와 생성자 함수 연습)
*/

/* 풀이1
 */
let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];

function solution(a, b) {
  const result = [];
  const n = a.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (a[i] === b[j]) {
        result.push(a[i]);
        break;
      }
    }
  }
  return result.sort();
}

/* 풀이2
 */
function solution2(a, b) {
  const hashTable = {};
  const result = [];
  const aLen = a.length;
  const bLen = b.length;

  for (let i = 0; i < aLen; i++) {
    hashTable[a[i]] = true;
  }

  for (let j = 0; j < bLen; j++) {
    if (hashTable[b[j]]) {
      result.push(b[j]);
    }
  }
  return result.sort();
}

/* 풀이3
 */

function solution3(a, b) {
  const setA = new Set(a);
  const setB = new Set(b);
  return [...setA].filter((el) => setB.has(el)).sort();
}

/* 다른 사람 풀이
 */
function solution4(a, b) {
  a.sort();
  b.sort();
  // let p1= p2 = 0;
  let p1 = (p2 = 0);
  const result = [];

  while (p1 < a.length && p2 < b.length) {
    if (a[p1] === b[p2]) {
      result.push(a[p1++]);
      p2++;
    } else if (a[p1] < b[p2]) {
      p1++;
    } else {
      p2++;
    }
  }

  return result;
}

/* 회고
나는 처음 누구나 생각할 만한 방법인 이중반복문으로 두개의 배열을 탐색했다.
그리고 더 좋은 방법을 고민하여 해시테이블을 이용하여 풀기로 하였다.
해시테이블을 생성하여 키에는 숫자값을 넣었다.
그리고 값은 임의로 true라는 값을 넣어주었다.
이렇게 첫번째 배열에 해시테이블 키를 넣고나서
두번째 반복문에서는 해시테이블에 있는 키에 두번째 배열과 중복이 있을 경우
새로운 배열에 푸시를 하였다.
이렇게 하니 더 효율적으로 풀수 있었다.
또한 마지막으로 생성자 함수와 메소드로 풀었다.
Set 객체를 생성한 후 has 메소드 사용을 연습하기 위해 has를 사용하였다.
다른 사람 풀이를 보면서 이런 방법이 있다는 것도 알게 되었다.
여러가지 풀이를 통해서 최적의 방법을 찾도록 노력하겠다.
 */

solution4(a, b);
