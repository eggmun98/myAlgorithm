// 문제 설명
// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
// 제한사항
// absolutes의 길이는 1 이상 1,000 이하입니다.
// absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
// signs의 길이는 absolutes의 길이와 같습니다.
// signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.
// 입출력 예
// absolutes	signs	result
// [4,7,12]	[true,false,true]	9
// [1,2,3]	[false,false,true]	0
// 입출력 예 설명
// 입출력 예 #1
// signs가 [true,false,true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
// 따라서 세 수의 합인 9를 return 해야 합니다.
// 입출력 예 #2
// signs가 [false,false,true] 이므로, 실제 수들의 값은 각각 -1, -2, 3입니다.
// 따라서 세 수의 합인 0을 return 해야 합니다.

// 내 풀이
function solution(a, s) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    if (s[i]) {
      answer += a[i];
    } else {
      answer -= a[i];
    }
  }
  return answer;
}

// 다른 사람 풀이
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}

// 회고
// 이번 문제는 보자마자 풀었다.
// 그만큼 쉬운 문제였다.
// 근데 다른 사람 문제를 풀이를 보니 더 간단하게 풀었다.
// 저 풀이를 보면 reduce를 이용하여 누적 값인 acc와 배열의 값인 val을 가져와서
// signs[i]가 트루라면 1을 val과 곱하고
// signs[i]가 펄스라면 -1을 val과 곱해서
// 음수 양수를 정했다.
// 이런 방식은 생각지도 못했다..
// 앞으로 나는 창의적으로 더 효율적으로 문제를 풀수 있게 고민을 해야겠다.
