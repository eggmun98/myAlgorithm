// 1. 문제와 이해
// 인코딩 된 url을 디코딩 된 url로 변경해야 합니다.

// 2. 계획
// 자바스크립트 내장 함수 decodeURIComponent을 사용하여
// 인코딩 된 url을 디코딩 시킨다.

// 3. 풀이
const decodeURIs = (encodedURIs) =>
  encodedURIs.map((uri) => console.log(decodeURIComponent(uri)));

// 4. 회고
// 영어로 된 문제라서 어려울 줄 알았다.
// 하지만 해석을 하고 문제를 이해를 하니 쉬운 문제였다.
// 오늘 decodeURIComponent()메소드에 대해 알게 되어서 좋았다.
// decodeURIComponent() 메소드는 인코딩 된 쿠키 값을 처리할 때 사용하기 좋을 거 같다.
// 또 URL 쿼리 파라미터 처리할 때도 좋다고 한다.
// 이렇게 좋은 메소드니 까먹지 않고 자주 써야겠다.
