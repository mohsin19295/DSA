/*
? SNE Right

Andy and Mark are playing a game of arrays. The game involves finding the smallest neighbor element to the right side for each element in the array. Andy counts the number of elements which do not have a smaller neighbor element to the right side. Help Andy find the count.

*Input Format:
First line contains an integer N denoting the number of elements in the array (not necessarily distinct).
Second line contains N space separated integers denoting the elements of the array.

*Constraints:
N <= 100000

*Output Format:
Print a single integer denoting the number of elements which do not have a smaller neighbor element to the right side

*Input:
5
4 2 1 3 7

*Output:
3

*HINT:
The element at index 2, 3 and 4, do not have a value smaller to the right side. Therefore, the answer is 3.
*/

function runProgram(input) {
    input = input.split('\n')
    const n = +input[0]
    const arr = input[1].split(' ').map(Number)
    console.log(checkSmallerElements(arr, n))
}

const checkSmallerElements = (arr, n) => {
    let count = 1;
    for (let i = 0; i < n - 1; i++) {
        let hasSmaller = false;

        for (let j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                hasSmaller = true;
                break;
            }
        }
        if (!hasSmaller) count++
    }

    return count;
}
if (process.env.USERNAME === "ubuntu") {
    runProgram(`5
4 2 1 3 7`);
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