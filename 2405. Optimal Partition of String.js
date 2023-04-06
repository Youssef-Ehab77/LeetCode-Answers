/**
 * https://leetcode.com/problems/optimal-partition-of-string/description/
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
    let charsCount = {};
    let maxOccurrence = 0;

    for (let i = 0; i < s.length; i++) {
        if (charsCount[s[i]]) {
            maxOccurrence++;
            charsCount = {[s[i]]: 1};
        } else charsCount[s[i]] = 1
    }
        return maxOccurrence + 1;
};
let word = "hdklqkcssgxlvehva";
console.log(partitionString(word))