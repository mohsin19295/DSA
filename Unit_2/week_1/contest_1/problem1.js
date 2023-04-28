/*
? Traverse a 2D Array

You are given a 2D array(matrix), of N rows and M columns.

You need to print elements of the array from bottom to top and left to right.

For example the given matrix is: 
1 4 7
2 5 8
3 6 9

Then output will be : 3 2 1 6 5 4 9 8 7


Input: 4 3
1 8 9
2 7 10
3 6 11
4 5 12
Output: 4 3 2 1 5 6 7 8 12 11 10 9
*/

function runProgram(input) {
  input = input.split('\n')
  const [n, m] = input[0].split(' ').map(Number)
  let mat = []
  for (let i = 1; i <= n; i++) { 
    mat.push(input[i].split(' ').map(Number))
  }
  
  let arr = []
  for (let j = 0; j < m; j++) { 
      for (let i = n-1; i >= 0; i--){
      arr.push(mat[i][j])
    }
  }
  console.log(arr.join(' '))
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`4 3
1 8 9
2 7 10
3 6 11
4 5 12`);
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