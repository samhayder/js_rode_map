//01. Write a function to check whether an `input` is an array or not. Go to the editor
/* Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true */

//02. Write a JavaScript function to clone an array. Go to the editor
/* Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]] */

//03. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
/* Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[] */

//04. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. Go to the editor
/* Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2] */

//05. Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
/* Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black" */

//06. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8. Go to the editor

//07. Write a JavaScript program to sort the items of an array. Go to the editor
/* Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8 */

//08. Write a JavaScript program to find the most frequent item of an array. Go to the editor
/* Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times ) */

//09. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'. Go to the editor

//10. Write a JavaScript program which prints the elements of the following array. Go to the editor
/* Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"
------
------ */

//11. Write a JavaScript program to find the sum of squares of a numeric vector. Go to the editor

//12. Write a JavaScript program to compute the sum and product of an array of integers. Go to the editor

//13. Write a JavaScript program to add items in an blank array and display the items. Go to the editor
/* Sample Screen :
add elements in an blank array */

//14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity). Go to the editor

//15. We have the following arrays : Go to the editor
/* color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
- - - - - - - - - - - - -
Note : Use ordinal numbers to tell their position. */

//16. Write a JavaScript program to find the leap years in a given range of years. Go to the editor

//17. Write a JavaScript program to shuffle an array. Go to the editor

//18. Write a JavaScript program to perform a binary search. Go to the editor
/* Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
Sample array :
var items = [1, 2, 3, 4, 5, 7, 8, 9];
Expected Output :
console.log(binary_Search(items, 1)); //0
console.log(binary_Search(items, 5)); //4 */

//19. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. Go to the editor
/* Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13] */

//20. Write a JavaScript program to find duplicate values in a JavaScript array. Go to the editor

//21. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level. Go to the editor
/* Sample Data :
console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
[1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
[1, 2, 3, [[4]], 5, 6] */

//22. Write a JavaScript program to compute the union of two arrays. Go to the editor
/* Sample Data :
console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100] */

//23. Write a JavaScript function to find the difference of two arrays. Go to the editor
/* Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
["6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"] */

//24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array. Go to the editor
/* Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47] */

//25. Write a JavaScript function to sort the following array of objects by title value. Go to the editor
/* Sample object :

var library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

Expected result :

[[object Object] {
  author: "Suzanne Collins",
  libraryID: 3245,
  title:"Mockingjay:The Final Book of The Hunger Games"
}, [object Object] {
  author: "Bill Gates",
  libraryID: 1254,
  title: "The Road Ahead"
}, [object Object] {
  author: "Steve Jobs",
  libraryID: 4264,
  title: "Walter Isaacson"
}] */

//26. Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number. Go to the editor

/* Input: numbers= [10,20,10,40,50,60,70], target=50
Output: 2, 3 */


//27. Write a JavaScript function to retrieve the value of a given property from all elements in an array. Go to the editor
/* Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47] */

//28. Write a JavaScript function to find the longest common starting substring in a set of strings. Go to the editor

/* Sample array : console.log(longest_common_starting_substring(['go', 'google']));
Expected result : "go" */


//29. Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds. Go to the editor

/* Test Data :
console.log(num_string_range('a', "z", 2));
["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"] */


//30. Write a JavaScript function to merge two arrays and removes all duplicates elements. Go to the editor

/* Test data :
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));
[3, 2, 30, 1] */


//31. Write a JavaScript function to remove a specific element from an array. Go to the editor

/* Test data :
console.log(remove_array_element([2, 5, 9, 6], 5));
[2, 9, 6] */

//32. Write a JavaScript function to find an array contains a specific element. Go to the editor

/* Test data :
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));
[True] */

//33. Write a JavaScript script to empty an array keeping the original. Go to the editor


//34. Write a JavaScript function to get nth largest element from an unsorted array. Go to the editor

/* Test Data :
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
89 */


//35. Write a JavaScript function to get a random item from an array. Go to the editor


//36. Write a JavaScript function to create a specified number of elements with pre-filled numeric value array. Go to the editor

/* Test Data :
console.log(array_filled(6, 0));
[0, 0, 0, 0, 0, 0]
console.log(array_filled(4, 11));
[11, 11, 11, 11] */

//37. Write a JavaScript function to create a specified number of elements with pre-filled string value array. Go to the editor

/* Test Data :
console.log(array_filled(3, 'default value'));
["default value", "default value", "default value"]
console.log(array_filled(4, 'password'));
["password", "password", "password", "password"] */

//38. Write a JavaScript function to move an array element from one position to another. Go to the editor

/* Test Data :
console.log(move([10, 20, 30, 40, 50], 0, 2));
[20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], -1, -2));
[10, 20, 30, 50, 40] */

//39. Write a JavaScript function to filter false, null, 0 and blank values from an array. Go to the editor

/* Test Data :
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
[58, "abcd", true] */

//40. Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position. Go to the editor

/* Test Data :
console.log(array_range(1, 4));
[1, 2, 3, 4]
console.log(array_range(-6, 4));
[-6, -5, -4, -3] */

