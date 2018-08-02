/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let sorted = nums.sort((a, b) => a - b);
  let len = sorted.length;
  let res = [];

  for (let i = 0; i < len - 1; i++) {
    if (sorted[i] > 0) return res;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let start = i + 1, end = len - 1;
    let target = -sorted[i];

    while (start < end) {
      let sum = sorted[start] + sorted[end];
      if (sum === target) {
        res.push([sorted[i], sorted[start], sorted[end]]);

        while (sorted[start] === sorted[start + 1]) start++;
        while (sorted[end] === sorted[end - 1]) end--;

        start++;
        end--;
      } else if (sum > target) {
        end--;
      } else {
        start++;
      }
    }

  }

  return res;
};

let arr = [-1, 0, 1, 2, -1, -4];
// let arr = [0,0,0,0];


console.log(threeSum(arr));
