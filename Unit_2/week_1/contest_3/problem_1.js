/*
? 2D Array and Phrase

You are given an array matrix of n rows and m columns which contains lower case English letters.
How many times does the phrase "saba" appear horizontally, vertically, and diagonally in the grid?

*Input Format:

First line: Two integer n and m, where n denotes the number of rows and m denotes the number of columns in the grid.
Next n lines: Each line contains m characters which contains lower-case English letters only.

*Output Format:

Print the number of times the word "saba" appears in the grid.

! Check image to understand

Input:5 5
safer
amjad
babol
aaron
songs

Output: 2
*/

function runProgram(input) {
  input = input.split("\n");
  const [n, m] = input[0].split(" ");

  let matrix = [];
  for (let i = 1; i <= n; i++) {
    matrix.push(input[i].split(""));
  }

  const target = "saba";
  const range = target.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // Horizontal
      if (m - j >= range) {
        if (
          matrix[i][j] +
            matrix[i][j + 1] +
            matrix[i][j + 2] +
            matrix[i][j + 3] ===
          target
        )
          count++;
      }
      // Vertical
      if (n - i >= range) {
        if (
          matrix[i][j] +
            matrix[i + 1][j] +
            matrix[i + 2][j] +
            matrix[i + 3][j] ===
          target
        )
          count++;
      }
      // Left to Right & Top to Bottom
      if (n - i >= range && m - j >= range) {
        if (
          matrix[i][j] +
            matrix[i + 1][j + 1] +
            matrix[i + 2][j + 2] +
            matrix[i + 3][j + 3] ===
          target
        )
          count++;
        console.log(
          matrix[i][j] +
            matrix[i + 1][j + 1] +
            matrix[i + 2][j + 2] +
            matrix[i + 3][j + 3]
        );
      }
      // Left to Right & Bottom to Top
      if (i >= range - 1) {
        if (
          matrix[i][j] +
            matrix[i - 1][j + 1] +
            matrix[i - 2][j + 2] +
            matrix[i - 3][j + 3] ===
          target
        )
          count++;
      }
    }
  }
  console.log(count);
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`5 5
safer
amjad
babol
aaron
songs`);
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
