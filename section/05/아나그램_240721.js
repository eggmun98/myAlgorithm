/* 문제와 이해
아나그램인지 판단을 해야 한다.
알파벳의 나열 순서는 다르지만 그 구성이 일치하면 아나그램이다.
아나그램 판별 시 대소문자가 구분된다.
 */

/* 계획
먼저 hash라는 변수에 Map 객체를 담는다.
그리고 첫 번째 문자열에 각 문자마다 key로 하여 그 key의 값으로 +1 해준다.
두 번째 반복문에서 두 번째 문자열에서 각 문자마다 검사를 하여
각 문자와 해시에 담긴 key를 비교한다.
먼저 해시에 담긴 key가 있으면 -1을 해준다.
아니라면 아나그램이 아니므로 바로 리턴해서 NO를 해준다.
그리고 어느 순간 hash.get(x)에서 0이 나오면 hash.delete를 해준다.
그리고 마지막에 hash.size가 0이 아니면 NO 맞으면 YES를 리턴해준다.
*/

/* 풀이1
 */
function solution(a, b) {
  const hash = new Map();

  for (x of a) {
    if (hash.has(x)) {
      hash.set(x, hash.get(x) + 1);
    } else {
      hash.set(x, 1);
    }
  }

  for (x of b) {
    if (hash.has(x)) {
      hash.set(x, hash.get(x) - 1);
      if (hash.get(x) === 0) {
        hash.delete(x);
      }
    } else {
      return "NO";
    }
  }
  return hash.size ? "NO" : "YES";
}

/* 풀이2
 */
function solution(a, b) {
  const hashA = new Map();
  const hashB = new Map();

  for (x of a) {
    if (hashA.has(x)) {
      hashA.set(x, hashA.get(x) + 1);
    } else {
      hashA.set(x, 1);
    }
  }

  for (x of b) {
    if (hashB.has(x)) {
      hashB.set(x, hashB.get(x) + 1);
    } else {
      hashB.set(x, 1);
    }
  }

  for ([key, value] of hashA.entries()) {
    if (hashB.get(key) !== value) {
      return "NO";
    }
    return "YES";
  }
}

/* 다른 사람 풀이3
 */
function solution(str1, str2) {
  let answer = "YES";
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) == 0) return "NO";
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
}

/* 회고
일단 나는 처음 비효율적으로 풀어보았다.
반복문은 세 번이나 돌린 것이다.
시간 복잡도는 O(2n)이나 나왔다.
그리고 나는 좀 더 효율적으로 풀기 위해 고민을 하였다.
그 고민이 하나의 해시 맵으로만 이용해서 푸는 문제였다.
하나의 해시 맵으로 첫 번째 문자열의 정보를 담고 그 해시 맵 가지고
두 번째 문자열을 비교해서 계산하는 거였다.
그렇게 하여 더 효율적인 방법으로 풀게 되었다.
마지막으로 다른 사람 코드를 보고 이렇게 더 좋은 풀이가 있구나 알게 되었다.
다른 사람 풀이는 첫 번째 반복문까지는 나랑 똑같다.
두 번째 반복문에서 get으로 0 이 나면 아나그램이 아니라고 판별하여 바로 리턴 NO를 했다.
이 뜻은 반복문을 돌 때마다 -1을 해주는데 get으로 찾았는데 0이 나왔다면
결국 첫 번째 문자열에서 두 번째 문자열의 문자보다 더 많다는 뜻이므로(같은 문자)
아나그램이 아니라는 뜻이다.
다른 사람 풀이를 보고 나보다 더 문제 이해도가 높았다는 것을 알게 되었고,
더 좋은 풀이를 배워서 좋았다.
앞으로 더 발전된 모습으로 풀어보겠다.
 */
