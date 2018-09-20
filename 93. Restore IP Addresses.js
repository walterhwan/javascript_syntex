/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function(s) {
  const dfs = (prefix, idx) => {
    console.log("prefix = %s", prefix);
    console.log("idx = %s", idx);

    if (prefix.length === 4 && idx === s.length) {
      res.push(prefix.join("."));
      return;
    }

    if (prefix.length === 4 || idx === s.length) {
      return;
    }

    for (let r = idx; r < s.length; r++) {
      if (r !== idx && s[idx] === "0") return;

      const num = parseInt(s.slice(idx, r + 1));
      if (num > 255) {
        return;
      }
      prefix.push(num);
      dfs(prefix, r + 1);
      prefix.pop();
    }
  };

  const res = [];
  dfs([], 0);
  return res;
};
console.log("012345678910");
console.log("25525511135");
console.log(restoreIpAddresses("25525511135"));
