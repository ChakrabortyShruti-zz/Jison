var IdentifierNode = require('./identifierNode.js');
var identifierNode = new IdentifierNode();

var signMap = {
	'+' : function(l,r){return l+r;}
}

var TreeExaminer = function(tree) {
	this.tree = tree
	this.variableStore = {};
}

TreeExaminer.prototype = {
	putAssignmentValues : function(){
		var childNodes = this.tree.childNodes;
		for(var i=0;i<childNodes.length;i++){
			if(childNodes[i].operator == '=')
				this.variableStore[childNodes[i].left.evaluate()] = childNodes[i].right.evaluate();
		}
	},
	evaluate : function(){
		var result;
		var childNodes = this.tree.childNodes;
		for(var i=0;i<childNodes.length;i++){
			if(childNodes[i].operator == '+'){
				// var operatorEvaluation = signMap[childNodes[i].operator];
				// 	console.log('-------',childNodes[i]);
				// var leftChild = childNodes[i].left instanceof IdentifierNode 
				// 	? this.variableStore[childNodes[i].left.evaluate()] 
				// 	: childNodes[i].left.evaluate();
				// var rightChild = childNodes[i].right instanceof IdentifierNode 
				// 	? this.variableStore[childNodes[i].right.evaluate()] 
				// 	: childNodes[i].right.evaluate();
				// console.log(leftChild,rightChild);
				// result = operatorEvaluation(leftChild,rightChild);
			}
		}
		// return result;
	}
}

module.exports = TreeExaminer;