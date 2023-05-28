/*
? Borderless

Description
You are given a matrix A of size N X M. Find the sum of all the elements in the matrix which do not lie at the border.

*Input Format:
The first line of the input contains N and M, denoting the dimensions of the matrix.
The next N lines contain M space separated integers each, denoting the elements of the matrix.

*Output Format:
Print a single integer denoting the sum of all the elements in the matrix, which do not lie at the border.
*/

function runProgram(input) {
  input = input.split('\n')
  const [n, m] = input[0].split(' ').map(Number)

    let mat = []
    for (let i = 1; i < n; i++) { 
        mat.push(input[i].split(' ').map(Number))
    }
    
    let sum = 0;
    for (let i = 1; i < n - 1; i++){
        for (let j = 1; j < m - 1; j++){
            sum+=mat[i][j]
        }
    }
    console.log(sum)
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`4 4
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16`);
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