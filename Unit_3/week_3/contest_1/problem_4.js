/*
? N Queens Variants

The n-queens puzzle is the problem of placing n queens on an NxN chessboard such that no two queens attack each other.
Given an integer n, print the number of distinct solutions to the n-queens puzzle.

! Refer the following figure for better understanding (nQueen.png)

*Input Format:
The first line of the input contains one integer n (1 <= n <= 10).

*Output Format:
Print the number of distinct solutions possible.

Input: 4
Output: 2

Input: 1
Output:1

*HINT:
There are two distinct solutions to the 4-queens puzzle as shown below.
[
    [
    _,Q,_,_ // Solution 1
    _,_,_,Q
    Q,_,_,_
    _,_,Q,_
    ],
    [
    _,_Q,_ // Solution 2
    Q,_,_,_
    _,_,_,Q
    _,Q,_,_
    ]
]
So count is 2
*/

function runProgram(input) {
  const n = +input;
  const board = new Array(n).fill(0).map(() => new Array(n).fill(0));
  console.log(allPossibleCount(board));
}

const isQueenSafe = (board, row, col) => {
  // No need to check horizontally

  // Vertically Check
  for (let i = row - 1, j = col; i >= 0; i--) {
    if (board[i][j] === 1) return false;
  }

  // upRight Diagonal
  for (let i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
    if (board[i][j] === 1) return false;
  }

  // upLeft Diagonal
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 1) return false;
  }
  return true;
};

const allPossibleCount = (board) => {
  let count = 0;
  const possibleWays = (board, row) => {
    if (board.length === row) {
      count++;
      return;
    }

    for (let col = 0; col < board.length; col++) {
      if (isQueenSafe(board, row, col)) {
        board[row][col] = 1;
        possibleWays(board, row + 1);
        board[row][col] = 0;
      }
    }
  };
  possibleWays(board, 0);
  return count;
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`4`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
