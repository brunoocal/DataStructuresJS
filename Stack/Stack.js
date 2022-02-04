class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.top || this.size === 0) {
      this.top = newNode;
      this.bottom = newNode;
      this.size++;
      return this;
    }

    const oldTop = this.top;
    this.top = newNode;
    this.top.next = oldTop;
    this.size++;

    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    const oldTop = this.top;
    this.top = this.top.next;
    this.size--;

    return oldTop;
  }
}

module.exports = { Stack };
