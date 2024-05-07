/*
? All Twice Except One

Given an array A of n elements, every element appears twice in the array except for one element. Find the element that is uniquely present in the array.
In other words, there is one value that has a frequency of 1 whereas the rest has a frequency of 2. Find that particular element.
Added Constraint -> Do in O(1) auxiliary space and linear time complexity.

*Input Format:
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.
The first line of each test case contains a single integer n (1 ≤ n ≤ 100000) — the size of the array A.
The second line of each test case contains n integers (1 ≤ n ≤ 100000) - The elements of the array A.

*Output Format:
For each test case, print the answer: The unique element.

Input: 2
1
5
5
1 2 1 3 2

Output: 5
3
*/

function runProgram(input) {
    input = input.split('\n')
    const test = +input[0];
    let line = 1

    for (let i = 1; i <= test; i++) {
        const n = +input[line++]
        const arr = input[line++].split(' ').map(Number)

        console.log(getSingleELement(arr, n))
    }
}

const getSingleELement = (arr, n) => {
    const freqMap = new Map();
    for (let num of arr) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    for (let [key, value] of freqMap) {
        if (value === 1) {
            return key;
        }
    }
}
if (process.env.USERNAME === "ubuntu") {
    runProgram(`2
1
5
5
1 2 1 3 2`);
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