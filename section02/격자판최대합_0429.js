let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

// 내 풀이
const myFn = (arr) => {
  let answer = 0;
  let sum = [0, 0];
  let dia = [0, 0];

  for (let i = 0; i < arr.length; i++) {
    dia[0] += arr[i][i]; // 왼쪽 대각선 합
    dia[1] += arr[i][arr.length - 1 - i]; // 오른쪽 대각선 합
    sum = [0, 0];
    for (let j = 0; j < arr.length; j++) {
      sum[0] += arr[i][j]; // 가로 줄 합
      sum[1] += arr[j][i]; // 세로 줄 합
    }
    answer = Math.max(...sum, answer);
  }
  return Math.max(answer, ...dia);
};

myFn(arr);

// 다른 사람 풀이
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = (sum2 = 0);
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

// 배운 점
// sum1 변수와 sum2 변수를 다시 재사용하는 것을 배웠다.
// 다시 재사용할 생각을 못했는데 이런 방법을 알게 된게 신기하고 놀랍다.
// 그리고 변수를 내 풀이보다 더 적제 사용하여 메모리 사용량을 줄여서 하나 배웠다.
// 나도 최대한 메모리 사용량을 줄이면서 알고리즘을 풀어야 겠다.
