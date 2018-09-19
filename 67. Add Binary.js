/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
  let idxA = a.length - 1;
  let idxB = b.length - 1;
  let result = "";
  let carry = 0;

  while (idxA >= 0 || idxB >= 0) {
    let numA = parseInt(a[idxA] || "0");
    let numB = parseInt(b[idxB] || "0");

    digit = (carry + numA + numB) % 2;
    carry = Math.floor((carry + numA + numB) / 2);
    result = digit + result;
    idxA--;
    idxB--;
  }
  if (carry != 0) result = carry + result;

  return result;
};

console.log(addBinary("1010", "1011"));
