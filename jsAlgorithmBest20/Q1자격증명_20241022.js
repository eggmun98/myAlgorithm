/* 문제와 이해
배열의 각 요소를 10진수로 변환 시킨다.
그리고 그 10진수를 아스키코드의 문자로 변환한다.
 */

/* 계획
이중 반복문을 돌린다.
각 decimal 변수에 10진수를 담는다.
그리고 두번째 반복문이 끝나면 
그 10진수를 아스키코드의 문자로 변환한다.
*/

/* 풀이1
 */
function solution(data){
    let result = ""

    data.forEach((str) => {
      let decimal = ""

      for(x of str) {
          if(x === "+") {
            decimal += "1"
          }
          if(x === "-") {
            decimal += "0"
          }
      }

      decimal = parseInt(decimal, 2)
      result += String.fromCharCode(decimal)
    })
  
return result
}

/* 풀이2
 */
function solution(data){
    let result = ""
    
    const ILen = data.length;
    for(let i = 0; i<ILen; i++) {
        const JLen = data[i].length;
        let decimal = ""
        for(let j = 0; j<JLen; j++) {
          const check = data[i][j]
            if(check === "+") {
                decimal += "1"
            } else if (check === "-") {
             	decimal += "0"   
            }
        }
      decimal = parseInt(decimal, 2)
      result += String.fromCharCode(decimal)
    }
    return result
}

/* Gpt 풀이
 */
function solution(data) {
    let result = "";

    data.forEach((str) => {
        let binary = 0;  // 2진수를 숫자로 바로 처리
        for (let x of str) {
            binary <<= 1;  // 왼쪽으로 비트 시프트하여 자리를 확보
            if (x === "+") {
                binary |= 1;  // 1을 추가
            }
            // '-'는 기본적으로 0이므로 추가 연산이 필요 없음
        }
        result += String.fromCharCode(binary);  // 최종 문자로 변환
    });

    return result;
}


