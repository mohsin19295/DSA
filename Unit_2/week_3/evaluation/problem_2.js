/*
? Count chars

You are provided a string S. Your task is to print a string which also contains the number of times that character is repeated. (Read explanation of test case for better understanding)

*Input Format:
First and the only line contains the string S.

Constraints:
Length of S is always lesser than 100

*Output Format: 
Output one string.
Read sample test case and explanation for better understanding.

Input: aaabbbbcc
Output: a3b4c2

*Output Explanation:
In the given string in the first sample test case, character 'a' is repeated 3 times =>a3
Character 'b' is repeated 4 times =>b4
Character 'c' is repeated 2 times =>c2
So, you have to print "a3b4c2" (without quotes).
*/

function runProgram(input) {
  let str = input;
  let [count, res] = [1, ""];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      count++;
    } else {
      res += str[i] + count;
      count = 1;
    }
  }
  console.log(res);
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`aaabbbbcc`);
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
