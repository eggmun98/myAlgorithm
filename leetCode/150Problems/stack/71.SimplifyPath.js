/* 문제와 이해
유닉스의 경로 명령어에 대한 결과값을 반환해야 한다.
리눅스의 pwd같은 명령어
 */

/* 계획
일단 input의 값을 "/"를 기준으로 나눈다.
그리고 빈 문자열 요소들이 생기는데 이건 필터로 지운다.
그리고 반복문을 돌려 스택에 푸시를 한다.
*/

/* 풀이1
 */
var simplifyPath = function(path) {
    const newPath = path.split("/").filter(Boolean)
    const stack = []
    
    for(x of newPath) {
      
     if(x === "..")  {
       stack.pop()
     } else if(x === ".") {
      continue;
     } else {
      stack.push(x) 
     }
      
    }
    
    return `/${stack.join("/")}`
  };

