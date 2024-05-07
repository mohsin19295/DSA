/*
? Life of a CTO

Life of a CTO is a hard one. Same is the case with the CTO of Masai School, as he has to manage multiple products. To help him rejuvenate, the CEO of Masai School, sent him on a holiday for a month. After returning from the holiday, he found out that the N number of releases have been made for a new product. But he realizes that the product is buggy. As each new version of a product is built on an existing one, he wants to find the first buggy version of the product. The VP of Engineering, gives him the status of the versions in the form of an array of 1's and O's, where 0 indicates the product is bug-free and 1 indicates that the product is buggy. Since, the CTO has to look after a large number of products, he asks you to find the first buggy version of the product, and return its index in the array, or -1 if none of the versions of the product are buggy.

*Input Format:
The first line contains N, the number of version rolled out of the product. Next line contains N space separated integers including
1's and O's, where 1 indicates the a buggy version, and 0 indicates the version is bug-free.

*Output Format:
Print a single integer denoting, the index of the first buggy version, or -1 if no buggy version exists.

Input:5
0 0 0 1 1

Output: 3

Input: 5
0 0 0 0 0 

Output: -1

*HINT:
We need to find the first buggy version of the product

*Sample Input 1
arr = [0 0 0 1 1]
0 indicates No Bug, 1 indicates Bug
First Buggy Version of the product present at index 3, since arr[3] = 1
Thus, the output is 3

*Sample Input 2
arr = [0 0 0 0 0]
No Bug present.
Thus, the output is -1.
*/

function runProgram(input) {
    input = input.split('\n')
    const n = +input[0]
    const arr = input[1].split(' ').map(Number)

    console.log(arr.indexOf(1) ? arr.indexOf(1) : -1)
}
if (process.env.USERNAME === "ubuntu") {
    runProgram(`5
0 0 0 0 0`);
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