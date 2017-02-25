var Translator = (function(oldTranslator){
	var gaelic = {
		"merry" : "nollaig",
		"christmas" : "Shona",
		"and": "agus",
		"happy" : "athbhliain",
		"year" : "shona"
	}
	oldTranslator.getGaelicWord = function(word) {
		return gaelic[word];
	}
	return oldTranslator;
}) (Translator || {});