/*** Regular Expressions - Regex ***/

// '[a-z]' find all letters '/i' ignore case '/g' match each occurance
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
let result = quoteSample.match(alphabetRegex);
console.log(result);  //Output:["T", "h", "e", "q", "u", "i", "c", "k", "b", "r", "o", "w", "n", "f", "o", "x", "j", "u", "m", "p", "s", "o", "v", "e", "r", "t", "h", "e", "l", "a", "z", "y", "d", "o", "g"]
console.log(result.length); //Output: 35

/* Find usernames which meet the following conditions:
    1) Usernames can only use alpha-numeric characters.
    2) The only numbers in the username have to be at the end. There can be zero or more of them at the end.
    3) Username letters can be lowercase and uppercase.
    4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*$)/i;
let result = userCheck.test(username);
/* What each of the symbols mean:
  ^ - start of input
  [a-z] - first character is a letter
  [0-9]{2,0} - ends with two or more numbers
  | - or
  [a-z]+ - has one or more letters next
  \d* - and ends with zero or more numbers
  $ - end of input
  i - ignore case of input
*/
