/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let array = nums.sort((a,b)=>a-b)
    sum = 0 
    for(let i=0;i<array.length;i+=2){
       sum+=array[i]
        
        }
       return sum
};