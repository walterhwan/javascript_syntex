/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists) {
  while (lists.length > 1) {
    let newList = [];
    for (let i = 0; i < lists.length; i += 2) {
      newList.push(mergeTwoLists(lists[i], lists[i + 1]));
    }

    lists = newList;
  }

  return lists[0];
};

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

// [[1,4,5], [1,3,4], [2,6], [4,8]]
// m * log n
