/*
? Quickly Sort It

You are given an array of N integers. Write QUICK SORT ALGORITHM to sort the numbers in ascending order
DO NOT USE ANY BUILTIN FUNCTION TO SORT
ALSO, YOU MUST NOT USE ANY OTHER ALGORITHM

*Input Format:
First line contains N
Second line contains N space separated integers

*Constraints:
N < 1000

*Output Format:
Print the sorted numbers separated by space

Input: 5
3 5 0 9 8
Output: 0 3 5 8 9
*/

function runProgram(input) {
    input = input.split('\n')
    const [n, arr] = [+input[0], input[1].split(' ').map(Number)]
    console.log(quickSort(arr, 0, n - 1).join(' '))
}

const findPivotIndex = (arr, start, end) => {
    let pivotValue = arr[end];
    let pivotIndex = start

    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]]
            pivotIndex++
        }
    }
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
    return pivotIndex
}

const quickSort = (arr, start, end) => {
    if (start >= end) return arr;
    
    let index = findPivotIndex(arr, start, end);

    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);

    return arr;
}
if (process.env.USERNAME === "ubuntu") {
    runProgram(`5
3 5 0 9 8`);
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