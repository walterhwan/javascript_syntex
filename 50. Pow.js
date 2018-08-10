/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return x;
  } else if (n === -1) {
    return 1 / x;
  } else if (n % 2 === 0) {
    const m = myPow(x, n / 2);
    console.log("m = %s", m);
    return m * m;
  } else {
    return x * myPow(x, n - 1);
  }
};

// Input: 2.00000, 10
// Output: 1024.00000
let x = 2.0,
  n = 10;

// let x = 2.0,
//   n = -2;

// let x = 1.00001,
//   n = 123456;

// let x = 1.0;
// let n = -2147483648;

console.log(myPow(x, n));
