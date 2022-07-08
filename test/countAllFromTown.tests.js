import assert from "assert"
import countAllFromTown  from "../countAllFromTown.js";

describe('this test (countAllFromTown)' , function(){
    it('should return the number of times a specific towregistration apears in the list', function(){
        assert.equal(2,countAllFromTown('CA 111 ,CY 2222 ,CA 654',"CA"));

    
    });

    it('should return zero if the is no registration from the same specic town' , function(){
        assert.equal(0,countAllFromTown('CA 111 ,CY 2222',"CJ"));

    
    });
    it('should return zero if the is no regNo given' , function(){
        assert.equal(0,countAllFromTown(""));

    
    });

});