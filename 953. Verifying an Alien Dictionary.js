/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    let alphabet = {};
    let wordsValue = [];
    let max = -1;

    //add the new alphabet in a dictionary
    for (let i in order)
        alphabet[order[i]] = (parseInt(i) + 1);

    //get maximum word length
    for (let word of words)
        if (word.length > max)
            max = word.length

    //get the word value as integer for example
    // order -> hlabcdefgijkmnopqrstuvwxyz ,  word -> hello
    //wordValue +=  ( h = alphabet['h'] = 1 ) *  (10 ^ maxWordLength - index in word(0))
    //wordValue +=  ( e = alphabet['e'] = 7 ) *  (10 ^ maxWordLength - index in word(1))
    //wordValue +=  ( l = alphabet['e'] = 2 ) *  (10 ^ maxWordLength - index in word(2))
    //wordValue +=  ( l = alphabet['e'] = 2 ) *  (10 ^ maxWordLength - index in word(3))
    //wordValue +=  ( o = alphabet['e'] = 15 ) * (10 ^ maxWordLength - index in word(4))
    // now we got the word value, now compare it to the previous word if exists,
    // if its value is bigger than the previous word this means its in the right place else return false
    for (let i = 0; i < words.length; i++) {
        wordsValue[i] = 0;
        for (let j = 0; j < words[i].length; j++) {
            wordsValue[i] += (alphabet[words[i][j]] * Math.pow(10, max - j));
        }
        if (i > 0 && wordsValue[i] < wordsValue[i - 1]) {
            return false;
        }
    }
    return true;
};

console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
console.log(isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"));
