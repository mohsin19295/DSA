/*
? Say Hello

You are given a variable name with the name, 'name' containing the nme of the person. You have to print the name of the person as the output along will 'Hello'. 

For example, the value stored in name = Mohsin, then the required output will be 'Hello Mohsin'

Input: Mohsin
Output: Hello Mohsin
*/

const name = 'Mohsin'

console.log(`Hello ${name}`)

/*
? Second Maximum

You are given three numbers stored in the variables with the following names: a, b, c. You have to find the second largest number out of a, b, c. 

For example, consider the value stored in a = 3, b = 7, c = 5, then the required output will be c = 5.

Input: 3 7 5
Output: 5
*/

const [a, b, c] = [3, 7, 5]

console.log(((a > b || a > c) && (a < b || a < c)) ? a : ((b > c || b > a) && (b < c || b < a)) ? b : c);


/*
? Dots and Dashes

You are given a number stored in a variable with the name N. Print the required pattern, such that for all numbers in the range [1, N] including N, if the number is odd, print a single dash(_), else print N starts(*) without space on a new line.

Input: 5
Output:
_
******
_
******
_
*/

const N = 5;

for (let i = 1; i <= N; i++) { 
    let res = ''
    if (i % 2 === 1) {
            res = '_'
    } else {
        for (let j = 1; j <= N; j++){
            res+='*'
        }
    }
    console.log(res)
}