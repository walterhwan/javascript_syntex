/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  let sums = num1.split("").reverse();
  let n2 = stringToNum(num2);
  console.log("sums = %s", sums);
  console.log("n2 = %s", n2);

  sums.forEach((num, i) => {
    sums[i] = n2 * (parseInt(num) * 10 ** i);
  });
  console.log("sums = %s", sums);

  return sums
    .reduce((total, num) => {
      console.log(total);
      return total + num;
    }, 0)
    .toString();
};

const stringToNum = string => {
  let num = 0;
  let digit = string.length;

  for (let i = 0; i < digit; i++) {
    num += 10 ** (digit - i - 1) * (string.charCodeAt(i) - 48);
  }

  return num;
};

// num1 = "123", num2 = "456"
// Output: "56088"

// let num1 = "123",
//   num2 = "456";

let num1 = "23456789";
let num2 = "987654321";

// let num1 = "123456789";
// let num2 = "987654321";
// console.log(stringToNum("123456789"));
// console.log(stringToNum("987654321"));
console.log(parseInt(num1));
console.log(parseInt(num2));
console.log(multiply(num1, num2));
console.log(parseInt(num1) * parseInt(num2));

console.log(Math.pow(2, 53));
console.log(Math.pow(2, 53) + 1);
