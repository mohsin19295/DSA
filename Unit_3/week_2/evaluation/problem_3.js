/*
? Santosh & Profit

Santosh is a milk man, and supplies milk to local shops. Due to lockdown, the demand for milk has increased substantially but due to surge in the prices of Petrol & Diesel, he has incurred some loss. Santosh is thinking of someway to maximize this profit. He is a smart man, and hence figures out, that if he delivers 4 or 8 containers of milk, on each trip ,gives him the maximum return. Therefore, he decides that he will only carry 4 or 8 containers of milk for every delivery. To find the maximum profit that he can get with this arrangement, find the number of ways in which he can deliver N containers of milk, if for each visit he takes only 4 or 8 containers with him.

*Input Format:
The first line of input contains T, the number of test cases. Each test case consists of a single line N, the number of containers Santosh has to deliver.

*Constraints:
1<=T<= 10
0<= N <= 150

*Output Format:
For each test case print the number of ways in which Santosh can deliver N containers of milk.

Input: 1
12

Output: 3
*/

function runProgram(input) {
  input = input.split("\n");
  const test = +input[0];

  for (let i = 1; i <= test; i++) {
    const n = +input[i];
    const memo = new Array(n + 1);
    console.log(maximizeProfit(n, memo));
  }
}

const maximizeProfit = (n, memo) => {
  if (n < 0) return 0;
  if (n === 0) return 1;

    console.log(memo[n])
  // Check if the result is already memoized
  if (memo[n] !== undefined) return memo[n];

  // Calculate the number of ways recursively
  memo[n] = maximizeProfit(n - 4, memo) + maximizeProfit(n - 8, memo);

  return memo[n];
};

if (process.env.USERNAME === "ubuntu") {
  runProgram(`1
16`);
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
