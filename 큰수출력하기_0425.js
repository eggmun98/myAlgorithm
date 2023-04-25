// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작 성하세요.(첫 번째 수는 무조건 출력한다)
// ▣ 입력설명
// 첫 줄에 자연수 N이 주어지고, 그 다음 줄에 N개의 정수가 입력된다.
// ▣ 출력설명
// 자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다.
// ▣ 입력예제 1 6
// 7 3 9 5 6 12
// ▣ 출력예제 1 7 9 6 12

// 내 풀이
const myFn = (num) => {
  const answer = [num[0]];
  for (let i = 0; i < num.length; i++) {
    if (num[i] > num[i - 1]) {
      answer.push(num[i]);
    }
  }
  return answer;
};

myFn([7, 3, 9, 5, 6, 12]);

// 다른사람 풀이
function solution(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
}

// 배운 점
// 나는 불 필요하게 인덱스 0 부터 시작을 하였다.
// 다른사람 풀이에는 인덱스 1부터 시작을 하였다.
// 1부터 시작을하면 반복문 횟수를 줄일 수 있다.
