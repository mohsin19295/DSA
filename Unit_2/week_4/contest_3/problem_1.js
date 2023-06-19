/*
? Push, Pop, and Top

There is a stack of integers which is currently empty. You are given an integer n and there are n operations that you need to perform on the stack. 
The next n line contains one of the following 3 operations:

1 x: Push x to the top of the stack.
2: Pop an element from the top of the stack. If the stack is empty, do nothing.
3: Print the top element of the stack (if stack is empty, print "Empty!" (without quotes).

*Input Format:
First line of test case contains n.
In the next n lines there can be one of the following three possible inputs:

1 separated by an integer: In that case, you have to push that integer to stack
2: Pop an element from the top of the stack. If the stack is empty, do nothing.
3: Print the top element of the stack (see Output Format).

Constraints:
N<1000

*Output Format:
Whenever the query (out of the n queries) is 3, print top element of stack.

Input: 6
1 15
1 20
2
3
2
3

Output: 15
Empty!
*/

function runProgram(input) {
  input = input.split("\n");
  const n = +input[0];

  let stack = [];
  for (let i = 1; i <= n; i++) {
    let [operation, element] = input[i].split(" ");

    allOperations(stack, operation, element);
  }
}

const allOperations = (stack, operation, element) => {
  if (operation == 1) {
    stack.push(element);
  } else if (stack.length && operation == 2) {
    stack.pop();
  } else if (operation == 3) {
    if (stack.length) {
      console.log(stack[stack.length - 1]);
    } else {
      console.log("Empty!");
    }
  }
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`6
1 15
1 20
2
3
2
3`);
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
