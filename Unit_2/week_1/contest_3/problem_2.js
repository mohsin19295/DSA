/*
? 2D Array and Sum

You are given an array matrix of n rows and m columns which contains positive integers and sums.

You need to find occurrences of the sum of three consecutive numbers (i.ex,y, and z) whose sum is equal to s appear horizontally, vertically and diagonally in the given matrix.

*Input Format:
First line: Three integers n, m and s, where n denotes the number of rows, m denotes the number of columns in the matrix and s is the sum.
Next n lines: Each line contains m characters which contain positive integers only.

*Output:
Print the number of times the sums appear in the matrix.

! Refer the following figure for better understanding (problem_2.png)

Input:3 3 6
3 2 1
2 2 2
1 5 1

Output: 4
*/

function runProgram(input) {
  input = input.split('\n')
    const [n, m, s] = input[0].split(' ').map(Number)
    
    let matrix = []
    for (let i = 1; i <= n; i++){
        matrix.push(input[i].split(' ').map(Number))
    }
    const consecutive = 3;
    let count = 0

    for (let i = 0; i < n; i++){
        for (let j = 0; j < m; j++){
            if (n - i >= consecutive) {
                if (matrix[i][j] + matrix[i+1][j]+ matrix[i+2][j]=== s) count++
            }
            if (m - j >= consecutive) { 
                if(matrix[i][j] + matrix[i][j+1]+ matrix[i][j+2] === s) count++
            }
            if (m - j >= consecutive && n - i >= consecutive) { 
                if (matrix[i][j] + matrix[i+1][j+1] + matrix[i+2][j+2] ===s) count++
            }
            if (i >= consecutive -1) {
                if (matrix[i][j] + matrix[i-1][j+1] + matrix[i-2][j+2] ===s) count++
            }
        }
    }
    console.log(count)
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`3 3 6
3 2 1
2 2 2
1 5 1`);
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