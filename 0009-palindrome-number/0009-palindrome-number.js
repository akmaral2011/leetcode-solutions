/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0)return false;
    let num = x.toString();
    let text = num.split('').reverse().join('');
   return text===num
};