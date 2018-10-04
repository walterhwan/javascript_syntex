/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = root => {
  let result = [];

  const traverse = (root, level) => {
    if (root === null) return;

    let arr = result[level];
    if (arr) {
      arr.push(root.val);
    } else {
      result[level] = [root.val];
    }

    traverse(root.left, level + 1);
    traverse(root.right, level + 1);
  };

  traverse(root, 0);

  return result;
};
