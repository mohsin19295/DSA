/*
? Buy Ticket

There is a long waiting line of integers waiting for their turn to buy ticket for a cricket match.
There are N operations that can be performed on this line. The operations are of following type:

E x: Integer x enters the queue (For such operation, print the new length of the queue.)
D: The integer at front buys ticket and leaves the queue (For such operations, print the element that left the queue and the new size of the queue separated by space. If there is no element in the queue then print -1 in place of deleted element.)


*Input Format:
First line consists of a single integer denoting N
Each of the following N lines contain one of the operation as described above.

Constraints:
1<=N<=100

*Output Format:
For each enqueue operation print the new size of the queue.
And for each dequeue operation print two integers, deleted element (-1, if iS queue is empty) and the new size of the queue.

Input: 5
E 2
D
D
E 3
D
Output: 1
2 0
-1 0
1
3 0
*/

function runProgram(input) {
  input = input.split("\n");
  const n = +input[0];
  for (let i = 1; i <= n; i++) {
    let [operation, value] = input[i].split(" ");
    allOperations(operation, value);
  }
}

let queue = [];
const allOperations = (operation, value) => {
  if (operation == "E") {
    queue.push(value);
    console.log(queue.length);
  }
  if (operation == "D") {
    if (queue.length) {
        let remove = queue.shift();
        console.log(`${remove} ${queue.length}`);
    } else {
        console.log(`-1 0`);
    }
}
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`10
D
D
E 51
E 64
E 44
D
E 54
E 74
D
E 47`);
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
