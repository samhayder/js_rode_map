//01. Write a to check whether an `input` is an array or not.
function isArray(input){
  return (typeof input === 'object') ? true : false;
}
console.log(isArray('w3resource'));
console.log(isArray([1, 2, 4, 0]));
/* => false */
/* => true */

//02. Write a function to clone an array.
function arrayClone(arr){
  //return arr.slice(1); //This is one type of solve
  const arr2 = [... arr];
  return arr2;
}
console.log(arrayClone([1, 2, 4, 0]));
console.log(arrayClone([1, 2, [4, 0]]));
/* => [1, 2, 4, 0] */
/* => [1, 2, [4, 0]] */

//03. Write a function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
function  getFirstElgOfArr(arr,arrPosition){
  if (!arrPosition || arrPosition < 0) return arr[0];

  return arr.slice(0,arrPosition);
}
console.log(getFirstElgOfArr([7, 9, 0, -2]));
console.log(getFirstElgOfArr([],3));
console.log(getFirstElgOfArr([7, 9, 0, -2],3));
console.log(getFirstElgOfArr([7, 9, 0, -2],6));
console.log(getFirstElgOfArr([7, 9, 0, -2],-3));
/* => 7 */
/* => [] */
/* => [7, 9, 0] */
/* => [7, 9, 0, -2] */
/* => [] */

//04. Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. 
function getLastElgOfArr(arr, arrPosition){
  if (!arrPosition || arrPosition < 0) return arr[arr.length - 1];

  return  arr.slice(Math.max(arr.length - arrPosition, 0));
}
console.log(getLastElgOfArr([7, 9, 0, -2]));
console.log(getLastElgOfArr([7, 9, 0, -2],3));
console.log(getLastElgOfArr([7, 9, 0, -2],6));
/* => -2 */
/* => [9, 0, -2] */
/* => [7, 9, 0, -2] */

//05. Write a simple program to join all elements of the following array into a string.
function joinArray(arr,separator){
  return !separator ? arr.join() : arr.join(separator);
}
console.log(joinArray(["Red", "Green", "White", "Black"]));
console.log(joinArray(["Red", "Green", "White", "Black"], ',' ));
console.log(joinArray(["Red", "Green", "White", "Black"], "+" ));
/* => "Red,Green,White,Black" */
/* => "Red,Green,White,Black" */
/* => "Red+Green+White+Black" */

//06. Write a program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.
function separateEvenNumber(str){
  str.toString().split('');
  let result = [];

  for (let i = 0; i < str.length; i++){
    if (str[i] % 2 === 0 && str[i-1] % 2 === 0){
      result.push('-', str[i])
    }else {
      result.push(str[i]);
    }
  }
  return result.join('');
}
console.log(separateEvenNumber('025468'));
console.log(separateEvenNumber('152028'));
/* => 0-254-6-8 */
/* => 152-0-2-8 */

//07. Write a program to sort the items of an array.
function sortNumberArray(arr){
  return arr.sort(function(min,max){return min-max});
}
console.log(sortNumberArray([ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]));
/* => [-4, 1, 2, 3, 3,5, 6, 7, 8] */

//08. Write a program to find the most frequent item of an array.
function mostFrequent(arr,searchItem){
  let filterArray = arr.filter(i => i === searchItem)
  return `${searchItem} ( ${filterArray.length} times)`
  
}
console.log(mostFrequent([3,3,3,3,3,2,3,2,4,9,3,'a'],3));
/* => 3 ( 7 times) */

//09. Write a program which accept a string as input and swap the case of each character.
function swapCharacter(str){
  //return str.split('').map( item => item == item.toUpperCase() ? item.toLocaleLowerCase() : item.toUpperCase() ).join('');

  return str.split('').map(item => item.match(/[A-Z]/g) ? item.toLowerCase() : item.toUpperCase() ).join('');
}
console.log(swapCharacter('The Quick Brown Fox'));
/* => 'tHE qUICK bROWN fOX' */

//10. Write a program which prints the elements of the following array.Note : Use nested for loops.
function nestedArray(arr){
  for (let i in arr){
    console.log("row " + i);

    for (let j in arr[i]){
      console.log(" " + arr[i][j]);
    }
  }
}
nestedArray( [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14]] )
/* "row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"
------
------ */

