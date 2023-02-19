/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
    //total time complexity 2n + 3 n^2 =  n^2;
    let totalNumberOfAddedFloors = 0;
    let length = grid.length;
    let rowMax = new Array(length).fill(0);
    let colMax = new Array(length).fill(0);

    for (let r = 0; r < grid.length; r++)
        rowMax[r] = Math.max(...grid[r]);

    for (let c = 0; c < grid.length; c++)
        for (let r = 0; r < grid.length; r++)
            if (colMax[c] < grid[r][c])
                colMax[c] = grid[r][c]

    for (let r = 0; r < grid.length; r++)
        for (let c = 0; c < grid.length; c++) {
            let min = Math.min(rowMax[r], colMax[c]);
            if (min > grid[r][c])
                totalNumberOfAddedFloors += min - grid[r][c];
        }
    return totalNumberOfAddedFloors;
};

console.log(maxIncreaseKeepingSkyline([[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]]));
/*
totalNumberOfAddedFloors = 0;
rowMax  = [8,7,9,3], colMax = [9,4,8,7]

3 -> r = 0 c = 0
for(i = 0, i < grid.len)
      if(rowMaX[r] < grid[r][i])
        rowMax[r] = grid[r][i]

for(i = 0, i < grid.len)
      if(colMaX[i][c] < grid[i][c])
        colMaX[c] = grid[i][c]



*/