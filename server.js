// server.js

// BASE SETUP
// =============================================================================

var mongoose	= require('mongoose');
mongoose.connect('mongodb://gn6me:NyanCat99@ds117711.mlab.com:17711/malfapi');

var druid 		= require('./app/models/druid.js');


// call the packages we need
var express		= require('express');        // call express
var app			= express();                 // define our app using express
var bodyParser 	= require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests

router.use(function(req, res, next) {
	console.log('Something is happening.');
	next(); //make sure we don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// on routes that end in /druids

router.route('/druids')

	// create a druid
	.post(function(req, res) {
		var druid = new Druid();

		druid.name = req.body.name;

		// save and check for errors

		druid.save(function(err) {
			if (err)

				res.send(err);
			res.json({ message: 'Druid created!' });
		});
	});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);