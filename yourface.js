var pos = require('pos');

function yourFace(input) {
    var words = new pos.Lexer().lex(input);
    var tagger = new pos.Tagger();
    var taggedWords = tagger.tag(words);

    var verb = word;

    for (i in taggedWords) {
        var taggedWord = taggedWords[i];
        var word = taggedWord[0];
        var tag = taggedWord[1];
        console.log(word + " -- " + tag);
        if (tag.startsWith("VB")) {
            verb = word;
            break;
        }
    }
    if (verb != null) {

        return "Your face" + input.substr(input.indexOf(" "+verb));
    } else {
        return "Your face is a fail";
    }
}

console.log(yourFace(process.argv[2]));