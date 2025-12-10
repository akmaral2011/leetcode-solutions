/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let i=0;i<nums.length;i++){
       if(nums[i]===target){
        return i
       }
       nums.push(target)
       let add=nums.sort((a,b)=>a-b)
       if(add[i]===target)
       return i
    }
};