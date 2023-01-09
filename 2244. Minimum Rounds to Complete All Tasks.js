/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
    let output = 0;
    let frequency = {};

    for (let i of tasks) {
        if (frequency[i]) frequency[i]++;
        else frequency[i] = 1;
    }
    for (let i in frequency) {
        if (frequency[i] === 1)
            return -1;
        output += Math.ceil(frequency[i] / 3);
    }
    return output;
};

let tasks = [2, 2, 3, 3, 2, 4, 4, 4, 4, 4];
console.log(minimumRounds(tasks));