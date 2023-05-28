/*
? Sum of Digits

You are given an array A of N integers.
You have to find the sum of the individual digit sum of all the elements in the array
The digit sum here refers to the sum of digits, present in a given element
Refer the sample I/O for better understanding

*Input Format:
The first line of the input contains T, the number of test cases
The first line of each test case contains N, the number of elements in the array
The next line contains N space separated integers, denoting the elements of the array

*Output Format:
For each test case, print a single integer denoting the sum of individual digit sum of all element
s in the array, on a new line.

Input: 2
5
12 14 16 17 29
6
1 2 3 4 5 51

Output: 34
21
*/


function runProgram(input) {
  input = input.split('\n')
    const test = +input[0]
    let line = 1

    for (let i = 1; i <= test; i++){
        let n = +input[line++]
        let arr = input[line++].split(' ')

        let sum = 0
        for (let j = 0; j < n; j++){
            sum+=arr[j].split('').map(Number).reduce((a, c)=> a+c, 0)

        }
        console.log(sum)
    }
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`2
5
12 14 16 17 29
6
1 2 3 4 5 51`);
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