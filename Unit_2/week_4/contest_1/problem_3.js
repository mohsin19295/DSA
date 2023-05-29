/*
? Swastika & Sum

You are given a 2d array with n rows and m columns where n and m are always odd. There are two different parts present in the 2d array and the sum of all the elements of the first part is referred as sum1 and that of the other is referred as sum2. You have to find the absolute difference between sum1 and sum2.

! Look at the given figure to have a better idea of the two different parts (problem_3.png)

As the figure shown, sum1 is formed by all the elements starting from top-right -> to middle column then bisects the figure vertically and then goes to the bottom left of the 2d array Similarly. sum2 is formed by all the elements in the top left -> to middle row then bisects the figure horizontally and then goes to the bottom right of 2d array.

Look at the sample test case for better understanding

*Input Format:
First line contains n and m
Next n line contains m space separated integers which describe each row of the 2d array

Constraints
n, m <= 50

*Output Format:
Output the absolute difference between sum1 and sum2

Input: 3 5
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15

Output: 0

*Explanation:
Here, sum1 = 5 + 4 + 3 + 8 + 13 + 12 + 11 = 56
sum2 = 1 + 6 + 7 + 8 + 9 + 10 + 15 = 56
abs (sum1-sum2) = 0
*/

function runProgram(input) {
  input = input.split("\n");
  const [n, m] = input[0].split(" ").map(Number);

  let mat = [];
  for (let i = 1; i <= n; i++) {
    mat.push(input[i].split(" ").map(Number));
  }
  console.log(absoluteSum(n, m, mat));
}

const absoluteSum = (n, m, mat) => {
  let [sum1, sum2] = [0, 0];
  let [verticalMid, horizontalMid] = [Math.floor(n / 2), Math.floor(m / 2)];

  // For Sum2
  for (let i = 0; i < verticalMid; i++) {
    sum2 += mat[i][0];
  }
  for (let i = 0; i < m - 1; i++) {
    sum2 += mat[verticalMid][i];
  }
  for (let i = verticalMid; i < n; i++) {
    sum2 += mat[i][m - 1];
  }

  // For Sum1
  for (let i = m - 1; i > horizontalMid; i--) {
    sum1 += mat[0][i];
  }
  for (let i = 0; i < n; i++) {
    sum1 += mat[i][horizontalMid];
  }
  for (let i = horizontalMid - 1; i >= 0; i--) {
    sum1 += mat[n - 1][i];
  }
  return Math.abs(sum1 - sum2);
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`3 3
6 8 10
2 3 9
7 4 5`);
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
