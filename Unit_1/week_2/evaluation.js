/*
? Encryption Scheme ||

• You are given an array stored in a variable with the name array, and the size of the array is stored in a variable with the name N

• Now, the array contains two types of numbers, o and 1

• You have to find the sum of indexes of all the elements in the array at which o is present. For this problem, consider that the indexing starts from 1

• For example, consider the value stored in N = 5, and arr = [0 1 1 1 1], then the sum index with value O is 1, which is the required output

Note : The array contain only 0s and 1s

Input: 5
1 0 0 1 0
Output: 10
*/

function encryptionSchemeII(N, array) {
  let res = 0;
  for (let i = 0; i < N; i++) array[i] === 0 ? (res += i + 1) : null;
  console.log(res);
}

encryptionSchemeII(5, [1, 0, 0, 1, 0]);

/*
? Varify Pal or Not

• You are given two strings stored in variables str1 and str2 respectively

• The length of both the strings is same, and stored in a variable with the name N

• You have to create a new string out of the two strings such that the new string is the concatenated string of str1 and str2

• Therefore, new_string = str1 + str2

• If new_string is a palindrome, print yes, else print no

• For example, consider the value stored in N = 3, and str1 = abc, and str2 = ba. Then, the value stored in new_string = abcca, which is a palindrome. Therefore, the output is yes

Note : Both the strings contain only lowercase English Alphabets

Input: 3
abc
def
Output: no

Input: 4
abba
abba
Output: yes
*/

function verifyPal(N, str1, str2) {
  const newStr = str1 + str2;

  console.log(newStr.split("").reverse().join("") === newStr ? "yes" : "no");
}

verifyPal(3, "abc", "def");

/*
? Pattern Printing III

• You are given a number stored in a variable with the name N

• You have to print the pattern as shown below according to the value stored in N

• For example, consider the value stored in N = 5, then the required pattern will be

* * * * * 
        *
        *
        *
* * * * *

Note : Please check for spaces
*/

function patternPrinting3(N) {
    for (let i = 0; i < N; i++){
        let res = ""
        for (let j = 0; j < N; j++){
            if (j === N - 1 || i === 0 || i === N - 1) {
                res+='* '
            } else {
                res+= "  "
            }
        }
        console.log(res)
    }
}

patternPrinting3(5);

/*
? Binary String 2

• You are given a string stored in a variable with the name str, whose length is stored in a variable with the name N

• The string is binary, which means it contains only 1's and O's

• You have to find the length of the longest substring which contains only 1's

• For example, consider the value stored in N = 4, and str = 1101

• All the non empty subarrays of the given string are

1
11
110
1101
1
10
101
01
1

• The longest substring containing only 1's is 11, therefore, the required output is 2  

Input:7
1000110
Output: 2
*/

function binaryString2(N, str) {
  let max = 0;
  if (!str.includes(1)) max = 0;
  else if (str == "1" || str.split("").filter((e) => e == 1).length == 1)
    max = 1;
  else {
    for (let i = 0; i < N; i++) {
      for (let j = i; j < N; j++) {
        let res = "";
        for (let k = i; k <= j; k++) {
          res += str[k];
        }
        if (res.split("").every((e) => e == 1)) {
          if (max < res.length) {
            max = res.length;
          }
        }
      }
    }
  }
  console.log(max);
}

binaryString2(7, "1000110");
