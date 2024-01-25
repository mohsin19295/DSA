/*
? Qualifying Candidates

Recently Masai School organized a contest for admissions and thousand of candidates appeared for it. You are responsible for declaring the results out. Given an array, A of size n which contains the score of the n candidates who appeared for the test. You are also provided with a cutoff rank from Masai School up to which they would be taking candidates in their courses. Find the number of students who will be selected from this contest.

Note that candidates with equal scores will have equal ranks, but the candidate with the next lowest score will be ranked based on the position within the list of all candidates' scores.

For example, if there are five candidates, and four candidates tie for first place, their ranks would be 1,1,1,1 and 5.

*Input Format:
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.
The first line of each test case contains 2 integers n and k (1 ≤ n ≤ 100000, 1 ≤ k ≤ n) — the number of candidates and the cutoff rank.
The second line of each test case contains n integers (1 ≤ Ai ≤ 100) - The elements of the array A.

*Output Format:
For each test case, print the answer: The number of candidates selected.

Input: 1
5 3
2 2 2 2 1
Output: 4

*HINT:
In this example, there are 5 candidates with scores [2, 2, 2, 2, 1]. After sorting the scores in descending order, the ranks become [1, 1, 1, 1, 5]. The cutoff rank is 3. Therefore, 4 candidates with ranks 1, 1, 1, and 1 are selected.
*/

function runProgram(input) {
  input = input.split('\n')
  const test = +input[0]
  let line = 1

  for (let i = 1; i <= test; i++) {
    const [n, k] = input[line++].split(' ').map(Number)
    const scores = input[line++].split(' ').map(Number)

    console.log(findCandidates(n, k, scores))
  }
}

const findCandidates = (n, k, scores) => {
  const modifiedScores = scores.map((score, index) => ({ score, index }));
  modifiedScores.sort((a, b) => b.score - a.score);

  let [currentRank, qualifiedCandidates] = [1, 0];
  modifiedScores[0].rank = currentRank;

  for (let i = 1; i < n; i++) {
    if (modifiedScores[i].score !== modifiedScores[i - 1].score) {
      currentRank = i + 1;
    }
    modifiedScores[i].rank = currentRank;
  }

  for (let i = 0; i < n; i++) {
    if (modifiedScores[i].rank <= k) {
      qualifiedCandidates++;
    }
  }
  return qualifiedCandidates
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`1
5 3
2 2 2 2 1`);
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