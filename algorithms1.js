// Reverse a given string and output it as a string.
function reverseString(str) {
  for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
// Reverse a given string and output it as a string. (Alternate Solution)
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

