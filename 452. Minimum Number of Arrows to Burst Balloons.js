/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    let arrows = 1;
    points.sort(function (a, b) {
        return a[0] - b[0];
    });
    let currentNum = points[0][1];

    for (let i = 0; i < points.length - 1; i++) {
        if (currentNum > points[i + 1][1]) {
            currentNum = points[i + 1][1];
        } else if (currentNum < points[i + 1][0]) {
            currentNum = points[i + 1][1];
            arrows++;
        }
    }
    return arrows;
};
//let points = [[10, 16], [2, 8], [1, 6], [7, 12]];
//let points = [[1, 2], [3, 4], [5, 6], [7, 8]];
let points = [[-1, 1], [0, 1], [2, 3], [1, 2]];
console.log(findMinArrowShots(points));
