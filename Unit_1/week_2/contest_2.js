/*
? Detect Palindrome

You are given a integer num

You need to print Yes if that integer is a palindrome or else print No

A palindrome is a word, number, phrase, or other sequence of characters that reads the same backward as forward, such as madam or racecar.
*/

const num = 1221;

console.log(
  num.toString().split("").reverse().join("") === num.toString() ? "Yes" : "No"
);

/*
You are given a string s, you have to find the count of all such substrings which start and ends with the same character.

Input: abcab
Output: 7
*/

function subStrUnderCond(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let res = "";
      for (k = i; k <= j; k++) {
        res += s[k];
      }
      if (res[0] === res[res.length - 1]) count++;
    }
  }
  return count;
}
console.log(subStrUnderCond("abcab"));