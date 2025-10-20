// 1. 문제와 이해
// 설명: 문자열 s가 문자열 t의 subsequence(부분 수열)인지 판별하라.
//       subsequence란, 문자의 순서를 유지하면서 몇 개의 문자를 삭제해 얻을 수 있는 문자열이다.
//       (연속할 필요는 없음)
// 입력: 
//   s: 후보 문자열 (0 ≤ s.length ≤ 100)
//   t: 원본 문자열 (0 ≤ t.length ≤ 10^4)
// 출력: boolean (s가 t의 subsequence이면 true, 아니면 false)
// 예시:
//   s = "abc", t = "ahbgdc" → true (a,h,b,g,d,c 순서 중 a,b,c 존재)
//   s = "axc", t = "ahbgdc" → false (x 순서 불일치)
// 유형: 문자열 / 투 포인터 / 순서 일치 여부 탐색

// 2. 계획
// - 포인터 p1(s), p2(t)를 각각 0에서 시작.
// - t를 순회하면서 s[p1]과 t[p2]를 비교.
// - 같으면 s 포인터(p1) 이동.
// - 다르면 t 포인터만 이동.
// - 끝까지 돌았을 때 s 포인터가 s.length에 도달했다면 true.
// 시간복잡도: O(n) (t 길이만큼 순회)
// 공간복잡도: O(1)

// 3. 풀이
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let p1 = 0;
    let p2 = 0;

    while(p2 < t.length) {
        if(s[p1] === t[p2]) {
            p1++
            p2++
        } else {
            p2++
        }
    }

return p1 === s.length ? true : false
    
};

// 4. 테스트 케이스
isSubsequence("abc", "ahbgdc")
isSubsequence("axc", "ahbgdc")
