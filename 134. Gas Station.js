/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let sum = 0;
    let index = 100001;

    for (let i in gas) {
        gas[i] -= cost[i];
        sum += gas[i];
    }
    if (sum < 0)
        return -1;

    sum = 0;
    for (let i in gas) {
        sum += gas[i];
        if (sum < 0) {
            index = Infinity;
            sum = 0;
        } else {
            index = Math.min(i, index);
        }
    }
    return index;
};

console.log(canCompleteCircuit([5, 8, 2, 8], [6, 5, 6, 6]));
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));


//**************************************** brute force Run time exceed**********************
//let totalCost;
// let length = gas.length;
// for (var i = 0; i < length; i++) {
//     totalCost = 0;
//     for (let j = 0; j < length; j++) {
//         totalCost += gas[(j + i) % length];
//         if (totalCost < 0)
//             break;
//     }
//     if (totalCost >= 0)
//         return i;
// }
// return -1;
/////////////////////////////////////////////////////////////////////////////////////////////////////
//    //get the max number of
//     for (let i in gas) {
//         if (gas[i] >= 0) {
//             if (currentMax === 0) {
//                 currentIndexOfMax = i;
//             }
//             currentMax += gas[i];
//
//             if (currentMax > max) {
//                 max = currentMax;
//                 indexOfMax = currentIndexOfMax;
//             }
//         } else {
//             max -= gas[i];
//             if(max < 0){
//
//             }
//         }
//     }
//     console.log(gas)
//     return indexOfMax;
