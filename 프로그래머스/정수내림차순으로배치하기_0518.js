// 출처: https://school.programmers.co.kr/learn/courses/30/lessons/12933
// 문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.
// 입출력 예
// n	return
// 118372	873211

// 내 풀이
function solution(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

// 회고
// 간단하게 쉬운 문제를 찾아서 풀어보았다.
// 평소에 알고 있더 메서드로 풀어보았다.
// 쉬운 문제였다.
