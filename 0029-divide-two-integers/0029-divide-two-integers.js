/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let max = 2147483647
    let min = -2147483648
    if(dividend===min && divisor===-1) return max

    return Math.trunc(dividend/divisor)
};