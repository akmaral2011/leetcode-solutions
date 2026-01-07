/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count = 0 ;
    for(let num of details){
        if(num.slice(11,13)>60){
            count++
        }
    }
    return count
};