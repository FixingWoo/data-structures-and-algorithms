class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return ++this.size;
  }
  dequeue() {
    if (!this.head) {
      return undefined;
    }

    const removedNode = this.head;
    this.head = removedNode.next;

    if (!this.head) {
      this.tail = null;
    }

    if (this.size > 0) this.size--;

    return removedNode.value;
  }
  peek() {
    return this.head ? this.head.value : undefined;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
}
