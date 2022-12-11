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

//11. Write a program to check whether the character is an alphabet or not.
function checkCharacter(char){
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')){
        console.log(`${char} is an Alphabet.`);
    }else {
        console.log(`${char} is not alphabet.`);
    }
}

checkCharacter('b');
checkCharacter('E');
checkCharacter(8);

//12. Write a program to check the uppercase or lowercase alphabet.
function checkCase(char){
    if (char >= 'A' && char <= 'Z' ){
        console.log(`${char} is uppercase alphabet`);
    }else {
        console.log(`${char} is lowercase alphabet`);
    }
}

checkCase('c');
checkCase('G');
checkCase('w');

//13. 31.	Write a program to input the week number and print the weekday.
function checkWeekDay(week){
    let day = ["sat","sun","mon","the","wed","thu","fri"];
    return day[week - 1];
}

console.log(checkWeekDay(2));
console.log(checkWeekDay(6));
console.log(checkWeekDay(1));

//14. Write a program to input the month number and print the number of days in that month.
function checkMonthDay(month){
    let monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
    return monthDays[month - 1];
}

console.log(checkMonthDay(1));
console.log(checkMonthDay(6));
console.log(checkMonthDay(11));

//15. Write a program to check two integers whether they are equal or not.
function checkEqual(num1,num2){
    if (num1 === num2){
        console.log("They are equal integers value.");
    }else {
        console.log("They are not equal integers value");
    }
}

checkEqual(7,7);
checkEqual(19,57);
checkEqual(25,25);

//16. Write a program to input the angles of a triangle and check whether a triangle is valid or not. 
function checkTriangle(angle1,angle2,angle3){
    let sum = angle1 + angle2 + angle3;

    if (sum === 180 && angle1 >= 0 && angle2 >= 0 && angle3 >= 0){
        console.log("Triangle is valid.");
    }else {
        console.log("Triangle is not valid.");
    }
}

checkTriangle(25,78,40);
checkTriangle(90,60,30);
checkTriangle(15,125,40);

//17. Write a program to check whether the triangle is an equilateral, isosceles, or scalene triangle.
function triangleAnalyzed(angle1,angle2,angle3){
    if (angle1 === angle2 && angle2 === angle3){
        console.log("Triangle is Equilateral.");
    }else if (angle1 === angle2 || angle2 === angle3 || angle1 === angle3){
        console.log("Triangle is Isosceles.");
    }else {
        console.log("Triangle is Scalene.");
    }
}

triangleAnalyzed(3,3,3);
triangleAnalyzed(15,14,15);
triangleAnalyzed(11,7,23);

//18. Write a program to find all roots of a quadratic equation.


//19. Your younger brother studied in a primary school. He is fluent in the English alphabet. But don't know about the vowel and consonants. Your mother assigns you to teach him to know about which alphabets are vowel and consonant.

//20.So you are going to make a program (using else if ladder) where your brother writes any alphabet and your program will tell him that it is a vowel or consonant.

//21. Write a program to find the eligibility for admission to a professional course base on the following criteria:
/* Marks in MATHS >= 65	
Marks in PHY >= 55
Marks in CHEM >= 50
Total in all three subjects => 180
Or,
Total in Math and physics >=140. */
function admissionEligibility(marks){
    if (marks >= 180){
        console.log("All three subjects eligibility for admission.");
    }else  if (marks >= 140){
        console.log("Math & Physics eligibility for admission");
    }else if (marks >= 65){
        console.log("Maths eligibility for admission.");
    }else if (marks >= 55){
        console.log("Physics eligibility for admission.");
    }else if (marks >= 50){
        console.log("Chemistry eligibilty for admission.");
    }else {
        console.log("Sorry! You'r not eligibility for admission.");
    }
}

admissionEligibility(40);
admissionEligibility(140);
admissionEligibility(50);