//41. Write a JavaScript function to generate an array between two integers of 1 step length. Go to the editor

/* Test Data :
console.log(rangeBetwee(4, 7));
[4, 5, 6, 7]
console.log(rangeBetwee(-4, 7));
[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7] */

//42. Write a JavaScript function to find the unique elements from two arrays. Go to the editor

/* Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["1", "2", "3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
["1", "2", "3", "4", "5", "6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["1", "2", "3", "10", "100"] */

//43. Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip. Go to the editor

/* Test Data :
unzip([['a', 1, true], ['b', 2, false]])
unzip([['a', 1, true], ['b', 2]])
Expected Output:
[["a","b"],[1,2],[true,false]]
[["a","b"],[1,2],[true]] */

//44. Write a JavaScript function to create an object from an array, using the specified key and excluding it from each value. Go to the editor

/* Test Data :
indexOn([ { id: 10, name: 'apple' }, { id: 20, name: 'orange' } ], x => x.id)
Expected Output:
{"undefined":{"id":20,"name":"orange"}} */

//45. Write a JavaScript program to find all unique values in an given array of numbers. Go to the editor

/* Test Data :
[1, 2, 2, 3, 4, 4, 5]
[1, 2, 3, 4, 5]
[1, -2, -2, 3, 4, -5, -6, -5]
Expected Output:
[1,2,3,4,5]
[1,2,3,4,5]
[1,-2,3,4,-5,-6] */

//46. Write a JavaScript program to generate all permutations of an array's elements (contains duplicates). Go to the editor

/* Test Data :
[1, 33, 5]
[1, 3, 5, 7]
[2, 4]
Expected Output:
[[1,33,5],[1,5,33],[33,1,5],[33,5,1],[5,1,33],[5,33,1]]
[[1,3,5,7],[1,3,7,5],[1,5,3,7],[1,5,7,3],[1,7,3,5],[1,7,5,3],[3,1,5,7],[3,1,7,5],[3,5,1,7],[3,5,7,1],[3,7,1,5],[3,7,5,1],[5,1,3,7],[5,1,7,3],[5,3,1,7],[5,3,7,1],[5,7,1,3],[5,7,3,1],[7,1,3,5],[7,1,5,3],[7,3,1,5],[7,3,5,1],[7,5,1,3],[7,5,3,1]]
[[2,4],[4,2]] */

//47. Write a JavaScript program to remove all falsy values from an given object or array. Go to the editor

/* Test Data :
const obj = {
a: null,
b: false,
c: true,
d: 0,
e: 1,
f: '',
g: 'a',
h: [null, false, '', true, 1, 'a'],
i: { j: 0, k: false, l: 'a' }
Expected Output:
{"c":true,"e":1,"g":"a","h":[true,1,"a"],"i":{"l":"a"}} */

//48. Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true. Go to the editor

/* Test Data :
([2,3,5,7]) -> true
([2,3,5,7,8]) -> false
Expected Output:
Original array of integers: 2,3,5,7
In the said array check every numbers are prime or not! true
Original array of integers: 2,3,5,7,8
In the said array check every numbers are prime or not! false */

//49. Write a JavaScript program that takes an array of numbers and returns the third smallest number. Go to the editor

/* Test Data :
(2,3,5,7,1) -> 3
(2,3,0,5,7,8,-2,-4) -> 0
Expected Output:
Original array of numbers: 2,3,5,7,1
Third smallest number of the said array of numbers: 3
Original array of numbers: 2,3,0,5,7,8,-2,-4
Third smallest number of the said array of numbers: 0 */

//50. Write a JavaScript program that takes an array with mixed data type and calculate the sum of all numbers. Go to the editor

/* Test Data :
([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
([2, 3, 0, 5, 7, 8, true, false]) -> 25
Expected Output:
Original array: 2,11,3,a2,false,5,7,1
Sum all numbers of the said array: 18
Original array: 2,3,0,5,7,8,true,false
Sum all numbers of the said array: 25 */

//51. Write a JavaScript program to check if an array is a factor chain or not. Go to the editor

/* A factor chain is an array in which the previous element is a factor of the next consecutive element. The following is a factor chain:
[2, 4, 8, 16, 32] */
// 2 is a factor of 4
// 4 is a factor of 8
// 8 is a factor of 16
// 16 is a factor of 32

/* Test Data :
([2, 4, 8, 16, 32]) -> true
([2, 4, 16, 32, 64]) -> true
([2, 4, 16, 32, 68]) -> false
Expected Output:
Original array:
Check the said array is a factor chain or not?
true
Original array:
Check the said array is a factor chain or not?
true
Original array:
Check the said array is a factor chain or not?
false */

//52. Write a JavaScript program to get all the indexes where NaN is found of a given array of numbers and NaN. Go to the editor

