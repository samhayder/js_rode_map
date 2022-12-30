//01. Write a program to find the length of a string.
function findStrLength(str){
    let strLength = str.length;
    console.log(`${str} length: ${strLength}`);
}
findStrLength("Samsuddin Hayder");
findStrLength("I love JavaScript");

//*02. Write a program to copy one string to another string.
function copyStr(str1){
    let str2 = "";
    for (let i = 0; i <= str1.length; i++){
        str2 += str1[i];   
    }
    console.log(str2);;
}
copyStr("Jamela ");

//03. Write a program to concatenate two strings.
function concatenate(str1, str2){
    console.log(str1  + "," + str2); 
}
concatenate("I love ", "JavaScript");

//04. Write a program to compare two strings.
function compareStr(str1, str2){
    if (str1 === str2){
        console.log("Both string is match.");
    }else {
        console.log("string is not match.");
    }
}
compareStr("Java", "JavaScript");
compareStr("cpp", "cpp");

//05. Write a program to convert lowercase string to uppercase and uppercase string to lowercase string.
function convertCase(str){
    if (str === str.toLowerCase()){
        str = str.toUpperCase();
        console.log("Convert upperCase: " + str);
    }else {
        str = str.toLowerCase();
        console.log("Convert lowerCase: " + str);
    }
}
convertCase("samsuddin");
convertCase("HAYDER");

//*06. Write a program to toggle the case of each character of a string.


//07. Write a program to find the total number of alphabets, digits, or special characters in a string.
function findStrCharNumber(str){
    let alphabets = 0,
        digits = 0,
        special = 0;

    for (let i = 0; i <= str.length; i++){
        let ch = str[i];

        if (ch >= 'A' && ch <= 'Z' || ch >= 'a' && ch <= 'z'){
            alphabets++;
        }else if (ch >= 0 && ch <= 9){
            digits++;
        }else {
            special++;
        }
    }

    console.log(`Alphabets characters : ${alphabets}, Digits characters : ${digits}, Special characters : ${special}`);
}
findStrCharNumber("samsuddin23");
findStrCharNumber("sams.seul@gmail.com");
findStrCharNumber("+016ridoy0048438");

//08. Write a program to count the total number of vowels, consonants, and words in a string.
function countVowelAndConsonant(str){
    let vowel = 0;
    let consonant = 0;
    
    for (let i = 0; i <= str.length; i++){
        let ch = str[i];
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
        ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U'){
            vowel++;
        }else {
            consonant++;
        }

    }

    console.log(`Vowel is: ${vowel}, Consonant is: ${consonant}, total string: ${str.length}`);
}
countVowelAndConsonant("My country name is Bangladesh.")

//09. Write a program to check whether a string is a palindrome or not.
function checkPalindrome(str){
    if (str == str.split("").reverse().join("")){
        console.log("Palindrome");
    }else {
        console.log("NOt Palindrome");
    }
}
checkPalindrome('sir');
checkPalindrome('madam');
checkPalindrome('Madam');

//10. Write a program to reverse the order of words in a given string.
function reverseStr(str){
    return str.split("").reverse().join("");
}
console.log(reverseStr("Sam"));
console.log(reverseStr("yasin"));

//11. Write a program to find the first and last occurrence of a character in a given string.
function findFirstAndLastChar(str){
    let  tempStr = str.length;
    console.log("First Character: " + str.charAt(0));
    console.log("Last Character: " + str.charAt(tempStr - 1));
}
findFirstAndLastChar('samsuddin');
findFirstAndLastChar('jannat');

//12. Write a program to search all occurrences of a character in a given string.
function searchAllOccurrences(str, search){
    let searchResult = 0;

    for (let i = 0; i <= str.length; i++){
        if (str.charAt(i) === search){
            console.log(`character '${search}' found at location: ${searchResult++}`);
        }
    }
}
searchAllOccurrences("December", "e");
searchAllOccurrences("December", "r");
searchAllOccurrences("December", "o");

//13. Write a program to count occurrences of a character in a given string.
function countOccurrences(str,search){
    let count = 0;

    for (let i = 0; i <= str.length; i++){
        if (str.charAt(i) === search){
            count++
        }
    }
    return count;
}
console.log(countOccurrences("January", "w"));
console.log(countOccurrences("February", "F"));

//*14. Write a program to find the highest and lowest frequency character in a string.

//*15. Write a program to count the frequency of each character in a string.

//16. Write a program to remove the first occurrence of a character from a string.
function removeFirstChar(str, searchStr){
    return  str.replace(searchStr, '');
}
console.log(removeFirstChar("The quick brown fox jumps over the lazy dog", 'the'));
console.log(removeFirstChar("thet", 't'));

//*17. Write a program to remove the last occurrence of a character from a string.
function removeLastChar(str, searchStr){
    let index = str.lastIndexOf(searchStr);

    if (index === -1){
        return str;
    }
    return str.slice(0,index) + str.slice(index +  searchStr.length);
}
console.log(removeLastChar("the dog is the cat", 'the'));
console.log(removeLastChar("thet", 't'));

//*18. Write a program to remove all occurrences of a character from a string.
function removeAllChar(str, searchStr){
    return str.replaceAll(searchStr,'');
}
console.log(removeAllChar("the all the most the seen", "the"));

//19. Write a program to remove all repeated characters from a given string.
function removeDuplicateChar(str){
    let arrStr = str.split("");
    let result = [];

    for (let i = 0; i <= arrStr.length; i++){
        if (str.indexOf(arrStr[i]) === str.lastIndexOf(arrStr[i])){
            result.push(arrStr[i]);
        }
    }
    return result.join("");
}
console.log(removeDuplicateChar("abcdabc"));

//20. Write a program to replace the first occurrence of a character with another in a string.
function  replaceFirstChar(str, oldStr, newReplaceStr){
    return str.replace(oldStr, newReplaceStr);
}
console.log(replaceFirstChar("day the day", "day", "Ok"));

//21. Write a program to replace the last occurrence of a character with another in a string.
function  replaceLastChar(str, changeStr, replaceStr){
    let lastIndex = str.lastIndexOf(changeStr);

    if (lastIndex === -1){
        return str;
    }

    return str.slice(0, lastIndex) + replaceStr + str.slice(lastIndex + replaceStr.length);
}
console.log(replaceLastChar("sam is sam, zam is sam", "is", "vs"));

//22. Write a program to replace all occurrences of a character with another in a string.
function replaceAllChar(str, changeStr, replaceStr){
    return str.replaceAll(changeStr,replaceStr);
}
console.log(replaceAllChar("joy and joy", "joy", "Ajoy"));

//23. Write a program to trim leading white space characters from a given string.
function trimLeading(str){
    return str.trimStart()
}
console.log(trimLeading("  admin   "));
//24. Write a program to trim trailing white space characters from a given string.
function trimTrailing(str){
    return str.trimEnd();
}
console.log(trimTrailing("    adminEnd     "));

//25. Write a program to trim both leading and trailing white space characters from a given string.
function trimStr(str){
    return str.trim();
}
console.log(trimStr("    adminTrim    "));
