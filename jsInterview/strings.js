//01. Write a program to find the length of a string.
function findStrLength(str){
    return str.length;
}
console.log(findStrLength("Samsuddin Hayder"));
/* => 16 */

//*02. Write a program to copy one string to another string.
function copyStr(str){
    let str2 = "";
    for (let i = 0; i < str.length; i++){
        str2 += str[i];   
    }
    return str2;
}
console.log(copyStr("I love js "));
/* => "I love js " */

//03. Write a program to concatenate two strings.
function concatenate(str1, str2){
    return str1 + " " + str2;
}
console.log(concatenate("Programming language ", "JavaScript"));
/* => "Programming language JavaScript" */

//04. Write a program to compare two strings.
function compareStr(str1, str2){
    if (str1 === str2){
        return true;
    }else {
        return false;
    }
}
console.log(compareStr("Java", "JavaScript"));
console.log(compareStr("cpp", "cpp"));
/* => false */
/* => true */

//05. Write a program to convert lowercase string to uppercase and uppercase string to lowercase string.
function convertCase(str){
    if (str === str.toLowerCase()){
        return str = str.toUpperCase();
    }else {
        return str = str.toLowerCase();
    }
}
console.log(convertCase("samsuddin"));
console.log(convertCase("HAYDER"));
/* => "SAMSUDDIN" */
/* => "hayder" */

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

    return (`Alphabets characters : ${alphabets}, Digits characters : ${digits}, Special characters : ${special}`);
}
console.log(findStrCharNumber("samsuddin23"));
console.log(findStrCharNumber("sams.seul@gmail.com"));
console.log(findStrCharNumber("+016ridoy0048438"));
/* => "Alphabets characters : 9, Digits characters : 2, Special characters : 1" */
/* => "Alphabets characters : 16, Digits characters : 0, Special characters : 4" */
/* => "Alphabets characters : 5, Digits characters : 10, Special characters : 2" */

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

    return (`Vowel is: ${vowel}, Consonant is: ${consonant}, total string: ${str.length}`);
}
console.log(countVowelAndConsonant("My country name is Bangladesh."));
/* => "Vowel is: 8, Consonant is: 23, total string: 30" */

//09. Write a program to check whether a string is a palindrome or not.
function checkPalindrome(str){
    if (str == str.split("").reverse().join("")){
        return ("Palindrome");
    }else {
        return ("Not Palindrome");
    }
}
console.log(checkPalindrome('sir'));
console.log(checkPalindrome('madam'));
console.log(checkPalindrome('Madam'));
/* => "Not Palindrome" */
/* => "Palindrome" */
/* => "not Palindrome" */

//10. Write a program to reverse the order of words in a given string.
function reverseStr(str){
    return str.split("").reverse().join("");
}
console.log(reverseStr("JavaScript"));
console.log(reverseStr("Java"));
/* => "tpircSavaJ" */
/* => "avaJ" */

//11. Write a program to find the first and last occurrence of a character in a given string.
function findFirstAndLastChar(str){
    let  tempStr = str.length;
    return ("First Character: " + str.charAt(0) + " & Last Character: " + str.charAt(tempStr - 1));
}
console.log(findFirstAndLastChar('samsuddin'));
console.log(findFirstAndLastChar('jannat'));
/* => "First Character: s & Last Character: n" */
/* => "First Character: j & Last Character: t" */

//12. Write a program to search all occurrences of a character in a given string.
function searchAllOccurrences(str, search){
    let searchResult = 0;

    for (let i = 0; i <= str.length; i++){
        if (str[i] === search){
            searchResult++;
        }
    }
    return searchResult;
}
console.log(searchAllOccurrences("December", "e"));
console.log(searchAllOccurrences("December", "r"));
console.log(searchAllOccurrences("December", "o"));
/* => "character 'e' found at: 3" */
/* => "character 'r' found at: 1" */
/* => "character 'o' found at: 0 */

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
/* => "character count at: 0" */
/* => "character count at: 1" */

//*14. Write a program to find the highest and lowest frequency character in a string.

//*15. Write a program to count the frequency of each character in a string.

//16. Write a program to remove the first occurrence of a character from a string.
function removeFirstChar(str, searchStr){
    return  str.replace(searchStr, '');
}
console.log(removeFirstChar("The quick brown fox jumps over the lazy dog", 'the'));
console.log(removeFirstChar("thet", 't'));
/* => "The quick brown fox jumps over  lazy dog" */
/* => "het" */

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
/* => "the dog is  cat" */
/* => "the" */

