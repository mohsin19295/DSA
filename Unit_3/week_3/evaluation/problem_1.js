/*
? Compete With Neighbour

You are provided an array A which has N elements. Your task is to find the count of such occurrence where the element is larger than its neighbour.

*Input Format:
First line of input contains N which is the number of elements present in the array.
Second line contains N integer which are the elements of the array A.

*Constraints:
N<100
There will always be at least 2 elements

*Output Format:
Output one integer which is the count of such occurences.

Input: 8
1 2 3 4 2 1 6 5
Output: 2

*Output Explanation:
In this case, 4 is bigger than both its neighbour 3 and 2.
Similarly 6 is bigger than both its neighbour 5 and 1.
So, the answer is 2.
*/

function runProgram(input) {
  input = input.split('\n')
  const [n, arr] = [+input[0], input[1].split(' ').map(Number)]

  console.log(countNeighbours(n, arr))
}

const countNeighbours = (n, arr) => {
  let count = 0;
  if (arr[0] > arr[1]) count++;
  if (arr[n - 1] > arr[n - 2]) count++;
  for (let i = 1; i < n - 1; i++){
    if (arr[i] > arr[i+1] && arr[i] > arr[i-1]) count++
  }
  return count;
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`8
1 2 3 4 2 1 6 5`);
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