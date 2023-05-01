/*
? Z Traversal

Given a square matrix of size N x N. Print the Z traversal of the matrix.
! Refer the figure given for better understanding (problem_2.png)

*Input Format:
The first line of the input contains T, the number of test cases. The first line of each test case contains N, the dimension of the square matrix.
Next N lines contains N space separated integers, denoting the values of the matrix.

*Output Format:
For each test case, print the elements that occur in the Z traversal of the matrix, on a new line.

Input: 1
3
1 2 3
4 5 6
7 8 9

Output: 
*/

function runProgram(input) {
  input = input.trim().split("\n");
  const test = +input[0];
  let line = 1;

  for (let i = 1; i <= test; i++) {
    const n = +input[line++];
    let mat = [];

    for (let j = 0; j < n; j++) {
      mat.push(input[line++].split(" "));
    }
    zTraversal(mat, n);
  }
}

const zTraversal = (mat, n) => {
  let res = [];
  for (let i = 0; i < n-1; i++) {
    res.push(mat[0][i]);
  }
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      if (i + j === n - 1) {
        res.push(mat[j][i]);
      }
    }
  }
  for (let i = 1; i < n; i++) {
    res.push(mat[n - 1][i]);
  }
  console.log(res.join(' '));
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`1
3
1 2 3
4 5 6
7 8 9`);
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