//*18. Write a program to remove all occurrences of a character from a string.
function removeAllChar(str, searchStr){
    return str.replaceAll(searchStr,'');
}
console.log(removeAllChar("the all the most the seen", "the"));
/* => " all  most  seen" */

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
/* => "d" */

//20. Write a program to replace the first occurrence of a character with another in a string.
function  replaceFirstChar(str, oldStr, newReplaceStr){
    return str.replace(oldStr, newReplaceStr);
}
console.log(replaceFirstChar("day the day", "day", "Ok"));
/* => "Ok the day" */

//21. Write a program to replace the last occurrence of a character with another in a string.
function  replaceLastChar(str, changeStr, replaceStr){
    let lastIndex = str.lastIndexOf(changeStr);

    if (lastIndex === -1){
        return str;
    }

    return str.slice(0, lastIndex) + replaceStr + str.slice(lastIndex + replaceStr.length);
}
console.log(replaceLastChar("sam is sam, zam is sam", "is", "vs"));
/* => "sam is sam, zam vs sam" */

//22. Write a program to replace all occurrences of a character with another in a string.
function replaceAllChar(str, changeStr, replaceStr){
    return str.replaceAll(changeStr,replaceStr);
}
console.log(replaceAllChar("joy and joy", "joy", "Ajoy"));
/* => "Ajoy and Ajoy" */

//23. Write a program to trim leading white space characters from a given string.
function trimLeading(str){
    return str.trimStart()
}
console.log(trimLeading("  admin   "));
/* => "admin   " */

//24. Write a program to trim trailing white space characters from a given string.
function trimTrailing(str){
    return str.trimEnd();
}
console.log(trimTrailing("    adminEnd     "));
/* => "    adminEnd" */

//25. Write a program to trim both leading and trailing white space characters from a given string.
function trimStr(str){
    return str.trim();
}
console.log(trimStr("    adminTrim    "));
/* => "adminTrim" */

/* *****  String by w3resource ****** */
//26. Write a function to check whether an `input` is a string or not.
function isString(str){
    if (str === str.toString()){
       return true;
    }else {
        return false;
    }
}
console.log(isString('w3resource'));
console.log(isString([1, 2, 4, 0]));
/* => true */
/* => false */

//27. Write a function to check whether a string is blank or not.
function isBlank(str){
    if (str === ''){
        return true;
    }else {
        return false;
    }
}
console.log(isBlank(''));
console.log(isBlank('abc'));
/* => true */
/* => false */

//28. Write a function to split a string and convert it into an array of words.
function stringToArray(str){
    return str.split(" ");
}
console.log(stringToArray("Robin Singh"));
/* => ["Robin", "Singh"] */

//29. Write a function to extract a specified number of characters from a string.
function truncateString(str,extract){
    return str.slice(0, extract);
}
console.log(truncateString("Robin Singh",4));
/* => "Robi" */

//30. Write a function to convert a string in abbreviated form.
function abbrevName(name){
    let nameSplit = name.trim().split(" ");
    if (nameSplit.length > 1){
        return (nameSplit[0] + " " + nameSplit[1].charAt(0) + ".");
    }
    return nameSplit[0];
}
console.log(abbrevName("Robin Singh"));
/* => "Robin S." */

//31. Write a function to hide email addresses to protect from unauthorized user.
function protectEmail(email){
    let emailSplit = email.split("@");
    return emailSplit[0].slice(0,8) + "...@" + emailSplit[1];
}
console.log(protectEmail("robin_singh@example.com"));
/* => "robin_si...@example.com" */

//32. Write a function to parameterize a string. 
function stringParameterize(str){
    return str.toLowerCase().split(" ").join("-")
}
console.log(stringParameterize("Robin Singh from USA."));
/* => "robin-singh-from-usa." */

//33. Write a function to capitalize the first letter of a string. 
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}
console.log(capitalize('js string exercises'));
/* => "Js string exercises" */

//34. Write a function to capitalize the first letter of each word in a string.
function capitalizeWords(str){
    return str.split(" ").map((index) => index.toUpperCase()[0] + index.slice(1)).join(" ");
}
console.log(capitalizeWords('js string exercises'));
/* => "Js String Exercises" */

//35. Write a function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
function swapCase(str){
    let output = '';
    
    for (let i = 0; i < str.length; i++){
        if (str[i] === str[i].toUpperCase()){output += str[i].toLowerCase()};
        if (str[i] === str[i].toLowerCase()){output += str[i].toUpperCase()};
    }
    return output;
}
console.log(swapCase('AaBbc'));
/* => "aAbBC" */

