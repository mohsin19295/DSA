/*
? World Test Championship

India & Australia just finished a Test Series, which was part of the inaugural world test championship. The points earned by the two teams are stored in the variable with the name IndPointS, AusPoints respectively.

You are also given the matches played by the two teams, stored in variables with the names IndMatches, AusMatches respectively.

Now, you have to print the winner between the two teams based on the following conditions

If the points scored by India are greater than the points scored by Australia, print "India", without quotes

If the points scored by Australa are greater than the points scored by India, print "Australia, without quotes

If the points of the two teams are same, and India has played lesser matches then Australia, print "India", without quotes

IT the points or the two teams are same, and Australia has played lesser matches then India, print "Australia", without quotes

If the points of the two teams are same, and the number of matches played by the two teams are also same, then print "Play another game!", without quotes

Input:580
500
12 
10
Output: India

Input: 500
500
12 
12
Output: Play another game!
*/

function worldTestChampion(IndPoints, AusPoints, IndMatches, AusMatches) {
    console.log(IndPoints > AusPoints ? 'India' : IndPoints < AusPoints ? 'Australia' : IndMatches < AusMatches ? 'India' : IndMatches > AusMatches ? 'Australia' : 'Play another game!');
}
  
worldTestChampion(500, 500, 12, 12)


/*
? Nice Array II

You are given an array, stored in a variable with the name array

The size of the array is stored in a variable with the name N

You are also given another number stored in a variable with the name K

Print the output according to the following conditions

If the count of odd elements in the array is greater than the value stored in K, print "Nice Array", without quotes

Else, print "Bad Array", without quotes

Input:5
1 2 3 4 5
2
Output: Nice Array

Input: 5
1 2 3 4 5
3
Output: Bad Array
*/

function niceArrayII(N, array, K) {
    console.log(array.filter(e => e % 2 == 1).length > K ? "Nice Array" : "Bad Array") 
}
  
niceArrayII(5, [1, 2, 3, 4, 5], 3)


/*
? Even Array Traversal Modified

You are given an array of N integers. Print all the pairs of indexes, and values stored at that positions, in the array, where the even numbered positions hold even values.

Note : Consider that the indexing in the array starts from 0. The values must be printed in the order in which they arrive in the array.

The value of N is stored in a variable with the name N

The array is stored in a variable with the name arr

Input: 5
2 1 4 3 5
Output: 0 2
2 4
*/

function evenArrayTraversalModified(N, arr) {
    arr.forEach((e, i) => {
        i % 2 === 0 && e % 2 === 0 ? console.log(i, e) : null
    })
}

evenArrayTraversalModified(5, [2, 1, 4, 3, 5])
  
