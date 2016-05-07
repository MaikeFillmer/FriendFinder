// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
//var orm 			= require ("../config/orm.js");
var friends 		= [];
var MF	 			= {
						name: "maike",
						photo: "URL",
						scores: [5,4,3,2,1,2,3,5,4,1]
					}

					friends.push(MF);

// Routes
// =============================================================
module.exports = function(app){

	// Display all characters then provides JSON
	app.get('/api/friends', function(req, res){

				res.json(friends); });
			

	// If a user sends data to add a new character...
	app.post('/api/friends', function(req, res){

		// Take the request...
		var character = req.body;
		//compatibility logic here

		//have a loop
		//inside, check the total difference between newly added user and the indexed user in the msql database
		//save the difference in an array
		//check the array for the lowest value
		//spit out the index of the person with the lowest difference and return that as the data value.
		
		// Then send it to the ORM to "save" into the DB.
		orm.addCharacter(character, function(data){
		});



	})
}
