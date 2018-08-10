/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const helper = (p1, p2, i1, i2) => {
    if (p1 > p2 || i1 > i2) return null;

    let val = preorder[p1],
      rootIdx = inorder.indexOf(val),
      nLeft = rootIdx - i1,
      root = new TreeNode(val);

    root.left = helper(p1 + 1, p1 + nLeft, i1, rootIdx - 1);
    root.right = helper(p1 + 1 + nLeft, p2, rootIdx + 1, i2);

    return root;
  };

  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};

let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];

// let preorder = [3, 9];
// let inorder = [3, 9];

console.log(buildTree(preorder, inorder));