//22. Write a program to read the temperature in centigrade and display a suitable message according to the temperature state below: 
/* Temp < 0 then Freezing weather
Temp 0-10 then very cold weather
Temp 10-20 then cold weather 
Temp 20-30 then Normal in Temp
Temp 30-40 then it’s hot
Temp >=40 then it’s very hot. */
function temperatureStatus(temp){
    if (temp < 0){
        console.log(`${temp}deg Freezing weather.`);
    }else if (temp < 10){
        console.log(`${temp}deg vary cold weather.`);
    }else if (temp < 20){
        console.log(`${temp}deg cold weather.`);
    }else if (temp < 30){
        console.log(`${temp}deg normal is temperature.`);
    }else if (temp < 40){
        console.log(`${temp}deg it's hot.`);
    }else {
        console.log(`${temp}deg it's very hot...`);
    }
}

temperatureStatus(-5);
temperatureStatus(48);
temperatureStatus(22);

//23. Write a program to read four values a, b, c, and d from the terminal and evaluates the value of (a+b) to (c-d), and print the result, if c-d is not equal to zero.
function evaluateValue(a,b,c,d){
    let sum = a + b;
    let subtract = c - d;

    if (subtract != 0){
        let multiply = sum * subtract;
        console.log(multiply);
    }else {
        console.log("Sorry! c-d value is zero.")
    }
}

evaluateValue(10,30, 7,7);
evaluateValue(15,88, -7,105);
evaluateValue(19,3, 12,0);

//24. Write a program to input the basic salary of an employee and calculate its Gross salary according to the following:
/* Basic Salary <= 10000 : HRA = 20%, DA = 80%
Basic Salary <= 20000 : HRA = 25%, DA = 90%
Basic Salary > 20000 : HRA = 30%, DA = 95%. */
function employeeSalary(salary){
    let hra, da, grossSalary;

    if (salary <= 10000){
        hra = salary * 20 / 100;
        da = salary * 80 / 100;
        grossSalary = salary + hra + da;
        console.log(`Basic ${salary} salary gross is: ${grossSalary}`);
    }else if (salary <= 20000){
        hra = salary * 25 / 100;
        da = salary * 90 / 100;
        grossSalary = salary + hra + da;
        console.log(`Basic ${salary} salary gross is: ${grossSalary}`);
    }else if (salary > 20000){
        hra = salary * 30 / 100;
        da = salary * 95 / 100;
        grossSalary = salary + hra + da;
        console.log(`Basic ${salary} salary gross is: ${grossSalary}`);
    }else {
        console.log("Sorry!")
    }
}

employeeSalary(10000);
employeeSalary(8000);
employeeSalary(33000);

//25. Write a  program to input electricity unit charges and calculate the total electricity bill according to the given condition:
/* For the first 50 units taka. 0.50/unit
For the next 100 units taka. 0.75/unit
For the next 100 units taka. 1.20/unit
For units above 250 taka. 1.50/unit
An additional surcharge of 20% is added to the bill. */
function electricBill(unit){
    let unitTotalTaka, surcharge, totalBill;
    if (unit <= 50){
        unitTotalTaka = unit * 0.5;
        surcharge = unitTotalTaka * 20 / 100;
        totalBill = unitTotalTaka + surcharge;
        console.log(`${unit} units total bill: ${totalBill} taka.`);
    }else if (unit <= 100){
        unitTotalTaka = unit * 0.75;
        surcharge = unitTotalTaka * 20 / 100;
        totalBill = unitTotalTaka + surcharge;
        console.log(`${unit} units total bill: ${totalBill} taka.`);
    }else if (unit >= 101 && unit <= 250){
        unitTotalTaka = unit * 1.20;
        surcharge = unitTotalTaka * 20 / 100;
        totalBill = unitTotalTaka + surcharge;
        console.log(`${unit} units total bill: ${totalBill} taka.`);
    }else {
        unitTotalTaka = unit * 1.50;
        surcharge = unitTotalTaka * 20 / 100;
        totalBill = unitTotalTaka + surcharge;
        console.log(`${unit} units total bill: ${totalBill} taka.`);
    }
}

electricBill(40);
electricBill(51);
electricBill(100);
electricBill(105);
electricBill(250);
electricBill(255);









