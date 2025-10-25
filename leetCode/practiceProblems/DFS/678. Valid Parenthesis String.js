// 1. 문제와 이해
// 설명: '(', ')', '*' 로만 이루어진 문자열 s가 주어진다.
//       '*' 는 세 가지 중 아무 역할이나 할 수 있다:
//          1) '('
//          2) ')'
//          3) 빈 문자열 "" (즉, 없다고 치기)
//       이 때, s를 적절히 해석했을 때 "유효한 괄호 문자열"이 될 수 있으면 true를 반환한다.
//
// 유효한 괄호 문자열의 조건(기본 괄호 문제와 동일):
//   - 열기 '(' 는 이후에 닫기 ')' 로 매칭되어야 한다
//   - 순서가 뒤집히면 안 된다 (")(" 이런 건 안 됨)
//   - 마지막까지 다 닫혀야 한다 (열린 괄호 남으면 안 됨)
//
// 입력:
//   s: 문자열 (1 <= s.length <= 보통 100~1000 수준, LeetCode 기준은 최대 100)
//
// 출력:
//   boolean: 만들 수 있으면 true, 어떤 경우로도 불가능하면 false
//
// 예시:
//   "()"        → true   (이미 정상 괄호)
//   "(*)"       → true   (* → "" 로 치면 "()")
//   "(*))"      → true   (* → "(" 으로 치면 "(())")
//   "*)()"      → true   (* → "(" 으로 치면 "( )()")
//   ")))("      → false  (어떻게 바꿔도 닫는 게 먼저 나와버림)
//
// 핵심 난이도:
//   - '*'가 여러 개 등장하면 경우의 수가 폭발한다. (각 '*'마다 3가지 분기)
//   - 단순한 완전 탐색(백트래킹)은 3^n 수준이라 그대로 돌리면 Time Limit Exceeded가 난다.
//   - 그래서 같은 상태를 중복 계산하지 않도록 "메모이제이션"이 필요하다.
//
// 유형:
//   - 괄호 검증(Parentheses Validation)
//   - DFS + 메모이제이션 (Top-down DP)
//   - 상태 탐색 문제 (index, balance)
//
// 용어 정리:
//   balance = "현재까지 열린 '(' 의 개수 - 닫힌 ')' 의 개수"
//            -> 즉 지금까지 안 닫히고 남아있는 '(' 개수라고 생각하면 편함.
//   balance는 절대 음수가 되면 안 된다. (')'가 더 많아졌다는 뜻이므로 말이 안 됨)


// 2. 계획
// 아이디어:
//   문자열을 왼쪽부터 보면서 재귀적으로 체크한다.
//   dfs(index, balance):
//      - index: 지금 검사할 문자 위치
//      - balance: 지금까지의 유효한 해석에서 "아직 안 닫힌 '(' 개수"
//
// 진행 방식:
//   1) 만약 balance < 0 이면 불가능. 바로 false.
//      -> 닫는 괄호가 더 많아졌다는 뜻이라서.
//
//   2) 문자열 끝까지(index === s.length) 왔을 때
//      balance가 0이면 성공(true),
//      아니면 아직 안 닫힌 '('가 남아있으므로 실패(false).
//
//   3) 현재 문자가 '(' 이면 그냥 여는 거니까 balance+1 로 다음 dfs 호출
//
//   4) 현재 문자가 ')' 이면 닫는 거니까 balance-1 로 다음 dfs 호출
//
//   5) 현재 문자가 '*' 이면 세 갈래로 분기해본다:
//        - '*' 를 '(' 로 본다        -> balance+1
//        - '*' 를 ')' 로 본다        -> balance-1
//        - '*' 를 빈 문자열로 본다   -> balance 유지
//      셋 중 하나라도 true면 전체가 true.
//
//   6) 하지만 이런 분기는 굉장히 많이 중복된다.
//      예: 같은 index, 같은 balance 조합은 앞으로의 결과가 항상 같다.
//      -> 그래서 Map을 써서 (index,balance) → true/false 메모이제이션한다.
//         이미 본 상태면 재귀를 다시 타지 않고 저장된 값을 바로 리턴.
//
// 시간복잡도:
//   - 서로 다른 (index, balance) 상태의 수는 최대 O(n^2).
//   - 각 상태는 한 번만 계산하므로 전체는 O(n^2) 근처까지 줄어든다.
//   - 이건 브루트포스 3^n보다 훨씬 빠르다.
//
// 공간복잡도:
//   - 메모이제이션 Map에 O(n^2)
//   - 재귀 콜스택 O(n)


// 3. 풀이
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    const memo = new Map(); // key: "index,balance" -> boolean
  
    function dfs(index, balance) {
      // 1) 닫는 괄호가 너무 많아진 경우 -> 즉시 실패
      if (balance < 0) return false;
  
      // 2) 문자열을 끝까지 다 봤을 때
      if (index === s.length) {
        // 아직 안 닫힌 '('이 하나도 없어야 valid
        return balance === 0;
      }
  
      // 메모이제이션 체크
      const key = index + "," + balance;
      if (memo.has(key)) {
        return memo.get(key);
      }
  
      const ch = s[index];
      let result;
  
      if (ch === '(') {
        // '(' 는 무조건 열림
        result = dfs(index + 1, balance + 1);
      } else if (ch === ')') {
        // ')' 는 무조건 닫힘
        result = dfs(index + 1, balance - 1);
      } else {
        // '*' 는 세 가지 중 하나로 자유롭게 해석 가능
        result =
          dfs(index + 1, balance + 1) || // '*' -> '('
          dfs(index + 1, balance - 1) || // '*' -> ')'
          dfs(index + 1, balance);       // '*' -> '' (아무것도 아님)
      }
  
      // 계산한 결과 캐싱
      memo.set(key, result);
      return result;
    }
  
    return dfs(0, 0);
  };
  
  
  // 4. 테스트 케이스
  console.log(checkValidString("()"));      // true
  console.log(checkValidString("(*)"));     // true
  console.log(checkValidString("(*))"));    // true
  console.log(checkValidString("*)()"));    // true
  console.log(checkValidString(")))("));    // false
  console.log(checkValidString(""));        // true (빈 문자열도 유효)
  console.log(checkValidString("(**("));    // 가능 여부 확인용
  