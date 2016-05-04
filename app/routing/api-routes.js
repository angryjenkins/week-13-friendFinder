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

        console.log("friend finder submitted! formData below"); 
        var formData = req.body;

        console.log(formData);

        res.json(formData);
        friendsArray.push(formData);

// res.json(true);
//add answer comparison logic.

});

// app.post('/api/clear', function(req, res){
//        // Empty out the arrays of data
//        friendsArray = [];

//        console.log(friendsArray);
//    })

}

