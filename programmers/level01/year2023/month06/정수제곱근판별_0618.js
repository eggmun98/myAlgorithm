// 문제 설명 - 출처: https://school.programmers.co.kr/learn/courses/30/lessons/12934
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.
// 입출력 예
// n	return
// 121	144
// 3	-1

// 내 풀이1
function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}

// 내 풀이2
function solution(n) {
  n = Math.sqrt(n);
  return n % 1 === 0 ? Math.pow(n + 1, 2) : -1;
}

// 회고
// 이번 문제는 한줄로만 풀고 싶어서 삼항연산자를 사용하였다.
// Math.sqrt() 메서드는 루트로 계산된 값을 출력해 준다.
// Math.pow() 메서드는 제곱의 계산을 해준다.
// 두개의 메소드를 이용하여 간단하게 풀었다.
