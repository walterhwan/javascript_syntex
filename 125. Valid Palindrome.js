/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(string) {
  let start = 0;
  let end = string.length - 1;
  let str = string.toLowerCase();

  while (start <= end) {
    if (!isLetterOrNum(str[start])) {
      start++;
      continue;
    }
    if (!isLetterOrNum(str[end])) {
      end--;
      continue;
    }
    if (str[start] != str[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
};

const isLetterOrNum = char => {
  let code = char.charCodeAt(0);

  return (
    (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
  );
  // return RegExp("[a-z]").test(char); // slow
  // return char.replace(/[^a-zA-Z0-9]/g, "").length != 0; // slower
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(RegExp("[a-z]").test("1"));
