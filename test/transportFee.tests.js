
import assert from "assert"
import transportFee from "../transportFee.js";

describe('this test (transportFee)' , function(){
    it('should return transportFee needed for a morning shift', function(){
        assert.equal('R20',transportFee('morning'));

    
    });

    it('should return transportFee needed for a afternoon shift' , function(){
        assert.equal('R10',transportFee('afternoon'));

    
    });
    it('should return transportFee needed for a nightshift shift' , function(){
        assert.equal('free',transportFee('nightshift'));

    
    });
   
});