/*
? Circular Traversal

Given a square matrix, you have to find the reverse U traversal of the matrix. Refer the sample I/O for better understanding.

! Refer the following figure for better understanding (problem_5.png)

Note: No element should be visited more than once.

*Input Format:
The first line of the input contains T, the number of test cases.
The next line contains N, the size of the square matrix.
The next N lines contains N space separated integers each denoting the values of the matrix.

*Output Format:
For each test case, print the elements that lie on the reverse U traversal, on a single line, on a new line.

Input: 1
3
1 2 3
4 5 6
7 8 9

Output: 7 4 1 2 3 6 9 8
 */

function runProgram(input) {
    input = input.split('\n');
    const test = +input[0]
    let line = 1

    for (let i = 1; i <= test; i++){
        let n = +input[line++]
        let mat = []

        for (let j = 0; j < n; j++){
            mat.push(input[line++].split(' '))
        }
        console.log(circularTraversal(n, mat))
    }
}

const circularTraversal = (n, mat) => {
    let res = []
    for (let i = n - 1; i >= 1; i--){
        res.push(mat[i][0])
    }
    for (let i = 0; i < n; i++){
        res.push(mat[0][i])
    }
    for (let i = 1; i < n-1; i++){
        res.push(mat[i][n-1])
    }
    for (let i = n - 1; i >= 1; i--){
        res.push(mat[n-1][i])
    }
    return res.join(' ');
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