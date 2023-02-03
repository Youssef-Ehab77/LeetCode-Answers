/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    let alphabet = {};
    let wordsValue = [];
    let max = -1;

    for (let i in order)
        alphabet[order[i]] = (parseInt(i) + 1);

    for (let word of words)
        if (word.length > max)
            max = word.length

    for (let i in words) {
        wordsValue[i] = 0;
        for (let j = 0; j < words[i].length; j++) {
            wordsValue[i] += (alphabet[words[i][j]] * Math.pow(10, max - j));
        }
    }
    for (let i = 0; i < wordsValue.length - 1; i++) {
        if (wordsValue[i] > wordsValue[i + 1]) {
            return false;
            break;
        }
    }
    return true;
};

console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
console.log(isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"));

//Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.