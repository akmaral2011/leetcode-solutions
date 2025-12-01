/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = nums.indexOf(target)
    let last = nums.lastIndexOf(target)
    if(target === -1 && target ===0){
        return  [-1,-1]
    }else{
        return [first,last]
    }
};