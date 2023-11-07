/*
? Next Greater Element

Given an array of N elements, find the next greater element for each element in the array, print -1 if it does not exits. Refer to the sample 1/O for better

*Input Format:
The first line contains T, the number of test cases.
The first line of each test case contains N, the number of elements in the array. The next line contains N space separated integers denoting the elements of the array

*Constraints:
1 <= T <= 10
1 <= N <= 10^5
0 <= A[i] <= 10000

*Output Format:
For each test case, print N space separated integers, denoting the next greater element for each element, on a new line.

Input: 1
4
1 3 2 4

Output: 3 4 4 -1

*HINT:
In the sample test case, the array contains 4 elements, and for the first element, the next greater element will be 3, similarly for the next element, the next greater element will be 4, and for the third element as well, the next greater element will be 4. Since, the last element has no elements ahead of it, the next greater element will be -1.
*/

function runProgram(input) {
  input = input.split("\n");
  const test = +input[0];
  let line = 1;

  for (let i = 1; i <= test; i++) {
    let n = +input[line++];
    let arr = input[line++].split(" ").map(Number);

    console.log(checkNextElement(n, arr));
  }
}

const checkNextElement = (n, arr) => {
  const [stack, res] = [[], []];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }
    res[i] = stack.length > 0 ? stack[stack.length - 1] : -1;
    stack.push(arr[i]);
  }
  return res;
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`10
6
8 9 12 5 2 1
6
3 3 1 3 3 4
7
9 1 5 7 3 4 5
13
4 2 8 9 3 3 8 5 7 2 8 7 9
2
5 1
9
2 4 2 5 7 7 9 1 1
5
1 4 4 4 7
12
2 2 1 1 1 2 2 1 1 2 2 1
6
1 1 3 3 4 2
6
2 2 2 1 1 1`);
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
