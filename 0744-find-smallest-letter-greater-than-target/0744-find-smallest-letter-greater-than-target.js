/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let result=[]
    
    
     for(let i=0;i<letters.length;i++){
        if(letters[i]>target){
            result.push(letters[i])
        }
    }
        if(result.length===0){ 
            return letters[0]
        }
     result.sort((a,b)=>a-b)

     return result[0]
};