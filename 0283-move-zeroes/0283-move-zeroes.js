/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeros=[]
    let others=[]
   for(let i = 0;i<nums.length;i++){
    if(nums[i]!==0){
        others.push(nums[i])
    }else{
        zeros.push(nums[i])
    }
   }
   nums.length=0
   return nums.push(...others,...zeros)
};