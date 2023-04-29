/*
? Nobita and Change 2

Nobita & Doraemon both are given a number N (length of the string) and a string, the string contain both Lowercase and Uppercase English Alphabet characters, convert all lowercase characters into Uppercase then output the entire string.

e.g. "abAbC" should be changed to "ABABC"

*Input Format:
First line of input contains the number N, denoting the length of the string.
Second line of input contains the string.

*Output Format:
Output the string after changing the lowercase characters into uppercase.

Input: 5
abAbC

Output: ABABC
*/

function runProgram(input) {
  input = input.split("\n");
  const n = +input[0];
  let str = input[1];

  let res = "";

  for (let i = 0; i < n; i++) {
    if (str[i] == str[i].toLowerCase()) {
      res += str[i].toUpperCase();
    } else {
      res += str[i];
    }
  }
  console.log(res);
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`5
abAbC`);
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
