/**
 * Definition for a binary tree node.
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
const helper = (root, min, max) => {
  if (root === null) return true;
  if (min !== null && root.val <= min) return false;
  if (max !== null && root.val >= max) return false;
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};
const isValidBST = root => {
  return helper(root, null, null);
};

let root = new TreeNode(2);
root.right = new TreeNode(1);
root.left = new TreeNode(3);

console.log(isValidBST(root));
