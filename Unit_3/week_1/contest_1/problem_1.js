/*
? New Year Celebration

New Year Celebration is coming near and DG is hosting a party for it, To make sure the party goes well she wants order in the party. There are two counters one of ice-cream and other for Cold-drinks.
On ice-cream counter the line was formed in form of Queue and on drinks counter the line was formed in order of Stacks.

She gave the management of the party to NV, NV made a plan to ask the manager following types of query.
Query types:
1 X : Number X enter the Queue.
2 X: Number X enter the Stack.
3: Output whoever is in-front of the queue.
4: Output whoever is on-top of the stack
5: Which person is in-front of queue get out of queue and enters the stack
Note: If the Queue or Stack is empty then output "-1"

*Input Format :
The first line of input will contain Q, which is the number queries.
The next a lines wil ifferent queries based upon query types given.

*Constraints :
1<=0<=10^5
1<=X<=10^9

*Output Format :
Output will consist of integers based upon Query types.If Query type is 3 then Output whoever is in-front of the queue, if Query type is 4 Output w
hoever is on-top of the stack.

Input: 7
1 4
2 3
1 2
3
4
5
4

Output: 4
3
4
*/

function runProgram(input) {
  input = input.split("\n");
  const test = +input[0];

  let [queue, stack] = [[], []];
  for (let i = 1; i <= test; i++) {
    let [q, el] = input[i].split(" ");

    if (q == 1) {
      queue.push(el);
    } else if (q == 2) {
      stack.push(el);
    } else if (q == 3) {
      if (queue.length === 0) {
        console.log("-1");
      } else {
        console.log(queue[0]);
      }
    } else if (q == 4) {
      if (stack.length == 0) {
        console.log("-1");
      } else {
        console.log(stack[stack.length - 1]);
      }
    } else if (q == 5) {
      stack.push(queue[0]);
      queue.shift();
    }
  }
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`10
1 99999
2 10000
3
4
1 300
4
2 444
5
4
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
