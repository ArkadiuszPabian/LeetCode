const rotate = require('./index.js');

describe('rotate', () => {

    it('should satisfy Example 1', () => {

        const inputArray = [1,2,3,4,5,6,7];

        rotate(
            inputArray,
            3
        );

        expect(inputArray).toEqual(
            [5,6,7,1,2,3,4]
        );
    });

    it('should satisfy Example 2', () => {

        const inputArray = [-1,-100,3,99];

        rotate(
            inputArray,
            2
        );

        expect(inputArray).toEqual(
            [3,99,-1,-100]
        );
    });

    it('should be correct if k = 0', () => {

        const inputArray = [7, 6, 12, 4];

        rotate(
            inputArray,
            0
        );

        expect(inputArray).toEqual(
            [7, 6, 12, 4]
        );
    });

    it('should be correct if k = 5 and array is [1, 2]', () => {

        const inputArray = [1, 2];

        rotate(
            inputArray,
            5
        );

        expect(inputArray).toEqual(
            [2, 1]
        );
    });
})