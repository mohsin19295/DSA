/*
? Recursive Bubble Sort

You are given an array ofNunsorted numbers. Your task is to write BUBBLE SORT using RECURSION such that numbers present in the array get sorted.
USING ANY OTHER ALGORITHM OR USING SORT FUNCTION WOULD LEAD TO DISQUALIFICATION.

*Input Format:
First line of input contains N
Second line of input contains N numbers

*Constraints:
N < 500

*Output Format:
Output the numbers given after sorting it in increasing order

Input:5
3 5 0 9 8

Output: 0 3 5 8 9
*/

function runProgram(input) {
    input = input.split('\n');
    
}
if (process.env.USERNAME === 'ubuntu') {
  runProgram(`5
3 5 0 9 8`);
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
