//Guessing number Game
let guessNumber = +prompt("Type you guessing integer number.");
let winnerNumber = 19;

if (guessNumber === winnerNumber){
    alert("Congratulation! You win the Guessing game.")
}else{
    if (guessNumber >= 20){
        alert("Guessing number high.")
    }else{
        alert("Guessing number low")
    }
}

//Check Temperature details
let temperature = +prompt("Type Temperature in number");

if(temperature <= 10){
    alert("Oh my God! Is extremely cool...");
}else if(temperature < 20){
    alert("It's cool temperature in the out side.");
}else if(temperature < 30){
    alert("It's normal weather.");
}else if(temperature < 40){
    alert("Please on you AC.");
}else{
    alert("Please pay for your God. It's extremely hot weather.")
}

//Surprising moment
let emoji = +prompt("Type 1 to 7 number.");

switch(emoji){
    case 1:
        alert("\u26CF");
    break;
    case 2:
        alert("\u26F1");
    break;
    case 3:
        alert("\u1F319");
    break;
    case 4:
        alert("\u1F308");
    break;
    case 5:
        alert("\u2B55");
    break;
    case 6:
        alert("\u2764");
    break;
    case 7:
        alert("\u2708");
    break;
    default:
        alert("Sorry try agin.")
}