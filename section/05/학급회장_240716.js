/* 문제와 이해
5명의 후보가 있다. n개의 투표용지에서 가장 많은 투표를 받은 후보를 출력해야 한다.
 */

/* 계획
빈객체를 생성하고, max라는 변수에 자바스크립트에서 가장 안전한 제일 작은값을 할당한다.
그리고 for of문으로 빈객체에 문자열에서 문자를 키로 넣는다.
최초 1번은 숫자 1을 넣어주고 그 다음부터는 기존 숫자 더하기 +1을 해준다.
이 반복문이 끝나면 다시 해시테이블 객체를 키와 value를 나눈다.
그리고 반복문으로 가장 큰값을 구한다.
*/

/* 풀이1
 */
function solution(n, str) {
  const hashTable = {};
  let max = Number.MIN_SAFE_INTEGER;
  let answer = "";

  for (x of str) {
    if (hashTable[x]) {
      hashTable[x] += 1;
    } else {
      hashTable[x] = 1;
    }
  }

  const result = Object.entries(hashTable);

  for (let [key, value] of result) {
    if (value > max) {
      max = value;
      answer = key;
    }
  }

  return answer;
}

/* 다른사람 풀이
 */
function solution(s) {
  let answer;
  let sH = new Map();
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

/* 회고
일단 나는 객체를 이용하여 풀었다.
자바스크립트로는 맵 객체가 익숙하지 않아서 맵 객체로 풀 생각을 못했는데,
다른 사람 풀이에서 맵 객체로도 풀수 있다는 것을 알게 되었다.
오늘은 Map 객체로 풀수 있다는 것에 알게 되었고 방법들을 알게 되었다.
 */
