
var itemList = [
  { name: 'apples', qty: 10 },
  { name: 'pears', qty: 37 },
  { name: 'bananas', qty: 27 },
  { name: 'apples', qty: 3 },
];

var results = [
  { name: 'pears', qty: 37 },
  { name: 'bananas', qty: 27 },
];

var itemList2 = [
  { name: 'apples', qty: 10 },
  { name: 'pears', qty: 19 },
  { name: 'bananas', qty: 17 },
  { name: 'apples', qty: 3 },
];

var results2 = [];

var itemList3 = [
  { name: 'apples', qty: 40 },
  { name: 'pears', qty: 20 },
  { name: 'bananas', qty: 23 },
  { name: 'apples', qty: 37 }
];

var results3 = [
  { name: 'apples', qty: 40 },
  { name: 'bananas', qty: 23 },
  { name: 'apples', qty: 37 }
];


import assert from "assert"
import findItemsOver  from "../findItemsOver.js";

describe('this test (findItemsOver)', function () {
  it('should return the only the name of iterms with qty that is over the threshold ', function () {

    assert.deepEqual(results, findItemsOver(itemList, 20));
    assert.deepEqual(results3, findItemsOver(itemList3, 20));



  });

  it('should return an empty list if all data in the list is less than threshold ', function () {

    assert.deepEqual(results2, findItemsOver(itemList2, 20));




  });



});