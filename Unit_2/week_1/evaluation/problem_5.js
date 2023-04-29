/*
? Matrix Non Prime Check

• In this question, you are given a 2D array stored in a variable with the name arr
• The number of rows in the matrix is stored in the variable with the name N, while the number of columns stored in the matrix is stored in a variable with the name M
• You have to find and print the count of non prime numbers (numbers which are not prime) present in the matrix
• For example, consider the value stored in N = 3 , and M = 3, and arr = [ [1 2 3], [4 5 6], [7 8 9]]

The non prime numbers in the 2D array are 1, 4, 6, 8, 9 . Therefore, the required output is 5

Note : The 2D array may contain duplicate elements. Each instance of a non prime number should be counted separately

*Input Format:
• The first line of the input contains the values stored in N and M
• The next line contains the values stored in arr

*Output Format:
• Print the count of non prime numbers present in the matrix, as shown in the problem statement

Input: 3 3
1 2 3
4 5 6
7 8 9 

Output: 5
*/

function runProgram(input) {
    input = input.split('\n')
    const [n, m] = input[0].split(' ')

    let mat = []
    for (let i = 1; i <= n; i++) { 
        mat.push(...input[i].split(' ').map(Number))
    }
   
    let count = 0;
    for (let i = 0; i < mat.length; i++){
        if (!checkPrime(mat[i])) count++
    }
    console.log(count)

    function checkPrime(num) {
        if (num < 10) {
            if (num === 2 || num === 3 || num === 5 || num === 7) return true
        } else {
            if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) return false
            return true
        }
    }
}
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