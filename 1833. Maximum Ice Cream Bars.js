/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
    costs.sort(function (a, b) {
        return a - b;
    });
    let count = 0;
    for (i of costs) {
        if (coins - i >= 0) {
            count++;
            coins -= i;
        }
    }
    return count;
};

console.log(maxIceCream([1, 3, 2, 4, 1], 7));
