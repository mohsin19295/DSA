/*
? Again a classical problem

A bracket is considered to be any one of the following characters: (,), {,} , [,or ].
Two brackets are considered to be a matched pair if the opening bracket (i.e., (, [, or { occurs to the left of a closing bracket (i.e. ), ], or }) of the exact same type. There are three types of matched pairs of brackets: []. {}, and ().

A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[)} is not balanced because the contents in between { and } are not balanced. The pair of square brackets enclose a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

By this logic, we say a sequence of brackets is balanced if the following conditions are met:
It contains no unmatched brackets. The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.

Given a string, you have to comment if it is balanced or not

*Input Format:
First line of input contains t which is the number of test cases present in the question.
Each test case has a string

Constraints
t < 100
length of string < 100

*Output Format:
Print "balanced" if the string is balanced, otherwise print "not balanced" in case the string is not balanced

Input: 3
{([])}
()
([]

Output: balanced
balanced
not balanced
*/

function runProgram(input) {
  input = input.split("\n");
  const n = +input[0];

  for (let i = 1; i <= n; i++) {
    let str = input[i];
    console.log(checkBalanced(str, n));
  }
}

const checkBalanced = (str) => {
  let stack = [];
  let flag = true;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "{" || str[i] == "(" || str[i] == "[") {
      stack.push(str[i]);
    } else {
      let top = stack[stack.length - 1];
      if (
        (str[i] == "]" && top != "[") ||
        (str[i] == "}" && top != "{") ||
        (str[i] == ")" && top != "(")
      ) {
        flag = false;
      }
      stack.pop();
    }
  }
  if (!flag) return "not balanced";
  if (stack.length === 0) return "balanced";
  return "not balanced";
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`3
{([])}
()
([]`);
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
