/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
   let counter = nums.length;
   for(let i = 0; i < nums.length-1 ; i++)
   {
      if(nums[i] == nums[i+1])
      {
         nums.splice(nums.indexOf(nums[i+1]),1);
         counter--;
      }
         
   }
   console.log(counter);
   return nums;
};


console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 99, 99]));


/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//    let counter = nums.length;
//    for (var i = 0; i < nums.length; i++) {
//       if (nums[i] == nums[i + 1]) {
//          nums[i] = NaN;
//          counter--;
//       }

//    }
//    nums.sort(function (a, b) {
//       return a - b;
//    });
//    console.log(nums);
//    return counter;
// };

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 99, 99]));

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// var removeDuplicates = function (nums) {
//    let counter = 0;
//    for (var i = 1; i < nums.length; i++) {
//       if (nums[i] != nums[counter]) {
//          nums[++counter] = nums[i];
//       }
//    }
//    console.log(nums);
//    return counter;
// };

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 99, 99]));
