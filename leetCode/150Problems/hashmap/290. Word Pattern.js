// 1. 문제와 이해
// 설명: pattern의 각 문자와 s의 각 "단어" 사이에 완전한 1:1 대응(전단사)이 존재하면 true.
//      같은 문자는 항상 같은 단어로, 서로 다른 문자는 서로 다른 단어로 매핑되어야 한다.
// 입력:
//   pattern: 소문자 문자열 (길이 1..300)
//   s: 단어들이 공백 1개로 구분된 문자열 (길이 1..3000)
// 출력:
//   true  → s가 pattern과 같은 패턴을 따른다
//   false → 아니면
// 조건:
//   단어 수 === pattern 길이 여야 함
// 유형: 해시(양방향 매핑) / 문자열 분할

// 예시:
//   pattern="abba", s="dog cat cat dog" → true   (a→dog, b→cat)
//   pattern="abba", s="dog cat cat fish" → false
//   pattern="aaaa", s="dog cat cat dog" → false

// 2. 계획
// step 1: s를 공백으로 split하여 words 배열을 만든다.
// step 2: 길이(words.length)와 pattern.length가 다르면 false.
// step 3: p2w(문자→단어), w2p(단어→문자) 두 맵으로 양방향 매핑을 유지한다.
//         - p2w에 기존 매핑이 있는데 다른 단어면 false
//         - w2p에 기존 매핑이 있는데 다른 문자면 false
// step 4: 끝까지 모순 없으면 true
// 시간복잡도: O(n) (n = pattern 길이)
// 공간복잡도: O(k) (k = 고유 문자/단어 수)

// 3. 풀이
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(" ");
    if (words.length !== pattern.length) return false;
  
    const p2w = new Map(); // pattern char -> word
    const w2p = new Map(); // word -> pattern char
  
    for (let i = 0; i < pattern.length; i++) {
      const p = pattern[i];
      const w = words[i];
  
      if (p2w.has(p) && p2w.get(p) !== w) return false;
      if (w2p.has(w) && w2p.get(w) !== p) return false;
  
      p2w.set(p, w);
      w2p.set(w, p);
    }
    return true;
  };
  
  // 4. 테스트 케이스
  wordPattern("abba", "dog cat cat dog");  // true
  wordPattern("abba", "dog cat cat fish"); // false
  wordPattern("aaaa", "dog cat cat dog");  // false
  wordPattern("abba", "dog dog dog dog");  // false
  