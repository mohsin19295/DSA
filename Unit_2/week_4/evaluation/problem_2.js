/*
? Array Equation

You are given a mathematical equation A * (X) + B * (Y) = Z, where X is the sum of even numbers in the array, and Y is the sum of odd numbers in the array, and A = 2 and B = 3 are constants. Solve the given equation.

*Input Format:
The first line of the input contains three integers, the value of N, where N is the size of the array.
The next line contains N space separated integers denoting the integers of the array.

Constraints
1 <= A, B <= 10
1 <= N <= 100
1 <= A[i] <= 100

*Output Format:
Print a single integer, which denotes the value of the equation, based on the values given in the input.

Input: 5
1 2 3 4 5
Output: 39
*/

function runProgram(input) {
  input = input.split("\n");
  const n = +input[0];
  let arr = input[1].split(" ").map(Number);

  let A = 2,
    B = 3,
    X = (Y = 0);

  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 == 0) X += arr[i];
    else Y += arr[i];
  }

  console.log(A * X + B * Y);
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`5
1 2 3 4 5`);
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
