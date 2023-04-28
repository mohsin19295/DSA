/*
? Go in Zig-Zag

Given a matrix with N rows and M columns. Print the matrix elements starting from the top right corner to bottom left and follow a zig-zag pattern.

For example the given matrix is: 
1 4 7
2 5 8
3 6 9

Then output will be : 7 4 1 2 5 8 9 6 3
*/

function runProgram(input) {
  input = input.split("\n")
  const [n, m] = input[0].split(' ').map(Number)

  let mat = []
    for (let i = 1; i <= n; i++){
        mat.push(input[i].split(' ').map(Number))
    }
    console.log(mat)

    let arr = []
    for (let i = 0; i < n; i++){
        if (i % 2 === 0) {
            for (let j = m - 1; j >= 0; j--){
                arr.push(mat[i][j])
            }
        } else {
            for (let j = 0; j < m; j++){
                arr.push(mat[i][j])
            }
        }
    }
    console.log(arr.join(' '))
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`4 5
4 7 1 1 7
8 9 9 6 1
6 4 9 5 1
7 7 4 7 7`);
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