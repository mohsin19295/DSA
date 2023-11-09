/*
? Factrial-Recursion

The factorial of a positive integer N is the product of all positive integers less than or equal to n:
Given a number N your task is to write a program that calculates factorial of N

*Input Format:
First and the only line contains N

*Constraints:
N<15

*Output Format:
Output the factorial value of N
*/

function runProgram(input) {
  const n = +input;
  console.log(factorialOfN(n));
}

const factorialOfN = (n) => {
  if (n === 1) return 1;
  return factorialOfN(n - 1) * n;
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`5`);
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
