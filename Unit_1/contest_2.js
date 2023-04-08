/*
? Sum Related Problem

You are given a number N, you need to find sum of all the even numbers which are less than or equal to N.

Input: 4
Output: 6

Input: 3
Output: 2
*/

const n = 10;

console.log(
  new Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((e) => e % 2 == 0)
    .reduce((a, c) => a + c, 0)
);

/*
? Division Task

Let’s say you derive a variable X which is equal to the floor of a number you get when 32 is divided by N. 

In case X is 0, print 'Too Low'
In case it is not possible to generate a valid number, print '-1'
In all other cases, print X

Input: 4
Output: 8

Input: 3
Output: 10
*/

const N = 3;

console.log(N > 32 ? "Too Low" : N <= 0 ? -1 : Math.floor(32 / N));


/*
? Masai School! Hurray!

You are provided an integer N. For all numbers in the range [1, N], including N you have to print a string as per the following rules:

Print 'Masai School' if the number is a multiple of bith 5 and 7.
Print 'Masai', if the number is a multiple of 7 only.
Print 'School' if the number is a multiple of 5 only.
Else in all other cases print 'Hurray!'

Input: 7
Output: 
Hurray!
Hurray!
Hurray!
Hurray!
School
Hurray!
Masai
*/

const m = 7;

new Array(m).fill().forEach((_, e) => {
  e = e + 1;  console.log(e % 7 === 0 && e % 5 === 0 ? 'Masai School' : e % 7 === 0 ? "Masai" : e % 5 === 0 ? 'School' : 'Hurray!');
})
