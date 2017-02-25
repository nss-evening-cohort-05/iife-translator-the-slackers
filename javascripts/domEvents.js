var Translator = (function(oldTranslator) {
    oldTranslator.determineLanguage = function(event) {
        var radioList = event.target.previousElementSibling.children;
        // console.log(radioList.length); returned 4 for the length of the target.previousElementSibling.children
        for (i = 0; i < radioList.length; i++) {
            if (radioList[i].checked === true) {
                var language = radioList[i].id // takes the id from what is checked as true
                if (language === "german") {
                    oldTranslator.translateGerman();
                } else if (language === "gaelic") {
                    oldTranslator.translateGaelic();
                } else if (language === "italian") {
                    oldTranslator.translateItalian();
                } else if (language === "latin") {
                    oldTranslator.translateLatin();
                } else {
                    alert("Select a language");
                }
            }
        }
    }

    oldTranslator.translateGerman = function() {
        var userString = userInputField.value
        userString = userString.toLowerCase()
            // console.log(userString);  returned value from text field
        var userStringArray = userString.split(" ");
        var userStringOutput = [];
        for (i = 0; i < userStringArray.length; i++) {
            userStringOutput.push(oldTranslator.getGermanWord(userStringArray[i]))
        }

        var printedOutput = userStringOutput.join(" ");
        output.innerHTML = printedOutput;
    }
    oldTranslator.translateGaelic = function() {
        var userString = userInputField.value
        userString = userString.toLowerCase()
            // console.log(userString);  returned value from text field
        var userStringArray = userString.split(" ");
        var userStringOutput = [];
        for (i = 0; i < userStringArray.length; i++) {
            userStringOutput.push(oldTranslator.getGaelicWord(userStringArray[i]))
        }

        var printedOutput = userStringOutput.join(" ");
        output.innerHTML = printedOutput;
    }
    oldTranslator.translateItalian = function() {
        var userString = userInputField.value
        userString = userString.toLowerCase()
            // console.log(userString);  returned value from text field
        var userStringArray = userString.split(" ");
        var userStringOutput = [];
        for (i = 0; i < userStringArray.length; i++) {
            userStringOutput.push(oldTranslator.getItalianWord(userStringArray[i]))
        }

        var printedOutput = userStringOutput.join(" ");
        output.innerHTML = printedOutput;
    }
    oldTranslator.translateLatin = function() {
        var userString = userInputField.value
        userString = userString.toLowerCase()
            // console.log(userString);  returned value from text field
        var userStringArray = userString.split(" ");
        var userStringOutput = [];
        for (i = 0; i < userStringArray.length; i++) {
            userStringOutput.push(oldTranslator.getLatinWord(userStringArray[i]))
        }

        var printedOutput = userStringOutput.join(" ");
        output.innerHTML = printedOutput;
    }

    return oldTranslator;
})(Translator || {});




// console.log("hi", e);
// 		if (radioGerman.checked === true){
// 			// translateGerman();
// 			console.log("hi");
// 		} else if (radioGaelic.checked === true){
// 			translateGaelic();
// 		} else if (radioItalian.checked === true){
// 			translateItalian();
// 		} else if (radioLatin.checked === true){
// 			translateLatin();
// 		} else {
// 			alert("Select a language");
// 		}