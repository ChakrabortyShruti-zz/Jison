var numConvertor = require('number-to-words');

var NumberNode = function(number){
	this.value = number;
}

NumberNode.prototype = {
	evaluate : function(){
		return this.value;
	},

	evaluateToWords : function(){
		return numConvertor.toWords(this.value);
	}
}

module.exports = NumberNode;