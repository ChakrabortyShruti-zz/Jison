var fs = require("fs");
var Parser = require("jison").Parser;
var formatter = require("./formatter.js");

var grammar = fs.readFileSync("grammar.jison", "utf8");

var parser = new Parser(grammar);
parser.generate();

var parseTree = parser.parse(process.argv[2]);
console.log(formatter(parseTree));
