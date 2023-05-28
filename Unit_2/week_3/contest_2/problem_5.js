/*
? Exit the Grid

You are playing the famous Maze Runner Arcade Game. The game contains a maze which has values{L', 'R', 'U', 'D'}, where L -> indicates that you move left, R -> indicates that you move right, U -> indicates that you move up, while D-> indicates that you move down. The score is calculates as the number of moves in which you exit the grid. If you cannot exit the grid, that means your score should be returned as 0.

Given a square matrix, denoting the maze, write a program to calculate the score.
Note: You will always enter that the maze through the position (0,0).

*Input Format:
The first line of the input contains T, the number of test cases.
The first line of each test case contains N, the size of the maze, given in the form of square matrix.
Next N lines contain N characters each, denoting in which direction to move.

Constraints
1 <= T <= 10
1 <= N <= 50

*Output Format:
For each test case, print the score, on a new line.


Input: 3
4 
RRRR
LLLL
UUUU
DDDD
3
LRL
UUU
DLR
2
RL
DD

Output: 4
1
0
*/



function runProgram(input) {
  input = input.split('\n')
    const test = +input[0]
    let line = 1

    for (let i = 1; i <= test; i++){
        let n = +input[line++]
        let mat = []
        for (let j = 0; j < n; j++){
            mat.push(input[line++].split(''))
        }
        console.log(exitTheGrid(n, mat))
    }
}

const exitTheGrid = (n, mat) => {
    let i = 0, j = 0, count = 0;
    while (count < n ** 2) {
        let point = mat[i][j]

        if (point == 'R') {
            j++;
            count++
            if (j == n) return count;
        }
        if (point == 'L') {
            j--;
            count++
            if (j == -1) return count;
        }
        if (point == 'D') {
            i++;
            count++

            if (i == n) return count;
        }
        if (point == 'U') {
            i--;
            count++
            if (i == -1) return count;
        }
    }
    return 0
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`3
4 
RRRR
LLLL
UUUU
DDDD
3
LRL
UUU
DLR
2
RL
DD`);
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