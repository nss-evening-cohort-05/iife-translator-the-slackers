	var radioGerman = document.getElementById("german");
	var radioGaelic = document.getElementById("gaelic");
	var radioItalian = document.getElementById("italian");
	var radioLatin = document.getElementById("latin");

	var button = document.getElementById("btn");
	button.addEventListener("click", Translator.determineLanguage)

	var userInputField = document.getElementById("userText");
	var output = document.getElementById("output");