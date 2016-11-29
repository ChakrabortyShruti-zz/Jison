var assert = require('assert');
var OperatorNode = require('../lib/operatorNode.js');
var NumberNode = require('../lib/numNode.js');
var Tree = require('../lib/Tree.js');

describe('operatorNode',function(){
	it('should generate Node for operator "3+1"',function(){
		var tree = new Tree(new OperatorNode('+'),[new NumberNode('3'),new NumberNode('1')])
		assert.equal('( 3 + 1 )',tree.evaluateOperation());
	});

	it('should generate the calculatin for operator "3+1+4"',function(){
		var tree = new Tree(new OperatorNode('+'),[new NumberNode('3'),new NumberNode('1')]);
		var bigTree = new Tree(new OperatorNode('+'),[tree,new NumberNode('4')]);
		assert.equal('( ( 3 + 1 ) + 4 )',bigTree.evaluateOperation());
	});

	it('should generate Node for operator',function(){
		var tree = new Tree(new OperatorNode('+'),[new NumberNode('3'),new NumberNode('1')])
		assert.equal('( three PLUS one )',tree.evaluateToWords());
	});

	it('should generate the calculatin for operator "3+1+4"',function(){
		var tree = new Tree(new OperatorNode('+'),[new NumberNode('3'),new NumberNode('1')]);
		var bigTree = new Tree(new OperatorNode('+'),[tree,new NumberNode('4')]);
		assert.equal('( ( three PLUS one ) PLUS four )',bigTree.evaluateToWords());
	});

	it('should generate the calculatin for operator "3+1"',function(){
		var tree = new Tree(new OperatorNode('+'),[new NumberNode('3'),new NumberNode('1')])
		assert.equal(4,tree.evaluate());
	});

	it('should generate the calculatin for operator "3+1+4"',function(){
		var tree = new Tree(new OperatorNode('+'),[new NumberNode('3'),new NumberNode('1')]);
		var bigTree = new Tree(new OperatorNode('+'),[tree,new NumberNode('4')]);
		assert.equal(8,bigTree.evaluate());
	});
})
