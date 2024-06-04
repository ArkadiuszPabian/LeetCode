/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
module.exports = function twoSum(numbers, target) {
    
    let index = 1;
    while (numbers.length > 0) {
        
        const firstElem = numbers.shift();

        const nextElemVal = target - firstElem;

        let searchIndex = numbers.indexOf(nextElemVal);

        if (searchIndex > -1) {

            return [ index, searchIndex + index + 1 ]
        } else {
            index++;
        }
    }

    return [ -1, -1 ];
};