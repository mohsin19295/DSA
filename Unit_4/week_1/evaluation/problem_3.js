/*
? Nikhil and his Search

Nikhil and his friend Sachin are on a quest to find the answer to Life.
In order to complete it, they need to answer Q queries on an array A having N integers.
The queries can be of the following two types:
0 x: Find the number of numbers in A which are not less than x.
1 x: Find the number of numbers in A which are greater than x.
Help them complete the quest.

*Input Format:
The first line consists of a single integer denoting N.
The second line consists of N space separated integers denoting the array A.
The third line consists of a single integer denoting Q.
Each of the following Q lines consists of a query of one of the given two types.

*Constraints:
1<= N <= 100000
1<=Q<=300000
1<= elements of array, x < 1000000000

*Output Format:
For each query print the required answer in a new line.

Input: 4
1 2 3 4
3
0 5
1 3
0 3

Output: 0
1
2
*/

function runProgram(input) {
    input = input.split('\n');
    let [queries, n] = [+input[2], +input[0]];
    let arr = input[1].split(' ').map(Number).sort((a, b) => a - b);

    for (let i = 3; i < queries + 3; i++) {
        let [type, x] = input[i].split(' ').map(Number);
        console.log(binarySearch(type, x, arr, n));
    }
}

const binarySearch = (type, x, arr, n) => {
    let [low, high, i] = [0, n - 1, n];

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (type === 1) {
            if (arr[mid] > x) {
                i = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else if (type === 0) {
            if (arr[mid] >= x) {
                i = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
    }
    return n - i;
};

if (process.env.USERNAME === "ubuntu") {
    runProgram(`4
1 2 3 4
3
0 5
1 3
0 3`);
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