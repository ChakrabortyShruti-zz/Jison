var OperatorNode = function (operator, left, right) {
	this.operator = operator;
	this.left = left;
	this.right = right;
}

OperatorNode.prototype = {
	evaluate : function(){
		return ['(',this.left.evaluate(),this.operator,this.right.evaluate(),')'].join(' ');
	}
}

module.exports = OperatorNode;