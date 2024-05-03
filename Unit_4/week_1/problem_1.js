/*
? Binary Search - Iterative

Given n distinct numbers, implement iterative binary search to check the presence of target number k.
In case k is present among those n numbers, print 1
Else print -1|

*Input Format:
First line of input contains n and k separated by a space
Next line contains n space separated integers

*Constraints:
n<1000

*Output Format:
In case k is present among those n numbers, print 1
Else print -1

*Input:
5 0
2 -2 0 3 4

*Output:
1
*/


function runProgram(input) {
    input = input.split('\n')
    const [n, k] = input[0].split(' ').map(Number)
    const arr = input[1].split(' ').map(Number).sort((a, b) => a - b)
    console.log(searchK(arr, n, k))
}

const searchK = (arr, n, k) => {
    let [low, high] = [0, n - 1]
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2)
        if (arr[mid] === k) return 1;
        if (arr[mid] > k) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return -1
}
if (process.env.USERNAME === "ubuntu") {
    runProgram(`5 0
2 -2 0 3 4`);
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