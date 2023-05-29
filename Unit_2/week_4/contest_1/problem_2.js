/*
? Detect Palindrome

Given an integer, print "Yes" (without quotes) if that integer is Palindrome, else print "No" (without quotes)
You must write a recursive function to achieve this.
You must not use the reverse function. Using that would lead to disqualification.

Expected Time Complexity - O(N)
Expected Space Complexity - 0(1)

*Input Format:
You are provided with one integer.

Constraints
The provided integer is always lesser than 1000000

*Output Format:
Print Yes or No depending upon the integer.

Input: 1221
Output: Yes
*/

function runProgram(input) {
  let str = input;
  console.log(detectPalindrome(str));
}

const detectPalindrome = (str) => {
  if (str.length <=1) return 'Yes'
  if (str[0] !== str[str.length-1]) return 'No'

  let remainingStr = str.slice(1, -1) 
  return detectPalindrome(remainingStr)
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`1221`);
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
