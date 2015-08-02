var express = require('express');
var $ = require('jQuery');
//////var jsdom = require('jsdom').jsdom

var app = express();
var fortune = require('./libs/fortune.js');

var handlebars = require('express-handlebars')
.create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.set('port', process.env.Port || 3000);

//app.use(express.static(_dirname + 'public'));




//middleware to detect test=1
app.use(function(req, res, next){
	res.locals.showTests = 
	app.get('env') !== 'production' &&
	req.query.test === '1';
	next();
})



//added some routes for home page and about page
//app.get is how set up routes
app.get('/', function(req, res){
	res.render('home');
});

app.get('/about', function(req, res){
	res.render('about', { fortune: fortune.getFortune()});
});



//app.get is the method in which we're adding routes

//custom 404 page
//req is an object containing information about the HTTP request that raised the event.
// In response to req, you use res to send back the desired HTTP response.
app.use(function(req, res){
	res.status(404);
	res.send('404 --Not Found');
});

//custom 500 page
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log("Express started on http://local:"+
		app.get('port') + '; press CTRL-C to terminate.');
		
});