/* Test Data :
([2, NaN, 8, 16, 32]) -> [1]
([2, 4, NaN, 16, 32, NaN]) -> [2,5]
([2, 4, 16, 32]) ->[]
Expected Output:
Original array: 2,NaN,8,16,32
Find all indexes of NaN of the said array: 1
Original array: 2,4,NaN,16,32,NaN
Find all indexes of NaN of the said array: 2,5
Original array: 2,4,16,32
Find all indexes of NaN of the said array: */

//53. Write a JavaScript program to count the number of arrays inside a given array. Go to the editor

/* Test Data :
([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3
Expected Output:
Number of arrays inside the said array: 2
Number of arrays inside the said array: 3  */











//01. Write a program to read and print elements of an array.

//02. Write a program to insert an element in an array.

//03.  Write a program to calculate the sum of 5 numbers using an array.

//04.	Write a program to calculate the sum of 5 numbers using an array (Numbers should be taken from the user).

//05.	Write a program to calculate the sum and average of N numbers using an array.

//06.	Write a program to find the maximum and minimum elements in an array.

//07.	Write a program to print the positive and negative numbers of an array.

//08.	Write a program to copy all elements from an array to another array.

//09.	Write a program to sort all the elements of an array and find the largest element from that array.

//10.	Write a program to find the largest element in an array.

//11.	Write a program to find the second largest element in an array.

//12.	Write a program to count the total number of negative, even, and odd numbers in an array.

//13.	Write a program to delete an element from an array at a specified position.

//14.	Write a program to count the frequency of each element in an array.

//15.	Write a program to print all unique elements in the array.

//16.	Write a program to count the total number of duplicate elements in an array.

//17.	Write a program to delete all duplicate elements from an array.

//18.	Write a program to merge two arrays to a third array.

//19.	Write a program to find the reverse of an array.

//20.	Write a program to put the even and odd elements of an array in two separate arrays.

//21.	Write a program to search for an element in an array.

//22.	Write a program to sort array elements in ascending or descending order.

//23.	Write a program to sort even and odd elements of an array separately.

//24.	Write a program to the left rotate an array.

//25.	Write a program to right rotate an array.

//26.	Suppose you have an Array with the size of 10. Your program will input all the array elements from the user. Now using a loop, traverse the array. During traversing, if the array contains an odd number in the odd index, take the odd value from that odd index from the array and make the summation of those numbers and replace that index value with 0. Print the summation and the array. The given sample is for your understanding. You must use your own sample.
/* Example:
Before the operation:
Index	1	2	3	4	5	6	7	8	9	10
Elements	1	3	6	5	7	9	11	8	3	8
After the operation:
Elements: 
Elements	0	3	6	5	0	9	0	8	0	8
Summation = 22 */

//27.	The scenario in front of any virtual Bank is like, Men and women standing in a single line. It looks so bad. Now separate men and women into different two line that looks like a gentle management system and develop the above program to find the majority of gender in the line.
/* M = male 
W = Women 
Disarranged line scenario is like - M M W W M M M M W M
M	M	W	W	M	M	M	M	W	M
After operation: 
M	M	M	M	M	M	M
W	W	W */

//28.	There’s a list of numbers in a row on the table. Your teacher is telling a number which is the addition of any of the two numbers from the given number list on the table. Your job is to find two numbers whose addition is equal to the number given by your teacher. If there’s no pair of numbers in a list that is equal to the given number by your teacher, then you will say “Sir, there’s no pair of numbers equal to your number” otherwise you will show that two numbers which addition is equal to the given number by your teacher. Write a program to solve the situation.

//29.	Suppose you have taken some values in an array of any size. For example, array1 = [5, 2, 3, 1, 9, 4]. Now your friend requests you to shift array values one cell to the right side (Right Shift). As per the request of your friend the array1 will be now [4, 5, 2, 3, 1, 9]. Now write a C program to satisfy the request of your friend by choosing an appropriate technique to shift the array values to the right. 
/* Note: The array values and size will be defined by user. Sample Input: 9 3 8 2 7 1
Sample Output: 1 9 3 8 2 7 */

//30.	Write a program to print a 2D Array or a matrix.

//31.	Write a program to take input from the user of a 2D Array or a matrix.

//32.	Write a program to add and subtract two matrices.

//33.	Write a program to perform Scalar matrix multiplication.

//34.	Write a program to check whether two matrices are equal or not and find the multiply of that two matrices.

//35.	Write a program to find the sum of main diagonal elements of a matrix.

//36.	Write a program to find the sum of minor diagonal elements of a matrix.

//37.	Write a program to find the sum of each row and column of a matrix.

//38.	Write a program to interchange diagonals of a matrix.

//39.	Write a program to find the upper triangular matrix.

//40.	Write a program to find a lower triangular matrix.

//41.	Write a program to find the sum of the upper and lower triangular matrix.

//42.	Write a program to find the transpose of a matrix.

//43.	Write a program to find the determinant of a matrix.

//44.	Write a program to check the Identity matrix.

//45.	Write a program to check Sparse matrices.

//46.	Write a program to check Symmetric matrices.