/*
? Sum With Recursion Again

You are given an array and you have to find the sum of the absolute difference between consecutive elements of the array.

For instance, if the array is 3,5,6,1,8
Absolute of (3-5) = 2
Absolute of (5-6) = 1
Absolute of (6-1) = 5
Absolute of (1-8) = 7
Sum of all absolute = 15

The only constraint is that you cannot write an iterative code. You have to write a recursive code only

*Input Format:
There are several test cases. Each test case starts with t which is the total number of test cases present
Each test case has 2 lines:
Line 1 : Number of integers present in the array
Line 2 : The integers present in the array

*Constraints:
n <= 10000

*Output Format:
Output one number(the sum) per test case

Input: 2
3
1 5 2
5
3 5 6 1 8

Output: 7
15
*/

function runProgram(input) {
  input = input.split("\n");
  const test = +input[0];
  let line = 1;

  for (let i = 1; i <= test; i++) {
    const n = +input[line++];
    const arr = input[line++].split(" ").map(Number);

    console.log(sumOfElements(arr, 0, 0));
  }
}

const sumOfElements = (arr, ind, sum) => {
  // If there is only one element, it means there is no consicutive element so return 0
  if (ind === arr.length - 1) return sum;

  const diff = Math.abs(arr[ind] - arr[ind + 1]);

  const absSum = diff + sum;

  return sumOfElements(arr, ind + 1, absSum);
};

if (process.env.USERNAME === "ubuntu") {
  runProgram(`2
3
1 5 2
5
3 5 6 1 8`);
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
