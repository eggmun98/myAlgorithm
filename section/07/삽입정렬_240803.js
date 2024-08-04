/* 문제와 이해
삽입 정렬 알고리즘을 통해 정렬을 해야 합니다.
 */

/* 계획
이중 반복문을 이용합니다.
i는 1번째 인덱스부터 시작합니다.
i가 key가 되어 i와 j를 비교하여 j가 i보다 크다면
j는 j + 1자리로 이동합니다.
즉 한 칸씩 자리를 바꿉니다.
그러다가 i가 j보다 크다면 arr [j + 1] 자리에 tmp 변수를 넣어줍니다.
*/

/* 풀이 1
 */
function solution(n, arr) {
  for (let i = 1; i < n; i++) {
    const tmp = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) {
        arr[j + 1] = arr[j];
        if (j === 0) {
          arr[j] = tmp;
        }
      } else {
        arr[j + 1] = tmp;
        break;
      }
    }
  }
  return arr;
}

/* 다른 사람 풀이
 */
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }
  return answer;
}

/* 회고
일단 다른 사람 풀이를 보면서 내 코드가 부족하다는 것을 알게 되었다.
내 풀이는 불필요하에 j가 0일 때 if문으로 조건식을 처리하고 있다.
사실은 그럴 필요가 없었다.
j라는 변수를 1 번째 반복문에 선언하고,
두 번째 반복문이 끝날 때 arr[j + 1] 자리에 tmp를 넣어주기만 하면
굳이 j가 0일 경우를 처리할 필요가 없다.
아직 내가 많이 부족하다는 것을 알게 되었고,
많이 노력해야겠다고 생각했다.
 */
