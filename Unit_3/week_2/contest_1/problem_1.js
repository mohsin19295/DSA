/*
? Fibonacci-Recursion

In mathematics, the Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is
F (0) = 0, F (1) = 1
and
F (n) = F (n - 1) + F (n - 2),
for n > 1.
Your task is to write a program that calculates n-th fibonacci numbers when you are provided with n


*Input Format:
First line of input contains n

*Constraints:
n<35

*Output Format:
Output the n-th fibonacci number
*/

function runProgram(input) {
    const n = +input;
    console.log(nthFibonacci(n))
}

const nthFibonacci = (n) => {
  if (n === 0 || n === 1) return n;
  return nthFibonacci(n - 1) + nthFibonacci(n - 2);
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`8`);
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
