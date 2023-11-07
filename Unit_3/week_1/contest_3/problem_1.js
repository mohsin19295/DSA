/*
? List and Queue

You just need to implement a list using queue data structure.

*Input Format:
The first line contains the number of operations (t).
Next t lines contains commands for the list.
Eg- Push 3 means add 3 in the list
Pop means to remove the last element of the list and print it on the screen
Note-If the list is empty print- 'Empty' (Without the quotes)

t <= 500000

*Output Format:
Print the last element as a single integer on the screen.

Input: 3
Push 4
Push 5
Pop

Output: 5
*/

function runProgram(input) {
  input = input.split("\n");
  const n = +input[0];
  let queue = [];

  for (let i = 1; i <= n; i++) {
    const [operation, value] = input[i].split(" ");

    if (operation === "Push") {
      queue.push(value);
    } else {
      if (queue.length === 0) {
        console.log("Empty");
      } else {
        console.log(queue.pop());
      }
    }
  }
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`3
Push 4
Push 5
Pop`);
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
