// N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 줄에 N(3<=N<=1000)이 입력되고, 두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력 된다. 같은 점수가 입력될 경우 높은 등수로 동일 처리한다. 즉 가장 높은 점수가 92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.
// ▣ 출력설명
// 입력된 순서대로 등수를 출력한다.
// ▣ 입력예제 1
// 5
// 87 89 92 100 76
// ▣ 출력예제 1 43215

const cases1 = [87, 89, 92, 100, 76];
const cases2 = [70, 70, 70, 88, 94, 65, 100];

// 내 풀이
const myFn = (num) => {
  let count = 1;
  const answer = [];
  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (num[i] < num[j]) {
        count++;
      }
    }
    answer.push(count);
    count = 1;
  }
  return answer;
};

myFn(cases1); // [ 4, 3, 2, 1, 5 ]
myFn(cases2); // [ 4, 4, 4, 3, 2, 7, 1 ]

// 다른 사람 풀이
function solution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

// 배운 점
// 배열의 인덱스에도 직접 ++ 연산자를 사용할 수 있다는 것을 알게 됨
// 새로운 1차원 배열 초기화 방법도 알게 됨
// 보통 나는 new Array(10).fill("") 이렇게 메서드 두개를 사용했음
// 근데 메서드 하나로도 1차원 배열 초기화가 가능하다는 것을 알게 됨

// ex1)
// const qqq = new Array(10).fill("")
// ex2)
// const bbq = Array.from({length: 10}, () => 1)
