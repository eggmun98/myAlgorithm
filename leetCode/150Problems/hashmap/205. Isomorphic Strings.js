// 1. 문제와 이해
// 설명: 두 문자열 s, t가 있을 때, s의 각 문자를 일관된 규칙으로 치환해 t를 만들 수 있으면 true.
//      (모든 발생이 같은 문자로 치환, 서로 다른 문자가 같은 문자로 치환되면 안 됨, 순서 보존)
// 입력:
//   s, t: 길이 같음, 임의의 ASCII 가능 (1..5*10^4)
// 출력:
//   true / false
// 유형: 해시(양방향 매핑) / 문자열 패턴 매칭

// 예시:
//   s="egg", t="add"   → true   (e→a, g→d)
//   s="foo", t="bar"   → false  (o가 a였다가 r이면 모순)
//   s="paper", t="title" → true

// 2. 계획
// step 1: 길이가 다르면 false.
// step 2: s→t(st), t→s(ts) 두 맵을 유지하며 한 글자씩 확인.
//         - st에 기존 매핑이 있고 t와 다르면 false
//         - ts에 기존 매핑이 있고 s와 다르면 false
// step 3: 끝까지 일관성이 유지되면 true
// 시간복잡도: O(n)
// 공간복잡도: O(k) (고유 문자 수)

// 3. 풀이
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
  
    const st = new Map(); // s char -> t char
    const ts = new Map(); // t char -> s char
  
    for (let i = 0; i < s.length; i++) {
      const a = s[i], b = t[i];
  
      if (st.has(a) && st.get(a) !== b) return false;
      if (ts.has(b) && ts.get(b) !== a) return false;
  
      st.set(a, b);
      ts.set(b, a);
    }
    return true;
  };
  
  // 4. 테스트 케이스
  isIsomorphic("egg", "add");     // true
  isIsomorphic("foo", "bar");     // false
  isIsomorphic("paper", "title"); // true
  isIsomorphic("ab", "aa");       // false (두 문자가 같은 문자로 매핑)