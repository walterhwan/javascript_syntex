/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let ans = 0;
  let lowest = prices[0];
  for (let i = 1; i < prices.length; i++) {
    lowest = Math.min(lowest, prices[i]);
    ans = Math.max(ans, prices[i] - lowest);
  }

  return ans;
};

let prices = [7,1,5,3,6,4];

// console.log(maxProfit(prices));
