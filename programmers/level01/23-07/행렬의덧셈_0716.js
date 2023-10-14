// 1. 문제와 이해
// 행렬의 덧셈을 해야 합니다.
// 행과 열의 길이는 500이 넘지 않습니다.

// 2. 계획
// answer 변수에 빈 배열을 생성합니다.
// 이중 반복문을 이용하여 이중 배열을 탐색을 합니다.
// 만약 i가 언디파인드라면 빈배열을 푸쉬 합니다.
// 그리고 answer 변수를 리턴합니다.

// 3. 풀이
function solution(arr1, arr2) {
  var answer = [[]];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      const sum = arr1[i][j] + arr2[i][j];
      if (answer[i] === undefined) {
        answer.push([]);
      }
      answer[i].push(sum);
    }
  }
  return answer;
}

// 4. 회고
// 대학교 시절에 행렬의 덧셈을 했던 기억이 났습니다.
// 그래서 쉽게 풀수 있었습니다.
// 앞으로 더 노력하는 개발자가 되어야 겠습니다.
