// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(arr, size) {
  const chunked = [];

  for (let el of arr) {
    let last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([el]);
    } else {
      last.push(el);
    }
  }

  return chunked;
}

function chunkFor(arr, size) {
  let start = 0;
  let end = size;
  const chunked = [];

  for (var i = 0; i < arr.length; i++) {
    if (i === start) {
      chunked.push(arr.slice(start, end));
      start = start + size;
      end = end + size;
    }
  }
  return chunked;
}

module.exports = chunk;
