// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return str
    .split("")
    .map((char, index, arr) => {
      return index === 0 || arr[index - 1] === " " ? char.toUpperCase() : char;
    })
    .join("");
}

function capitalizeMapLong(str) {
  const arr = str.split("");
  const capitalized = arr.map((char, index) => {
    // console.log(index, ": ", char);
    if (index === 0) {
      return char.toUpperCase();
    } else if (arr[index - 1] === " ") {
      return char.toUpperCase();
    } else {
      return char;
    }
  });
  return capitalized.join("");
}

function capitalizeFor(str) {
  const arr = str.split("");
  const capitalized = [];
  for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
      capitalized.push(str[i].toUpperCase());
    } else if (str[i - 1] === " ") {
      capitalized.push(str[i].toUpperCase());
    } else {
      capitalized.push(str[i]);
    }
  }
  return capitalized.join("");
}

module.exports = capitalize;