//11. Write a program to find the sum of squares of a numeric vector.
function sumOfSquareArray(arr){
  return arr.reduce((sum,item) => sum + Math.pow(item,2));
}
console.log(sumOfSquareArray([0,1,2,3,4]));
console.log(sumOfSquareArray([15,20,38,99]));
/* => 30 */
/* => 11660 */

//12. Write a program to compute the sum and product of an array of integers.
function productCompute(arr){
  let sum = arr.reduce((sum,product) => sum + product );
  let product = arr.reduce((sum,product) => sum * product);

  return `Sum: ${sum} & Product: ${product}`;
}
console.log(productCompute([1,2,3,4,5,6]));
/* => Sum: 21 & Product: 720 */

//*13. Write a program to add items in an blank array and display the items.

//14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
function removeDuplicateItem(arr){
  return arr.filter((value,index) => {
    return arr.indexOf(value) == index
  })
}
console.log(removeDuplicateItem([1, 1, 2, 2, "a", "a", "A", 3, 3]));
console.log(removeDuplicateItem(['a',1,'A',2,3,5,3,'a']));
/* => [ 1, 2, 'a', 'A', 3 ] */
/* => [ 'a', 1, 'A', 2, 3, 5 ] */

//15. Write a program to display, use ordinal numbers to tell their position.
function setOrdinalNumber(arr){
  const ordinal = ['th','st','nd','rd'];
  let counter = 1;
  let item = '';

  for (let i in arr){
    if (counter < 4){
      item += `${counter}${ordinal[i]} choice is ${arr[i]}. \n`;
      counter++;
    }else {
      item += `${counter}${ordinal[0]} choice is ${arr[i]}. \n`;
      counter++;
    }
  }
  return item;
  
}
console.log(setOrdinalNumber(["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"]));
/* 1th choice is Blue .
2st choice is Green.
3nd choice is Red.
4th choice is Orange.
5th choice is Violet.
6th choice is Indigo.
7th choice is Yellow. */

//16. Write a program to find the leap years in a given range of years. Go to the editor
function findLeapYear(starYear,endYear){
  let leapYear = '';

  for (let i = starYear; i <= endYear; i++){
    if ((i % 4 === 0 && i % 100 !== 0) || (i % 100 === 0 && i % 400 === 0)){
      leapYear += i + ', ';
    }
  }
  return leapYear;
}
console.log(findLeapYear(2000,2024));
/* => 2000, 2004, 2008, 2012, 2016, 2020, 2024, */

//17. Write a JavaScript program to shuffle an array. 
function shuffleArray(arr){
  return arr.sort((a,b) => Math.floor(Math.random() * arr.length) - b)  
}
console.log(shuffleArray([1,2,3,4,5,6]));
/* => [ 1, 2, 5, 4, 3, 6 ] */

//18. Write a program to perform a binary search. 
//Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
function binarySearch(arr,value){
  const indexes = [];

  arr.forEach((arrayValue,index) => {
    (arrayValue == value) ? indexes.push(index) : indexes;
  })
  return indexes;
}
console.log(binarySearch([1,2,3,4,5,4,'e','e'],'e'));
/* => [6,7] */

//19. There are two arrays with individual values, write a program to compute the sum of each individual index value from the given arrays.
function sumOfIndividualArray(arr1,arr2){
  let maxLength = Math.max(arr1.length, arr2.length);
  const result = [];

  for (let i = 0; i < maxLength; i++){
    if (arr1.length < arr2.length){
      arr1.push(0);
    }else{
      arr2.push(0);
    }
    result.push(arr1[i] + arr2[i]);
  }
  return result;
  
}
console.log(sumOfIndividualArray([1,0,2,3,4],[3,5,6,7,8,13]));
/* => [4, 5, 8, 10, 12, 13] */

//20. Write a program to find duplicate values in an array. 
function duplicateValue(arr){
  return arr.filter((value,index) => arr.indexOf(value) != index);
}
console.log(duplicateValue([1, 2, -2, 4, 5, 4, 7, 8, 7, 71, 1, 3, 6,'a','a']));
/* => [ 4, 7, 1, 'a' ] */

