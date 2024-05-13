/*
? Minimum in sorted & rotated array

Given an array of length n, and it is sorted and rotated at some unknown point, find the minimum element in it.
In a sorted & rotated array, we rotate an ascending order sorted array at some pivot unknown to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2.
Please note that the linear search approach with the time complexity of O(n) can easily be applied. But you are expected to solve it in O(log n) time complexity

*Input Format:
First line Consists of integer n.
Second line consists of n integers separated by spaces.

*Constraints:
1 <= n <= 10^6

*Output Format:
Print minimum element.

Input: 10
4 6 7 9 10 -1 0 1 2 3

Output: -1
*/

function runProgram(input) {
    input = input.split('\n')
    const n = +input[0]
    let arr = input[1].split(' ').map(Number)
    let [low, high] = [0, n - 1]

    let pivot = findPivot(arr, low, high)

    console.log(pivot === -1 ? arr[0] : Math.min(arr[0], arr[pivot]))
}

const findPivot = (arr, low, high) => {
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2)

        if (arr[mid] > arr[mid + 1]) return mid + 1;
        if (arr[mid] < arr[mid - 1]) return mid;

        if (arr[mid] > arr[low]) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
if (process.env.USERNAME === "ubuntu") {
    runProgram(`15
10 11 12 13 14 15 -1 0 1 2 3 4 5 7 8`);
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