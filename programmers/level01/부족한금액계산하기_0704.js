// 1. 문제와 이해
// 가격이 count의 횟수배 만큼 늘어납니다.
// 가격이 n배 늘어난 만큼 값을 구해야 합니다.
// 그리고 그 값과 현재 가지고 있는 돈을 뺴야합니다.
// 만약에 돈이 부족하지 않다면 0을 리턴해야 합니다.

// 2. 계획
// answer라는 변수를 만듭니다.
// 반복문을 이용하여 i를 1터 시작하게 합니다.
// 그리고 i와 price를 곱하여 answer 변수와 합을 구합니다.
// 마지막으로 리턴문에 answer - money 값과 0을 비교하여 큰 값을 출력합니다.

// 3. 풀이01
function solution(price, money, count) {
  let answer = 0;
  for (let i = 1; i <= count; i++) {
    answer += price * i;
  }
  return Math.max(answer - money, 0);
}

// 4. 풀이02 (등차수열)
function solution(price, money, count) {
  const answer = price * ((count * (count + 1)) / 2);
  return Math.max(answer - money, 0);
}

// 5 회고
// 이번 문제는 어떻게 해야 간단하게 풀수 있을까 많이 고민을 하였다.
// Math.max() 메소드를 이용하여 두개의 값을 비교하면서 if문을 줄일 수 있었다.
// 또 등차수열 공식을 이용하여 반복문을 안쓰고 총 값을 구했다.
// 오늘 느낀 점으로는 수학의 공식을 잘 알고 있으면 반복문을 안써도 간단하게 풀수 있다는 것을 알게 되었다.
// 그러므로 수학 공부도 열심히 해야겠다고 느꼈다.
