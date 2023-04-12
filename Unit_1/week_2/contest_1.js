/*
? Catch that 420!

You are given an integer n. Your task is to find if the string 420 is present in it or not.

If 420 is present in it Print Caught or Print Escaped.

Input: 97420
Output: Caught
*/

function catch420(n) {
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    if (n[i] == 4 && n[i + 1] == 2 && n[i + 2] == 0) return "Caught";
  }
  return "Escaped";
}

console.log(catch420(97420));

/*
? Count consonants

You are give a string str

Your task is to write a program that counts the number of consonants (non-vowels characters) present in the string.

Input: mohammadmohsin
Output: 9
*/

const str = "mohammadmohsin";

console.log(
  str.length -
    str
      .split("")
      .filter(
        (e) => e === "a" || e === "e" || e === "i" || e === "o" || e === "u"
      ).length
);

/*
? Sentence reversal

You are give a string s

You need to write a program that reverses the order/sequence in which words are present in the sentence keeping the case of each character preserved (upper case character should remain upper and lower case character is lower case).

Input: A Transformation in education
Output: education in Transformation A
*/

const s = "A Transformation in education";

console.log(s.split(" ").reverse().join(" "));

/*
? Longest Increasing Subarray

Given an array arr of n integers.
You need to find out the length of the longest subarray which is strictly increasing i.e, every element is greater than it's the previous element in that subarray.

Input Details:
The first line of the input contains one integer t (1 <= t <= 10)-the number of test cases.
Then t test cases follow.
The first line of each test case contains a single integern(1 <= n <= 100)- the number of elements in the array A.
The second line of each test case contains n integers (1 <= Ai <= 100).

Output Details:
For each test case, print the answer The length of the longest subarray.


Input: 2
2
1 1
6
1 2 1 2 3 1

Output: 1
3
*/

function longestIncSubArr(n, arr) {
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < arr.length; j++) {
      let res = [];
      for (let k = i; k <= j; k++) {
        res.push(arr[k]);
      }

      const result = res.every((currentValue, index, array) => {
        if (index === 0) return true;
        return currentValue > array[index - 1];
      });

      if (result) {
        if (max < res.length) {
          max = res.length;
        }
      }
    }
  }
  return max;
}

console.log(longestIncSubArr(6, [1, 2, 1, 2, 3, 1]));
