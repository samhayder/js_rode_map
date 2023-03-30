//01. Count name is "Sumit" & also find first index.
let sentence = "Learn with Sumit is all about teaching web development skills and techniques in an efficient and practical manner. If you are just getting started in web development, Learn with Sumit has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. Lear with Sumit also deep dives into advanced topics using the latest best practices for you seasoned web developers."

/* let count = 0;
let sentenceSplit = sentence.split(' ').filter((item) => {
    item.includes("Sumit") ? count++ : count;
})
console.log(sentenceSplit);
console.log(count); */

let matches = sentence.match(/sumit/gi);
let occurrence = matches ? matches.length : 0;
console.log(occurrence);

let position = sentence.search(/sumit/i);
position = position >= 0 ? position :  "Not found";
console.log(position);

//02. Input: linearSearch(['a', 'b', 'c', 'd', 'c'], 'c')
// Output: 2 or 'not fund!'
// problem: linerSearch() function implement
function linerSearch(arr, value){
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] === value) {
        return i;
    }
  }
  return 'not found'
}
console.log(linerSearch(['a', 'b', 'c', 'd', 'c'], 'c'));

//03. Find an array longestSting and show its index number
function longestSting(arr) {
  let longWord = '';

  for (let item of arr) {
    if (item.length > longWord.length) {
        longWord = item;
    }
  }

  return [longWord, arr.indexOf(longWord)];
}
console.log(longestSting(['Samsuddin', 'Salman Yasin', 'Suriya Jannat']));