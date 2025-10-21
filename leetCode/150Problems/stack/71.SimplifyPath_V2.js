// 1. 문제와 이해
// 설명: Unix 스타일의 절대 경로 문자열 path가 주어졌을 때,
// 이를 "정규화된(canonical)" 경로 형태로 단순화해야 한다.
// 경로는 항상 '/'로 시작하며, '.', '..', 여러 개의 '/' 등을 포함할 수 있다.
// '.'은 현재 디렉토리, '..'은 상위 디렉토리를 의미하며,
// 여러 개의 '/'는 하나의 '/'로 간주한다.
// 단, '...'나 '....'과 같이 규칙 외의 점(.) 패턴은 실제 폴더 이름으로 간주한다.
//
// 입력:
// path: 문자열 (1 <= path.length <= 3000)
// 출력:
// 문자열 (단순화된 canonical 절대 경로)
// 조건:
// - path는 '/'로 시작하는 유효한 절대 경로
// - 알파벳, 숫자, '.', '/', '_' 문자만 포함
// 유형: Stack / 문자열 / 시뮬레이션
//
// 예시:
// path = "/home/" → "/home"
// path = "/home//foo/" → "/home/foo"
// path = "/home/user/Documents/../Pictures" → "/home/user/Pictures"
// path = "/../" → "/"
// path = "/.../a/../b/c/../d/./" → "/.../b/d"
//
// 포인트:
// - '/'를 기준으로 디렉토리 단위로 분리 후 stack으로 처리
// - '.'은 무시, '..'은 상위 폴더 제거(pop), 나머지는 push
// - 마지막에 stack을 '/'로 연결해 정규화 경로 반환
// - 루트 경로일 경우 '/' 반환

// 2. 계획
// step 1: path를 '/' 기준으로 split
// step 2: 빈 문자열('')과 '.'은 무시
// step 3: '..'이 나오면 stack에서 하나 제거 (있을 경우만)
// step 4: 그 외는 실제 폴더 이름으로 push
// step 5: 최종적으로 '/' + stack.join('/') 반환
// step 6: stack이 비어있으면 '/' 반환
// 시간복잡도: O(n) (split 및 한 번 순회)
// 공간복잡도: O(n) (stack에 경로 저장)

// 3. 풀이
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const parts = path.split("/");
    const stack = [];

    for(part of parts) {
        if(part === "..") {
            stack.pop()
        } else if(part === "." || part === ""){
            continue;
        } else {
            stack.push(part)
        }
        
    }

    return `/${stack.join("/")}`
};

// 4. 테스트 케이스
console.log(simplifyPath("/home/")) // "/home"
console.log(simplifyPath("/home//foo/")) // "/home/foo"
console.log(simplifyPath("/home/user/Documents/../Pictures")) // "/home/user/Pictures"
console.log(simplifyPath("/../")) // "/"
console.log(simplifyPath("/.../a/../b/c/../d/./")) // "/.../b/d"