class MaxStack {
  constructor() {
    this.store = [];
    this.maxStore = [];

    this.push = this.push.bind(this);
    this.pop = this.pop.bind(this);
    this.max = this.max.bind(this);
  }

  push(el) {
    let len = this.maxStore.length;
    if (this.maxStore.length === 0 || this.maxStore[len - 1] <= el) {
      this.maxStore.push(el);
    }
    this.store.push(el);
  }

  pop() {
    let len = this.maxStore.length;
    // if the last el in store === last el in masStore, we pop the maxStore array as well
    if (this.maxStore[len - 1] === this.store[this.store.length-1]) {
      this.maxStore.pop();
    }
    return this.store.pop();
  }

  max() {
    return this.maxStore[this.maxStore.length - 1];
  }
}

// let stack = new MaxStack();
// stack.push(2);
// stack.push(1);
// stack.push(0);
// stack.push(10);
// stack.push(10);
// stack.push(5);
// stack.push(2);
//
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();

// console.log(stack.max());
