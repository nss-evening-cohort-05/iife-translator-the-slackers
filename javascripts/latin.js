var Translator = (function(oldTranslator){
  var latin = {
    "merry" : "epulari",
    "christmas" : "Christmas",
    "and" : "et",
    "happy" : "laeta",
    "new" : "novus",
    "year" : "anno"
  };

  oldTranslator.getLatinWord = function(word){
    return latin[word];
  }

  return oldTranslator;

})(Translator || {});