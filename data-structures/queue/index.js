class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }
  dequeue() {
    if (!this.first) {
      return undefined;
    }

    const removedNode = this.first;
    this.first = removedNode.next;

    if (!this.first) {
      this.last = null;
    }

    if (this.size > 0) this.size--;

    return removedNode.value;
  }
  peek() {
    return this.first ? this.first.value : undefined;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
}
