/* 문제와 이해
선택 정렬 알고리즘을 이용하여 숫자를 오름차순으로 정렬해야 한다.
 */

/* 계획
이중 반복문을 이용하여 정렬을 시도해야 한다.
첫 번째 반복문에 min이라는 변수를 만든다.
min이라는 변수에 초기값으로 i 값을 넣어준다.
두 번째 반복문에서 배열에 min이라는 인덱스와 
j라는 인덱스를 비교하여 작은 값을 min이라는 변수에 j를 담는다.
이렇게 계속 반복을 하면 가장 작은 값의 인덱스가 min에 담게 된다.
두 번째 반복문이 끝나면 첫 번째 반복문에서
배열의 i 번째와 배열의 min 번째와 교체를 한다.
왜나하면 min은 가장 작은 값을 가지고 있으므로 
배열의 i 번째로 넣어준다면 그 오름차순으로 정렬할 수 있기 때문이다.
*/

/* 풀이1
 */
function solution(n, nums) {
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (nums[min] > nums[j]) {
        min = j;
      }
    }
    [nums[i], nums[min]] = [nums[min], nums[i]];
  }

  return nums;
}

/* 풀이2
 */
function solution(n, nums) {
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (nums[min] > nums[j]) {
        min = j;
      }
    }
    const change = nums[min];
    nums[min] = nums[i];
    nums[i] = change;
  }

  return nums;
}

/* 회고
이번 문제는 선택 정렬 알고리즘에 대한 방식을 공부를 하였고,
그것을 코드로 바꾸려고 노력을 많이 하였다.
어떻게 하면 선택 정렬 알고리즘을 코드로 바꿀지
많은 시행착오를 겪었다.
이 과정을 통해 코드로 바꾸는 실력을 키운 거 같다.
 */
