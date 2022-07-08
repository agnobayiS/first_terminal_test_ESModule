
import assert from "assert"
import yearsAgo from "../yearsAgo.js";

describe('this test (yearsAgo)' , function(){
    it('should return how many years ago was the year given' , function(){
        assert.equal(28,yearsAgo(1994));

    
    });
    it('should return how many years ago was the year given' , function(){
        assert.equal(27,yearsAgo(1995));

    
    });

    it('should return 0 if its the current year' , function(){
        assert.equal(0,yearsAgo(2022));

    
    });

});