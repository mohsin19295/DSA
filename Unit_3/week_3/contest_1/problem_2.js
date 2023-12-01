/*
? Reverse Stack using Recursion

You'll be given a stack. You have to reverse the stack without using any inbuilt function or for and while loops. You have to reverse it by recursion only.

*Input Format:
First n lines will contain the stack of length n. You have to stop taking input when you find -1

*Constraints:
n <= 1000
0 <= element of the stack <= 100000

*Output Format:
You have to display the reversed stack

Input:1
2
3
4
-1

Output:4
3
2
1
*/

function runProgram(input) {
  input = input.split('\n')
  const breakingIndex = input.indexOf('-1')
  const actualStack = input.slice(0, breakingIndex).map(Number)

  let reversedStack = insertUsingRecursion([], actualStack)
  for (let i = 0; i < reversedStack.length; i++){
    console.log(reversedStack[i])
  }
}

const insertUsingRecursion = (stack, actualStack) => {
  if (actualStack.length === 0) {
    return stack;
  } else {
    let top = actualStack.pop();
    stack.push(top);
    insertUsingRecursion(stack, actualStack);
  }
  return stack;
}

if (process.env.USERNAME === "ubuntu") {
  runProgram(`1
2
3
4
-1`);
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
