var longestPalindrome = function(string) {
  let memory = {};
  let length = 0;
  let longestPal = "";

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length + 1; j++) {
      let word = string.slice(i, j);
      console.log("word:%s", word);
      if (memory[[i + 1, j - 2]] && string.charAt(i) === string.charAt(j - 1)) {
        console.log("yes");
        memory[[i, j]] = true;
        if (length < word.length) {
          length = word.length;
          longestPal = word;
        }
        continue;
      }
      if (isPal(word)) {
        memory[[i, j]] = true;
        if (length < word.length) {
          length = word.length;
          longestPal = word;
        }
      } else {
        memory[[i, j]] = false;
      }
    }
  }

  console.log(memory);

  return longestPal;
};

var isPal = function(word) {
  for (let i = 0; i < word.length / 2; i++) {
    if (word.charAt(i) !== word.charAt(word.length - 1 - i)) {
      return false;
    }
  }

  return true;
};

let string = "erhannahweew";
console.log(longestPalindrome(string));