//*21. Write a program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level. Go to the editor
/* Sample Data :
console.log(flatten([1, [2], [3, [[4]]],[5,6] ]));
[1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
[1, 2, 3, [[4]], 5, 6] */

//22. Write a program to compute the union of two arrays.
function union(arr1,arr2){
  const arrays = arr1.concat(arr2);
  return  arrays.filter((value,index) => arrays.indexOf(value) === index ? true : false).sort((a,b) => a - b);
}
console.log(union([1, 2, 3], [100, 2, 1, 10]));
/* => [1, 2, 3, 10, 100] */

//23. Write a function to find the difference of two arrays.
function difference(arr1,arr2){
  const arrays = arr1.concat(arr2);
  return arrays.filter(value => arrays.indexOf(value) === arrays.lastIndexOf(value)).sort((a,b) => a - b);
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
/* => [ 3, 10, 100 ] */

//24. Write a function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
function  removeOthersDataType(arr){
  //return arr.filter(item => item);

  const  result = [];
  for (let item in arr){
    if (arr[item]){
      result.push(arr[item]);
    }
  }
  return result;
}
console.log(removeOthersDataType([NaN, 0, 15, false, -22, '',undefined, 47, null]));
/* => [ 15, -22, 47 ] */

//25. Write a function to sort the following array of objects by title value.
function sortCompare(arr){
  return arr.sort((a,b) => {
    return a.title.localeCompare(b.title)
  })
}
console.log(sortCompare([ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
]));
/* => [
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    libraryID: 3245
  },
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 }
] */

//26. Write a program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number.
function findPair(arr,target){
  const result = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] + arr[i + 1] === target ){
      result.push(i, i + 1);
    }
  }
  return result;
}
console.log(findPair([10,20,10,40,50,60,70], 50));
/* => [ 2, 3 ] */

//27. Write a function to retrieve the value of a given property from all elements in an array. Go to the editor
/* Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47] */
function retrieveValue(arr){
  return arr.filter(item => item);
}
console.log(retrieveValue([NaN, 0, 15, false, -22, '',undefined, 47, null]));
/* => [15, -22, 47] */

//28. Write a function to find the longest common starting substring in a set of strings. Go to the editor

/* Sample array : 
Expected result : "go" */
function longestCommonStartingSubstring(arr){

}
console.log(longestCommonStartingSubstring(['go', 'google']));

//29. Write a function to fill an array with values (numeric, string with one character) on supplied bounds. Go to the editor

/* Test Data :
["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"] */
function numStringRange(start,end,step){
  let startNum = start.charCodeAt(0);
  let endNum = end.charCodeAt(0);
  let result = '';
  
  for (let i = startNum; i < endNum; i++){
    if (i % step === 0){
      result += String.fromCharCode(i);
    }
  }
  return result.split('');
}
console.log(numStringRange('a', "z", 2));
/* => ['b', 'd', 'f', 'h', 'j', 'l', 'n', 'p', 'r', 't', 'v', 'x'] */

//30. Write a function to merge two arrays and removes all duplicates elements.
function mergeArray(array1, array2){
  let merge = array1.concat(array2).sort((a,b) => a - b);

  return merge.filter((item,index) => merge.indexOf(item) === index );
}
console.log(mergeArray([1, 2, 3], [2, 30, 1]));
/* => [ 1, 2, 3, 30 ] */

//31. Write a function to remove a specific element from an array.
function removeArrayElement(arr,removeEle){
  return arr.filter(item => item !== removeEle)
}
console.log(removeArrayElement([2, 5, 9, 6], 5));
/* => [ 2, 9, 6 ] */

//32. Write a function to find an array contains a specific element. Go to the editor

/* Test data :
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));
[True] */
function contains(arr,search){
  return arr.includes(search)
}
console.log(contains([2,4,5,8,6], 5));
/* => true; */

//33. Write a script to empty an array keeping the original.
function emptyArray(arr){
  return arr.length = 0;
}
console.log(emptyArray([2,3,4,6]));
/* => [] */

