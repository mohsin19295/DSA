/*
? Subarray and Sum

Given an array of integers of length n and a positive integer K, the task is to find the count of the longest possible subarrays with the sum of its elements not divisible by K.

*Input Format:
First line contains n and k separated by space. Second line contains strings of length n.

Constraints
1 <= n <=10^6
1 <= k <= 100

*Output Format:
Print count of sub arrays.

Input: 4 3
2 3 4 6

Output: 1
*/

function runProgram(input) {
  input = input.split("\n");
  const [n, k] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);

  let maxSize = maxWindowSize(n, arr, k);

    if (maxSize > 1) { 
        console.log(subArrCount(n, arr, maxSize, k))
    } else {
        console.log(1)
    }

}

function subArrCount(n, arr, maxSize, k) {
    let [count, sum] = [0, 0];

    for (let i = 0; i < maxSize; i++) {
      sum += arr[i];
    }
    if (sum % k !== 0) count++;

    for (let i = maxSize; i < n; i++) {
      sum += arr[i];
      sum -= arr[i - maxSize];
      if (sum % k !== 0) count++;
    }

    return count;
  }

const maxWindowSize = (n, arr, k) => {
  let [left, right, sum] = [-1, 0, 0];

  for (let i = 0; i < n; i++) {
    if (arr[i] % k !== 0) {
      if (left == -1) {
        left = i;
      }
      right = i; // it gives the last element which is not divisible by k
    }
    sum += arr[i];
  }

  if (sum % k !== 0) return 1;
  if (left == -1) return 0;
  left = left + 1;
  right = arr.length - right;
  let maxWindowSize = arr.length - Math.min(left, right);
  return maxWindowSize;
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`4 3
2 3 4 6`);
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
