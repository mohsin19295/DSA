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
  const n = +input[0];
  const arr = input[1].split(' ').map(Number);
  console.log(bubbleSort(arr, n).join(' '));
}

const bubbleSort = (arr, n) => {
  if (n === 1) return arr;
  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  return bubbleSort(arr, n - 1);
};
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
