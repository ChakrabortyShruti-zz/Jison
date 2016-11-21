var NumberNode = function(number){
	this.value = number;
}

NumberNode.prototype = {
	evaluate : function(){
		return this.value;
	}
}

module.exports = NumberNode;