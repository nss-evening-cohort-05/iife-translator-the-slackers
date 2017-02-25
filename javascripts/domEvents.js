var Translator = (function(oldTranslator) {
	oldTranslator.determineLanguage = function(event){
		var radioList = event.target.previousElementSibling.children;
		// console.log(radioList.length); returned 4 for the length of the target.previousElementSibling.children
		for (i=0; i < radioList.length; i++){
			if (radioList[i].checked === true){
				var language = radioList[i].id // takes the id from what is checked as true
						if (language === "german"){
							translateGerman();
						} else if (language === "gaelic"){
							translateGaelic();
						} else if (language === "italian"){
							translateItalian();
						} else if (language === "latin"){
							translateLatin();
						} else {
							alert("Select a language");
						}
			}
		} 
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