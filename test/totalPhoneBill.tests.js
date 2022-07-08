
import assert from "assert"
import totalPhoneBill from "../totalPhoneBill.js";

describe('this test (totalPhoneBill)' , function(){
    it('should return the total price of the calls only', function(){
        assert.equal('R8.25',totalPhoneBill("call,call,call"));

    
    });

    it('should return the total price of the sms only' , function(){
        assert.equal('R1.95',totalPhoneBill("sms,sms,sms"));

    
    });
    it('should return the total price of the calls and sms ' , function(){
        assert.equal('R4.05',totalPhoneBill("sms,call,sms"));

    
    });

});