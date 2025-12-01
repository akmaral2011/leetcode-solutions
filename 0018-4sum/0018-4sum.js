/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums=nums.sort((a,b)=>a-b)
    let result = [];

    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            for (let k = j + 1; k < nums.length - 1; k++) {
                for (let s = k + 1; s < nums.length; s++) {
                    if (nums[i] + nums[j] + nums[k] + nums[s] === target) {
                        let quad = [nums[i], nums[j], nums[k], nums[s]];
                         if (!result.some(r =>
                            r[0] === quad[0] &&
                            r[1] === quad[1] &&
                            r[2] === quad[2] &&
                            r[3] === quad[3]
                        )) {
                            result.push(quad);
                        }
                    }
                }
            }
        }
    }

    return result; 
};
