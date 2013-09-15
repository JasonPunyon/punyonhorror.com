var http = require('http');
var twitter = require('ntwitter');

var mentorisms = [
	"I'm not naming any names but it was JASON PUNYON",
	"Tons of awesome performance work everyone -- great job! (Except for you, Punyon. BAD PUNYON!",
	"Punyon is a blocker and must be exploded.",
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
	"PUNYON HAS AN ILLEGAL PING-PONG SERVE, DO NOT BELIEVE HIS LIES",
	"That needs some sweet, hot, Punyon - on - Punyon action",
	"BAD IDEA PUNYON! {sprays water on punyon}",
	"Now maybe Punyon can learn to program THE EASY WAY",
	"Even Punyon could do this.",
	"I blame Punyon.",
	"KWAN PUNYON",
	"We should create a bot to serve the function of Punyon",
	"The Stack Exchange way is to write checks with your mouth that you can't cash, Punyon!",
	"DREAM BIGGER PUNYON!",
	"Yeah, stop sucking, PUNYON.",
	"P.S. Slap Punyon for me, he deserves it",
	"UNCOOL PUNYON",
	"I call that feeling \"Jason Punyon\"",
	"I think we should have an exhibition dance with Jason Punyon in NYC.",
	"I BLAME PUNYON",
	"Probably Punyon did it.",
	"The \"one million slaps for Jason Punyon\" will be fun",
	"HAPPY MILLIONTH QUESTION PUNYON",
	"I NOMINATE PUNYON",
	"So you have to kill wharf rats once in a while to level up, Punyon",
	"I will slap you, Punyon",
	"AHHHH PUNYON DESCENDS",
	"This is, like, web 101 punyon",
	"YEAH PUNYON",
	"I blame punyon",
	"You know what needs to be locked? punyon.",
	"And, I BLAME PUNYON",
	"But, I can tell you that whatever Punyon is doing is wrong",
	"I blame Punyon",
	"I CAN READ YOUR TINY MIND PUNYON",
	"Tou know who's a girl? Punyon.",
	"Punyon is an enigma, wrapped in a mystery, and slathered in secret sauce",
	"DEATH TO PUNYON!",
	"you trust Punyon around your wife? RISKY!",
	"I blame Punyon",
	"Make all the icons Jason Punyon, with an X through it",
	"A little creepy, but no creepier than working with Jason Punyon.",
	"awww -- Punyon ruins everything. Again.",
	"make Punyon do it",
	"shut your Punyon-hole!",
	"Damn, there was another Punyon Containment Area Breach.",
	"Damn, another Punyon Containment Area breach?",
	"PUNYON CONTAINMENT AREA BREACH!!",
	"Hey -- did you guys build a Punyon Containment Area(tm) in the new offices?",
	"Punyon: ruining everything since 2004(tm)",
	"WAY TO PISS IN OUR CORNFLAKES, PUNYON",
	"Trick question there is nothing worse than a Punyon.",
	"Punyon needs some Beibering -- HE NEEDS IT",
	"if Milli Vanilli taught me anything, it is to always Blame It on the Rain. haha just kidding it's Jason Punyon's fault as usual",
	"There is a level of minimum acceptable sucking. I call this the Punyon Baseline",
	"It's your own fault for being so awesome. WHY COULDN'T YOU BE TERRIBLE LIKE JASON PUNYON?",
	"You are required, I mean, allowed, to print out the weathergirls and tape it to Jason Punyon's monitor",
	"Although, really, beatings are too good for Punyon.. he deserves less",
	"I only brought him up to torture you guys. Well, Punyon, but there was some splash damage",
	"I can't wait to arrive in NYC on Nov 14th, get bed bugs, and deliver one million slaps to Jason Punyon as promised",
	"I like to call it \"number of times I will slap Jason Punyon the next time I see him\"",
	"I'm sorry you're incapable of processing my genius punyon! :)",
	"The other day punyon is like, \"I GOT AN IDEA, WHAT IF CAREERS WAS MADE OUT OF CHOCOLATE JELLO??!?!\"",
	"You can set the priorities on se work, your judgment is sound. Not like, say, Punyon.",
	"Arrrgh user leagues are down AGAIN? why can't we fix that? I BLAME PUNYON.",
	"I was like \"I better get this robots.txt edit just right!\" and then \"PUNYON!!!!\"",
	"I mean, look at Punyon. He knows exactly what he's doing.. making everyone else look good!",
	"Don't you be talkin' bout my Punyon! thass my DOG, dog!",
	"You can't defeat me, Punyon. I have become more powerful than you could possibly imagine.",
	"I'm always getting up in Punyon's grill saying \"... lemme axe you this, can you kick my ass?\"",
	"All this analysis for \"we need more RAM\"? Well, at least we identified some query culprits. I blame Punyon.",
	"AHHH! I see something funny! Oh wait, it's just Jason Punyon. my bad.",
	"Everything I've ever done on the internet for my entire life tells me that won't be true. But if you believe that.. more power to ya punyon.",
	"Fine, so long as I get to do it my way. I will use all my money for a good and noble purpose: to torment Jason Punyon",
	"And, if they misbehave we'll send them email photos of Punyon. \"MY EYES! IT BURNS!! AAHHHHHH!\""
];

//http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
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
}).listen(port);

var tweeter = new twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var tweet = function() {
	tweeter
	.verifyCredentials(function(err, data) { /* NOP */ })
	.updateStatus(
		getMentorism(),
		function(err, data) { /*NOP*/ }
	);
}

var keepAlive = function() {
	http.get("http://punyonhorror.com", function(res){
		console.log("Kept alive.")
	})
}

tweet();
setInterval(tweet, process.env.TWEET_INTERVAL);
setInterval(keepAlive, 300000);

console.log('Get your mentor on at http://localhost:' + port);