/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const seenNums = {}; 

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const needed = target - current;

        if (seenNums.hasOwnProperty(needed)) {
            return [seenNums[needed], i]; 
        }

        seenNums[current] = i;
    }
};