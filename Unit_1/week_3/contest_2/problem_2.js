/*
? Specific Diagonal

Given a matrix of R rows and c columns which contains distinct integers and you are given a integer k and you need to print both the diagonals crossing through the given element k, you can always assume that the given element always exist in the matrix.

1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16

In this 4*4 Matrix, suppose we need to print the diagonals passing from 11, So the output will be :
1 6 11 16
8 11 14

Note: You need to print the diagonal from top to bottom also make sure you print the diagonals going from left to right first then diagonal going right to left on a new lines.

*Input Format:
The first line of input will contain two integers R and C, denoting the Rows and Columns of the Matrix.
Next R (rows) lines contain C integers each denoting the matrix elements.
The next line will contain an integer K, denoting the element for which we need to print the diagonals.

*Output Details:
Output both the diagonals containing the given element, print both the diagonals in a new line and from top to bottom order.


Input:3 3
1 2 3
4 5 6
7 8 9
6

Output: 2 6
6 8
*/

function runProgram(input) {
  input = input.split('\n')
    const [n, m] = input[0].split(' ').map(Number)
    const k = +input[input.length - 1]
    
    let mat = []
    for (let i = 1; i < input.length - 1; i++){
        mat.push(input[i].split(' ').map(Number))
    }
    getValues(mat, n, m, k)
}

const getValues = (mat, n, m, k) => {
    const target = findIndexes(mat, n, m, k)
    const sum = target[0] + target[1]
    const diff = target[0] - target[1]

    let [rightD, leftD] = [[], []]

    for (let i = 0; i < n; i++){
        for (let j = 0; j < m; j++){
            if (i + j === sum) {
                rightD.push(mat[i][j])
            } if (i - j === diff) {
                leftD.push(mat[i][j])
            }
        }
    }

    console.log(leftD.join(' '))
    console.log(rightD.join(' '))
}

const findIndexes = (mat, n, m, k) => {
    for (let i = 0; i < n; i++){
        for (let j = 0; j < m; j++){
            if (mat[i][j] === k) {
                return [i, j]
            }
        }
    }
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`3 3
1 2 3
4 5 6
7 8 9
6`);
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