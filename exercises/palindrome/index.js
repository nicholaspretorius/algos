// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const rev = reverse(str);
  return str === rev;
}

function palindromeEvery(str) {
  return str.split("").every(comparison);
}

function comparison(letter, index, arr) {
  return letter === arr[arr.length - (index + 1)];
}

function palindromeForMid(str) {
  const arr = str.split("");
  const mid = arr.length / 2;
  const trueFalse = [];

  for (var i = 0; i < mid; i++) {
    // console.log(arr[i], " : ", arr[arr.length - 1 - i], arr[i] == arr[arr.length - 1 - i]);
    if (arr[i] == arr[arr.length - 1 - i]) {
      trueFalse.push(true);
    } else {
      trueFalse.push(false);
    }
  }

  return trueFalse.indexOf(false) >= 0 ? false : true;
}

function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

palindrome("Fish hsif");

module.exports = palindrome;
