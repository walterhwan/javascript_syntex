/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  let leftPair = ["(", "{", "["];
  let pairs = { ")": "(", "}": "{", "]": "[" };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (leftPair.includes(char)) {
      stack.push(char);
    } else if (pairs[char] && pairs[char] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }

  if (stack.length != 0) {
    return false;
  }

  return true;
};
