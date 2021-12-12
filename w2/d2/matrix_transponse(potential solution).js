const transpose = function(matrix) {
  // declare an empty array
  let array = [];
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (x === 0) {
        array.push([matrix[x][y]]);
      } else {
        array[y].push(matrix[x][y]);
      }
    }
  }
  return array;