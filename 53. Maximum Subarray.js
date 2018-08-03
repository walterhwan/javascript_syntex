/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = -Number.MAX_VALUE;
  let sum = 0;

  nums.forEach(item => {
    sum += item;
    if (sum > max) max = sum;
    if (sum < 0) sum = 0;
  });

  return max;
};

let nums = [-2,1,-3,4,-1,2,1,-5,4];
// 6

console.log(maxSubArray(nums));

let myArray = [123, 15, 187, 32];
myArray.forEach(function (value, i, array) {
    console.log('%d: %s: %s', i, value, array);
});
