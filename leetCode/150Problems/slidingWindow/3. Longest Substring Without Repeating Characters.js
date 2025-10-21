// 1. 문제와 이해
// 설명:
// 문자열 s가 주어졌을 때, 중복 문자가 없는 가장 긴 부분문자열(substring)의 길이를 구하는 문제.
// substring은 연속된 구간이어야 하며, subsequence(비연속)는 허용되지 않는다.
// 입력:
// s: 문자열 (길이 0..5*10^4, 영문/숫자/기호/공백 포함 가능)
// 출력:
// number (중복 없는 가장 긴 substring의 길이)
// 조건/특징:
// - 부분문자열은 반드시 연속 구간
// - 문자 종류 제한 없음(공백/기호 포함) → 문자 비교/저장 시 그대로 사용
// 유형: Sliding Window / Two Pointers / HashMap(최근 인덱스 기록)
//
// 예시:
// s = "abcabcbb" → 3 (예: "abc")
// s = "bbbbb" → 1 (예: "b")
// s = "pwwkew" → 3 (예: "wke")
// 주의: "pwke"는 subsequence이며 substring이 아님.
//
// 포인트:
// - 윈도우 [left, right] 안에 중복이 생기면, 해당 문자의 "이전 등장 위치 + 1"로 left를 점프.
// - 각 문자의 마지막 등장 인덱스를 Map에 저장하여 O(1)로 갱신.
// - 길이 = right - left + 1 (포함 구간이므로 +1 보정)

// 2. 계획
// step 1: left = 0, maxLen = 0, last = new Map() 초기화 (last[ch] = 마지막 인덱스)
// step 2: right를 0..n-1 순회
// - ch = s[right]
// - last에 ch가 있고 last.get(ch) >= left라면, left = last.get(ch) + 1 (중복 해소)
// - last.set(ch, right)로 마지막 위치 갱신
// - maxLen = max(maxLen, right - left + 1)
// step 3: maxLen 반환
// 시간복잡도: O(n)
// 공간복잡도: O(k) (k는 문자 종류 수)

// 3. 풀이
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let maxLen = 0;
    let hash = new Map();

    for(let right = 0; right<s.length; right++) {
        let ch = s[right];

        if(hash.has(ch) && hash.get(ch) >= left) {
            left = hash.get(ch) + 1
        }

        const currLen = right - left + 1
        if(currLen > maxLen) {
            maxLen = currLen
        }


        hash.set(ch, right);


    }

    return maxLen
};

// 4. 테스트 케이스
console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring("bbbbb")) // 1
console.log(lengthOfLongestSubstring("pwwkew")) // 3