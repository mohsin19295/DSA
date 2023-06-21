/*
? Medicine of life

The vaccine for corona virus is in short supply, therefore, the Scientists at the University of Masai, came up with certain number of chemical compounds which on combining can make an alternative medicine for Corona Virus. 

But, all these chemical compounds have different reactive power, and for the vaccine to be effective, two chemical compounds need to be mixed such that the sum of total reactivity of the two compounds is equal to K.

The compounds are kept strictly increasing order of their reactivity. You have to find out if there are two compounds whose combine reactivity is equal to K or not.

*Input Format:
The first line of the input contains T, the number of test cases.
The first line of each test case, contains N, the number of compounds, and k is the required reactivity
The next line contains N space separated integers, indicating the reactivity of individual compounds

1 <= T <= 10
2 <= N <= 1000, 2 <= B <= 3*10^5
1 <= Ai <= 10^5

*Output Format:
For each test case, print Possible, if there are two compounds for whom the sum of individual reactivity is K, else print Impossible, on a new line.

Input: 2
5 7
1 2 3 4 5
5 12
1 2 3 4 5

Output: Possible
Impossible
*/

function runProgram(input) {
  input = input.split("\n");

  const test = +input[0];
  let line = 1;

  for (let i = 1; i <= test; i++) {
    const [n, k] = input[line++].split(" ").map(Number);
    let arr = input[line++].split(" ").map(Number);

    console.log(countOfPairs(arr, n, k));
  }
}

const countOfPairs = (arr, n, k) => {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === k) return "Possible";
    }
  }
  return "Impossible";
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`2
5 7
1 2 3 4 5
5 12
1 2 3 4 5`);
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
