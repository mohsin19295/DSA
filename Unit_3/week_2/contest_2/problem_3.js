/*
? The Famous Sum

You are given two numbers n and k. The number p is created by concatenating the string n k times.
we need to find the super digit of the integer p

We define super digit of an integer pusing the following rules:
If p has only 1 digit, then its super digit is 1.
Otherwise, the super digit of p is equal to the super digit of the sum of the digits of p.
Read the Sample input explanation for better understanding.

*Input Format:
The first line contains two space-separated integers, n-a string representation of an integerand k-an integer, the times to concatenate nto make p.

*Constraints:
1 <= n <= 10^100000
1 <= k<=10^5

*Output Format:
Print thesuperdigit sum p

Input: 148 3
Output: 3

Input: 123 3
Output: 9

*HINT:
Sample Input 1 Explanation:
Here n = 148 and k = 3, so p = 148148148

super_digit(P) = super_digit (148148148)
= super_digit (1+4+8+1+4+8+1+4+8)
= super_digit (39)
= super_digit (3+9)
= super_digit (12)
= super_digit (1+2)
= super_digit (3)
= 3

Sample Input 2 Explanation:
Here n = 123 and k = 3, so p = 123123123

super_digit(P) = super_digit (123123123)
= super_digit (1+2+3+1+2+3+1+2+3)
= super_digit (18)
= super_digit (1+8)
= super_digit (9)
= 9
*/

function runProgram(input) {
  const [p, k] = input.split(" ");
  console.log(superDigit(p, k));
}

function superDigit(arr, k) {
  if (arr.length === 1) return arr;
  const digit = arr.split("").reduce((ac, cur) => ac + Number(cur), 0) * k + "";
  return superDigit(digit, 1);
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`123 3`);
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

// Took Help from: https://perezchristian1012.medium.com/solving-recursion-algorithm-problem-6278b559c761
