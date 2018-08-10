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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  const helper = (p1, p2) => {
    if (p2 < p1) return null;
    if (p1 === p2) return new TreeNode(nums[p1]);

    let len = p2 - p1,
      midIdx = p1 + Math.floor(len / 2),
      root = new TreeNode(nums[midIdx]);
    console.log("p1 = %s, p2 = %s, midIdx = %s", p1, p2, midIdx);

    root.left = helper(p1, midIdx - 1);
    root.right = helper(midIdx + 1, p2);

    return root;
  };

  return helper(0, nums.length - 1);
};

nums = [-10, -3, 0, 5, 9];
console.log(sortedArrayToBST(nums));
