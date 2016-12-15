var Discord = require("discord.js");
var bot = new Discord.Client();
var pos = require('pos');

var lastWord = "";
var mock = false;
var lastMessage = "";

bot.on("message", msg => {

    if (msg.content.startsWith("ping")) {
        msg.channel.sendMessage("pong!");
    }
    if (mock && (msg.author.username.startsWith("MASE") || msg.author.username.startsWith("MemeLordWeston"))) {
    	// msg.channel.sendMessage("blah blah " + msg.content + " blah");
        msg.author.sendMessage(yourFace(msg.content))
         .then()
         .catch(console.log);;
    }

    if (msg.content.startsWith("!tableflip")) {
    	lastWord = "";
    	msg.channel.sendMessage("(╯°□°）╯ ︵ ┻━┻");
    }
    if (msg.content.startsWith("!calm")) {
    	if (lastWord == "") {
	    	msg.channel.sendMessage("┬─┬ノ( º _ ºノ)");

    	} else {
    		msg.channel.sendMessage(lastWord + " ノ( º _ ºノ)");

    	}
    }

    if (msg.content.startsWith("!mock") && (msg.author.username == "lunarca" || msg.author.username == "shakunetsu")) {
    	mock = !mock;
    	if (mock) {
    		msg.channel.sendMessage("Now mocking the kids");

    	} else {
    		msg.channel.sendMessage("Okay I'll play nice");
    	}

    }

    if (msg.content.startsWith("!face")) {
    	// msg.channel.sendMessage("Your face is a " + lastMessage);
        msg.channel.sendMessage(yourFace(lastMessage));
    }

    if (msg.content.startsWith("!flip")) {
    	var messageContent = msg.content.substr(msg.content.indexOf(' ')+1)
    	lastWord = messageContent;
    	msg.channel.sendMessage("(╯°□°）╯︵ " + flipString(messageContent));
    }

    if ((msg.author != bot.user) && (!msg.content.startsWith("!"))) {
	    lastMessage = msg.content;

    }

    if (msg.content.startsWith("!give")) {
        msg.channel.sendMessage(" ༼ つ ◕\\_◕ ༽つ Give " + msg.content.substr(msg.content.indexOf(' ')+1) + " ༼ つ ◕\_◕ ༽つ")
    }
    if (msg.content.startsWith("!help")) {
        help(msg);
    }
    if (msg.content.startsWith("!wednesday")) {
        msg.channel.sendMessage("Fine @YaBoiiWeston#9333 here it is.");
        msg.channel.sendMessage("https://www.youtube.com/watch?v=du-TY1GUFGk");
    }
});

bot.on('ready', () => {
  bot.user.setStatus("online", "Your Face");
  console.log('I am ready!');
});

bot.login(process.env.MOCKBOT_LOGIN);

function flip() {
	var result = flipString(document.f.original.value);
	document.f.flipped.value = result;
        document.getElementById('tweet').href = "http://twitter.com/home?status="+result;
}

function flipString(aString) {
	aString = aString.toLowerCase();
	var last = aString.length - 1;
	var result = "";
	for (var i = last; i >= 0; --i) {
		result += flipChar(aString.charAt(i))
	}
	return result;
}

function flipChar(c) {
	if (c == 'a') {
		return '\u0250'
	}
	else if (c == 'b') {
		return 'q'
	}
	else if (c == 'c') {
		return '\u0254'  
	}
	else if (c == 'd') {
		return 'p'
	}
	else if (c == 'e') {
		return '\u01DD'
	}
	else if (c == 'f') {
		return '\u025F' 
	}
	else if (c == 'g') {
		return 'b'
	}
	else if (c == 'h') {
		return '\u0265'
	}
	else if (c == 'i') {
		return '\u0131'//'\u0131\u0323' 
	}
	else if (c == 'j') {
		return '\u0638'
	}
	else if (c == 'k') {
		return '\u029E'
	}
	else if (c == 'l') {
		return '\u05DF'
	}
	else if (c == 'm') {
		return '\u026F'
	}
	else if (c == 'n') {
		return 'u'
	}
	else if (c == 'o') {
		return 'o'
	}
	else if (c == 'p') {
		return 'd'
	}
	else if (c == 'q') {
		return 'b'
	}
	else if (c == 'r') {
		return '\u0279'
	}
	else if (c == 's') {
		return 's'
	}
	else if (c == 't') {
		return '\u0287'
	}
	else if (c == 'u') {
		return 'n'
	}
	else if (c == 'v') {
		return '\u028C'
	}
	else if (c == 'w') {
		return '\u028D'
	}
	else if (c == 'x') {
		return 'x'
	}
	else if (c == 'y') {
		return '\u028E'
	}
	else if (c == 'z') {
		return 'z'
	}
	else if (c == '[') {
		return ']'
	}
	else if (c == ']') {
		return '['
	}
	else if (c == '(') {
		return ')'
	}
	else if (c == ')') {
		return '('
	}
	else if (c == '{') {
		return '}'
	}
	else if (c == '}') {
		return '{'
	}
	else if (c == '?') {
		return '\u00BF'  
	}
	else if (c == '\u00BF') {
		return '?'
	}
	else if (c == '!') {
		return '\u00A1'
	}
	else if (c == "\'") {
		return ','
	}
	else if (c == ',') {
		return "\'"
	}
	else if (c == '.') {
		return '\u02D9'
	}
	else if (c == '_') {
		return '\u203E'
	}
	else if (c == ';') {
		return '\u061B'
	}
	else if (c == '9') {
		return '6'
	}
	else if (c == '6') {
		return '9'
	}
	return c;
}

function parseContractions(input) {
    no_s = input.replace("'s ", " is ");
    no_m = no_s.replace("'m ", " is ");
    no_t = no_m.replace("'t ", " not ");
    return no_t;
}


function yourFace(input) {

    var no_contractions = parseContractions(input);

    var words = new pos.Lexer().lex(no_contractions);
    var tagger = new pos.Tagger();
    var taggedWords = tagger.tag(words);

    var verb = word;

    for (i in taggedWords) {
        var taggedWord = taggedWords[i];
        var word = taggedWord[0];
        var tag = taggedWord[1];
        if (tag.startsWith("VB")) {
            verb = word;
            break;
        }
    }
    if (verb != null) {

        return "Your face" + no_contractions.substr(no_contractions.indexOf(" "+verb));
    } else {
        return "Your face is a " + input;
    }
}

function help(message) {
    var help = "!help\t-- this help file\n" +
        "!face\t-- Your face is a ...\n" +
        "!tableflip\t-- Flip a table\n"+
        "!flip [words]\t-- Flip a word\n"+
        "!calm\t-- Reset flipped things\n"+
        "!give\t-- ༼ つ ◕\\_◕ ༽つ GIVE SA\n"+
        "!wednesday\t-- FINE EASTON HERE IT IS\n";
    message.channel.sendMessage(help);
}