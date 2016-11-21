var assert = require('assert');
var OperatorNode = require('./operatorNode');
var NumberNode = require('./numNode');

describe('operatorNode',function(){
	it('should generate Node Of operator',function(){
		var operatorNode = new OperatorNode('+', new OperatorNode('-', new NumberNode(3), new NumberNode(1)), new NumberNode(4));
		assert.equal('( ( 3 - 1 ) + 4 )',operatorNode.evaluate());
	});
})