// 왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다. 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
// 아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.
// 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시 오.
// ▣ 입력설명
// 아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며, 아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.
// ▣ 출력설명
// 입력된 순서대로 일곱 난쟁이의 키를 출력한다.
// ▣ 입력예제 1
// 20 7 23 19 10 15 25 8 13
// ▣ 출력예제 1
// 20 7 23 19 10 8 13

// 내 풀이
let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
function solution(arr) {
  let count = 0;
  let sum = arr.reduce((a, b) => a + b, 0);
  for (let i = 0; i < arr.length; i++) {
    count++;
    for (let j = count; j < arr.length; j++) {
      if (100 === sum - arr[i] - arr[j]) {
        return arr.filter((el) => el !== arr[i] && el !== arr[j]);
      }
    }
  }
}
solution(arr);

// 다른 사람 풀이
function solution(arr) {
  let answer = arr;
  let sum = answer.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (answer[i] + answer[j]) == 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  return answer;
}

// 배운점
// for (let i = 0; i < 8; i++) 여기서 난쟁이는 9명이니까 i는 8명까지만 확인하면 된다.
// for (let j = i + 1; j < 9; j++) 또 나는 count라는 변수를 만들어서 그 다음 확인 하는 방법을 만들었는데
// 이 분은 i= i +1로 해서 다음 확인 방법을 더 효율적으로 하셨다.
// answer.splice(j, 1), answer.splice(i, 1); 이 코드에서 answer.splice(j, 1)을 먼저 해준 이유는
// answer.splice(i, 1)부터 먼저 적으면 배열이 앞당겨져서 정확한 결과값이 안나오기 때문이다.
