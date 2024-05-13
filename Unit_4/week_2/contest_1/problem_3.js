/*
? Check if Sorted and rotated using binary search

Given an array of N distinct integers. Check if this array is sorted and rotated counter-clockwise.
A sorted array is not considered as sorted and rotated, i.e., there should be at least one rotation.

*Input Format:
First line consists of integer N
Second consists of N integers separated by spaces.

*Constraints:
1 <= N <= 1000

*Output Format:
Print "YES" if the array is sorted and rotated at least once else print "NO"

Input: 6
3 4 7 9 1 2

Output: YES
*/

function runProgram(input) {
    input = input.split('\n')
    const n = +input[0]
    let arr = input[1].split(' ').map(Number)

    let pivot = findPivot(arr, 0, n - 1);
    console.log(checkIfSirtedAndRotated(arr, pivot))
}

const checkIfSirtedAndRotated = (arr, pivot) => {
    if (pivot === -1) return 'NO'

    const left = isSorted(arr.slice(0, pivot), arr.slice(0, pivot).length)
    const right = isSorted(arr.slice(pivot), arr.slice(pivot).length)
    
    if (left && right) return 'YES'
    return 'NO'
}

const isSorted = (arr, n) => {
    if (n === 0 || n === 1) return true;
    if (arr[n - 1] < arr[n - 2]) return false;
    return isSorted(arr, n - 1);
}

const findPivot = (arr, low, high) => {
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2)

        if (arr[mid] > arr[mid + 1]) return mid + 1;
        if (arr[mid] < arr[mid - 1]) return mid;

        if (arr[mid] > arr[low]) low = mid + 1;
        else high = mid - 1
    }
    return -1;
}
if (process.env.USERNAME === "ubuntu") {
    runProgram(`5
1 2 3 4 5`);
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