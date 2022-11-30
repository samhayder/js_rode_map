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




