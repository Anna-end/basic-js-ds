const { NotImplementedError } = require('../lib/errors');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor () {
    this.item = [];
  }
  push(value) {
    this.item.push(value)
  }

  pop() {
    if(this.isEmty()) {
      return undefined;
    }
    return this.item.pop();
  }

  peek() {
  if(this.isEmty()) {
      return undefined;
    }
    return this.item[this.item.length - 1];
  }
  isEmty() {
    return this.item.length === 0;
  }
}

module.exports = {
  Stack,
};
