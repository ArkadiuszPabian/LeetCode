const twoSum = require('./index.js');

describe('twoSum', () => {

    it('should satisfy Example1', () => {

        const numbers = [2,7,11,15];
        const target = 9;

        const result = twoSum(numbers, target);

        expect(result).toEqual([1,2]);
    });

    it('should satisfy Example2', () => {

        const numbers = [2,3,4];
        const target = 6;

        const result = twoSum(numbers, target);

        expect(result).toEqual([1,3]);
    });

    it('should satisfy Example3', () => {

        const numbers = [-1,0];
        const target = -1;

        const result = twoSum(numbers, target);

        expect(result).toEqual([1,2]);
    });

    it('should satisfy LeetCode\'s unit test 6 ', () => {

        const numbers = [5, 25, 75];
        const target = 100;

        const result = twoSum(numbers, target);

        expect(result).toEqual([2,3]);
    });

    it('should satisfy LeetCode\'s unit test 17', () => {

        const numbers = [-3,3,4,90];
        const target = 0;

        const result = twoSum(numbers, target);

        expect(result).toEqual([1, 2]);
    });

    it('should satisfy LeetCode\'s unit test 18', () => {

        const numbers = [0, 0, 3, 4];
        const target = 0;

        const result = twoSum(numbers, target);

        expect(result).toEqual([1, 2]);
    });
});