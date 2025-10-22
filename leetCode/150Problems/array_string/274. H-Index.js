// 1. 문제와 이해
// 설명: 연구자의 논문 인용 횟수를 담은 배열 citations가 주어진다.
// citations[i]는 i번째 논문의 인용 수이다.
// h-index는 “h편의 논문이 각각 h회 이상 인용된 최대값”을 뜻한다.
// 즉, 인용 횟수가 높은 논문 h개가 있고, 나머지 논문은 h회 이하 인용된 경우 그 h가 h-index이다.
// 입력: citations (길이 n, 1 ≤ n ≤ 5000, 0 ≤ citations[i] ≤ 1000)
// 출력: 정수 h (연구자의 h-index)
// 유형: 정렬(Sorting) + 그리디 / 또는 Counting (빈도 누적)

// 2. 계획
// - 핵심 아이디어: h-index는 “인용 수 ≥ h 인 논문이 h편 이상”일 때 가능한 최대 h를 찾는 문제이다.
// - 방법 1: 정렬 후 순회 (가장 직관적)
// 1. citations를 오름차순 정렬
// 2. 각 논문 i번째에 대해, “현재 논문 이상의 인용을 받은 논문 수 = n - i”
// 3. citations[i] ≥ (n - i) 이면 h-index 후보
// 4. 가장 큰 (n - i)를 결과로 선택
// - 시간복잡도: O(n log n) (정렬)
// - 공간복잡도: O(1)

// 3. 풀이
/**

@param {number[]} citations

@return {number}
*/
var hIndex = function(citations) {

    citations.sort((a, b) => a - b); // 오름차순 정렬
    
    const n = citations.length;
    let h = 0;
    
    for (let i = 0; i < n; i++) {
    const candidate = n - i; // 현재 논문 이상 인용된 논문 수
    if (citations[i] >= candidate) {
    h = candidate; // 조건 만족 → h-index 갱신
    break; // 더 큰 h는 불가능하므로 조기 종료
    }
    }
    
    return h;
    };
    
    // 4. 테스트 케이스
    console.log(hIndex([3,0,6,1,5])); // 3 (3편의 논문이 3회 이상 인용됨)
    console.log(hIndex([1,3,1])); // 1 (1편의 논문이 1회 이상 인용됨)
    console.log(hIndex([0,0,0])); // 0 (어떤 논문도 1회 이상 인용되지 않음)
    console.log(hIndex([10,8,5,4,3])); // 4 (4편이 4회 이상 인용됨)
    console.log(hIndex([25,8,5,3,3])); // 3 (3편이 3회 이상 인용됨)