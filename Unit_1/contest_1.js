/*
You are provided the highest runs N, ever scored in a cricket match till now, which is current highest record.

You are also given current runs, M scored by Sachin Tendulkar in a today's match.

If Sachin breaks current record in that match, print 'Broken'.
If Sachin could not break that record, print 'Not Yet'.
If Sachin score exactly as current highest record, print 'Wao'.

Input: 240 200
Output: Not Yet
*/

const [n, m] = [240, 200]

console.log(m > n ? 'Broken' : m < n ? 'Not Yet' : 'Wao');


/*
You are given an array of N integers. You need to print 'Yes' if 42 is present in that array, else print 'No'.

Input: 5, [3, 7, 0, 9, 8]
Output: No
*/

const [size, arr] = [5, [3, 7, 0, 9, 8]]

console.log(arr.includes(42) ? 'Yes' : 'No');




