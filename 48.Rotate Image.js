/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix) {
  let len = matrix.length;
  // flip rows
  for (let i = 0; i < len / 2; i++) {
    let j = len - i - 1;
    [matrix[i], matrix[j]] = [matrix[j], matrix[i]];
  }

  // swap non-diagonals
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotate(matrix);
console.log(matrix);
