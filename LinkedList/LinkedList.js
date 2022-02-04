const { Node } = require("../NodeClass.js");

class SinglyLinkedList {
  constructor(value) {
    this.head = new Node(value, null);

    this.tail = this.head;

    this.length = 1;
  }

  lastNode(node) {
    if (!node.next) {
      return node;
    }
    return this.lastNode(node.next);
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  lookup(index) {
    if (index == 0) return this.head;
    if (index > this.length || index < 0) return null;
    let count = 0;
    let current = this.head;
    while (count < index) {
      if (!current.next) return null;
      current = current.next;
      count++;
    }
    return current;
  }

  search(cb) {
    let current = this.head;
    while (current.next) {
      if (cb(current.value)) return current;
      current = current.next;
    }
    if (cb(current.value)) return current;
    return null;
  }

  insert(index, value) {
    if (index == 0) return this.prepend(value);
    if (index >= this.length || index < 0) return "Index out of range";

    const newNode = new Node(value);
    const prevNode = this.lookup(index - 1);
    const nextNode = prevNode.next;
    newNode.next = nextNode;
    prevNode.next = newNode;
    this.length++;

    return this;
  }

  remove(index) {
    if (index == 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }
    if (index >= this.length || index < 0) return "Index out of range";
    if (index == this.length - 1) {
      this.tail = this.lookup(index - 1);
      this.tail.next = null;
      this.length--;
      return this;
    }
    const prevNode = this.lookup(index - 1);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return this;
  }
}

class NodeWithPrevious extends Node {
  constructor(value, next = null, previous = null) {
    super(value, next);
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new NodeWithPrevious(value, null, null);

    this.tail = this.head;

    this.length = 1;
  }

  append(value) {
    const newNode = new NodeWithPrevious(value, null, this.tail);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new NodeWithPrevious(value, null, null);
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  lookup(index) {
    if (index == 0) return this.head;
    if (index > this.length || index < 0) return null;
    let count = 0;
    let current = this.head;
    while (count < index) {
      if (!current.next) return null;
      current = current.next;
      count++;
    }
    return current;
  }

  search(cb) {
    let current = this.head;
    while (current.next) {
      if (cb(current.value)) return current;
      current = current.next;
    }
    if (cb(current.value)) return current;
    return null;
  }

  insert(index, value) {
    if (index == 0) return this.prepend(value);
    if (index >= this.length || index < 0) return "Index out of range";

    const newNode = new NodeWithPrevious(value);
    const prevNode = this.lookup(index - 1);
    const nextNode = prevNode.next;
    newNode.next = nextNode;
    prevNode.next = newNode;
    newNode.previous = prevNode;
    nextNode.previous = newNode;
    this.length++;

    return this;
  }

  remove(index) {
    if (index == 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }
    if (index >= this.length || index < 0) return "Index out of range";
    if (index == this.length - 1) {
      this.tail = this.lookup(index - 1);
      this.tail.next = null;
      this.length--;
      return this;
    }
    const prevNode = this.lookup(index - 1);
    const removedNode = prevNode.next;
    const nextNode = removedNode.next;
    prevNode.next = nextNode;
    nextNode.previous = prevNode;
    this.length--;
    return this;
  }
}

module.exports = { SinglyLinkedList, DoublyLinkedList };
