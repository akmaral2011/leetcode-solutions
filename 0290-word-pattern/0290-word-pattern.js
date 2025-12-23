/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let word1=pattern.split('')
    let word2=s.split(' ')
    if(word1.length !== word2.length)return false

    for(let i =0;i<word1.length;i++){
        for(let j=i+1;j<word1.length;j++){
            if(word1[i]!==word1[j] && word2[i]===word2[j]){
            return false
            }
            if(word1[i]===word1[j] && word2[i]!==word2[j]){
                 return false
            }
        }
           
        }
    
     return true
};