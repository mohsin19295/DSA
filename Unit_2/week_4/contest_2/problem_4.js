/*
? Make LeaderBoard

You are given name and marks of N different students in a hackerrank contest. Your task is to write a program that makes leaderboard of the students under following conditions:

If two students get same marks they get same rank
The student placed next to the same marks students will get the rank skipping the intermediate ranks.
Refer to the sample test case for better understanding

Note: You cannot use built-in sort function. Using that can lead to disqualification. Write your own sorting algorithm

*Input Format:
First line of input contains N
Next N line contains name and marks respectively of N different students (where name and marks is separated by a space)

Constraints:
N < 100

*Output Format:
Output N names with their rank. Follow these rules for generating the list:

1. The students having more mark gets better rank
2. If students have similar mark, their rank will be same (In case of similar marks, the person whose name comes first in alphabetical order comes first in order. However their rank will be same)
3. The student placed next to the same marks students will get the rank skipping the intermediate ranks.

Input: 6
rancho 45
chatur 32
raju 30
farhan 28
virus 32
joy 45

Output: 1 joy
1 rancho
3 chatur
3 virus
5 raju
6 farhan
*/

function runProgram(input) {
  input = input.split('\n')
    const n = +input[0]
    let arr = []
  
    for (let i = 1; i <= n; i++){
        const [name, marks] = input[i].split(' ')
        let obj = { name, marks: +marks }
        arr.push(obj)
    }

    let flag = false;
    while (!flag) {
        flag = true
        for (let i = 0; i < n -1; i++){
            if (arr[i].marks < arr[i + 1].marks || (arr[i].marks === arr[i + 1].marks && arr[i].name > arr[i + 1].name)) {
               [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
                flag = false
            }
        }
    }
   
    let currentRank = 1;
    let currentMarks = arr[0].marks;

    for (let i = 0; i < n; i++){
        let { name, marks } = arr[i];
        
        if (currentMarks !== marks) {
            currentRank = i + 1;
            currentMarks = marks;
        }

        console.log(currentRank.toString(), name)
    }

}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`6
rancho 45
chatur 32
raju 30
farhan 28
virus 32
joy 45`);
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