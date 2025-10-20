// 1. 문제와 이해
// 설명: 문자열 배열 strs가 주어질 때, 모든 문자열의 "공통 접두사" 중 가장 긴 것을 반환한다.
//       공통 접두사가 없으면 ""(빈 문자열)을 반환한다.
// 입력: 문자열 배열 strs (1 ≤ strs.length ≤ 200, 각 문자열 ≤ 200자)
// 출력: 문자열 (가장 긴 공통 접두사)
// 조건:
//   - 소문자 알파벳으로만 구성
//   - 일부 문자열은 빈 문자열일 수 있음
// 유형: 문자열 / 비교 / 수평 스캔(Horizontal Scan)

// 2. 계획
// 방법 A (수평 비교, Horizontal Scanning)
//   - 첫 문자열을 기준(prefix)으로 설정.
//   - 다음 문자열과 하나씩 비교하며 prefix를 줄여 나간다.
//   - prefix가 ""가 되면 더 비교할 필요 없음 → 바로 종료.
// 시간복잡도: O(N * M) (N: 문자열 개수, M: 공통 접두사 길이)

// 방법 B (세로 비교, Vertical Scanning)
//   - 인덱스 0부터 시작해서 모든 문자열의 i번째 문자가 같은지 비교.
//   - 하나라도 다르면 거기까지가 prefix.
//   - 간단하고 직관적이지만 약간 더 많은 비교 연산이 있을 수 있음.

// 3. 풀이
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

   // 1) 첫 문자열을 기준으로 잡기
   let prefix = strs[0];

   // 2) 두 번째 문자열부터 비교
   for (let i = 1; i < strs.length; i++) {
   // 현재 문자열이 prefix를 포함할 때까지 prefix를 줄임
   while (strs[i].indexOf(prefix) !== 0) {
     prefix = prefix.slice(0, -1); // 마지막 문자 제거
     console.log(prefix)
     if (prefix === "") return ""; // 공통 접두사 없을 경우 
   }
 }

 return prefix;


};

// 4. 테스트 케이스
longestCommonPrefix(["flower","flow","flight"])
longestCommonPrefix(["dog","racecar","car"])

