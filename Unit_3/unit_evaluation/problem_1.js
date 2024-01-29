/*
? Counting Occurences of Digits

You are given a number of N digits, from 0 to 9.
You need to print count of occurrences of each digits in descending order.
[Use Key-Value pair based data structure]

*Input Format:
First line contains T, no of test cases.
First line of each test case contains N, total digits of number.
Second line of each test case contains the number of N digits.

*Constraints:
1 <= T <= 10
1 <= N <= 10^6

*Output Format:
For each test case, print count of occurrences of each digit indescendingorder on new line.

Input: 2
5
21321
6
235452
Output: 0 0 0 0 0 0 1 2 2 0
0 0 0 0 2 1 1 2 0 0

*Explanation:
For test case 1
Count of 0 is 0, 1 is 2, 2 is 2, 3 is 1, 4 is 0, 5 is 0, 6 is 0, 7 is 0, 8 is 0, 9 is 0.
So it will become "0 2 2 1 0 0 0 0 0 0"
Converting into descending order will be "0 0 0 0 0 0 1 2 2 0"
*/

function runProgram(input) {
  input = input.split('\n')
  const test = +input[0]
    let line = 1
    
    for (let i = 1; i <= test; i++){
        const [n, arr] = [+input[line++], input[line++].split('').map(Number)]

        let initialArr = Array(10).fill(0);

        for (let i = 0; i < arr.length; i++) {
          const digit = arr[i];
            initialArr[digit]++;
        }

        console.log(initialArr.reverse().join(' '));
    }
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`2
5
21321
6
235452`);
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