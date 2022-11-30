/* "use strict"; */

/* Primitive data types 
01. String 
02. Number 
03. Boolean 
04. Undefine 
05. BigInt
06. Symbol */

//****** String ******

//String Indexing
let name = "Samsuddin Hayder";
let strIndex = name[2];
console.log(strIndex);

//String length
let strLength = name.length;
console.log(strLength);

//String last Index
let strLastIndex = name[name.length - 5]; //a
console.log(strLastIndex);

//String trim()
let newStr = "   Hello World    ";
console.log(newStr.length);
let strTrim = newStr.trim(); // trim() create a new variable
console.log(strTrim.length);

//String upper and lower case
let strUpperCase = strTrim.toUpperCase();
console.log(strUpperCase);
let strLowerCase = strTrim.toLowerCase();
console.log(strLowerCase);

//String Slice
//start() and end()

let strSlice = strTrim.slice(0,5);
console.log(strSlice);

//Convating
//String to Number => in 3 way to convate number
let position = "15";
let conNumber = +"15";
console.log(conNumber);
console.log(typeof conNumber);

let conNumber2 = Number(position);
console.log(conNumber2);
console.log(typeof conNumber2);

let conNumber3 = parseInt(position);
console.log(conNumber3);

//Number to String => in 3 way to convate string
let age = 33;
let conStr = age + "";
console.log(typeof conStr);
console.log(conStr);

let conStr2 = String(age);
console.log(conStr2);

let conStr3 = toString(age);
console.log(conStr3);


//****** Boolean ******
/* boolean return only two value
1. true 
2. false  */

/* Falsy value
false
" "
null
undefine 
0 */

let isResult = true;
console.log(typeof isResult, isResult);

console.log(true - 3);

//****** BigInt ******
let longNumber = BigInt(1684711032);
console.log(typeof longNumber, longNumber);
console.log(Number.MAX_SAFE_INTEGER)

//****** if else condition ******

//check even or odd number
let checkNumber = 3;

if(checkNumber % 2 == 0) {
    console.log("Even number");
}else{
    console.log("Odd number");
}

//check prime number
let checkPrime = 7;
let isPrime = true;

for(let i = 2; i < checkPrime; i++){
    if(checkPrime % i == 0){
        isPrime = false;
        break;
    }
}
console.log(isPrime);
if(isPrime){
    console.log("Prime number.");
}else{
    console.log("Not prime number.");
}

