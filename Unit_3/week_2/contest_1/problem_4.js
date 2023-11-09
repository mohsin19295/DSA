/*
? Number Of Problems

Sandhya is running up a staircase with N steps, and can hop(jump) either 1 step, 2 steps or 3 steps at a time. You have to count, how many possible ways Sandhya can run up to the stairs.

*Input Format:
Input contains integer N that is number of steps

*Constraints:
N<= 30

*Output Format:
Output for each integer N the no of possible ways w.

Input: 4
Output: 7
*/

function runProgram(input) {
  const n = +input[0];

  console.log(numberOfStairs(n));
}

const numberOfStairs = (n) => {
  if (n < 0) return 0;
  if (n === 0) return 1;

  return numberOfStairs(n - 1) + numberOfStairs(n - 2) + numberOfStairs(n - 3);
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`4`);
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
