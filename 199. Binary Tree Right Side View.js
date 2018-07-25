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
    var view = [];
    let level = 0;

    getView(root, level);

    function getView(node, level) {
        if (!node) return;
        
        view[level] = node.val;
        getView(node.left, level + 1);
        getView(node.right, level + 1);
    }

    return view;
};
