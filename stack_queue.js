class StackQueue {
  constructor() {
    this.in = [];
    this.out = [];

    this.enqueue = this.enqueue.bind(this);
    this.dequeue = this.dequeue.bind(this);
  }

  enqueue(el) {
    this.in.push(el);
  }

  dequeue() {
    if (this.out.length === 0) {
      console.log('moving stuff');
      while (this.in.length !== 0) {
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  }
}


// let queue = new StackQueue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
//
// console.log(queue.dequeue());
// console.log(queue);
// console.log(queue.dequeue());
//
// queue.enqueue(5);
// queue.enqueue(6);
