/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let ans = {};
  for (let i = 0; i < m; i++) ans[i] = [];
  ans[0][0] = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        ans[i][j] = 1;
        continue;
      }
      ans[i][j] = ans[i - 1][j] + ans[i][j - 1] ;
    }
  }

  return ans[m - 1][n - 1];
};

// var uniquePaths = function(m, n) {
//   let hash = {};
//   hash[[1, 1]] = 1;
//   return solveUniquePaths(m, n, hash);
// };
//
// var solveUniquePaths = function(m, n, hash) {
//   if (hash[[m, n]] !== undefined) return hash[[m, n]];
//   if (m === 1 || n === 1) return 1;
//   if (m === 2 && n === 2) return 2;
//
//   hash[[m, n]] = solveUniquePaths(m - 1, n, hash) + solveUniquePaths(m, n - 1, hash);
//   return hash[[m, n]];
// };

console.log(uniquePaths(7, 3));
