// 1. 문제와 이해
// t의 문자열을 p의 length만큼 잘라야 한다.
// 자른 문자열을 p보다 같거나 작은 횟수를 세야 한다.

// 2. 계획
// iMax라는 변수를 만들어서 p의 길이를 잰다.
// 반복문을 이용하여 t를 p의 길이만큼 자른다.
// if문으로 비교를 하여 횟수를 센다.

// 3. 풀이
function solution(t, p) {
  let answer = 0;
  const iMax = p.length;

  for (let i = 0; i < t.length; i++) {
    const tSlice = t.slice(i, i + iMax);
    if (tSlice.length === iMax && tSlice <= p) answer++;
  }

  return answer;
}

// 4. 회고
// 쉬운문제지만 효율적으로 푸는 방법이 어려웠다.
// 효율적으로 문제를 풀려고 고민을 많이 하였다.
// 조금 더 노력을 해야겠다.
