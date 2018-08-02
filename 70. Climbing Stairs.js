/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let ans = {1: 1, 2: 2};

  for (let i = 3; i <= n; i++) {
    ans[i] = ans[i - 2] + ans[i - 1];
  }

  return ans[n];
};

// console.log(climbStairs(1));
// console.log(climbStairs(2));
console.log(climbStairs(4));