//34. Write a function to get nth largest element from an unsorted array. 
function nthLargestUnsortedArray(arr,nthPosition){
  return arr.sort((a,b) => a-b)[nthPosition]
}
console.log(nthLargestUnsortedArray([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
/* => 89 */

//35. Write a function to get a random item from an array. Go to the editor
function randomItem(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}
console.log(randomItem(["Samsu","Bably","Yasin","Jannat"]));
console.log(randomItem([1,2,3,4]));
/* => Yasin */
/* => 1 */

//36. Write a function to create a specified number of elements with pre-filled numeric value array. 
function arrayFilled(arrLength,perFilled){
  return Array(arrLength).fill(perFilled);
}
console.log(arrayFilled(6, 0));
console.log(arrayFilled(4, 11));
/* => [ 0, 0, 0, 0, 0, 0 ] */
/* => [ 11, 11, 11, 11 ] */

//37. Write a function to create a specified number of elements with pre-filled string value array.
function ArrayFilledChar(arrLength,perFilled){
  return Array(arrLength).fill(perFilled);
}
console.log(ArrayFilledChar(4, 'password'));
console.log(ArrayFilledChar(3, 'default value'));
/* => ["password", "password", "password", "password"] */
/* => ["default value", "default value", "default value"] */

//38. Write a function to move an array element from one position to another.
function moveArrayElement(arr,moveItem,movingPosition){
  let newArr = arr.splice(moveItem,1)[0];
  arr.splice(movingPosition,0,newArr);
  return arr;
}
console.log(moveArrayElement([10, 20, 30, 40, 50], 0, 2));
console.log(moveArrayElement([10, 20, 30, 40, 50], -1, -2));
/* => [20, 30, 10, 40, 50] */
/* => [10, 20, 30, 50, 40]  */

//39. Write a function to filter false, null, 0 and blank values from an array.
function filterArrayValues(arr){
  return arr.filter(item => item);
}
console.log(filterArrayValues([58, '', 'abcd', true, null, false, 0]));
/* => [58, "abcd", true] */

//40. Write a function to generate an array of specified length, filled with integer numbers, increase by one from starting position.
function arrayRange(start,length){
  return Array(length).fill().map((_,index) => start + index )
}
console.log(arrayRange(1, 4));
console.log(arrayRange(-6, 4));
/* => [ 1, 2, 3, 4 ] */
/* => [ -6, -5, -4, -3 ] */

//41. Write a function to generate an array between two integers of 1 step length.
function  rangeBetween(start,range){
  return Array(range - start + 1).fill().map((_,index) => start + index);
}
console.log(rangeBetween(4, 7));
console.log(rangeBetween(-4, 7));

//42. Write a function to find the unique elements from two arrays.
function difference(arr1, arr2){
  let arrConcat = arr1.concat(arr2);
  return arrConcat.filter((item,index) => arrConcat.indexOf(item) == index).sort((a,b) => a - b);
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
/* => [ 1, 2, 3, 10, 100 ] */
/* => [ 1, 2, [ 2 ], 3, 4, 5, [ 3, [ [Array] ] ], [ 5, 6 ] ] */

//*43. Write a function to create an array of arrays, un-grouping the elements in an array produced by zip. Go to the editor

/* Test Data :
unzip([['a', 1, true], ['b', 2]])
Expected Output:
[["a","b"],[1,2],[true,false]]
[["a","b"],[1,2],[true]] */

//44. Write a function to create an object from an array, using the specified key and excluding it from each value. Go to the editor

/* Test Data :
indexOn([ { id: 10, name: 'apple' }, { id: 20, name: 'orange' } ], x => x.id)
Expected Output:
{"undefined":{"id":20,"name":"orange"}} */

//45. Write a program to find all unique values in an given array of numbers. Go to the editor

/* Test Data :
[1, 2, 2, 3, 4, 4, 5]
[1, 2, 3, 4, 5]
[1, -2, -2, 3, 4, -5, -6, -5]
Expected Output:
[1,2,3,4,5]
[1,2,3,4,5]
[1,-2,3,4,-5,-6] */
function uniqueValue(arr){
  //return arr = [... new Set(arr)];

  return arr.filter((value,index) => arr.indexOf(value) == index);
}
console.log(uniqueValue([1,2,3,4,4,5]));
console.log(uniqueValue([1, -2, -2, 3, 4, -5, -6, -5]));

//46. Write a program to generate all permutations of an array's elements (contains duplicates). Go to the editor

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