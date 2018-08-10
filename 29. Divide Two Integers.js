/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (dividend === -2147483648 && divisor === -1) return 2147483647;
  let ans = 0;
  let multiplier = 1;
  if (divisor < 0) {
    divisor = -divisor;
    multiplier = -multiplier;
  }
  if (dividend < 0) {
    dividend = -dividend;
    multiplier = -multiplier;
  }

  while (dividend >= divisor) {
    dividend -= divisor;
    ans += 1;
  }

  return multiplier * ans;
};

// let dividend = 10;
// let divisor = 3;

let dividend = -2147483648;
let divisor = -3;
// ans: -2

console.log(divide(dividend, divisor));
