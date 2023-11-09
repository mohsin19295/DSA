/*
? Easy But Recursion

This is an easy question. You just have to find the sum of an array given the elements of the array.
The only constraint is that you have to write a recursive code

*Input Format:
There are several test cases within a test case.
First line contains t which is the number of test cases
First line of each test case contains n which is the number of integers
Second line of each test case contains n space separated integers

*Constraints:
n <= 100000
arr[i] <= 10

*Output Format:
Output t lines where each line contains sum of all the elements in that test case

Input:3
5
6 3 8 2 -4
5
-10 -7 10 2 -2
5
-4 -5 6 -3 9

Output: 15
-7
3
*/

function runProgram(input) {
  input = input.split("\n");
  const test = +input[0];
  let line = 1;

  for (let i = 0; i < test; i++) {
    const n = +input[line++];
    const arr = input[line++].split(" ").map(Number);

    console.log(checkSum(arr, n, 0, 0));
  }
}

const checkSum = (arr, n, ind, sum) => {
  if (ind === n) return sum;

  sum += arr[ind];
  return checkSum(arr, n, ind + 1, sum);
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`3
5
6 3 8 2 -4
5
-10 -7 10 2 -2
5
-4 -5 6 -3 9`);
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
