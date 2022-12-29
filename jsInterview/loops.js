//1. Write a program to Print your name 20 times using a loop.  
function namePrint(nameCount){
    for (let i = 1; i <= nameCount; i++){
        console.count("Samsuddin Hayder");
    }
}

namePrint(20);

//2. Write a program to Print your name 20 times using a while loop.
function namePrintWhile(nameCount){
    let i = 1;
    while (i <= nameCount){
        console.count("Samsuddin  Hayder while loop");
        i++;
    }
}

namePrintWhile(20);

//3. Write a program to print your name 20 times using do while loop.
function namePrintDoWhile(nameCount){
    let i = 1;

    do {
        console.count("Samsuddin Hayder Do while loop: ");
        i++;
    } while(i <= nameCount);
}

namePrintDoWhile(20);

//4. Write a program to print 1-10 using a for loop.
function  numPrint(num){
    for (let i = 1; i <= num; i++){
        console.log("for loop " + i);
    }
}

numPrint(10);

//5. Write a program to print 1-10 using a while loop.
function numPrintWhile(num){
    let i = 1;
    while (i <= num){
        console.log("while loop " + i);
        i++;
    }
}

numPrintWhile(10);

//6. Write a program to print 1-10 using do while loop.
function numPrintDoWhile(num){
    let i = 1;
    do {
        console.log("do while loop " + i);
        i++;
    } while (i <= 10);
}

numPrintDoWhile(10);

//7. Write a program to Calculate the Sum of 1 to 10 numbers using a for loop.
function sumNumber(num){
    let sum = 0;
    for (let i = 1; i <= num; i++){
        sum += i;
    }
    console.log("Sum of for loop " + sum);
}

sumNumber(10);
sumNumber(25);
sumNumber(79);

//8. Write a program to Calculate the Sum of 1 to 10 numbers using a while loop.
function sumNumberWhile(num){
    let i = 1;
    let sum = 0;
    while (i <= num){
        sum += i;
        i++;
    }
    console.log("Sum of while loop " + sum);
}

sumNumberWhile(10);
sumNumberWhile(25);
sumNumberWhile(79);

//9. Write a program to Calculate the Sum of 1 to 10 numbers using do while loop.
function sumNumberDoWhile(num){
    let i = 1;
    let sum = 0;
    do {
        sum += i;
        i++;
    } while(i <= num);
    console.log("Sum of do while loop " + sum);
}

sumNumberDoWhile(10);
sumNumberDoWhile(25);
sumNumberDoWhile(79);

//10. Write an infinite loop. An infinite loop never ends. Condition is always true.

/* for ( ; ; ){
    console.count("infinite loops never end");
} */

/* let infiniteWhile = 0;
while (1){
    console.count(infiniteWhile);
    infiniteWhile++;
} */

/* let infiniteDoWhile = false;
do {
    console.count(infiniteDoWhile);
    infiniteDoWhile++;
} while(true); */

//11. Write a program to print even numbers up to N.
function eventNumber(num){
    for (let i = 1; i <= num; i++){
        if (i % 2 == 0){
            console.log(i + " Even number.");
        }
    }
}

eventNumber(20);


//12. Write a program to print odd numbers up to N.

function oddNumber(num){
    for (let i = 1; i <= num; i++){
        if (i % 2 !== 0){
            console.log(i + " Odd number.")
        }
    }
}

oddNumber(20);

//13. Write a program to find the sum of all natural numbers between 1 to n.
function sumNaturalNumber(start,end){
    let sum = 0;
    for (let i = start; i <= end; i++){
        sum += i;
    }
    console.log("Natural number of sum: " + sum);
}
  
sumNaturalNumber(1,25);
sumNaturalNumber(26,50);
sumNaturalNumber(51,100);

//14. Write a program to print all natural numbers in reverse (from n to 1).
function sumReverseNaturalNumber(start,end){
    let sum = 0;
    for (let i = end; i >= start; i--){
        sum += i;
    }
    console.log("Sum of reserve Natural number: " + sum);
}

sumReverseNaturalNumber(1,25);
sumReverseNaturalNumber(26,50);
sumReverseNaturalNumber(51,100);

//15. Write a program to find the sum of all even numbers between 1 to n.
let inputEvenNumber = 10; //+prompt("type any integer number.");
let sumEvenNumber = 0;
for (let i = 0; i <= inputEvenNumber; i++){
    if (i % 2 == 0){
        sumEvenNumber += i;
    }
}
console.log("Sum of event number: " + sumEvenNumber);


//16. Write a program to print those numbers from 1 to 100 which are divisible by 7.
for (let i = 1; i <= 100; i++){
    if (i % 7 === 0){
        console.count(i + " Divisible by 7");
    }
}

//17. Write a program to print all alphabets from a to z.
for (let i = 65; i <= 90; i++){
    console.log(String.fromCharCode(i));
}
for (let i = 97; i <= 122; i++){
    console.log(String.fromCharCode(i));
}

//18. Write a program to count the number of digits in a number.
let userInput = 10;
let countDigits = (userInput, count = 0) => {
    if (userInput){
        return countDigits(Math.floor(userInput / 10), ++count);
    }

    return count;
}
console.log("Count digits " + countDigits(954));
console.log("Count digits " + countDigits(2587413));
console.log("Count digits " + countDigits(78402));

//19. Write a program to find the first digit of a given number.
function findFirstDigit(num){
    // Find total number of digits - 1
    let digit =  parseInt(Math.log(num) / Math.log(10));

    // Find first digit
    num = parseInt(num / Math.pow(10, digit));

    // Return first digit
    return num;
}
console.log("First digit " + findFirstDigit(9));
console.log("First digit " + findFirstDigit(891));
console.log("First digit " + findFirstDigit(2913));


//20. Write a program to find the last digit of a given number.


//21. Write a program to find the sum of the first and last digits of a number.


//22. Write a program to swap the first and last digits of a number.


//23. Write a program to calculate the sum of the digits of a number.


//24. Write a program to calculate the product of the digits of a number.


//25. Write a program to enter a number and print its reverse.
//e.x. The number 12345 should be written as 54321.


//26. Write a program to check whether a number is a palindrome or not.


//27. Write a program to find the frequency of each digit in a given integer.


//28. Write a program to print the multiplication table of any number.


//29. Write a program to enter a number and print it in words.


//30. Write a program to print all ASCII characters with their values.


//31. Write a program to find the power of a number using for loop.


//32. Write a program to find all factors of a number.


//33. Write a program to calculate the factorial of a number.


//34. Write a program to find the HCF (GCD) and LCM of two numbers.


//35. Write a program to check whether a number is a Prime number or not.


//36. Write a program to print all Prime numbers between 1 to n.


//37. Write a program to find the sum of all prime numbers between 1 to n.


//38. Write a program to find all prime factors of a number.


//39. Write a program to check whether a number is an Armstrong number or not.


//40. Write a program to print all Armstrong numbers between 1 to n.


//41. Write a program to check whether a number is a Perfect number or not.


//42. Write a program to print all Perfect numbers between 1 to n.


//43. Write a program to check whether a number is a Strong number or not.


//44. Write a program to print all Strong numbers between 1 to n.


//45. Write a program to print the Fibonacci series up to n terms.
