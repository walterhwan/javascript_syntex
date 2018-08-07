/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let cache = Array.from(Array(grid.length), () => new Array(grid[0].length));

  return minPathSumAt(0, 0, grid, cache);
};

var minPathSumAt = function(i, j, grid, cache) {
  if (cache[i][j]) {
    return cache[i][j];
  } else if (i > grid.length - 1 || j > grid[0].length - 1) {
    return Number.MAX_VALUE;
  }

  let minVal;
  if (i === grid.length - 1 && j === grid[0].length - 1) {
    minVal = 0;
  } else if (i === grid.length - 1) {
    minVal = minPathSumAt(i, j + 1, grid, cache);
  } else if (j === grid[0].length - 1) {
    minVal = minPathSumAt(i + 1, j, grid, cache);
  } else {
    minVal = Math.min(minPathSumAt(i + 1, j, grid, cache), minPathSumAt(i, j + 1, grid, cache));
  }

  cache[i][j] = grid[i][j] + minVal;
  return cache[i][j];
};


let grid = [
  [1,3,1],
  [1,5,1],
  [4,2,1]
];

console.log(minPathSum(grid));
