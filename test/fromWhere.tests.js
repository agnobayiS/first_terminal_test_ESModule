import assert from "assert"
import fromWhere  from "../fromWhere.js";

describe('this test (fromWhere)' , function(){
    it('should return the town the regNo is from out of the given towns', function(){
        assert.equal('Bellville',fromWhere("CY 123"));

    
    });

    it('should return some other place if the town is not in the list' , function(){
        assert.equal('Some other place!',fromWhere("EC 2022"));

    
    });
    it('should return some other place if an empty string is given' , function(){
        assert.equal('Some other place!',fromWhere(" "));

    
    });
    

});