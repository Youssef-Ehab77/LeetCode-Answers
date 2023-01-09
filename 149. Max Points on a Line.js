/**
 * @param {number[][]} points
 * @return {number}
 */

var maxPoints = function (points) {
    if (points.length === 1)
        return 1;
    let values = [];
    let map = {};
    for (let i = 0; i < points.length; i++) {
        map = {}
        for (let j = i+1; j < points.length; j++) {
            let slope = (points[j][1] - points[i][1]) / (points[j][0] - points[i][0]);
            if (map[slope]) {
                map[slope]++;
            } else map[slope] = 1;
        }
        values[i] = getMaxOccurrence(map);
    }
    return Math.max(...values) + 1;
};

var getMaxOccurrence = function (map) {
    let max = -1;
    for (let i in map) {
        if (map[i] > max)
            max = map[i];
    }
    return max;
}

console.log(maxPoints([[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]));
