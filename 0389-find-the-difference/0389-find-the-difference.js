/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    for (let i = 0; i < t.length; i++) {
        let found = false;

        for (let j = 0; j < s.length; j++) {
            if (t[i] === s[j]) {
                found = true;
                
                s = s.slice(0, j) + s.slice(j + 1);
                break;
            }
        }

        if (!found) {
            return t[i]; 
        }
    }
}; 