//36. Write a function to convert a string into camel case.
function camelize(str){
    return str.split(" ").map((i) => i.charAt(0).toUpperCase() + i.slice(1)).join("")
}
console.log(camelize("javaScript Exercises"));
console.log(camelize("javaScript exercises"));
console.log(camelize("javaScriptExercises"));
/* => "JavaScriptExercises" */
/* => "JavaScriptExercises" */
/* => "JavaScriptExercises" */

//37. Write a function to un-camelize a string.
function unCamelize(str,sep){
    let strArr = str.split("");

    if (!sep){sep = " "};

    for (let i = 1; i < strArr.length; i++){
        if (strArr[i] == strArr[i].toUpperCase()){
            strArr[i] = sep + strArr[i].toLowerCase();
        }
    }
    return strArr.join("");
}
console.log(unCamelize('helloWorld'));
console.log(unCamelize('helloWorld','-'));
console.log(unCamelize('helloWorld','_'));
/* => "hello world" */
/* => "hello-world" */
/* => "hello_world" */

//38. Write a function to concatenates a given string n times (default is 1).
function repeat(str,times){
    return (!times) ? str.repeat(1) : str.repeat(times);
}
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));
/* => "Ha!" */
/* => "Ha!Ha!" */
/* => "Ha!Ha!Ha!" */

//39. Write a function to insert a string within a string at a particular position (default is 1).
function insert(str,addStr,pos){
    if (!addStr){addStr = ''};
    if (!pos){pos = 0};

    return str.slice(0,pos) + addStr + str.slice(pos);
}
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));
/* => "We are doing some exercises." */
/* => "JavaScript We are doing some exercises." */
/* => "We are doing some JavaScript exercises." */

//40. Write a function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.
function humanizeFormat(num){
    if (!num)return;

    switch(num % 10){
        case 1: return num + "st";
        case 2: return num + "nd";
        case 3: return num + "rd";
    }

    if(num % 100 >= 11 && num % 100 <= 13){
        return num + "th";
    }

    return num + "th";
}
console.log(humanizeFormat());
console.log(humanizeFormat(1));
console.log(humanizeFormat(8));
console.log(humanizeFormat(301));
console.log(humanizeFormat(402));
/* => "1st" */
/* => "8th" */
/* => "301st" */
/* => "402nd" */

//41. Write a function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters. 
function textTruncate(str,pos,sin){
    if (!pos){ str;}
    if (!sin){ sin = '...'}
    if (str.length > pos){
        return  str.slice(0,pos - sin.length) + sin;
    }else {
        return str;
    }
}
console.log(textTruncate('We are doing JS string exercises.'))
console.log(textTruncate('We are doing JS string exercises.',19))
console.log(textTruncate('We are doing JS string exercises.',15,'!!'))
/* => "We are doing JS string exercises." */
/* => "We are doing JS ..." */
/* => "We are doing !!" */

//42. Write a function to chop a string into chunks of a given length.
function stringChop(str,chop){
    if (!chop) return [str];

    let result = [];

    for (let i = 0; i < str.length; i += chop){
        result.push(str.substr(i, chop));
    }
    return  result;
}
console.log(stringChop('w3resource'));
console.log(stringChop('w3resource',2));
console.log(stringChop('w3resource',3));
/* => ["w3resource"] */
/* => ["w3", "re", "so", "ur", "ce"] */
/* => ["w3r", "eso", "urc", "e"] */

//43. Write a function to count the occurrence of a substring in a string. 
function countSubstring(str,search){
    return str.toLowerCase().split(search).length - 1;
}
console.log(countSubstring("The quick brown fox jumps over the lazy dog", 'the'));
/* => 2 */
/* => 1 */

//*44. Write a function to escape a HTML string.
/* console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
Output :
"&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;" */ 

//45. Write a function that can pad (left, right) a string to get to a determined length. 
function formattedString(pad,str,pos){
    str = str.toString();
    if (pos === 'l'){
        return pad.slice(0, pad.length - str.length) + str;
    }else {
        return str + pad.slice(str.length);
    }
}
console.log(formattedString('0000',123,'l'));
console.log(formattedString('00000000',123,''));
/* => "0123" */
/* => "12300000" */

