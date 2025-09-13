/* 문제와 이해
2016년 1월 1일은 금요일이다.
2016년 a월 b일은 무슨 요일일까?
 */

/* 계획
1월 1일은 금요일부터니 최초 기준일을 5로 설정한다.
그리고 총 경과일을 계산한다.
그리고 요일을 구한다.
요일은 7로 나눈 나머지를 구한다.
 */

/* 풀이1
 */
function solution(a, b) {
    const daysOfWeek = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    // 기준일(2016-01-01)은 금요일(FRI, 인덱스 5)
    const baseDayIndex = 5;
  
    // 총 경과일 계산
    let totalDays = 0;
    for (let i = 0; i < a - 1; i++) {
      totalDays += daysInMonth[i];
    }
    totalDays += (b - 1);
  
    // 요일 구하기
    const index = (baseDayIndex + totalDays) % 7;
    return daysOfWeek[index];
      
  }