// 1. 문제와 이해
// 설명: 세로선들의 높이 height[i]가 주어졌을 때, i<j 두 선을 골라
// 물을 가장 많이 담을 수 있는 컨테이너의 최대 면적을 구한다.
// 면적: (너비) * (높이) = (j - i) * min(height[i], height[j])
// 핵심: 너비는 두 인덱스 간 거리, 높이는 두 선 중 더 낮은 높이로 제한됨
// 제약: O(n) 시간, O(1) 추가 공간 (투 포인터)

// 2. 계획
// - p1=0, p2=n-1에서 시작
// - 매 스텝마다 area = (p2 - p1) * min(height[p1], height[p2])로 갱신
// - 더 낮은 쪽 포인터를 안쪽으로 이동 (같으면 아무 쪽이나 이동)
// - p1 < p2 동안 반복, 최대값 반환

// 3-1. 풀이1
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let p1 = 0;
    let p2 = height.length - 1
    let maxArea = 0;

    while(p1 < p2) {
        let sumArea = (p2 - p1) * Math.min(height[p2], height[p1])

        if(sumArea > maxArea) {
            maxArea = sumArea
        } else if(height[p1] > height[p2]) {
            p2--
        } else {
            p1++
        }


    }

    return maxArea
};

// 3-2. 풀이2
/**

@param {number[]} height

@return {number}
*/
var maxArea = function(height) {
    let p1 = 0;
    let p2 = height.length - 1;
    let best = 0;
    
    while (p1 < p2) {
    const h = Math.min(height[p1], height[p2]);
    const w = p2 - p1;
    const area = h * w;
    if (area > best) best = area;
    
    // 면적 갱신 여부와 관계없이 '항상' 낮은 쪽 포인터를 이동
    if (height[p1] < height[p2]) {
      p1++;
    } else {
      p2--;
    }
    
    
    }
    
    return best;
    };

    // 4. 테스트 케이스
    maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) // 49
    maxArea([1, 1]) // 1
    maxArea([4, 3, 2, 1, 4]) // 16
    maxArea([1, 2, 1]) // 2
    maxArea([1, 2, 4, 3]) // 4
    maxArea([1, 2, 4, 3]) // 4