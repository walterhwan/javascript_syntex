class Node {
  constructor(val) {
    this.val = val;
    this.left = undefined;
    this.right = undefined;
  }
}

function isMirrorTree(node) {
  if (!node) return true;
  return isMirrorTreeRec(node.left, node.right);
}

function isMirrorTreeRec(node1, node2) {
  if (!node1 && !node2) {
    return true;
  } else if (!node1 || !node2) {
    return false;
  }

  return (node1.val === node2.val)
    && isMirrorTreeRec(node1.left, node2.right)
    && isMirrorTreeRec(node1.right, node2.left);
}


let oneLeft = new Node(1);
let twoLeft = new Node(2);
let threeLeft = new Node(3);
let five = new Node(5);
let oneRight = new Node(1);
let twoRight = new Node(2);
let threeRight = new Node(3);
//         5
//      3    3
//     1 2  2 1
//

threeLeft.left = oneLeft;
threeLeft.right = twoLeft;
five.left = threeLeft;
//
threeRight.left = twoRight;
threeRight.right = oneRight;
five.right = threeRight;

console.log(isMirrorTree(five));
