var IdentifierNode = require('./identifierNode.js');
var identifierNode = new IdentifierNode();
var signs = require('./signs.js');

var TreeExaminer = function(tree) {
	this.tree = tree
	this.variableStore = {};
}

TreeExaminer.prototype = {
	evaluate : function(trees){
		
	}
}

module.exports = TreeExaminer;