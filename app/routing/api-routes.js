// Your api-routes.js file should include two routes:

//     A GET route with the url /api/friends. This will be used to display a JSON of all possible friends
//     A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friendsArray = require('../data/survey-data.js');
var path = require('path');

var comparisons = [];

module.exports = function(app){

app.get('/api/friends', function(req, res){
    res.json(friendsArray);
});

app.post('/api/friends', function(req, res){        
        friendsArray.push(req.body);

        console.log("friend finder submitted!"); 
        console.log(req.body);

// res.json(true);
//add answer comparison logic.
        var formData = req.body;

        for(i=0;i<friendsArray.length;i++){
                var compatibility=0;
                var diff=0;

                for (x=0;x<formData.scores.length;x++){
                      if (formData.scores[x] - friendsArray[i].scores[x]){
                        compatibility++;
                      } 

                }


                var friend = {
                        name: friendsArray[i].name,
                        compatibility: compatibility
                }
                console.log('Friend: %s', friend.name);
                console.log('Compatibility: %s', friend.compatibility);
                comparisons.push(friend);
       }
});

// app.post('/api/clear', function(req, res){
//        // Empty out the arrays of data
//        friendsArray = [];

//        console.log(friendsArray);
//    })

}

