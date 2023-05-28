/*
? Is it Happy?

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this processends in 1 are happy numbers. 

Return True if n is a happy number, and False if not.

*Input Format:
1<=T<=1000
next t lines consist of an integer N
1<=N<=19

*Output Format:
true if it is happy else false
! Refer the figure for better understanding the output (problem_4.png)

Input: 3
19
2
312082396

Output: true
false
true
*/

function runProgram(input) {
  input = input.split("\n");
  const test = +input[0];

  for (let i = 1; i <= test; i++) {
    let n = +input[i];

    const visited = new Set();

    while (n !== 1 && !visited.has(n)) {
      visited.add(n);
      n = squareNumber(n);
    }
    console.log(n === 1);
  }
}

function squareNumber(n) {
  while (n > 0) {
    n = n
      .toString()
      .split("")
      .map(Number)
      .map((e) => e ** 2)
      .reduce((a, c) => a + c, 0);
    return n;
  }
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`3
19
2
312082396`);
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
