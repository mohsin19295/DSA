/*
? Perform Merging

You are given two sorted arrays each of length N. Your task is to write a program that merges both the arrays such that the final array formed after merging is sorted.
Note: You must not use sort() function in your entire code

*Input Format:
First line contains N which is the number of integers present in both the arrays.
Second line contains N sorted integers which are elements of first array.
Third line contains N sorted integers which are elements of second array.

*Constraints:
N < 1000

*Output Format:
Output the array formed after merging elements such that it is sorted

Input:4
1 5 7 9
2 4 6 8

Output: 1 2 4 5 6 7 8 9
*/

function runProgram(input) {
  input = input.split("\n")
  let n = +input[0]
  let arr1 = input[1].split(' ').map(Number)
    let arr2 = input[2].split(' ').map(Number)
    
    console.log(performMerge(arr1, arr2))
}

const performMerge = (arr1, arr2) => {
    let [i, j] = [0, 0];
    let mergedArr = [];

    while (i < arr1.length && j < arr1.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i])
            i++
        } else {
            mergedArr.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        mergedArr.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        mergedArr.push(arr2[j])
        j++
    }

    return mergedArr.join(' ')
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`4
1 5 7 9
2 4 6 8`);
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