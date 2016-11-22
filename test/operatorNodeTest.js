var assert = require('assert');
var OperatorNode = require('../operatorNode.js');
var NumberNode = require('../numNode.js');

describe('operatorNode',function(){
	it('should generate Node for operator',function(){
		var operatorNode = new OperatorNode('+', new OperatorNode('-', new NumberNode(3), new NumberNode(1)), new NumberNode(4));
		assert.equal('( ( 3 - 1 ) + 4 )',operatorNode.evaluate());
	});
	it('should generate Node for operator',function(){
		var operatorNode = new OperatorNode('+', new OperatorNode('-', new NumberNode(3), new NumberNode(1)), new NumberNode(4));
		assert.equal('( ( three MINUS one ) PLUS four )',operatorNode.evaluateToWords());
	});
})
