/*
? Beyond Factorial

Given an integer N, you have to find the natural logarithmic value of the given integer's factorial i.e., ln(n!). You have to print the result up to 4 digits after the decimal point.
Note:- You should not be supposed to do like "finding n! and apply direct inbuilt log on top that". Instead of that, you can use Math.log() if applicable. Also, you can't use any direct formula or perform the task iteratively - Try achieving the output recursively.

JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

*Input Format:
Single line consists an integer N

*Constraints:
1<=N ≤= 50

*Output Format:
Print the result in a single line.

*HINT:
ln(x • y) = ln(x) + ln(y)

Input: 3
Output: 1.7918
*/

function runProgram(input) {
  const n = +input;
  console.log(beyondFactorial(n).toFixed(4));
}

const beyondFactorial = (n) => {
  if (n === 1) return 0;
  return beyondFactorial(n - 1) + Math.log(n);
};
if (process.env.USERNAME === 'ubuntu') {
  runProgram(`3`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  let read = '';
  process.stdin.on('data', function (input) {
    read += input;
  });
  process.stdin.on('end', function () {
    read = read.replace(/\n$/, '');
    read = read.replace(/\n$/, '');
    runProgram(read);
  });
  process.on('SIGINT', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
    process.exit(0);
  });
}
