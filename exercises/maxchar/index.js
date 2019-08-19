// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};

  for (let char of str) {
    // !chars[char] ? chars[char] = 1 : chars[char];
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char] += 1;
    }
  }

  let highest;
  let key;

  for (let char in chars) {
    if (highest === undefined) {
      highest = { [char]: chars[char] };
      key = char;
    }

    if (chars[char] > highest[key]) {
      highest = { [char]: chars[char] };
      key = char;
    }

    return key;
  }
}

module.exports = maxChar;
