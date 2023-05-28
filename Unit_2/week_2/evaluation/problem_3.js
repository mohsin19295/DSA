/*
? Binary Matrix

You are given a binary matrix of size N × M. A binary matrix is one which consists of only 1's and 0's. You have to flip the matrix. Flipping the matrix means converting all 1's to 0's and all 0's to 1's.

*Input Format:
The first line of the input contains N and M, the dimensions of the matrix.
The next N lines contain M space separated integers denoting the values of the matrix.

*Output Format:
Print the matrix after flipping it, as shown in the sample test case.

Input: 3 2
1 0
0 1
1 1

Output: 0 1
1 0
0 0
*/

function runProgram(input) {
  input = input.split("\n");
  const [n, m] = input[0].split(" ").map(Number);

  let mat = [];
  for (let i = 1; i <= n; i++) {
    mat.push(input[i].split(" "));
  }

  for (let i = 0; i < n; i++) {
    console.log(mat[i].map((e) => (e == 1 ? 0 : 1)).join(" "));
  }
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`3 2
1 0
0 1
1 1`);
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
