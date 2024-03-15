var dataModule = (function () {
	var appData = {
		indicators: { testStarted: false, testEnded: false, timeLeft: 0, totalTestTime: 0 },
		Result: { wpm: 0, cpm: 0, accuracy: 0, wpmChange: 0, cpmChange: 0, accuracyChange: 0, numOfCorrectWords: 0, numOfCorrectCharacters: 0, numOfTestCharacters: 0 },
		word: {
			currentWordIndex: 0,//INDEX is a data, Due to that it is seted in "DATA MODULE".But it is used and operated in "UI MODULE".So it is belongs to "UI MODULE".  
			testWords: [],//this  going to be an array where we  place all the words which we going to be extract from the clint list. clint list is a string of words seprated by spaces and each wors should be converted as array of the strings. Example : testWords ["hai","Shuresh","it","is","nice","to","meet","you"].
			currentWord: {}//We added object "current word" which carry a object "VALUE" in it ."Value" object carry a two parameters "correct","user".
		}
	};
	var word = function () { };//we added a constructor in the name of "word"
	word.prototype.update = function (value) { };//We added a method "update" to the prototype of the constructor "word"

	return {
		// Indicators - Test Control
		setTestTime: function (x) { },// set the total test time to x
		initializeTimeLeft: function () { },// will initilize tie time left
		startTest: function () { }, // startTest will start the test and change the value of var "testStarted" to "true".
		endTest: function () { },// endTest will end the test and change the value of var "testEnded" to "true".
		reduceTime: function () { }, // reduceTime will reduse the time var "timeLeft" by "1"
		timeLeft: function () { },//check if there is time left to continue the test
		testEnded: function () { },//check if the test started or not
		testStarted: function () { },// check if the test started or not
		getTimeLeft: function () { },//gets time left : appData.timeLeft.
		//result
		calculateWpm: function () { },// will calculate the words per minits and store the data inside var "WPM" and also it will calculate var "WPMCHANGE" and stores in "WPMCHANGE". 
		calculateCpm: function () { },//calculate the cpm and cpmChange and store it in var cpm and var cpmChange.
		calculateAccuracy: function () { },//calculate the accuracy and accuracyChange and store it in var accuracy and var accuracyChange.

		//test word
		fillListOfTestWorde: function (textNumber) { },// this will take the parameter because user or clint they want abble to pass a parameter to this function, in parameter providing number and choose the list according to the number given, This is how they pass input to fill the arrey of privat variable "testWords".

		getListOfTestWords: function () { }, // this function will return the value of privat variable "testWords". means return the list of test words. 

		moveToNewWord: function () { },// we added this method to update the current word by creating an instance of word class

		updateCurrentWord: function (value) { }// we added this method, this method will take the value of user input by accesing "user" and it will update the "currect".


	};
})();