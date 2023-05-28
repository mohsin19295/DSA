/*
? Bag of Letters

Alice is playing a game with his little brother Adam. Alice gives Adam, a string A , and along with it a bag which contains characters made up of clay are kept.
Adam has to make the string A, given to him by Alice, with the help of these characters in the bag. Find out if he can make the string or not.

Note: The string A and the bag, both contain only small case characters

*Input Format:
The first line of the input contains N, the number of characters in the bag.
The next line contains N characters, indicating the characters present in the bag.
The next line contains m characters indicating the length of the string A .
The next line contains the string itself.

Constraints
1 <= N, M <= 10^4

*Output Format:
For each test case, print Yes, if Adam can make the string using the characters in the bag, else print No

Input: 5
aabbc
3
abc

Output: Yes
*/

function runProgram(input) {
  input = input.split("\n");
  const [n, bag, m, str] = [+input[0], input[1], +input[2], input[3]];

  let bagData = allData(n, bag);
  let strData = allData(m, str);

  // check if the first object has all the keys present in the second object and if the corresponding values in the first object are greater than or equal to the values in the second object

  console.log(bagOfLetters(strData, bagData));

  function bagOfLetters(obj2, obj1) {
    for (let key in obj2) {
      if (!obj1.hasOwnProperty(key)) {
        return "No";
      }
      if (obj1[key] < obj2[key]) {
        return "No";
      }
    }
    return "Yes";
  }
}

const allData = (n, arr) => {
  let data = {};
  for (let i = 0; i < n; i++) {
    let k = arr[i];
    if (data[k]) data[k] += 1;
    else data[k] = 1;
  }
  return data;
};
if (process.env.USERNAME === "ubuntu") {
  runProgram(`5
aabbc
4
abcd`);
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
