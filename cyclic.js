class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function isCyclic(rootNode) {
  let fast = rootNode;
  let slow = rootNode;

  while (fast) {
    for (let i = 0; i < 2; i++) {
      fast = fast.next;
      if (!fast) {
        return false;
      } else if (Object.is(fast, slow)) {
        return true;
      }
    }
    slow = slow.next;
  }
}


let a = new Node('A');
let b = new Node('B');
let c = new Node('C');
a.next = b;
b.next = c;
c.next = a;

console.log(isCyclic(a));

// console.log('foo' === 'foo');
// console.log(new String('foo') === new String('foo'));
// let a = {foo: 'bar'};
// console.log(a === a);
