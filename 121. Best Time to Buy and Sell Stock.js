/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buyIndex = prices[0];
    let profit = 0;

    for (let price of prices) {
        if(price < buyIndex)
            buyIndex = price;
        profit = Math.max(profit, price - buyIndex);
    }
    return profit;
};

console.log(maxProfit([2, 7, 1, 4]));

//var maxProfit = function (prices) {
//
//     let sellIndex = 1;
//     let buyIndex = 0;
//     let profit = 0;
//
//     while (sellIndex < prices.length) {
//         if (prices[buyIndex] < prices[sellIndex])
//             profit = Math.max(profit, (prices[sellIndex] - prices[buyIndex]));
//         else buyIndex = sellIndex;
//         sellIndex++;
//     }
//     return profit;
// };