var NumArray = function (nums) {
    let l = nums.length;
    for (let i = 1; i < l; i++)
        nums[i] += nums[i - 1];
    this.sums = nums;
};

NumArray.prototype.sumRange = function (left, right) {
    return this.sums[right] - (left > 0 ? this.sums[left - 1] : 0);
};
let obj = new NumArray([-2, 0, 3, -5, 2, -1]);
let param_1 = obj.sumRange(0, 2);
console.log(param_1);
