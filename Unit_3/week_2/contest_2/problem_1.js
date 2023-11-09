/*
? Length and Recursion

Given a string, S. Find the length of the string using recursion.
Note: You are not allowed to use the length built-in property.

*Input Format:
The single line consists of string S

*Constraints:
1<= S length <= 200

*Output Format:
Print length of the given string S.
*/

function runProgram(input) {
  const str = input;

  console.log(lengthOfString(str, 0));
}

const lengthOfString = (str, ind) => {
  if (ind === str.length - 1) return ind + 1;

  return lengthOfString(str, ind + 1);
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`masaischool`);
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
