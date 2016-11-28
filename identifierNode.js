var IdentifierNode = function(variable){
	this.value = variable;
}

IdentifierNode.prototype = {
	evaluate : function(){
		return this.value;
	}
}

module.exports = IdentifierNode;
