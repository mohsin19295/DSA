/*
? Sub array quest III

Given an array A with N positive integers. Count the number of subarrays that start with an even number and end with an odd number.

*Input Format:
• First line: Single integer denoting the value of T - the number of test cases.
• For each test case:
• First line: Single integer denoting the value of N.
• Next line: N single space-separated integers denoting the elements of array A.

*Output Format:
For each test case, print in a new line, a single integer denoting the number of subarrays.

Input: 1
5
1 2 3 4 5

Output: 3
*/

function runProgram(input) {
  input = input.split('\n')
  const test = +input[0]

  let line = 1
  for (let i = 1; i <= test; i++){
        const n = +input[line++]
        const arr = input[line++].split(' ').map(Number)
        console.log(subArr(arr, n))
  }
    
    function subArr(arr, n) {
        let count = 0
        for (let i = 0; i < n; i++){
            for (let j = i; j < n; j++) {
                let res = []
                for (let k = i; k <= j; k++) {
                    res.push(arr[k])
                }
                if (res[0] % 2 === 0 && res[res.length - 1] % 2 === 1) count++
            }
        }
        return count
    }

}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`1
5
1 2 3 4 5`);
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