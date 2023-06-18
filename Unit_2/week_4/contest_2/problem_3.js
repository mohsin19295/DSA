/*
? New Sorting Algorithm

Hassan has discovered his own sorting algorithm. The algorithm has following conditions:

1. Given an integer k, sort the values in the array according to their modulo with k. That is. if there are two integers a and b, and a%k < b%k, then a would come before b in the sorted array.

2. If a%k = b%k, then the integer which comes first in the given array remains first in the sorted array Your task is to write a program that sorts the given array as per above mentioned condition and print the sorted array.

*Input Format:
The first line consists of two integers N and k, N being the number of elements in the array and is the number with which we need to take the modulo.

The next line consists of N space separated integers , denoting the elements of the array A.

Constraints:
N < 10000
K < 1000000000
Integers of array < 10000000000

*Output Format:
Print the modulo sorted array of the given array.

Input: 5 6
12 18 17 65 46
Output: 12, 18, 46, 17, 65
*/


function runProgram(input) {
  input = input.split('\n')
  const [n,k] = input[0].split(' ').map(Number)
  let arr = input[1].split(' ').map(Number)

    let flag = false;
    while (!flag) {
        flag = true;
        for (let i = 0; i < n -1; i++) {
            if (arr[i] % k > arr[i + 1] % k) {
                [arr[i], arr[i + 1]] = [arr[i+1], arr[i]]
                flag = false
            }
        }
    }
    console.log(arr.join(' '))
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`5 6
12 18 17 65 46`);
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