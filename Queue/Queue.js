const { Node } = require("../NodeClass.js");

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.first || this.size === 0) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
      return this;
    }

    this.last.next = newNode;
    this.last = newNode;
    this.size++;

    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    if (this.first === this.last) {
      const oldfirst = this.first;
      this.last = null;
      this.first = null;
      return oldfirst;
    }

    const oldfirst = this.first;
    this.first = oldfirst.next;

    this.size--;

    return oldfirst;
  }
}

module.exports = { Queue };
