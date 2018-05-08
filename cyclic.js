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

function length(node) {
  if (isCyclic(node)) {
    return null;
  }

  let len = 0;
  while (node) {
    node = node.next;
    len += 1;
  }

  return len;
}

function willConverge(a, b) {
  let difference = length(a) - length(b);
  let aRunner = a;
  let bRunner = b;

  if (difference > 0) {
    for (let i = 0; i < difference; i++) {
      aRunner = aRunner.next;
    }
  } else {
    for (let i = 0; i < -difference; i++) {
      bRunner = bRunner.next;
    }
  }

  while (aRunner) {
    if (aRunner === bRunner) return true;
    aRunner = aRunner.next;
    bRunner = bRunner.next;
  }

  return false;
}

let a = new Node('A');
let b = new Node('B');
let c = new Node('C');
let d = new Node('D');
let e = new Node('E');
let f = new Node('F');
a.next = c;
c.next = e;
b.next = e;
e.next = f;

console.log(isCyclic(a));
// console.log(length(a));
// console.log(length(b));
console.log(willConverge(a, b));

// console.log('foo' === 'foo');
// console.log(new String('foo') === new String('foo'));
// let a = {foo: 'bar'};
// console.log(a === a);
