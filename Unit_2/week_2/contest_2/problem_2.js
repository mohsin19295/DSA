/*
? Matrix Traversal & Queries

You are given a matrix of size n x m, and two types of queries are to be performed on this matrix. The two types of queries are:

q = 1, for this type of query, the matrix is to be traversed, as shown in Fig. 1
q = 2, for this type of query, the matrix is to be traversed as shown in Fig. 2

! Refer the following figure for better understanding (fig_1.png & fig_2.png)

*Input Format:
The first line of input contains T, the number of test case. The first line of each test case contains n, m and q, as declared in the problem statement.
Next n lines contain space separated integers, denoting the values of the matrix.

*Output Format:
Print n x m space separated integers, denoting the elements of the matrix, on a new line.

Input: 2
3 3 1
1 2 3
4 5 6
7 8 9
3 3 2
1 2 3
4 5 6
7 8 9
*/

function runProgram(input) {
  input = input.split('\n')
  const test = +input[0]
    let line = 1;

    for (let i = 1; i <= test; i++){
        let [n, m, q] = input[line++].split(' ').map(Number)

        let mat = []
        for (let j = 0; j < n; j++){
            mat.push(input[line++].split(' '))
        }
        if (q == 1) {
            console.log(q1Spiral(n, m, mat))
        } else {
            console.log(q2Spiral(n, m, mat))
        }
    }
}

const q1Spiral = (n, m, mat) => {
    let arr = []
    for (let i = 0; i < n; i++){
        if (i % 2 == 0) {
            for (j = 0; j < m; j++){
                arr.push(mat[i][j])
            }
        } else {
            for (let j = m - 1; j >= 0; j--){
                arr.push(mat[i][j])
            }
        }
    }
    return arr.join(' ');
}
const q2Spiral = (n, m, mat) => {
    let arr = []
    for (let i = 0; i < n; i++){
        if (i % 2 == 1) {
            for (j = 0; j < m; j++){
                arr.push(mat[i][j])
            }
        } else {
            for (let j = m - 1; j >= 0; j--){
                arr.push(mat[i][j])
            }
        }
    }
    return arr.join(' ');
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`2
3 3 1
1 2 3
4 5 6
7 8 9
3 3 2
1 2 3
4 5 6
7 8 9`);
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