/*
? Generate Permutations

Given a collection of numbers, return all possible permutations.
NOTE: No two entries in the permutation sequence should be the same.
For the purpose of this problem, assume that all the numbers in the collection are unique.
USING BUILT-IN LIBRARY FUNCTION TO PERMUTE WILL LEAD TO DISQUALIFICATION

*Input Format:
The first line of input contain an integer n-denoting the size of array
The next line contain n distinct integers, A[1],A[2]…A[N]

*Constraints:
1<= n <=6

*Output Format:
Print the permutations of numbers in new line seperated by space, also make sure the permutations are printed in sorted order that is "1 2 3" must come before "2 3 1". Print without quotes. See sample test case for better understanding.

Input: 3
1 2 3

Output: 1 2 3
1 3 2
2 1 3
2 3 1
3 1 2
3 2 1
*/

function runProgram(input) {
  input = input.split("\n");
  const n = +input[0];
  const arr = input[1].split(" ").map(Number);
  let newArr = [];

  generatePermutation(arr, 0, newArr);
  newArr.sort();
  for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i].join(" "));
  }
}

const generatePermutation = (arr, cur, newArr) => {
  if (arr.length === cur) {
    newArr.push(arr.slice());
    return;
  }

  for (let i = cur; i < arr.length; i++) {
    [arr[i], arr[cur]] = [arr[cur], arr[i]];
    generatePermutation(arr, cur + 1, newArr);
    [arr[i], arr[cur]] = [arr[cur], arr[i]];
  }
};

if (process.env.USERNAME === "ubuntu") {
  runProgram(`3
1 2 3`);
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
