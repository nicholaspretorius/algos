// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function steps(n) {
  for (var i = n - 1; i >= 0; i--) {
    let cols = [];
    for (var j = 1; j <= n; j++) {
      if (j <= i) {
        cols.push(" ");
      } else if (j > i) {
        cols.push("#");
      }
    }
    console.log(cols.join(""));
  }
}
// steps(3);

function stepsAlt(n) {
  for (var i = n - 1; i >= 0; i--) {
    let cols = [];
    for (var j = 1; j <= n; j++) {
      if (j <= i) {
        cols.push(" ");
      } else if (j > i) {
        cols.push("#");
      }
    }
    console.log(cols.join(""));
  }
}
// stepsAlt(3);

module.exports = pyramid;

//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'