//46. Write a function to repeat a string a specified times. 
function repeatString(str,times){
    if (!times || times < 0){return str = "Error in string or count."}
    return str.repeat(times);
}
console.log(repeatString('a', 4));
console.log(repeatString('a'));
/* => "aaaa" */
/* => "Error in string or count." */

//47. Write a function to get a part of a string after a specified character.
function subStrAfterChars(str,char,side){
    let pos = str.indexOf(char) + 1;
    return pos = side === 'a' ? str.slice(0,pos) : str.slice(pos);
}
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
/* => "w3resource" */
/* => "xercises" */

//48. Write a function to strip leading and trailing spaces from a string. 
function strip(str){
    return str.trim();
}
console.log(strip('w3resource '));
console.log(strip(' w3resource'));
console.log(strip(' w3resource '));
/* => "w3resource" */
/* => "w3resource" */
/* => "w3resource" */

//49. Write a function to truncate a string to a certain number of words. 
function truncate(str,pos){
    return str.split(' ').slice(0,pos).join(' ');
}
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
/* => "The quick brown fox" */

//50. Write a function to alphabetize a given string. 
/* Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z. */
function alphabetizeString(str){
    return str.split('').sort().join('').trim();
}
console.log(alphabetizeString('United States'));
console.log(alphabetizeString('Samsuddin Hayder'));
/* => "SUadeeinsttt" */
/* => "HSaadddeimnrsuy" */

//51. Write a function to remove the first occurrence of a given 'search string' from a string. 
function removeFirstOccurrence(str,search){
    return str.replace((search + ' '), ' ');
}
console.log(removeFirstOccurrence("The quick brown fox jumps over the lazy dog", 'the'));
/* => "The quick brown fox jumps over lazy dog" */

//52. Write a function to convert ASCII to Hexadecimal format.
function asciiToHexa(str){
    let result = '';

    for (let i = 0; i < str.length; i++){
        result +=  str.charCodeAt(i).toString(16)
    }
    return result;
}
console.log(asciiToHexa('12'));
console.log(asciiToHexa('100'));
/* => "3132" */
/* => "313030" */

//53. Write a function to convert Hexadecimal to ASCII format. 
function hexToAscii(str){
    let hex = str.toString();
    let str1 = ''

    for (let i = 0; i < hex.length; i += 2){
        str1 += String.fromCharCode(parseInt(hex.substr(i, 2),16))
    }
    return str1;
}
console.log(hexToAscii('3132'));
console.log(hexToAscii('313030'));
/* => "12" */
/* => "100" */

//54. Write a JavaScript function to find a word within a string. 
function searchWord(str,search){
    let result = str.split(" ").filter((word) => word.match(search)).length;
    return `'${search}' was found ${result} times.`;
}
console.log(searchWord('The quick brown fox', 'fox'));
console.log(searchWord('aa, bb, cc, dd, aa', 'aa'));
/* => "'fox' was found 1 times." */
/* => "'aa' was found 2 times." */

//55. Write a function check if a string ends with specified suffix.
function  stringEndsWith(str,suffix){
    return str.split(' ').includes(suffix);
}
console.log(stringEndsWith('JS PHP PYTHON','PYTHON'));
console.log(stringEndsWith('JS PHP PYTHON',''));
/* => true */
/* => false */

//*56. Write a function to escapes special characters (&, <, >, ', ") for use in HTML. Go to the editor
/* Test Data :
console.log(escapeHtml('PHP & MySQL'));
"PHP &amp; MySQL"
console.log(escapeHtml('3 > 2'));
"3 &gt; 2" */
    /* '&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#039;' */

//57. Write a function to remove?non-printable ASCII chars. 
function removeNonAscii(str){
    return str.replace(/[^A-Za-z 0-9 -]/g, '');
}
console.log(removeNonAscii('???????PHP-MySQL??????'));
/* => "PHP-MySQL" */

