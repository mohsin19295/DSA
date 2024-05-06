/*
? Lower bound in logn

You are given n different numbers and an integer k. Write a program that finds lower bound of k in log(n) time complexity. Lower bound of a number k in a sorted list is the index of the first number which is same as k, in case the number is not present, print -1 (here the answer is given considering index to be starting from 0)

*NOTE:
YOU MUST NOT USE BRUTE FORCE SOLUTION.
WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TO TRY THE LOGN SOLUTION.
USING BRUTE FORCE/LINEAR SEARCH, IN THIS CASE, WOULD LEAD TO DISQUALIFICATION.

*Input Format:
First line contains N and K
Second line contains N space separated sorted integers

*Constraints:
N<100

*Output Format:
Output lower bound

Input:
5 3
1 1 2 2 5

Output:
-1
*/

function runProgram(input) {
    input = input.split('\n')
    const [n, k] = input[0].split(' ').map(Number)
    const arr = input[1].split(' ').map(Number).sort((a, b) => a - b)
    console.log(lowerBound(arr, n, k))
}

const lowerBound = (arr, n, k) => {
    let [low, high, i] = [0, n - 1, -1]

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2)

        if (arr[mid] === k) {
            i = mid;
            high = mid - 1
        } else if (arr[mid] > k) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return i
}
if (process.env.USERNAME === "ubuntu") {
    runProgram(`10 3
0 2 4 4 5 5 7 7 9 10`);
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