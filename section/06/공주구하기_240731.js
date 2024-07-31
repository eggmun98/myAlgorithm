/* 문제와 이해
왕자가 n 번째 까지가 있다.
1번 왕자부터 시계방향으로 돌아서 k 번째가 온다면 
그 k 번째의 왕자를 사라진다.
계속 1명이 남을 때까지 시계 방향으로 돌아서 k 번째 왕자를 제거한다.
 */

/* 계획
시계방향으로 k 번째 왕자를 제거해야 하니 큐 방식으로 풀려고 한다.
먼저 이 문제는 큐를 이용한 문제니 큐라는 변수에 Array.from 메소드를 이용하여 왕자를 만든다.
그리고 큐의 길이가 0일 될 때까지 반복문을 돌린다.
while 문안에 i가 0번째 요소부터 k - 1번째 요소까지 반복문을 돌린다.
이 반복문을 도는 동안 큐에 앞에 있는 요소부터 푸시를 핸다.
이 반복문이 끝나면 k 번째 요소가 배열의 첫 번째 요소로 왔다는 뜻이므로
시프트로 제거를 해준다.
이렇게 반복을 하다가 큐의 길이가 1이 남을 경우 result라는 변수에
시프트를 하면서 while문을 종료 시키고 함수를 최종 리턴한다.
*/

/* 풀이1
 */
function solution(n, k) {
  const queue = Array.from({ length: n }, (_, dex) => dex + 1);
  let result = "";

  while (queue.length) {
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
    if (queue.length === 1) {
      result = queue.shift();
    }
  }
  return result;
}

/* 풀이2
 */
function solution(n, k) {
  const queue = Array.from({ length: n }, (_, dex) => dex + 1);

  for (let i = 0; i < queue.length; i++) {
    console.log(i);
    if (i == k - 1) {
      queue.shift();
      queue.push(queue.shift());
      i = 0;
    } else {
      queue.push(queue.shift());
    }
    if (k > queue.length) {
      queue.pop();
    }
  }
  return queue[0];
}

/* 회고
이번 문제는 머리속으로 어떻게 풀지 빠르게 생각하였는데,
코드로 바꾸는 게 어려웠다.
풀이 2가 가장 처음에 푼 풀이인데,
너무 어렵게 풀기도 했고, for 문으로 풀기에는 아닌 문제라고 판단을 하여
while 문으로 풀었다.
두 번의 풀이로 코드를 개선하여서 좋았다.
앞으로도 여러 번의 풀이로 코드를 개선하면서 알고리즘을 풀겠다.
 */
