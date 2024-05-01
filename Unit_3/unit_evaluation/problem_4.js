/*
? K Odd SubSet

Given an array A having N positive integers. Count the number of non-empty subsets of array A such that each subset has at least K odd numbers.

*Input Format:
• First line: Single integer denoting the value of T - the number of test cases.
• For each test case:
• First line: Two single space-separated integers denoting the values of N and K.
• Next line: N single space-separated integers denoting the elements of array A.

*Constraints:
1 <= T <= 100
1 <= N, K <= 15
1 <= A[i] <= 100

*Output Format:
For each test case, print in a new line, a single integer denoting the required count of subsets.

*Input:
2
4 2
4 3 2 1
2 1
2 3

*Output:
4
2

*HINT: 
For Given test cases:
Test case 1:
N = 4, K = 2, A: [ 4, 3, 2, 1 ].
Subsets which has at least two odd numbers are:
{ 4,3,2,1 }, ( 3, 2, 1}, { 3, 1 }.(4, 3, 1}.
Test case 2:
N = 2, A: [2, 3].
Subsets which has at least one odd number are:
{3}, {2, 3}.
*/

function runProgram(input) {
    input = input.split('\n')
    const test = +input[0]
    let line = 1;

    for (let i = 1; i <= test; i++) {
        const [n, k] = input[line++].split(' ').map(Number)
        const arr = input[line++].split(' ').map(Number)

        console.log(checkOdd(arr, k))
    }
}

const checkOdd = (arr, k) => {
    const subSets = generateSubSet(arr)
    return subSets
        .map(e =>
            e.filter(el =>
                el % 2 === 1).length)
        .filter(elem => elem >= k).length
}

const generateSubSet = (arr) => {
    let res = []

    function backTrack(start, current) {
        res.push(current.slice())

        for (let i = start; i < arr.length; i++) {
            current.push(arr[i])
            backTrack(i + 1, current)
            current.pop()
        }
    }

    backTrack(0, [])
    return res;
}
if (process.env.USERNAME === "ubuntu") {
    runProgram(`2
4 2
4 3 2 1
2 1
2 3`);
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