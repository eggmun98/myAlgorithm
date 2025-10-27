// 1. 문제와 이해
// 설명: 친구 A, B, C에게 사탕을 나누어 주려 한다. (총 N개의 사탕)
//       아래 조건을 모두 만족하는 (A, B, C)의 경우의 수를 구하시오.
// 입력: 정수 N (3 ≤ N ≤ 100)
// 출력: 가능한 경우의 수 (정수)
// 조건:
//   1. A + B + C = N (남는 사탕 없음)
//   2. A ≥ B + 2  (A는 B보다 2개 이상 많음)
//   3. A, B, C ≥ 1 (모두 최소 1개 이상)
//   4. C는 짝수 (C % 2 === 0)
// 유형: 완전탐색 / 브루트포스

// 2. 계획
// 방법 A (3중 반복문 완전탐색)
//   - A, B, C를 각각 1부터 N까지 반복.
//   - 조건 (1)~(4)를 모두 만족할 때 count 증가.
//   - 단, a+b+c === N을 가장 먼저 필터링하여 불필요한 비교 최소화.
//
// 방법 B (2중 반복문 최적화)
//   - a = N - b - c 로 두면 A는 자동 계산됨.
//   - 따라서 b, c만 반복문으로 순회.
//   - 조건을 확인하고 count++
//
// 시간복잡도: O(N²)
// 공간복잡도: O(1)

// 풀이 3-1 최적화
function solution (input) {
    let count = 0;
    
    for(let b = 1; b<=input; b++) {
      for(let c = 1; c<=input; c++) {
        if(c % 2 !== 0) continue;
        
        const a = input - (b + c);
        
        if(a < b + 2) continue;
        
        count++
      }
    }
    
    return count
    
  }
  
  solution(6)
  
// 풀이 3-2 
function solution2 (input) {
  let count = 0;
  for(let a = 1; a<=input; a++) {
    for(let b = 1; b<=input; b++) {
      for(let c = 1; c<=input; c++) {
        if(a + b + c === input ) {
            if(a >= b + 2) {
                if(a >= b + 2) {
                    if(c % 2 === 0) {
                        count++
                    }
                }
            }
                }
            }
        }
  }
  return count
}

console.log(candyDistribution(6));  // 1