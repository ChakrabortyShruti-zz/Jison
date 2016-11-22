var assert = require('assert');
var jison = require('jison');
var fs = require('fs');

var grammar = fs.readFileSync('./grammar.jison','utf8');

var parser = new jison.Parser(grammar);

describe("Grammar",function() {
	it("for 2+3",function(){
		var parseTree = parser.parse('2+3');
		assert.equal('( 2 + 3 )',parseTree.evaluate());
	});

	it("for 2+3 in words",function(){
		var parseTree = parser.parse('2+3');
		assert.equal('( two PLUS three )',parseTree.evaluateToWords());
	});
});
