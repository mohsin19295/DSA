/*
? Opp Merge Sort

Given a list of n integers. Write a program for merge sort algorithm such that it reverses the list in descending order. You must not write any other sorting algorithm

*Input Format:
First line contains n which is the number of elements present in the array
Second line contains n space-separated integers

*Output Format:
Output the elements present in the array sorted in descending order

Input: 5
2 3 1 4 5
Output: 5 4 3 2 1
*/

function runProgram(input) {
    input = input.split('\n')
    const n = +input[0]
    const arr = input[1].split(' ').map(Number)

    console.log(applyMerge(arr).join(' '))
}
const OppMergeSort = (arr1, arr2) => {
    let [i, j] = [0, 0]
    let mergeArr = []

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            mergeArr.push(arr1[i])
            i++
        } else {
            mergeArr.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        mergeArr.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        mergeArr.push(arr2[j])
        j++
    }

    return mergeArr
}

const applyMerge = (arr) => {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return OppMergeSort(applyMerge(left), applyMerge(right))
}
if (process.env.USERNAME === "ubuntu") {
    runProgram(`5
2 3 1 4 5`);
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