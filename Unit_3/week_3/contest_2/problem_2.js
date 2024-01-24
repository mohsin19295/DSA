/*
? Remove Duplicates

Given a string s, recursively remove adjacent duplicate characters from the string s. The output string should not have any adjacent duplicates. If string becomes empty after removing duplicates print "Empty String" else print the output string.

*Input Format:
The first line of input contains an integer T, denoting the no of test cases. Then T test cases follow. Each test case contains a string S.

*Constraints:
1<=T<=100
1<=Length of string<=50

*Output Format:
For each test case, print a new line containing the resulting string.

Input: 4
azxxxzy
caaabbbaac
gghhg
aaaacddddcappp

Output: ay
Empty String
g
a

*HINT:
azxxxzy => azzy => ay
caaabbbaac =>cc=> Empty String
gghhg => g
aaaacddddcappp=>cca => a
*/


function runProgram(input) {
    input = input.split('\n')
    const n = +input[0]
    let line = 1;

    for (let i = 1; i <= n; i++) {
        let str = input[line++]
        console.log(removeDuplicates(str))
    }
}

const removeDuplicates = (str) => {
    let n = str.length;
    if (n === 0) return 'Empty String'
    if (n === 1) return str;
    let res = ''

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            if (str.charAt(i) !== str.charAt(i + 1)) res += str.charAt(i)
        } else if (i === n - 1) {
            if (str.charAt(n - 1) !== str.charAt(n - 2)) res += str.charAt(i)
        } else {
            if (str.charAt(i) !== str.charAt(i + 1) && str.charAt(i) !== str.charAt(i - 1)) res += str.charAt(i)
        }
    }
    if (res.length === n) return res
    return removeDuplicates(res)
}
if (process.env.USERNAME === "ubuntu") {
    runProgram(`4
azxxxzy
caaabbbaac
gghhg
aaaacddddcappp`);
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