/*
? Print Array

You are given an array, whose size is stored in a variable of size n

The array is stored in a variable with the name, arr

You have to traverse the array, and print each element on a new line

Input: [1, 2, 3, 4, 5]
Output: 1
2
3
4
5
*/

const arr = [1, 2, 3, 4, 5]

arr.forEach(e => console.log(e))


/*
? Reverse Array Traversal

You are given an array, stored in a variable with the name array

You have to print the reverse traversal of the array

Input: [1, 2, 3, 4, 5]
Ouput: [5, 4, 3, 2, 1]
*/

const array = [1, 2, 3, 4, 5]

console.log(array.reverse())

/*
? Maximum in array

You are given an array, stored in a variable with the size arr

The size of the array is stored in a variable with the name n

You have to find the maximum number in the array

Input: 5
1 2 3 4 5
Output: 5
*/

const [n, Arr] = [5, [1, 2, 3, 4, 5]]

console.log(Math.max(...Arr))



/*
? Minimum in array

You are given an array, stored in a variable with the size arr

The size of the array is stored in a variable with the name n

You have to find the maximum number in the array

Input: 5
1 2 3 4 5
Output: 1
*/

const [N, Array] = [5, [1, 2, 3, 4, 5]]

console.log(Math.min(...Array))



/*
? Even Array

You are given an array, stored in a variable With the size arr

The size of the array is stored in a variable with the name n

You have to traverse the array, and print only the even elements in the array.

Print each number on a new line

For example, consider the array as arr = [1 2 3 4 5], and the value stored in n = 5

Then, the required output will be:
2
4

*/

const [n1, Arr1] = [5, [1, 2, 3, 4, 5]]

Arr1.forEach(e => {
    e % 2 === 0 ? console.log(e) : null
})



/*
? Odd Array

You are given an array, stored in a variable With the size arr

The size of the array is stored in a variable with the name n

You have to traverse the array, and print only the odd elements in the array.

Print each number on a new line

For example, consider the array as arr = [1 2 3 4 5], and the value stored in n = 5

Then, the required output will be:
1
3
5
*/

const [N1, Array1] = [5, [1, 2, 3, 4, 5]]

Array1.forEach(e => {
    e % 2 === 1 ? console.log(e) : null
})