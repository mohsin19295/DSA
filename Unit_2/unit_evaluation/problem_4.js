/*
? Number Of Wish

You are given an string of size N, of characters from 'a' to 'z'. You need to print number of times you can make "wish", using characters from string. You can use a character only once from the string.
Note: Use Key-Value pair based data structure

*Input Format:
First line contains T, no of test cases.
First line of each test case contains N, size of string
Second line of each test case contains string S.

Constraints
1 <= T <= 10
1 <= N <= 10^6

*Output Format:
For each test case, print number of times you can make "wish"

input: 2
7
wishash
8
wishwish

Output: 1
2
*/

function runProgram(input) {
  input = input.split("\n");
  const test = +input[0];
  let line = 1;

  for (let i = 1; i <= test; i++) {
    let n = +input[line++];
    let str = input[line++];
    console.log(numberOfWish(str, n));
  }
}

const numberOfWish = (str, n) => {
  if (n < 4) return 0;
  let obj = {};
  for (let i = 0; i < n; i++) {
    let k = str[i];
    if (!obj[k]) obj[k] = 1;
    else obj[k] += 1;
  }

  for (let key in obj) {
    if (!["w", "i", "s", "h"].includes(key)) delete obj[key];
  }
  return Math.min(...Object.values(obj));
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`3
7
wishash
8
wishwish
3
wia`);
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
