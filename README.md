# Project: Recursion (The Odin Project: JavaScript Course)

Included are two different assignments that are being solved using a recursive approach.

## Fibonacci Sequence

Both functions, "fibs" and "fibsRec", receive a parameter that tells them how many numbers from the fibonacci sequence should be inserted into the results array.
The first function "fibs" uses an iterative approach, "fibsRec" instead tackles the problem recursively.

## Merge Sort

The unsorted array is broken down, until it only contains one element. An array with one element is sorted by default. If base case is hit, on the way up, three loops are called into action. The while loop compares the values returned from recursive calls and puts them sorted into the result array. Two for loops at the end make sure that if an array is still not empty, all existing values are also copied into the results array.

## Run

`node fibs.js`<br>
`node mergeSort.js`
