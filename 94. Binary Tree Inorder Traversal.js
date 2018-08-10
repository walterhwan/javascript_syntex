/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// recursion
// var inorderTraversal = function(root) {
//   let arr = [];
//   inorderTraversalRec(root, arr);

//   return arr;
// };

// const inorderTraversalRec = (node, arr) => {
//   if (!node) return;

//   inorderTraversalRec(node.left, arr);
//   arr.push(node.val);
//   inorderTraversalRec(node.right, arr);
// };

// iteratively
var inorderTraversal = function(root) {
  let arr = [];
  let stack = [];
  let cur = root;

  while (cur !== null || stack.length !== 0) {
    while (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    }

    cur = stack.pop();
    arr.push(cur.val);
    cur = cur.right;
  }

  return arr;
};

let root = new TreeNode(1);
let n2 = new TreeNode(2);
let n3 = new TreeNode(3);
root.right = n2;
n2.left = n3;

console.log(inorderTraversal(root));
