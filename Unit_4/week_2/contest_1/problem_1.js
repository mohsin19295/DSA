/*
? Search in sorted and rotated array

Given a sorted(increasing order) array of length n and is rotated by some value beforehand. Find the index of the target element K in the rotated array in O(logn) time. If not found print -1.

In a sorted & rotated array, we rotate an ascending order sorted array at some pivot unknown to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2.

Please note that the linear search approach with the time complexity of O(n) can easily be applied. But you are expected to solve it in O(log n) time complexity.

Note: Array contains all distinct elements.

*Input Format:
First line consists of n and k separated by space.
Second line consists of n integers separated by spaces

*Constraints:
1 <= n <= 50
k <= 50

*Output Format:
Print index of the target element

Input: 5 1
3 4 5 1 2

Output: 3

Input: 6 6
3 4 7 9 1 2

Output: -1
*/

function runProgram(input) {
  input = input.split('\n')
  const [n, k] = input[0].split(' ').map(Number)
  const arr = input[1].split(' ').map(Number)
  let [low, high] = [0, n - 1]

  console.log(findIndex(arr, k, low, high))
}

const findIndex = (arr, k, low, high) => {
  const pivot = findPivot(arr, low, high);

  if (pivot === -1) return binarySearch(arr, k, low, high);
  if (arr[pivot] === k) return pivot;
  if (arr[0] <= k) return binarySearch(arr, k, low, pivot - 1);
  return binarySearch(arr, k, pivot + 1, high);

}

const binarySearch = (arr, k, low, high) => {
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2)

    if (arr[mid] === k) return mid;
    if (arr[mid] > k) high = mid - 1
    else low = mid + 1
  }
  return -1
}

const findPivot = (arr, low, high) => {

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2)

    if (arr[mid] > arr[mid + 1]) return mid + 1;
    if (arr[mid - 1] > arr[mid]) return mid;

    if (arr[mid] > arr[low]) low = mid + 1;
    else high = mid - 1;
  }

  return -1
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`10 3
7 8 11 12 13 14 2 3 4 5`);
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