/*
? Doctor's Appoinment

You have a terrible toothache, so you went to book an appointment to see your doctor. When you reach there you notice that there are no seats and everyone's standing.

The doctor's assistant is pretty strict, so she doesn't allow anyone inside the cabin until it's his turn. People are standing in a random order so she passes each person to check if he's next, when she finds the one she takes him with her. Meanwhile, nobody is allowed to exchange places, when she comes back she repeats the process from the front of the line. She takes one move to move from one person to another. You have to find the total number of moves she used to completely clear the queue.

Note-when she finds the person and takes him with her during that no move is counted.

*Input Format:
The First Line contains the number (n) of persons in the queue.
The Second line contains n evenly spaced integers which represent the names of people according to the list the assistant has.
The Third line again contains n evenly spaced integers which represent the names of people as they are standing in the queue

*Output Format:
You have to output a single number which is the total number of moves she requires.

Input: 4
1 2 3 4
4 2 3 1

Output: 8

*HINT:
She goes firstly to Mr. "4" (Move-1) and since "1" is the next person in her list she continues forward. Similarly, she passes "2" and "3" (Move-2 and Move-3), then she goes to "1" (Move-4) and since he's next she takes him with her. When she comes back she again starts with "4" (Move-5) and since "2" is the next person she moves forward (Move-6), and so on.
*/


// Will Solve Later

function runProgram(input) {
  input = input.split("\n");
  const n = +input[0];
  let line = 1;

  const actualOrder = input[line++].split(" ");
  const randomOrder = input[line++].split(" ");

  let res = 0;

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = i; j < n; j++) {
      if (randomOrder[i] !== actualOrder[j]) {
        count++;
      }
    }
    res += count;
  }
  console.log(res);
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`4
1 2 3 4
4 1 3 2`);
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
