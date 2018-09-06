/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(string) {
  let i = 0,
    j = 0,
    ans = 0;
  let len = string.length;
  let set = new Set();

  while (i < len && j < len) {
    if (set.has(string[j])) {
      set.delete(string[i]);
      i++;
    } else {
      set.add(string[j]);
      j++;
      ans = Math.max(ans, j - i);
    }
  }

  return ans;
};

console.log(lengthOfLongestSubstring("abcabcbba"));

//abcabcbb
//i = 0
//j = 4
//ans = 1
