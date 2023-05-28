/*
? Sum less than equal to K

You are given an array A of N integers, and an integer K. You have to find the sum of all the numbers in t
he array which have a value less than or equal to K.

*Input Format:
The first line of the input contains N, the size of the array, and K as mentioned in the problem statement.
The next line contains N space separated integers, denoting the values of the array.

*Output Format:
Print a single integer denoting the sum of all the elements in the array, whose value is less than or equal to K.

Input: 4 2
1 2 3 4

Output: 3
*/

function runProgram(input) {
  input = input.split('\n')
  const [n, k] = input[0].split(' ').map(Number)
    let arr = input[1].split(' ').map(Number)

    let sum = 0;
    for (let i = 0; i < n; i++){
        if (arr[i] <= k) {
            sum+=arr[i]
        }
    }
    console.log(sum)
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`4 2
1 2 3 4`);
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