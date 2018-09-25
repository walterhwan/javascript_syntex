/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  let hash = {};

  for (let i in strs) {
    let str = strs[i];
    let sortedStr = str
      .split("")
      .sort()
      .join("");
    if (hash[sortedStr]) {
      hash[sortedStr].push(str);
    } else {
      hash[sortedStr] = [];
      hash[sortedStr].push(str);
    }
  }

  return Object.keys(hash).reduce((acc, key) => {
    acc.push(hash[key]);
    return acc;
  }, []);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
