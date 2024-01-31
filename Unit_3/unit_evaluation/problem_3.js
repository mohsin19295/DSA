/*
? Ways to Zero

Given an integer N. In how many ways you can subtract numbers 1, 2, and, 5 from N such that value of N reduces to 0. (Check sample input for more clarity)

*Input Format:
First line: Single integer denoting the value of T - the number of test cases.
For each test case:
First line: Single integer denoting the value of N.

*Constraints:
1 <= T <= 100
1<= N <= 30

*Output Format:
For each test case, print in a new line, a single integer denoting the required number of ways.

Input: 1
4
Output: 5
*/

function runProgram(input) {
  input = input.split("\n");
  let test = +input[0];
  let line = 1;
  for (let i = 1; i <= test; i++) {
    let n = +input[line++];
    
    console.log(checkWays(n));
  }
}

checkWays = (n) => {
  if (n < 0) return 0;
  if (n === 0) return 1;
  return checkWays(n - 1) + checkWays(n - 2) + checkWays(n - 5);
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`1
4`);
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