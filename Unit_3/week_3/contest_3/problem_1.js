/*
? Merge Sorting


You are given N numbers. Your task is to write MERGE SORT sorting algorithm (from scratch) to sort those N numbers.

USING ANY OTHER ALGORITHM OR IN BUILT FUNCTION WOULD LEAD TO DISQUALIFICATION FROM NEXT HACKERRANK CONTEST

*Input Format:
First line of input contains N
Next line contains N space separated integers.

*Constraints:
N < 1000000

*Output Format:
Output the sorted form of provided numbers

Input:5
3 5 0 9 8
Output: 0 3 5 8 9
*/

function runProgram(input) {
    input = input.split('\n');
    const n = +input[0];
    let arr = input[1].split(' ').map(Number);

    console.log(... mergeSort(arr))
}

const mergeImplementation = (arr1, arr2) => {
    let [i, j] = [0, 0]
    let merge = []

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merge.push(arr1[i])
            i++
        } else {
            merge.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        merge.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        merge.push(arr2[j])
        j++
    }

    return merge
}

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return mergeImplementation(mergeSort(leftArr), mergeSort(rightArr));
}
if (process.env.USERNAME === "ubuntu") {
    runProgram(`7
7 6 5 4 3 2 1`);
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