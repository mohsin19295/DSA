/*
? Apply Basic Maths

You are given an array A with N elements. You are allowed to remove only one element, which makes the sum of all the remaining elements exactly divisible by 7.

Your task is to find the first index of smallest element that can be removed from array. If there is no answer print - 1 .

Input: 5
14 7 8 2 4
Output: 1

Both 14 and 7 are valid answers, but since 7 is the smallest, the required array index is 1.
*/

function applyBasicMaths(N,A){
    let min = Infinity

    for (let i = 0; i < A.length; i++){
        let sum = A.reduce((a, c) => a + c, 0);
        if ( (sum -A[i]) % 7 === 0) {
            if (A[i] < min) {
                min = A[i];
            }
        }
    }
    console.log(A.indexOf(min))
}

applyBasicMaths(5, [14, 8, 2, 4, 7])


/*
? Palindrome Substring

You are provided a string S.

Write a program that returns length of the longest palindromic substring of that string.

Input: thisracecarisgood
Output: 7

The given string contains a palindromic substring which is, "racecar" and it is of largest length (7) among all other palindromic substrings. Hence the output is 7.
*/

function palindromeSubString(S) {
    let max = 0
    for (let i = 0; i < S.length; i++){
        for (let j = i; j < S.length; j++){
            let res = ''
            for (let k = i; k <= j; k++){
                res+=S[k]
            }
            if (res === res.split('').reverse().join('')) {
                if (max < res.length) {
                    max = res.length;
                }
            }
        }
    }
    console.log(max)
}

palindromeSubString('thisracecarisgood')


/*
? Identify Prime

• You are given a number stored in a variable with the name num

• Check if the number is a prime number or not

• If the value stored in num, is a prime number print Yes, else print No

Note: A prime number is a number, that is divisible by only 1 and the number itself

Input: 13
Output: Yes
*/

function identifyPrime(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) if (num % i === 0) count++
    console.log(count === 2 ? 'Yes' : 'No')
}

identifyPrime(13)