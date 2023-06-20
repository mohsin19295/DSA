/*
? Solve Age of empires

You are playing the popular game of "Age of Empires". You are the king of the empire where you have 2N workers. All workers will be grouped in the association with size 2, so a total of N associations have to be formed. The building speed of the i-th worker is A[i].

To make an association, you pick up 2 workers. Let the minimum building speed between both workers be x, then the association has the resultant building speed x.

You have to print the maximum value possible of the sum of building speeds of N associations if you make the associations optimally.

*Input Format:
First line contains an integer N, representing the number of associations to be made.
Next line contains 2N space separated integers, denoting the building speeds of 2N workers.

Constraints
N <= 50000
A[i] <= 10000

*Output Format:
Print the maximum value possible of the sum of building speeds of all the associations.

Input: 2
1 3 1 2

Output: 3
*/

function runProgram(input) {
  input = input.split("\n");
  const n = +input[0];
  let arr = input[1].split(" ").map(Number);

  let buildingSpeed = arr.sort((a, b) => a - b);
  let max = 0;

  for (let i = 0; i < arr.length; i += 2) {
    max += buildingSpeed[i];
  }
  console.log(max);
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`2
1 3 1 2`);
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
