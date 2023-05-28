/*
? Spiral Traversal IV 

You are given a square matrix of size N x N.
Print the spiral traversal of the matrix.

! Refer the following figure for better understanding (problem_3.png)

*Input Format:
The first line of the input contains T, the number of test cases.
The first line of each test case contains N, the size of the matrix.
The next N lines contain N integers each denoting the values of the matrix.

Constraints
1 <= T <= 10
1 <= N <= 500
1 <= Afilfil <= 500

*Output Format:
For each test case, print the spiral traversal of the matrix, as shown in the problem description, on a single line, on a new line.

Input: 1
3
1 2 3
4 5 6
7 8 9

Output: 1 4 7 8 9 6 3 2 5
*/

function runProgram(input) {
  input = input.split("\n");
  const test = +input[0];
  let line = 1;

  for (let i = 1; i <= test; i++) {
    let n = +input[line++];
    let mat = [];
    for (let j = 0; j < n; j++) {
      mat.push(input[line++].split(" "));
    }
    console.log(spiralMat(n, mat));
  }
}

const spiralMat = (n, mat) => {
  let [left, right, top, bottom] = [0, n - 1, 0, n - 1];

  let res = "";
  for (let j = 0; j < n / 2; j++) {
    for (let i = top; i <= bottom; i++) {
      res += mat[i][left] + " ";
    }
    left++;
    for (let i = left; i <= right; i++) {
      res += mat[bottom][i] + " ";
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      res += mat[i][right] + " ";
    }
    right--;
    for (let i = right; i >= left; i--) {
      res += mat[top][i] + " ";
    }
    top++;
  }
  return res;
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
