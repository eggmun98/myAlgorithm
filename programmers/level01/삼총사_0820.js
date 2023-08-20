// 1. 문제와 이해
// 중복 없이 경우의 수를 게산 해야 합니다.
// C(n, r) 조합의 원리를 이해해야 합니다.

// 2. 계획
// 삼중 반복문으로 경우의 수를 계산 합니다.
// 중복을 피하기 위해 j와 k값을 1씩 더해서 반복문을 돌립니다.
// i와 j와 k 반복문은 각 3번씩만 돌면 됩니다.
// 그러므로 i반복문은 -2을 해주고
// j반복문은 j가 1이 높기 때문에 -1만 해줍니다.
// k반복문은 k가 2이 높기 때문에 그대로 나둡니다.

// 3. 풀이
for (let i = 0; i < numbers.length - 2; i++) {
  for (let j = i + 1; j < numbers.length - 1; j++) {
    for (let k = j + 1; k < numbers.length; k++) {
      if (numbers[i] + numbers[j] + numbers[k] === 0) {
        answer++;
      }
    }
  }
}

// 4. 회고
// 처음부터 삼중반복문으로 풀어야 겠다고 생각을 하였다.
// 하지만 중복 없이 경우의 수를 계산하려고 하니 어려웠다.
// 계속 고민을 하여 중복없이 경우의 수를 계산하는 방법을 알아냈다.
// 다음에도 많은 고민을 통해서 풀수 있도록 노력해야 겠다.
