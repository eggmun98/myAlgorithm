/* 문제와 이해
각 문자열을 각각 하나의 문자를 번갈아 가면서 담는다.
그리고 가장 짧은 문자열이 다 담겨지면
가장 긴 문자열은 혼자 스택에 다 담아야 한다.
 */

/* 계획
투 포인트 자료구조를 이용하여 푼다.
while문으로 len1와 len2의 길이가 각 포인트보다 클때 까지 반복문을 돌린다.
그리고 각 포인트가 각 렌스마다 작을 때까지 result 라는 변수에 문자를 더한다.
*/

/* 풀이1
 */
var mergeAlternately = function(word1, word2) {
    let result = ""
    let p1 = 0
    let p2 = 0
    const len1 = word1.length;
    const len2 = word2.length;
    
    while(p1 < len1 || p2 < len2) {
      if(p1 < len1) {
        result += word1[p1]
        p1++
      }
      
      if(p2 < len2) {
        result += word2[p2]
        p2++
      }
    }
    
    return result
  };

/* GPT 풀이
 */
var mergeAlternately = function(word1, word2) {
    let result = '';
    const maxLength = Math.max(word1.length, word2.length);
  
    for (let i = 0; i < maxLength; i++) {
      if (i < word1.length) {
        result += word1[i];
      }
      if (i < word2.length) {
        result += word2[i];
      }
    }
  
    return result;
  };
  
