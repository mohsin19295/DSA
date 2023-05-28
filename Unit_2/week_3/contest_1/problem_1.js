/*
? World Cup Final

You are given 3 parameters of two different cricket teams in World Cup Final.
First parameter: Score
Second parameter: Score in super over
Third parameter: Total number of fours scored in the inning.
If first parameter of any one team is greater than other then that team wins.
If first parameter of both the teams are same, then the team whose second parameter is greater wins the match.
In case the second parameter is also same, then the team that has higher value of third parameter wins the game.

*Input Format:
First line contains the three discussed parameter for New Zealand
Second line contains three discussed parameters for England

*Output Format:
Output "England" (without quotes) if England wins the game, else print "New Zealand" if New Zealand wins the game.


Input: 241 15 21
241 15 26

Output: England
*/

function runProgram(input) {
  input = input.split('\n')

  const NZ = input[0].split(' ').map(Number)
    const ENG = input[1].split(' ').map(Number)
    
   console.log(checkWinner(NZ, ENG))
}

const checkWinner = (NZ, ENG) => {
    for (let i = 0; i < NZ.length; i++){
        if (NZ[0] > ENG[0]) return 'New Zealand'
        if (NZ[0] < ENG[0]) return 'England'

        if (NZ[1] > ENG[1]) return 'New Zealand'
        if (NZ[1] < ENG[1]) return 'England'

        if (NZ[2] > ENG[2]) return 'New Zealand'
        if (NZ[2] < ENG[2]) return 'England'
    }
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`241 15 21
241 15 26`);
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