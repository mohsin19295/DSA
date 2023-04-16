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
    let res = 0
    for (let i = 0; i < N; i++)
        array[i] === 0 ? res += i + 1 : null;
    console.log(res)
}

encryptionSchemeII(5, [1, 0, 0, 1, 0])

