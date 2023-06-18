/*
? Selection Sort Problem

You are given an array of N unsorted numbers. Your task is to write SELECTION SORT such that numbers present in the array gets sorted.

USING ANY OTHER ALGORITHM OR USING IN BUILT SORT FUNCTION WOULD LEAD TO YOUR DISQUALIFICATION

*Input Format:
First line of input contains N
Second line of input contains N numbers

Constraints:
N < 500

*Output Format:
Output the numbers given after sorting it in increasnig order


Input: 5
3 5 0 9 8
Output: 0 3 5 8 9
*/

function runProgram(input) {
  input = input.split("\n");
  const n = +input[0];
  let arr = input[1].split(" ").map(Number);

  let i = 0;
  while (i < n) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    [arr[min], arr[i]] = [arr[i], arr[min]]
    i++;
  }

  console.log(arr);
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`4
-4 -3 -5 -19`);
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
