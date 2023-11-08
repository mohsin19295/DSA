/*
? Tallest Around

You are curious to find who is the tallest person in a queue. But you don't wanna go with the traditional method and find who is the tallest in the whole queue, you want to pick an interval of like K people and find who is the tallest person in them.

*Input Format:
First line contains the number of cases (t)
Next 2t lines contains the length of the queue L, the integer K and the queue A in two different lines

t <= 500
L <= 1000
A[i] <= 100

*Output Format:
Output tallest person in the intervals separated by space for each case.

Input:1
9 3
1 2 3 1 4 5 2 3 6

Output: 3 3 4 5 5 5 6

*HINT:
Since the interval is 3, In the first one heights are- 1, 2, 3 ; Tallest among them is 3. For the second interval the height are 2, 3, 1 and the tallest in them is 3 and so on
*/

function runProgram(input) {
  input = input.split("\n");
  const test = +input[0];
  let line = 1;

  for (let i = 0; i < test; i++) {
    const [n, interval] = input[line++].split(" ").map(Number);
    const arr = input[line++].split(" ").map(Number);

    console.log(checkTallest(n, interval, arr));
  }
}

const checkTallest = (n, interval, arr) => {
  let start = 0;
  let res = "";

  while (interval <= n) {
    let queue = [];
    for (let i = start; i < interval; i++) {
      queue.push(arr[i]);
    }
    start++;
    interval++;
    res += Math.max(...queue) + " ";
  }
  return res.trim();
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`1
9 3
1 2 3 1 4 5 2 3 6`);
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
