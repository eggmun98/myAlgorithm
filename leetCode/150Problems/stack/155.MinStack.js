/* 문제와 이해
옛날 자바스크립트에서 클래스를 만든 형식으로 프로토타입을 이용해서 만든다.
 */

/* 계획
지금 getMin을 구하는 방법은 너무 비효율적이다.
그래서 개선을 시도할 예정이다.
*/

/* 풀이1
 */

var MinStack = function() {
    this.stack = [];
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  return this.stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  return this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
this.minStack = [...this.stack]
  
return this.minStack.sort((a, b) => a -b)[0]
};


