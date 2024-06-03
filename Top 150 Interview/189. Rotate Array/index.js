/**
 * @param {number[]} nums Array that must be sorted in-place.
 * @param {number} k Number of elements to "rotate".
 * @return {void} Do not return anything, modify nums in-place instead.
 */
module.exports = function rotate(nums, k) {
    
    solution3(nums, k);
};

/**
 * Solution 1: We're making use of JavaScript's splice function that inserts / deletes elements to / from the array.
 * 
 * Complexity is dependent on splice functions' implementation.
 */
function solution1(nums, k) {

    // If our k is bigger than array length, get modulo out of it because array shift will duplicate values bigger than length of array.
    const moduloK = k % nums.length;

    // First, we remove k elements from the end of the array
    const deletedElems = nums.splice(
        nums.length - moduloK,
        moduloK
    );

    // Second, we're inserting them at the beginning of the array
    nums.splice(
        0,
        0,
        ...deletedElems
    );

    // Now we've "rotated" our array in-place.
}

/**
 * Solution 2: Iterate through array and replace elements so it "rotates" them. 
 */
function solution2(nums, k) {

    const moduloK = k % nums.length;

    const cache = [];
    for (let i = 0; i < nums.length; i++) {
        
        if (i < nums.length - moduloK) {
            cache.push(nums[i]);
        }

        if (i < moduloK) {
            nums[i] = nums[nums.length - moduloK + i];
        } else {
            nums[i] = cache.shift();
        }
        
    }
}

/**
 * Solution 3: Iterate modulo(k) times. Each time you do it, put last element at the beginning of the array and remove last element.
 */
function solution3(nums, k) {

    const moduloK = k % nums.length;

    for (let index = nums.length - moduloK; index < nums.length; index++) {
        
        nums.splice(0, 0, nums.pop());
    }
}