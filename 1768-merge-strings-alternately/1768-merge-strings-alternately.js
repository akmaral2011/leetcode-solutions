/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let wordOne=word1.split('')
    let wordTwo=word2.split('')
    let result = []
    let maxLength=Math.max(wordOne.length, wordTwo.length)
    for(let i =0;i<maxLength;i++){
        if(wordOne[i]!==undefined){
            result.push(wordOne[i])
        }
        if(wordTwo[i]!==undefined){
            result.push(wordTwo[i])
        }
    }
   return result.join('')
};