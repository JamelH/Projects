

//some
//array of fortune cookies
var fortuneCookies = [ "Conquer your fears or they will conquer you",
"Rivers need springs.",
"Do not fear what you don't know",
"You will have a pleasent surprise",
"Whenever possible, keep it simple",

];

//encapsulation
//exports to have this function visible outside this module
exports.getFortune = function(){
	var idx = Math.floor(Math.random()*
		fortuneCookies.length);
	return fortuneCookies[idx];
};