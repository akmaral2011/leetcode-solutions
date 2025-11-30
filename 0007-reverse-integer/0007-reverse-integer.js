/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let negative=x<0
    let num = Math.abs(x).toString().split('').reverse().join('')
    let result = negative?(parseInt(num)*(-1)):parseInt(num)
    
    if (result < -(2 ** 31) || result > 2 ** 31 - 1) {
        return 0;
    }

    return result
};