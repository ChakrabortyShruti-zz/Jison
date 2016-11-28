var IdentifierNode = function(variable){
	this.operator = variable;
	this.type = "identifier";
}

IdentifierNode.prototype = {
	evaluate : function(){
		console.log('in identifier');
		return this.operator;
	}
}

module.exports = IdentifierNode;
