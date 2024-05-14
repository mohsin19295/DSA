/*
? The Peak Point

Given an array of size n, which is strictly increasing and then strictly decreasing in order. Find out the index (0-based) which is the peak of the array.
Note that the extremities are not considered as peak and there exists a peak which is not at index 0 or at n-1.

*Input Format:
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.
The first line of each test case contains a single integer n (3 ≤ n ≤ 100000).
The second line of the test case contains n integers (1 ≤ Ai ≤ 100000) and they are all distinct in nature.

*Output Format:
For each test case, print the answer: The peak index.

Input: 2
3
10 20 11
5
1 3 6 5 4

Output: 1
2
*/

function runProgram(input) {
    input = input.split('\n')
    const test = +input[0]
    let line = 1;

    for (let i = 1; i <= test; i++) {
        const n = +input[line++]
        let arr = input[line++].split(' ').map(Number)

        console.log(findPeakPoint(arr, 0, n - 1))
    }
}

const findPeakPoint = (arr, low, high) => {
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2)

        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;

        if (arr[mid] < arr[mid - 1]) high = mid - 1;
        if (arr[mid] < arr[mid + 1]) low = mid + 1;
    }
}
if (process.env.USERNAME === "ubuntu") {
    runProgram(`2
3
10 20 11
5
1 3 6 5 4`);
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