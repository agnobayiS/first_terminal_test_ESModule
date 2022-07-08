import assert from "assert"
import countRegNumber  from "../countRegNumber.js";

describe('this test (countRegNumber)' , function(){
    it('should return the number the number of regNo in the list' , function(){
        assert.equal(3,countRegNumber("111 CY,233 CY,222 CY"));

        // assert.deepEqual([2,2],[2,2]);
    });

    it('should return zero when the is an empty string' , function(){
        assert.equal(0,countRegNumber(""));

    //     assert.deepEqual([2,2],[2,2]);
    });
    it('should return the total number of registration numbers in the list' , function(){
        assert.equal(3,countRegNumber("111 CY,233 CY,222 CY"));

        // assert.deepEqual([2,2],[2,2]);
    });

});