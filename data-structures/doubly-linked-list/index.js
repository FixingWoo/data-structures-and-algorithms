class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }
  pop() {
    if (this.length === 0) {
      return undefined;
    }

    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;

    return poppedNode;
  }
  unshift(value) {
    const newNode = new Node(value);
    const oldHeadNode = this.head;

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.head.next = oldHeadNode;
      oldHeadNode.prev = this.head;
    }

    this.length++;
    return this;
  }
  shift() {
    if (this.length === 0) {
      return undefined;
    }

    const oldHeadNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHeadNode.next;
      this.head.prev = null;
      oldHeadNode.next = null;
    }

    this.length--;

    return oldHeadNode;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let current, count;

    if (index <= this.length / 2) {
      current = this.head;
      count = 0;

      while (index !== count) {
        current = current.next;
        count++;
      }
    } else {
      current = this.tail;
      count = this.length;

      while (index !== count) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }
  set(index, value) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.value = value;
      return true;
    }

    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      return !!this.unshift(value);
    }

    if (index === this.length) {
      return !!this.push(value);
    }

    const newNode = new Node(value);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;

    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const removedNode = this.get(index);
    const beforeNode = removedNode.prev;
    const afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;

    return removedNode;
  }
}

const doublyLinkedList = new DoublyLinkedList();

// Push
doublyLinkedList.push('A');
doublyLinkedList.push('B');
doublyLinkedList.push('C');

// Pop
doublyLinkedList.pop();

// Unshift
doublyLinkedList.unshift('D');

// Shift
doublyLinkedList.shift();

// Get
doublyLinkedList.get(0);

// Insert
doublyLinkedList.insert(0, 'Z');

// Remove
doublyLinkedList.remove(1);

console.dir(doublyLinkedList, { depth: null, colors: true });
