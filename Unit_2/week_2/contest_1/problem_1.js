/*
? N Traversal

You are given a matrix of size n x n. Find theNtraversal of the matrix. 

! Refer the following figure for better understanding (problem_1.png)

*Input Format:
The first line contains T, the number of test cases. The first line of each test case contains N, the size of the square matrix.
Next N lines contain N space separated integers, denoting the values of the matrix.

*Output Format:
For each test case, print the N traversal of the matrix on a single line, on a new line.

Input: 1
3
1 2 3
4 5 6
7 8 9

Output: 7 4 1 5 9 6 3
*/

function runProgram(input) {
  input = input.split('\n')
  const test = +input[0]
    let line = 1;

    for (let i = 1; i <= test; i++){
        const n = +input[line++]
        let mat = []

        for (let j = 0; j < n; j++){
            mat.push(input[line++].split(' '))
        }
       console.log(nTraversal(mat, n))
    }
}

const nTraversal = (mat, n) => {
    const res = [];
    for (let i = n - 1; i >= 1; i--) res.push(mat[i][0]);
    for (let i = 0; i < n; i++) res.push(mat[i][i]);
    for (let i = n - 2; i >= 0; i--) res.push(mat[i][n - 1]);
    return res.join(" ");
}
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