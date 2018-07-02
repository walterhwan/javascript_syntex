const twoSum = function(nums, target) {
  let record = {};
  let sol;
  nums.some((num, idx) => {
    if (record[target - num] === undefined) {
      record[num] = idx;
    } else {
      sol = [record[target - num], idx];
      return true;
    }
  });

  return sol;
};

let nums = [1, 5, 2, 10, 7, 11, 15];
console.log(twoSum(nums, 9));

let arr = [1, 2, 3, 4];

arr.some(function (val, idx) {
  if (val === 3) return true; // break loop using return true
  console.log('%d: %s', idx, val);
});
