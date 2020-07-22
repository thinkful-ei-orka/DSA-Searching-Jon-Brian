const _Node = require('./queueNode');

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    //make new node last item on the queue
    this.last = node;
  }

  dequeue() {
    //if queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first; // 1
    this.first = this.first.next; // 1.next (2) => first(2)
    //if this is last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
  peek() {
    return this.first.value;
  }
  isEmpty() {
    if (this.first === null && this.last === null) {
      return true;
    }
    return false;
  }
  display() {
    let currQueue = this.first;
    if (this.isEmpty()) {
      return 'No data in Queue';
    }
    while (currQueue) {
      console.log(currQueue.value);
      currQueue = currQueue.next;
    }
    return;
  }
}
module.exports = Queue;
