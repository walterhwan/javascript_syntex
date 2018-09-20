/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let merged = null;
  let node1 = l1;
  let node2 = l2;
  if (node1.val <= node2.val) {
    merged = new ListNode(node1.val);
    node1 = node1.next;
  } else {
    merged = new ListNode(node2.val);
    node2 = node2.next;
  }
  let current = merged;

  while (node1 != null && node2 != null) {
    console.log("node1 = %s", node1);
    console.log("node2 = %s", node2);
    if (node1.val <= node2.val) {
      current.next = new ListNode(node1.val);
      node1 = node1.next;
    } else {
      current.next = new ListNode(node2.val);
      node2 = node2.next;
    }
    current = current.next;
  }

  return merged;
};

const printNode = node => {
  if (node != null) {
    console.log(node.val);
    printNode(node.next);
  }
};

let a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(4);

let b = new ListNode(1);
b.next = new ListNode(3);
b.next.next = new ListNode(4);

let node = mergeTwoLists(a, b);
printNode(node);
