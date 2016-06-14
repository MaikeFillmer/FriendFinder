// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
//var orm 			= require ("../config/orm.js");
var friends 		= [];
var MF	 			= {
						name: "maike",
						photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAidAAAAJDYyYmNlMTYzLTI2ZTUtNDI0MS1iYzVlLWVkZGFlMzRhN2Q5Mg.jpg",
						scores: [5,4,3,2,1,2,3,5,4,1]
					}
var LL 				= {
						name: "Lisa",
						photo: "https://work2futurefoundation1.org/wp-content/uploads/2015/06/epic-young-adult.jpg",
						scores: [2,4,5,2,5,2,3,2,1,1]
					}

					friends.push(MF, LL);

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
		var totalDifference = 0;
		var diff = [];
		for(i=0; i<friends.length;i++){
			var current = friends[i];
			for(j=0;j<character.scores.length;j++){
				totalDifference += Math.abs(character.scores[j] - current.scores[j]);
			}
			diff.push(totalDifference);
			totalDifference = 0;

		}

		console.log(diff);
		var min = diff[0];
		var minIndex = 0;
		for(i=0;i<diff.length;i++){
			if(diff[i]<min){
				minIndex = i;
				min = diff[i];
			}
		}

		console.log(minIndex);
		console.log(friends[minIndex]);


		// Then send it to the ORM to "save" into the DB.
		friends.push(character);
		res.send(friends[minIndex]);

		



	})
}
