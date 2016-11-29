var jison = require('jison');
var fs = require('fs');
var grammar = fs.readFileSync('./lib/assignment.jison','utf8');
var lt = new lookupTable();
var parser = new jison.Parser(grammar);

var inputText = process.argv[2];
var parseTree = parser.parse(inputText);
evalute(trees,lookupTable)
// var numRepresentation = parseTree.evaluateToWords();

// console.log('++',parseTree);
// console.log(numRepresentation);