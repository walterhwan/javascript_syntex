/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let trimed = s.trim();
  let len = trimed.length;

  return len - trimed.lastIndexOf(" ") - 1;
};

console.log(lengthOfLastWord("b   adcde   "));
