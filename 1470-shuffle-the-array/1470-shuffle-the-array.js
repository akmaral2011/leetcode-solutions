/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let firstArray = nums.slice(0,n)
    let secondArray = nums.slice(n)
    let result =[]
    
    for(let i=0;i<firstArray.length;i++){
        result.push(firstArray[i])
        result.push(secondArray[i])
            
        
    }
    return result
};