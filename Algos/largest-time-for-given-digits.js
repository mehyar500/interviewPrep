/**
 * largest-time-for-given-digits
 * Given an array arr of 4 digits, find the latest 24-hour time that can be made using each digit exactly once.
 * 24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.
 * Return the latest 24-hour time in "HH:MM" format.  If no valid time can be made, return an empty string.
 */


/**
 * @param {number[]} arr
 * @return {string}
 */
var largestTimeFromDigits = function(arr) {

    const convert = (h, m) => (parseInt(h) * 60) + parseInt(m)
    
    const isValid = (h, m) => parseInt(h) <= 23 && parseInt(m) <= 59
    
    let permutations = []
    
    let max = 0
     
    const check = (permutation) => {
        let h = permutation[0]+''+permutation[1]
        let m = permutation[2]+''+permutation[3]
        
        if (isValid(h, m)) {
            if (!max || convert(max[0], max[1]) < convert(h, m)) max = [h, m]
        }
    }
    
    const permute = (array, index) => {
        if (index == array.length) check([...array])
        for (let i = index; i < array.length; i++) {
            [array[index], array[i]] = [array[i], array[index]]
            permute(array, index+1);
            [array[index], array[i]] = [array[i], array[index]]
        }
    }
    
    permute(arr, 0)
   
    return max ? max[0]+':'+max[1] : ''
    
};