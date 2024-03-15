var wordsModule = (function () {
	//privat property
	var word = [
		//In side ower array we have ower three list stoerd as array 
		"word1 word2 word3 word4 etc",//list 1
		"word1 word2 word3 word4 etc",// list 2
		"word1 word2 word3 word4 etc"// list 3
	];
	return {
		getWords: function (textNumber) {// Takest the parameter which will specifices the  number of a particuler list of "word".
			return word[textNumber];
		}
	};

})();