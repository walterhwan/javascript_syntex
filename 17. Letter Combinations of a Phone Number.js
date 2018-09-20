/**
 * @param {string} digits
 * @return {string[]}
 */

const letterCombinations = function(digits) {
  if (!digits.length) return [];

  let numPad = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  };

  const addCombo = (arr, letters) => {
    return letters
      .map(letter => {
        return arr.map(string => string + letter);
      })
      .reduce((acc, el) => acc.concat(el));
  };

  return digits
    .split("")
    .map(char => numPad[char])
    .reduce((acc, letters) => addCombo(acc, letters), [""]);
};

// console.log(addCombo(["a", "b", "c"], ["d", "e", "f"]));
console.log(letterCombinations("234"));
