var assert = require('assert');
var NumberNode = require('./numNode')

describe('numNode',function(){
	it('should generate Node Of number',function(){
		var numberNode = new NumberNode(7);
		assert.equal(7,numberNode.evaluate());
	});
});