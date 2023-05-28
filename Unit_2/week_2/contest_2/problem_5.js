/*
? Three Max, Three Min Please

Given an array of N integers, print the 3 distinct maximum and 3 distinct minimum elements of the array.

*Input Format:
First line contains N
Second line contains N space separated integers which are elements of the array.
The values present in the array can be negative as well.

*Output Format:
In the first line, print the least 3 values (sorted) present in the array.
In the second line, print the top 3 values (sorted) present in the array.
In case there are not 3 min value, print "Not Possible" (without quotes).
In case there are not 3 max value, print "Not Possible" (without quotes).
So, according to the above statements, if both are not possible, you have to print "Not Possible" twice (once for each)
In the array, if you found out only 2 distinct min and 2 distinct max elements then also print Not Possible twice [one for minimum and other for maximum]

Input: 8
1 2 3 4 2 1 6 5

Output: 1 2 3
4 5 6
*/

function runProgram(input) {
  input = input.split("\n");
  const n = +input[0];
  let arr = input[1].split(" ").map(Number);

  let data = {};
  for (let i = 0; i < n; i++) {
    let k = arr[i];
    if (data[k]) data[k] += 1;
    else data[k] = 1;
  }

  let res = Object.keys(data).map(Number).sort((a, b) => a - b);
    
  if (res.length < 3) {
    console.log("Not Possible");
    console.log("Not Possible");
  } else {
    console.log(res.slice(0, 3).join(" "));
    console.log(res.slice(-3).join(" "));
  }
}
if (process.env.USERNAME === "ubuntu") {
  runProgram(`6
51 0 0 11 -11 23`);
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
