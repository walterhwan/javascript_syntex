/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * Add two numbers represented by linked-list
 */
var addTwoNumbers = function(l1, l2, num = 0) {
  let val = l1.val + l2.val + num;
  let quo = Math.floor(val / 10);
  val = val % 10;

  let node = new ListNode(val);
  if (l2.next === null && l1.next === null) {
    if (quo > 0) {
      node.next = new ListNode(quo);
    }
  } else if (l1.next === null) {
    node.next = addTwoNumbers(new ListNode(0), l2.next, quo);
  } else if (l2.next === null) {
    node.next = addTwoNumbers(l1.next, new ListNode(0), quo);
  } else {
    node.next = addTwoNumbers(l1.next, l2.next, quo);
  }

  return node;
};

// let l1 = new ListNode(2);
// l1.next = new ListNode(4);
// l1.next.next = new ListNode(3);

// let l2 = new ListNode(5);
// l2.next = new ListNode(6);
// l2.next.next = new ListNode(4);

let l1 = new ListNode(5);
let l2 = new ListNode(5);

console.log(addTwoNumbers(l1, l2));
