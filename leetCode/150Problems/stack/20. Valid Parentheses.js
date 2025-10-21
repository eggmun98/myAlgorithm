// 1. 문제와 이해
// 설명: 문자열 s가 주어졌을 때, 괄호의 짝이 올바른지 판단하는 문제.
// 괄호는 세 종류 '()', '[]', '{}' 가 있으며,
// 모든 열린 괄호는 동일한 종류의 닫힌 괄호로 닫혀야 하고,
// 닫히는 순서 또한 올바른 순서를 따라야 한다.
// 입력:
// s: 문자열 (1 <= s.length <= 10^4)
// 출력:
// boolean (유효하면 true, 아니면 false)
// 조건:
// - s는 '(', ')', '{', '}', '[', ']' 문자만 포함한다.
// 유형: Stack / 문자열 / 시뮬레이션
//
// 예시:
// s = "()" → true
// s = "()[]{}" → true
// s = "(]" → false
// s = "([])" → true
// s = "([)]" → false
//
// 포인트:
// - 괄호 짝을 맞춰야 함
// - 닫는 괄호가 나올 때 직전 열린 괄호와 짝이 맞는지 검사 필요
// - Stack을 사용해 LIFO 방식으로 처리

// 2. 계획
// step 1: 빈 stack 생성
// step 2: 문자열 s를 순회하면서
// - 여는 괄호면 stack에 push
// - 닫는 괄호면 stack top을 꺼내서 짝이 맞는지 검사
// (짝이 안 맞거나 stack이 비어있으면 false)
// step 3: 모든 문자를 처리한 후 stack이 비어있으면 true, 아니면 false
// 시간복잡도: O(n) (한 번 순회)
// 공간복잡도: O(n) (최대 모든 여는 괄호 저장)

// 3. 풀이


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const pairs = { ')': '(', ']': '[', '}': '{' };

    for (ch of s) {
        if(ch === "(" || ch === "[" || ch === "{") {
            stack.push(ch)
        } else if(stack.length === 0 || stack.pop() !== pairs[ch] ) {
            return false

        }
    }
    return stack.length === 0
};

// 4. 테스트 케이스
console.log(isValid("()")) // true
console.log(isValid("()[]{}")) // true
console.log(isValid("(]")) // false
console.log(isValid("([)]")) // false
console.log(isValid("{[]}")) // true