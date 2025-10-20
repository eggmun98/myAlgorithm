// 1. 문제와 이해
// 설명: prices[i]는 i번째 날의 주식 가격이다.
//       하루에 한 번만 주식을 사고, 이후의 어느 날에 팔 수 있다.
//       최대 이익을 구하라. (단, 이익이 음수면 0 반환)
// 입력: 정수 배열 prices (1 ≤ prices.length ≤ 10^5, 0 ≤ prices[i] ≤ 10^4)
// 출력: 정수 (최대 이익)
// 조건: 반드시 "buy day < sell day" 여야 함.
// 유형: Two Pointer / Greedy (Sliding Window)

// 2. 계획
// - 한 번만 사고 한 번만 팔 수 있으므로, 
//   "지금까지의 최저가"를 기록하면서 "현재 가격 - 최저가" 차이를 계산한다.
// - 각 시점의 profit = prices[i] - minPrice
// - profit이 음수면 의미 없음, 최댓값을 갱신한다.
// - 한 번만 배열을 순회하면 충분하다 (O(n), O(1))

// 3. 풀이
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;  // 지금까지의 최소 가격
    let maxProfit = 0;        // 최대 이익
  
    for (price of prices) {
      // 현재 가격이 최저가보다 작으면은 최저가를 갱신한다.
      if(minPrice > price) {
          minPrice = price
      } else {
          maxProfit = Math.max(maxProfit, price - minPrice)
      }
    }
    return maxProfit
  
  };

  // 4. 테스트 케이스
  maxProfit([7, 1, 5, 3, 6, 4])
  maxProfit([7, 6, 4, 3, 1])