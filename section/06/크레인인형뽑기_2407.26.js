/* 문제와 이해
사용자가 입력한 위치에서 인형 뽑기를 해야 한다.
가장 위에 있는 인형부터 뽑아야 한다.
만약 같은 인형을 뽑았으면 바구니에서 그 인형들은 제거가 된다.
그 제거된 인형들의 개수를 세야 한다.
만약 인형이 비어있으면 아무런 일이 일어나지 않는다.
 */

/* 계획
moves 만큼 반복문을 돌린다.
moves에서는 이중 배열을 탐색하기 위한 반복문을 돌린다.
일자로 탐색하면 되기 때문에 board의 길이만큼 돌린다.
그리고 만약 0이 아니라면 인형이 있다는 뜻이므로,
스태겡 푸시를 할 거다.
그전에 기존 바구니에 인형과 바구니에 추가하려는 인형과 같은지 체크를 한다.
만약 있다면 count를 2를 올리고 바구니(스택)에서 그 인형을 제거한다.
만약 그게 아니라면 바구니에 인형을 넣는다.
그리고 인형을 꺼냈으니 꺼낸 위치에 값을 0으로 수정한다.
*/

/* 풀이1
 */
function solution(b, m) {
  let stack = [];
  let count = 0;
  const mL = m.length;
  const bL = b.length;

  for (let i = 0; i < mL; i++) {
    const move = m[i] - 1;
    for (let j = 0; j < bL; j++) {
      const sL = stack.length;
      if (b[j][move] !== 0) {
        if (sL > 1 && stack[sL - 1] === b[j][move]) {
          count += 2;
          stack.pop();
        } else {
          stack.push(b[j][move]);
        }
        b[j][move] = 0;
        break;
      }
    }
  }
  return count;
}
/* 풀이2
 */
function solution2(b, m) {
  let stack = [];
  let count = 0;
  const mL = m.length;
  const bL = b.length;

  for (let i = 0; i < mL; i++) {
    const move = m[i] - 1;
    for (let j = 0; j < bL; j++) {
      if (b[j][move] !== 0) {
        stack.push(b[j][move]);
        b[j][move] = 0;
        const sL = stack.length;
        if (sL > 1 && stack[sL - 2] === stack[sL - 1]) {
          count += 2;
          stack.pop();
          stack.pop();
        }
        break;
      }
    }
  }
  return count;
}

/* 회고
이번 문제는 노트에 정리를 해서 풀었더니 금방 풀었다.
다시 한번 노트에 정리해서 푸는 게 알고리즘에 도움이 된다는 것을 알게 되었다.
앞으로도 노트를 잘 이용해야겠다.
 */
