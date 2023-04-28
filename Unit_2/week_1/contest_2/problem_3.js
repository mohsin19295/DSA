/*
? Rotate By 90

Given a square matrix of size N, turn it by 90 degrees in an anti-clockwise direction, as shown in sample input.

*Input Format:
First line will contain the number of rows N (same as the number of columns)
After that next N lines will N rows of the matrix.

*Output Details:
You have to display the rotated matrix

Input:4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8

Output:
4 8 4 8
3 7 3 7
2 6 2 6
1 5 1 5
*/

function runProgram(input) {
  input = input.split("\n");
  const size = +input[0];

  let mat = [];
  for (let i = 1; i <= size; i++) {
    mat.push(input[i].split(" ").map(Number));
  }
    
  for (let j = size - 1; j >= 0; j--) {
      let arr = []
      for (let i = 0; i < size; i++) {
        arr.push(mat[i][j])
      }
        console.log(arr.join(' '))
  }
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8`);
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
