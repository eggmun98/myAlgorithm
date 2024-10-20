// 문제 설명 출처: https://school.programmers.co.kr/learn/courses/30/lessons/12947
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
// 제한 조건
// x는 1 이상, 10000 이하인 정수입니다.
// 입출력 예
// x	return
// 10	true
// 12	true
// 11	false
// 13	false

// 새로 푼 풀이
function solution(x) {
  x = String(x);
  let sum = x.split("").reduce((a, b) => a + Number(b), 0);
  if (x % sum !== 0) return false;
  return true;
}

// 예전에 내가 푼 풀이
function solution(x) {
  x = String(x);
  let sum = 0;
  for (let i = 0; i < x.length; i++) sum = sum + Number(x[i]);
  if (x % sum !== 0) return false;
  return true;
}

// 가독성을 무시하고 푼 풀이
function solution(x) {
  return x %
    String(x)
      .split("")
      .reduce((a, b) => a + Number(b), 0) !==
    0
    ? false
    : true;
}
solution(10);

// 회고
// 이 문제는 옛날에 내가 풀었던 문제이다.
// 그래서 새로운 풀이로 풀어보았다.
// 예전에 내가 푼 풀이 방법은 변수를 2개나 만들어서 비효율적이었다.
// 새로 푼 풀이는 변수를 하나만 만들고 풀었다.
// 그리고 한줄로만 풀고 싶어서 가독성을 무시한채 푼 풀이도 있다.
// 삼항연산자를 이용하여 바로 return 값을 주었다.
