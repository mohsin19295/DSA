/*
? Two sum

Given a sorted array of integers, return indices of two numbers such that they add up to a target value. Print -1 -1 if not found.

*Input Format:
First line contains T, number of test cases
Second line contains N and B where N is the size of the array and B is the target sum

1 <= T <= 10
2 <= N <= 1000, 2 <= B <= 3e5
1 <= Ai <= 15

It is guaranteed that sum of N over all test cases is at most 1000.


*Output Format:
Two values a, b i.e. indexes of any two elements that are found else -1-1 if not found. Indexing is 0 based indexing. If multiple solutions exist, output the one with the lowest values of a and b.

Note - the answer should print the smaller index first followed by the larger index. The smallest such index pair should be printed.

If we have 2 sorted pairs [a1, b1] and [a2, b2], the first pair is said to be smaller than the second one if a1 < a2 or (al == a2 and b1 < b2)


Input: 3
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 49

Output: 0 1
3 4
-1 -1
*/

function runProgram(input) {
  input = input.split("\n");
  const test = +input[0];
  let line = 1;

  for (let i = 1; i <= test; i++) {
    let [n, b] = input[line++].split(" ").map(Number);
    let arr = input[line++].split(" ").map(Number);
    console.log(twoSum(n, b, arr).join(" "));
  }
}

const twoSum = (n, b, arr) => {
  let [left, right] = [0, n - 1];
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == b) return [left, right];
    if (sum < b) left++;
    if (sum > b) right--;
  }
  return [-1, -1];
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`3
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 49`);
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
