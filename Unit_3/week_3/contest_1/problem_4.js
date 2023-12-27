/*
? Dr. Strange and Possibilities

Dr. Strange has n distinct integers from 1 to n. He uses his mind power and time stone to calculate all the possible subsets using the given n integers. Generate all the possible subsets.

*Input Format:
The first line of the input contains one integer n (1 ≤ n ≤ 10).

*Output
Print each possible subset in a new line.
Elements within the set must be in non-decreasing order. All the subsets must be distinct and sorted in ascending order or lexicographically. For an empty subset just print a blank line.

Input: 3
Output: 
<EMPTY SPACE>
1
1 2
1 2 3
1 3
2
2 3
3
*/

function runProgram(input) {
  const n = +input;
  let arr = []
  for (let i = 1; i <= n; i++){
    arr.push(i)
  }
  const [newArr, cur] = [[], 0]
  generateSubset(arr, newArr, cur)
    
}
const generateSubset = (arr, newArr, cur) => {
  if(newArr.length >= 0) console.log(newArr.join(' '))
  if (arr.length === cur) return;

  for (let i = cur; i < arr.length; i++){
    newArr.push(arr[i])
    generateSubset(arr, newArr, i + 1);
    newArr.pop()
  }
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`3`);
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