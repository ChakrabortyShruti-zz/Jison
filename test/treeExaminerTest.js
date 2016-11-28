var assert = require('assert');
var jison = require('jison');
var fs = require('fs');

var grammar = fs.readFileSync('./assignment.jison','utf8');
var TreeExaminer = require('../treeExaminer.js');


var parser = new jison.Parser(grammar);

describe("Tree Examiner",function() {
	it("should store the value of identifiers as {x:10}",function(){
		var tree = parser.parse('x=10;5+x+2;');
		var treeExaminer = new TreeExaminer(tree);
		treeExaminer.putAssignmentValues();
		assert.deepEqual({x:10},treeExaminer.variableStore);
	});

	it("should store the value of identifiers as {x:10,y:20}",function(){
		var tree = parser.parse('x=10;y=20;5+x+2;');
		var treeExaminer = new TreeExaminer(tree);
		treeExaminer.putAssignmentValues();
		assert.deepEqual({x:10,y:20},treeExaminer.variableStore);
	});

	it("should evaluate 'x=10;5+x;' to 15",function(){
		var tree = parser.parse('x=10;5+x;');
		var treeExaminer = new TreeExaminer(tree);
		treeExaminer.putAssignmentValues();
		assert.equal(15,treeExaminer.evaluate());
	});

	it("should evaluate 'x=10;5+x+2;' to 17",function(){
		var tree = parser.parse('x=10;5+x+2;');
		var treeExaminer = new TreeExaminer(tree);
		treeExaminer.putAssignmentValues();
		assert.equal(17,treeExaminer.evaluate());
	});
});
