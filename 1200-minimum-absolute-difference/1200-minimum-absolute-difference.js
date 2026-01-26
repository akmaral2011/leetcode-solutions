/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b)=>a-b)
    let minDiff=Infinity;
    let result = [];
    for(let i=0;i<arr.length-1;i++){
        const difference1=arr[i+1]-arr[i]
        if(difference1<minDiff){
          minDiff=difference1
        }
        
    }

   for(let i=0;i<arr.length-1;i++){
        const difference2 = arr[i+1]-arr[i]
        if(difference2===minDiff){
            result.push([arr[i],arr[i+1]])
        }
   }
   return result

};