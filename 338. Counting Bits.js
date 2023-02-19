/**
 * @return {number[]}
 * @param num
 */

var countBits = function (num) {
    let bits = [];
    for (let i = 0; i <= num; i++)
        bits.push(Number(i).toString(2).replace(/0/g, '').length);
    return bits;
};

console.log(countBits(5));