/*
? List and Queue

You need to implement a queue data structure with a list using plain list methods.

*Input Format:
The first line contains the number of operations (t).
Next t lines contains commands for the queue.
Eg- E 3 means add 3 in the queue
D means to remove the front element of the queue and print it on the screen
Note-If the queue is empty print- 'Empty' (Without the quotes)

*Output Format:
Print the front element as a single integer on the screen.

Input: 4
E 2
E 3
D
D
Output: 2
3
*/

function runProgram(input) {
  input = input.split("\n");
  const n = +input[0];
  let queue = [];
  for (let i = 1; i <= n; i++) {
    let [q, v] = input[i].split(" ");
    if (q == "E") {
      queue.push(v);
    } else {
      queue.length === 0 ? console.log("Empty") : console.log(queue.shift());
    }
  }
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`20
D
E 74
E 24
E 68
E 100
E 90
E 88
E 10
E 9
E 65
E 65
E 24
E 74
D
E 68
E 10
E 65
D
E 74
E 71`);
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
