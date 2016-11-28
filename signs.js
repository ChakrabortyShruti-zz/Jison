var signs = {'-':{	
				type:'-',
				toWords:"MINUS",
				evaluate : function(l,r){return l-r;}
			},
			'+':{	
				type:'+',
				toWords:"PLUS",
				evaluate : function(l,r){return l+r;}
			},
			'*':{
				type:'*',
				toWords:"TIMES",
				evaluate : function(l,r){return l*r;}
			},
			'=':{
				type:'=',
				toWords:"EQUALS",
				evaluate : function(l,r){return l=r;}
			}};

module.exports = signs;