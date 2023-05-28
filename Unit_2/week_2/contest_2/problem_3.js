/*
? Equilibrium Element

Given an array A of N positive numbers. The task is to find the position where equilibrium first occurs in the array. Equilibrium position in an array is a position such that the sum of elements before it is equal to the sum of elements after it.

*Input Format:
First line contains an integer N denoting the size of the array.
Then in the next line are N space separated values of the array A.

*Output Format:
In a new line print the position at which the elements are at equilibrium if no equilibrium point exists print -1.
*/

function runProgram(input) {
  input = input.split("\n");
  const n = +input[0];
  let arr = input[1].split(" ").map(Number);

  console.log(checkEquilibriumPoint(n, arr));

  function checkEquilibriumPoint(n, arr) {
    let position = arr[1];
    let sum = 0;
    let initialSum = arr[0];

    for (let i = 2; i < n; i++) {
      sum += arr[i];
    }

    for (let i = 2; i < n; i++) {
      initialSum += position;
      sum -= arr[i];
      if (initialSum == sum) return position;
     return "-1";
    }
  }
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`5
3 3 5 5 1`);
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
