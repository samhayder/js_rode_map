//01.	Write a program to find the maximum between two numbers.
function findMaxNumber(num1,num2){
    return Math.max(num1,num2);
}

console.log(findMaxNumber(25, 27));
console.log(findMaxNumber(-31, -89));
console.log(findMaxNumber(420, 15987));

//02.	Write a program to find the minimum between three numbers.
function findMinNumber(num1,num2,num3){
    return Math.min(num1,num2,num3);
}

console.log(findMinNumber(1, -2, 23));
console.log(findMinNumber(11, 98, 73));
console.log(findMinNumber(-7, -9, -99));

//03. Write a program to check whether a number is even or not.
function checkEvenNumber(num){
    if (num % 2 === 0){
        console.log(`${num} is Even number.`)
    }else {
        console.log(`${num} is not Even number.`)
    }
}

checkEvenNumber(7);
checkEvenNumber(2);
checkEvenNumber(9587);

//04. Write a program to enter the week number and print the day of the week.
function showDay(week){
    switch (week){
        case 0:
            console.log("Monday");
            break;
        case 1:
            console.log("Tuesday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default: console.log("Please type valid day of a week(0-6).")
    }
}

showDay(2);
showDay(5);
showDay(7);

//05. Write a program to check whether a number is negative or positive or zero.
function checkNumericLine(num){
    if (num === 0){
        console.log(`${num} is a Zero.`);
    }else if (num > 0){
        console.log(`${num} is a positive number.`);
    }else {
        console.log(`${num} is a negative number.`);
    }
}

checkNumericLine(0);
checkNumericLine(258);
checkNumericLine(-32);

// 06. Write a program to check whether a number is divisible by 5 or 11 or not.
function checkDivisible(num){
    if (num % 5 === 0 && num % 7 === 0){
        console.log(`${num} is divisible by 5 or 7`);
    }else {
        console.log(`${num} is not divisible by 5 or 7.`);
    }
}

checkDivisible(5);
checkDivisible(49);
checkDivisible(70);

//07. Write a program to input any character and check whether it is the alphabet, digit, or special character.
function checkAlphabet(char){
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')){
        console.log(`${char} is an Alphabet character.`);
    }else if (char >= '0' && char <= '9'){
        console.log(`${char} is a Digit character.`);
    }else {
        console.log(`${char} is a Special character.`)
    }
}
checkAlphabet('b');
checkAlphabet('E');
checkAlphabet(5);
checkAlphabet('&');

//08. Write a program to check whether you are eligible to make a NID Card or not.
function nidEligible(age){
    if (age >= 18){
        console.log("You eligible now NID card.");
    }else {
        console.log("Sorry! Yor are not eligible to NID card.");
    }
}

nidEligible(18);
nidEligible(30);
nidEligible(15);

//09. Write a program to check whether the year is a leap year or not.
function checkLeapYear(year){
    if (year % 400 === 0 || year % 100 === 0 || year % 4 === 0){
        console.log(`${year} is a leap year.`);
    }else {
        console.log(`${year} is not leap year.`);
    }
}

checkLeapYear(1988);
checkLeapYear(2023);
checkLeapYear(2002);

//10. Write a program to input any alphabet and check whether it is a vowel or consonant.
function checkVowelOrConsonant(char){
    let vowel = "aeiouAEIOU";
    if (vowel.indexOf(char) != -1){
        console.log(`${char} is a Vowel.`);
    }else {
        console.log(`${char} is a Consonant.`);
    }
}

checkVowelOrConsonant('a');
checkVowelOrConsonant('z');
checkVowelOrConsonant('E');













