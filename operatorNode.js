var signs = {'-' : "MINUS", '+' : "PLUS", '*' : "TIMES"};

var OperatorNode = function (operator, left, right) {
	this.operator = operator;
	this.left = left;
	this.right = right;
}

OperatorNode.prototype = {
	evaluate : function(){
		return ['(',this.left.evaluate(),this.operator,this.right.evaluate(),')'].join(' ');
	},

	evaluateToWords : function(){
		return ['(',this.left.evaluateToWords(),signs[this.operator],this.right.evaluateToWords(),')'].join(' ')
	}
}

module.exports = OperatorNode;