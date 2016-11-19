var formatter = function(inputString) {
	var StringMapper = {
		'[' : '(',
		']' : ')',
		',' : '',
		'"' : ''
	};
	var tokenizedString = JSON.stringify(inputString).split("");
	tokenizedString.forEach(function(d,i){
		if(Object.keys(StringMapper).indexOf(d) != -1)
			tokenizedString[i] = StringMapper[d];
	});
	return tokenizedString.join('');
}

module.exports = formatter;