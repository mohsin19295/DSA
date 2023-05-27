/*
? Maximum Occurring Element

Given an array A of N integers. Your task is to print that integer which presents maximum number of times in the given array.
If there are two elements present the maximum number of times, print the one which comes first in the array.

*Input Format:
First line contains N
The second line contains N integers separated by spaces.

*Output Format:
Print one integer, the one which is present the maximum number of times.

Input:5
0 2 0 6 9

Output: 0
*/

function runProgram(input) {
  input = input.split("\n");
  const n = +input[0];
  let arr = input[1].split(" ");

  let data = {};
  for (let i = 0; i < n; i++) {
    let k = arr[i];
    if (data[k] === undefined) {
      data[k] = 1;
    } else {
      data[k] += 1;
    }
  }

  const max = Math.max(...Object.values(data));
  console.log(getMaxValue(data, max));

  function getMaxValue(data, max) {
    for (let key in data) {
      if (data[key] === max) {
        return key;
      }
    }
  }
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`5
0 2 0 2 9`);
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