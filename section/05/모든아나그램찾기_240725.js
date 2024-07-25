/* 문제와 이해
문자 s와 문자 t의 아나그램을 찾아야 한다.
문자 s는 부분 문자열로 아나그램인지 체크를 해야 한다.
 */

/* 계획
먼저 t문자부터 해시맵을 만들어 각 문자의 횟수를 센다.
그리고 문자 s도 t의 길이만큼 잘라서 각 문자의 횟수를 센다.
그다음에는 아나그램 판별 함수를 만들어 문자 s를 문자 t의 인덱스부터
반복문을 돌려서, 문자 s를 t의 길이만큼 잘라서 아나그램인지 판별한다.
*/

/* 풀이1
 */
function solution(s, t) {
  const sH = new Map();
  const tH = new Map();
  let count = 0;
  const tL = t.length;
  const sL = s.length;

  for (let i = 0; i < tL; i++) {
    const char = t[i];
    tH.set(char, (tH.get(char) || 0) + 1);
  }

  for (let i = 0; i < tL; i++) {
    const char = s[i];
    sH.set(char, (sH.get(char) || 0) + 1);
  }

  const isAnagram = (sMap, tMap) => {
    if (sMap.size !== tMap.size) return false;
    for (const [key, val] of sMap) {
      if (tMap.get(key) !== val) return false;
    }
    return true;
  };

  if (isAnagram(sH, tH)) {
    count++;
  }

  for (let i = tL; i < sL; i++) {
    const mkKey = s[i];
    sH.set(mkKey, (sH.get(mkKey) || 0) + 1);

    const rmKey = s[i - tL];
    if (sH.has(rmKey)) {
      sH.set(rmKey, sH.get(rmKey) - 1);
      if (sH.get(rmKey) === 0) {
        sH.delete(rmKey);
      }
    }

    if (isAnagram(sH, tH)) {
      count++;
    }
  }

  return count;
}

/* 회고
이번 문제는 좀 오래 걸려서 풀었다.
그만큼 난이도가 있었던 문제 인거 같다.
물론 map을 잘 사용했다면 금방 풀었을 텐데,
map을 자주 사용 안해봐서 어려웠다.
앞으로도 해시 문제를 만난다면 이제 map을 이용하여 더 쉽게 풀 수 있을거 같다.
 */
