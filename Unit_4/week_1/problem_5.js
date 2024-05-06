/*
? Number of Occurences in logn

You are given n different numbers and an integer k. Write a program that finds number of times k is present in log(n) time complexity.

*NOTE:
YOU MUST NOT USE BRUTE FORCE SOLUTION
WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TRY THE LOGN SOLUTION
USING BRUTE FORCE/LINEAR SEARCH IN THIS CASE WOULD LEAD TO DISQUALIFICATION

*Input Format:
First line contains N and K
Second line contains N space separated sorted integers

*Constraints:
N<100

*Output Format:
Print number of times that number is present in the given list

Input: 6 3
2 3 3 3 6 9

Output: 3
*/

function runProgram(input) {
  input = input.split('\n')
  const [n, k] = input[0].split(' ').map(Number)
  const arr = input[1].split(' ').map(Number).sort((a, b) => a -b)

  console.log(numberOfOccurences(arr, n, k))
}

// Expanding Window Technique
const numberOfOccurences = (arr, n, k) => {
  const elementPosition = checkPresence(arr, n, k);
  let [left, right] = [elementPosition - 1, elementPosition + 1]
  let count = 1;

  if (elementPosition === -1) return 0;

  while (left >= 0 && arr[left] === k) {
    count++; left--;
  }

  while (right < n && arr[right] === k) {
    count++; right++;
  }

  return count;
}

const checkPresence = (arr, n, k) => {
  let [low, high] = [0, n - 1]

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2)

    if (arr[mid] === k) return mid
    if (arr[mid] > k) high = mid - 1
    if (arr[mid] < k) low = mid + 1

  }
  return -1
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`6 3
2 3 3 3 6 9`);
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