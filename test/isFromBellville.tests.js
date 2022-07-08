

import assert from "assert"
import isFromBellville  from "../isFromBellville.js";

describe('this test shows...(isFromBellville)' , function(){
    it('should should return all registration from belliville' , function(){
        assert.equal(true, isFromBellville('CY 12333'));

    });
    it('should return falls for all registration not from belliville' , function(){
        assert.equal(false, isFromBellville('12333  CY'));

    });
    it('should should return all registration from belliville' , function(){
        assert.equal(true, isFromBellville('CY 12333'));

    });
    

});