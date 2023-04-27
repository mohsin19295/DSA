/*
? Result or Tie - Tic Tac Toe

You are given a 3 * 3 matrix (2d-array) that represents the final situation of a Tic Tac Toe.

Your task is to write a program that finds out the winner in case the match ended in a win. If the winner is 'X', print x. If the winner is 'o', print o. In case the match ended in a tie, print Tie.

*Input*

*InputFormat_
The input contains 3 lines where each line has 3 space separated characters which represent the final status of tic tac toe

*Constraints_
The input contains either of the 2 alphabets: 'x' and 'o'

*Output*
Print Tie/x/o depending on the end result of the game.
*/

function runProgram(input) {
  input = input.split('\n')
  let mat = []

  for (let i = 0; i < input.length; i++){
    mat.push(input[i].split(' '))
  }
  
console.log(checkFun(mat))
  
}


const checkFun = (mat) => {
  let leftDiagonal = []
  let rightDiagonal = []
  
  for (let i = 0; i < mat.length; i++) { 
     horizontal = []
     vertical = []
    for (let j = 0; j < mat.length; j++){
      horizontal.push(mat[i][j])
      vertical.push(mat[j][i])
      if (i === j) {
        leftDiagonal.push(mat[i][j])
      }
      if (i + j === mat.length - 1) { 
        rightDiagonal.push(mat[i][j])
      }
    }

    if (vertical.every(e => e === 'x') || horizontal.every(e => e === 'x')) return 'x'
    
    if (vertical.every(e => e === 'o') || horizontal.every(e => e === 'o')) return 'o'
  }

  if (leftDiagonal.every(e => e === 'x') || rightDiagonal.every(e => e === 'x')) return 'x'

 if (leftDiagonal.every(e => e === 'o') || rightDiagonal.every(e => e === 'o')) return 'o'

  return 'Tie'
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`x o x
o x x
o o o`);
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