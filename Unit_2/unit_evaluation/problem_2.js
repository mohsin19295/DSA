/*
? SNE Modified

Andy and Mark are playing a game of arrays. The game involves finding the smallest neighbor element to the left side for each element in the array. Andy counts the number of elements which do not have a smaller neighbor element to the left side. Help Andy find the count.

*Input Format:
First line contains an integer N denoting the number of elements in the array (not necessarily distinct).
N Second line contains N space separated integers denoting the elements of the array.

Constraints:
N <= 100000

*Output Format:
Print a single integer denoting the number of elements which do not have a smaller neighbor element to the left side

Input: 8
39 27 11 4 24 32 32 1
Output: 5
*/

function runProgram(input) {
  input = input.split("\n");
  const n = +input[0];
  let arr = input[1].split(" ").map(Number);

  console.log(countSmallerNeighbors(arr, n));
}

const countSmallerNeighbors = (arr, n) => {
  let stack = [],
    res = null,
    count = 0;
  for (let i = 0; i < n; i++) {
    while (stack.length && stack[stack.length - 1] >= arr[i]) stack.pop();

    res = stack.length ? stack[stack.length - 1] : count++;
    stack.push(arr[i]);
  }
  return count;
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`8
39 27 11 4 24 32 32 1`);
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
