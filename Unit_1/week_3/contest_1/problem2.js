/*
? Traverse a 2d array - 3

You are given a 2D array( matrix ), of N rows and M columns.

You need to print elements of the array from top to bottom and right to left.

For example the given matrix is: 
1 4 7
2 5 8
3 6 9

Then output will be : 7 8 9 4 5 6 1 2 3


Input: 4 3
1 8 9
2 7 10
3 6 11
4 5 12
Output: 9 10 11 12 8 7 6 5 1 2 3 4
*/

function runProgram(input) {
  input = input.split("\n");
  const [n, m] = input[0].split(" ").map(Number);

  let mat = [];
  for (let i = 1; i <= n; i++) {
    mat.push(input[i].split(' ').map(Number));
  }
  
    let arr = []
    for (let i = m - 1; i >= 0; i--){
        for (let j = 0; j < n; j++){
            arr.push(mat[j][i])
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
