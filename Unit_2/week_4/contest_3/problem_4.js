/*
? Smaller Neighbour Element

Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

Mathematically, 
G[i] for an element A[i] is an element A[j] such that i is maximum possible AND i<j AND A[j]<A[i].

Note: Elements for which no smaller element exist, consider next smaller element as -1.

*Input Format:
First line contains an integer N denoting the number of elements in the array (not necessarily distinct).
Second line contains N space separated integers denoting the elements of the array.

Constraints:
N <= 100000

*Output Format: Print N space separated integers denoting the array G.

Input: 8
39 27 11 4 24 32 32 1

Output: -1, -1, -1, -1, 4, 24, 24, -1
*/

function runProgram(input) {
  input = input.split("\n")
  const n = +input[0]
  let arr = input[1].split(' ').map(Number)
    
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`8
39 27 11 4 24 32 32 1`);
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