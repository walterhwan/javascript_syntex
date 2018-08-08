var solve = function(board) {
  let queue = [];

  for (let i = 0; i < board.length; i++) {
    checkBoarder(i, 0, board, queue);
  }
  for (let i = 0; i < board.length; i++) {
    checkBoarder(i, board[0].length - 1, board, queue);
  }
  for (let j = 0; j < board[0].length; j++) {
    checkBoarder(0, j, board, queue);
  }
  for (let j = 0; j < board[0].length; j++) {
    checkBoarder(board.length - 1, j, board, queue);
  }

  for (let pos of queue) {
    let i, j;
    [i, j] = pos;
    checkBoarder(i + 1, j, board, queue);
    checkBoarder(i - 1, j, board, queue);
    checkBoarder(i, j + 1, board, queue);
    checkBoarder(i, j - 1, board, queue);
  }

  for (let row of board) {
    console.log(row);
  }

  for (let [i, row] of board.entries()) {
    for (let [j, el] of row.entries()) {
      if (el === "1") {
        board[i][j] = "O";
      } else if (el === "O") {
        board[i][j] = "X";
      }
    }
  }

  console.log();
  for (let row of board) {
    console.log(row);
  }
};

var checkBoarder = function(i, j, board, queue) {
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
    return;
  }
  // console.log(board[i][j]);
  if (board[i][j] === "O") {
    board[i][j] = "1";
    queue.push([i, j]);
  }
};

let board = [["X", "O", "X"], ["O", "X", "O"], ["X", "O", "X"]];
solve(board);
