/*
? String Value!

Given a string S of all lowercase letters and each letter has a value of its own

The value of the alphabet a is 1, b is 2,c is 3 .... till z is 26

Now you have to find the total value of the given string. The total value of a string is the sum of
values of all characters present in string.

Input: aba
Output: 4

Input: javascript
Output: 119
*/

const S = "javascript";

console.log(
  S.split("")
    .map((e) => e.charCodeAt() - 96)
    .reduce((a, c) => a + c, 0)
);

/*
? Count such pairs

You are given an array A of N integers along with a target integer K

Your task is to find out the number of pairs of integers present in the array, whose sum is equal to the target value K.

Input: 5 9
3 0 6 2 7
Outpu: 2
*/

function countSuchPairs(N, K, A) {
  let count = 0;
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      if (A[i] + A[j] === K) count++;
    }
  }
  return count;
}

console.log(countSuchPairs(5, 9, [3, 0, 6, 2, 7]));

/*
? Intersection of Array

You are given 2 arrays arr1 and arr2 of N integers.

Your task is to write a program that finds the one integer which is common in both arrays ( arr1 and arr2).

Note: There is always one integer common in both arrays.

Input: 3
4 5 7
9 2 5
Output: 5
*/

function intersectionOfArray(N, arr1, arr2) {
  console.log(...arr1.filter((num) => arr2.includes(num)));
}

intersectionOfArray(3, [4, 5, 7], [9, 2, 5]);
