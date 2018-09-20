/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  if (strs.length === 0 || strs[0].length === 0) return "";
  let lcpIdx = 0;

  whileLoop: while (lcpIdx < strs[0].length) {
    let char = strs[0][lcpIdx];
    for (let j = 0; j < strs.length; j++) {
      let char2 = strs[j][lcpIdx];
      if (char != char2) {
        break whileLoop;
      }
    }
    lcpIdx++;
  }

  return strs[0].slice(0, lcpIdx);
};
