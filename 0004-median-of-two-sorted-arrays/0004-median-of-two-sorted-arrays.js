/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let numbers = nums1.concat(nums2).sort((a,b)=>a-b)
    const middle = numbers.length/2

    if(numbers.length%2===1){
        return numbers[Math.floor(middle)]
    }else{
        return (numbers[middle-1]+numbers[middle])/2
    }

};