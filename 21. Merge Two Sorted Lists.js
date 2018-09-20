/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
  let mergedHead = new ListNode(-1);
  let node1 = l1;
  let node2 = l2;
  let current = mergedHead;

  while (node1 != null && node2 != null) {
    if (node1.val <= node2.val) {
      current.next = node1;
      node1 = node1.next;
    } else {
      current.next = node2;
      node2 = node2.next;
    }
    current = current.next;
  }

  current.next = node1 || node2;

  return mergedHead.next;
};
