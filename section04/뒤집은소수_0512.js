// N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하 는 프로그램을 작성하세요. 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출 력한다. 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.
// ▣ 입력설명
// 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다. 각 자연수의 크기는 100,000를 넘지 않는다.
// ▣ 출력설명
// 첫 줄에 뒤집은 소수를 출력합니다. 출력순서는 입력된 순서대로 출력합니다.
// ▣ 입력예제 1
// 9
// 32 55 62 20 250 370 200 30 100
// ▣ 출력예제 1 23 2 73 2 3

// 내 풀이
const myFn = (num) => {
  const answer = [];
  const sosu = (num) => {
    if (num === 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  for (let i = 0; i < num.length; i++) {
    num[i] = Number(num[i].toString().split("").reverse().join(""));
    if (sosu(num[i])) answer.push(num[i]);
  }

  return answer;
};

myFn([32, 55, 62, 20, 250, 370, 200, 30, 100]);

// 다른 사람 풀이
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

// 회고
// 일단 이번 문제를 푸는데 가장 오래 걸렸더거 같다.
// 내가 소수 문제를 많이 안푼 것도 있었다.
// 내 코드는 숫자를 거꾸로 뒤집는게 비효율적으로 되어있다.
// 왜나하면 메서드를 많이 썼기 때문이다.
// 그래도 반복문은 한번만 썼다.
// 다른 사람 코드는 숫자를 일의자리를 뽑아서 숫자를 거꾸로 뒤집는 방식으로 하였다.
// 이버 문제로 소수 문제는 다시 나오면 잘 풀수 있을거 같다.
