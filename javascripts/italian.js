var Translator = (function(oldTranslator){
  var italian = {
    "merry":"buon",
    "christmas":"Natale",
    "and":"e",
    "happy":"Felice",
    "new":"Anno",
    "year":"nuovo"
    }
    oldTranslator.getItalianWord = function(word){
      return italian[word];
    }
    return oldTranslator;
})(Translator || {});
