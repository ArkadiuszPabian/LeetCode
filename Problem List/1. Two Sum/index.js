/**
 * @param {number[]} nums - array of numbers (2 <= nums.length <= 10^4)
 * @param {number} target - target number (10^9 <= target <= 10^9)
 * @return {number[]} indices of the two numbers such that they add up to target, e.g. [ 0, 1 ] where num is [ 2, 7 ] and target is 9
 */
var twoSum = function (nums, target) {

    // store calculated solutions
    const solved = {}

    for (let i = 0; i < nums.length; i++) {

        // curr number
        const num = nums[i]

        // check if solution exists based on previously collected items
        const solution = target - num

        // check if there is previous solution that matches result of our target
        // if so, get its index, otherwise return undefined
        const solutionIndex = solved[solution]

        // if solution index is set, we found out solution
        if (solutionIndex !== undefined) {

            return [solutionIndex, i]
        }

        // otherwise keep iterating but first, store solution
        solved[num] = i
    }

    // this place produces return undefined but we don't care cuz there is always (at least) one solution

    // Pros of the solution:
    // Everything can be done in one roundtrip so there is O(n) complexity
    //
    // Cons of the solution:
    // Potentially big memory footprint -> the 'solved' object keeps growing infinitely
    // We have up to 10^4 size of the array. We also have 8-bit entries (JS Number type) in input array.
    // Our output array stores two numbers - one for solution, one for index.
    // So, output memory footprint (aside from allocation of JS object) can be estimated as 9.999 (max input array size minus last element which will never be in an output) x (8 bytes for solution + 8 bytes per index) = 159,984 bytes ~ 156kB
}