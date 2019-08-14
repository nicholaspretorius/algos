// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // const arr = str.split("");
  const arr = Array.from(str);
  return arr.reverse().join("");
}

function reverseReduce(str) {
  return str.split("").reduce((result, letter) => {
    return letter + result;
  }, "");
}

function reverseForOf(str) {
  let reversed = "";

  for (let letter of str) {
    reversed = letter + reversed;
  }

  return reversed;
}

function reverseLoop(str) {
  const arr = str.split("");
  const rev = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }

  return rev.join("");
}

function reverseWhile(str) {
  let count = str.length - 1;
  let revStr = "";
  while (count >= 0) {
    revStr += str.charAt(count);
    count -= 1;
  }
  return revStr;
}

module.exports = reverse;
