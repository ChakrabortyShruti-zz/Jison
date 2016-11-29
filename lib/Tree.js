var Tree = function(parent,children) {
	this.parent = parent;
	this.children = children;
}

Tree.prototype =  {
	evaluate : function () {
	    return this.parent.evaluate(this.children);
	},

	evaluateOperation : function () {
	    return this.parent.evaluateOperation(this.children);
	},

	evaluateToWords : function () {
	    return this.parent.evaluateToWords(this.children);
	}
};
module.exports = Tree;
