var http = require('http');

var mentorisms = [
	"I'm not naming any names but it was JASON PUNYON",
	"Tons of awesome performance work everyone -- great job! (Except for you, Punyon. BAD PUNYON!",
	"Punyon is a blocker and must be exploded. \"Blockers\" will reverse the direction of all lemmings that hit them, and cannot be reassigned unless first the ground under their feet is removed. (They can be exploded, though.)",
	"P U N Y O N",
	"TODO: insert mildly derogatory comment about Jason Punyon here",
	"When I get sad, I remember I am not Jason Punyon. Then I feel AWESOME.",
	"Did you know that Span Joy Noun is an anagram of Jason Punyon? Yeah.",
	"If you've ever wondered why we don't have flying cars and teleporters yet, remember that Jason Punyon has a degree in physics, too.",
	"I have started my own book* of Enchanting, Success Filled People Who Are Winning at Life, and Deserve Cakes. (Does not include Jason Punyon)",
	"Jason Punyon is the kindest, bravest, warmest, most wonderful human being I've ever known in my life.",
	"Interesting fact of the day: Jason Punyon is one bit short of a boolean.",
	"Jason Punyon joins our crack elite ninja NNPP strike team!",
	"I blame Punyon. Just look at him. JUST LOOK AT HIM!",
	"Punyon: still sucks",
	"Jason Punyon completes me.",
	"A day without Jason Punyon would be like a day without.. hey, wait a second, that'd be awesome.",
	"P.S. PUNYON SUCKS WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOoooooooooooooooooooo",
	"If Stack Exchange is a MMORPG, Jason Punyon is our epic mount.",
	"http://img19.imageshack.us/img19/5050/punyon.jpg",
	"Behold the first answer and first question of TEH MIGHTY PUNYON -- feast your eyes on the GLORY",
	"Suggested tagline change for Careers: \"Helping the world's best programmers get noticed by the world's best companies. And Jason Punyon.\"",
	"Behold the glory of Jason Punyon's homepage!",
	"All this Punyon obsession has made us vulnerable to our second worst programmer! Ack!",
	"PUNYON HAS AN ILLEGAL PING-PONG SERVE, DO NOT BELIEVE HIS LIES"
];

var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var sampleFromArray = function(arr) {
	return arr[getRandomInt(0, arr.length)]
};

var getMentorism = function() {
	return sampleFromArray(mentorisms);
};

var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end(getMentorism());
}).listen(port, '127.0.0.1');

console.log('Get your mentor on at http://localhost:' + port);