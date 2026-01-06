/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
        let res=-1;
        for(let num of arr){
            let count=0
            for(let a of arr){
            if(num===a){
                count++
            }
            
        }
        if(count===num){
            res=Math.max(res,num)
        }
        
}
        return res
};