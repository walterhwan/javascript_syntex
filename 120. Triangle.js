/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let cache = Array.from(Array(triangle.length), (arr, i) => {
    return Array(i + 1);
  });

  let lastRow = cache.length - 1;
  for (let i = 0; i < cache[lastRow].length; i++) {
    cache[lastRow][i] = triangle[lastRow][i];
  }

  return minimumTotalAt(0, 0, triangle, cache);
};

const minimumTotalAt = (i, j, triangle, cache) => {
  if (cache[i][j] !== undefined) {
    return cache[i][j];
  }

  let minVal = Math.min(minimumTotalAt(i + 1, j, triangle, cache), minimumTotalAt(i + 1, j + 1, triangle, cache));
  cache[i][j] = triangle[i][j] + minVal;
  return cache[i][j];
};

let triangle = [
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
];

// let triangle = [[2],[3,4],[6,5,9],[4,4,8,0]];

console.log(minimumTotal(triangle));
