/*
? Odd Product in Columns

You are given a 2D array, whose dimensions are stored in two variables with the name N and M
The value stored in N denotes the number of rows, and the value in M denotes the number of columns
The 2D array is stored in a variable with the name arr

For all columns, you have to print the product of odd elements present in the column
For example, consider the value stored in N = 3, M = 3, and the array is arr = [1, 2, 3], [4, 5, 6], [7, 8, 9], then the required output will be:

7 (Odd numbers in the column are, [1,7]. Therefore, the product becomes 7)
5 (Odd numbers in the column are, [5]. Therefore, the product becomes 5)
27 (Odd numbers in the column are, [3,9]. Therefore, the product becomes 27)


*Input Format:
The first line of the input contains the value stored in N and M
The next N lines contain M values each denoting the value stored in arr

*Output Format:
• For each column, print the product of odd numbers present in the column, line by line

Input: 3 3
1 2 3
4 5 6
7 8 9

Output: 7
5
27
*/

function runProgram(input) {
  input = input.split("\n");
  const [n, m] = input[0].split(" ").map(Number);

  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(input[i].split(" ").map(Number));
  }
  checkProduct(n, m, arr);
}

const checkProduct = (n, m, arr) => {
  let j = 0;
  while (j < m) {
    let res = 1;
    for (let i = 0; i < n; i++) {
        arr[i][j] % 2 == 1 ? res *= arr[i][j] : 0;
    }
    j++;
    console.log(res)
  }
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`3 3
1 2 3
4 5 6
7 8 9`);
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
