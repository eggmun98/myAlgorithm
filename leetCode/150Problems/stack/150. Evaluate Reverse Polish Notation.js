// 1. 문제와 이해
// 설명: 문자열 배열 tokens가 주어졌을 때, 이는 후위 표기식(RPN) 수식을 나타낸다.
// 이를 계산해 정수 결과를 반환한다(나눗셈은 0을 향해 버림).
// 입력:
// tokens: string[] (각 원소는 정수 형태의 문자열 또는 연산자 "+", "-", "*", "/")
// 출력:
// number
// 조건/주의:
// - tokens의 숫자는 문자열로 들어오므로 Number로 변환 필요
// - 연산 시 피연산자 팝 순서: b(먼저 pop된 두 번째 피연산자) op a(나중 pop된 첫 번째 피연산자)
// - 나눗셈은 Math.trunc(b / a)로 0 방향으로 절삭
// - 모든 토큰 처리 후 스택에는 정확히 하나의 값만 남아야 함
// 유형: Stack / 파싱 / 시뮬레이션
//
// 실패 원인(네 코드 기준):
// 1) typeof token === "number" → 항상 false (입력은 문자열). 숫자 문자열도 else로 들어가 스택 언더플로우 발생.
// 2) 빼기/나누기 피연산자 순서 오류: a - b, b / a로 뒤섞임. 정답은 b - a, Math.trunc(b / a).
// 3) 나눗셈에서 truncate 미적용: JS의 / 는 부호에 따라 소수점이 남으므로 Math.trunc 필요.
// 4) 최종 반환에서 stack[0] 대신 stack.pop()이 안전하고 의도에 맞음.

// 2. 계획
// step 1: 스택 생성
// step 2: tokens 순회
// - 숫자 문자열이면 Number로 변환하여 push
// - 연산자면 스택에서 a(우항), b(좌항) 순으로 pop 후 b op a 계산하여 push
// step 3: 마지막 값 pop하여 반환
// 시간복잡도: O(n)
// 공간복잡도: O(n)

// 3. 풀이
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    
    for(token of tokens) {
        if(isNaN(token) === false) {
            stack.push(Number(token))
        } else {
            const a = stack.pop()
            const b = stack.pop()

            if(token === "*") {
                stack.push(b * a)
            } else if(token === "/") {
                stack.push(Math.trunc(b / a))
            } else if(token === "+") {
                stack.push(b + a)
            } else if(token === "-") {
                stack.push(b - a)
            }
        }
        

        

    }

    return stack[0]
    
};

// 4. 테스트 케이스
console.log(evalRPN(["2", "1", "+", "3", "*"])) // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])) // 6
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])) // 22

