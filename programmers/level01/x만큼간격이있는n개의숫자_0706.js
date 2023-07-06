// 1. 문제와 이해
// x간격 만큼 숫자를 + x를 해야 합니다.

// 2. 계획
// 반복문 대신 메소드로만 풀려고 합니다.
// new Array(n)으로 n개만큼의 요소를 가진 새로운 배열을 생성합니다.
// 각 배열에 fill(1) 메소드를 이용하여 1값을 넣어 줍니다.
// map 함수를 이용하여 el + i * x를 합니다.
// [1, 1, 1, 1, 1] + i = [1, 2, 3, 4, 5]
// [1, 2, 3, 4, 5] * x = [2, 4, 6, 8, 10]

// 3. 풀이1
function solution(x, n) {
  const answer = new Array(n).fill(1).map((el, i) => {
    return (el + i) * x;
  });
  return answer;
}

// 4. 풀이2
function solution(x, n) {
  const answer = new Array(n).fill(x).map((el, i) => {
    return el * (i + 1);
  });
  return answer;
}

// 5. 회고
// new Array 메소드를 이용하여 문제를 풀어보았습니다.
// 어떻게 해야 코드의 양을 줄이면서 풀수 있을까 고민을 하였습니다.
// 그 결과 각 배열에 인덱스값을 더해주고
// 각 요소마다 x값을 곱해주면 효율적으로 코드를 작성할 수 있었습니다.
// 앞으로 더 효율적인 코드를 작성할 수 있게 노력을 해야겠습니다.
