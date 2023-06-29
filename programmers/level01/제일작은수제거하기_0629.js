// 문제 설명
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

// 내 풀이
function solution(arr) {
  const min = Math.min(...arr);
  const answer = arr.filter((el) => el !== min);
  return answer.length ? answer : [-1];
}

// 회고
// 이번 문제는 메소드로만 풀었다.
// 먼저 Math.min 메소드를 이용하여 가장 작은 값을 구했다.
// 그리고 answer 변수에 가장 작은 값을 제거한 값을 담았다.
// 마지막으로 리턴문에 삼항 연산자를 이용하여 리턴하였다.
