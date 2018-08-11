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
 * @param {TreeNode} root
 * @return {boolean}
 */
const markDepth = root => {
  if (root === null) return 0;
  else {
    root.depth = 1 + Math.max(markDepth(root.left), markDepth(root.right));
  }
  return root.depth;
};

var isBalanced = function(root) {
  const helper = root => {
    if (root === null) return true;
    if (root.left && root.right) {
      if (Math.abs(root.left.depth - root.right.depth) > 1) return false;
      else return helper(root.left) && helper(root.right);
    }
    if (root.left && !root.right) return root.left.depth === 1;
    if (root.right && !root.left) return root.right.depth === 1;
    return true;
  };

  markDepth(root);

  return helper(root);
};
