/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
   let n = matrix.length;
   for (let i = 1; i < n; i++) {
      for (let j = 0; j < n; j++) {
         getMinValueBefore(matrix, i, j);
      }
   }
   return minPath(matrix[n - 1]);
};

function getMinValueBefore(matrix, i, j) {
   let n = matrix.length;
   if (j == 0) {
      matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i - 1][j + 1]);
   } else if (j == n - 1) {
      matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i - 1][j - 1]);
   } else {
      matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i - 1][j - 1], matrix[i - 1][j + 1]);
   }
}

function minPath(lastRow) {
   let min = Infinity;

   for (let i = 0; i < lastRow.length; i++)
      if (lastRow[i] < min)
         min = lastRow[i]

   return min;
}


console.log(minFallingPathSum([[2, 1, 3], [6, 5, 4], [7, 8, 9]]));