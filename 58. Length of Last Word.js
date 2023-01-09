/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
   let wordLength = 0;
   s = s.trim();
   while (wordLength < s.length && s[s.length - 1 - wordLength] !== " ") {
      wordLength++;
   }
   return wordLength;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));