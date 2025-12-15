/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let result=0
    for(let i =0;i<nums.length;i++){
        if(result<2 || nums[i]!==nums[result-2] ){
           nums[result] = nums[i]
            result++
        }
    }
   return result
};