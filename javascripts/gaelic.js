var Translator = (function(oldTranslator){
	var gaelic = {
		"merry" : "nollaig",
		"christmas" : "Shona",
		"and": "agus",
		"happy" : "athbhliain",
		"new" : "soith",
		"year" : "shona"
	}
	oldTranslator.getGaelicWord = function(word) {
		return gaelic[word];
	}
	return oldTranslator;
}) (Translator || {});