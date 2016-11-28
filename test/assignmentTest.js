var assert = require('assert');
var jison = require('jison');
var fs = require('fs');

var grammar = fs.readFileSync('./assignment.jison','utf8');

var parser = new jison.Parser(grammar);

describe("Grammar with assignment operator",function(){

	it.skip("should produce a parseTree for 'x=10;'",function(){
		var parseTree = parser.parse('x=10;');
		var expectedParseTree = [{parent: {operator : '=', type:'operator'},children : [{value:'x'},{value:10}]}];
		assert.deepEqual(expectedParseTree,parseTree);
	});

	it("should produce a parseTree for '5+x+2;'",function(){
		var parseTree = parser.parse('5+x+2;');
		var expectedParseTree = [
			{parent:
				{
					operator:'+',
					type:'operator'
				},
				children:[
				{parent:
					{
						operator:'+',
						type:'operator'
					},
					children:[
					{value:5},
					{value:'x'}
					]
				},
				{value:2}
				]
			}
		];
		assert.deepEqual(expectedParseTree, parseTree);
	});

	it.skip("should produce a parseTree for 'x=10;5+x+2;'",function(){
		var parseTree = parser.parse('x=10;5+x+2;');
		var expectedParseTree =[
			{parent:
				{
					operator:'=',
					type:'operator'
				},
				children:[{value:'x'},{value:10}]
			},
			{parent:
				{
					operator:'+',
					type:'operator'
				},
				children:[
					{value:5},
					{parent:
						{
							operator:'+',
							type:'operator'
						},
						children:[{value:'x'},{value:2}]
					}
				]
			}];
		assert.deepEqual(expectedParseTree, parseTree);

	})
});


