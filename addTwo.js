function ListNode(val) {
  this.val = val;
  this.next = null;
}

const addTwoNumbers = function(l1, l2, extra = 0) {
    if (l1 === null && l2 === null && extra === 0) {
        return null;
    }
    let sum = extra;
    if (l1) sum += l1.val;
    if (l2) sum += l2.val;

    let quo = Math.floor(sum / 10);
    let rem = sum % 10;

    let newList = new ListNode(rem);
    let l1Next;
    if (l1) {
        l1Next = l1.next;
    } else {
        l1Next = null;
    }
    let l2Next;
    if (l2) {
        l2Next = l2.next;
    } else {
        l2Next = null;
    }
    newList.next = addTwoNumbers(l1Next, l2Next, quo);

    return newList;
};

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

let node = addTwoNumbers(l1, l2);
console.log(node);
console.log(node.next);
console.log(node.next.next);
