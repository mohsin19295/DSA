/*
? Row Game

Given a matrix of dimension nxm. Find the count of distinct elements that occur in all the rows of the matrix.

* Input Format:
The first line of the input contains one integer t (1 ≤ t ≤ 10) - the number of test cases.
Then t test cases follow. The first line of each test case contains two integers n and m (1 ≤ n,m ≤ 100) - The dimensions of the matrix.
The next n lines of each test case contain m integers (1 ≤ Aij ≤ 100) - The input matrix.

*Output Format:
For each test case, print the answer: The count of distinct elements.

Input: 2
3 3
1 2 1 
1 3 1
1 2 1
3 3
1 2 3
1 1 3
1 2 3

Output: 1
2

*HINT: 
In the sample test case given, there are 2 test cases. In the first test case, the value of n = 3 and m = 3.

The question demands that we find the number of distinct integers that occur in all the rows of the matrix. Upon looking at the elements in the matrix in the first test case, only element 1 is present in all the rows of the matrix, therefore the count of distinct integers present in all rows of the matrix is 1.

In the second test case, again the value of n = 3 and m = 3 . Upon, observation you can see that the elements 1 and 3 are present in all the rows of the matrix. Therefore, the count of distinct elements present in all the rows of the matrix is 2. Hence, the output 2.
*/

function runProgram(input) {
  input = input.split("\n");
  const test = +input[0];
  let line = 1;

  for (let i = 1; i <= test; i++) {
    const [n, m] = input[line++].split(" ").map(Number);
    let mat = [];

    for (let j = 0; j < n; j++) {
      mat.push(input[line++].trim().split(" ").map(Number));
    }

    console.log(mat, n, m);
  }
}

if (process.env.USERNAME === "ubuntu") {
  runProgram(`2
3 3
1 2 1 
1 3 1
1 2 1
3 3
1 2 3
1 1 3
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
