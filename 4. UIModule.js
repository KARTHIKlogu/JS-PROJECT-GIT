var UIModule = (function () {

	//private properrties

	var domElements = {
		//Indicators - text control
		timeLeft,//HTML element displaying time left
		//Test result
		wpm, cpm, accuracy, wpmchange, cpmchange, accuracychange,
		//user input
		textInput, nameInput,
		//test word
		content, activeWord,
		//modal
		model,
	}
	return {

		//getDomElements
		getDomElements: function () { },// It is a method which not returns Private propertyes, Instord of that it rebuild a copy of private propertys of "UI MODULE".It is "BECAUSE OBJECT ARE PASSED BY REFERENCE".

		//Indicators - text control
		updateTimeLeft: function () { },
		//Test result
		updateResults: function () { }, fillModal: function () { }, showModal: function () { },
		//user input
		inputFocus: function () { },
		isNameEmpty: function () { },
		flagNameInput: function () { },
		spacePress: function () { },
		enterPressed: function () { },
		emptyInput: function () { },
		getTypedWord: function () { },//wa addet this method

		//test word
		fillContent: function (x) { },
		formateCurrentWord: function () { },
		setActiveWord: function () { },
		deactivateCurrentWord: function () { },
		scroll: function () { },

		formatWord: function (wordObject, wordHTML) { },//We replaced "formateCurrentWord" with "formatWord : function(wordObject, wordHTML){}". 

		setActiveWord(index) { },//we replaced "setActiveWord() {}" with "setActiveWord(Index) {}" because to choose which html element should be passed a active  word.
	};
})();
