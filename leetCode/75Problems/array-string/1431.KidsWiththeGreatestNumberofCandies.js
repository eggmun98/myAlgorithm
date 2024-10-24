/* 문제와 이해
각 배열의 캔디를 추가 캔디와 각각 합해서 배열에 있는 캔디들보다 커야 한다.
 */

/* 계획
나는 완전 탐색을 이용하여 다 풀려고 한다.
이중 반복문을 이용해서 각각 비교를 한다.
*/

/* 풀이1
 */
var kidsWithCandies = function(candies, extraCandies) {
    const n = candies.length;
    const result = []
    
    for(let i = 0; i<n; i++) {
      const maxCandies = candies[i] + extraCandies
      let checkMax = true
        for(let j = 0; j<n; j++) {
            if(i === j) {
              continue;
            }  
            
            if(maxCandies < candies[j]) {
              checkMax = false
              break;
            }
          
            
        }
      result.push(checkMax)
    }
  return result
    
    
};

/* 다른 사람 풀이
 */
var kidsWithCandies = function(candies, extraCandies) {
    const maxCandies = Math.max(...candies);
    
    const result = [];
    
    for (let i = 0; i < candies.length; i++) {
      if (candies[i] + extraCandies >= maxCandies) {
        result.push(true);
      } else {
        result.push(false);
      }
    }
    
    return result;
  };

/* GPT 풀이
 */
function kidsWithCandies(candies, extraCandies) {
    const maxCandies = Math.max(...candies);  // 가장 많은 사탕 수 구하기
    return candies.map(candy => candy + extraCandies >= maxCandies);
  }

/* 회고
이번 문제는 완전 탐색을 할 필요가 없었다.
그냥 가장 많은 캔디를 가진 캔디 수를 구하고 그 캔디 수만 비교를 하면
굳이 다른 캔디 수랑 비교를 할 필요가 없기 때문이다.
왜냐하면 이 문제의 핵심은 가장 많은 캔디 수보다 커야 하기 때문이다.
 */
