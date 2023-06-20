/*
? Next greater Element

Given an array of N elements, find the next greater element for each element in the array, print -1 if it does not exits. Refer to the sample I/O for better understanding

*Input Format:
The first line contains T, the number of test cases.
The first line of each test case contains N, the number of elements in the array. The next line contains N space separated integers denoting the elements of the array

Constraints
1 <= T <= 10
1 <= N <= 10^5
0 <= Afil <= 10000

*Output Format:
For each test case, print N space separated integers, denoting the next greater element for each element, on a new line.

Input: 1
4
1 3 2 4

Output: 3 4 4 -1
*/

function runProgram(input) {
  input = input.split("\n");
  const test = +input[0];
  let line = 1;

  for (let i = 1; i <= test; i++) {
    let n = +input[line++];
    let arr = input[line++].split(" ").map(Number);

    console.log(nextGreater(arr, n));
  }
}

const nextGreater = (arr, n) => {
  let stack = [];
  let res = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= arr[i]) stack.pop();

    res[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(arr[i]);
  }
  return res.join(" ");
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`1
4
1 3 2 4`);
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
