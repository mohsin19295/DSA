/*
? Nick and Hacks

Tom and Nick are good friends. Once Tom asked Nick exactly N rupees, but Nick has only 1 rupe in his bank account. Nick wants to help his friend so he wrote two hacks First hack can multiply the amount of money he owns by 10, while the second can multiply it by 20. These hacks can be used any number of times. Can Nick help Tom with his hacks?

*Input Format:
The first line of the input contains a single integer T denoting the number of test cases.
The description of T test cases follows. The first and only line of each test case contains a single integer N.

*Constraints:
1 <= T <= 100
1<=N <= 10^12

*Output Format:
For each test case, print a single line containing the string "Yes" if you can make exactly N rupees or "No" otherwise.

Input: 5
1
2
10
25
200

Output: Yes
No
Yes
No
Yes
*/

function runProgram(input) {
  input = input.split("\n");
  const test = +input[0];

  for (let i = 1; i <= test; i++) {
    console.log(applyHack(+input[i]) ? "Yes" : "No");
  }
}

const applyHack = (num, bal = 1) => {
  if (num === bal) return true;
  if (bal > num) return false;

  return applyHack(num, bal * 10) || applyHack(num, bal * 20);
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`5
1
2
10
25
200`);
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