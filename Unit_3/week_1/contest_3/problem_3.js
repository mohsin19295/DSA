/*
? People in Queue

You have to make a Queue of people of size K which can process two type of request:

Type 1: A person with identity X will enter the queue, if the person can enter the queue output the number X else output -1 in a new line.
Type 2: In this type of query you need to process the person who is at the front of queue, if no person is present in the queue output -1 else output the identity of the number.

The Queries will be of the form :
1X - Type 1 Query which means this person with identity X is trying to enter the queue
2 - Type 2 Query which means you need to process the person in front of the queue

A person cannot enter a queue if the queue is full, also the front person is removed after being processed (if any)
Note: Type 1 Query is followed by an integer X which denotes identity of the person. See Hint for better explanation.

*Input Format:
The First line of input will contain K, Q, denoting size of queue and the number of queries
The next Q lines will contain the Q queries.

*Constraints:
1 ≤= K,Q <= 10^5
1<= X <= 10^6

*Output Format:
For each query output the result in a new line.

Input:2 6
1 1
1 2
1 3
2
2
2

Output:1
2
-1
1
2
-1

*HINT:
K = 2, Q=6
Size of Queue = 2 and Queries = 6
Query 1: 1 1 which means person with identity 1 is trying to enter the Queue, also the size of queue is 2 and it has space left so we allow 1 to enter and output it's identity
Query 2: 1 2 which means person with identity 2 is trying to enter the Queue, it enters as well
Query 3: 1 3, which means person with identity 3 is trying to enter the queue but the queue is full , so we output -1

Now for Query of type 2 if something is present in front of queue then we process it and output it's identity, else we output -1
Query 4: 2, In front of queue we have 1, so it will be processed and removed from queue, so we output 1
Query 5: 2, In front of queue we have 2, so it will be processed and removed from queue, so we output 2
Query 6: 2, Queue is empty, so we cannot process anything then output will be -1
*/

function runProgram(input) {
  input = input.split("\n");
  const [K, Q] = input[0].split(" ").map(Number);

  let queue = [];
  for (let i = 1; i <= Q; i++) {
    const [query, person] = input[i].split(" ");

    if (query == 1) {
      if (queue.length < K) {
        queue.push(person);
        console.log(person);
      } else {
        console.log("-1");
      }
    } else if (query == 2) {
      if (queue.length > 0) {
        console.log(queue[0]);
        queue.shift();
      } else {
        console.log("-1");
      }
    }
  }
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`2 6
1 1
1 2
1 3
2
2
2`);
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
