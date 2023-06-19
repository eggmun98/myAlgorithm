let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

let arr2 = [
  [1, 2, 3],
  [2, 3, 2],
  [3, 2, 1],
];

// 내 풀이
const myFn = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (
        (i < arr.length - 1 && arr[i][j] <= arr[i + 1][j]) || // 아래 검사
        (j < arr.length - 1 && arr[i][j] <= arr[i][j + 1]) || // 오른쪽 검사
        (i > 0 && arr[i][j] <= arr[i - 1][j]) || // 위 검사
        (j > 0 && arr[i][j] <= arr[i][j - 1]) // 왼쪽 검사
      ) {
        continue;
      }
      count++;
    }
  }

  return count;
};

myFn(arr);
myFn(arr2);
// 다른 사람 풀이
function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }

  return answer;
}

// 느낀 점
// 일단 내 코드는 for문을 줄이기 위해 if문에 조건을 많이 넣었다.
// 그래서 for문을 두번 썼다.
// 반대로 다른 사람 코드는 for문을 세번 쓰고 변수를 많이 썼다.
// 또 배운 점으로는 2차원 배열을 탐색할 때
// let dx = [-1, 0, 1, 0]; let dy = [0, 1, 0, -1];
// 이런식으로 dx, dy 변수를 만들어서 검사 하는 방법을 알게 되었다.
// 저런 방식으로도 문제를 풀어봐야 겠다
