/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    let result = []
    let n=nums.length

    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            result.push(nums[i])
        } else {
            let idx = ((i + nums[i]) % n + n) % n
            result.push(nums[idx])
        }
    }

    return result
};