//01. Write a program to print your name, date of birth, and mobile number.
function resume(name,dob,mobile){
    console.log(`My name is: ${name}`);
    console.log(`Date of Birth: ${dob}`);
    console.log(`Phone number: ${mobile}`);
}
resume("Samsuddin Hayder", "30-July-1992", "01684711032");

//02. Write a program to enter two numbers and perform all arithmetic operations.
function arithmeticOperation(num1, num2){
    let addition = num1 + num2;
    let subtraction = num1 - num2;
    let multiply = num1 * num2;
    let divided = num1 / num2;
    let modulus = num1 % num2;

    console.log(`Addition: ${addition}`);
    console.log(`Subtraction: ${subtraction}`);
    console.log(`Multiply: ${multiply}`);
    console.log(`Divided: ${divided}`);
    console.log(`Modulus: ${modulus}`);
}
arithmeticOperation(7,6);

//03. Write a program to enter the length, and breadth of a rectangle and find its perimeter and area.
function perimeter(length, breadth){
    let p = 2 * (length + breadth);
    
    console.log(`Rectangle Perimeter ${p} unit`);
}
perimeter(5,7)

//04. Write a Program to calculate the area of an equilateral triangle.
function calculateArea(side){
    let area = Math.sqrt(3)/4 * (side*side);
    
    console.log(`Equilateral triangle: ${area}`); 
}
calculateArea(5);

//05. Write a program to calculate the perimeter and area of a circle with a given radius.
function calculatePerimeter(radius){
    let circle = 2 * Math.PI * radius;
    
    console.log(`Area of circle ${circle}`);
}
calculatePerimeter(20);

//06. Write a program to find the third angle of a triangle if two angles are given.
function findThirdAngle(firstAngle, secondAngle){
    let thirdAngle = 180 - (firstAngle + secondAngle);
    
    console.log(`Third Angle: ${thirdAngle}`);
}
findThirdAngle(50, 70);

//07. Write a program that converts Centigrade to Fahrenheit.
function convertWeather(centigrade){
    let fahrenheit = (centigrade * 9/5) + 32;
    
    console.log(`Centigrade to Fahrenheit: ${fahrenheit}`);
}
convertWeather(12);

//08. Write a program that converts Fahrenheit to Centigrade.
function convertWeather2(fahrenheit){
    let centigrade = (fahrenheit - 32) * 5/9;
    
    console.log(`Fahrenheit to Centigrade: ${centigrade}`);
}
convertWeather2(53.6);

//09. Write a Program to enter marks of five subjects and calculate the total, average, and percentage.
function marksAnalyst(sub1, sub2, sub3, sub4, sub5){
    let total = sub1 + sub2 + sub3 + sub4 + sub5;
    let average = total / 5;
    let percentage = (total / 500) * 100;

    console.log(`Five subject total marks: ${total}`);
    console.log(`Five subject average marks: ${average}`);
    console.log(`Five subject Percentage marks: ${percentage}%`);
}
marksAnalyst(45,80,90,33,56);

//10. Write a Program to enter Principal amount, Time, and Rate calculate simple interest.
function calculateSimpleInterest(principalAmount, time, rate){
    let sampleInterest = (principalAmount * time * rate) / 100;
    
    console.log(`Simple interest: ${sampleInterest}`);
}
calculateSimpleInterest(10000, 12, 10);

//11. Write a Program to enter Principal amount, Time, and Rate calculate compound interest.
function calculateCompoundInterest(principalAmount, rate, time){
    let totalAmount = principalAmount * Math.pow((1+ rate/100), time);
    let interest = totalAmount - principalAmount;
    
    console.log(`Total Amount ${time} years and ${rate}% interest rate is now: ${totalAmount}`);
    console.log(`Only Interest: ${interest}`);
}
calculateCompoundInterest(100000,9,3);

//12. Write a Program that takes minutes as input and displays the total number of hours and minutes.
function timeDetails(minuteInput){
    let hours = minuteInput / 60;
    let minute = minuteInput % 60;

    console.log(`${minuteInput} minutes is total ${hours} hours`)
    console.log(`${minuteInput} minutes is total ${minute} minutes`)
}
timeDetails(564);

//13. Write a program that reads a first name, last name, and year of birth and displays the names and the year one after another sequentially.
function showSequent(firstName,lastName,birth){
    console.log(firstName + " " + lastName + " " + birth);
}
showSequent("Samsuddin", "hayder", 1992);

//14. Write a program to convert specified days into years, weeks and the rest of the days.
function convertSpecifiedDay(dayInput){
    let year = parseInt(dayInput / 365);
    let weeks = parseInt((dayInput % 365) / 7);
    let day = dayInput - ((year * 365) + (weeks * 7));

    console.log(`Years: ${year}`);
    console.log(`Weeks: ${weeks}`);
    console.log(`Days: ${day}`);
}
convertSpecifiedDay(1329);

//15. Write a program that accepts an employee's ID, totally worked hours of a month, and the amount he received per hour. Print the employee's ID and salary for a particular month.
function salaryDetails(employeeID,salaryAmount){
    let workingHours = 8;
    let salary = salaryAmount * workingHours;

    console.log(`Employee Id: ${employeeID}`)
    console.log(`Employee salary: ${salary}`)
}
salaryDetails(23, 15000);

//16. Write a program to find the power of any number x ^ y.
function powerNumber(x,y){
    return Math.pow(x,y);
}
console.log(powerNumber(2,25));

//17. Write a program to enter any number and calculate its square root.
function calculateSquareRoot(x){
    return Math.sqrt(x);
}
console.log(calculateSquareRoot(9));

//18. Write a program to calculate a bike’s total consumption from the given total distance (integer value) traveled (in km) and spent fuel (in liters, float number – 2 decimal points.
function fuelConsumption(distance,fuelSpent){
    let fuel = distance / fuelSpent;

    console.log(`Fuel liter spent average ${fuel}`);
}
fuelConsumption(540,10)