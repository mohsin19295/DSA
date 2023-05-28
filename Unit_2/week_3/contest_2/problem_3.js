/*
? A football tournament

Masai School had hosted a Football tournament. You got hold of a profound description of the final match's process. On the whole, there are n lines in that description each of which described one goal. Every goal was marked with the name of the team that had scored it. Write a program to find the name of the team that won the finals. It is guaranteed that the match did not end in a tie.


*Input Format:
The first line contains an integer n- the number of lines in the description.
Then follow n lines - for each goal the names of the teams that scored it.

Constraints
1<=n<=100
The names are non-empty lines consisting of uppercase letters whose lengths do not exceed 10 symbols. It is guaranteed that the match did not end in a tie and the description contains no more than two different teams.

*Output Format:
Print the name of the winning team. We remind you that in football the team that scores more goals is considered the winner.

Input: 5
A
ABA
ABA
A
A

Output: A
*/

function runProgram(input) {
  input = input.split("\n");
  const n = +input[0];

  let teams = [];
  for (let i = 1; i <= n; i++) {
    teams.push(input[i]);
  }

  let data = {};
  for (let i = 0; i < teams.length; i++) {
    let k = teams[i];
    if (data[k]) data[k] += 1;
    else data[k] = 1;
  }
  for (let key in data) {
    if (data[key] == Math.max(...Object.values(data))) console.log(key);
  }
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`5
A
ABA
ABA
A
A`);
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
