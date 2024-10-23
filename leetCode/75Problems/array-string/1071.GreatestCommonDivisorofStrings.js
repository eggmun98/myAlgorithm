/* 문제와 이해
첫 번째 매개변수 문자열이 두 번째 문자열보다 길다.
첫 번째 문자열과 두 번째 문자열의 공통된 패턴을 찾아야 한다.
두 번째 문자열의 패턴과 첫 번째 문자열 패턴이 최대 공약수(gcd)만큼 반복되어야 한다.
그리고 둘 다 패턴이 맞지 않으면 빈 문자열을 반환한다.
 */

/* 계획
재귀 함수로 최대 공약수를 구한다.
첫 번째 문자열을 최대 공약수만큼 문자열을 자른다.
체크패턴 함수를 만들어서 각 매개변수 문자열을 패턴과 비교한다.
체크패턴은 각 매개변수 문자열의 길이와 패턴의 길이를 나누어서
패턴을 repeat하여 기존의 매개변수 문자열과 비교한다.
*/

/* 풀이1
 */
var gcdOfStrings = function(str1, str2) {

    const gcd = (a, b) => {
      if(b === 0) {
        return a
      } else {
        return gcd(b, a % b)
      }
    }
    const patternLength = gcd(str1.length, str2.length)
    
    const pattern = str1.slice(0, patternLength)

    const checkPattern = (str, pattern) => {
        const repeatCount = str.length / pattern.length
        const repeatStr = pattern.repeat(repeatCount)
        return str === repeatStr
      }

    if(checkPattern(str1, pattern) && checkPattern(str2, pattern)) {
      return pattern
    } else {
      return ""
    }

  };

