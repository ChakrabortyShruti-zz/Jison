var IdentifierNode = require('./identifierNode.js');
var identifierNode = new IdentifierNode();
var signs = require('./signs.js');

var TreeExaminer = function(tree) {
	this.tree = tree
	this.variableStore = {};
}

TreeExaminer.prototype = {
	putAssignmentValues : function(){

	},

	evaluate : function(){
		
	}
}

module.exports = TreeExaminer;