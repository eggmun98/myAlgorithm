// 출처: https://school.programmers.co.kr/learn/courses/30/lessons/86051
// 문제 설명
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
// 제한사항
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 원소 ≤ 9
// numbers의 모든 원소는 서로 다릅니다.
// 입출력 예
// numbers	result
// [1,2,3,4,6,7,8,0]	14
// [5,8,4,0,6,7,9]	6
// 입출력 예 설명
// 입출력 예 #1
// 5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.
// 입출력 예 #2
// 1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.

// 내 풀이
function solution(numbers) {
  var answer = 0;
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }
  return answer;
}

// 다른 사람 풀이
function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

// 회고
// 나는 맨 처음 이중 반복문으로 풀려고 하였다.
// 하지만 비효율적인거 같아서 includes 메소드를 이용하여 간단하게 풀었다.
// 즉 반복문이 돌면서 0부터 9까지 numbers 배열안에 그 i값이 없다면 answer에 더하게 해주었다.
// 다른 사람 문제 풀이를 보고 놀라웠다.
// 어짜피 이 문제는 0~9의 숫자 밖에 없으니 45부터 시작을 하여 number의 총값만 빼주면
// 그 값이 나오는 간단한 문제였다.
// 이런 생각을 못한게 아쉽다.
// 앞으로 창의적인 생각을 할수 있게 노력을 해야겠다.
