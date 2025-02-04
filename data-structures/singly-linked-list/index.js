class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      return null;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    newTail.next = null;
    this.tail = newTail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return this;
  }
  shift() {
    if (this.length === 0) {
      return null;
    }

    const currentHead = this.head;
    const newHead = this.head.next;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = newHead;
      currentHead.next = null;
    }

    this.length--;
    return currentHead;
  }
  unshift(value) {
    const newNode = new Node(value);

    const currentHead = this.head;

    this.head = newNode;
    this.head.next = currentHead;

    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let count = 0;
    let current = this.head;

    while (index !== count) {
      count++;
      current = current.next;
    }

    return current;
  }
  set(index, value) {
    const foundNode = this.get(index);

    if (!foundNode) {
      return null;
    }

    foundNode.value = value;

    return foundNode;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === this.length) {
      this.push(value);
      return true;
    }

    if (index === 0) {
      this.unshift(value);
      return true;
    }

    const newNode = new Node(value);
    const prev = this.get(index - 1);
    const temp = prev.next;

    prev.next = newNode;
    newNode.next = temp;
    this.length++;

    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }

    if (index === this.length - 1) {
      this.pop();
      return true;
    }

    if (index === 0) {
      this.shift();
      return true;
    }

    const prev = this.get(index - 1);
    const removed = prev.next;

    prev.next = removed.next;
    removed.next = null;

    this.length--;
    return removed;
  }
  reverse() {
    if (!this.head || this.length === 1) {
      return this;
    }

    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

const linkedList = new SinglyLinkedList();

// Push
linkedList.push('A');
linkedList.push('B');
linkedList.push('C');

// Pop
linkedList.pop();

// Unshift
linkedList.unshift('U');

// Get
linkedList.get(0);

// Set
linkedList.set(0, 'S');

// Insert
linkedList.insert(1, 'I');

// Remove
linkedList.remove(2);

// Reverse
linkedList.reverse();

// Result
console.log(linkedList);
