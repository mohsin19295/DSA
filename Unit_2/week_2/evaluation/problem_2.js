/*
? Spiral Traversal (Rectangular Matrix)

You are given a matrix of size N X M.
Print the spiral traversal of the matrix.
! Refer the following figure for better understanding (problem_2.png)

*Input Format:
The first line of the input contains T, the number of test cases.
The first line of each test case contains N and M, the number of rows and columns in the given matrix.
The next N lines contain M values each denoting the elements of the matrix.

*Output Format:
For each test case, print the spiral traversal of the matrix, on a single line, on a new line

Input: 2
3 4
1 2 3 4
5 6 7 8
9 10 11 12
4 3
1 2 3
4 5 6
7 8 9
10 11 12

Output: 1 5 9 10 11 12 8 4 3 2 6 7
1 4 7 10 11 12 9 6 3 2 5 8
*/

function runProgram(input) {
  input = input.split("\n");
  const test = +input[0];
  let line = 1;

  for (let i = 1; i <= test; i++) {
    let [n, m] = input[line++].split(" ").map(Number);
    let mat = [];
    for (let j = 0; j < n; j++) {
      mat.push(input[line++].split(" "));
    }
    console.log(spiralMat(n, m, mat));
  }
}

const spiralMat = (n, m, mat) => {
  let [left, top, right, bottom, count] = [0, 0, m - 1, n - 1, 0];

  let res = "";
  while (count < n * m) {
    for (let i = top; i <= bottom && count < n * m; i++) {
      res += mat[i][left] + " ";
        count++;
    }
    left++;
    for (let i = left; i <= right && count < n * m; i++) {
        res += mat[bottom][i] + " ";
        count++;
    }
    bottom--;
    for (let i = bottom; i >= top && count < n * m; i--) {
        res += mat[i][right] + " ";
        count++;
    }
    right--;
    for (let i = right; i >= left && count < n * m; i--) {
        res += mat[top][i] + " ";
        count++;
    }
    top++;
  }
  return res;
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`2
3 4
1 2 3 4
5 6 7 8
9 10 11 12
4 3
1 2 3
4 5 6
7 8 9
10 11 12`);
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
