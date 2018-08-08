/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) return 1;

  let ans = 1;
  if (n > 0) {
    while (n !== 0) {
      ans *= x;
      n -= 1;
    }
  } else {
    while (n !== 0) {
      ans /= x;
      n += 1;
    }
  }

  return ans;
};

// Input: 2.00000, 10
// Output: 1024.00000
// let x = 2.0,
//   n = 10;

let x = 2.0,
  n = -2;

// let x = 1.00001,
//   n = 123456;

console.log(myPow(x, n));
