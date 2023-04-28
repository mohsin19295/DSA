/*
? Transpose the Matrix

The transpose of a matrix is an operator which flips a matrix over its diagonal, that is it switches the row and column of the matrix by producing another matrix.

See sample test case for better understanding
So, given an array of n rows and m columns, generate the transpose of the matrix.

*Input Format:
First line contains two integers n and m
Next n lines contain m integers which represents each row of 2d array

*Output Format:
Print the transposed array

Input:3 2
5 2
9 10
0 -4

Output:
5 9 0
2 10 -4 
*/

function runProgram(input) {
  input = input.split('\n')
  const [n, m] = input[0].split(' ').map(Number)

  const mat = []
    for (let i = 1; i <= n; i++){
        mat.push(input[i].split(' '))
    }
  
  for (let j = 0; j < m; j++){
    let arr = []
    for (let i = 0; i < n; i++){
      arr.push(mat[i][j])
    }
    console.log(arr.join(' '))
  }
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`5 4
0 0 0 0
1 1 1 1
2 2 2 2
3 3 3 3
4 4 4 4`);
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