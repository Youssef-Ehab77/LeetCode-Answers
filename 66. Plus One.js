/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
   let result = "";

   for (let i = 0; i < digits.length; i++)
      result += digits[i];

   result = (BigInt(result) + BigInt(1)).toString();
   result = result.split('');
   console.log(result);

};

plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]);