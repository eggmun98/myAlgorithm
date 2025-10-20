// 1. 문제와 이해
// 설명: ransomNote(편지)에 필요한 알파벳들을 magazine(잡지)에서 
//       가져올 수 있는지 판별하는 문제이다.
//       magazine의 각 문자는 한 번만 사용할 수 있다.
// 입력: 
//   ransomNote (만들어야 할 문자열)
//   magazine (문자 공급원)
// 출력: 
//   true  → magazine의 문자들로 ransomNote를 구성할 수 있음
//   false → 불가능
// 조건:
//   1 ≤ ransomNote.length, magazine.length ≤ 10^5
//   모두 소문자 알파벳(a-z)
// 유형: 해시맵 / 카운팅 / 문자열

// 예시:
//   ransomNote = "aa", magazine = "aab" → true
//   ransomNote = "aa", magazine = "ab"  → false
//   ransomNote = "a", magazine = "b"    → false

// 2. 계획
// step 1: magazine의 각 문자의 개수를 해시맵에 저장한다.
// step 2: ransomNote의 각 문자를 순회하면서
//         - 해당 문자가 해시맵에 존재하고 count > 0이면 1 감소
//         - 없거나 count가 0이면 false 반환
// step 3: 끝까지 성공하면 true 반환
// 시간복잡도: O(n + m)
// 공간복잡도: O(1) (영문자 26개 고정)


// 3. 풀이
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // 0. 해쉬맵으로 푼다.
    const hash = {}

    // 1. magazine를 맵에 담아서 각 문자당 숫자를 센다.
    for(s of magazine) {
        if(hash[s]) {
            hash[s] = hash[s] + 1
        } else {
            hash[s] = 1
         }
    }

    for(s of ransomNote) {
        if(hash[s]) {
            hash[s] = hash[s] - 1
        } else {
            return false
        }
    }
    return true
    console.log(hash)



};

// 4. 테스트 케이스
canConstruct("a", "b")
canConstruct("aa", "ab")
canConstruct("aa", "aab")