/*
? Detect Palindrome II

You are given a string S. Find if the string, can be converted into a palindrome.

You are free to rearrange the string in any way you want. Rearrangement refers to the fact that the characters can be arranged in any way in the string.

Deletion or addition of characters is not allowed.

*Input Format:
The first line contains T, the number of test cases.
The first line of each test case contains N, the length of the string.
The next line contains the string.

*Output Format:
If the string can be rearranged into a palindrome, print "Possible!", else print "Not Possible!".

Input:2
6
aabbcc
5
aabcd

Output: Possible!
Not Possible!
*/


function runProgram(input) {
  input = input.split('\n')
  const test = +input[0]
    let line = 1;

    for (let i = 1; i <= test; i++){
        let n = +input[line++]
        let str = input[line++]

        console.log(checkPairs(n, str))
    }
}

const checkPairs = (n, str) => {
    let data = {}
    for (let i = 0; i < n; i++){
        let k = str[i]
        if (data[k]) {
            data[k]+=1
        } else {
            data[k] = 1
        }
    }
    let count = 0
    for (let key in data){
        if (data[key] % 2 == 1) count++;
    }
    return count <= 1 ? "Possible!" : "Not Possible!"
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`2
6
aabbcc
5
aabcd`);
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