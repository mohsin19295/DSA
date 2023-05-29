/*
? Excel Column Number

Given a column title as appear in an Excel sheet, return its corresponding column number.
It is guaranteed that string consists of characters from 'A' - 'Z'.

For example:
A -> 1
B -> 2
C - > 3
Z -> 26
AA -> 27
AB - > 28

*Input Format:
1<=T<=10
1<= ISil <= 10

*Output Format:
output a single integer for all test case, the solution to the problem

Input: 3
A
AB
ZY

Output: 1
28
701
*/

function runProgram(input) {
  input = input.split("\n");
  const test = +input[0];

  for (let i = 1; i <= test; i++) {
    let str = input[i];

    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum = str[i].charCodeAt(0) - 64 + sum * 26;
    }

    console.log(sum);
  }
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`3
A
AB
ZY`);
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
