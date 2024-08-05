/* 문제와 이해
캐시의 초깃값은 캐시 사이즈에 맞춰서 0 0 0 0 0이다.
캐시는 사이즈가 정해져 있으며,
가장 마지막에 있는 요소가 가장 오래된 캐시이다.
가장 오래된 캐시부터 제거해야 한다.
단 똑같은 key의 캐시일 경우 그 캐시의 위치만 제거하고
그 앞에 있는 캐시들만 위치를 변경한다.
그 뒤에 있는 캐시들은 움직일 필요가 없다.
 */

/* 계획
cache라는 변수에 초기값으로 캐시의 사이즈에 맞게 각각 0을 넣어준다.
arr 만큼 반복문을 돌린다.
tmp라는 변수에 arr[i]를 선언과 동시에 할당시킨다.
arr[i]를 두 번 정도 사용할 예정이라 변수에 담아서 이용한다.
pos라는 포지션 변수에 -1을 선언과 동시에 할당한다.
이 변수는 캐시에 tmp라는 값과 똑같은 같이 있는지 체크 및 이용할 예정이다.
2-1 반복문은 캐시에 tmp라는 변수에 값이 있는지 체크하는 용도로 반복을 돌린다.
만약 tmp의 값과 있으면 pos에 j의 위치를 넣어준다.
이렇게 하면 j의 위치부터 j의 앞에 있는 캐시들의 갚만 뒤로 이동시키면 되기 때문이다.
근데 만약 pos의 값이 그대로 -1라면 똑같은 값이 없다는 뜻이므로
pos에는 캐시 사이즈의 -1을 빼고 넣어준다.
그래야 캐시 배열의 마지막 요소부터 반복문을 돌릴 수 있기 때문이다.
이제 2-2 반복문은 pos의 위치부터 앞에 있는 캐시의 값을 뒤로 옮긴다.
j가 0보다 클 때까지이므로,
cache[0]에는 tmp의 값을 넣어준다.
그래야 새로운 캐시의 값을 넣어줄 수 있다.
*/

/* 풀이1
 */
const arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
const n = 9;
const s = 5;

function solution(s, n, arr) {
  const cache = new Array(s).fill(0);

  for (let i = 0; i < n; i++) {
    const tmp = arr[i];
    let pos = -1;

    for (let j = 0; j < s; j++) {
      if (tmp === cache[j]) {
        pos = j;
        break;
      }
    }

    if (pos === -1) {
      pos = s - 1;
    }

    for (let j = pos; j > 0; j--) {
      cache[j] = cache[j - 1];
    }

    cache[0] = tmp;
  }
  return cache;
}

/* 다른 사람 풀이
 */
function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });

  return answer;
}

/* 회고
이번 문제는 이렇게 하면 풀 수 있겠다고 생각은 하였지만
코드로 바꾸는 게 어려웠다.
이 문제를 푸는데 시간이 오래 걸렸다.
아직 많이 부족하다는 뜻이다.
좀 더 빠르게 풀 수 있도록 더 노력을 해야겠다.
 */
