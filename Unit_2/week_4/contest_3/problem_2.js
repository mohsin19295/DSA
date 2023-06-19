/*
? Reduce String

Given a string of lowercase characters in range asci['a'..'z']. You can perform one operation on this string in which you can select a pair of adjacent lowercase letters that match, and delete them.

For instance, the string 'aab' could be shortened to 'b' in one operation.

Your task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, print "Empty String" (without quotes).

Please note that characters can be deleted only if they form a pair and are same (ie from aaa we can only delete 2 a's and will be left with a single a).

I know there exists a simple implemented Stringentation based solution of this question, but please try to come up with an approach that uses stack data structure to solve the purpose.

*Input Format:
First and the only line contains string

Constraints
Length of string < 1000

*Output Format:
If the final string is empty, print Empty String; otherwise, print the final non-reducible string.

Input: aaabccddd
Output: abd
*/

function runProgram(input) {
  let str = input;
  let stack = [];
  stack.push(str[0]);

  for (let i = 1; i < str.length; i++) {
    let top = stack[stack.length - 1];
    if (top == str[i]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  console.log(stack.length ? stack.join("") : "Empty String");
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`aaabccddd`);
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
