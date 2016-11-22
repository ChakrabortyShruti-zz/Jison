var jison = require('jison');
var fs = require('fs');
var grammar = fs.readFileSync('./grammar.jison','utf8');
var parser = new jison.Parser(grammar);

var inputText = process.argv[2];
var parseTree = parser.parse(inputText);
var numRepresentation = parseTree.evaluateToWords();

console.log(numRepresentation);