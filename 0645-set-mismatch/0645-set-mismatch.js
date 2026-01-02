/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    nums.sort((a,b)=>a-b)
    let dublicate,missing;
    for(let i=1;i<nums.length;i++){
        if(nums[i]===nums[i-1]){
           dublicate=nums[i]
        }
        if(nums[i]-nums[i-1]>1){
            missing=nums[i-1]+1
        }
       if (!missing) {
        missing = nums.length;
    }
    }
    return  [dublicate,missing]
};