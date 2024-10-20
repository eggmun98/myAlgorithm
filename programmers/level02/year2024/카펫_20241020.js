/* 문제와 이해
세로의 길이는 최소 3이상이다.
가로와 세로는 각각 2씩 빼고 서로를 곱하고 노란색 격자의 크기와 같아야 한다.
 */

/* 계획
반복문은 세로의 길이 3부터 시작하고 토탈의 제곱근까지 반복한다.
만약 토탈을 세로로 나눈 나머지가 0이라면 가로를 구한다.
가로와 세로는 각각 2씩 빼고 서로를 곱하고 노란색 격자의 크기와 같으면 반환한다.
그리고 효율적인 계산을 위해 Math.sqrt()를 사용한다.
왜냐하면 제곱근까지만 반복하면 되기 때문이다.
*/

/* 풀이1
 */
function solution(brown, yellow) {
    const total = brown + yellow;

    for (let height = 3; height <= Math.sqrt(total); height++) {
        if (total % height === 0) {
            let width = total / height;

            if ((width - 2) * (height - 2) === yellow) {
                return [width, height];
            }
        }
    }
}



