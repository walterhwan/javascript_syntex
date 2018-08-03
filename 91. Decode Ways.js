/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let ans = {'0': 0};
  for (let i = 1; i < 10; i++) {
    ans[i.toString()] = 1;
  }

  return numDecodingsRec(s, ans);
};

var numDecodingsRec = function(s, ans) {
  // console.log('s = %s', s);
  // console.log('ans[s] = %s', ans[s]);
  if (ans[s] !== undefined) return ans[s];
  if (s.length === 0) return 1;

  let firstTwo = parseInt(s.slice(0, 2));
  if (firstTwo > 26) {
    ans[s] = numDecodingsRec(s.slice(1), ans);
  } else if (s[0] === '0') {
    ans[s] = 0;
  } else if (s[1] === '0') {
    ans[s] = numDecodingsRec(s.slice(2), ans);
  } else {
    ans[s] = numDecodingsRec(s.slice(1), ans) + numDecodingsRec(s.slice(2), ans);
  }

  return ans[s];
};

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26

console.log(numDecodings('12'));
