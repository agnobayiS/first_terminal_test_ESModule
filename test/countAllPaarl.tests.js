import assert from "assert"
import countAllPaarl  from "../countAllPaarl.js";

describe('this test (countAllPaarl)' , function(){
    it('should return the number of times the paarl registration apears in the list', function(){
        assert.equal(2,countAllPaarl(" CJ 111,CJ 222, CA 333 "));

    
    });
    it('should return zero if an empty string is passed' , function(){
        assert.equal(0,countAllPaarl(' '));

    
    });


    it('should return the number of times the paarl registration apears in the list', function(){
        assert.equal(4,countAllPaarl(" CJ 111,CJ 222, CA 333, CJ 756, CJ 845 "));

    
    });


    it('should return zero if the is no registration from paarl' , function(){
        assert.equal(0,countAllPaarl('CA 111 ,CY 2222'));

    
    });

});