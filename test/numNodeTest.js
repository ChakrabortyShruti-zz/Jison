var assert = require('assert');
var NumberNode = require('../lib/numNode.js')

describe('numNode',function(){
	it('should generate Node Of number',function(){
		var numberNode = new NumberNode(7);
		assert.equal(7,numberNode.evaluate());
	});
	it('should generate numberNode which evaluates the number 4 as "four"' ,function(){
		var numberNode = new NumberNode(4);
		assert.equal('four',numberNode.evaluateToWords());
	});
});
