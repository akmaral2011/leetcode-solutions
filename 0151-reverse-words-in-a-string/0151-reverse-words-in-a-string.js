/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let word = s.trim().split(' ').reverse()
    
    return word.join(' ').replace(/\s+/g, " ")
   
};