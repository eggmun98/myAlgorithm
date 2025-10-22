// 1. 문제와 이해
// 설명: 정수 배열 prices가 주어진다. prices[i]는 i번째 날의 주가이다.
//       하루에 여러 번 사고팔 수 있지만, 동시에 한 주만 보유할 수 있다.
//       즉, 여러 번 거래 가능하지만, “보유 상태”는 0 또는 1뿐이다.
//       같은 날에도 팔고 다시 살 수 있다 (단, 보유 주식은 1개를 넘지 않음).
// 목표: 가능한 최대 이익(max profit)을 구하라.
// 입력: prices (길이 1..3*10^4, 값 범위 [0, 10^4])
// 출력: 정수 (최대 이익)
// 조건: 무한 거래 가능, 단 보유 주식은 최대 1개
// 유형: Greedy (탐욕적 선택), 시뮬레이션, DP

// 2. 계획
// - 핵심 아이디어: “이익이 나는 구간은 모두 취한다.” (즉, 모든 상승 폭을 더한다.)
// - prices가 [1,5,3,6]이라면
//   → (5-1) + (6-3) = 7, 즉 오르는 구간마다 차익을 얻는다.
// - 왜 그리디가 가능한가?
//   → 여러 번 사서 팔 수 있으므로, 전체 상승 구간을 다 먹는 게 항상 최적이다.
// - 구현:
//   1. totalProfit = 0 초기화
//   2. i=1부터 순회하며 prices[i] > prices[i-1]이면
//       totalProfit += prices[i] - prices[i-1]
//   3. 끝까지 더한 값이 최대 이익이다.
// - 시간복잡도: O(n)
// - 공간복잡도: O(1)

// 3. 풀이
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let totalProfit = 0;

    for (let i = 1; i < prices.length; i++) {

        // 하루 전보다 오늘 가격이 높으면 그 차익을 얻는다.
        if (prices[i] > prices[i - 1]) {
            totalProfit += prices[i] - prices[i - 1];
        }
    }

    return totalProfit;
};

// 4. 테스트 케이스
console.log(maxProfit([7,1,5,3,6,4])); // 출력: 7 (4 + 3)
console.log(maxProfit([1,2,3,4,5]));   // 출력: 4 (5 - 1)
console.log(maxProfit([7,6,4,3,1]));   // 출력: 0 (상승 구간 없음)
console.log(maxProfit([2,4,1]));       // 출력: 2 (4 - 2)
console.log(maxProfit([2,1,2,0,1]));   // 출력: 2 ((2-1) + (1-0))
