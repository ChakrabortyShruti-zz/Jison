var signs = require('./signs.js');

var OperatorNode = function (operator) {
	this.operator = operator;
	this.type = 'operator';
}

OperatorNode.prototype = {
	evaluateOperation : function(childNodes){
		return ['(',childNodes[0].evaluateOperation(),signs[this.operator].type,childNodes[1].evaluateOperation(),')'].join(' ');
	},

	evaluateToWords : function(childNodes){
		return ['(',childNodes[0].evaluateToWords(),signs[this.operator].toWords,childNodes[1].evaluateToWords(),')'].join(' ')
	},

	evaluate : function (childNodes) {
	    return signs[this.operator].evaluate(childNodes[0].evaluate(),childNodes[1].evaluate());
	}
}

module.exports = OperatorNode;