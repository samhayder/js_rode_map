
/* let userName = '';
let password;

let checkUserName = userName || "admin";
let checkPassword = password || 123456;


let login = true;
let loginMsg = login && "Login successful";

console.log(checkUserName)
console.log(checkPassword)
console.log(loginMsg)
 */

//while loop
/* let isPlay = true;

while (isPlay){
    let win = Math.round(Math.random() * 6);

    if (win === 6){
        console.warn('You Winner');
        isPlay = false;
    }else{
        console.log('You god ' + win);
    }
} */

//Nested loops
let num = 5;

/* for (let row = 1; row <= num; row++){
    let result = '';
    for (let col = 1; col <= row; col++){
        result += col + ' ';
    }
    console.log(result);
} */

for (let row = 1; row <= num; row++){
    let result = '';
    for (let col = 1; col <= num; col++){
        result +='* ';
    }
    console.log(result);
}







