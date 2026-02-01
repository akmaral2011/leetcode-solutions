/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const format=str=>str.toLowerCase().split('').sort().join('')

    return format(s)===format(t)
};