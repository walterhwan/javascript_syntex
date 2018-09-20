/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function(root) {
  if (root === null) return [];

  const insertValToPaths = (paths, val) => {
    for (let i = 0; i < paths.length; i++) {
      paths[i].splice(0, 0, val);
    }
  };

  const findPath = node => {
    let paths = [];
    if (node.left === null && node.right === null) {
      return [[node.val]];
    }
    if (node.left) {
      let leftPath = [node.val, ...findPath(node.left)];
      // insertValToPaths(leftPath, node.val);
      paths.push(...leftPath);
    }
    if (node.right) {
      let rightPath = [node.val, ...findPath(node.right)];
      paths.push(...rightPath);
    }

    return paths;
  };

  let paths = findPath(root);
  return paths.map(path => path.join("->"));
};
