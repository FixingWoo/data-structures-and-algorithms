class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.size;
  }
  pop() {
    if (!this.first) {
      return undefined;
    }

    const removedNode = this.first;
    this.first = removedNode.next;

    if (!this.first) {
      this.last = null;
    }

    this.size--;

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

const stack = new Stack();

// Push
stack.push('A');
stack.push('B');

// Pop
stack.pop();
stack.pop();

// Peek
stack.peek();

// isEmpty
stack.isEmpty();

// size
// size() 메서드가 클래스의 프로퍼티 this.size와 동일하여 number 타입을 참조하여 getSize()로 변경
stack.getSize();

console.dir(stack);
