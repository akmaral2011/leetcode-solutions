/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  
    let result1 = [];
    let result2 = [];

    for (let el of nums1) {
        if (!nums2.includes(el) && !result1.includes(el)) {
            result1.push(el);
        }
    }
    
    for (let el of nums2) {
        if (!nums1.includes(el) && !result2.includes(el)) {
            result2.push(el);
        }
    }

    return [result1, result2];


};