//58. Write a function to remove non-word characters. 
function removeNonWord(str){
    return str.replace(/[^A-Z a-z -]/g, '');
}
console.log(removeNonWord('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));
/* => "PHP - MySQL" */

//59. Write a JavaScript function to convert a string to title case.
function sentenceCase(str){
    let strArr = str.split(' ');
    let result = '';

    for (let i = 0; i < strArr.length; i++){
        result += strArr[i].at(0).toUpperCase() + strArr[i].slice(1) + ' ';
    }
    return result;
}
console.log(sentenceCase('PHP exercises. python exercises.'));
/* => "Php Exercises. Python Exercises." */

// 60. Write a JavaScript function to create a Zero-filled value with optional +, - sign.
function zeroFill(str,pos,sin){
    if (sin === '-'){
        return '+' + '0'.repeat(pos - str.toString().length) + str;
    }
    if(!sin) {
        return  '0'.repeat(pos - str.toString().length) + str;
    }
}
console.log(zeroFill(120, 5, '-'));
console.log(zeroFill(29,4));
/* => "+00120" */
/* => "0029" */

//61. Write a function to test case insensitive (except special Unicode characters) string comparison.
function compareStrings(str,compare){
    if (str.toLowerCase() === compare.toLowerCase()){
        return true;
    }else {
        return false;
    }
}
console.log(compareStrings('abcd', 'AbcD'));
console.log(compareStrings('ABCD', 'Abce'));
/* => true */
/* => false */

//62. Write a function to create a case-insensitive search.
function caseInsensitiveSearch(str,search){
    let strTLC = str.toLowerCase();
    let searchTLC = search.toLowerCase();
    let result = strTLC.includes(searchTLC);

    if (result ===  true) return "Matched";
    else return "Not Matched";
}
console.log(caseInsensitiveSearch('JavaScript Exercises', 'exercises'));
console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercises'));
console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercisess'));
/* => "Matched" */
/* => "Matched" */
/* => "Not Matched" */

//63. Write a function to Un-capitalize? the first character of a string. 
function UnCapitalize(str){
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(UnCapitalize('Js string exercises'));
/* => "js string exercises" */

//64. Write a function to Un-capitalize the first letter of each word of a string. 
function unCapitalizeWords(str){
    return str.split(' ').map((i) => i.charAt(0).toLowerCase() + i.slice(1))
    .join(' ');
}
console.log(unCapitalizeWords('Js String Exercises'));
/* => "js string exercises" */

//65. Write a function to get the successor of a string. 
/* 
Note: The successor is calculated by incrementing characters starting from the rightmost alphanumeric (or the rightmost character if there are no alphanumerics) in the string. Incrementing a digit always results in another digit, and incrementing a letter results in another letter of the same case. If the increment generates a carry, the character to the left of it is incremented. This process repeats until there is no carry, adding an additional character if necessary.
Example :
string.successor("abcd") == "abce"
string.successor("THX1138") == "THX1139"
string.successor("< >") == "< >"
string.successor("1999zzz") == "2000aaa"
string.successor("ZZZ9999") == "AAAA0000"*/
function successor(str){
    let lastChar = str.charCodeAt(str.length - 1) + 1;
    let result = String.fromCharCode(lastChar);
    let str1 = str.slice(0,str.length - 1);
    
    return str1 + result;
}
console.log(successor('abcd')); 
console.log(successor('3456')); 
/* => "abce" */
/* => "3457" */

//66. Write a function to get unique guid (an acronym for 'Globally Unique Identifier?) of the specified length, or 32 by default. 
function guide(len){
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXabcdefghijklmnopqrstuvwx0123456789';
    let iterLength = len || 32;
    let result = '';

    for (let i = 0; i < iterLength; i++){
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}
console.log(guide());
console.log(guide(15));
/* => "hRYilcoV7ajokxsYFl1dba41AyE0rUQR" */
/* => "b7pwBqrZwqaDrex" */

//67. Write a program to check if a given string contains alphanumeric characters that are palindromes regardless of special characters and letter case. 
/* A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as the words madam or racecar, the date/time stamps 11/11/11 11:11 and 02/02/2020, and the sentence: "A man, a plan, a canal - Panama". The 19-letter Finnish word saippuakivikauppias (a soapstone vendor), is the longest single-word palindrome in everyday use, while the 12-letter term tattarrattat (from James Joyce in Ulysses) is the longest in English.
Test Data :
('$22_|1372^2731|_22') -> true
('12%^&2') -> false
('234%$$%432') -> true
(1234) -> "It must be string"
('aba%$aba') -> true
('Aba%$aba') -> true */
function palindrome(str){
    if (typeof str !== 'string') return "It must be string";

    let res = str.split('').reverse().join('');
    if (res === str){
        return true;
    }else{

        return false;
    }
}
console.log(palindrome('234%$$%432'));
console.log(palindrome('12%^&2'));
console.log(palindrome(1234));
/* => true */
/* => false */
/* => "It must be string" */

//68. Write a function to check a given string is in Flat case or not.
/* Flat case: As the name implies, flat-case refers to the use of lowercase letters, with no spaces between words.
Test Data :
('j') -> true
('java exercises') -> false
('JavaScriptExercises') -> false
('javascriptexercises') -> true
(12356) -> "It must be a string." */
function checkFlatCase(str){
    if (typeof str !== 'string') return "It must be a string."

    let pattern = /^[a-z]*$/;
    return pattern.test(str);
}
console.log(checkFlatCase('j'));
console.log(checkFlatCase('java exercises'));
console.log(checkFlatCase('JavaScriptExercises'));
console.log(checkFlatCase('javascriptexercises'));
console.log(checkFlatCase(123564));
/* => true */
/* => false */
/* => false */
/* => true */
/* => "It must be a string" */

//69. Write a function to check a given string is in Kebab case or not.
/* Kebab case: "the-quick-brown-fox-jumps-over-the-lazy-dog"
Similar to snake case, above, except hyphens rather than underscores are used to replace spaces. It is also known as spinal case, param case, Lisp case in reference to the Lisp programming language, or dash case (or illustratively as kebab-case)
Test Data :
('j') -> true
('java exercises') -> false
('JavaScriptExercises') -> false
('javascriptexercises') -> true
(12356) -> "It must be a string." */

//70. Write a function to check whether a string is a Pangram or not.
/* A pangram or holoalphabetic sentence is a sentence using every letter of a given alphabet at least once. Pangrams have been used to display typefaces, test equipment, and develop skills in handwriting, calligraphy, and keyboarding
Test Data :
("The quick brown fox jumps over the lazy dog") -> true
("Waltz, bad nymph, for quick jigs vex.") -> true
("The five boxing wizards jump quickly.") -> true
("The boxing wizards jump quickly.") -> false
(12356) -> "It must be a string." */

//71. Write a function to check whether a string is in Pascal case or not.
/* A PascalCase naming convention capitalizes the first letter of each compound word in a variable. It is a best practice in software development to use descriptive variable names.
Test Data :
("XmlStream") -> true
("IOStream") -> true
("javascript") -> false
(12356) -> "It must be a string." */

//72. Write a function that receives a string and determine whether or not it can be rearranged to become a palindrome.
/* When a word, phrase, or sequence can be read both forward and backward, it is considered a palindrome. e.g., madam or nurses run.
Test Data :
("maamd") -> true
("civic") -> true
("IO") -> false
(12321) -> "It must be a string." */

//73. Write a program to find the most frequent character in a given string.
/* Test Data :
("Madam") -> "a"
("civic") -> "c"
("HellloL223LLL") -> "L"
(12321) -> "It must be a string." */

//74. Write a program to find the most frequent word in a given string.
/* Test Data :
("The quick brown fox jumps over the lazy dog") -> "the"
("Python is a high-level, general-purpose programming language.") -> "python"
(" It was the same man, she was sure of it. It's always the same, Chauncey.") -> "was"
(12321) -> "It must be a string." */

//75. Write a function to reverse words in a given string.
/* Test Data :
("abc") -> "cba"
("JavaScript Exercises") -> "tpircSavaJ sesicrexE"
(1234) -> "It must be a string." */

//76. Write a function to find the length of longest subsequence present in given two sequences.
/* It is important to understand that a subsequence is a sequence that appears in a similar relative order, but is not necessarily contiguous.
Test Data :
("abcda", "abcdef") -> 4
("ABCD", "ACBAD") -> 3
("pqr", "pqr") -> 3
("pqr", "abc") -> 0 */

//78. Write a function to get the length of the longest valid parentheses (well-formed) from a given string containing just the characters '[' and ']'.
/* Test Data :
The longest valid parentheses substring is "[]".
("[[]") -> 2
The longest valid parentheses substring is "[][]".
("][][]]") -> 4
No valid parentheses substring.
("") -> 0 */

//79. Write a function to find the length of the longest palindromic subsequence in a given string.
/* Subsequences are sequences that can be created by deleting some or all of the elements from another sequence without changing their order.
Test Data :
("aaaba") -> 4
("maadaem") -> 5
("zkksk") -> 3
("ab") -> 1
("") -> "" */

//80. Write a function that takes a positive integer and reverse the binary representation of that integer. Finally return the decimal version of the binary string.
/* Test Data :
(100) -> 19
Explanation:
Binary representation of 100 is 1100100
Reverse of 1100100 is 10011
Decimal form of 10011 is 19
(1134) -> 945
Explanation:
Binary representation of 1134 is 10001101110
Reverse of 10001101110 is 1110110001
Decimal form of 1110110001 is 945 */












































