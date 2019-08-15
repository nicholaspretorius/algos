// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const rev = parseInt(reverseIntToString(n));
  return rev * Math.sign(n);
}

function reverseIntTernary(n) {
  const rev = parseInt(reverseIntToString(n));
  return n >= 0 ? rev : -rev;
}

function reverseIntToString(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .join("");
}

module.exports = reverseInt;
