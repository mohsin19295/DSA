/*
? Follow the Knight

You are very good at playing chess since childhood and you knew the rules very much. You have a 10 X 10 chessboard and you want to explore all the possible squares on the board that the knight can be at in exactly N moves.It is placed at (i.j) coordinate initially. For a 10X10 chessboard (1,1) will be the top left corner and (10,10) will be the bottom right corner.

! Refer the diagram, knight can move to any of the squares marked as X in 1 move (knight.jpg)

*Input Format:
Input will consist of three space seperated integers i,j and N

*Constraints:
N < 10

*Output Format:
Print a single integer denoting the number of blocks on the chessboard that the knight can be at in exactly N moves.

Input: 3 3 1
Output: 8
*/

function runProgram(input) {
  const [row, col, n] = input.split(" ").map(Number);
  const board = new Array(10).fill(0).map(() => new Array(10).fill(0));

  let count = 0;
  const moves = [
    [1, 2],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [2, 1],
    [-2, -1],
    [-2, 1],
    [2, -1],
  ];

  const followTheKnight = (board, row, col, n) => {
    if (row < 0 || col < 0 || row > 9 || col > 9) {
      return;
    }

    if (n === 0) {
      if (board[row][col] !== 1) {
        board[row][col] = 1;
        count++;
      }
      return;
    }

    for (let i = 0; i < moves.length; i++) {
      let [movedRow, movedCol] = moves[i];
      followTheKnight(board, row + movedRow, col + movedCol, n - 1);
    }
  };
  followTheKnight(board, row - 1, col - 1, n);
  console.log(count);
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`3 3 1`);
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
