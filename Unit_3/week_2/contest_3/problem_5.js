/*
? Dr. Strange and Possibilities ||

Dr. Strange is back again and this time he has an array A with n integers which may have duplicates. So he again uses his mind power and time stone to calculate all the possible subsets of the input array A. Generate all the possible subsets.

*Input Format:
The first line of the input contains one integer n (1 s n ≤ 10) — The size of the array A.
The second line of the input contains n integers (1 ≤ Ai ≤ 10) - The elements of the array A.

*Output Format:
Print each possible subset in a new line.
Elements within the subset must be in non-decreasing order. All the subsets must be distinct and sorted lexicographically. For an empty subset just print a blank line.

Input: 4
1 7 8 2

Output:
<EMPTY SPACE>
1
1 2
1 2 7
1 2 7 8
1 2 8
1 7
1 7 8
1 8
2
2 7
2 7 8
2 8
7
7 8
8

*/

function runProgram(input) {
    input = input.split('\n')
    const n = +input[0]
    const arr = input[1].split(' ').map(Number)

    possibleSubset(0, arr, [])
    for (let value of mySet) {
        console.log(value)
    }
}

const mySet = new Set()
const possibleSubset = (cur, arr, newArr) => {
    if (newArr.length >= 0) {
        let key = (newArr.join(' '))
        mySet.add(key)
    };
    if (arr.length === cur) return;

    arr.sort((a, b)=> a - b)

    for (let i = cur; i < arr.length; i++) {
        newArr.push(arr[i])
        possibleSubset(i + 1, arr, newArr)
        newArr.pop()
    }
}
if (process.env.USERNAME === "ubuntu") {
    runProgram(`4
1 7 8 2`);
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