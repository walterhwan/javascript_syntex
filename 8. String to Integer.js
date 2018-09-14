/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.trim();
  let arr = [];
  let sign = 1;
  if (
    str.charCodeAt(0) != 45 &&
    (str.charCodeAt(0) < 48 || str.charCodeAt(0) > 57)
  )
    return 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58) {
      arr.push(str[i]);
    } else if (str.charCodeAt(i) === 45) {
      sign = -1;
    }
  }
  let num = 0;
  let ten = 10 ** (arr.length - 1);
  arr.forEach(el => {
    num += ten * el;
    ten /= 10;
  });

  // stupid leetcode
  if (num * sign < -2147483648) {
    return -2147483648;
  }
  return num * sign;
};

console.log(myAtoi("42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332")); // -2147483648
