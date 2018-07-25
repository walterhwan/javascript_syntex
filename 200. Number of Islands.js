/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    for (let row of grid) {
        console.log(row);
    }

    let count = 0;

    grid.forEach((row, i) => {
      row.forEach((val, j) => {
        if (val === '1') {
          explore(i, j, grid);
          count++;
        }
      });
    });

    for (let row of grid) {
        console.log(row);
    }

    return count;
};

var explore = function(i, j, grid) {
  const row = grid[i];
  if (row === undefined || row[j] !== '1') return;

  grid[i][j] = '0';

  explore(i+1, j, grid);
  explore(i, j+1, grid);
  explore(i-1, j, grid);
  explore(i, j-1, grid);
};

let grid = [["1","1","1"],["0","1","0"],["1","1","1"]];

console.log(numIslands(grid));
