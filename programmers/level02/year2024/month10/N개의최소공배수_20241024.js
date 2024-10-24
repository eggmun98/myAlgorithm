/* 문제와 이해
여러 수들의 최소공배수를 구해야 한다.
 */

/* 계획
먼저 두 수끼리 최소공배수를 구하고, 
그 최소공배수의 값을 또 다른 수와 비교하여 최소공배수를 구한다.
최소공배수는 a * b / 최대공약수이다.
이 공식을 이용하여 푼다.
*/

/* 풀이1
 */
function solution(arr) {
  
    const gcd = (a, b) => {
      if(b === 0) {
        return a
      } else {
        return gcd(b, a % b)
      }
    }  
    
    const lcm = (a, b) => {
        return (a * b) / gcd(a, b)
    }
  
    const answer = arr.reduce((acc, cur) => 
        lcm(acc, cur)
    )  

    return answer;
}

