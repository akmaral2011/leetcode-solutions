/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    const first = nums[0]

    let minSecond = Infinity;
    let result = Infinity;

    for(let i=1;i<nums.length;i++){
        minSecond=Math.min(minSecond,nums[i])

        if(i+1<nums.length){
        result=Math.min(result,first+minSecond+nums[i+1])
        }
    }

    return result
};