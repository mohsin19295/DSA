/*
? Power function - Recursive

Given two integers a and b, we need to find the value of a^b recursively.
Expected Time Complexity - O(logb).

*Input Format:
The first line of the input contains two integers a and b (1 ≤ a ≤ 10) and (0 ≤ b ≤ 9).

*Output Format:
For each test case, print the answer: The value of a^b.

Input: 2 4
Output: 16
*/

function runProgram(input) {
  const [a, b] = input.split(" ").map(Number);
  console.log(powerOfRecursive(a, b));
}

const powerOfRecursive = (a, b) => {
  if (b === 0) return 1;
  return a * powerOfRecursive(a, b - 1);
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`2 4`);
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
