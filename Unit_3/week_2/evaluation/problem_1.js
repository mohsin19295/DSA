/*
? Count Digits

You are given an array, stored in a variable with the size arr
The size of the array is stored in a variable with the name n
You have to find the count of O's ,1's and 2's
For example, consider the array as arr = [0 1 0 2 1 2 0 1 2 0], and the value stored in n = 10
Then, the required output will be 4 3 3 , as no. of O's are 4, no. of 1's are 3, and no. of 2's are 3.

*Input Format:
The first line of the input contains the value stored in N, the size of the array
The next line contains N space separated numbers denoting the elements of the array

*Output Format:
Print the count of O's, I's and 2's separated with space as shown in the problem statement.

Input:10
0 1 0 1 1 1 0 2 2 0 

Output: 4 4 2
*/

function runProgram(input) {
  input = input.split("\n");
  const n = +input[0];
  const arr = input[1].split(" ").map(Number);

  let [zeros, ones, twos] = [0, 0, 0];
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) zeros++;
    if (arr[i] === 1) ones++;
    if (arr[i] === 2) twos++;
  }
  console.log(zeros, ones, twos);
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`10
0 1 0 1 1 1 0 2 2 0 `);
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
