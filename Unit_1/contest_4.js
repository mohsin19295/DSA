/*
? Small and Largest of all

Given an array which has N integers. You need to print smallest and largest element present in the array each on the new lines.

Input: 4
-2 0 8 4

Output: -2
8
*/

const [n, arr] = [4, [-2, 0, 8, 4]]

console.log(Math.min(...arr) + '\n' + Math.max(...arr));


/*
? Average of all

You are given an array which has N integers. Write a program to print the ceil of 'average of integers' pregent in the array.

NOTE: The ceil value of the given whole number k is the smallest integer value greater or equal to a k.

For example:

If the value of K = 3.679, the ceil value of K is 4.
If the value of K = 5, the ceil value of K is 5.

Input: 4
2 5 0 9

Output: 4
*/

const [n1, arr1] = [4, [2, 5, 0, 9]]

console.log(Math.ceil(arr1.reduce((a, c) => a + c, 0) / n1))


/*
? Battle of Odd and Even

You are given an array which has N integers. You need to print 'Odd', if the sum of all odd numbers present in the array is greater then sum of all even numbers present in the array, or else print 'Even'

Input:4
1 2 3 4

Output: Even
*/

const [n2, arr2] = [4, [1, 2, 3, 4]]

console.log(arr2.filter(e => e % 2 === 1).reduce((a, c) => a+c, 0) > arr2.filter(e => e % 2 === 0).reduce((a, c) => a+c, 0) ? 'Odd' : 'Even')