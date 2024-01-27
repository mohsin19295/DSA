/*
? Language Of School

You are given a string stored in a variable with the name str
Also, the length of the string is stored in a variable with the name N
You have to modify the string, such that if the first character of the string is a vowel, then add hulk at the end of the string
Else if the first character of the string is a consonant, then add thor to the end of the string

For example, consider the value stored in N = 5 , and str = abced
Now, since the first character of the string is a vowel, therefore, we add hulk to the end of the string
Therefore, the string becomes abcedhulk, which is the required output

Note: The string contains only lowercase characters

*Input Format:
The first line of the input contains N, the length of the string
The next line contains the value stored in str

*Output Format:
Print the modified string as explained in the problem statement

Input: 5
abced
Output: abcedhulk
*/

function runProgram(input) {
    input = input.split('\n')
    const [n, str] = [+input[0], input[1]]

    console.log(['a', 'e', 'i', 'o', 'u'].includes(str[0]) ? `${str}hulk` : `${str}thor`)
}
if (process.env.USERNAME === "ubuntu") {
    runProgram(`5
abced`);
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