/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits=digits.join('')
    let num = BigInt(digits)+1n
    let result = String(num).split('')
    return result.map(Number)

};