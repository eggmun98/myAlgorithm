/* 문제와 이해
주어진 문자열에서 * 왼쪽에 있는 문자는 제거한다.
 */

/* 계획
문자를 만날 때만 스택에 푸시를 한다.
만약 *을 만난다면 팝을 한다.

*/

/* 풀이1
 */
var removeStars = function(s) {
    const stack = []

    for(x of s) {
        if(x === "*") {
            stack.pop()
        } else {
        stack.push(x)
        }
    }
    return stack.join("")
};

/* 회고
이번 문제는 금방 풀었다.
생각보다 쉬운 문제였다.
 */
