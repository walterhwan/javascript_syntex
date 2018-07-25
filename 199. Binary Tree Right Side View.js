/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let view = [];
    let level = 0;

    getView(root, level);

    return view;
};

function getView(node, level, view) {
    if (!node) return;

    view[level] = node.val;
    getView(node.left, level + 1, view);
    getView(node.right, level + 1, view);
}

let a = {};
a[[1,2]] = 3;
console.log(a[[2,2]]);
