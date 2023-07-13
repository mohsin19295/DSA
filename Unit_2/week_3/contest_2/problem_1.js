/*
? Take our maximum

Given an array of integers and a number k, find the maximum sum of a subarray of size k.

*Input Format:
First line consists of two integers n and k separated by space
Second line consists of n integers separated by spaces.

Constraints
1 <= n <= 10^7
1 <= k <= 10^6

*Output Format:
Print the maximum sum of a subarray of size k.


Input: 10 3
-1 -1 -2 1 -2 4 1 9 3 9

Output: 21
*/

function runProgram(input) {
  input = input.split('\n')
  const [n, k] = input[0].split(' ').map(Number)

    let arr = input[1].split(' ').map(Number)

    let [sum, max] = [0, 0]
    for (let i = 0; i < k; i++){
        sum+=arr[i]
        if (sum > max) max = sum;
    }

    for (let i = k; i < n; i++){
        sum+=arr[i]
        sum-=arr[i-k]
        if (sum > max) max = sum;
    }

    console.log(max)
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`9 5
-1 -1 -2 1 4 1 9 3 9`);
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