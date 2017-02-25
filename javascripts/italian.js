var Translator = (function(oldTranslator){
  var italian = {
    "Merry":"buon",
    "Christmas":"Natale",
    "and":"e",
    "Happy":"Felice",
    "New":"Anno",
    "Year":"nuovo"
    }
    oldTranslator.getItalianWord = function(word){
      return italian[word];
    }
})(Translator || {});
