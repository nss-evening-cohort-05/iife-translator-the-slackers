var Translator = (function(oldTranslator) {
    var german = {
        "merry": "Fröhliche",
        "christmas": "Weihnachten",
        "and": "und",
        "happy": "Frohes",
        "new": "Neues",
        "year": "Jahre"
    };

    oldTranslator.getGermanWord = function(word) {
        return german[word];
    };

    return oldTranslator;
})(Translator || {});