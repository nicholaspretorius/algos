// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (var i = 1; i <= n; i++) {
    let cols = [];
    for (var j = 1; j <= n; j++) {
      if (j <= i) {
        cols.push("#");
      } else if (j > i) {
        cols.push(" ");
      }
    }
    console.log(cols.join(""));
  }
}
// steps(3);

module.exports = steps;
