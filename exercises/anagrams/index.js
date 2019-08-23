// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const a = stringPrepare(stringA).join("");
  const b = stringPrepare(stringB).join("");
  return a === b;
}

function stringPrepare(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return string
    .toLowerCase()
    .split("")
    .filter(char => {
      if (alphabet.indexOf(char) >= 0) {
        //if (char !== "") {
        return char;
      }
    })
    .sort((a, b) => {
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    });
}

module.exports = anagrams;
