/*
? War Of Minions

Minions are of 26 types, from 'a' to 'z. If two Minions of same type finds themselves besides each other, they will kill each other.
You are given a string of Minions. You need to find the final surviving string of Minions, after all the killings. i.e Further No Minion will kill other Minion.
If no Minion survived a after all the fighting, print "-1".

*Input Format:
First Line contains 'N', size of strings of Minions.
Second Line contains S, string of Minions.

*Constraints:
1<= N <= 10^6

*Output Format:
Single line with stable Minion string or "-1"

Input: 5
aabbc
Output:c

Input: 12
abbabaadcbbc
Output:bd

Input: 2
aa
Output:-1
*/

function runProgram(input) {
  input = input.split("\n");
  const n = +input[0];
  const str = input[1];
  let stack = [];

  for (let i = 0; i < n; i++) {
    if (stack[stack.length - 1] === str[i]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }

  console.log(stack.join("") || "-1");
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`12
abbabaadcbbc`);
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
