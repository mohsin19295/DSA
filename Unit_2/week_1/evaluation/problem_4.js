/*
? Sum of Even numbers

• You are given an array stored in a variable with the name arr, whose size is stored in a variable with the name N
• You have to find the sum of even numbers present in the array
• For example, consider the value stored in N = 5, and arr = [2 2 2 2 1]. Then, the even numbers in the array are - 2, 2, 2, 2 . Therefore, the sum is 2 + 2 + 2 + 2 = 8, which is the required output

*Input Format:
• In this question, there are multiple test cases, within each test case
• The first line of the input contains the value stored in N
• The next line contains the value stored in arr

*Output Format:
• Print the sum of even numbers present in the array

Input: 2
3
1 2 3
5
2 2 2 2 1

Output: 2
8
*/


function runProgram(input) {
    input = input.split('\n')
    const test = +input[0]

    let line = 1
    for (let i = 1; i <= test; i++){
        const n = +input[line++]
        const arr = input[line++].split(' ').map(Number)

        console.log(arr.filter(e => e%2 === 0).reduce((a, c) => a + c, 0))
    }
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`2
3
1 2 3
5
2 2 2 2 1`);
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