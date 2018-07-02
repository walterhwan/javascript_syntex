
const lengthOfLongestSubstring = function(string) {
  let length = 0;
  let hash = {};
  let startIdx = 0;

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (hash[char]) {
      while (true) {
        if (string[startIdx] === char) {
          startIdx++;
          break;
        }
        hash[string[startIdx]] = false;
        startIdx++;
      }
    } else {
      hash[char] = true;
    }

    length = Math.max(length, i - startIdx + 1);
  }

  return length;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('dvdf'));

// better solution
const lengthOfLongestSubstring2 = function(string) {
  let n = string.length;
  let set = new Set();
  let length = 0, i = 0, j = 0;
  while (i < n && j < n) {
    if (set.has(string[j])) {
      set.delete(string[i]);
      i++;
    } else {
      set.add(string[j]);
      j++;
      length = Math.max(length, j - i);
    }
  }

  return length;
};

console.log(lengthOfLongestSubstring2('abcabcbb'));
console.log(lengthOfLongestSubstring2('bbbbb'));
console.log(lengthOfLongestSubstring2('pwwkew'));
console.log(lengthOfLongestSubstring2('dvdf'));
