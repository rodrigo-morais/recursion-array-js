function times(word) {
	if(word.length === 0) {
		return [];
	}
	else {
		var freq = word.filter(function(letter) { return letter === word[0]; }).length;
		return [word[0], freq].concat(times(word.filter(function(letter) {
			return letter !== word[0];
		})));
	}
}

var word = 'ABAABBAB'.split('');
console.log('The expression "ABAABBAB" returns: ' + times(word));

word = 'ACBCAACEEFBBFFACB'.split('');
console.log('The expression "ACBCAACEEFBBFFACB" returns: ' + times(word));