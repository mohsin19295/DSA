/*
? Sort It Out

Given an array A of non-negative integers of size m. Your task is to sort the array in non-decreasing order and print out the original indices of the new sorted array.

NOTE: The indexing of the array starts with 0.
IMPORTANT: YOU CANNOT USE BUILT-IN SORT FUNCTION. YOU HAVE TO WRITE A SORTING ALGORITHM - Merge sort or Quick Sort

*Input Format:
The first line of input consists of the size of the array
The next line consists of the array of size m

Input: 5
4 5 3 7 1
Output: 4 2 0 1 3

*Output Explanation:
A={14,5,3,7,1}
After sorting the new array becomes A={1,3,4,5,7}.
The required output should be "4 2 0 1 3"
*/

function runProgram(input) {
    input = input.split('\n')
    const [n, arr] = [+input[0], input[1].split(' ').map(Number)]

    const arrOfObj = arr.map((el, index) => ({ el, in: index }));

    const sotredArr = mergerByElement(arrOfObj);

    console.log(sotredArr.map(e => e.in).join(' '));
}

const mergerByElement = (arr) => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return mergeSort(mergerByElement(left), mergerByElement(right));
}

function mergeSort(left, right) {
    let MergeArr = [];
    let [i, j] = [0, 0]

    while (i < left.length && j < right.length) {
        if (left[i].el <= right[j].el) {
            MergeArr.push(left[i]);
            i++;
        } else {
            MergeArr.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        MergeArr.push(left[i]);
        i++
    }

    while (j < right.length) {
        MergeArr.push(right[j]);
        j++
    }

    return MergeArr
}
if (process.env.USERNAME === "ubuntu") {
    runProgram(`5
4 5 3 7 1`);
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