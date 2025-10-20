// 1. 문제와 이해
// 설명: 문자열 haystack 안에서 needle이 처음 나타나는 인덱스를 반환한다.
//       없으면 -1을 반환한다.
// 입력: 
//   - haystack: 전체 문자열
//   - needle: 찾을 부분 문자열
// 출력: 
//   - 첫 번째 등장 인덱스 (정수), 없으면 -1
// 조건:
//   1 ≤ haystack.length, needle.length ≤ 10^4
//   모두 소문자 알파벳으로만 구성
// 유형: 문자열 탐색 / 슬라이딩 윈도우 / 브루트포스

// 2. 계획
// 방법 A: 내장 함수 indexOf() 사용 (실무용, O(n))
// 방법 B: 직접 구현 (면접용) — 브루트포스
//   - haystack의 각 인덱스 i에서 needle의 길이만큼 substring을 잘라 비교.
//   - 일치하면 i 반환, 끝까지 없으면 -1.
// 시간복잡도 O((N - M + 1) * M), 공간복잡도 O(1)
// (N = haystack 길이, M = needle 길이)

// 3. 풀이1
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};

// 3. 풀이2
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle === "") return 0;

    const n = haystack.length;
    const m = needle.length;

    for(let i = 0; i <= n - m; i++) {
        // 만약 needle과 hasystack을 i부터 m만큼 잘랐을 경우 같을 때
        // 현재 인덱스 값을 반환해준다.
        if(needle === haystack.slice(i, i + m)) {
            return i
        }
    }

    return -1
};

// 4. 테스트 케이스
strStr("sadbutsad", "sad")
strStr("leetcode", "leeto")
strStr("a", "a")