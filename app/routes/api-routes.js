// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var orm 			= require ("../config/orm.js");


// Routes
// =============================================================
module.exports = function(app){

	// Display all characters then provides JSON
	app.get('/api/friends', function(req, res){

			var data =  orm.allCharacters(function(data){
				res.json(data); });
			};

	});

	// If a user sends data to add a new character...
	app.post('/api/friends', function(req, res){

		// Take the request...
		var character = req.body;

		// Then send it to the ORM to "save" into the DB.
		orm.addCharacter(character, function(data){
		});

		//compatibility logic here

	})
}
